@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Rebuilding FIXED Prestige Red/Gold executable...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist13 --overwrite --ignore="dist.*" --icon="logo.png"
echo DONE
