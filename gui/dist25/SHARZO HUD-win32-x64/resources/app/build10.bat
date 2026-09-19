@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building executable with custom icon...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist10 --overwrite --ignore="dist.*" --icon="C:\Users\91808\Downloads\logo.png"
echo DONE
