# TAROT

**Aplicação web com React, TypeScript e Vite.**

Projeto de interface web com navegação, internacionalização e estilização responsiva. Este repositório disponibiliza o código da aplicação e orientações para desenvolvimento local e publicação.

## Visão técnica

| Camada | Tecnologias presentes no projeto |
| --- | --- |
| UI | React 19, Tailwind CSS, Lucide React |
| Linguagem e build | TypeScript, Vite |
| Navegação | React Router |
| Idiomas | i18next, react-i18next, detecção de idioma |
| Bibliotecas e SDKs | Firebase, Supabase, Stripe React, Recharts |

> A tabela de bibliotecas e SDKs é baseada nas dependências declaradas em `package.json`. A presença de uma dependência não significa, por si só, que toda a integração esteja configurada ou ativa.

## Executar localmente

**Pré-requisitos:** Node.js e npm.

```bash
git clone https://github.com/kauefullstack/TAROT.git
cd TAROT
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite no terminal.

### Build de produção

```bash
npm run build
npm run preview
```

O comando `preview` permite conferir localmente a versão compilada.

## Configuração e segurança

Algumas funcionalidades podem depender de configurações externas. Confira as referências a variáveis de ambiente e serviços no código antes de executar ou publicar.

- Não publique chaves privadas, tokens de serviço ou credenciais.
- Use configurações separadas para desenvolvimento e produção.
- Valide permissões e regras de acesso dos serviços utilizados.

## Deploy

As orientações existentes para hospedagem estão em **[README_UPLOAD.md](README_UPLOAD.md)**.

## Manutenção

Os comandos disponíveis atualmente em `package.json` são `dev`, `build` e `preview`. Não há script de testes ou lint declarado nesse arquivo; por isso, este README não afirma cobertura de testes ou pipeline de CI.

## Autor

**[Kauê Oliveira](https://github.com/kauefullstack)** — Full Stack Developer.
