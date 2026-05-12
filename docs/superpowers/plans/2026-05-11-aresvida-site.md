# Ares Vida Site Institucional — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir o site institucional da Ares Vida em Next.js 14 App Router com CSS Modules e tokens do brandbook, com conteúdo placeholder pronto para substituição.

**Architecture:** Next.js 14 App Router (TypeScript, src/), CSS Modules para todos os estilos, tokens.css como fonte única de variáveis `--av-*`. Fontes via `next/font/google`. Assets SVG em `public/assets/`.

**Tech Stack:** Next.js 14, TypeScript, CSS Modules, Google Fonts (Montserrat + Allura), next/image, next/link

---

## File Map

```
C:\Users\FERNANDO\Projetos\AresVida_site_completo\
├── public/assets/          ← logos SVG + favicon (copiados do brandbook)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx + page.module.css
│   │   ├── sobre/page.tsx + page.module.css
│   │   ├── terapias/
│   │   │   ├── page.tsx + page.module.css
│   │   │   ├── terapia.module.css   ← compartilhado entre cpap/apap/bipap
│   │   │   ├── cpap/page.tsx
│   │   │   ├── apap/page.tsx
│   │   │   └── bipap/page.tsx
│   │   ├── equipamentos/page.tsx + page.module.css
│   │   ├── equipe/page.tsx + page.module.css
│   │   ├── contato/page.tsx + page.module.css
│   │   └── agendar/page.tsx + page.module.css
│   ├── components/
│   │   ├── Header/Header.tsx + Header.module.css
│   │   ├── Footer/Footer.tsx + Footer.module.css
│   │   ├── Button/Button.tsx + Button.module.css
│   │   ├── Hero/Hero.tsx + Hero.module.css
│   │   ├── SectionEyebrow/SectionEyebrow.tsx + SectionEyebrow.module.css
│   │   ├── TerapiaCard/TerapiaCard.tsx + TerapiaCard.module.css
│   │   ├── TeamCard/TeamCard.tsx + TeamCard.module.css
│   │   ├── ContactForm/ContactForm.tsx + ContactForm.module.css
│   │   └── AgendarStepper/AgendarStepper.tsx + AgendarStepper.module.css
│   └── styles/
│       ├── globals.css
│       └── tokens.css
└── docs/superpowers/
    ├── specs/2026-05-11-aresvida-site-design.md
    └── plans/2026-05-11-aresvida-site.md  ← este arquivo
```

---

### Task 1: Scaffold do projeto Next.js

**Files:**
- Create: todo o scaffolding via `create-next-app`

- [ ] **Step 1: Scaffold na pasta existente**

```powershell
cd C:\Users\FERNANDO\Projetos\AresVida_site_completo
npx create-next-app@latest . --typescript --eslint --app --src-dir --import-alias "@/*" --no-tailwind
```

Quando perguntar se deseja sobrescrever arquivos existentes: responder **y** (só existe a pasta `docs/`).

- [ ] **Step 2: Remover boilerplate**

```powershell
Remove-Item src\app\globals.css
Remove-Item public\next.svg
Remove-Item public\vercel.svg
```

Abrir `src/app/page.tsx` e substituir tudo por:
```tsx
export default function HomePage() {
  return <main />
}
```

- [ ] **Step 3: Verificar que o servidor sobe**

```powershell
npm run dev
```

Abrir `http://localhost:3000` — deve mostrar página em branco sem erros no console.

- [ ] **Step 4: Commit**

```powershell
git init
git add .
git commit -m "chore: scaffold Next.js 14 App Router com TypeScript"
```

---

### Task 2: Assets e tokens

**Files:**
- Create: `public/assets/` (todos os SVGs)
- Create: `src/styles/tokens.css`
- Create: `src/styles/globals.css`

- [ ] **Step 1: Copiar SVGs do brandbook**

```powershell
New-Item -ItemType Directory -Force -Path "public\assets"
$src = "G:\Meu Drive\Ares Vida\Projeto Claude Design completo Ares Vida\design_handoff_aresvida_brand\assets"
Copy-Item "$src\logo-positiva.svg"          public\assets\
Copy-Item "$src\logo-negativa.svg"          public\assets\
Copy-Item "$src\logo-original.svg"          public\assets\
Copy-Item "$src\logo-horizontal.svg"        public\assets\
Copy-Item "$src\logo-mono-marinho.svg"      public\assets\
Copy-Item "$src\logo-mono-preta.svg"        public\assets\
Copy-Item "$src\logo-mono-branco.svg"       public\assets\
Copy-Item "$src\logo-original-mono-preta.svg" public\assets\
Copy-Item "$src\icon-favicon.svg"           public\assets\
```

- [ ] **Step 2: Criar tokens.css**

Criar `src/styles/tokens.css` com o conteúdo exato do brandbook:

```css
/* ============================================================
   ARES VIDA — DESIGN TOKENS
   ============================================================ */
:root {
  --av-marinho:        #161F64;
  --av-indigo:         #536DAE;
  --av-cobalto:        #5783C1;
  --av-ceu:            #6BB1DC;
  --av-ciano:          #80D4DF;
  --av-gelo:           #F2F6FA;
  --av-grafite:        #3D3D3D;
  --av-branco:         #FFFFFF;
  --av-success:        #1F8A5B;
  --av-danger:         #C0413A;
  --av-hairline:       rgba(22, 31, 100, 0.12);
  --av-hairline-soft:  rgba(22, 31, 100, 0.06);
  --av-overlay-dark:   rgba(22, 31, 100, 0.65);
  --av-font-logo:      'Allura', cursive;
  --av-font-sans:      'Montserrat', system-ui, -apple-system, sans-serif;
  --av-fw-light:       300;
  --av-fw-regular:     400;
  --av-fw-medium:      500;
  --av-fw-semibold:    600;
  --av-fw-bold:        700;
  --av-fs-h1:          clamp(2.5rem, 4vw, 3.5rem);
  --av-fs-h2:          clamp(2rem, 3vw, 2.25rem);
  --av-fs-h3:          clamp(1.375rem, 2vw, 1.625rem);
  --av-fs-body:        1.125rem;
  --av-fs-body-sm:     1rem;
  --av-fs-support:     0.875rem;
  --av-fs-cta:         0.875rem;
  --av-lh-tight:       1.05;
  --av-lh-snug:        1.2;
  --av-lh-base:        1.6;
  --av-letter-cta:     0.05em;
  --av-letter-eyebrow: 0.18em;
  --av-letter-tight:   -0.01em;
  --av-sp-1:           4px;
  --av-sp-2:           8px;
  --av-sp-3:           12px;
  --av-sp-4:           16px;
  --av-sp-5:           24px;
  --av-sp-6:           32px;
  --av-sp-7:           48px;
  --av-sp-8:           64px;
  --av-sp-9:           96px;
  --av-sp-10:          120px;
  --av-radius-none:    0;
  --av-radius-sm:      4px;
  --av-radius-md:      8px;
  --av-radius-pill:    999px;
  --av-shadow-card:    0 8px 20px -6px rgba(22, 31, 100, 0.18);
  --av-shadow-lift:    0 30px 80px -20px rgba(22, 31, 100, 0.35),
                       0 8px 20px -6px rgba(22, 31, 100, 0.18);
  --av-container:      1200px;
  --av-gutter:         24px;
}
```

- [ ] **Step 3: Criar globals.css**

Criar `src/styles/globals.css`:

```css
@import './tokens.css';

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Sobrescreve tokens de fonte com as variáveis do next/font */
:root {
  --av-font-sans: var(--font-montserrat), 'Montserrat', system-ui, sans-serif;
  --av-font-logo: var(--font-allura), 'Allura', cursive;
}

html {
  font-family: var(--av-font-sans);
  color: var(--av-marinho);
  -webkit-font-smoothing: antialiased;
}

body {
  background: var(--av-branco);
}

h1 {
  font-size: var(--av-fs-h1);
  font-weight: var(--av-fw-bold);
  line-height: var(--av-lh-tight);
  letter-spacing: var(--av-letter-tight);
}

h2 {
  font-size: var(--av-fs-h2);
  font-weight: var(--av-fw-semibold);
  line-height: var(--av-lh-snug);
}

h3 {
  font-size: var(--av-fs-h3);
  font-weight: var(--av-fw-semibold);
  line-height: var(--av-lh-snug);
}

p {
  font-size: var(--av-fs-body);
  line-height: var(--av-lh-base);
  color: var(--av-grafite);
}

a { color: inherit; }

img, svg { max-width: 100%; height: auto; display: block; }
```

- [ ] **Step 4: Commit**

```powershell
git add public/assets src/styles
git commit -m "chore: adiciona assets do brandbook e tokens CSS"
```

---

### Task 3: Root layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Escrever layout.tsx**

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Montserrat, Allura } from 'next/font/google'
import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ares Vida — Terapia respiratória personalizada',
    template: '%s — Ares Vida',
  },
  description:
    'Clínica especializada em medicina do sono. Diagnóstico, prescrição e acompanhamento de CPAP, APAP e BiPAP.',
  icons: { icon: '/assets/icon-favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${allura.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Verificar fontes no browser**

```powershell
npm run dev
```

Inspecionar no DevTools: `document.body` deve ter `font-family` resolvendo para Montserrat. Nenhum erro de console.

- [ ] **Step 3: Commit**

```powershell
git add src/app/layout.tsx
git commit -m "feat: root layout com Montserrat e Allura via next/font"
```

---

### Task 4: Componente Button

**Files:**
- Create: `src/components/Button/Button.tsx`
- Create: `src/components/Button/Button.module.css`

- [ ] **Step 1: Criar Button.tsx**

```tsx
// src/components/Button/Button.tsx
import Link from 'next/link'
import styles from './Button.module.css'

type ButtonProps = {
  variant?: 'primary' | 'ghost'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  type = 'button',
  className = '',
}: ButtonProps) {
  const cls = [styles.btn, variant === 'ghost' ? styles.ghost : styles.primary, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Criar Button.module.css**

```css
/* src/components/Button/Button.module.css */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--av-font-sans);
  font-weight: var(--av-fw-semibold);
  font-size: var(--av-fs-cta);
  letter-spacing: var(--av-letter-cta);
  text-transform: uppercase;
  padding: 14px 28px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  border-radius: var(--av-radius-none);
  line-height: 1;
}

