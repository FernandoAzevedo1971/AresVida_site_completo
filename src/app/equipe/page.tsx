// src/app/equipe/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import TeamCard from '@/components/TeamCard/TeamCard'
import Button from '@/components/Button/Button'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Equipe',
  description: 'Conheça os especialistas em medicina do sono da Ares Vida.',
}

const team = [
  { name: 'Dr. André Mendes', role: 'Pneumologia · Medicina do Sono', crm: 'CRM-SP 138.420 · RQE 67.890', bio: 'Especialista em medicina do sono com mestrado pela USP. Pesquisador em distúrbios respiratórios do sono, com atuação em hospitais de ensino por mais de 12 anos.' },
  { name: 'Dra. Carolina Souza', role: 'Medicina do Sono · Polissonografia', crm: 'CRM-SP 102.345 · RQE 54.321', bio: 'Especializada em polissonografia e titulação de CPAP. Referência em adaptação de terapia respiratória para pacientes com dificuldade de adesão.' },
  { name: 'Dr. Felipe Rocha', role: 'Pneumologia · Terapia Respiratória', crm: 'CRM-SP 119.876 · RQE 61.234', bio: 'Pneumologista com foco em síndrome de hipoventilação e uso de BiPAP em insuficiência respiratória crônica.' },
  { name: 'Dra. Mariana Lima', role: 'Neurologia do Sono', crm: 'CRM-SP 145.678 · RQE 72.456', bio: 'Neurologista especialista em distúrbios do movimento durante o sono e síndrome das pernas inquietas.' },
]

export default function EquipePage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Equipe</SectionEyebrow>
          <h1 className={styles.title}>Especialistas em quem você pode confiar</h1>
          <p className={styles.lead}>Nossa equipe é formada por médicos titulados com experiência em hospitais de ensino e pesquisa em distúrbios respiratórios do sono.</p>
        </div>
      </section>
      <section className={styles.grid_section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {team.map(m => <TeamCard key={m.crm} {...m} />)}
          </div>
          <div className={styles.cta}>
            <p className={styles.ctaText}>Quer conversar com um de nossos especialistas?</p>
            <Button href="/agendar" variant="primary">Agendar atendimento</Button>
          </div>
        </div>
      </section>
    </>
  )
}
