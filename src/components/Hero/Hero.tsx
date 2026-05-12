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
