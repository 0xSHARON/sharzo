@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building Premium Animation Build (dist15)...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist15 --overwrite --ignore="dist.*" --icon="logo.png"
echo DONE
