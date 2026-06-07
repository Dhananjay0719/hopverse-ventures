import { useState, useEffect } from 'react'
import { useScrollY } from './hooks.js'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Story from './pages/Story.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  const scrollY = useScrollY()

  const handleSetPage = (p) => {
    // If hash links were used on home page, scroll to them
    if (page === 'home' && ['ecosystem', 'services', 'about', 'vision', 'contact'].includes(p)) {
      setPage('home')
      setTimeout(() => {
        const el = document.getElementById(p)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else if (p === 'contact') {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (p === 'ecosystem' || p === 'services' || p === 'about' || p === 'vision') {
      // Must load home page, then scroll
      setPage('home')
      setTimeout(() => {
        const el = document.getElementById(p)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      setPage(p)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Effect to close mobile menu if interacting with page body
  useEffect(() => {
    const handleBodyClick = (e) => {
      const nav = document.querySelector('.site-nav')
      if (nav && nav.classList.contains('mobile-active') && !e.target.closest('.site-nav')) {
        nav.classList.remove('mobile-active')
      }
    }
    document.addEventListener('click', handleBodyClick)
    return () => document.removeEventListener('click', handleBodyClick)
  }, [])

  // Hook up the old toggle script behavior for mobile navigation
  useEffect(() => {
    const toggle = document.getElementById('nav-toggle')
    const nav = document.querySelector('.site-nav')
    const links = document.querySelectorAll('.nav-links span')

    const toggleMenu = (e) => {
      e.stopPropagation()
      nav.classList.toggle('mobile-active')
    }
    const closeMenu = () => nav.classList.remove('mobile-active')

    if (toggle) toggle.addEventListener('click', toggleMenu)
    links.forEach(l => l.addEventListener('click', closeMenu))

    return () => {
      if (toggle) toggle.removeEventListener('click', toggleMenu)
      links.forEach(l => l.removeEventListener('click', closeMenu))
    }
  })

  return (
    <>
      <Nav page={page} setPage={handleSetPage} scrollY={scrollY} />

      <main>
        {page === 'home'  && <Home  setPage={handleSetPage} />}
        {page === 'story' && <Story setPage={handleSetPage} />}
      </main>

      <Footer setPage={handleSetPage} />
    </>
  )
}
