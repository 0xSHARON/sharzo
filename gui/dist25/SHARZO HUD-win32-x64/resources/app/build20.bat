@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building Final Polished HUD (dist20)...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist20 --overwrite --ignore="dist.*" --icon="logo.png"
echo DONE
