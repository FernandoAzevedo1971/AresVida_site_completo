// src/components/TestimonialCard/TestimonialCard.tsx
import styles from './TestimonialCard.module.css'

type TestimonialCardProps = {
  quote: string
  name: string
  role?: string
}

export default function TestimonialCard({ quote, name, role = 'Paciente' }: TestimonialCardProps) {
  return (
    <figure className={styles.card}>
      <svg className={styles.quoteIcon} viewBox="0 0 32 22" fill="none" aria-hidden="true">
        <path
          d="M0 22V13.273C0 5.909 4.364 1.636 13.09 0l1.456 2.545C10.182 3.818 7.818 6.182 7.273 10H13V22H0Zm19 0V13.273C19 5.909 23.364 1.636 32.09 0l1.456 2.545c-4.364 1.273-6.728 3.637-7.273 7.455H32V22H19Z"
          fill="currentColor"
        />
      </svg>
      <blockquote className={styles.quote}>{quote}</blockquote>
      <figcaption className={styles.caption}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </figcaption>
    </figure>
  )
}
