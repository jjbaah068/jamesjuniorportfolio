import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import Header from '../components/header'
import { projects, projectHref } from '../data/projects'

// Darker / lighter variations of the project colour for the screenshot placeholders
const shades = ['', 'black 22%', 'white 18%', 'black 40%']
const shade = (tint, i) => (shades[i] ? `color-mix(in srgb, ${tint}, ${shades[i]})` : tint)

// Label chips that stay readable on top of a screenshot
const pill = { fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', padding: '6px 12px', borderRadius: 999, background: 'rgba(0,0,0,.45)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }
const roundBtn = { width: 48, height: 48, borderRadius: 999, border: 0, background: 'rgba(255,255,255,.9)', color: '#111', fontSize: 18, cursor: 'pointer' }

export default function Project() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return <Navigate to="/work" replace />
  // key resets the slideshow and story tabs when moving to another project
  return <ProjectView key={slug} p={projects[index]} next={projects[(index + 1) % projects.length]} />
}

function ProjectView({ p, next }) {
  const [shot, setShot] = useState(0)
  const [tab, setTab] = useState(0)
  const shots = p.shots.map((s, i) => ({ ...(typeof s === 'string' ? { label: s } : s), tint: shade(p.tint, i) }))
  const meta = [
    ['Client', p.client],
    ['My role', p.role],
    ['Stack', p.stack.join(' · ')],
    ['Year', p.year],
  ]
  const n = shots.length
  const cur = shots[shot]
  const st = p.story[tab]
  const storyNum = '0' + (tab + 1) + ' — ' + st.label

  return (
    <div className="st pg-case">
      <Header active="work" current={false} />

      <main className="wrap" style={{ paddingTop: 56, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <nav aria-label="Breadcrumb" className="mono" style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', gap: 8 }}>
          <Link to="/work" style={{ textDecoration: 'none' }}>Work</Link><span>/</span><span style={{ color: 'var(--ink)' }}>{p.name}</span>
        </nav>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(60px, 11vw, 160px)', lineHeight: 0.85, letterSpacing: '-0.065em', fontWeight: 700 }}>{p.name}</h1>
          <p style={{ margin: 0, maxWidth: 420, fontSize: 20, lineHeight: 1.4 }}>{p.tagline}</p>
        </div>

        <div className="meta">
          {meta.map(([k, v]) => (
            <div key={k} style={{ background: 'var(--tile)', borderRadius: 20, padding: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span className="mono" style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{k}</span>
              <span style={{ fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ position: 'relative', borderRadius: 32, overflow: 'hidden', aspectRatio: '16 / 9', background: cur.tint, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'clamp(20px, 3vw, 36px)', transition: 'background .5s' }}>
          {cur.img && (cur.mobile ? (
            // Phone screenshot: framed in the centre over a blurred copy of itself
            <div className="swap" key={cur.label} style={{ position: 'absolute', inset: 0 }}>
              <img src={cur.img} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(28px) brightness(.55)', transform: 'scale(1.2)' }} />
              <img src={cur.img} alt={`${p.name} — ${cur.label}`} style={{ position: 'absolute', top: '7%', left: '50%', transform: 'translateX(-50%)', height: '86%', width: 'auto', borderRadius: 'clamp(14px, 2.4vw, 32px)', border: 'clamp(4px, .6vw, 8px) solid #0b0b0c', boxShadow: '0 30px 60px rgba(0,0,0,.45)' }} />
            </div>
          ) : (
            // Desktop screenshot: fills the whole slide, anchored to the top so the nav stays in view
            <img className="swap" key={cur.label} src={cur.img} alt={`${p.name} — ${cur.label}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          ))}
          {cur.img && <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(to bottom, rgba(0,0,0,.35), transparent 22%, transparent 75%, rgba(0,0,0,.45))' }} />}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <span className="mono" style={cur.img ? pill : { fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', opacity: 0.85 }}>{cur.label}</span>
            <span className="mono" style={cur.img ? pill : { fontSize: 12, opacity: 0.85 }}>0{shot + 1} / 0{n}</span>
          </div>
          {cur.img ? <span /> : <span className="swap" key={cur.label} style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>[Screenshot — {cur.label}]</span>}
          <div style={{ position: 'relative', display: 'flex', gap: 8 }}>
            <button type="button" onClick={() => setShot((shot + n - 1) % n)} aria-label="Previous screen" style={roundBtn}>←</button>
            <button type="button" onClick={() => setShot((shot + 1) % n)} aria-label="Next screen" style={roundBtn}>→</button>
          </div>
        </div>
        <div className="thumbs">
          {shots.map((t, i) => (
            <button key={t.label} type="button" className={'th' + (shot === i ? ' on' : '')} onClick={() => setShot(i)} aria-pressed={shot === i} style={{ aspectRatio: '16 / 10', borderRadius: 18, border: 0, background: t.img ? `linear-gradient(to top, rgba(0,0,0,.55), transparent 55%), url(${t.img}) ${t.mobile ? 'center 20%' : 'center top'} / cover, ${t.tint}` : t.tint, color: '#fff', font: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'flex-end', padding: 14 }}>{t.label}</button>
          ))}
        </div>

        <section className="story" style={{ paddingTop: 64 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="mono" style={{ fontSize: 12, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.1em' }}>The story</span>
            <div role="tablist" aria-label="Case study" style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--line)' }}>
              {p.story.map((t, i) => (
                <button key={t.label} type="button" role="tab" aria-selected={tab === i} className={'tab' + (tab === i ? ' on' : '')} onClick={() => setTab(i)} style={{ textAlign: 'left', padding: '14px 20px', marginLeft: -1, border: 0, borderLeft: '3px solid transparent', background: 'transparent', color: 'var(--muted)', font: 'inherit', fontSize: 22, fontWeight: 600, letterSpacing: '-0.03em', cursor: 'pointer' }}>{t.label}</button>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--tile)', borderRadius: 28, padding: 'clamp(24px, 4vw, 44px)', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 280 }}>
            <span className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>{storyNum}</span>
            <h2 className="swap" key={storyNum} style={{ margin: 0, fontSize: 'clamp(28px, 3.2vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.04em', fontWeight: 700 }}>{st.title}</h2>
            <p style={{ margin: 0, fontSize: 18, color: 'var(--muted)', lineHeight: 1.6 }}>{st.body}</p>
          </div>
        </section>
      </main>

      <Link to={projectHref(next)} className="next" style={{ display: 'block', marginTop: 110, background: 'var(--dark)', color: 'var(--on-dark)', textDecoration: 'none', borderRadius: '40px 40px 0 0', padding: '72px 0 56px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--on-dark-muted)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Next project</span>
          <span className="big" style={{ fontSize: 'clamp(52px, 9vw, 136px)', lineHeight: 0.9, letterSpacing: '-0.06em', fontWeight: 700 }}>{next.name} <span style={{ color: 'var(--accent)' }}>→</span></span>
          <span style={{ color: 'var(--on-dark-muted)' }}>{next.type} · {next.client}</span>
        </div>
      </Link>
    </div>
  )
}
