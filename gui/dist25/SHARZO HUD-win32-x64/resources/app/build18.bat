@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building Utility Optimized HUD (dist18)...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist18 --overwrite --ignore="dist.*" --icon="logo.png"
echo DONE
