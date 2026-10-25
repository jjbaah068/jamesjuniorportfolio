import { Link } from 'react-router'
import Header from '../components/header'
import useAccraClock from '../hooks/useAccraClock'
import { featured, projects, projectHref } from '../data/projects'
import { SOCIALS, whatsappHref } from '../data/site'
import portrait from '../assets/images/portrait.webp'

const builds = ['SaaS platforms.', 'Admin dashboards.', 'Booking sites.', 'Brand websites.', 'Design systems.']
// Spaces become non-breaking so they don't collapse inside the inline-block letters
const nameLines = ['James', 'Junior Baah'].map((w) => w.split('').map((l) => (l === ' ' ? '\u00a0' : l)))

const services = [
  ['01', 'Web apps & SaaS', 'Production React apps with clean routing, data fetching and components that scale.'],
  ['02', 'Dashboards', 'Data-heavy admin and multi-role dashboards that stay easy to use.'],
  ['03', 'Booking & brand sites', 'Conversion-focused sites and direct-booking flows for brands and hospitality.'],
]

const sectionTitle = { margin: 0, fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.05em', fontWeight: 700 }
const footLink = { textDecoration: 'none' }

export default function Home() {
  const { clock, tick } = useAccraClock(1000)
  const buildIndex = Math.floor(tick / 2.5) % builds.length

  return (
    <div className="st pg-home">
      <Header active="home" />

      <main id="top" className="wrap" style={{ paddingTop: 12 }}>
        <div className="bento">
          <section className="tile s8" style={{ background: 'var(--tile)', borderRadius: 28, padding: 'clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40, minHeight: 460 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
              <span className="mono" style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Portfolio / 2026</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 500 }}>
                <span className="blink" style={{ width: 8, height: 8, borderRadius: 999, background: '#16A34A', display: 'inline-block' }}></span>Taking on new projects
              </span>
            </div>
            <h1 aria-label="James Junior Baah" style={{ margin: 0, fontSize: 'clamp(48px, 8vw, 112px)', lineHeight: 0.9, letterSpacing: '-0.055em', fontWeight: 700 }}>
              {nameLines.map((letters, i) => (
                <span key={i} aria-hidden="true" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  {letters.map((l, j) => <span key={j} className="ltr">{l}</span>)}
                </span>
              ))}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
              <p style={{ margin: 0, maxWidth: 460, fontSize: 20, lineHeight: 1.4, letterSpacing: '-0.01em' }}>
                Software engineer building web products that feel <span style={{ color: 'var(--accent)', fontWeight: 600 }}>alive</span> — fast, accessible and a little bit playful.
              </p>
              <Link to="/work" className="pill-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 24px', borderRadius: 999, background: 'var(--accent)', color: '#fff', fontWeight: 600 }}>See the work ↗</Link>
            </div>
          </section>

          <section className="tile photo s4 r2" style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', minHeight: 460, background: '#D9D7D0' }}>
            <img src={portrait} alt="Portrait of James Junior Baah" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <Link to="/about" style={{ position: 'absolute', left: 12, right: 12, bottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, padding: '12px 16px', borderRadius: 18, background: 'rgba(255,255,255,.9)', color: '#111', textDecoration: 'none' }}>
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
                <span style={{ fontWeight: 600 }}>James Junior Baah</span>
              </span>
              <span style={{ fontSize: 14, fontWeight: 600 }}>About me →</span>
            </Link>
          </section>

          <section className="tile s4" style={{ background: 'var(--dark)', color: 'var(--on-dark)', borderRadius: 28, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28, minHeight: 220 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="mono" style={{ fontSize: 12, color: 'var(--on-dark-muted)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Accra, Ghana</span>
              <svg className="spin" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"></path>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span className="mono" style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1 }}>{clock}</span>
              <span style={{ color: 'var(--on-dark-muted)', fontSize: 14 }}>GMT · working with teams worldwide</span>
            </div>
          </section>

          <section className="tile s4" style={{ background: 'var(--accent)', color: '#fff', borderRadius: 28, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28, minHeight: 220, overflow: 'hidden' }}>
            <span className="mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.1em', opacity: 0.85 }}>I build</span>
            <span style={{ fontSize: 'clamp(30px, 3.2vw, 42px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.02, minHeight: '2.1em', display: 'block', overflow: 'hidden' }}>
              <span className="swap" key={buildIndex}>{builds[buildIndex]}</span>
            </span>
          </section>
        </div>
      </main>

      <section className="wrap" style={{ paddingTop: 96, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
          <h2 style={sectionTitle}>Featured work</h2>
          <Link to="/work" className="textlink" style={{ fontWeight: 600 }}>All projects ({String(projects.length).padStart(2, '0')}) →</Link>
        </div>
        <div className="three">
          {featured.map((p) => (
            <Link key={p.name} to={projectHref(p)} className="tile card" style={{ display: 'flex', flexDirection: 'column', borderRadius: 28, background: 'var(--tile)', overflow: 'hidden', color: 'inherit' }}>
              <div style={{ position: 'relative', aspectRatio: '5 / 4', overflow: 'hidden' }}>
                <div className="thumb" style={{ position: 'absolute', inset: 0, background: p.tint, color: '#fff', display: 'flex', alignItems: 'flex-end', padding: 24 }}>
                  <span style={{ fontSize: 120, fontWeight: 800, letterSpacing: '-0.07em', lineHeight: 0.8 }}>{p.mono}</span>
                </div>
                <span className="mono" style={{ position: 'absolute', left: 16, top: 16, padding: '5px 10px', borderRadius: 999, background: 'rgba(255,255,255,.9)', color: '#111', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em' }}>{p.type}</span>
              </div>
              <div style={{ padding: '20px 22px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em' }}>{p.name}</span>
                  <span style={{ fontSize: 14, color: 'var(--muted)' }}>{p.client}</span>
                </span>
                <span className="arr" aria-hidden="true" style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 999, border: '1px solid var(--line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 96, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <h2 style={sectionTitle}>What I do</h2>
        <div className="three">
          {services.map(([num, title, body]) => (
            <div key={num} className="tile" style={{ background: 'var(--tile)', borderRadius: 28, padding: 28, display: 'flex', flexDirection: 'column', gap: 48 }}>
              <span className="mono" style={{ fontSize: 13, color: 'var(--accent)' }}>{num}</span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.035em' }}>{title}</span>
                <span style={{ color: 'var(--muted)' }}>{body}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--dark)', color: 'var(--on-dark)', padding: '96px 0 32px', borderRadius: '40px 40px 0 0', marginTop: 110 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(52px, 9vw, 136px)', lineHeight: 0.88, letterSpacing: '-0.06em', fontWeight: 700 }}>
            Let’s build<br />something <span style={{ color: 'var(--accent)' }}>good.</span>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Link to="/contact" className="pill-btn" style={{ height: 60, padding: '0 28px', borderRadius: 999, background: 'var(--accent)', color: '#fff', fontSize: 17, fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>Start a project ↗</Link>
            <Link to="/about" className="pill-btn" style={{ height: 60, padding: '0 24px', borderRadius: 999, border: '1px solid rgba(241,240,236,.3)', display: 'inline-flex', alignItems: 'center', fontWeight: 500 }}>More about me</Link>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, paddingTop: 28, borderTop: '1px solid rgba(241,240,236,.14)', fontSize: 14, color: 'var(--on-dark-muted)' }}>
            <span>© 2026 James Junior Baah</span>
            <span className="mono">Accra · {clock} GMT</span>
            <span style={{ display: 'flex', gap: 20 }}>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" style={footLink}>LinkedIn</a>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" style={footLink}>GitHub</a>
              <a href={whatsappHref} target={SOCIALS.whatsapp ? '_blank' : undefined} rel="noreferrer" style={footLink}>WhatsApp</a>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
