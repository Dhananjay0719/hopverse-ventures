import { motion } from 'framer-motion'
import { fadeUp, fadeUpSlow, staggerContainer, vpOnce, fadeScale, fadeIn } from '../animations.js'
import HeroParticles from '../components/HeroParticles.jsx'

export default function Home({ setPage }) {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* ═══ HERO SECTION ═══ */}
      <section className="hero" id="hero">
        <HeroParticles />
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-content">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vpOnce} className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span>Technology · Innovation · Scale</span>
            <span className="eyebrow-line"></span>
          </motion.div>
          <motion.h1 
            variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={vpOnce} 
            className="hero-headline"
          >
            Building the Future of<br />
            <span className="gradient-text">Intelligent Digital Products</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vpOnce} className="hero-sub">
            A technology-first venture creating scalable software solutions and next-generation platforms.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vpOnce} className="hero-buttons">
            <button onClick={() => setPage('ecosystem')} className="btn-primary">Explore Our Ecosystem</button>
            <button onClick={() => setPage('contact')} className="btn-secondary">Get in Touch</button>
          </motion.div>
        </div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={vpOnce} className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>Artificial Intelligence</span><span className="marquee-dot"></span>
          <span>Software Engineering</span><span className="marquee-dot"></span>
          <span>Cloud Infrastructure</span><span className="marquee-dot"></span>
          <span>Platform Engineering</span><span className="marquee-dot"></span>
          <span>Digital Products</span><span className="marquee-dot"></span>
          <span>Scalable Architecture</span><span className="marquee-dot"></span>
          <span>Artificial Intelligence</span><span className="marquee-dot"></span>
          <span>Software Engineering</span><span className="marquee-dot"></span>
          <span>Cloud Infrastructure</span><span className="marquee-dot"></span>
          <span>Platform Engineering</span><span className="marquee-dot"></span>
          <span>Digital Products</span><span className="marquee-dot"></span>
          <span>Scalable Architecture</span><span className="marquee-dot"></span>
        </div>
      </div>

      {/* ═══ ABOUT SECTION ═══ */}
      <section className="about" id="about">
        <div className="section-container">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={vpOnce} className="section-label">
            <span>Who We Are</span>
            <span className="label-line"></span>
          </motion.div>
          <div className="about-grid">
            <motion.div variants={staggerContainer(0.12)} initial="hidden" whileInView="visible" viewport={vpOnce} className="about-left">
              <motion.h2 variants={fadeUpSlow} className="section-title">
                Engineering Excellence,<br />
                <em className="accent-text">Delivered at Scale</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="about-text">
                Hopverse was founded on a singular belief — that exceptional technology should be the foundation of every meaningful digital experience. We are a technology-first venture studio that builds, incubates, and scales intelligent digital products from the ground up.
              </motion.p>
              <motion.p variants={fadeUp} className="about-text">
                Our approach combines deep engineering expertise with product-first thinking. Every platform we build is designed for resilience, scalability, and long-term impact. We don't chase trends — we architect systems that define them.
              </motion.p>
              <motion.button variants={fadeUp} onClick={() => setPage('story')} className="btn-secondary" style={{ marginTop: '24px' }}>Read Our Story</motion.button>
            </motion.div>
            <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={vpOnce} className="about-right">
              <motion.div variants={fadeScale} className="about-stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">Scalability First</div>
              </motion.div>
              <motion.div variants={fadeScale} className="about-stat-card">
                <div className="stat-number">&lt;1s</div>
                <div className="stat-label">Latency Targets</div>
              </motion.div>
              <motion.div variants={fadeScale} className="about-stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Always On</div>
              </motion.div>
              <motion.div variants={fadeScale} className="about-stat-card">
                <div className="stat-number">AI+</div>
                <div className="stat-label">Intelligence Built-In</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ ECOSYSTEM / PRODUCTS SECTION ═══ */}
      <section className="ecosystem" id="ecosystem">
        <div className="section-container">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={vpOnce} className="section-label">
            <span>Our Ecosystem</span>
            <span className="label-line"></span>
          </motion.div>
          <motion.h2 variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={vpOnce} className="section-title">
            Products That <em className="accent-text">Redefine Industries</em>
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={vpOnce} className="section-desc">
            We build and scale products across verticals — each designed to deliver transformative impact.
          </motion.p>

          <motion.div variants={staggerContainer(0.12)} initial="hidden" whileInView="visible" viewport={vpOnce} className="products-grid">
            <motion.div variants={fadeUp} className="product-card featured">
              <div className="product-tag">Live</div>
              <div className="product-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M6 14l18 10m0 0l18-10M24 24v20" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                  <circle cx="24" cy="18" r="4" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <h3 className="product-name">Hoppit</h3>
              <p className="product-desc">A rapid delivery platform built for speed, efficiency, and modern logistics.</p>
              <div className="product-tags-row">
                <span className="pill">Logistics</span>
                <span className="pill">Delivery</span>
                <span className="pill">Real-time</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="product-card featured">
              <div className="product-tag">Live</div>
              <div className="product-icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C14 4 6 12 6 22c0 8 5 15 12 18v6h12v-6c7-3 12-10 12-18 0-10-8-18-18-18z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M18 30c2-3 5-5 6-5s4 2 6 5" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                  <path d="M24 14v8M20 18h8" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
                  <circle cx="24" cy="22" r="3" fill="currentColor" opacity="0.25"/>
                </svg>
              </div>
              <h3 className="product-name">ResourceX</h3>
              <p className="product-desc">Turning Waste Into Value. ResourceX is a waste-to-value platform helping businesses monetize recyclable resources. Starting with used cooking oil collection and expanding into plastics, metals, paper, and industrial recycling streams.</p>
              <div className="product-tags-row">
                <span className="pill">Circular Economy Platform</span>
                <span className="pill">Recycling</span>
                <span className="pill">Sustainability</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="product-card coming-soon">
              <div className="product-tag muted">Coming Soon</div>
              <div className="product-icon dimmed">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 36l12-28 12 28" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
                  <path d="M16 28h16" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                  <circle cx="24" cy="14" r="3" fill="currentColor" opacity="0.2"/>
                </svg>
              </div>
              <h3 className="product-name">Stealth Product</h3>
              <p className="product-desc">More products coming soon. Innovation is always in motion.</p>
              <div className="product-tags-row">
                <span className="pill muted-pill">In Development</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WHAT WE DO / SERVICES ═══ */}
      <section className="services" id="services">
        <div className="section-container">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={vpOnce} className="section-label">
            <span>What We Do</span>
            <span className="label-line"></span>
          </motion.div>
          <motion.h2 variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={vpOnce} className="section-title">
            Full-Spectrum <em className="accent-text">Technology Capabilities</em>
          </motion.h2>

          <motion.div variants={staggerContainer(0.12)} initial="hidden" whileInView="visible" viewport={vpOnce} className="services-grid">
            <motion.div variants={fadeScale} className="service-card">
              <div className="service-number">01</div>
              <div className="service-icon-wrap">
                <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1"/><circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1" opacity="0.5"/><circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.4"/><path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/></svg>
              </div>
              <h3>AI Solutions</h3>
              <p>Intelligent systems powered by machine learning, NLP, and computer vision — designed to automate, predict, and transform workflows.</p>
            </motion.div>

            <motion.div variants={fadeScale} className="service-card">
              <div className="service-number">02</div>
              <div className="service-icon-wrap">
                <svg viewBox="0 0 40 40" fill="none"><rect x="6" y="10" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1"/><path d="M14 18l-4 4 4 4M26 18l4 4-4 4M22 16l-4 12" stroke="currentColor" strokeWidth="1" opacity="0.5"/></svg>
              </div>
              <h3>Software Development</h3>
              <p>End-to-end engineering of web, mobile, and enterprise applications — built with modern stacks and rigorous quality standards.</p>
            </motion.div>

            <motion.div variants={fadeScale} className="service-card">
              <div className="service-number">03</div>
              <div className="service-icon-wrap">
                <svg viewBox="0 0 40 40" fill="none"><path d="M8 28l12-8 12 8" stroke="currentColor" strokeWidth="1"/><path d="M8 22l12-8 12 8" stroke="currentColor" strokeWidth="1" opacity="0.5"/><path d="M8 16l12-8 12 8" stroke="currentColor" strokeWidth="1" opacity="0.3"/></svg>
              </div>
              <h3>Platform Engineering</h3>
              <p>Scalable, cloud-native platforms built for high availability and elastic performance — from microservices to event-driven architectures.</p>
            </motion.div>

            <motion.div variants={fadeScale} className="service-card">
              <div className="service-number">04</div>
              <div className="service-icon-wrap">
                <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="12" r="6" stroke="currentColor" strokeWidth="1"/><circle cx="12" cy="28" r="5" stroke="currentColor" strokeWidth="1" opacity="0.6"/><circle cx="28" cy="28" r="5" stroke="currentColor" strokeWidth="1" opacity="0.6"/><path d="M20 18v4M15 25l-1 1M25 25l1 1" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/></svg>
              </div>
              <h3>Digital Infrastructure</h3>
              <p>Modern DevOps, CI/CD pipelines, and cloud infrastructure that keep your systems resilient, secure, and operating at peak efficiency.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ VISION & MISSION ═══ */}
      <section className="vision" id="vision">
        <div className="vision-rings">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
        </div>
        <div className="section-container vision-content">
          <motion.div variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={vpOnce} className="vision-block">
            <div className="vision-label">Our Vision</div>
            <p className="vision-statement">
              "Building interconnected <em className="accent-text">digital ecosystems</em> that power the next era of intelligent technology."
            </p>
          </motion.div>
          <div className="vision-divider"></div>
          <motion.div variants={fadeUpSlow} initial="hidden" whileInView="visible" viewport={vpOnce} className="mission-block">
            <div className="vision-label">Our Mission</div>
            <p className="vision-statement">
              "To deliver at the intersection of <em className="accent-text">speed</em>, <em className="accent-text">innovation</em>, and <em className="accent-text">scalability</em> — building ventures that shape industries."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
