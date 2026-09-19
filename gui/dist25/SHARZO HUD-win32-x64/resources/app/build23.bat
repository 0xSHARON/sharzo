@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building Definitive Branded HUD (dist23)...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist23 --overwrite --ignore="dist.*" --icon="icon.ico"
echo DONE
