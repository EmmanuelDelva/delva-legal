import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>Delva & Asociados</title>
        <meta name="description" content="Firma legal especializada en tecnología" />
      </head>
      <body>{children}</body>
    </html>
  )
}
