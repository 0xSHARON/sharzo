@echo off
cd f:\ANIGRAVITY\SHARZO\gui
echo Building executable...
call node_modules\.bin\electron-packager.cmd . "SHARZO HUD" --platform=win32 --arch=x64 --out=dist9 --overwrite --ignore="dist.*" > build_log3.txt 2>&1
echo DONE >> build_log3.txt
