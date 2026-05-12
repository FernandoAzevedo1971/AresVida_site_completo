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
        <Link href="/politica-de-cookies" className={styles.legalLink}>Política de Cookies</Link>
      </div>
    </footer>
  )
}
