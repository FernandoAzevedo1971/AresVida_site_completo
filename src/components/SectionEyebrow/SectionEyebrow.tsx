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