.btn:focus-visible {
  outline: 2px solid var(--av-ceu);
  outline-offset: 3px;
}

.primary {
  background: var(--av-marinho);
  color: var(--av-branco);
}

.primary:hover { background: #0e1547; }

.ghost {
  background: transparent;
  color: var(--av-marinho);
  border: 1.5px solid var(--av-marinho);
  padding: 12.5px 28px;
}

.ghost:hover {
  background: var(--av-marinho);
  color: var(--av-branco);
}
```

- [ ] **Step 3: Commit**

```powershell
git add src/components/Button
git commit -m "feat: componente Button (primary e ghost)"
```

---

### Task 5: Componente SectionEyebrow

**Files:**
- Create: `src/components/SectionEyebrow/SectionEyebrow.tsx`
- Create: `src/components/SectionEyebrow/SectionEyebrow.module.css`

- [ ] **Step 1: Criar SectionEyebrow.tsx**

```tsx
// src/components/SectionEyebrow/SectionEyebrow.tsx
import styles from './SectionEyebrow.module.css'

type Props = { children: React.ReactNode; light?: boolean }

export default function SectionEyebrow({ children, light = false }: Props) {
  return (
    <div className={`${styles.eyebrow} ${light ? styles.light : ''}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Criar SectionEyebrow.module.css**

```css
/* src/components/SectionEyebrow/SectionEyebrow.module.css */
.eyebrow {
  font-family: var(--av-font-sans);
  font-size: 12px;
  font-weight: var(--av-fw-semibold);
  letter-spacing: var(--av-letter-eyebrow);
  text-transform: uppercase;
  color: var(--av-cobalto);
  display: flex;
  align-items: center;
  gap: 10px;
}

.light { color: var(--av-ciano); }
```

- [ ] **Step 3: Commit**

```powershell
git add src/components/SectionEyebrow
git commit -m "feat: componente SectionEyebrow"
```

---

### Task 6: Componente Header

**Files:**
- Create: `src/components/Header/Header.tsx`
- Create: `src/components/Header/Header.module.css`

- [ ] **Step 1: Criar Header.tsx**

```tsx
// src/components/Header/Header.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import styles from './Header.module.css'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/terapias', label: 'Terapias' },
  { href: '/equipamentos', label: 'Equipamentos' },
  { href: '/equipe', label: 'Equipe' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" aria-label="Ares Vida — página inicial" className={styles.logoLink}>
          <Image src="/assets/logo-positiva.svg" alt="Ares Vida" width={160} height={44} priority />
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.navLink}>{label}</Link>
          ))}
        </nav>

        <div className={styles.ctaWrapper}>
          <Button href="/agendar" variant="primary">Agendar consulta</Button>
        </div>

        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.drawer} role="dialog" aria-label="Menu mobile">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <div className={styles.drawerCta}>
            <Button href="/agendar" variant="primary">Agendar consulta</Button>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Criar Header.module.css**

```css
/* src/components/Header/Header.module.css */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--av-branco);
  border-bottom: 1px solid var(--av-hairline);
}

.inner {
  max-width: var(--av-container);
  margin: 0 auto;
  padding: 0 var(--av-gutter);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--av-sp-6);
}

.logoLink { display: flex; align-items: center; flex-shrink: 0; }

.nav {
  display: flex;
  align-items: center;
  gap: var(--av-sp-6);
  flex: 1;
  justify-content: center;
}

.navLink {
  font-family: var(--av-font-sans);
  font-weight: var(--av-fw-medium);
  font-size: 13px;
  color: var(--av-marinho);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.18s ease;
}

.navLink::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--av-ceu);
  transition: width 0.18s ease, left 0.18s ease;
}

.navLink:hover::after { width: 100%; left: 0; }
.navLink:focus-visible { outline: 2px solid var(--av-ceu); outline-offset: 3px; }

.ctaWrapper { flex-shrink: 0; }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--av-marinho);
  transition: transform 0.18s ease;
}

.drawer {
  background: var(--av-branco);
  border-top: 1px solid var(--av-hairline);
  padding: var(--av-sp-5) var(--av-gutter);
  display: flex;
  flex-direction: column;
  gap: var(--av-sp-3);
}

.drawerLink {
  font-family: var(--av-font-sans);
  font-weight: var(--av-fw-medium);
  font-size: 15px;
  color: var(--av-marinho);
  text-decoration: none;
  padding: var(--av-sp-2) 0;
  border-bottom: 1px solid var(--av-hairline-soft);
}

.drawerCta { margin-top: var(--av-sp-2); }

@media (max-width: 768px) {
  .nav, .ctaWrapper { display: none; }
  .hamburger { display: flex; }
}
```

- [ ] **Step 3: Adicionar Header e Footer placeholder ao layout**

```tsx
// src/app/layout.tsx  — versão atualizada
import type { Metadata } from 'next'
import { Montserrat, Allura } from 'next/font/google'
import Header from '@/components/Header/Header'
import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Ares Vida — Terapia respiratória personalizada', template: '%s — Ares Vida' },
  description: 'Clínica especializada em medicina do sono. CPAP, APAP e BiPAP.',
  icons: { icon: '/assets/icon-favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${allura.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verificar header no browser**

```powershell
npm run dev
```

Verificar: logo aparece, nav está visível em desktop, hambúrguer aparece em mobile (reduzir janela abaixo de 768 px), drawer abre/fecha ao clicar.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Header src/app/layout.tsx
git commit -m "feat: Header com nav responsivo e menu mobile"
```

---

### Task 7: Componente Footer

**Files:**
- Create: `src/components/Footer/Footer.tsx`
- Create: `src/components/Footer/Footer.module.css`

- [ ] **Step 1: Criar Footer.tsx**

```tsx
// src/components/Footer/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

const clinica = [
  { href: '/sobre', label: 'Sobre a Ares Vida' },
  { href: '/equipe', label: 'Equipe médica' },
  { href: '/sobre#como-funciona', label: 'Como funciona' },
]

const terapias = [
  { href: '/terapias/cpap', label: 'CPAP' },
  { href: '/terapias/apap', label: 'APAP' },
  { href: '/terapias/bipap', label: 'BiPAP' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brandCol}>
          <Image src="/assets/logo-mono-branco.svg" alt="Ares Vida" width={140} height={38} />
          <p className={styles.tagline}>
            Clínica especializada em medicina do sono e terapia respiratória personalizada.
            Diagnóstico, prescrição e acompanhamento.
          </p>
        </div>

        <div className={styles.col}>
          <h5 className={styles.colHeader}>Clínica</h5>
          {clinica.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.colItem}>{label}</Link>
          ))}
        </div>

        <div className={styles.col}>
          <h5 className={styles.colHeader}>Terapias</h5>
          {terapias.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.colItem}>{label}</Link>
          ))}
        </div>

        <div className={styles.col}>
          <h5 className={styles.colHeader}>Contato</h5>
          <span className={styles.colItem}>Av. Paulista, 1842 · 14º andar</span>
          <a href="mailto:contato@aresvida.com.br" className={styles.colItem}>contato@aresvida.com.br</a>
          <a href="tel:+551140028922" className={styles.colItem}>+55 11 4002-8922</a>
        </div>
      </div>

      <div className={styles.legal}>
        <span>© 2026 Ares Vida · Todos os direitos reservados</span>
        <span>CNPJ 00.000.000/0001-00 · Responsável técnico CRM-SP 138.420</span>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Criar Footer.module.css**

```css
/* src/components/Footer/Footer.module.css */
.footer { background: var(--av-marinho); color: var(--av-branco); }

.grid {
  max-width: var(--av-container);
  margin: 0 auto;
  padding: var(--av-sp-7) var(--av-gutter) var(--av-sp-6);
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: var(--av-sp-6);
}

.brandCol { display: flex; flex-direction: column; gap: var(--av-sp-4); }

.tagline {
  font-size: 11px;
  color: rgba(255,255,255,0.6);
  line-height: 1.5;
  max-width: 240px;
}

.col { display: flex; flex-direction: column; gap: var(--av-sp-2); }

.colHeader {
  font-family: var(--av-font-sans);
  font-size: 10px;
  font-weight: var(--av-fw-semibold);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--av-ciano);
  margin-bottom: var(--av-sp-2);
}

.colItem {
  font-family: var(--av-font-sans);
  font-size: 11px;
  color: rgba(255,255,255,0.72);
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.18s ease;
}

a.colItem:hover { color: var(--av-branco); }

.legal {
  max-width: var(--av-container);
  margin: 0 auto;
  padding: 14px var(--av-gutter);
  border-top: 1px solid rgba(255,255,255,0.12);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--av-sp-2);
  font-family: var(--av-font-sans);
  font-size: 10px;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.06em;
}

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr 1fr; }
  .brandCol { grid-column: 1 / -1; }
}

