// src/components/TeamCard/TeamCard.tsx
import styles from './TeamCard.module.css'

type TeamCardProps = { name: string; role: string; crm: string; bio?: string }

export default function TeamCard({ name, role, crm, bio }: TeamCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.photo} aria-label={`Foto de ${name}`}>
        <span className={styles.photoLabel} aria-hidden="true">[ foto ]</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <p className={styles.crm}>{crm}</p>
        {bio && <p className={styles.bio}>{bio}</p>}
      </div>
    </article>
  )
}
