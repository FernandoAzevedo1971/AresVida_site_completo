// src/app/agendar/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import AgendarStepper from '@/components/AgendarStepper/AgendarStepper'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Agendar atendimento',
  description: 'Agende sua consulta na Ares Vida em poucos passos.',
}

export default function AgendarPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Agendamento</SectionEyebrow>
          <h1 className={styles.title}>Agende sua consulta</h1>
          <p className={styles.lead}>Preencha as informações abaixo e entraremos em contato para confirmar sua consulta.</p>
        </div>
      </section>
      <section className={styles.body}>
        <div className={styles.container}>
          <AgendarStepper />
        </div>
      </section>
    </>
  )
}
