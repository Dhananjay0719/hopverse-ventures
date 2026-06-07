import { motion } from 'framer-motion'
import { fadeUpSlow, fadeUp, staggerContainer, vpOnce, fadeIn } from '../animations.js'

export default function Story({ setPage }) {
  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: '140px', paddingBottom: '120px' }}>
      <section className="story-hero" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>
        <div className="hero-glow" style={{ opacity: 0.4 }}></div>
        <div style={{ maxWidth: '840px' }}>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="section-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>
            <span>Our Origin</span>
            <span className="label-line"></span>
          </motion.div>
          
          <motion.h1 variants={fadeUpSlow} initial="hidden" animate="visible" className="hero-headline" style={{ fontSize: 'clamp(36px, 6vw, 70px)', marginBottom: '32px', letterSpacing: '-0.02em' }}>
            Architecting the <br />
            <span className="gradient-text">Impossible Standard</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="hero-sub" style={{ fontSize: '18px', margin: '0 auto', maxWidth: '640px', lineHeight: 1.7 }}>
            We didn't set out to build another software agency. We set out to build the engine that powers the absolute bleeding edge of digital innovation.
          </motion.p>
        </div>
      </section>

      <section className="story-content" style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={vpOnce}>
          
          {/* Chapter 1 */}
          <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px', color: 'var(--cyan)' }}>01. The Thesis</h2>
            <h3 style={{ color: 'var(--text)', fontSize: '38px', marginBottom: '24px', fontFamily: 'var(--font-display)', fontWeight: 500 }}>
              Complexity demands <em className="accent-text">Clarity</em>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
              Hopverse began with a singular, uncompromising observation: the world's most transformative companies don't just use technology—they are fundamentally defined by it. Yet, the vast majority of enterprises remain bottlenecked. They are crippled by fragmented infrastructure, legacy technical debt, and engineering paradigms that collapse at scale.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8 }}>
              We saw a void in the market for a venture studio that wasn't just thinking about the next feature, but the next decade of architecture. We assembled a core syndicate of elite software engineers, systems architects, and product visionaries to create an entity that operates differently. Our mandate from day zero was strict: extreme high availability, sub-second latency targets, and AI-native system design.
            </p>
          </motion.div>

          <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '64px' }}></div>

          {/* Chapter 2 */}
          <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px', color: 'var(--cyan)' }}>02. The Validation</h2>
            <h3 style={{ color: 'var(--text)', fontSize: '38px', marginBottom: '24px', fontFamily: 'var(--font-display)', fontWeight: 500 }}>
              Building <em className="accent-text">Hoppit</em>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
              We believe that you can't architect the future for others until you've built it yourself. Our first major breakthrough as a studio was <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Hoppit</strong> — a proprietary logistics and rapid-delivery platform engineered from the ground up for unprecedented speed and elasticity.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8 }}>
              Hoppit served as the ultimate canvas for our engineering thesis. We implemented real-time event-driven architectures, predictive AI routing, and a frictionless user experience. It proved that when you eliminate legacy drag and build for pure performance, you don't just enter a market—you force the market to adapt to your standard. Hoppit wasn't just a product launch; it was the definitive proof-of-concept for the Hopverse engineering methodology.
            </p>
          </motion.div>

          <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '64px' }}></div>

          {/* Chapter 3 */}
          <motion.div variants={fadeUp} style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px', color: 'var(--cyan)' }}>03. The Horizon</h2>
            <h3 style={{ color: 'var(--text)', fontSize: '38px', marginBottom: '24px', fontFamily: 'var(--font-display)', fontWeight: 500 }}>
              Ventures at <em className="accent-text">Scale</em>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
              Today, Hopverse Ventures operates at the bleeding edge of deep tech and venture building. Our dual-engine approach allows us to internally incubate disruptive stealth products, whilst simultaneously partnering with leading global enterprises to architect massive, resilient digital infrastructures.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8 }}>
              Whether we are designing AI solutions that automate entire enterprise workflows, or engineering the cloud-native backbones of tomorrow's financial systems, our philosophy remains unchanged. We do not chase technological trends. We build the foundational systems that enable them.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} style={{ padding: '56px 48px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }}></div>
            <h3 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '24px', color: 'var(--cyan)' }}>Our Commitment</h3>
            <p style={{ color: 'var(--text)', fontSize: '26px', lineHeight: 1.6, marginBottom: '40px', fontFamily: 'var(--font-display)', fontWeight: 300 }}>
              "To deliver at the intersection of <em className="accent-text">velocity</em>, <em className="accent-text">innovation</em>, and <em className="accent-text">scale</em> — building software that fundamentally shifts how industries operate."
            </p>
            <button onClick={() => setPage('home')} className="btn-primary" style={{ padding: '14px 32px' }}>Return to Ecosystem</button>
          </motion.div>
          
        </motion.div>
      </section>
    </div>
  )
}
