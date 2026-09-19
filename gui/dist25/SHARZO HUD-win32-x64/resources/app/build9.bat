@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building executable...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist9 --overwrite --ignore="dist.*" --ignore="build_log.*"
echo DONE