@media (max-width: 480px) {
  .grid { grid-template-columns: 1fr; }
  .legal { flex-direction: column; }
}
```

- [ ] **Step 3: Adicionar Footer ao layout**

Em `src/app/layout.tsx`, importar e colocar `<Footer />` após `<main>`:

```tsx
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
// ... resto igual ...
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
```

- [ ] **Step 4: Verificar footer no browser**

Grid 4 colunas em desktop. Em mobile (< 480 px) vira 1 coluna. Logo branco visível.

- [ ] **Step 5: Commit**

```powershell
git add src/components/Footer src/app/layout.tsx
git commit -m "feat: Footer com grid 4 colunas e faixa legal"
```

---

### Task 8: Componentes Hero, TerapiaCard e TeamCard

**Files:**
- Create: `src/components/Hero/Hero.tsx` + `Hero.module.css`
- Create: `src/components/TerapiaCard/TerapiaCard.tsx` + `TerapiaCard.module.css`
- Create: `src/components/TeamCard/TeamCard.tsx` + `TeamCard.module.css`

- [ ] **Step 1: Criar Hero.tsx**

```tsx
// src/components/Hero/Hero.tsx
import Button from '@/components/Button/Button'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import styles from './Hero.module.css'

type HeroProps = {
  eyebrow?: string
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export default function Hero({
  eyebrow = 'Medicina do Sono',
  title,
  description,
  primaryCta = { label: 'Agendar consulta', href: '/agendar' },
  secondaryCta = { label: 'Conhecer a clínica', href: '/sobre' },
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Button href={primaryCta.href} variant="primary">{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="ghost">{secondaryCta.label}</Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <span>[ foto · paciente em consulta ]</span>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Criar Hero.module.css**

```css
/* src/components/Hero/Hero.module.css */
.hero { background: var(--av-gelo); padding: 60px 0; }

.inner {
  max-width: var(--av-container);
  margin: 0 auto;
  padding: 0 var(--av-gutter);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.content { display: flex; flex-direction: column; gap: var(--av-sp-4); }

.title {
  font-size: var(--av-fs-h1);
  font-weight: var(--av-fw-semibold);
  color: var(--av-marinho);
  line-height: var(--av-lh-tight);
  letter-spacing: var(--av-letter-tight);
  margin: 0;
}

.description {
  font-size: 14px;
  color: var(--av-grafite);
  line-height: 1.55;
  max-width: 90%;
  margin: 0;
}

.actions { display: flex; gap: 14px; flex-wrap: wrap; }

.imageWrapper { border-radius: var(--av-radius-sm); overflow: hidden; }

.imagePlaceholder {
  height: 360px;
  background: repeating-linear-gradient(45deg, #e8eef4, #e8eef4 8px, #dee5ee 8px, #dee5ee 16px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--av-cobalto);
  font-family: monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
}

@media (max-width: 768px) {
  .inner { grid-template-columns: 1fr; }
  .imageWrapper { order: -1; }
  .imagePlaceholder { height: 220px; }
  .description { max-width: 100%; }
}
```

- [ ] **Step 3: Criar TerapiaCard.tsx**

```tsx
// src/components/TerapiaCard/TerapiaCard.tsx
import Link from 'next/link'
import styles from './TerapiaCard.module.css'

type TerapiaCardProps = { slug: string; title: string; description: string }

export default function TerapiaCard({ slug, title, description }: TerapiaCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden="true">
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
          <path d="M2 20 C7 12 13 26 20 18 C27 10 33 24 38 16"
            stroke="var(--av-ceu)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M2 28 C7 20 13 34 20 26 C27 18 33 32 38 24"
            stroke="var(--av-cobalto)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        </svg>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href={`/terapias/${slug}`} className={styles.link}>
        Saiba mais <span className={styles.arrow} aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
```

- [ ] **Step 4: Criar TerapiaCard.module.css**

```css
/* src/components/TerapiaCard/TerapiaCard.module.css */
.card {
  background: var(--av-branco);
  border: 1px solid var(--av-hairline);
  padding: var(--av-sp-6);
  display: flex;
  flex-direction: column;
  gap: var(--av-sp-3);
  transition: box-shadow 0.18s ease;
}

.card:hover { box-shadow: var(--av-shadow-card); }

.icon { margin-bottom: var(--av-sp-2); }

.title {
  font-size: var(--av-fs-h3);
  font-weight: var(--av-fw-semibold);
  color: var(--av-marinho);
  margin: 0;
}

.description {
  font-size: var(--av-fs-body-sm);
  color: var(--av-grafite);
  line-height: var(--av-lh-base);
  margin: 0;
  flex: 1;
}

.link {
  font-family: var(--av-font-sans);
  font-size: 13px;
  font-weight: var(--av-fw-semibold);
  color: var(--av-marinho);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--av-sp-2);
  margin-top: var(--av-sp-2);
  transition: color 0.18s ease;
}

.link:hover { color: var(--av-ceu); }
.link:focus-visible { outline: 2px solid var(--av-ceu); outline-offset: 3px; }
.arrow { transition: transform 0.18s ease; }
.link:hover .arrow { transform: translateX(4px); }
```

- [ ] **Step 5: Criar TeamCard.tsx**

```tsx
// src/components/TeamCard/TeamCard.tsx
import styles from './TeamCard.module.css'

type TeamCardProps = { name: string; role: string; crm: string; bio?: string }

export default function TeamCard({ name, role, crm, bio }: TeamCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.photo} aria-label={`Foto de ${name}`}>
        <span className={styles.photoLabel} aria-hidden="true">[ foto ]</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <p className={styles.crm}>{crm}</p>
        {bio && <p className={styles.bio}>{bio}</p>}
      </div>
    </article>
  )
}
```

- [ ] **Step 6: Criar TeamCard.module.css**

```css
/* src/components/TeamCard/TeamCard.module.css */
.card { background: var(--av-branco); border: 1px solid var(--av-hairline); overflow: hidden; }

.photo {
  aspect-ratio: 3 / 4;
  background: var(--av-gelo);
  display: flex;
  align-items: center;
  justify-content: center;
}

.photoLabel { font-family: monospace; font-size: 11px; color: var(--av-cobalto); letter-spacing: 0.12em; }

.info { padding: var(--av-sp-5); display: flex; flex-direction: column; gap: var(--av-sp-1); }

.name { font-size: 18px; font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: 0; }

.role {
  font-size: 11px;
  font-weight: var(--av-fw-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--av-cobalto);
  margin: 0;
}

.crm { font-size: 12px; color: var(--av-grafite); margin: 0; }

.bio { font-size: 14px; color: var(--av-grafite); line-height: var(--av-lh-base); margin: var(--av-sp-2) 0 0; }
```

- [ ] **Step 7: Commit**

```powershell
git add src/components/Hero src/components/TerapiaCard src/components/TeamCard
git commit -m "feat: componentes Hero, TerapiaCard e TeamCard"
```

---

### Task 9: Home page

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/app/page.module.css`

- [ ] **Step 1: Escrever page.tsx**

```tsx
// src/app/page.tsx
import Hero from '@/components/Hero/Hero'
import Button from '@/components/Button/Button'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import TerapiaCard from '@/components/TerapiaCard/TerapiaCard'
import TeamCard from '@/components/TeamCard/TeamCard'
import styles from './page.module.css'

const terapias = [
  { slug: 'cpap', title: 'CPAP', description: 'Pressão contínua positiva nas vias aéreas. O padrão-ouro no tratamento da apneia obstrutiva do sono moderada a grave.' },
  { slug: 'apap', title: 'APAP', description: 'Pressão automática que se adapta ao longo da noite, ajustando-se às variações da sua respiração.' },
  { slug: 'bipap', title: 'BiPAP', description: 'Dois níveis de pressão para casos mais complexos, incluindo apneia central e insuficiência respiratória.' },
]

const team = [
  { name: 'Dr. André Mendes', role: 'Pneumologia · Medicina do Sono', crm: 'CRM-SP 138.420' },
  { name: 'Dra. Carolina Souza', role: 'Medicina do Sono · Polissonografia', crm: 'CRM-SP 102.345' },
  { name: 'Dr. Felipe Rocha', role: 'Pneumologia · Terapia Respiratória', crm: 'CRM-SP 119.876' },
]

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Medicina do Sono"
        title="Cuide do seu sono. Recupere sua energia."
        description="Diagnóstico, prescrição e acompanhamento da sua terapia respiratória — CPAP, APAP ou BiPAP — com um especialista em medicina do sono."
      />

      {/* Terapias */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <SectionEyebrow>Terapias</SectionEyebrow>
            <h2>A terapia certa para a sua respiração</h2>
            <p>Cada paciente tem um padrão respiratório único. Prescrevemos e acompanhamos a terapia mais adequada para o seu caso.</p>
          </div>
          <div className={styles.grid3}>
            {terapias.map(t => <TerapiaCard key={t.slug} {...t} />)}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sobreGrid}>
            <div className={styles.sobreText}>
              <SectionEyebrow>Sobre a Ares Vida</SectionEyebrow>
              <h2 className={styles.mt4}>O ar que devolve o sono — e a vida.</h2>
              <p className={styles.mt4}>A Ares Vida é uma clínica especializada em medicina do sono e terapia respiratória personalizada. Atendemos pacientes adultos com apneia obstrutiva do sono, oferecendo diagnóstico, prescrição e acompanhamento de CPAP, APAP e BiPAP.</p>
              <p className={styles.mt3}>Nossa abordagem é técnica, acolhedora e centrada no paciente. Cada terapia é construída a partir da fisiologia, do estilo de vida e da rotina de quem busca dormir — e respirar — melhor.</p>
              <Button href="/sobre" variant="ghost" className={styles.mt6}>Conheça nossa abordagem</Button>
            </div>
            <div className={styles.sobreCards}>
              <div className={styles.infoCard} style={{ borderLeft: '3px solid var(--av-ceu)' }}>
                <span className={styles.pill}>Especialidade</span>
                <h3 className={styles.mt3}>Pneumologia & Medicina do Sono</h3>
                <p className={styles.mt2} style={{ fontSize: '15px' }}>Titulados com mestrado acadêmico, atuação em hospitais de ensino e pesquisa em distúrbios respiratórios do sono.</p>
              </div>
              <div className={styles.infoCard} style={{ borderLeft: '3px solid var(--av-cobalto)' }}>
                <span className={styles.pill}>Público</span>
                <h3 className={styles.mt3}>Pacientes, familiares e profissionais</h3>
                <p className={styles.mt2} style={{ fontSize: '15px' }}>Adultos com apneia, familiares cuidadores e médicos parceiros em busca de uma referência confiável.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className={`${styles.section} ${styles.geloSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <SectionEyebrow>Equipe</SectionEyebrow>
            <h2>Especialistas em quem você pode confiar</h2>
          </div>
          <div className={styles.grid3}>
            {team.map(m => <TeamCard key={m.crm} {...m} />)}
          </div>
          <div className={styles.centered}>
            <Button href="/equipe" variant="ghost">Ver toda a equipe</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <SectionEyebrow light>Agendamento</SectionEyebrow>
            <h2 className={styles.ctaTitle}>Pronto para dormir melhor?</h2>
            <p className={styles.ctaDesc}>Agende sua consulta e dê o primeiro passo para uma noite de sono restaurador.</p>
            <Button href="/agendar" variant="ghost">Agendar consulta</Button>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Criar page.module.css**

```css
/* src/app/page.module.css */
.container { max-width: var(--av-container); margin: 0 auto; padding: 0 var(--av-gutter); }

.section { padding: var(--av-sp-9) 0; }
.geloSection { background: var(--av-gelo); }

.sectionHead { max-width: 680px; margin-bottom: var(--av-sp-7); display: flex; flex-direction: column; gap: var(--av-sp-3); }

.grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--av-sp-5); }

.sobreGrid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--av-sp-9); align-items: center; }
.sobreText { display: flex; flex-direction: column; }
.sobreCards { display: flex; flex-direction: column; gap: var(--av-sp-5); }

.infoCard { background: var(--av-gelo); padding: var(--av-sp-7); }

.pill {
  font-size: 11px;
  font-weight: var(--av-fw-semibold);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--av-cobalto);
  border: 1px solid var(--av-hairline);
  border-radius: var(--av-radius-pill);
  padding: 6px 12px;
}

