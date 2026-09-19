@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building Final Branded HUD (dist22)...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist22 --overwrite --ignore="dist.*" --icon="icon.ico"
echo DONE
