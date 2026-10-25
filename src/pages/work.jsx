import { useState } from 'react'
import { Link } from 'react-router'
import Header from '../components/header'
import { projects as all, projectHref, coverOf } from '../data/projects'
import { SOCIALS, whatsappHref } from '../data/site'

const filterDefs = [['all', 'All'], ['web', 'Websites'], ['product', 'Products & dashboards'], ['booking', 'Booking']]

const chipStyle = { height: 44, padding: '0 18px', borderRadius: 999, border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)', font: 'inherit', fontSize: 15, fontWeight: 500, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }
const segStyle = { height: 40, padding: '0 16px', borderRadius: 999, border: 0, background: 'transparent', color: 'inherit', font: 'inherit', fontSize: 14, cursor: 'pointer' }
const footLink = { textDecoration: 'none' }

export default function Work() {
  const [filter, setFilter] = useState('all')
  const [view, setView] = useState('list')
  const [sel, setSel] = useState(0)

  const list = filter === 'all' ? all : all.filter((p) => p.cat === filter)
  const proj = Math.min(sel, list.length - 1)
  const items = list.map((p, i) => ({ ...p, num: String(i + 1).padStart(2, '0'), cover: coverOf(p) }))
  const cur = items[proj]
  const isList = view === 'list'

  return (
    <div className="st pg-work">
      <Header active="work" />

      <main className="wrap" style={{ paddingTop: 72, display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Selected work · {String(all.length).padStart(2, '0')} projects</span>
          <h1 style={{ margin: 0, fontSize: 'clamp(64px, 12vw, 176px)', lineHeight: 0.85, letterSpacing: '-0.065em', fontWeight: 700 }}>Work<span style={{ color: 'var(--accent)' }}>.</span></h1>
          <p style={{ margin: 0, maxWidth: 560, fontSize: 20, lineHeight: 1.4, color: 'var(--muted)' }}>SaaS products, dashboards, booking platforms and brand sites — built with React for clients in Ghana, the UK and the US.</p>
        </div>

        <div className="filterbar">
          <div role="group" aria-label="Filter projects" className="filters">
            {filterDefs.map(([id, label]) => {
              const count = id === 'all' ? all.length : all.filter((p) => p.cat === id).length
              const on = filter === id
              return (
                <button key={id} type="button" className={'chip' + (on ? ' on' : '')} onClick={() => { setFilter(id); setSel(0) }} aria-pressed={on} style={chipStyle}>
                  {label} <span className="mono" style={{ fontSize: 11, opacity: 0.7 }}>{count}</span>
                </button>
              )
            })}
          </div>
          <div role="group" aria-label="View" style={{ display: 'flex', gap: 4, padding: 4, borderRadius: 999, border: '1px solid var(--line)' }}>
            <button type="button" className={'seg' + (isList ? ' on' : '')} onClick={() => setView('list')} aria-pressed={isList} style={segStyle}>List</button>
            <button type="button" className={'seg' + (!isList ? ' on' : '')} onClick={() => setView('grid')} aria-pressed={!isList} style={segStyle}>Grid</button>
          </div>
        </div>

        {isList ? (
          <div className="work-grid">
            <div style={{ borderTop: '1px solid var(--ink)' }}>
              {items.map((p, i) => (
                <Link
                  key={p.name}
                  to={projectHref(p)}
                  className={'row' + (proj === i ? ' on' : '')}
                  onMouseEnter={() => setSel(i)}
                  onFocus={() => setSel(i)}
                  style={{ display: 'grid', gridTemplateColumns: '44px minmax(0, 1fr) auto 28px', alignItems: 'center', gap: 16, padding: '22px 16px', borderBottom: '1px solid var(--line)', textDecoration: 'none', color: 'inherit', borderRadius: 14 }}
                >
                  <span className="mono row-muted" style={{ fontSize: 13, color: 'var(--muted)' }}>{p.num}</span>
                  <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <span style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.15 }}>{p.name}</span>
                    <span className="row-muted" style={{ fontSize: 14, color: 'var(--muted)' }}>{p.client}</span>
                  </span>
                  <span className="mono row-muted hide-sm" style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{p.type}</span>
                  <svg className="row-arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
                </Link>
              ))}
            </div>
            <aside className="preview" aria-live="polite" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', aspectRatio: '4 / 5', background: cur.tint, color: '#fff', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'background .5s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', opacity: 0.85 }}>{cur.type}</span>
                  <span className="mono" style={{ fontSize: 12, opacity: 0.85 }}>{cur.num}</span>
                </div>
                {cur.cover.desktop ? (
                  // Desktop screenshot bleeding off the right edge, with the phone shot on top when there is one
                  <div className="pv-shots swap" key={cur.name} aria-hidden="true">
                    <img className="pv-desktop" src={cur.cover.desktop} alt="" decoding="async" />
                    {cur.cover.mobile && <img className="pv-mobile" src={cur.cover.mobile} alt="" decoding="async" />}
                  </div>
                ) : (
                  <span className="swap" key={cur.name} style={{ fontSize: 150, fontWeight: 800, letterSpacing: '-0.07em', lineHeight: 0.8 }}>{cur.mono}</span>
                )}
              </div>
              <div style={{ background: 'var(--tile)', borderRadius: 22, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 16, lineHeight: 1.5 }}>{cur.desc}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {cur.stack.map((sx) => (
                    <span key={sx} className="mono" style={{ padding: '4px 10px', borderRadius: 8, background: 'var(--bg)', fontSize: 11 }}>{sx}</span>
                  ))}
                </div>
                <Link to={projectHref(cur)} style={{ fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>View case study →</Link>
              </div>
            </aside>
          </div>
        ) : (
          <div className="cards">
            {items.map((p) => (
              <Link key={p.name} to={projectHref(p)} className="card" style={{ display: 'flex', flexDirection: 'column', borderRadius: 28, background: 'var(--tile)', overflow: 'hidden', color: 'inherit' }}>
                <div style={{ position: 'relative', aspectRatio: '5 / 4', overflow: 'hidden' }}>
                  {p.cover.desktop ? (
                    <img className="thumb" src={p.cover.desktop} alt={`${p.name} website`} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top', background: p.tint }} />
                  ) : (
                    <div className="thumb" style={{ position: 'absolute', inset: 0, background: p.tint, color: '#fff', display: 'flex', alignItems: 'flex-end', padding: 24 }}>
                      <span style={{ fontSize: 110, fontWeight: 800, letterSpacing: '-0.07em', lineHeight: 0.8 }}>{p.mono}</span>
                    </div>
                  )}
                  <span className="mono" style={{ position: 'absolute', left: 16, top: 16, padding: '5px 10px', borderRadius: 999, background: 'rgba(255,255,255,.9)', color: '#111', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em' }}>{p.type}</span>
                </div>
                <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em' }}>{p.name}</span>
                  <span style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.45 }}>{p.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <section style={{ background: 'var(--dark)', color: 'var(--on-dark)', padding: '80px 0 32px', borderRadius: '40px 40px 0 0', marginTop: 110 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(44px, 7vw, 104px)', lineHeight: 0.9, letterSpacing: '-0.06em', fontWeight: 700 }}>Your project<br />could be <span style={{ color: 'var(--accent)' }}>next.</span></h2>
            <Link to="/contact" className="pill-btn" style={{ height: 60, padding: '0 28px', borderRadius: 999, background: 'var(--accent)', color: '#fff', fontSize: 17, fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>Start a project ↗</Link>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, paddingTop: 28, borderTop: '1px solid rgba(241,240,236,.14)', fontSize: 14, color: 'var(--on-dark-muted)' }}>
            <span>© 2026 James Junior Baah</span>
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
