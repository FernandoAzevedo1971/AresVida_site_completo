# Spec: Ares Vida — Site Institucional

## Contexto

Site institucional para a **Ares Vida**, clínica de medicina do sono e terapia respiratória personalizada (CPAP/APAP/BiPAP). Conteúdo inicial com placeholders; substituição por conteúdo real em fase posterior.

## Stack

| Item | Decisão |
|------|---------|
| Framework | Next.js 14 App Router |
| Linguagem | TypeScript |
| Estilização | CSS Modules + `tokens.css` (variáveis CSS `--av-*`) |
| Fontes | Google Fonts — Montserrat (300/400/500/600/700) + Allura (400, só no logo) |
| Assets | SVGs do brandbook copiados para `public/assets/` |
| Deploy | Vercel (padrão Next.js) |

## Estrutura de pastas

```
src/
├── app/
│   ├── layout.tsx          ← import fontes, globals.css, metadata base
│   ├── page.tsx            ← Home
│   ├── sobre/page.tsx
│   ├── terapias/
│   │   ├── page.tsx        ← Hub
│   │   ├── cpap/page.tsx
│   │   ├── apap/page.tsx
│   │   └── bipap/page.tsx
│   ├── equipamentos/page.tsx
│   ├── equipe/page.tsx
│   ├── contato/page.tsx
│   └── agendar/page.tsx
├── components/
│   ├── Header/             ← logo + nav + CTA
│   ├── Footer/             ← grid 4 colunas + faixa legal
│   ├── Hero/               ← grid 1.1fr 0.9fr + placeholder imagem
│   ├── Button/             ← .av-btn--primary e .av-btn--ghost
│   ├── SectionEyebrow/     ← label uppercase + número
│   ├── TerapiaCard/        ← card para hub de terapias
│   ├── TeamCard/           ← card de médico
│   └── ContactForm/        ← formulário com validação básica
└── styles/
    ├── globals.css         ← @import tokens, reset, tipografia base
    └── tokens.css          ← cópia fiel do brandbook
```

## Páginas e seções

### `/` — Home
1. **Hero** — eyebrow "Medicina do Sono", H1 "Cuide do seu sono. Recupere sua energia.", parágrafo, 2 botões (Agendar / Conhecer a clínica), placeholder foto direita
2. **Terapias resumo** — fundo `--av-gelo`, 3 cards CPAP / APAP / BiPAP com ícone SVG, título, descrição curta e link
3. **Sobre a clínica** — 2 colunas: texto missão + bloco de especialidade/público (bordas `--av-ceu` / `--av-cobalto`)
4. **Equipe preview** — 3 cards com foto placeholder, nome, especialidade
5. **CTA agendamento** — fundo `--av-marinho`, H2 + botão ghost branco

### `/sobre`
Missão · Visão · Valores (grid 3 col, fundo marinho) + abordagem clínica + diferenciais

### `/terapias` (hub)
3 cards grandes linkando para `/terapias/cpap`, `/terapias/apap`, `/terapias/bipap`

### `/terapias/cpap`, `/apap`, `/bipap`
O que é · Indicações · Como funciona · Equipamentos compatíveis · FAQ accordion · CTA

### `/equipamentos`
Grid de aparelhos com nome, fabricante, modelo, especificações-chave, placeholder imagem

### `/equipe`
Grid de cards: foto placeholder (aspect 3:4), nome, CRM, especialidade, mini-bio

### `/contato`
Formulário (nome, e-mail, telefone, mensagem) + endereço + link WhatsApp + mapa placeholder

### `/agendar`
Stepper 3 etapas: **1** Motivo da consulta · **2** Data e horário (calendário placeholder) · **3** Dados pessoais + confirmação

## Componentes-chave

### Header
- `position: sticky; top: 0; z-index: 100`
- Altura 80 px, `background: var(--av-branco)`, `border-bottom: 1px solid var(--av-hairline)`
- Logo `logo-positiva.svg` 44 px de altura à esquerda
- Nav central: Montserrat 500, 13 px, gap 32 px, hover sublinhado animado `--av-ceu`
- CTA direita: `.av-btn--primary`, padding 10 px 22 px
- Mobile: hambúrguer → drawer lateral

### Footer
- `background: var(--av-marinho)`; grid 4 colunas (1.4fr 1fr 1fr 1fr)
- Col 1: `logo-mono-branco.svg` + tagline
- Cols 2–4: Clínica / Terapias / Contato com links
- Faixa legal: `border-top: 1px solid rgba(255,255,255,0.12)`, texto 10 px `rgba(255,255,255,0.45)`

### Button
```tsx
<Button variant="primary" | "ghost">…</Button>
```
Aplica `.av-btn--primary` ou `.av-btn--ghost` via CSS Modules; herda do `tokens.css`.

## Tokens e fidelidade visual

- `tokens.css` copiado integralmente para `src/styles/tokens.css`
- Importado em `globals.css` que é referenciado no `layout.tsx`
- Todos os componentes usam `var(--av-*)` — nunca valores literais de cor/fonte
- Transições: `.18s ease` (hover), `.24s ease-out` (entradas)
- Foco a11y: `outline: 2px solid var(--av-ceu); outline-offset: 3px`

## Conteúdo placeholder

Textos, fotos, bios e dados de contato são fictícios/placeholder. O README lista os próximos passos: fotografia real, conteúdo definitivo, integração de agendamento, CMS, LGPD.

## O que está fora de escopo nesta fase

- Integração real de agendamento (Calendly, Google Calendar, Doctoralia)
- CMS (Sanity, Contentful, MDX)
- Banner de cookies / política de privacidade (LGPD)
- Autenticação ou área restrita
- SEO avançado além de metadata básica por página
