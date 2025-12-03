# upload-outdir.ps1
# Envia recursivamente o conteúdo da pasta `out/` para um diretório remoto via FTP.
# Uso:
#   Abra PowerShell na pasta do projeto (onde está `out/`) e rode:
#     Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
#     .\upload-outdir.ps1        # faz upload real
#     .\upload-outdir.ps1 -DryRun  # apenas mostra o que seria enviado

param(
    [switch]$DryRun
)

$localRoot = Join-Path $PSScriptRoot 'out'
if (-not (Test-Path $localRoot)) {
    Write-Error "Pasta 'out' não encontrada em: $localRoot"
    exit 1
}

Write-Host "=== Upload automático de 'out/' para FTP (Hostinger) ===" -ForegroundColor Cyan

$cred = Get-Credential -Message 'Informe usuário e senha FTP'
$ftpHost = Read-Host 'FTP host (ex: ftp.seudominio.com)'
$remoteBase = Read-Host 'Diretório remoto no FTP (ex: /public_html)'

if (-not $remoteBase) { $remoteBase = '/public_html' }
if ($remoteBase.StartsWith('/')) { $remoteBase = $remoteBase.TrimStart('/') }

function Ensure-FtpDirectory {
    param(
        [string]$ftpHost,
        [string]$dirPath,
        [System.Net.NetworkCredential]$credential
    )

    # cria recursivamente cada segmento de diretório
    $segments = $dirPath.Trim('/').Split('/') | Where-Object { $_ -ne '' }
    $current = "ftp://$ftpHost"
    foreach ($seg in $segments) {
        $current = "$current/$seg"
        try {
            $req = [System.Net.FtpWebRequest]::Create($current)
            $req.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
            $req.Credentials = $credential
            $req.UseBinary = $true
            $req.KeepAlive = $false
            $resp = $req.GetResponse()
            $resp.Close()
            Write-Host "Criado: $current" -ForegroundColor Green
        } catch {
            # 550 = diretório já existe ou não pode ser criado — ignorar
            Write-Host "(ignorar) MKD $current -> $_" -ForegroundColor DarkYellow
        }
    }
}

function Upload-FileToFtp {
    param(
        [string]$localFile,
        [string]$ftpUrl,
        [System.Net.NetworkCredential]$credential,
        [switch]$DryRun
    )
    if ($DryRun) {
        Write-Host "[DRYRUN] Upload: $localFile -> $ftpUrl"
        return
    }

    try {
        $req = [System.Net.FtpWebRequest]::Create($ftpUrl)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $req.Credentials = $credential
        $req.UseBinary = $true
        $req.KeepAlive = $false
        $bytes = [System.IO.File]::ReadAllBytes($localFile)
        $req.ContentLength = $bytes.Length
        $reqStream = $req.GetRequestStream()
        $reqStream.Write($bytes, 0, $bytes.Length)
        $reqStream.Close()
        $resp = $req.GetResponse()
        $resp.Close()
        Write-Host "Enviado: $localFile -> $ftpUrl" -ForegroundColor Green
    } catch {
        Write-Host "Falha ao enviar $localFile -> $ftpUrl : $_" -ForegroundColor Red
    }
}

# Prepara credenciais
$netCred = New-Object System.Net.NetworkCredential($cred.UserName, $cred.GetNetworkCredential().Password)

# Percorre arquivos
$files = Get-ChildItem -Path $localRoot -Recurse -File
foreach ($f in $files) {
    $relative = $f.FullName.Substring($localRoot.Length).TrimStart('\','/') -replace '\\','/'
    $remoteDir = [System.IO.Path]::GetDirectoryName($relative) -replace '\\','/'
    if (-not $remoteDir) { $remoteDir = '' }

    $fullRemoteDir = if ($remoteDir -ne '') { "$remoteBase/$remoteDir" } else { "$remoteBase" }

    # garante que o diretório remoto exista
    Ensure-FtpDirectory -ftpHost $ftpHost -dirPath $fullRemoteDir -credential $netCred

    $ftpUrl = "ftp://$ftpHost/$fullRemoteDir/$([System.IO.Path]::GetFileName($relative))"
    $ftpUrl = $ftpUrl -replace '//','/' -replace 'ftp:/','ftp://'

    Upload-FileToFtp -localFile $f.FullName -ftpUrl $ftpUrl -credential $netCred -DryRun:$DryRun
}

Write-Host "Processo finalizado." -ForegroundColor Cyan
