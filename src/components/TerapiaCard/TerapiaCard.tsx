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
