<div align="center">

![Sharzo Logo](icon.png)

# 🛸 SHARZO
### Precision Control & Elite Mirroring for Android

[![Website](https://img.shields.io/badge/Website-0xsharon.github.io%2FSHARZO-dfff00?style=for-the-badge&logo=googlechrome&logoColor=black)](https://0xsharon.github.io/SHARZO/)
[![License](https://img.shields.io/badge/License-EULA%20Freeware-00f0ff?style=for-the-badge)](LICENSE.md)
[![Platform](https://img.shields.io/badge/Platform-Windows%2010%20%7C%2011%20x64-5865F2?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/0xSHARON/SHARZO)
[![Discord](https://img.shields.io/badge/Community-Join%20Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/Vyq2hC6BuN)

**Developed by KAJUKATLIii // Maintained by [0xSHARON](https://github.com/0xSHARON)**

> [!IMPORTANT]
> 🌐 **Official Website**: [https://0xsharon.github.io/SHARZO/](https://0xsharon.github.io/SHARZO/)
> 
> **FREE PREMIUM SUPPORT & THEMES**: Contact via Discord at **`kajukatli.`** or join [Our Community Discord](https://discord.gg/Vyq2hC6BuN).

---

| **SHARZO Normal (CLI Core)** | **SHARZO HUD (Cyberpunk GUI)** |
| :---: | :---: |
| ![Sharzo CLI](sharzo.jpg) | ![Sharzo HUD](sharzohud.jpg) |

---

</div>

## 🌟 Overview

**SHARZO** is a high-performance Android mirroring, audio forwarding, and remote-control ecosystem for Windows. Designed specifically for professional streamers, competitive mobile gamers, content creators, and developers who demand zero bloat and sub-15ms latency.

SHARZO comes equipped with two distinct runtime modes:
1. **SHARZO Normal (CLI Core)** (`sharzo.exe`): Raw, zero-overhead executable. Uses `< 15MB` RAM, launches instantly, and is directly customizable with CLI flags.
2. **SHARZO HUD (Cyberpunk GUI)** (`SHARZO HUD.exe`): Futuristic Electron-powered dashboard with real-time ADB device detection, third-party Android app launcher, preset toggles, and always-on-top mode.

---

## 🚀 Key Features

* ⚡ **Ultra-Low Latency**: Sub-15ms response time over USB 3.0 / USB 2.0 (Wi-Fi also supported).
* 🎮 **120 FPS & High-Bitrate**: Stream smoothly at 60 / 90 / 120 FPS up to 32+ Mbps.
* 🔊 **Seamless Audio Forwarding**: Forward Android system audio directly to your PC speakers/OBS.
* 🖱️ **Full Mouse & Keyboard Control**: Direct input injection without needing root on the Android device.
* 📋 **Bidirectional Clipboard**: Copy text seamlessly between Windows and your phone (`Ctrl + C` / `Ctrl + V`).
* 📁 **Drag-and-Drop Installation**: Drag any `.apk` onto the window to install, or drag files to push them directly to `/sdcard/Download/`.
* 🔋 **Screen-Off Mirroring**: Turn off the physical Android display while keeping the mirror active on your PC to prevent overheating and battery wear.

---

## 📋 System Requirements

* **Operating System**: Windows 10 / 11 (64-bit).
* **Android Device**: Android 5.0+ (Lollipop or higher) with **USB Debugging** enabled.
* **Connectivity**: USB-C / Micro-USB cable (high-speed recommended) or shared 5GHz Wi-Fi.
* **Drivers**: ADB drivers (pre-bundled with this distribution).

---

## ⚡ Quick Start

### 1. Enable Developer Options on Android
1. Open **Settings** > **About Phone**.
2. Tap **Build Number** 7 times until you see *"You are now a developer!"*.
3. Go to **Settings** > **Developer Options** and enable **USB Debugging**.

### 2. Connect Your Device
1. Connect your Android device to your PC via USB cable.
2. A prompt will appear on your phone: *"Allow USB debugging?"*. Check **"Always allow from this computer"** and tap **Allow**.

### 3. Launch SHARZO

#### Option A: Run Normal CLI (Fastest & Lightest)
Double-click **`sharzo.exe`** (or use `open_a_terminal_here.bat`). Your device screen will instantly appear!

#### Option B: Run Cyberpunk HUD GUI
Navigate to `gui/dist25/SHARZO HUD-win32-x64/` and run **`SHARZO HUD.exe`**.
Select your device from the HUD, pick an app, and click **LAUNCH PROTOCOL**.

---

## ⌨️ Keyboard Shortcuts & Hotkeys

All hotkeys use the **`Alt`** key by default as the modifier (`MOD`):

| Hotkey | Action |
| :--- | :--- |
| <kbd>Alt</kbd> + <kbd>F</kbd> | Toggle Fullscreen |
| <kbd>Alt</kbd> + <kbd>O</kbd> | Turn phone screen **OFF** (PC mirror remains active) |
| <kbd>Alt</kbd> + <kbd>P</kbd> | Emulate Power button (turn screen ON/OFF) |
| <kbd>Alt</kbd> + <kbd>R</kbd> | Rotate screen 90° |
| <kbd>Alt</kbd> + <kbd>H</kbd> | Press **HOME** button |
| <kbd>Alt</kbd> + <kbd>B</kbd> | Press **BACK** button |
| <kbd>Alt</kbd> + <kbd>S</kbd> | Press **APP SWITCHER** (Recent Apps) |
| <kbd>Alt</kbd> + <kbd>N</kbd> | Expand Android notification drawer |
| <kbd>Alt</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd> | Adjust Android volume up / down |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>V</kbd> | Synchronize clipboard between PC and phone |
| **Drag & Drop .APK** | Instantly install Android APK to device |
| **Drag & Drop File** | Push file to `/sdcard/Download/` |

---

## 🛠️ CLI Command Cheat Sheet

You can customize `sharzo.exe` with any standard flags:

```powershell
# Default launch
.\sharzo.exe

# 1080p limit at 60 FPS, 16 Mbps bitrate
.\sharzo.exe -m 1920 --max-fps 60 -b 16M

# High-refresh esports mode (120 FPS, 24 Mbps)
.\sharzo.exe --max-fps 120 -b 24M

# Turn physical phone screen off during mirroring
.\sharzo.exe --turn-screen-off --stay-awake

# Record screen session directly to an MP4 video
.\sharzo.exe --record gameplay.mp4

# Target specific device (when multiple devices are connected)
.\sharzo.exe -s <DEVICE_SERIAL>
```

> [!TIP]
> Use the interactive **[Command Generator on our Website](https://0xsharon.github.io/SHARZO/)** to generate commands visually with one click!

---

## 📁 Repository Structure

```text
SHARZO/
├── index.html                   # Official Brutalist Landing Page (GitHub Pages)
├── README.md                    # Project Documentation
├── LICENSE.md                   # End-User License Agreement
├── help.txt                     # Comprehensive CLI reference & flags
├── sharzo.exe                   # Core standalone mirroring engine
├── sharzo-server                # Android server agent
├── adb.exe                      # Android Debug Bridge binary
├── AdbWinApi.dll, AdbWinUsbApi  # Windows ADB communication drivers
├── SDL2.dll                     # High-performance multimedia renderer
├── avcodec-61.dll, avformat...  # FFmpeg video/audio decoding libraries
├── icon.png, logo.png           # Visual branding assets
├── open_a_terminal_here.bat     # Quick terminal launcher for Windows
│
└── gui/                         # Electron GUI Application
    ├── package.json             # Electron configuration
    ├── main.js                  # Electron main IPC process
    ├── index.html               # HUD interface layout
    └── dist25/
        └── SHARZO HUD-win32-x64/
            └── SHARZO HUD.exe   # Compiled standalone Cyber HUD GUI
```

---

## ❓ Troubleshooting

| Issue | Solution |
| :--- | :--- |
| **Device not detected** | Run `.\adb.exe devices` in terminal. Check USB cable and ensure **USB Debugging** is turned on. |
| **"Device unauthorized"** | Unlock phone screen and look for the USB authorization pop-up. Check **"Always allow"** and accept. |
| **Lag / Stutter** | Lower the bitrate and resolution: `.\sharzo.exe -m 1280 -b 8M --max-fps 60`. Connect to a USB 3.0 port. |
| **No audio** | Audio forwarding requires **Android 11+**. On older devices, only video is mirrored. |

---

## 🤝 Community & Support

* **Website**: [0xsharon.github.io/SHARZO](https://0xsharon.github.io/SHARZO/)
* **Discord**: [Join Our Community](https://discord.gg/Vyq2hC6BuN)
* **GitHub**: [0xSHARON/SHARZO](https://github.com/0xSHARON/SHARZO)
* **Lead Developer**: KAJUKATLIii
* **Maintainer**: 0xSHARON

---

<div align="center">
<b>SHARZO // Precision. Control. Dominance.</b>
</div>
