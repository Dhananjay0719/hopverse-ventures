import { G, LOGO } from '../tokens.js'

export default function Footer({ setPage }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-head">
              <img src={LOGO} alt="HopVerse logo" className="brand-logo brand-logo-footer" />
              <span className="footer-logo-text brand-wordmark">HopVerse</span>
            </div>
            <p className="footer-tagline">Technology-first venture studio building the future.</p>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Navigate</h4>
              <span style={{ cursor: 'pointer', display: 'block', fontSize: '13px', color: G.textMuted, marginBottom: '12px' }} onClick={() => setPage('about')}>About</span>
              <span style={{ cursor: 'pointer', display: 'block', fontSize: '13px', color: G.textMuted, marginBottom: '12px' }} onClick={() => setPage('story')}>Our Story</span>
              <span style={{ cursor: 'pointer', display: 'block', fontSize: '13px', color: G.textMuted, marginBottom: '12px' }} onClick={() => setPage('ecosystem')}>Ecosystem</span>
              <span style={{ cursor: 'pointer', display: 'block', fontSize: '13px', color: G.textMuted, marginBottom: '12px' }} onClick={() => setPage('services')}>Services</span>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="mailto:hopverseventures@gmail.com">hopverseventures@gmail.com</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter / X</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Hopverse Ventures LLP. All rights reserved.</span>
          <span className="footer-built">Designed with precision.</span>
        </div>
      </div>
    </footer>
  )
}
