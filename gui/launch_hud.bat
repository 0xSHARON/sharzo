@echo off
setlocal enabledelayedexpansion

set "TEMP_BASE=%TEMP%\SHARZO_SFX_%RANDOM%"
mkdir "!TEMP_BASE!"

echo [SYSTEM] INITIALIZING SHARZO HUD...
echo [SYSTEM] EXTRACTING COMPONENTS...

tar -xf SHARZO_PAYLOAD.zip -C "!TEMP_BASE!" >nul 2>&1

echo [SYSTEM] LAUNCHING PROTOCOL...
cd /d "!TEMP_BASE!"
start /wait "" "SHARZO HUD.exe"

echo [SYSTEM] SHUTTING DOWN...
cd /d %TEMP%
timeout /t 2 /nobreak >nul
rd /s /q "!TEMP_BASE!"
exit
