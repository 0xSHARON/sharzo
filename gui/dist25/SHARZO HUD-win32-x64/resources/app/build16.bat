@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building Final Premium HUD (dist16)...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist16 --overwrite --ignore="dist.*" --icon="logo.png"
echo DONE
