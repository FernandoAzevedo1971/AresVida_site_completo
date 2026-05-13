// src/components/Testimonials/Testimonials.tsx
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard'
import styles from './Testimonials.module.css'

const depoimentos = [
  {
    quote: 'Depois de anos dormindo mal, finalmente entendi o que era apneia. O acompanhamento da Ares Vida mudou minha qualidade de vida completamente.',
    name: 'Carlos M.',
  },
  {
    quote: 'A equipe foi super paciente em me ajustar o CPAP. Levei algumas semanas para me adaptar, mas o suporte foi fundamental.',
    name: 'Renata F.',
  },
  {
    quote: 'Fiz a polissonografia e em menos de duas semanas já tinha o diagnóstico e a prescrição. Processo muito mais ágil do que imaginava.',
    name: 'André L.',
  },
  {
    quote: 'Meu marido parou de roncar e eu voltei a dormir em paz. Obrigada pela dedicação e pela atenção de verdade.',
    name: 'Simone P.',
    role: 'Familiar de paciente',
  },
  {
    quote: 'Profissionais que realmente ouvem. Ajustaram minha terapia três vezes até encontrar o ideal. Muito satisfeito.',
    name: 'Roberto K.',
  },
  {
    quote: 'Indicado pelo meu cardiologista. A integração entre as especialidades faz toda a diferença no tratamento.',
    name: 'Mariana T.',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <SectionEyebrow purple>Depoimentos</SectionEyebrow>
          <h2>O que nossos pacientes dizem</h2>
        </div>
        <div className={styles.grid}>
          {depoimentos.map((d) => (
            <TestimonialCard key={d.name} {...d} />
          ))}
        </div>
      </div>
    </section>
  )
}
