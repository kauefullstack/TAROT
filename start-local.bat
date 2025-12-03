@echo off
REM start-local.bat - inicia http-server na pasta out e abre o navegador
SET PORT=5000
SET OUTDIR=%~dp0out

IF NOT EXIST "%OUTDIR%" (
  echo Pasta %OUTDIR% nao encontrada.
  pause
  exit /b 1
)

echo Verificando se o Node.js esta instalado...
where node >nul 2>nul
IF ERRORLEVEL 1 (
  echo Node.js nao encontrado. Instale Node.js em https://nodejs.org/ e tente novamente.
  pause
  exit /b 1
)

echo Iniciando servidor Node em %OUTDIR% na porta %PORT% ...
start "Servidor" powershell -NoExit -Command "node \"%~dp0serve-out.js\" %PORT%"
timeout /t 1 >nul
start "" "http://localhost:%PORT%"
