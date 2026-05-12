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
