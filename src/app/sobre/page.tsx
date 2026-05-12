// src/app/sobre/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import Button from '@/components/Button/Button'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a Ares Vida: missão, abordagem clínica e diferenciais.',
}

const mvv = [
  { label: 'Missão', text: 'Restaurar noites de sono restaurador com diagnóstico preciso, terapia personalizada e acompanhamento contínuo.' },
  { label: 'Visão', text: 'Ser referência em medicina do sono no Brasil — técnica de ponta e cuidado humano juntos.' },
  { label: 'Valores', text: 'Evidência científica. Escuta atenta. Personalização. Continuidade. Transparência.' },
  { label: 'Tom de voz', text: 'Acolhedor, técnico, premium e confiável. Linguagem clara, sem jargão.' },
]

const diferenciais = [
  { label: 'Diagnóstico preciso', text: 'Polissonografia e avaliação clínica completa para identificar tipo e gravidade da apneia.' },
  { label: 'Terapia personalizada', text: 'Prescrição individualizada de CPAP, APAP ou BiPAP com parâmetros ajustados para você.' },
  { label: 'Acompanhamento contínuo', text: 'Consultas de retorno, análise de dados do equipamento e ajustes conforme sua evolução.' },
]

export default function SobrePage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Sobre a Ares Vida</SectionEyebrow>
          <h1 className={styles.title}>O ar que devolve o sono — e a vida.</h1>
          <p className={styles.lead}>A Ares Vida é uma clínica especializada em medicina do sono e terapia respiratória personalizada. Atendemos pacientes adultos com apneia obstrutiva do sono, oferecendo diagnóstico, prescrição e acompanhamento de CPAP, APAP e BiPAP.</p>
        </div>
      </section>

      <section className={styles.mvvSection}>
        <div className={styles.container}>
          <div className={styles.mvvGrid}>
            {mvv.map(({ label, text }) => (
              <div key={label}>
                <SectionEyebrow light>{label}</SectionEyebrow>
                <p className={styles.mvvText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.abordagem}>
        <div className={styles.container}>
          <div className={styles.abordagemGrid}>
            <div>
              <SectionEyebrow>Nossa abordagem</SectionEyebrow>
              <h2 className={styles.h2} id="como-funciona">Cuidar do sono é cuidar da vida inteira.</h2>
              <p className={styles.body}>A apneia obstrutiva do sono afeta milhões de adultos no Brasil. Identificá-la cedo e tratá-la com a terapia certa devolve noites de sono restaurador e protege coração, memória e disposição diária.</p>
              <p className={styles.body}>Nossa abordagem é técnica, acolhedora e centrada no paciente. Cada terapia é construída a partir da fisiologia, do estilo de vida e da rotina de quem busca dormir — e respirar — melhor.</p>
              <Button href="/agendar" variant="primary" className={styles.mt6}>Agendar consulta</Button>
            </div>
            <div className={styles.diferenciais}>
              {diferenciais.map(({ label, text }) => (
                <div key={label} className={styles.diferencial}>
                  <h3 className={styles.diferencialTitle}>{label}</h3>
                  <p className={styles.diferencialText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
