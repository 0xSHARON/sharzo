const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const { exec, execFile } = require('child_process');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    icon: path.join(__dirname, 'icon.ico'),
    backgroundColor: '#0a0a0a',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    frame: false, // Ensure frame is false for custom buttons
    resizable: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0a0a0a',
      symbolColor: '#silver'
    }
  });

  mainWindow.loadFile('index.html');
  // mainWindow.setMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// IPC handlers for window controls
ipcMain.on('window-minimize', () => { if (mainWindow) mainWindow.minimize(); });
ipcMain.on('window-maximize', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) mainWindow.unmaximize();
    else mainWindow.maximize();
  }
});
ipcMain.on('window-close', () => { app.quit(); });

// New IPC: Open external URLs
ipcMain.on('open-url', (event, url) => {
  shell.openExternal(url);
});

// IPC handler to make the Launcher UI always on top
ipcMain.on('set-always-on-top', (event, isTop) => {
  if (mainWindow) {
    mainWindow.setAlwaysOnTop(isTop, 'screen-saver'); 
  }
});

let activeProcess = null;

// IPC Handler to launch SHARZO
ipcMain.on('launch-sharzo', (event, payload) => {
  const { args, appPackage } = payload;
  console.log('Launching SHARZO with args:', args);
  
  const fs = require('fs');
  let sharzoDir = path.dirname(app.getPath('exe'));
  while (!fs.existsSync(path.join(sharzoDir, 'adb.exe')) && sharzoDir !== path.parse(sharzoDir).root) {
      sharzoDir = path.dirname(sharzoDir);
  }
  
  if (appPackage) {
      const deviceIndex = args.indexOf('-s');
      const deviceId = deviceIndex !== -1 ? args[deviceIndex+1] : null;
      const adbCmd = deviceId ? `.\\adb.exe -s ${deviceId} shell monkey -p ${appPackage} -c android.intent.category.LAUNCHER 1` : `.\\adb.exe shell monkey -p ${appPackage} -c android.intent.category.LAUNCHER 1`;
      exec(adbCmd, { cwd: sharzoDir });
  }

  if (activeProcess) {
    try { activeProcess.kill(); } catch(e) {}
  }

  activeProcess = execFile('.\\sharzo.exe', args, { cwd: sharzoDir }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing SHARZO: ${error}`);
      event.reply('launch-status', { status: 'error', message: error.message });
      activeProcess = null;
      return;
    }
  });

  activeProcess.on('exit', () => {
    activeProcess = null;
    event.reply('launch-status', { status: 'stopped', message: 'Protocol stopped' });
  });
  
  event.reply('launch-status', { status: 'success', message: 'SHARZO is running' });
});

// Stop Protocol Handler
ipcMain.on('stop-sharzo', (event) => {
  if (activeProcess) {
    activeProcess.kill();
    activeProcess = null;
    event.reply('launch-status', { status: 'stopped', message: 'Protocol stopped' });
  }
});

// Get connected ADB devices
ipcMain.on('get-devices', (event) => {
  const fs = require('fs');
  let sharzoDir = path.dirname(app.getPath('exe'));
  while (!fs.existsSync(path.join(sharzoDir, 'adb.exe')) && sharzoDir !== path.parse(sharzoDir).root) {
      sharzoDir = path.dirname(sharzoDir);
  }

  exec('.\\adb.exe devices', { cwd: sharzoDir }, (error, stdout, stderr) => {
    if (error) {
      event.reply('devices-list', []);
      return;
    }
    const lines = stdout.split('\n');
    const devices = [];
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].includes('device') && !lines[i].includes('devices')) {
        devices.push(lines[i].split('\t')[0].trim());
      }
    }
    event.reply('devices-list', devices.filter(d => d.length > 0));
  });
});

// Get third-party apps for device
ipcMain.on('get-apps', (event, deviceId) => {
  const fs = require('fs');
  let sharzoDir = path.dirname(app.getPath('exe'));
  while (!fs.existsSync(path.join(sharzoDir, 'adb.exe')) && sharzoDir !== path.parse(sharzoDir).root) {
      sharzoDir = path.dirname(sharzoDir);
  }

  const cmd = deviceId ? `.\\adb.exe -s ${deviceId} shell pm list packages -3` : '.\\adb.exe shell pm list packages -3';
  exec(cmd, { cwd: sharzoDir }, (error, stdout, stderr) => {
    if (error) {
      event.reply('apps-list', []);
      return;
    }
    const lines = stdout.split('\n');
    const apps = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('package:')) {
        apps.push(lines[i].replace('package:', '').trim());
      }
    }
    event.reply('apps-list', apps.filter(a => a.length > 0));
  });
});
