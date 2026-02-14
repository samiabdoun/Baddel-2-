import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Simple Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Baddel</div>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/browse" style={styles.navLink}>Browse</Link>
          <Link href="/how-it-works" style={styles.navLink}>How it Works</Link>
          <button style={styles.button}>Sign In</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Hey Swappers, It's Your Place.</h1>
        <p style={styles.heroText}>Swap items directly with people near you. No money, just pure exchange.</p>
        <div style={styles.searchBox}>
          <input type="text" placeholder="Search for items to swap..." style={styles.searchInput} />
          <button style={styles.searchButton}>Search</button>
        </div>
      </section>

      {/* Categories */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Browse Categories</h2>
        <div style={styles.categoryGrid}>
          {['Electronics', 'Fashion', 'Furniture', 'Books', 'Sports', 'Gaming'].map(cat => (
            <div key={cat} style={styles.categoryCard}>
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 Baddel. All rights reserved.</p>
      </footer>
    </main>
  )
}

const styles = {
  header: {
    padding: '20px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #F97316, #EC4899, #7C3AED)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  nav: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  },
  navLink: {
    textDecoration: 'none',
    color: '#333'
  },
  button: {
    padding: '8px 16px',
    background: 'linear-gradient(135deg, #F97316, #EC4899, #7C3AED)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  hero: {
    background: 'linear-gradient(135deg, #F97316, #EC4899, #7C3AED)',
    padding: '80px 20px',
    textAlign: 'center',
    color: 'white'
  },
  heroTitle: {
    fontSize: '48px',
    marginBottom: '20px'
  },
  heroText: {
    fontSize: '20px',
    marginBottom: '30px'
  },
  searchBox: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    gap: '10px'
  },
  searchInput: {
    flex: 1,
    padding: '15px',
    borderRadius: '8px',
    border: 'none'
  },
  searchButton: {
    padding: '15px 30px',
    background: '#0F172A',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  section: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  sectionTitle: {
    fontSize: '32px',
    marginBottom: '30px'
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px'
  },
  categoryCard: {
    padding: '40px 20px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    cursor: 'pointer'
  },
  footer: {
    background: '#0F172A',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center'
  }
}