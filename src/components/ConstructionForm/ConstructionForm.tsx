// src/components/ConstructionForm/ConstructionForm.tsx
'use client'
import { useState } from 'react'
import Button from '@/components/Button/Button'
import styles from './ConstructionForm.module.css'

// Endpoint do FormSubmit.co — entrega a mensagem do visitante por e-mail
// sem necessidade de servidor (o site é exportado de forma estática).
// IMPORTANTE: na primeira mensagem enviada, o FormSubmit dispara um e-mail
// de ativação para contato@aresvida.com; basta o dono confirmar uma única vez.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/contato@aresvida.com.br'

type FormData = { nome: string; email: string; mensagem: string }
type FormErrors = Partial<Record<keyof FormData, string>>

function validate(d: FormData): FormErrors {
  const e: FormErrors = {}
  if (!d.nome.trim()) e.nome = 'Informe seu nome'
  if (!d.email.trim()) e.email = 'Informe seu e-mail'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'E-mail inválido'
  if (!d.mensagem.trim()) e.mensagem = 'Escreva sua mensagem'
  return e
}

export default function ConstructionForm() {
  const [data, setData] = useState<FormData>({ nome: '', email: '', mensagem: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(data)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          mensagem: data.mensagem,
          _subject: 'Nova mensagem pelo site (em construção) — Ares Vida',
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error('Falha no envio')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className={styles.success} role="status">
        <strong>Mensagem enviada!</strong>
        <span>Obrigado pelo contato. Nossa equipe responderá em breve.</span>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" autoComplete="name" value={data.nome} onChange={handleChange}
            className={`${styles.input} ${errors.nome ? styles.inputError : ''}`}
            aria-describedby={errors.nome ? 'nome-error' : undefined} />
          {errors.nome && <span id="nome-error" className={styles.error}>{errors.nome}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" value={data.email} onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="mensagem">Sua mensagem</label>
        <textarea id="mensagem" name="mensagem" rows={4} value={data.mensagem} onChange={handleChange}
          className={`${styles.input} ${styles.textarea} ${errors.mensagem ? styles.inputError : ''}`}
          placeholder="Conte como podemos ajudar enquanto preparamos o novo site."
          aria-describedby={errors.mensagem ? 'mensagem-error' : undefined} />
        {errors.mensagem && <span id="mensagem-error" className={styles.error}>{errors.mensagem}</span>}
      </div>

      {/* Honeypot anti-spam: invisível para humanos, preenchido por bots */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className={styles.honey} aria-hidden="true" />

      {status === 'error' && (
        <p className={styles.formError} role="alert">
          Não foi possível enviar agora. Tente novamente ou escreva para contato@aresvida.com.br.
        </p>
      )}

      <Button type="submit" variant="primary" className={styles.submit}>
        {status === 'sending' ? 'Enviando…' : 'Deixar mensagem'}
      </Button>
    </form>
  )
}
