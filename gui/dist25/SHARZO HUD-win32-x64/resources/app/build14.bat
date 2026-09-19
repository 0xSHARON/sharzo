@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building Stable Prestige executable (dist14)...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist14 --overwrite --ignore="dist.*" --icon="logo.png"
echo DONE
