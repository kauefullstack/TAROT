Instruções para publicar em Hostinger

Este documento explica como subir o conteúdo da pasta `out/` para o Hostinger de duas formas: via File Manager (recomendado) e via FTP (script PowerShell fornecido).

Opções rápidas
- Recomendado: envie `out.zip` pelo File Manager em `public_html` e extraia lá.
- Alternativa: use o script `upload-outzip.ps1` para enviar `out.zip` por FTP.

Pré-requisitos
- Ter o arquivo `out.zip` na raiz do projeto (já criado).
- Acesso ao painel Hostinger (File Manager) ou credenciais FTP (host, usuário, senha).

Opção A — File Manager (recomendado)
1. Acesse o painel Hostinger e abra File Manager.
2. Navegue até a pasta `public_html` (ou a pasta raiz do domínio).
3. Clique em Upload e selecione `out.zip` do seu computador (ou arraste e solte).
4. Quando o upload terminar, selecione `out.zip` e clique em Extract (Extrair).
5. Verifique se os arquivos extraídos incluem: `index.html`, `.htaccess`, `404.html` e a pasta `assets/`.
6. Acesse seu domínio para confirmar que o site funciona.

Opção B — FTP via PowerShell (script)
1. Abra o arquivo `upload-outzip.ps1` e verifique as instruções no topo do script.
2. Execute no PowerShell (execute com permissões que permitam execução de scripts). Exemplo:
   - Abra PowerShell na pasta do projeto.
   - (Opcional) Permita execução temporária de scripts: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
   - Rode: `.\upload-outzip.ps1`
3. Siga os prompts: informe o host FTP (ex.: `ftp.seudominio.com`) e as credenciais quando solicitado.

Observações importantes
- Certifique-se de enviar o conteúdo da pasta `out/` para a raiz do site (`public_html`). Não envie a pasta `out` como uma subpasta, a menos que você queira que o site fique em `https://seudominio.com/out/`.
- O arquivo `.htaccess` já foi adicionado e garante que as rotas da SPA sejam redirecionadas para `index.html`.
- Se o site ficar em um subdiretório, ajuste os caminhos em `index.html` (remoção da barra inicial `/assets/...` para `assets/...`).

Se quiser, posso ajustar os caminhos automaticamente ou gerar um script FTP que envie a pasta inteira (não só o zip). Informe se prefere que eu gere isso também.
