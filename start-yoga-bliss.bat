@echo off
setlocal EnableExtensions
title Yoga Bliss
cd /d "%~dp0"

echo ==================================================
echo   Yoga Bliss  -  local launcher
echo ==================================================
echo.

rem --- Node.js must be installed and on PATH -------------------------------
where node >nul 2>nul
if errorlevel 1 (
  echo [!] Node.js was not found on your PATH.
  echo     Install the current LTS from https://nodejs.org,
  echo     then double-click this file again.
  echo.
  pause
  exit /b 1
)

rem --- Already running? Just open it, do not start a second server ----------
curl -s -o nul http://localhost:3000/ && (
  echo Yoga Bliss is already serving on http://localhost:3000
  echo Opening it in your browser...
  start "" http://localhost:3000/
  rem ping is used as a delay because it is unaffected by PATH ordering
  ping -n 4 127.0.0.1 >nul
  exit /b 0
)

rem --- First run: install dependencies --------------------------------------
if not exist "node_modules\next\package.json" (
  echo First run: installing project dependencies.
  echo This happens once and can take a few minutes...
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo [!] npm install failed. Read the messages above, then run this again.
    pause
    exit /b 1
  )
)

echo Starting the dev server at http://localhost:3000
echo   - keep this window open while you use the app
echo   - press Ctrl+C in this window to stop it
echo   - your browser opens as soon as the server is ready
echo.

rem Open the browser once the first compile finishes (runs in the background).
start "" /b powershell -NoProfile -ExecutionPolicy Bypass -Command "for($i=0;$i -lt 120;$i++){Start-Sleep -Milliseconds 500; try{Invoke-WebRequest -UseBasicParsing -TimeoutSec 2 -Uri 'http://localhost:3000/'|Out-Null; Start-Process 'http://localhost:3000/'; break}catch{}}"

call npm run dev -- -p 3000

echo.
echo Server stopped.
pause
