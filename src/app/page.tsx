// src/app/page.tsx
import Hero from '@/components/Hero/Hero'
import Button from '@/components/Button/Button'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import TerapiaCard from '@/components/TerapiaCard/TerapiaCard'
import TeamCard from '@/components/TeamCard/TeamCard'
import Testimonials from '@/components/Testimonials/Testimonials'
import styles from './page.module.css'

const terapias = [
  { slug: 'cpap', title: 'CPAP', description: 'Pressão contínua positiva nas vias aéreas. O padrão-ouro no tratamento da apneia obstrutiva do sono moderada a grave.' },
  { slug: 'apap', title: 'APAP', description: 'Pressão automática que se adapta ao longo da noite, ajustando-se às variações da sua respiração.' },
  { slug: 'bipap', title: 'BiPAP', description: 'Dois níveis de pressão para casos mais complexos, incluindo apneia central e insuficiência respiratória.' },
]

const team = [
  { name: 'Dr. Fernando Azevedo', role: 'Pneumologia · Medicina do Sono', crm: 'CRM-RJ 52 59763-4', rqe: 'RQE 11996 · RQE 42551', image: '/assets/equipe/dr-fernando-azevedo.png' },
  { name: 'Dra. Luana Vaz', role: 'Fisioterapia · Terapia Respiratória', crm: 'CREFITO-2 RJ 051311-F' },
]

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Medicina do Sono"
        title="Cuide do seu sono. Recupere sua energia."
        description="Diagnóstico, prescrição e acompanhamento da sua terapia respiratória — CPAP, APAP ou BiPAP — com um especialista em medicina do sono."
      />

      {/* Terapias */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <SectionEyebrow purple>Terapias</SectionEyebrow>
            <h2>A terapia certa para a sua respiração</h2>
            <p>Cada paciente tem um padrão respiratório único. Prescrevemos e acompanhamos a terapia mais adequada para o seu caso.</p>
          </div>
          <div className={styles.grid3}>
            {terapias.map(t => <TerapiaCard key={t.slug} {...t} />)}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sobreGrid}>
            <div className={styles.sobreText}>
              <SectionEyebrow purple>Sobre a Ares Vida</SectionEyebrow>
              <h2 className={styles.mt4}>O ar que devolve o sono — e a vida.</h2>
              <p className={styles.mt4}>A Ares Vida é uma clínica especializada em medicina do sono e terapia respiratória personalizada. Atendemos pacientes adultos com apneia obstrutiva do sono, oferecendo diagnóstico, prescrição e acompanhamento de CPAP, APAP e BiPAP.</p>
              <p className={styles.mt3}>Nossa abordagem é técnica, acolhedora e centrada no paciente. Cada terapia é construída a partir da fisiologia, do estilo de vida e da rotina de quem busca dormir — e respirar — melhor.</p>
              <Button href="/sobre" variant="ghost" className={styles.mt6}>Conheça nossa abordagem</Button>
            </div>
            <div className={styles.sobreCards}>
              <div className={styles.infoCard} style={{ borderLeft: '3px solid var(--av-ametista)' }}>
                <span className={styles.pill}>Especialidade</span>
                <h3 className={styles.mt3}>Pneumologia & Medicina do Sono</h3>
                <p className={styles.mt2} style={{ fontSize: '15px' }}>Titulados com mestrado acadêmico, atuação em hospitais de ensino e pesquisa em distúrbios respiratórios do sono.</p>
              </div>
              <div className={styles.infoCard} style={{ borderLeft: '3px solid var(--av-violeta)' }}>
                <span className={styles.pill}>Público</span>
                <h3 className={styles.mt3}>Pacientes, familiares e profissionais</h3>
                <p className={styles.mt2} style={{ fontSize: '15px' }}>Adultos com apneia, familiares cuidadores e médicos parceiros em busca de uma referência confiável.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className={`${styles.section} ${styles.geloSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <SectionEyebrow purple>Equipe</SectionEyebrow>
            <h2>Especialistas em quem você pode confiar</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map(m => <TeamCard key={m.crm} {...m} />)}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <Testimonials />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <SectionEyebrow light>Agendamento</SectionEyebrow>
            <h2 className={styles.ctaTitle}>Pronto para dormir melhor?</h2>
            <p className={styles.ctaDesc}>Agende sua consulta e dê o primeiro passo para uma noite de sono restaurador.</p>
            <Button href="/agendar" variant="ghost">Agendar atendimento</Button>
          </div>
        </div>
      </section>
    </>
  )
}
