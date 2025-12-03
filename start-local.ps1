<#
start-local.ps1
Abre uma nova janela do PowerShell, inicia um servidor estático na pasta `out` e abre o navegador em http://localhost:5000
Uso: clique duas vezes no arquivo ou rode no PowerShell na pasta do projeto:
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  .\start-local.ps1
#>

$port = 5000
$folder = Join-Path $PSScriptRoot 'out'

if (-not (Test-Path $folder)) {
  Write-Error "Pasta 'out' não encontrada em: $folder"
  exit 1
}

Write-Host "Verificando se o Node está instalado..." -ForegroundColor Cyan
try {
  $node = & node -v
} catch {
  Write-Error "Node.js não encontrado. Instale o Node.js (https://nodejs.org/) e tente novamente."
  exit 1
}

Write-Host "Iniciando servidor Node em nova janela do PowerShell (porta $port) ..." -ForegroundColor Cyan

$scriptPath = Join-Path $PSScriptRoot 'serve-out.js'
if (-not (Test-Path $scriptPath)) {
  Write-Error "Arquivo serve-out.js não encontrado em: $scriptPath"
  exit 1
}

$cmd = "node `"$scriptPath`" $port"
Start-Process powershell -ArgumentList "-NoExit","-Command",$cmd

# Aguarda um pouco e abre o navegador
Start-Sleep -Seconds 1
Start-Process "http://localhost:$port"
