// src/app/contato/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import ContactForm from '@/components/ContactForm/ContactForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Ares Vida. Formulário, endereço e WhatsApp.',
}

export default function ContatoPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Contato</SectionEyebrow>
          <h1 className={styles.title}>Fale com a Ares Vida</h1>
        </div>
      </section>
      <section className={styles.body}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h2 className={styles.h2}>Envie uma mensagem</h2>
              <ContactForm />
            </div>
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Endereço</h3>
                <p className={styles.infoText}>Av. Paulista, 1842 · 14º andar<br />Bela Vista · São Paulo · SP<br />CEP 01310-945</p>
              </div>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>Telefone e WhatsApp</h3>
                <a href="tel:+551140028922" className={styles.infoLink}>+55 11 4002-8922</a>
                <a href="https://wa.me/551140028922" className={styles.whatsapp} target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp →
                </a>
              </div>
              <div className={styles.infoBlock}>
                <h3 className={styles.infoTitle}>E-mail</h3>
                <a href="mailto:contato@aresvida.com.br" className={styles.infoLink}>contato@aresvida.com.br</a>
              </div>
              <div className={styles.mapPlaceholder} aria-label="Mapa — localização da clínica">
                <span>[ mapa · Av. Paulista, 1842 ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
