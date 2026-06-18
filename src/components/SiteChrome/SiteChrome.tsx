// src/components/SiteChrome/SiteChrome.tsx
'use client'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'

// Enquanto a home está "em construção", ela é exibida em tela cheia, sem o
// cabeçalho, o rodapé ou o botão flutuante — para não levar o visitante às
// páginas internas ainda em finalização. As demais rotas seguem normais.
// Para reverter: basta remover a verificação de `bare` (ou este wrapper).
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const bare = pathname === '/'

  if (bare) {
    return <main>{children}</main>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
