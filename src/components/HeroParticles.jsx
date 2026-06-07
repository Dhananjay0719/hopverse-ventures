import { useEffect, useRef } from 'react'

export default function HeroParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w, h, particles, animId
    const PARTICLE_COUNT = 80
    const MAX_DIST = 140

    function resize() {
      const parent = canvas.parentElement
      w = canvas.width = parent.offsetWidth
      h = canvas.height = parent.offsetHeight
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

    function shouldAnimate() { return window.innerWidth > 600 }
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

    window.addEventListener('resize', () => { stop(); start() })
    start()

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!animId) start()
      } else {
        stop()
      }
    }, { threshold: 0.05 })
    heroObserver.observe(canvas.parentElement)

    return () => {
      stop()
      heroObserver.disconnect()
      window.removeEventListener('resize', start)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      id="hero-particles" 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} 
    />
  )
}
