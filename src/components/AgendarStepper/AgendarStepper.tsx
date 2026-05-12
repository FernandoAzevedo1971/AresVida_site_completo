// src/components/AgendarStepper/AgendarStepper.tsx
'use client'
import { useState } from 'react'
import Button from '@/components/Button/Button'
import styles from './AgendarStepper.module.css'

const STEPS = ['Motivo', 'Data e horário', 'Seus dados']

const MOTIVOS = [
  'Diagnóstico de apneia do sono',
  'Prescrição de CPAP/APAP/BiPAP',
  'Acompanhamento de terapia em curso',
  'Segunda opinião',
  'Outro motivo',
]

const HORARIOS = ['08:00','09:00','10:00','11:00','14:00','15:00','16:00','17:00']

type FormData = { motivo: string; data: string; horario: string; nome: string; email: string; telefone: string }

export default function AgendarStepper() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>({ motivo: '', data: '', horario: '', nome: '', email: '', telefone: '' })
  const [done, setDone] = useState(false)

  function set(field: keyof FormData, value: string) {
    setData(prev => ({ ...prev, [field]: value }))
  }

  if (done) {
    return (
      <div className={styles.success}>
        <h2 className={styles.successTitle}>Consulta solicitada com sucesso!</h2>
        <p className={styles.successText}>Entraremos em contato para confirmar o agendamento. Verifique seu e-mail em breve.</p>
      </div>
    )
  }

  return (
    <div className={styles.stepper}>
      <div className={styles.steps} role="list" aria-label="Etapas do agendamento">
        {STEPS.map((label, i) => (
          <div key={i} role="listitem"
            className={`${styles.step} ${i === step ? styles.active : ''} ${i < step ? styles.done : ''}`}>
            <div className={styles.stepNum}>{i + 1}</div>
            <span className={styles.stepLabel}>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.panel}>
        {step === 0 && (
          <>
            <h2 className={styles.panelTitle}>Qual é o motivo da consulta?</h2>
            <div className={styles.options} role="radiogroup" aria-label="Motivo da consulta">
              {MOTIVOS.map(m => (
                <label key={m} className={`${styles.option} ${data.motivo === m ? styles.selected : ''}`}>
                  <input type="radio" name="motivo" value={m} checked={data.motivo === m}
                    onChange={() => set('motivo', m)} className={styles.radio} />
                  {m}
                </label>
              ))}
            </div>
            <div className={styles.actions}>
              <Button variant="primary" onClick={() => { if (data.motivo) setStep(1) }}>Continuar</Button>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className={styles.panelTitle}>Escolha a data e horário</h2>
            <div className={styles.dateRow}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="data">Data preferida</label>
                <input id="data" type="date" value={data.data} onChange={e => set('data', e.target.value)}
                  className={styles.input} min={new Date().toISOString().split('T')[0]} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="horario">Horário preferido</label>
                <select id="horario" value={data.horario} onChange={e => set('horario', e.target.value)} className={styles.input}>
                  <option value="">Selecione…</option>
                  {HORARIOS.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>
            <div className={styles.actions}>
              <Button variant="ghost" onClick={() => setStep(0)}>Voltar</Button>
              <Button variant="primary" onClick={() => { if (data.data && data.horario) setStep(2) }}>Continuar</Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className={styles.panelTitle}>Seus dados para contato</h2>
            <div className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="nome">Nome completo</label>
                <input id="nome" type="text" value={data.nome} onChange={e => set('nome', e.target.value)} className={styles.input} />
              </div>
              <div className={styles.dateRow}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">E-mail</label>
                  <input id="email" type="email" value={data.email} onChange={e => set('email', e.target.value)} className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="telefone">Telefone</label>
                  <input id="telefone" type="tel" value={data.telefone} onChange={e => set('telefone', e.target.value)} className={styles.input} />
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <Button variant="ghost" onClick={() => setStep(1)}>Voltar</Button>
              <Button variant="primary" onClick={() => { if (data.nome && data.email) setDone(true) }}>Confirmar agendamento</Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
