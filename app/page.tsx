import { Navigation } from '../components/Navigation'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center bg-brand-900">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Abogados que dominan{' '}
            <span className="bg-gradient-to-r from-accent-copper-500 to-accent-copper-600 bg-clip-text text-transparent">
              Internet, Web3
            </span>{' '}
            y el negocio digital
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protegemos y escalamos tus activos digitales —de contratos y PI a DAOs, fintech y privacidad— 
            con estrategia legal práctica y <strong className="text-accent-copper-500">time-to-value</strong> rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              href="https://calendar.app.google/VYGFr9HgSGrJamkn9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-accent-copper-500 to-accent-copper-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center"
            >
              📅 Agenda consulta gratuita (30 min)
            </a>
            
            
              href="https://wa.me/523312136004"
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-accent-copper-500 text-accent-copper-500 hover:bg-accent-copper-500 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-200 inline-flex items-center justify-center"
            >
              💬 WhatsApp ahora
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-accent-copper-500 text-2xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Velocidad y claridad</h3>
              <p className="text-gray-400 text-sm">Entregables en 24–72h</p>
            </div>
            <div>
              <div className="text-accent-copper-500 text-2xl mb-2">💎</div>
              <h3 className="font-semibold mb-2">Crypto-friendly</h3>
              <p className="text-gray-400 text-sm">Pagos BTC/ETH/USDT</p>
            </div>
            <div>
              <div className="text-accent-copper-500 text-2xl mb-2">🌍</div>
              <h3 className="font-semibold mb-2">Multi-jurisdicción</h3>
              <p className="text-gray-400 text-sm">MX • US • EU • CH • SG</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
