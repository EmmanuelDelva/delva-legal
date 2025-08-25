import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Basic security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Basic CSP - adjust domains as needed
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' vercel.live *.vercel.app",
    "style-src 'self' 'unsafe-inline'",
    "connect-src 'self' wa.me *.wa.me calendar.app.google *.google.com",
  ].join('; ')
  
  response.headers.set('Content-Security-Policy', csp)
  return response
}
