import { Link } from 'react-router'

const links = [
  { to: '/', label: 'Home', key: 'home' },
  { to: '/work', label: 'Work', key: 'work' },
  { to: '/about', label: 'About', key: 'about' },
  { to: '/contact', label: 'Contact', key: 'contact' },
]

const ctaStyle = {
  height: 44, padding: '0 18px', borderRadius: 999, background: 'var(--ink)', color: 'var(--bg)',
  fontSize: 14, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8,
}

// `active` highlights a nav item; `current` marks it as the current page for screen readers.
// `action` replaces the default "Start a project" button (used on the Contact page).
export default function Header({ active, current = true, action }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, padding: '12px 0', background: 'var(--bg)' }}>
      <div className="wrap topbar">
        <Link to="/" className="mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: 'var(--accent)', display: 'inline-block' }}></span>JJB
        </Link>
        <nav className="navlinks" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.key}
              to={l.to}
              className={'navl' + (active === l.key ? ' on' : '')}
              aria-current={active === l.key && current ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {action ?? (
          <Link to="/contact" className="pill-btn" style={ctaStyle}>Start a project ↗</Link>
        )}
      </div>
    </header>
  )
}
