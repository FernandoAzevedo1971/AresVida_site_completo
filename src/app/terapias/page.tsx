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
