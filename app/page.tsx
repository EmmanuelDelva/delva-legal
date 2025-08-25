import { Navigation } from '@/components/Navigation'

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <main className="min-h-screen bg-brand-900">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-copper-500/10 via-transparent to-brand-900" />
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Badges */}
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center rounded-full bg-accent-copper-500/20 px-3 py-1 text-xs font-medium text-accent-copper-500 ring-1 ring-accent-copper-500/30">
                MX • US • EU • CH • SG
              </span>
              <span className="inline-flex items-center rounded-full bg-accent-green-500/20 px-3 py-1 text-xs font-medium text-accent-green-500 ring-1 ring-accent-green-500/30">
                Crypto-Friendly
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
              Abogados que dominan{' '}
              <span className="bg-gradient-to-r from-accent-copper-500 to-accent-copper-600 bg-clip-text text-transparent">
                Internet, Web3
              </span>{' '}
              y el negocio digital
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Protegemos y escalamos tus activos digitales —de contratos y PI a DAOs, fintech y privacidad— 
              con estrategia legal práctica y{' '}
              <strong className="text-accent-copper-500">time-to-value</strong> rápido.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              
                href="https://calendar.app.google/VYGFr9HgSGrJamkn9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span className="mr-2">📅</span>
                Agenda consulta gratuita (30 min)
                <svg className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              
                href="https://wa.me/523312136004?text=Hola,%20me%20gustaría%20agendar%20una%20consulta%20legal"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <span className="mr-2">💬</span>
                WhatsApp ahora
              </a>
            </div>

            {/* Contact info */}
            <div className="text-center mb-16">
              <p className="text-sm text-gray-400 mb-4">O contáctanos directamente:</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
                
                  href="mailto:emmanueldelva@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent-copper-500 transition-colors"
                >
                  <span>📧</span>
                  emmanueldelva@gmail.com
                </a>
                <div className="hidden sm:block w-px h-4 bg-gray-600" />
                <span className="text-gray-400">Respuesta en 24–72h hábiles</span>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-700/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué elegir{' '}
                <span className="text-accent-copper-500">Delva & Asociados</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Somos la firma legal que entiende el mundo digital de verdad
              </p>
            </div>
            
            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-2xl bg-accent-copper-500/10 p-6 text-accent-copper-500 group-hover:bg-accent-copper-500/20 transition-all duration-300">
                    <div className="text-4xl">⚡</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Velocidad y claridad</h3>
                <p className="text-gray-300 leading-relaxed">
                  Entregables accionables en <strong>24–72h</strong> y plantillas listas para operar. 
                  No perdemos tiempo en burocracia innecesaria.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-2xl bg-accent-green-500/10 p-6 text-accent-green-500 group-hover:bg-accent-green-500/20 transition-all duration-300">
                    <div className="text-4xl">💎</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Crypto-friendly y Web3-native</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pagos con <strong>BTC/ETH/USDT</strong> y criterio práctico ante reguladores. 
                  Entendemos la tecnología, no solo la teoría.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-2xl bg-blue-500/10 p-6 text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                    <div className="text-4xl">🌍</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Cobertura internacional</h3>
                <p className="text-gray-300 leading-relaxed">
                  Estructuración multi-jurisdicción <strong>(MX/US/EU/CH/SG)</strong> y fiscalidad cripto. 
                  Tu negocio digital sin fronteras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Crypto Payment Methods */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-600/50">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Pagos Crypto-Friendly</h2>
            <p className="text-gray-300 mb-12 text-lg">Porque el futuro no espera</p>
            
            <div className="flex justify-center gap-12 flex-wrap">
              <div className="flex items-center gap-3 text-accent-copper-500">
                <div className="text-3xl">₿</div>
                <div className="text-left">
                  <div className="font-bold text-lg">Bitcoin</div>
                  <div className="text-xs text-gray-400">Lightning Network ✓</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-accent-copper-500">
                <div className="text-3xl font-bold">Ξ</div>
                <div className="text-left">
                  <div className="font-bold text-lg">Ethereum</div>
                  <div className="text-xs text-gray-400">Smart Contracts ✓</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-accent-copper-500">
                <div className="text-3xl font-bold">₮</div>
                <div className="text-left">
                  <div className="font-bold text-lg">USDT</div>
                  <div className="text-xs text-gray-400">Stablecoins ✓</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-brand-900">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para proteger tu mundo digital?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Agenda tu consulta gratuita y descubre cómo podemos 
              proteger y escalar tus activos digitales.
            </p>
            
            
              href="https://calendar.app.google/VYGFr9HgSGrJamkn9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-5"
            >
              <span className="mr-3">🚀</span>
              Comencemos ahora
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