.centered { display: flex; justify-content: center; margin-top: var(--av-sp-7); }

.ctaSection { background: var(--av-marinho); padding: var(--av-sp-9) 0; }
.ctaInner { display: flex; flex-direction: column; align-items: center; text-align: center; gap: var(--av-sp-4); }
.ctaTitle { color: var(--av-branco); margin: 0; }
.ctaDesc { color: rgba(255,255,255,0.78); max-width: 480px; margin: 0; }

.mt2 { margin-top: var(--av-sp-2); }
.mt3 { margin-top: var(--av-sp-3); }
.mt4 { margin-top: var(--av-sp-4); }
.mt6 { margin-top: var(--av-sp-6); }

@media (max-width: 768px) {
  .grid3 { grid-template-columns: 1fr; }
  .sobreGrid { grid-template-columns: 1fr; gap: var(--av-sp-6); }
}
```

- [ ] **Step 3: Verificar home completa**

```powershell
npm run dev
```

Verificar: Hero com grid 1.1/0.9, 3 cards de terapia, sobre com cards laterais com borda colorida, 3 team cards, CTA marinho. Sem erros TypeScript (`npm run build` limpo).

- [ ] **Step 4: Commit**

```powershell
git add src/app/page.tsx src/app/page.module.css
git commit -m "feat: Home page completa com todas as seções"
```

---

### Task 10: Página Sobre

**Files:**
- Create: `src/app/sobre/page.tsx`
- Create: `src/app/sobre/page.module.css`

- [ ] **Step 1: Criar sobre/page.tsx**

```tsx
// src/app/sobre/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import Button from '@/components/Button/Button'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a Ares Vida: missão, abordagem clínica e diferenciais.',
}

const mvv = [
  { label: 'Missão', text: 'Restaurar noites de sono restaurador com diagnóstico preciso, terapia personalizada e acompanhamento contínuo.' },
  { label: 'Visão', text: 'Ser referência em medicina do sono no Brasil — técnica de ponta e cuidado humano juntos.' },
  { label: 'Valores', text: 'Evidência científica. Escuta atenta. Personalização. Continuidade. Transparência.' },
  { label: 'Tom de voz', text: 'Acolhedor, técnico, premium e confiável. Linguagem clara, sem jargão.' },
]

const diferenciais = [
  { label: 'Diagnóstico preciso', text: 'Polissonografia e avaliação clínica completa para identificar tipo e gravidade da apneia.' },
  { label: 'Terapia personalizada', text: 'Prescrição individualizada de CPAP, APAP ou BiPAP com parâmetros ajustados para você.' },
  { label: 'Acompanhamento contínuo', text: 'Consultas de retorno, análise de dados do equipamento e ajustes conforme sua evolução.' },
]

