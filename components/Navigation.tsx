'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-brand-900/95 backdrop-blur-md border-b border-brand-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-white font-bold text-xl">
              Delva & Asociados
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-300 hover:text-accent-copper-500 px-3 py-2 rounded-md text-sm font-medium">
                Inicio
              </Link>
              <Link href="/servicios" className="text-gray-300 hover:text-accent-copper-500 px-3 py-2 rounded-md text-sm font-medium">
                Servicios
              </Link>
              <Link href="/planes" className="text-gray-300 hover:text-accent-copper-500 px-3 py-2 rounded-md text-sm font-medium">
                Planes
              </Link>
              <Link href="/contacto" className="text-gray-300 hover:text-accent-copper-500 px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </Link>
              <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-bold">
                💎 Crypto-Friendly
              </span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-700">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Inicio
            </Link>
            <Link href="/servicios" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Servicios
            </Link>
            <Link href="/planes" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Planes
            </Link>
            <Link href="/contacto" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
