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
