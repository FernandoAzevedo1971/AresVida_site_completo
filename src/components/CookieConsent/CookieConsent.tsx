'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import styles from './CookieConsent.module.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

type Consent = 'accepted' | 'rejected' | null

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('av_cookie_consent') as Consent
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored)
    } else {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('av_cookie_consent', 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('av_cookie_consent', 'rejected')
    setConsent('rejected')
    setVisible(false)
  }

  return (
    <>
      {consent === 'accepted' && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {visible && (
        <div className={styles.banner} role="dialog" aria-label="Aviso de cookies">
          <div className={styles.content}>
            <p className={styles.text}>
              Usamos cookies de analytics (Google Analytics 4) para entender como o site é utilizado
              e melhorar nossos serviços. Nenhum dado é vendido a terceiros.{' '}
              <Link href="/politica-de-cookies" className={styles.link}>
                Saiba mais
              </Link>
              .
            </p>
            <div className={styles.actions}>
              <button className={styles.btnReject} onClick={reject}>
                Recusar
              </button>
              <button className={styles.btnAccept} onClick={accept}>
                Aceitar cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
