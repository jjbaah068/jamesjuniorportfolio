import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Resume',   path: '/resume' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact',  path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname === path

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
      padding: '1.25rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(26,26,26,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
    }}>

      {/* Logo */}
      <Link to="/" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.5rem', fontWeight: 300,
        color: 'var(--gold)', letterSpacing: '0.1em',
        textDecoration: 'none',
      }}>
        JJB
        <span style={{
          color: 'var(--ivory)', fontSize: '0.6rem',
          letterSpacing: '0.3em', marginLeft: '0.5rem',
          verticalAlign: 'middle', fontFamily: "'DM Sans', sans-serif",
        }}>PORTFOLIO</span>
      </Link>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}
        className="hidden-mobile">
        {links.map(({ label, path }) => (
          <li key={label}>
            <Link to={path} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.7rem', letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'color 0.3s',
              color: isActive(path) ? 'var(--gold)' : 'var(--ivory-dim)',
              borderBottom: isActive(path) ? '1px solid var(--gold)' : '1px solid transparent',
              paddingBottom: '2px',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color = isActive(path) ? 'var(--gold)' : 'var(--ivory-dim)'}
            >{label}</Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none', border: 'none',
          cursor: 'pointer', color: 'var(--ivory)', display: 'none',
        }}
        className="show-mobile">
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          {menuOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(26,26,26,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
          padding: '1.5rem 2rem',
        }}>
          {links.map(({ label, path }) => (
            <Link key={label} to={path}
              style={{
                display: 'block', padding: '0.75rem 0',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.75rem', letterSpacing: '0.25em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                color: isActive(path) ? 'var(--gold)' : 'var(--ivory-dim)',
              }}>{label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </nav>
  )
}