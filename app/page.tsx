export default function HomePage() {
  const styles = {
    main: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1a1f2e',
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
      padding: '1rem'
    },
    container: {
      textAlign: 'center' as const,
      maxWidth: '600px'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#cbd5e1',
      marginBottom: '2rem'
    },
    button: {
      backgroundColor: '#b87a5c',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '25px',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '0 8px 8px 0',
      border: 'none',
      cursor: 'pointer'
    }
  }

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Delva & Asociados
        </h1>
        
        <p style={styles.subtitle}>
          Abogados especializados en tecnología, Web3 y negocio digital
        </p>

        <div>
          <a 
            href="https://calendar.app.google/VYGFr9HgSGrJamkn9"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Agenda Consulta
          </a>
          
          <a 
            href="https://wa.me/523312136004"
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.button}
          >
            WhatsApp
          </a>
        </div>

        <p style={{marginTop: '2rem', fontSize: '0.9rem', color: '#6b7280'}}>
          ✅ Next.js migration successful - Full components coming soon
        </p>
      </div>
    </main>
  )
}
