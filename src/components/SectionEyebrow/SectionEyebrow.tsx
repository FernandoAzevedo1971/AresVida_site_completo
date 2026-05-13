// src/components/SectionEyebrow/SectionEyebrow.tsx
import styles from './SectionEyebrow.module.css'

type Props = { children: React.ReactNode; light?: boolean; purple?: boolean }

export default function SectionEyebrow({ children, light = false, purple = false }: Props) {
  const mod = light ? styles.light : purple ? styles.purple : ''
  return (
    <div className={`${styles.eyebrow} ${mod}`}>
      {children}
    </div>
  )
}
