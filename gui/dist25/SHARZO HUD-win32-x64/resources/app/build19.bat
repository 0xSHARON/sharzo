@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building Window Controlled HUD (dist19)...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist19 --overwrite --ignore="dist.*" --icon="logo.png"
echo DONE
