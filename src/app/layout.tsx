// src/app/layout.tsx
import type { Metadata } from 'next'
import { Montserrat, Allura } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'
import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'Ares Vida — Terapia respiratória personalizada', template: '%s — Ares Vida' },
  description: 'Clínica especializada em medicina do sono. CPAP, APAP e BiPAP.',
  icons: { icon: '/assets/icon-favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${allura.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
