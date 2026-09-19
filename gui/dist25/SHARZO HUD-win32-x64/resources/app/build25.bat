@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building Asset-Verified HUD (dist25)...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist25 --overwrite --ignore="dist.*" --icon="icon.ico"
echo DONE
