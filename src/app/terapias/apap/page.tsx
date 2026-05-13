// src/app/terapias/apap/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import Button from '@/components/Button/Button'
import styles from '../terapia.module.css'

export const metadata: Metadata = {
  title: 'APAP',
  description: 'Pressão automática adaptativa — ajuste dinâmico durante o sono.',
}

export default function ApapPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionEyebrow>Terapia</SectionEyebrow>
          <h1 className={styles.title}>APAP</h1>
          <p className={styles.lead}>Pressão automática positiva nas vias aéreas (Automatic Positive Airway Pressure). Ajusta a pressão dinamicamente ao longo da noite para máximo conforto e eficácia.</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <article>
              <h2 className={styles.h2}>O que é?</h2>
              <p className={styles.body}>O APAP monitora a respiração em tempo real e ajusta automaticamente a pressão dentro de uma faixa prescrita. Quando a respiração está tranquila, a pressão diminui; ao detectar obstrução, aumenta.</p>
              <h2 className={styles.h2}>Indicações</h2>
              <ul className={styles.list}>
                <li>Apneia obstrutiva com variações posturais (supino vs lateral)</li>
                <li>Apneia do sono relacionada ao sono REM</li>
                <li>Pacientes que não toleraram pressão fixa do CPAP</li>
                <li>Perda ou ganho de peso significativo</li>
              </ul>
              <h2 className={styles.h2}>Como funciona</h2>
              <p className={styles.body}>O médico define uma faixa de pressão (ex: 6–14 cmH₂O). O equipamento permanece na pressão mínima e eleva conforme necessidade, registrando os dados para análise nas consultas de retorno.</p>
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>O APAP é para mim?</h3>
                <p className={styles.sidebarText}>Agende uma consulta para avaliação personalizada.</p>
                <Button href="/agendar" variant="primary">Agendar atendimento</Button>
              </div>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Outras terapias</h3>
                <p className={styles.sidebarText}>Conheça também CPAP e BiPAP.</p>
                <Button href="/terapias" variant="ghost">Ver todas</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
