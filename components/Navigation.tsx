'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-brand-900/95 backdrop-blur-md border-b border-brand-600/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-white font-bold text-xl hover:text-accent-copper-500 transition-colors">
              <div className="w-8 h-8 bg-accent-copper-500 rounded-lg flex items-center justify-center animate-float">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              Delva & Asociados
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-accent-copper-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Inicio
              </Link>
              <Link href="/servicios" className="text-gray-300 hover:text-accent-copper-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Servicios
              </Link>
              <Link href="/planes" className="text-gray-300 hover:text-accent-copper-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Planes
              </Link>
              <Link href="/contacto" className="text-gray-300 hover:text-accent-copper-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contacto
              </Link>
              <span className="bg-accent-green-500/20 text-accent-green-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                💎 Crypto-Friendly
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-700">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
              Servicios
            </Link>
            <Link href="/planes" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
              Planes
            </Link>
            <Link href="/contacto" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
              Contacto
            </Link>
            <div className="px-3 py-2">
              <span className="bg-accent-green-500/20 text-accent-green-500 px-3 py-1 rounded-full text-xs font-bold">
                💎 Aceptamos Crypto
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
