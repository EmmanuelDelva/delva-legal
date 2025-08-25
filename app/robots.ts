import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/']
    },
    sitemap: 'https://delvayasociados.vercel.app/sitemap.xml',
    host: 'https://delvayasociados.vercel.app'
  }
}
