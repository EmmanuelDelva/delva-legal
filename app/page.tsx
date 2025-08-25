import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delva & Asociados | Abogados de Tecnología, Web3 y Negocio Digital',
  description: 'Firma legal especializada en tecnología, Web3 y negocio digital.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">
          Abogados que dominan{' '}
          <span className="text-orange-400">
            Internet, Web3
          </span>{' '}
          y el negocio digital
        </h1>
        
        <p className="text-lg text-gray-300 mb-8">
          Protegemos y escalamos tus activos digitales con estrategia legal práctica 
          y <strong>time-to-value</strong> rápido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            href="https://calendar.app.google/VYGFr9HgSGrJamkn9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Agenda consulta gratuita (30 min)
          </a>
          
          
            href="https://wa.me/523312136004"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Habla por WhatsApp ahora
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>✨ <strong>Next.js Migration Successful</strong> ✨</p>
          <p>Componentes completos próximamente</p>
        </div>
      </div>
    </main>
  )
}
