# Script: upload-outzip.ps1
# Objetivo: enviar o arquivo out.zip para o servidor FTP do Hostinger na pasta desejada (ex.: /public_html/out.zip)
# Uso:
# 1) Coloque este script na mesma pasta onde está `out.zip` (raiz do projeto).
# 2) Abra PowerShell nessa pasta.
# 3) Rode: .\upload-outzip.ps1
# 4) Insira as credenciais e o host quando solicitado.

$localFile = Join-Path $PSScriptRoot 'out.zip'
if (-not (Test-Path $localFile)) {
    Write-Error "Arquivo out.zip não encontrado em $PSScriptRoot"
    exit 1
}

Write-Host "Insira as credenciais FTP (usuário e senha) no prompt seguinte." -ForegroundColor Cyan
$cred = Get-Credential -Message "Informe usuário e senha FTP"
$user = $cred.UserName
$pass = $cred.GetNetworkCredential().Password

$ftpHost = Read-Host "FTP host (ex: ftp.seudominio.com)"
$remotePath = Read-Host "Caminho remoto dentro do FTP (ex: /public_html/out.zip)"

if (-not $remotePath.StartsWith('/')) { $remotePath = '/' + $remotePath }

$ftpUrl = "ftp://$ftpHost$remotePath"

$wc = New-Object System.Net.WebClient
$wc.Credentials = New-Object System.Net.NetworkCredential($user,$pass)

Write-Host "Enviando $localFile -> $ftpUrl ..." -ForegroundColor Yellow
try {
    $wc.UploadFile($ftpUrl, $localFile)
    Write-Host "Upload finalizado com sucesso." -ForegroundColor Green
} catch {
    Write-Error "Falha no upload: $_"
}
