// src/app/terapias/bipap/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import Button from '@/components/Button/Button'
import styles from '../terapia.module.css'

export const metadata: Metadata = {
  title: 'BiPAP',
  description: 'Dois níveis de pressão para casos complexos de apneia e insuficiência respiratória.',
}

export default function BipapPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <SectionEyebrow>Terapia</SectionEyebrow>
          <h1 className={styles.title}>BiPAP</h1>
          <p className={styles.lead}>Pressão positiva de dois níveis (Bilevel Positive Airway Pressure). Inspiração e expiração com pressões independentes, para casos mais complexos ou de difícil adaptação.</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <article>
              <h2 className={styles.h2}>O que é?</h2>
              <p className={styles.body}>O BiPAP fornece uma pressão maior na inspiração (IPAP) e menor na expiração (EPAP), facilitando o ciclo respiratório em pacientes que têm dificuldade de expirar contra pressão contínua.</p>
              <h2 className={styles.h2}>Indicações</h2>
              <ul className={styles.list}>
                <li>Apneia central do sono</li>
                <li>Síndrome de hipoventilação central</li>
                <li>DPOC com hipercapnia</li>
                <li>Pacientes que não toleraram CPAP ou APAP</li>
                <li>Insuficiência respiratória crônica</li>
              </ul>
              <h2 className={styles.h2}>Como funciona</h2>
              <p className={styles.body}>O médico prescreve dois níveis de pressão: IPAP (pressão inspiratória, ex: 14 cmH₂O) e EPAP (pressão expiratória, ex: 8 cmH₂O). A diferença entre eles (PS = pressure support) é o suporte ventilatório.</p>
            </article>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Avaliação para BiPAP</h3>
                <p className={styles.sidebarText}>Agende uma consulta especializada para avaliação completa.</p>
                <Button href="/agendar" variant="primary">Agendar atendimento</Button>
              </div>
              <div className={styles.sidebarCard}>
                <h3 className={styles.sidebarTitle}>Outras terapias</h3>
                <p className={styles.sidebarText}>Conheça também CPAP e APAP.</p>
                <Button href="/terapias" variant="ghost">Ver todas</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
