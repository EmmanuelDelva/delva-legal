import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delva & Asociados | Abogados de Tecnología, Web3 y Negocio Digital (MX/INTL)',
  description: 'Firma legal "law + tech" para creadores, startups y Web3: PI digital, contratos, fintech/compliance, privacidad/IA y litigio digital. Entregables rápidos, crypto-friendly.',
}

export default function HomePage() {
  return (
    <main id="main" className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-050 sm:text-5xl mb-6">
          Abogados que dominan{' '}
          <span className="bg-gradient-to-r from-accent-copper-500 to-accent-copper-600 bg-clip-text text-transparent">
            Internet, Web3
          </span>{' '}
          y el negocio digital
        </h1>
        
        <p className="text-lg text-neutral-300 mb-8">
          Protegemos y escalamos tus activos digitales —de contratos y PI a DAOs, fintech y privacidad— 
          con estrategia legal práctica y <strong>time-to-value</strong> rápido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            href="https://calendar.app.google/VYGFr9HgSGrJamkn9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agenda consulta gratuita (30 min)
          </a>
          
          
            href="https://wa.me/523312136004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Habla por WhatsApp ahora
          </a>
        </div>

        <div className="mt-8 text-sm text-neutral-400">
          <p>✨ <strong>Migración a Next.js completada exitosamente</strong> ✨</p>
          <p>Sitio temporal - componentes completos próximamente</p>
        </div>
      </div>
    </main>
  )
}
