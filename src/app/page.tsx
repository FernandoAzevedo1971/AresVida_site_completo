// src/app/page.tsx
// ─────────────────────────────────────────────────────────────────────────
// PÁGINA TEMPORÁRIA — "Site em construção"
// Substitui temporariamente a home. Mantém a logomarca, o estilo e o vídeo
// de abertura. Para restaurar a home original, recupere a versão anterior
// deste arquivo no histórico do Git (e, se desejar, remova o wrapper
// SiteChrome em src/app/layout.tsx).
// ─────────────────────────────────────────────────────────────────────────
import type { Metadata } from 'next'
import Image from 'next/image'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import ConstructionForm from '@/components/ConstructionForm/ConstructionForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Em breve — Ares Vida',
  description:
    'Estamos construindo uma nova experiência digital. Em breve, mais tecnologia e novidades para cuidar do seu sono. Deixe sua mensagem.',
}

// Número no formato internacional (sem o +55) usado em tel: e no wa.me.
// O link wa.me abre o app no celular e o WhatsApp Web no desktop/notebook.
const WHATSAPP = '21971621385'
const WA_TEXT = encodeURIComponent('Olá! Vi o site da Ares Vida e gostaria de mais informações.')

export default function ConstructionPage() {
  return (
    <section className={styles.page}>
      {/* Vídeo de abertura como pano de fundo, tingido pelas cores da marca */}
      <video
        className={styles.bgVideo}
        src="/assets/hero-atendimento.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <Image
          className={styles.logo}
          src="/assets/logo-negativa.svg"
          alt="Ares Vida"
          width={240}
          height={115}
          priority
        />

        <SectionEyebrow light>Site em construção</SectionEyebrow>

        <h1 className={styles.title}>
          Em breve, uma nova experiência para cuidar do seu sono.
        </h1>

        <p className={styles.lead}>
          Estamos preparando um espaço digital com mais tecnologia, conteúdo e
          novidades pensadas para acompanhar você em cada etapa da sua terapia
          respiratória. Aguarde — em breve, tudo estará pronto.
        </p>

        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Deixe sua mensagem</h2>
          <p className={styles.formSubtitle}>
            Enquanto finalizamos o novo site, fale com a gente. Nossa equipe
            responderá pessoalmente.
          </p>
          <ConstructionForm />
        </div>

        {/* Canais de contato diretos */}
        <div className={styles.contact}>
          <a
            className={styles.whatsapp}
            href={`https://wa.me/55${WHATSAPP}?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Conversar no WhatsApp
          </a>

          <div className={styles.channels}>
            <a className={styles.channel} href={`tel:+55${WHATSAPP}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              (21) 97162-1385
            </a>

            <a className={styles.channel} href="https://www.instagram.com/ares.vida/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @ares.vida
            </a>

            <a className={styles.channel} href="mailto:contato@aresvida.com.br">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              contato@aresvida.com.br
            </a>
          </div>
        </div>

        <p className={styles.signature}>
          Ares Vida · Medicina do sono &amp; terapia respiratória personalizada
        </p>
      </div>
    </section>
  )
}