export default function SobrePage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Sobre a Ares Vida</SectionEyebrow>
          <h1 className={styles.title}>O ar que devolve o sono — e a vida.</h1>
          <p className={styles.lead}>A Ares Vida é uma clínica especializada em medicina do sono e terapia respiratória personalizada. Atendemos pacientes adultos com apneia obstrutiva do sono, oferecendo diagnóstico, prescrição e acompanhamento de CPAP, APAP e BiPAP.</p>
        </div>
      </section>

      <section className={styles.mvvSection}>
        <div className={styles.container}>
          <div className={styles.mvvGrid}>
            {mvv.map(({ label, text }) => (
              <div key={label}>
                <SectionEyebrow light>{label}</SectionEyebrow>
                <p className={styles.mvvText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.abordagem}>
        <div className={styles.container}>
          <div className={styles.abordagemGrid}>
            <div>
              <SectionEyebrow>Nossa abordagem</SectionEyebrow>
              <h2 className={styles.h2} id="como-funciona">Cuidar do sono é cuidar da vida inteira.</h2>
              <p className={styles.body}>A apneia obstrutiva do sono afeta milhões de adultos no Brasil. Identificá-la cedo e tratá-la com a terapia certa devolve noites de sono restaurador e protege coração, memória e disposição diária.</p>
              <p className={styles.body}>Nossa abordagem é técnica, acolhedora e centrada no paciente. Cada terapia é construída a partir da fisiologia, do estilo de vida e da rotina de quem busca dormir — e respirar — melhor.</p>
              <Button href="/agendar" variant="primary" className={styles.mt6}>Agendar consulta</Button>
            </div>
            <div className={styles.diferenciais}>
              {diferenciais.map(({ label, text }) => (
                <div key={label} className={styles.diferencial}>
                  <h3 className={styles.diferencialTitle}>{label}</h3>
                  <p className={styles.diferencialText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Criar sobre/page.module.css**

```css
/* src/app/sobre/page.module.css */
.container { max-width: var(--av-container); margin: 0 auto; padding: 0 var(--av-gutter); }

.intro { background: var(--av-gelo); padding: var(--av-sp-9) 0; }
.title { margin: var(--av-sp-3) 0 0; color: var(--av-marinho); }
.lead { font-size: var(--av-fs-body); color: var(--av-grafite); line-height: var(--av-lh-base); margin: var(--av-sp-4) 0 0; max-width: 680px; }

.mvvSection { background: var(--av-marinho); padding: var(--av-sp-9) 0; }
.mvvGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--av-sp-6); }
.mvvText { color: rgba(255,255,255,0.82); line-height: var(--av-lh-base); margin-top: var(--av-sp-4); font-size: 17px; }

.abordagem { padding: var(--av-sp-9) 0; }
.abordagemGrid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--av-sp-9); align-items: start; }
.h2 { margin: var(--av-sp-3) 0 0; }
.body { color: var(--av-grafite); line-height: var(--av-lh-base); margin-top: var(--av-sp-4); }
.mt6 { margin-top: var(--av-sp-6); }

.diferenciais { display: flex; flex-direction: column; gap: var(--av-sp-5); }
.diferencial { border-left: 3px solid var(--av-ceu); padding-left: var(--av-sp-5); }
.diferencialTitle { font-size: 18px; font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: 0; }
.diferencialText { font-size: 15px; color: var(--av-grafite); line-height: var(--av-lh-base); margin: var(--av-sp-2) 0 0; }

@media (max-width: 768px) {
  .mvvGrid { grid-template-columns: 1fr 1fr; }
  .abordagemGrid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .mvvGrid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Commit**

```powershell
git add src/app/sobre
git commit -m "feat: página Sobre com MVV e abordagem clínica"
```

---

### Task 11: Terapias — hub e páginas de detalhe

**Files:**
- Create: `src/app/terapias/page.tsx` + `page.module.css`
- Create: `src/app/terapias/terapia.module.css` (compartilhado)
- Create: `src/app/terapias/cpap/page.tsx`
- Create: `src/app/terapias/apap/page.tsx`
- Create: `src/app/terapias/bipap/page.tsx`

- [ ] **Step 1: Criar hub terapias/page.tsx**

```tsx
// src/app/terapias/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terapias',
  description: 'Conheça as terapias oferecidas pela Ares Vida: CPAP, APAP e BiPAP.',
}

const terapias = [
  { slug: 'cpap', title: 'CPAP', subtitle: 'Pressão contínua positiva', description: 'O padrão-ouro no tratamento da apneia obstrutiva do sono moderada a grave. Mantém pressão constante para manter as vias aéreas abertas durante toda a noite.', indicacao: 'Apneia moderada a grave (IAH ≥ 15/h)' },
  { slug: 'apap', title: 'APAP', subtitle: 'Pressão automática adaptativa', description: 'Ajusta automaticamente a pressão ao longo da noite conforme as necessidades respiratórias de cada momento, oferecendo maior conforto com eficácia equivalente.', indicacao: 'Apneia obstrutiva com variações noturnas' },
  { slug: 'bipap', title: 'BiPAP', subtitle: 'Dois níveis de pressão', description: 'Fornece pressões diferentes na inspiração e expiração, indicado para casos mais complexos ou quando o CPAP não é tolerado adequadamente.', indicacao: 'Apneia central, insuficiência respiratória' },
]

export default function TerapiasPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Terapias</SectionEyebrow>
          <h1 className={styles.title}>Terapia respiratória personalizada</h1>
          <p className={styles.lead}>Cada paciente tem um padrão respiratório único. Prescrevemos e acompanhamos a terapia mais adequada para o seu caso, com ajuste contínuo dos parâmetros.</p>
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.container}>
          {terapias.map(({ slug, title, subtitle, description, indicacao }) => (
            <Link key={slug} href={`/terapias/${slug}`} className={styles.card}>
              <div className={styles.cardHead}>
                <SectionEyebrow>{subtitle}</SectionEyebrow>
                <h2 className={styles.cardTitle}>{title}</h2>
              </div>
              <p className={styles.cardDesc}>{description}</p>
              <div className={styles.cardTag}>
                <span className={styles.tagLabel}>Indicação principal</span>
                <span>{indicacao}</span>
              </div>
              <span className={styles.cardLink}>Saiba mais →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Criar terapias/page.module.css**

```css
/* src/app/terapias/page.module.css */
.container { max-width: var(--av-container); margin: 0 auto; padding: 0 var(--av-gutter); }
.intro { background: var(--av-gelo); padding: var(--av-sp-9) 0; }
.title { margin: var(--av-sp-3) 0 0; color: var(--av-marinho); }
.lead { font-size: var(--av-fs-body); color: var(--av-grafite); line-height: var(--av-lh-base); margin: var(--av-sp-4) 0 0; max-width: 640px; }

.cards { padding: var(--av-sp-9) 0; display: flex; flex-direction: column; }

.card {
  display: grid;
  grid-template-columns: 1fr 1.5fr auto auto;
  align-items: center;
  gap: var(--av-sp-6);
  padding: var(--av-sp-6) var(--av-gutter);
  border-bottom: 1px solid var(--av-hairline);
  text-decoration: none;
  color: inherit;
  transition: background 0.18s ease;
  max-width: var(--av-container);
  margin: 0 auto;
  width: 100%;
}

.card:hover { background: var(--av-gelo); }
.cardHead { display: flex; flex-direction: column; gap: var(--av-sp-2); }
.cardTitle { font-size: var(--av-fs-h2); font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: 0; }
.cardDesc { font-size: var(--av-fs-body-sm); color: var(--av-grafite); line-height: var(--av-lh-base); margin: 0; }
.cardTag { display: flex; flex-direction: column; gap: 4px; }
.tagLabel { font-size: 10px; font-weight: var(--av-fw-semibold); letter-spacing: 0.18em; text-transform: uppercase; color: var(--av-cobalto); }
.cardLink { font-size: 13px; font-weight: var(--av-fw-semibold); color: var(--av-marinho); white-space: nowrap; }

@media (max-width: 768px) {
  .card { grid-template-columns: 1fr; gap: var(--av-sp-3); }
}
```

- [ ] **Step 3: Criar terapia.module.css (compartilhado entre cpap/apap/bipap)**

```css
/* src/app/terapias/terapia.module.css */
.container { max-width: var(--av-container); margin: 0 auto; padding: 0 var(--av-gutter); }

.hero { background: var(--av-gelo); padding: var(--av-sp-9) 0; }
.title { margin: var(--av-sp-3) 0 0; color: var(--av-marinho); }
.lead { font-size: var(--av-fs-body); color: var(--av-grafite); line-height: var(--av-lh-base); margin: var(--av-sp-4) 0 0; max-width: 640px; }

.content { padding: var(--av-sp-9) 0; }
.grid { display: grid; grid-template-columns: 1fr 320px; gap: var(--av-sp-8); align-items: start; }

.h2 { font-size: var(--av-fs-h3); font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: var(--av-sp-6) 0 var(--av-sp-3); }
.h2:first-child { margin-top: 0; }
.body { color: var(--av-grafite); line-height: var(--av-lh-base); margin: 0; }
.list { color: var(--av-grafite); line-height: 1.8; padding-left: var(--av-sp-5); margin: 0; }

.sidebar { display: flex; flex-direction: column; gap: var(--av-sp-4); position: sticky; top: 100px; }
.sidebarCard { background: var(--av-gelo); border: 1px solid var(--av-hairline); padding: var(--av-sp-5); display: flex; flex-direction: column; gap: var(--av-sp-3); }
.sidebarTitle { font-size: 16px; font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: 0; }
.sidebarText { font-size: 14px; color: var(--av-grafite); line-height: 1.5; margin: 0; }

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
  .sidebar { position: static; }
}
```

- [ ] **Step 4: Criar terapias/cpap/page.tsx**

```tsx
// src/app/terapias/cpap/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import Button from '@/components/Button/Button'
import styles from '../terapia.module.css'

export const metadata: Metadata = {
  title: 'CPAP',
  description: 'Pressão positiva contínua nas vias aéreas — tratamento padrão-ouro para apneia obstrutiva do sono.',
}

export default function CpapPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionEyebrow>Terapia</SectionEyebrow>
          <h1 className={styles.title}>CPAP</h1>
          <p className={styles.lead}>Pressão positiva contínua nas vias aéreas (Continuous Positive Airway Pressure). O padrão-ouro no tratamento da apneia obstrutiva do sono moderada a grave.</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <article>
              <h2 className={styles.h2}>O que é?</h2>
              <p className={styles.body}>O CPAP mantém uma pressão de ar constante nas vias aéreas durante o sono, impedindo que colapsem e causem episódios de apneia. É o tratamento de primeira escolha para apneia obstrutiva moderada a grave.</p>
              <h2 className={styles.h2}>Indicações</h2>
              <ul className={styles.list}>
                <li>Apneia obstrutiva do sono moderada (IAH 15–30/h)</li>
                <li>Apneia obstrutiva do sono grave (IAH &gt; 30/h)</li>
                <li>Apneia leve com sintomas diurnos importantes</li>
                <li>Síndrome de hipoventilação por obesidade</li>
              </ul>
              <h2 className={styles.h2}>Como funciona</h2>
              <p className={styles.body}>O equipamento bombeia ar ambiente por uma mangueira conectada a uma máscara (nasal, oronasal ou total face). A pressão é calibrada pelo médico com base na polissonografia ou estudo de titulação.</p>
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Dúvidas sobre o CPAP?</h3>
                <p className={styles.sidebarText}>Agende uma consulta para avaliação e prescrição personalizada.</p>
                <Button href="/agendar" variant="primary">Agendar consulta</Button>
              </div>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Outras terapias</h3>
                <p className={styles.sidebarText}>CPAP não é a única opção. Conheça APAP e BiPAP.</p>
                <Button href="/terapias" variant="ghost">Ver todas</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 5: Criar terapias/apap/page.tsx**

```tsx
// src/app/terapias/apap/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import Button from '@/components/Button/Button'
import styles from '../terapia.module.css'

export const metadata: Metadata = {
  title: 'APAP',
  description: 'Pressão automática adaptativa — ajuste dinâmico durante o sono.',
}

export default function ApapPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionEyebrow>Terapia</SectionEyebrow>
          <h1 className={styles.title}>APAP</h1>
          <p className={styles.lead}>Pressão automática positiva nas vias aéreas (Automatic Positive Airway Pressure). Ajusta a pressão dinamicamente ao longo da noite para máximo conforto e eficácia.</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <article>
              <h2 className={styles.h2}>O que é?</h2>
              <p className={styles.body}>O APAP monitora a respiração em tempo real e ajusta automaticamente a pressão dentro de uma faixa prescrita. Quando a respiração está tranquila, a pressão diminui; ao detectar obstrução, aumenta.</p>
              <h2 className={styles.h2}>Indicações</h2>
              <ul className={styles.list}>
                <li>Apneia obstrutiva com variações posturais (supino vs lateral)</li>
                <li>Apneia do sono relacionada ao sono REM</li>
                <li>Pacientes que não toleraram pressão fixa do CPAP</li>
                <li>Perda ou ganho de peso significativo</li>
              </ul>
              <h2 className={styles.h2}>Como funciona</h2>
              <p className={styles.body}>O médico define uma faixa de pressão (ex: 6–14 cmH₂O). O equipamento permanece na pressão mínima e eleva conforme necessidade, registrando os dados para análise nas consultas de retorno.</p>
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>O APAP é para mim?</h3>
                <p className={styles.sidebarText}>Agende uma consulta para avaliação personalizada.</p>
                <Button href="/agendar" variant="primary">Agendar consulta</Button>
              </div>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Outras terapias</h3>
                <p className={styles.sidebarText}>Conheça também CPAP e BiPAP.</p>
                <Button href="/terapias" variant="ghost">Ver todas</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 6: Criar terapias/bipap/page.tsx**

```tsx
// src/app/terapias/bipap/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import Button from '@/components/Button/Button'
import styles from '../terapia.module.css'

export const metadata: Metadata = {
  title: 'BiPAP',
  description: 'Dois níveis de pressão para casos complexos de apneia e insuficiência respiratória.',
}

export default function BipapPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionEyebrow>Terapia</SectionEyebrow>
          <h1 className={styles.title}>BiPAP</h1>
          <p className={styles.lead}>Pressão positiva de dois níveis (Bilevel Positive Airway Pressure). Inspiração e expiração com pressões independentes, para casos mais complexos ou de difícil adaptação.</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <article>
              <h2 className={styles.h2}>O que é?</h2>
              <p className={styles.body}>O BiPAP fornece uma pressão maior na inspiração (IPAP) e menor na expiração (EPAP), facilitando o ciclo respiratório em pacientes que têm dificuldade de expirar contra pressão contínua.</p>
              <h2 className={styles.h2}>Indicações</h2>
              <ul className={styles.list}>
                <li>Apneia central do sono</li>
                <li>Síndrome de hipoventilação central</li>
                <li>DPOC com hipercapnia</li>
                <li>Pacientes que não toleraram CPAP ou APAP</li>
                <li>Insuficiência respiratória crônica</li>
              </ul>
              <h2 className={styles.h2}>Como funciona</h2>
              <p className={styles.body}>O médico prescreve dois níveis de pressão: IPAP (pressão inspiratória, ex: 14 cmH₂O) e EPAP (pressão expiratória, ex: 8 cmH₂O). A diferença entre eles (PS = pressure support) é o suporte ventilatório.</p>
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Avaliação para BiPAP</h3>
                <p className={styles.sidebarText}>Agende uma consulta especializada para avaliação completa.</p>
                <Button href="/agendar" variant="primary">Agendar consulta</Button>
              </div>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Outras terapias</h3>
                <p className={styles.sidebarText}>Conheça também CPAP e APAP.</p>
                <Button href="/terapias" variant="ghost">Ver todas</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 7: Commit**

```powershell
git add src/app/terapias
git commit -m "feat: hub de terapias e páginas CPAP, APAP e BiPAP"
```

---

### Task 12: Páginas Equipamentos e Equipe

**Files:**
- Create: `src/app/equipamentos/page.tsx` + `page.module.css`
- Create: `src/app/equipe/page.tsx` + `page.module.css`

- [ ] **Step 1: Criar equipamentos/page.tsx**

```tsx
// src/app/equipamentos/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Equipamentos',
  description: 'Catálogo de equipamentos CPAP, APAP e BiPAP indicados pela Ares Vida.',
}

const equipamentos = [
  { fabricante: 'ResMed', modelo: 'AirSense 11 AutoSet', tipo: 'APAP', destaques: ['Algoritmo AutoSet 11ª geração', 'Umidificador integrado HumidAir', 'Conectividade myAir', 'Tela touch colorida'] },
  { fabricante: 'ResMed', modelo: 'AirCurve 10 VAuto', tipo: 'BiPAP', destaques: ['Modo VAuto com PS adaptativo', 'Detector de apneia central', 'Relatórios clínicos detalhados', 'Compatível com máscaras AirFit'] },
  { fabricante: 'Philips Respironics', modelo: 'DreamStation 2 Auto CPAP', tipo: 'APAP', destaques: ['Design compacto com umidificador integrado', 'App DreamMapper', 'Modo AutoRamp', 'Bluetooth + modem 4G'] },
  { fabricante: 'Philips Respironics', modelo: 'BiPAP A40', tipo: 'BiPAP', destaques: ['Pressão IPAP até 40 cmH₂O', 'Modo Avaps automático', 'Para pacientes com hipercapnia', 'Relatórios por SD card'] },
  { fabricante: 'Fisher & Paykel', modelo: 'ICON+ Auto', tipo: 'APAP', destaques: ['Umidificador ThermoSmart integrado', 'Design ultra-silencioso', 'SensAwake para despertares', 'Compatível com máscaras Simplus/Eson'] },
  { fabricante: 'BMC', modelo: 'G3 Auto CPAP', tipo: 'APAP', destaques: ['Custo-benefício', 'AutoRamp com detecção de sono', 'Display OLED', 'App iBreeze'] },
]

export default function EquipamentosPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Equipamentos</SectionEyebrow>
          <h1 className={styles.title}>Catálogo de aparelhos</h1>
          <p className={styles.lead}>Trabalhamos com as principais marcas do mercado. A escolha do equipamento é sempre orientada pelo médico com base no seu diagnóstico e perfil respiratório.</p>
        </div>
      </section>
      <section className={styles.grid_section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {equipamentos.map(({ fabricante, modelo, tipo, destaques }) => (
              <article key={modelo} className={styles.card}>
                <div className={styles.cardPhoto} aria-hidden="true">
                  <span>[ foto · {modelo} ]</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.tipo}>{tipo}</span>
                  <p className={styles.fabricante}>{fabricante}</p>
                  <h3 className={styles.modelo}>{modelo}</h3>
                  <ul className={styles.destaques}>
                    {destaques.map(d => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Criar equipamentos/page.module.css**

```css
/* src/app/equipamentos/page.module.css */
.container { max-width: var(--av-container); margin: 0 auto; padding: 0 var(--av-gutter); }
.intro { background: var(--av-gelo); padding: var(--av-sp-9) 0; }
.title { margin: var(--av-sp-3) 0 0; color: var(--av-marinho); }
.lead { font-size: var(--av-fs-body); color: var(--av-grafite); line-height: var(--av-lh-base); margin: var(--av-sp-4) 0 0; max-width: 600px; }

.grid_section { padding: var(--av-sp-9) 0; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--av-sp-5); }

.card { background: var(--av-branco); border: 1px solid var(--av-hairline); overflow: hidden; transition: box-shadow 0.18s ease; }
.card:hover { box-shadow: var(--av-shadow-card); }

.cardPhoto { background: var(--av-gelo); height: 200px; display: flex; align-items: center; justify-content: center; font-family: monospace; font-size: 11px; color: var(--av-cobalto); letter-spacing: 0.12em; padding: var(--av-sp-4); text-align: center; }

.cardBody { padding: var(--av-sp-5); display: flex; flex-direction: column; gap: var(--av-sp-2); }

.tipo { font-size: 11px; font-weight: var(--av-fw-semibold); letter-spacing: 0.2em; text-transform: uppercase; color: var(--av-cobalto); border: 1px solid var(--av-hairline); border-radius: var(--av-radius-pill); padding: 4px 10px; align-self: flex-start; }

.fabricante { font-size: 12px; color: var(--av-grafite); margin: 0; font-size: 13px; }
.modelo { font-size: 18px; font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: 0; }

.destaques { list-style: none; margin: var(--av-sp-3) 0 0; padding: 0; border-top: 1px solid var(--av-hairline-soft); padding-top: var(--av-sp-3); display: flex; flex-direction: column; gap: var(--av-sp-1); }
.destaques li { font-size: 13px; color: var(--av-grafite); padding-left: var(--av-sp-4); position: relative; }
.destaques li::before { content: '·'; position: absolute; left: var(--av-sp-2); color: var(--av-ceu); font-weight: var(--av-fw-bold); }

@media (max-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Criar equipe/page.tsx**

```tsx
// src/app/equipe/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import TeamCard from '@/components/TeamCard/TeamCard'
import Button from '@/components/Button/Button'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Equipe',
  description: 'Conheça os especialistas em medicina do sono da Ares Vida.',
}

const team = [
  { name: 'Dr. André Mendes', role: 'Pneumologia · Medicina do Sono', crm: 'CRM-SP 138.420 · RQE 67.890', bio: 'Especialista em medicina do sono com mestrado pela USP. Pesquisador em distúrbios respiratórios do sono, com atuação em hospitais de ensino por mais de 12 anos.' },
  { name: 'Dra. Carolina Souza', role: 'Medicina do Sono · Polissonografia', crm: 'CRM-SP 102.345 · RQE 54.321', bio: 'Especializada em polissonografia e titulação de CPAP. Referência em adaptação de terapia respiratória para pacientes com dificuldade de adesão.' },
  { name: 'Dr. Felipe Rocha', role: 'Pneumologia · Terapia Respiratória', crm: 'CRM-SP 119.876 · RQE 61.234', bio: 'Pneumologista com foco em síndrome de hipoventilação e uso de BiPAP em insuficiência respiratória crônica.' },
  { name: 'Dra. Mariana Lima', role: 'Neurologia do Sono', crm: 'CRM-SP 145.678 · RQE 72.456', bio: 'Neurologista especialista em distúrbios do movimento durante o sono e síndrome das pernas inquietas.' },
]

export default function EquipePage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Equipe</SectionEyebrow>
          <h1 className={styles.title}>Especialistas em quem você pode confiar</h1>
          <p className={styles.lead}>Nossa equipe é formada por médicos titulados com experiência em hospitais de ensino e pesquisa em distúrbios respiratórios do sono.</p>
        </div>
      </section>
      <section className={styles.grid_section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {team.map(m => <TeamCard key={m.crm} {...m} />)}
          </div>
          <div className={styles.cta}>
            <p className={styles.ctaText}>Quer conversar com um de nossos especialistas?</p>
            <Button href="/agendar" variant="primary">Agendar consulta</Button>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 4: Criar equipe/page.module.css**

```css
/* src/app/equipe/page.module.css */
.container { max-width: var(--av-container); margin: 0 auto; padding: 0 var(--av-gutter); }
.intro { background: var(--av-gelo); padding: var(--av-sp-9) 0; }
.title { margin: var(--av-sp-3) 0 0; color: var(--av-marinho); }
.lead { font-size: var(--av-fs-body); color: var(--av-grafite); line-height: var(--av-lh-base); margin: var(--av-sp-4) 0 0; max-width: 600px; }

.grid_section { padding: var(--av-sp-9) 0; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--av-sp-5); }

.cta { margin-top: var(--av-sp-9); padding-top: var(--av-sp-7); border-top: 1px solid var(--av-hairline); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--av-sp-4); }
.ctaText { font-size: var(--av-fs-h3); font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: 0; max-width: 480px; }

@media (max-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .grid { grid-template-columns: 1fr; } .cta { flex-direction: column; align-items: flex-start; } }
```

- [ ] **Step 5: Commit**

```powershell
git add src/app/equipamentos src/app/equipe
git commit -m "feat: páginas Equipamentos e Equipe"
```

---

### Task 13: Componente ContactForm e página Contato

**Files:**
- Create: `src/components/ContactForm/ContactForm.tsx` + `ContactForm.module.css`
- Create: `src/app/contato/page.tsx` + `page.module.css`

- [ ] **Step 1: Criar ContactForm.tsx**

```tsx
// src/components/ContactForm/ContactForm.tsx
'use client'
import { useState } from 'react'
import Button from '@/components/Button/Button'
import styles from './ContactForm.module.css'

type FormData = { nome: string; email: string; telefone: string; mensagem: string }
type FormErrors = Partial<Record<keyof FormData, string>>

function validate(d: FormData): FormErrors {
  const e: FormErrors = {}
  if (!d.nome.trim()) e.nome = 'Nome é obrigatório'
  if (!d.email.trim()) e.email = 'E-mail é obrigatório'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'E-mail inválido'
  if (!d.mensagem.trim()) e.mensagem = 'Mensagem é obrigatória'
  return e
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>({ nome: '', email: '', telefone: '', mensagem: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(data)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  if (submitted) {
    return <div className={styles.success}><p>Mensagem enviada! Entraremos em contato em breve.</p></div>
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="nome">Nome completo</label>
        <input id="nome" name="nome" type="text" value={data.nome} onChange={handleChange}
          className={`${styles.input} ${errors.nome ? styles.inputError : ''}`}
          aria-describedby={errors.nome ? 'nome-error' : undefined} />
        {errors.nome && <span id="nome-error" className={styles.error}>{errors.nome}</span>}
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" value={data.email} onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="telefone">Telefone (opcional)</label>
          <input id="telefone" name="telefone" type="tel" value={data.telefone} onChange={handleChange} className={styles.input} />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows={5} value={data.mensagem} onChange={handleChange}
          className={`${styles.input} ${styles.textarea} ${errors.mensagem ? styles.inputError : ''}`}
          aria-describedby={errors.mensagem ? 'mensagem-error' : undefined} />
        {errors.mensagem && <span id="mensagem-error" className={styles.error}>{errors.mensagem}</span>}
      </div>
      <Button type="submit" variant="primary">Enviar mensagem</Button>
    </form>
  )
}
```

- [ ] **Step 2: Criar ContactForm.module.css**

```css
/* src/components/ContactForm/ContactForm.module.css */
.form { display: flex; flex-direction: column; gap: var(--av-sp-5); }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--av-sp-5); }
.field { display: flex; flex-direction: column; gap: var(--av-sp-1); }
.label { font-family: var(--av-font-sans); font-size: 13px; font-weight: var(--av-fw-medium); color: var(--av-marinho); }
.input {
  font-family: var(--av-font-sans); font-size: var(--av-fs-body-sm); color: var(--av-grafite);
  border: 1px solid var(--av-hairline); padding: 12px var(--av-sp-4); background: var(--av-branco);
  outline: none; transition: border-color 0.18s ease; width: 100%; border-radius: var(--av-radius-none);
}
.input:focus { border-color: var(--av-marinho); border-width: 1.5px; }
.inputError { border-color: var(--av-danger); }
.textarea { resize: vertical; min-height: 120px; }
.error { font-size: 12px; color: var(--av-danger); }
.success { background: #edf7f2; border: 1px solid var(--av-success); padding: var(--av-sp-5); color: var(--av-success); font-weight: var(--av-fw-medium); }

@media (max-width: 600px) { .row { grid-template-columns: 1fr; } }
```

- [ ] **Step 3: Criar contato/page.tsx**

```tsx
// src/app/contato/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import ContactForm from '@/components/ContactForm/ContactForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Ares Vida. Formulário, endereço e WhatsApp.',
}

export default function ContatoPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Contato</SectionEyebrow>
          <h1 className={styles.title}>Fale com a Ares Vida</h1>
        </div>
      </section>
      <section className={styles.body}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h2 className={styles.h2}>Envie uma mensagem</h2>
              <ContactForm />
            </div>
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Endereço</h3>
                <p className={styles.infoText}>Av. Paulista, 1842 · 14º andar<br />Bela Vista · São Paulo · SP<br />CEP 01310-945</p>
              </div>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Telefone e WhatsApp</h3>
                <a href="tel:+551140028922" className={styles.infoLink}>+55 11 4002-8922</a>
                <a href="https://wa.me/551140028922" className={styles.whatsapp} target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp →
                </a>
              </div>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>E-mail</h3>
                <a href="mailto:contato@aresvida.com.br" className={styles.infoLink}>contato@aresvida.com.br</a>
              </div>
              <div className={styles.mapPlaceholder} aria-label="Mapa — localização da clínica">
                <span>[ mapa · Av. Paulista, 1842 ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 4: Criar contato/page.module.css**

```css
/* src/app/contato/page.module.css */
.container { max-width: var(--av-container); margin: 0 auto; padding: 0 var(--av-gutter); }
.intro { background: var(--av-gelo); padding: var(--av-sp-9) 0; }
.title { margin: var(--av-sp-3) 0 0; color: var(--av-marinho); }

.body { padding: var(--av-sp-9) 0; }
.grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: var(--av-sp-8); align-items: start; }

.h2 { font-size: var(--av-fs-h3); font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: 0 0 var(--av-sp-5); }

.info { display: flex; flex-direction: column; gap: var(--av-sp-5); }
.infoBlock { display: flex; flex-direction: column; gap: var(--av-sp-2); }
.infoTitle { font-size: 12px; font-weight: var(--av-fw-semibold); letter-spacing: 0.18em; text-transform: uppercase; color: var(--av-cobalto); margin: 0; }
.infoText { font-size: 15px; color: var(--av-grafite); line-height: 1.6; margin: 0; }
.infoLink { font-size: 15px; color: var(--av-marinho); text-decoration: none; transition: color 0.18s ease; }
.infoLink:hover { color: var(--av-ceu); }
.whatsapp { font-size: 14px; font-weight: var(--av-fw-semibold); color: var(--av-success); text-decoration: none; }

.mapPlaceholder {
  height: 220px; background: var(--av-gelo); border: 1px solid var(--av-hairline);
  display: flex; align-items: center; justify-content: center;
  font-family: monospace; font-size: 11px; color: var(--av-cobalto); letter-spacing: 0.12em;
}

@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
```

- [ ] **Step 5: Commit**

```powershell
git add src/components/ContactForm src/app/contato
git commit -m "feat: ContactForm com validação e página Contato"
```

---

### Task 14: Componente AgendarStepper e página Agendar

**Files:**
- Create: `src/components/AgendarStepper/AgendarStepper.tsx` + `AgendarStepper.module.css`
- Create: `src/app/agendar/page.tsx` + `page.module.css`

- [ ] **Step 1: Criar AgendarStepper.tsx**

```tsx
// src/components/AgendarStepper/AgendarStepper.tsx
'use client'
import { useState } from 'react'
import Button from '@/components/Button/Button'
import styles from './AgendarStepper.module.css'

const STEPS = ['Motivo', 'Data e horário', 'Seus dados']

const MOTIVOS = [
  'Diagnóstico de apneia do sono',
  'Prescrição de CPAP/APAP/BiPAP',
  'Acompanhamento de terapia em curso',
  'Segunda opinião',
  'Outro motivo',
]

const HORARIOS = ['08:00','09:00','10:00','11:00','14:00','15:00','16:00','17:00']

type FormData = { motivo: string; data: string; horario: string; nome: string; email: string; telefone: string }

export default function AgendarStepper() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>({ motivo: '', data: '', horario: '', nome: '', email: '', telefone: '' })
  const [done, setDone] = useState(false)

  function set(field: keyof FormData, value: string) {
    setData(prev => ({ ...prev, [field]: value }))
  }

  if (done) {
    return (
      <div className={styles.success}>
        <h2 className={styles.successTitle}>Consulta solicitada com sucesso!</h2>
        <p className={styles.successText}>Entraremos em contato para confirmar o agendamento. Verifique seu e-mail em breve.</p>
      </div>
    )
  }

  return (
    <div className={styles.stepper}>
      <div className={styles.steps} role="list" aria-label="Etapas do agendamento">
        {STEPS.map((label, i) => (
          <div key={i} role="listitem"
            className={`${styles.step} ${i === step ? styles.active : ''} ${i < step ? styles.done : ''}`}>
            <div className={styles.stepNum}>{i + 1}</div>
            <span className={styles.stepLabel}>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.panel}>
        {step === 0 && (
          <>
            <h2 className={styles.panelTitle}>Qual é o motivo da consulta?</h2>
            <div className={styles.options} role="radiogroup" aria-label="Motivo da consulta">
              {MOTIVOS.map(m => (
                <label key={m} className={`${styles.option} ${data.motivo === m ? styles.selected : ''}`}>
                  <input type="radio" name="motivo" value={m} checked={data.motivo === m}
                    onChange={() => set('motivo', m)} className={styles.radio} />
                  {m}
                </label>
              ))}
            </div>
            <div className={styles.actions}>
              <Button variant="primary" onClick={() => { if (data.motivo) setStep(1) }}>Continuar</Button>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className={styles.panelTitle}>Escolha a data e horário</h2>
            <div className={styles.dateRow}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="data">Data preferida</label>
                <input id="data" type="date" value={data.data} onChange={e => set('data', e.target.value)}
                  className={styles.input} min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="horario">Horário preferido</label>
                <select id="horario" value={data.horario} onChange={e => set('horario', e.target.value)} className={styles.input}>
                  <option value="">Selecione…</option>
                  {HORARIOS.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>
            <div className={styles.actions}>
              <Button variant="ghost" onClick={() => setStep(0)}>Voltar</Button>
              <Button variant="primary" onClick={() => { if (data.data && data.horario) setStep(2) }}>Continuar</Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className={styles.panelTitle}>Seus dados para contato</h2>
            <div className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="nome">Nome completo</label>
                <input id="nome" type="text" value={data.nome} onChange={e => set('nome', e.target.value)} className={styles.input} />
              </div>
              <div className={styles.dateRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">E-mail</label>
                  <input id="email" type="email" value={data.email} onChange={e => set('email', e.target.value)} className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="telefone">Telefone</label>
                  <input id="telefone" type="tel" value={data.telefone} onChange={e => set('telefone', e.target.value)} className={styles.input} />
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <Button variant="ghost" onClick={() => setStep(1)}>Voltar</Button>
              <Button variant="primary" onClick={() => { if (data.nome && data.email) setDone(true) }}>Confirmar agendamento</Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Criar AgendarStepper.module.css**

```css
/* src/components/AgendarStepper/AgendarStepper.module.css */
.stepper { max-width: 680px; margin: 0 auto; }

.steps { display: flex; gap: var(--av-sp-6); margin-bottom: var(--av-sp-7); }
.step { display: flex; align-items: center; gap: var(--av-sp-2); flex: 1; }
.stepNum {
  width: 32px; height: 32px; border-radius: 50%;
  border: 2px solid var(--av-hairline);
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: var(--av-fw-semibold); color: rgba(22,31,100,0.4);
  flex-shrink: 0; transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
}
.active .stepNum { background: var(--av-marinho); border-color: var(--av-marinho); color: var(--av-branco); }
.done .stepNum { background: var(--av-cobalto); border-color: var(--av-cobalto); color: var(--av-branco); }
.stepLabel { font-size: 13px; font-weight: var(--av-fw-medium); color: rgba(22,31,100,0.4); transition: color 0.18s ease; }
.active .stepLabel, .done .stepLabel { color: var(--av-marinho); }

.panel { background: var(--av-branco); border: 1px solid var(--av-hairline); padding: var(--av-sp-7); }
.panelTitle { font-size: var(--av-fs-h3); font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: 0 0 var(--av-sp-6); }

.options { display: flex; flex-direction: column; gap: var(--av-sp-2); }
.option {
  display: flex; align-items: center; gap: var(--av-sp-3);
  padding: var(--av-sp-4); border: 1px solid var(--av-hairline);
  cursor: pointer; font-size: var(--av-fs-body-sm); color: var(--av-grafite);
  transition: border-color 0.18s ease, background 0.18s ease;
}
.option:hover { border-color: var(--av-cobalto); background: var(--av-gelo); }
.selected { border-color: var(--av-marinho); background: var(--av-gelo); color: var(--av-marinho); font-weight: var(--av-fw-medium); }
.radio { accent-color: var(--av-marinho); }

.dateRow { display: grid; grid-template-columns: 1fr 1fr; gap: var(--av-sp-5); }
.form { display: flex; flex-direction: column; gap: var(--av-sp-5); }
.field { display: flex; flex-direction: column; gap: var(--av-sp-1); }
.label { font-size: 13px; font-weight: var(--av-fw-medium); color: var(--av-marinho); }
.input {
  font-family: var(--av-font-sans); font-size: var(--av-fs-body-sm); color: var(--av-grafite);
  border: 1px solid var(--av-hairline); padding: 12px var(--av-sp-4);
  background: var(--av-branco); outline: none; transition: border-color 0.18s ease; width: 100%;
}
.input:focus { border-color: var(--av-marinho); border-width: 1.5px; }

.actions { display: flex; gap: var(--av-sp-3); margin-top: var(--av-sp-6); }

.success { text-align: center; padding: var(--av-sp-9) var(--av-sp-7); background: var(--av-gelo); border: 1px solid var(--av-hairline); }
.successTitle { font-size: var(--av-fs-h2); font-weight: var(--av-fw-semibold); color: var(--av-marinho); margin: 0 0 var(--av-sp-4); }
.successText { color: var(--av-grafite); line-height: var(--av-lh-base); margin: 0; }

@media (max-width: 600px) {
  .steps { gap: var(--av-sp-3); }
  .stepLabel { display: none; }
  .dateRow { grid-template-columns: 1fr; }
  .panel { padding: var(--av-sp-5); }
}
```

- [ ] **Step 3: Criar agendar/page.tsx**

```tsx
// src/app/agendar/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import AgendarStepper from '@/components/AgendarStepper/AgendarStepper'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Agendar consulta',
  description: 'Agende sua consulta na Ares Vida em poucos passos.',
}

export default function AgendarPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Agendamento</SectionEyebrow>
          <h1 className={styles.title}>Agende sua consulta</h1>
          <p className={styles.lead}>Preencha as informações abaixo e entraremos em contato para confirmar sua consulta.</p>
        </div>
      </section>
      <section className={styles.body}>
        <div className={styles.container}>
          <AgendarStepper />
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 4: Criar agendar/page.module.css**

```css
/* src/app/agendar/page.module.css */
.container { max-width: var(--av-container); margin: 0 auto; padding: 0 var(--av-gutter); }
.intro { background: var(--av-gelo); padding: var(--av-sp-9) 0; }
.title { margin: var(--av-sp-3) 0 0; color: var(--av-marinho); }
.lead { font-size: var(--av-fs-body); color: var(--av-grafite); line-height: var(--av-lh-base); margin: var(--av-sp-4) 0 0; max-width: 520px; }
.body { padding: var(--av-sp-9) 0; }
```

- [ ] **Step 5: Commit**

```powershell
git add src/components/AgendarStepper src/app/agendar
git commit -m "feat: AgendarStepper (3 etapas) e página Agendar"
```

---

### Task 15: Build final, verificação e push para GitHub

**Files:** nenhum novo

- [ ] **Step 1: Build de produção**

```powershell
npm run build
```

Esperado: build concluído sem erros de TypeScript ou ESLint. Se houver warnings de `next/image` sobre tamanhos, adicionar `width` e `height` adequados.

- [ ] **Step 2: Verificar todas as rotas**

```powershell
npm run dev
```

Verificar cada rota manualmente:
- `http://localhost:3000` — Home
- `http://localhost:3000/sobre`
- `http://localhost:3000/terapias`
- `http://localhost:3000/terapias/cpap`
- `http://localhost:3000/terapias/apap`
- `http://localhost:3000/terapias/bipap`
- `http://localhost:3000/equipamentos`
- `http://localhost:3000/equipe`
- `http://localhost:3000/contato` — preencher e enviar formulário
- `http://localhost:3000/agendar` — percorrer as 3 etapas

- [ ] **Step 3: Verificar responsivo**

No DevTools, testar 375 px (mobile), 768 px (tablet) e 1280 px (desktop) nas páginas Home, Terapias e Contato.

- [ ] **Step 4: Configurar remote e push**

```powershell
git remote add origin https://github.com/FernandoAzevedo1971/AresVida_site_completo.git
git branch -M main
git push -u origin main
```

- [ ] **Step 5: Commit final**

```powershell
git add .
git commit -m "chore: site institucional Ares Vida v1.0 completo"
git push
```

---

## Self-review

**Spec coverage:**
- ✅ Stack Next.js 14 App Router + CSS Modules + tokens.css
- ✅ Todas as 9 rotas implementadas
- ✅ Header sticky com nav + mobile drawer
- ✅ Footer grid 4 colunas + faixa legal
- ✅ Hero com grid 1.1/0.9 e placeholder imagem
- ✅ Botões primary e ghost conforme brandbook
- ✅ Eyebrow tipográfico com tracking 0.18em
- ✅ Tokens `--av-*` usados em todos os componentes, zero valores literais
- ✅ ContactForm com validação de e-mail e campos obrigatórios
- ✅ AgendarStepper com 3 etapas
- ✅ Transições `.18s ease` e foco a11y `outline: 2px solid var(--av-ceu)`
- ✅ Metadata por página via `export const metadata`
- ✅ Favicon SVG configurado no layout

**Placeholder scan:** sem TBD, TODO ou referências não definidas.

**Type consistency:** `ButtonProps`, `HeroProps`, `TerapiaCardProps`, `TeamCardProps`, `FormData` usados consistentemente em todos os tasks.
