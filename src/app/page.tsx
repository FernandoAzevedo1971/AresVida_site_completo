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

        <p className={styles.signature}>
          Ares Vida · Medicina do sono &amp; terapia respiratória personalizada
        </p>
      </div>
    </section>
  )
}
