# Design Spec — Paleta Roxa Marcante na Home

**Data:** 2026-05-13  
**Escopo:** `src/app/page.tsx` e componentes usados exclusivamente na home  
**Abordagem aprovada:** Opção A — Hero escuro com gradiente + seções alternadas nebulosa/branco + CTA ametista

---

## 1. Novos tokens (tokens.css)

| Token | Valor | Uso |
|---|---|---|
| `--av-ametista` | `#6B3FA0` | Cor roxa principal: eyebrows, bordas, CTA bg |
| `--av-violeta` | `#8B5CC8` | Hover states, acentos secundários |
| `--av-lavanda` | `#C4A8E8` | Eyebrow sobre fundo escuro, bordas suaves |
| `--av-nebulosa` | `#F0E8FA` | Fundo de seção roxo claro |
| `--av-aurora` | `linear-gradient(135deg, #161F64 0%, #6B3FA0 100%)` | Fundo do hero |

---

## 2. Mudanças por seção

### Hero (`Hero.module.css`)
- `background`: `var(--av-aurora)`
- `.title`: `color: var(--av-branco)`
- `.description`: `color: rgba(255,255,255,0.82)`
- `.imagePlaceholder`: tons do gradiente (substituir azul acinzentado)
- Eyebrow no Hero.tsx: passar prop `light` para ficar legível

### Seção Terapias (`page.module.css` + `TerapiaCard.module.css`)
- Fundo: branco (sem mudança)
- Eyebrow: variante `purple` → `color: var(--av-ametista)`
- Card hover: adicionar `border-top: 3px solid var(--av-ametista)` no hover
- Link hover: `color: var(--av-violeta)` (era `--av-ceu`)

### Seção Sobre (`page.module.css`)
- Fundo: `var(--av-nebulosa)`
- Eyebrow: variante `purple`
- `.infoCard` borderLeft: trocar `--av-ceu` → `--av-ametista` e `--av-cobalto` → `--av-violeta`
- `.pill`: `color: var(--av-ametista)`, `border-color: var(--av-ametista)`

### Seção Equipe (`page.module.css`)
- Fundo: branco (era `--av-gelo`, alterna com nebulosa acima)
- Eyebrow: variante `purple`

### Seção Depoimentos (`Testimonials.module.css` + `TestimonialCard.module.css`)
- Fundo: `var(--av-nebulosa)` (era `--av-gelo`)
- Eyebrow: variante `purple`
- Ícone de aspas: `var(--av-ametista)` (era `--av-ceu`)

### Seção CTA (`page.module.css`)
- Fundo: `var(--av-ametista)` (era `var(--av-marinho)`)
- Eyebrow `light`: `color: var(--av-lavanda)`
- Título e texto: branco (sem mudança)

---

## 3. SectionEyebrow — nova variante

O componente atual usa `--av-cobalto`. Adicionar suporte a variante `purple`:

```tsx
// SectionEyebrow.tsx
interface Props {
  children: ReactNode
  light?: boolean
  purple?: boolean  // nova prop
}
```

```css
/* SectionEyebrow.module.css */
.purple { color: var(--av-ametista); }
```

---

## 4. Arquivos a modificar

1. `src/styles/tokens.css` — adicionar 5 tokens
2. `src/components/SectionEyebrow/SectionEyebrow.tsx` — prop `purple`
3. `src/components/SectionEyebrow/SectionEyebrow.module.css` — classe `.purple`
4. `src/components/Hero/Hero.module.css` — aurora bg, texto branco
5. `src/components/Hero/Hero.tsx` — passar `light` para eyebrow interno
6. `src/app/page.module.css` — nebulosa nas seções Sobre e Equipe, ametista no CTA
7. `src/app/page.tsx` — passar prop `purple` nos eyebrows, trocar `geloSection` por `nebulosSection` onde aplicável
8. `src/components/TerapiaCard/TerapiaCard.module.css` — hover border-top ametista, link hover violeta
9. `src/components/Testimonials/Testimonials.module.css` — fundo nebulosa
10. `src/components/TestimonialCard/TestimonialCard.module.css` — aspas ametista

---

## 5. O que NÃO muda

- Outras páginas do site (escopo restrito à home)
- Tipografia, espaçamento, layout grid
- Componente Button (variantes existentes são suficientes)
- Header e Footer
