// src/app/equipamentos/page.tsx
import type { Metadata } from 'next'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Equipamentos',
  description: 'Catálogo de equipamentos CPAP, APAP e BiPAP indicados pela Ares Vida.',
}

const equipamentos = [
  { fabricante: 'ResMed', modelo: 'AirSense 11 AutoSet', tipo: 'APAP', destaques: ['Algoritmo AutoSet 11ª geração', 'Umidificador integrado HumidAir', 'Conectividade myAir', 'Tela touch colorida'] },
  { fabricante: 'ResMed', modelo: 'AirCurve 10 VAuto', tipo: 'BiPAP', destaques: ['Modo VAuto com PS adaptativo', 'Detector de apneia central', 'Relatórios clínicos detalhados', 'Compatível com máscaras AirFit'] },
  { fabricante: 'Philips Respironics', modelo: 'DreamStation 2 Auto CPAP', tipo: 'APAP', destaques: ['Design compacto com umidificador integrado', 'App DreamMapper', 'Modo AutoRamp', 'Bluetooth + modem 4G'] },
  { fabricante: 'Philips Respironics', modelo: 'BiPAP A40', tipo: 'BiPAP', destaques: ['Pressão IPAP até 40 cmH₂O', 'Modo Avaps automático', 'Para pacientes com hipercapnia', 'Relatórios por SD card'] },
  { fabricante: 'Fisher & Paykel', modelo: 'ICON+ Auto', tipo: 'APAP', destaques: ['Umidificador ThermoSmart integrado', 'Design ultra-silencioso', 'SensAwake para despertares', 'Compatível com máscaras Simplus/Eson'] },
  { fabricante: 'BMC', modelo: 'G3 Auto CPAP', tipo: 'APAP', destaques: ['Custo-benefício', 'AutoRamp com detecção de sono', 'Display OLED', 'App iBreeze'] },
]

export default function EquipamentosPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.container}>
          <SectionEyebrow>Equipamentos</SectionEyebrow>
          <h1 className={styles.title}>Catálogo de aparelhos</h1>
          <p className={styles.lead}>Trabalhamos com as principais marcas do mercado. A escolha do equipamento é sempre orientada pelo médico com base no seu diagnóstico e perfil respiratório.</p>
        </div>
      </section>
      <section className={styles.grid_section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {equipamentos.map(({ fabricante, modelo, tipo, destaques }) => (
              <article key={modelo} className={styles.card}>
                <div className={styles.cardPhoto} aria-hidden="true">
                  <span>[ foto · {modelo} ]</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.tipo}>{tipo}</span>
                  <p className={styles.fabricante}>{fabricante}</p>
                  <h3 className={styles.modelo}>{modelo}</h3>
                  <ul className={styles.destaques}>
                    {destaques.map(d => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
