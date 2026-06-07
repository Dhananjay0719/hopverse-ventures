/* ═══════════════════════════════════════════════════════════════════
   HOPVERSE VENTURES — Interactions & Effects
   Scroll reveal, particle canvas, smooth nav, mobile menu
   ═══════════════════════════════════════════════════════════════════ */

;(function () {
  'use strict'

  /* ── Scroll Reveal (IntersectionObserver) ── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Stagger reveals that enter at the same time
            const el = entry.target
            const delay = el.dataset.revealDelay || 0
            setTimeout(() => el.classList.add('revealed'), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el, i) => {
      // Add stagger delay for siblings in grid layouts
      const parent = el.parentElement
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'))
        const idx = siblings.indexOf(el)
        if (idx > 0) {
          el.dataset.revealDelay = idx * 120
        }
      }
      observer.observe(el)
    })
  }

  /* ── Nav Scroll Effect ── */
  function initNavScroll() {
    const nav = document.getElementById('site-nav')
    if (!nav) return

    let ticking = false
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.classList.toggle('scrolled', window.scrollY > 60)
          ticking = false
        })
        ticking = true
      }
    })
  }

  /* ── Mobile Menu Toggle ── */
  function initMobileMenu() {
    const toggle = document.getElementById('nav-toggle')
    const menu = document.getElementById('mobile-menu')
    if (!toggle || !menu) return

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open')
      toggle.classList.toggle('active', isOpen)
      document.body.style.overflow = isOpen ? 'hidden' : ''
    })

    // Close on link click
    menu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        menu.classList.remove('open')
        toggle.classList.remove('active')
        document.body.style.overflow = ''
      })
    })
  }

  /* ── Smooth Scroll for Anchor Links ── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'))
        if (target) {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
  }

  /* ── Hero Particle Canvas ── */
  function initParticles() {
    const canvas = document.getElementById('hero-particles')
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let w, h, particles, animId
    const PARTICLE_COUNT = 80
    const MAX_DIST = 140

    function resize() {
      const hero = canvas.parentElement
      w = canvas.width = hero.offsetWidth
      h = canvas.height = hero.offsetHeight
    }

    function createParticles() {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.5 + 0.5,
          o: Math.random() * 0.4 + 0.1,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.12
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw & move particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 229, 255, ${p.o})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
      })

      animId = requestAnimationFrame(draw)
    }

    // Only run particles on wider screens
    function shouldAnimate() {
      return window.innerWidth > 600
    }

    function start() {
      if (!shouldAnimate()) return
      resize()
      createParticles()
      draw()
    }

    function stop() {
      if (animId) cancelAnimationFrame(animId)
      if (ctx) ctx.clearRect(0, 0, w, h)
    }

    window.addEventListener('resize', () => {
      stop()
      start()
    })

    start()

    // Pause when hero is not visible (perf)
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!animId) start()
        } else {
          stop()
        }
      },
      { threshold: 0.05 }
    )
    heroObserver.observe(canvas.parentElement)
  }

  /* ── Hero entrance animations (CSS-only with JS delays) ── */
  function initHeroAnimation() {
    const heroReveals = document.querySelectorAll('.hero .reveal')
    heroReveals.forEach((el, i) => {
      el.style.transitionDelay = `${0.2 + i * 0.18}s`
      // Trigger after a tiny paint frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.add('revealed')
        })
      })
    })
  }

  /* ── Initialize everything on DOM ready ── */
  document.addEventListener('DOMContentLoaded', () => {
    initNavScroll()
    initMobileMenu()
    initSmoothScroll()
    initHeroAnimation()
    initReveal()
    initParticles()
  })
})()
