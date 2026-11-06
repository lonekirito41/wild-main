@echo off
setlocal

set "APP_DIR=%~dp0backend"
set "APP_URL=http://localhost:8080/"
set "HEALTH_URL=http://localhost:8080/api/animals"
set "START_LOCK=%TEMP%\WildlifeTracker-%USERNAME%-starting.lock"
set "MVN="

if defined MAVEN_HOME if exist "%MAVEN_HOME%\bin\mvn.cmd" set "MVN=%MAVEN_HOME%\bin\mvn.cmd"
if not defined MVN if defined M2_HOME if exist "%M2_HOME%\bin\mvn.cmd" set "MVN=%M2_HOME%\bin\mvn.cmd"
if not defined MVN for /f "delims=" %%I in ('where mvn.cmd 2^>nul') do if not defined MVN set "MVN=%%I"

if not exist "%APP_DIR%\pom.xml" (
  echo Could not find the Wildlife Tracker backend folder:
  echo %APP_DIR%
  pause
  exit /b 1
)

call :check_health
if not errorlevel 1 goto open_site

:start_server
if not defined MVN (
  echo Maven was not found. Check that Maven is on PATH or set MAVEN_HOME to its install folder.
  pause
  exit /b 1
)

if not exist "%MVN%" (
  echo Maven was not found at:
  echo %MVN%
  pause
  exit /b 1
)

mkdir "%START_LOCK%" 2>nul
if errorlevel 1 goto wait_for_server

echo Starting Wildlife Tracker. Leave its server window open while using the site.
start "Wildlife Tracker Server" /min /D "%APP_DIR%" cmd /c ""%MVN%" spring-boot:run & rmdir "%START_LOCK%" 2>nul"

call :wait_for_server
if not errorlevel 1 goto open_site

echo Wildlife Tracker did not become healthy within 90 seconds.
echo Check the minimized server window for the startup error.
echo If no launcher is active, remove this stale lock folder:
echo %START_LOCK%
pause
exit /b 1

:wait_for_server
powershell -NoProfile -Command "$deadline=(Get-Date).AddSeconds(90); do { try { $r=Invoke-WebRequest -UseBasicParsing -Uri '%HEALTH_URL%' -TimeoutSec 2; if ($r.StatusCode -eq 200 -and $r.Content.TrimStart().StartsWith('[')) { exit 0 } } catch {}; if (-not (Test-Path '%START_LOCK%')) { exit 2 }; Start-Sleep -Milliseconds 750 } while ((Get-Date) -lt $deadline); exit 1" >nul 2>&1
exit /b %errorlevel%

:check_health
powershell -NoProfile -Command "try { $r=Invoke-WebRequest -UseBasicParsing -Uri '%HEALTH_URL%' -TimeoutSec 3; if ($r.StatusCode -eq 200 -and $r.Content.TrimStart().StartsWith('[')) { exit 0 } } catch {}; exit 1" >nul 2>&1
exit /b %errorlevel%

:open_site
start "" "%APP_URL%"
exit /b 0
