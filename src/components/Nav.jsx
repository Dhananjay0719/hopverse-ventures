import { G, LOGO } from '../tokens.js'

export default function Nav({ page, setPage, scrollY }) {
  const scrolled = scrollY > 60

  return (
    <>
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand" onClick={() => setPage('home')}>
          <img src={LOGO} alt="HopVerse logo" className="brand-logo brand-logo-nav" />
          <span className="nav-logo-text brand-wordmark">HopVerse</span>
        </div>

        <div className="nav-links">
          {['home', 'story', 'ecosystem', 'services', 'vision'].map(p => (
            <span
              key={p}
              onClick={() => setPage(p)}
              style={{
                fontSize: '11px',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: 400,
                color: page === p ? G.cyan : G.textMuted,
                transition: 'color 0.3s',
                borderBottom: page === p ? `1px solid ${G.cyan}` : 'none',
                paddingBottom: '4px'
              }}
            >
              {p === 'home' ? 'Home' : p.charAt(0).toUpperCase() + p.slice(1)}
            </span>
          ))}
        </div>

        <button className="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </>
  )
}
