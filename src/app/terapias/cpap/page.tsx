// src/app/terapias/cpap/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import Button from '@/components/Button/Button'
import styles from '../terapia.module.css'

export const metadata: Metadata = {
  title: 'CPAP',
  description: 'Pressão positiva contínua nas vias aéreas — tratamento padrão-ouro para apneia obstrutiva do sono.',
}

export default function CpapPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionEyebrow>Terapia</SectionEyebrow>
          <h1 className={styles.title}>CPAP</h1>
          <p className={styles.lead}>Pressão positiva contínua nas vias aéreas (Continuous Positive Airway Pressure). O padrão-ouro no tratamento da apneia obstrutiva do sono moderada a grave.</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <article>
              <h2 className={styles.h2}>O que é?</h2>
              <p className={styles.body}>O CPAP mantém uma pressão de ar constante nas vias aéreas durante o sono, impedindo que colapsem e causem episódios de apneia. É o tratamento de primeira escolha para apneia obstrutiva moderada a grave.</p>
              <h2 className={styles.h2}>Indicações</h2>
              <ul className={styles.list}>
                <li>Apneia obstrutiva do sono moderada (IAH 15–30/h)</li>
                <li>Apneia obstrutiva do sono grave (IAH &gt; 30/h)</li>
                <li>Apneia leve com sintomas diurnos importantes</li>
                <li>Síndrome de hipoventilação por obesidade</li>
              </ul>
              <h2 className={styles.h2}>Como funciona</h2>
              <p className={styles.body}>O equipamento bombeia ar ambiente por uma mangueira conectada a uma máscara (nasal, oronasal ou total face). A pressão é calibrada pelo médico com base na polissonografia ou estudo de titulação.</p>
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Dúvidas sobre o CPAP?</h3>
                <p className={styles.sidebarText}>Agende uma consulta para avaliação e prescrição personalizada.</p>
                <Button href="/agendar" variant="primary">Agendar consulta</Button>
              </div>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Outras terapias</h3>
                <p className={styles.sidebarText}>CPAP não é a única opção. Conheça APAP e BiPAP.</p>
                <Button href="/terapias" variant="ghost">Ver todas</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
