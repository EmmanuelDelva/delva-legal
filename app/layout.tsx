import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#B87A5C',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://delvayasociados.vercel.app'),
  title: {
    default: 'Delva & Asociados | Abogados de Tecnología, Web3 y Negocio Digital (MX/INTL)',
    template: '%s | Delva & Asociados'
  },
  description: 'Firma legal "law + tech" para creadores, startups y Web3: PI digital, contratos, fintech/compliance, privacidad/IA y litigio digital. Entregables rápidos, crypto-friendly.',
  keywords: ['abogados tecnología', 'legal Web3', 'propiedad intelectual digital', 'contratos digitales', 'DAO legal', 'fintech legal México'],
  authors: [{ name: 'Juan Emmanuel Delva', url: 'https://delvayasociados.vercel.app' }],
  creator: 'Delva & Asociados',
  publisher: 'Delva & Asociados',
  
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://delvayasociados.vercel.app',
    siteName: 'Delva & Asociados',
    title: 'Delva & Asociados — LegalTech for the Internet Real',
    description: 'Resultados medibles en PI, contratos, Web3/fintech y privacidad.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Delva & Asociados - Legal Web3 Native',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Delva & Asociados — LegalTech for the Internet Real',
    description: 'Resultados medibles en PI, contratos, Web3/fintech y privacidad.',
    images: ['/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-brand-900 text-neutral-050 antialiased">
        <a 
          href="#main" 
          className="skip-link focus-ring"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  )
}
