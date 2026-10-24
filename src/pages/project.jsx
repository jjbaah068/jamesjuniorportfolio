import { useState } from 'react'
import { Link } from 'react-router'
import Header from '../components/header'

const shots = [
  { label: 'Dashboard', tint: '#B23A3A' },
  { label: 'Unified inbox', tint: '#8E2C2C' },
  { label: 'Social scheduling', tint: '#C2554A' },
  { label: 'Mobile view', tint: '#6E2222' },
]

const story = [
  { label: 'Challenge', title: 'Support and social were scattered across too many tools.', body: 'Red Pear Communications needed one platform where teams could answer customers and manage social media across channels — without jumping between apps. Support agents and admins needed live conversations, hand-offs between agents and a clear view of every channel in one place.' },
  { label: 'Approach', title: 'A component system built for a busy, multi-channel workspace.', body: 'I built the frontend in React and Tailwind around reusable components — conversation lists, channel filters, composers and dashboards — so new channels and views can be added quickly. Agent and admin dashboards run on real-time WebSocket data, with notifications, session transfer flows and Paystack subscriptions built in.' },
  { label: 'Outcome', title: '[Headline result — e.g. what the team can now do.]', body: '[Add measurable results or client feedback once you have them: launch date, adoption, response times, quotes.]' },
]

const meta = [
  ['Client', 'Red Pear Communications'],
  ['My role', 'Frontend development'],
  ['Stack', 'React · Tailwind'],
  ['Year', '2025'],
]

const roundBtn = { width: 48, height: 48, borderRadius: 999, border: 0, background: 'rgba(255,255,255,.9)', color: '#111', fontSize: 18, cursor: 'pointer' }

export default function Project() {
  const [shot, setShot] = useState(0)
  const [tab, setTab] = useState(0)
  const cur = shots[shot]
  const st = story[tab]
  const storyNum = '0' + (tab + 1) + ' — ' + st.label

  return (
    <div className="st pg-case">
      <Header active="work" current={false} />

      <main className="wrap" style={{ paddingTop: 56, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <nav aria-label="Breadcrumb" className="mono" style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', gap: 8 }}>
          <Link to="/work" style={{ textDecoration: 'none' }}>Work</Link><span>/</span><span style={{ color: 'var(--ink)' }}>PearSuite</span>
        </nav>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(60px, 11vw, 160px)', lineHeight: 0.85, letterSpacing: '-0.065em', fontWeight: 700 }}>PearSuite</h1>
          <p style={{ margin: 0, maxWidth: 420, fontSize: 20, lineHeight: 1.4 }}>One place to manage customer support and social media across every channel.</p>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <span className="mono" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', opacity: 0.85 }}>{cur.label}</span>
            <span className="mono" style={{ fontSize: 12, opacity: 0.85 }}>0{shot + 1} / 04</span>
          </div>
          <span className="swap" key={cur.label} style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>[Screenshot — {cur.label}]</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" onClick={() => setShot((shot + 3) % 4)} aria-label="Previous screen" style={roundBtn}>←</button>
            <button type="button" onClick={() => setShot((shot + 1) % 4)} aria-label="Next screen" style={roundBtn}>→</button>
          </div>
        </div>
        <div className="thumbs">
          {shots.map((t, i) => (
            <button key={t.label} type="button" className={'th' + (shot === i ? ' on' : '')} onClick={() => setShot(i)} aria-pressed={shot === i} style={{ aspectRatio: '16 / 10', borderRadius: 18, border: 0, background: t.tint, color: '#fff', font: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'flex-end', padding: 14 }}>{t.label}</button>
          ))}
        </div>

        <section className="story" style={{ paddingTop: 64 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="mono" style={{ fontSize: 12, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.1em' }}>The story</span>
            <div role="tablist" aria-label="Case study" style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--line)' }}>
              {story.map((t, i) => (
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

      <Link to="/work" className="next" style={{ display: 'block', marginTop: 110, background: 'var(--dark)', color: 'var(--on-dark)', textDecoration: 'none', borderRadius: '40px 40px 0 0', padding: '72px 0 56px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="mono" style={{ fontSize: 12, color: 'var(--on-dark-muted)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Next project</span>
          <span className="big" style={{ fontSize: 'clamp(52px, 9vw, 136px)', lineHeight: 0.9, letterSpacing: '-0.06em', fontWeight: 700 }}>SUNU Admin <span style={{ color: 'var(--accent)' }}>→</span></span>
          <span style={{ color: 'var(--on-dark-muted)' }}>Insurance multi-dashboard · TanStack Router &amp; Query</span>
        </div>
      </Link>
    </div>
  )
}
