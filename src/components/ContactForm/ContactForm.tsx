// src/components/ContactForm/ContactForm.tsx
'use client'
import { useState } from 'react'
import Button from '@/components/Button/Button'
import styles from './ContactForm.module.css'

type FormData = { nome: string; email: string; telefone: string; mensagem: string }
type FormErrors = Partial<Record<keyof FormData, string>>

function validate(d: FormData): FormErrors {
  const e: FormErrors = {}
  if (!d.nome.trim()) e.nome = 'Nome é obrigatório'
  if (!d.email.trim()) e.email = 'E-mail é obrigatório'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'E-mail inválido'
  if (!d.mensagem.trim()) e.mensagem = 'Mensagem é obrigatória'
  return e
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>({ nome: '', email: '', telefone: '', mensagem: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(data)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  if (submitted) {
    return <div className={styles.success}><p>Mensagem enviada! Entraremos em contato em breve.</p></div>
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="nome">Nome completo</label>
        <input id="nome" name="nome" type="text" value={data.nome} onChange={handleChange}
          className={`${styles.input} ${errors.nome ? styles.inputError : ''}`}
          aria-describedby={errors.nome ? 'nome-error' : undefined} />
        {errors.nome && <span id="nome-error" className={styles.error}>{errors.nome}</span>}
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" value={data.email} onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="telefone">Telefone (opcional)</label>
          <input id="telefone" name="telefone" type="tel" value={data.telefone} onChange={handleChange} className={styles.input} />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows={5} value={data.mensagem} onChange={handleChange}
          className={`${styles.input} ${styles.textarea} ${errors.mensagem ? styles.inputError : ''}`}
          aria-describedby={errors.mensagem ? 'mensagem-error' : undefined} />
        {errors.mensagem && <span id="mensagem-error" className={styles.error}>{errors.mensagem}</span>}
      </div>
      <Button type="submit" variant="primary">Enviar mensagem</Button>
    </form>
  )
}
