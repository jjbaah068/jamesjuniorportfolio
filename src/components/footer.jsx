import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Resume',   path: '/resume' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact',  path: '/contact' },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/jjbaah068',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/james-kojo-junior-baah/?trk=opento_sprofile_topcard',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Vercel',
    href: 'https://vercel.com/james-junior-baahs-projects',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:jjbaah068@gmail.com',
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid rgba(201,168,76,0.12)',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '13rem',
    }}>
      {/* Subtle top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      {/* Main footer body */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '5rem 2rem 3rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: '4rem',
          marginBottom: '4rem',
        }} className="footer-grid">

          {/* Col 1 — Brand */}
          <div>
            <Link to="/" style={{
              display: 'inline-block',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '2rem', fontWeight: 300,
              color: 'var(--gold)', letterSpacing: '0.1em',
              textDecoration: 'none',
              marginBottom: '1.25rem',
            }}>
              JJB
              <span style={{
                color: 'var(--ivory)', fontSize: '0.6rem',
                letterSpacing: '0.3em', marginLeft: '0.5rem',
                verticalAlign: 'middle',
                fontFamily: "'DM Sans', sans-serif",
              }}>PORTFOLIO</span>
            </Link>

            <p style={{
              color: 'var(--muted)', fontSize: '0.875rem',
              lineHeight: '1.8', maxWidth: '280px',
              marginBottom: '2rem',
            }}>
              Frontend developer based in Accra, Ghana. Building polished digital experiences with React and modern web technologies.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={label}
                  style={{
                    width: '36px', height: '36px',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--gold)'
                    e.currentTarget.style.background = 'rgba(201,168,76,0.05)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                    e.currentTarget.style.color = 'var(--muted)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Nav links */}
          <div>
            <p style={{
              fontSize: '0.65rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'var(--gold)',
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: '1.5rem',
            }}>Navigation</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.85rem', color: 'var(--muted)',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                  >
                    <span style={{
                      width: '16px', height: '1px',
                      background: 'rgba(201,168,76,0.3)',
                      display: 'inline-block', flexShrink: 0,
                    }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact info */}
          <div>
            <p style={{
              fontSize: '0.65rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'var(--gold)',
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: '1.5rem',
            }}>Contact</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Email', value: 'jjbaah068@gmail.com', href: 'mailto:jjbaah068@gmail.com' },
                { label: 'Location', value: 'Accra, Ghana', href: null },
                { label: 'Availability', value: 'Open to Work', href: null },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <div style={{
                    fontSize: '0.62rem', letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: 'var(--muted)',
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: '0.2rem',
                  }}>{label}</div>
                  {href ? (
                    <a href={href} style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1rem', color: 'var(--ivory)',
                      textDecoration: 'none', transition: 'color 0.25s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--ivory)'}
                    >{value}</a>
                  ) : (
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1rem', color: 'var(--ivory)', margin: 0,
                    }}>{value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Hire me CTA */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jjbaah068@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
              style={{ display: 'inline-block', marginTop: '2rem', fontSize: '0.68rem' }}
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(201,168,76,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem', color: 'var(--muted)',
          }}>
            © {year} James Junior Baah. All rights reserved.
          </p>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.85rem', color: 'var(--muted)',
            fontStyle: 'italic',
          }}>
            Designed & Built by{' '}
            <span style={{ color: 'var(--gold)' }}>James Junior Baah</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}