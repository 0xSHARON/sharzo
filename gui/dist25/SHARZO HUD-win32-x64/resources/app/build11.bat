@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building executable with custom UI logo and executable icon...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist11 --overwrite --ignore="dist.*" --icon="logo.png"
echo DONE
