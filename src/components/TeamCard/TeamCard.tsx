// src/components/TeamCard/TeamCard.tsx
import Image from 'next/image'
import styles from './TeamCard.module.css'

type TeamCardProps = { name: string; role: string; crm: string; rqe?: string; bio?: string; image?: string }

export default function TeamCard({ name, role, crm, rqe, bio, image }: TeamCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.photo} aria-label={`Foto de ${name}`}>
        {image
          ? <Image src={image} alt={`Foto de ${name}`} fill className={styles.photoImg} />
          : <span className={styles.photoLabel} aria-hidden="true">[ foto ]</span>
        }
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <p className={styles.crm}>{crm}</p>
        {rqe && <p className={styles.crm}>{rqe}</p>}
        {bio && <p className={styles.bio}>{bio}</p>}
      </div>
    </article>
  )
}
