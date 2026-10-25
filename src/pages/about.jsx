import { useState } from 'react'
import { Link } from 'react-router'
import Header from '../components/header'
import portrait from '../assets/images/image3.webp'
import cv from '../assets/James Junior Baah-Software Engineer_CV.pdf'

const tools = [
  ['React', 'My home base. Component-driven UIs with clean state, composable patterns and interfaces that stay fast as they grow.'],
  ['TypeScript', 'Typed props and API contracts so big apps stay safe to change.'],
  ['Vite', 'Instant dev servers and lean production builds on every project.'],
  ['Tailwind CSS', 'Design tokens in code: consistent spacing, type and colour without bloated stylesheets.'],
  ['TanStack Router', 'Type-safe, file-based routing for multi-page apps and dashboards.'],
  ['TanStack Query', 'Server state, caching and loading states handled properly.'],
  ['Motion', 'Micro-interactions and transitions that guide the eye rather than distract.'],
  ['Accessibility', 'Real buttons, keyboard paths, contrast that passes. Built in, not bolted on.'],
]

const steps = [
  ['Discover', 'We talk goals, users and constraints, then agree on scope and timeline.'],
  ['Design', 'Wireframes into polished UI — reviewed together before a line of code.'],
  ['Build', 'Clean React, built in the open with regular previews you can click through.'],
  ['Launch', 'Testing, deploy and handover — plus support while it settles in.'],
]

const experience = [
  { when: 'Sep 2025 — Now', title: 'Software Engineer', org: 'Red Pear Communications', body: 'Building PearSuite, a customer support SaaS — agent and admin dashboards on real-time WebSocket data, Paystack subscriptions and multi-platform chat.' },
  { when: 'Aug 2025', title: 'Software Engineer (Internship)', org: 'MelAnu SkinCare', body: 'Built a full eCommerce platform from scratch — product listings, cart and checkout, responsive on every device.' },
  { when: 'May 2025 — Now', title: 'Frontend Developer (Trainee)', org: 'MEST Africa', body: 'Intensive frontend programme with real-world team projects in React, TanStack and modern frontend architecture.' },
  { when: 'Nov 2022 — Feb 2024', title: 'Junior Insurance Underwriter / Analyst', org: 'Activa International Insurance', body: 'Underwrote motor and travel policies, ran risk analysis and managed client portfolios.' },
]

const education = [
  { when: '2026 — Now', title: 'MSc Software Engineering', org: 'Quantic School of Business and Technology', body: 'Advanced software engineering principles and leadership — it keeps my product thinking sharp.' },
  { when: '2025', title: 'Frontend Development', org: 'MEST Africa', body: 'Practical, project-based training in modern frontend development and product design.' },
  { when: '2018 — 2022', title: 'BA Economics', org: 'University of Ghana', body: 'Strong foundations in statistics and economics.' },
]

const h2 = { margin: 0, fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 0.95, letterSpacing: '-0.05em', fontWeight: 700 }
const factLabel = { fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em' }
const factValue = { fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em' }
const factTile = { borderRadius: 24, padding: 24, display: 'flex', flexDirection: 'column', gap: 28 }

export default function About() {
  const [tool, setTool] = useState(0)
  const [step, setStep] = useState(0)
  const [tab, setTab] = useState(0)
  const timeline = tab === 0 ? experience : education

  return (
    <div className="st pg-about">
      <Header active="about" />

      <main className="wrap" style={{ paddingTop: 72, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h1 style={{ margin: '0 0 28px', fontSize: 'clamp(64px, 12vw, 176px)', lineHeight: 0.85, letterSpacing: '-0.065em', fontWeight: 700 }}>About<span style={{ color: 'var(--accent)' }}>.</span></h1>
        <div className="intro">
          <div className="tile photo" style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', minHeight: 480, background: '#D9D7D0' }}>
            <img src={portrait} alt="Portrait of James Junior Baah" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="tile" style={{ background: 'var(--tile)', borderRadius: 28, padding: 'clamp(24px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}>
            <p style={{ margin: 0, fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.18, letterSpacing: '-0.035em', fontWeight: 500 }}>
              I’m James Junior — a software engineer from Ghana <span style={{ color: 'var(--accent)' }}>And</span>, an alumni of Mest Africa, Ghana.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, color: 'var(--muted)', fontSize: 17 }}>
              <p style={{ margin: 0 }}>I work with brands and startups to turn ideas into polished, reliable software: SaaS platforms, admin dashboards, booking sites and marketing pages.</p>
              <p style={{ margin: 0 }}>I care about clean component architecture, motion with a purpose, and interfaces that work for everyone. I’m also studying at Quantic School of Business and Technology, which keeps my product thinking sharp.</p>
            </div>
            <a href={cv} download="James Junior Baah - CV.pdf" className="pill-btn" style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8, height: 50, padding: '0 22px', borderRadius: 999, background: 'var(--ink)', color: 'var(--bg)', fontWeight: 600 }}>Download CV ↓</a>
          </div>
        </div>
        <div className="facts">
          <div className="tile" style={{ ...factTile, background: 'var(--dark)', color: 'var(--on-dark)' }}><span className="mono" style={{ ...factLabel, color: 'var(--on-dark-muted)' }}>Based in</span><span style={factValue}>Accra, Ghana</span></div>
          <div className="tile" style={{ ...factTile, background: 'var(--accent)', color: '#fff' }}><span className="mono" style={{ ...factLabel, opacity: 0.85 }}>Speciality</span><span style={factValue}>Web applications</span></div>
          <div className="tile" style={{ ...factTile, background: 'var(--tile)' }}><span className="mono" style={{ ...factLabel, color: 'var(--muted)' }}>Studio</span><span style={factValue}>Software Engineer</span></div>
          <div className="tile" style={{ ...factTile, background: 'var(--tile)' }}><span className="mono" style={{ ...factLabel, color: 'var(--muted)' }}>Off the clock</span><span style={factValue}>Football &amp; content</span></div>
        </div>
      </main>

      <section className="wrap" style={{ paddingTop: 96 }}>
        <div style={{ background: 'var(--tile)', borderRadius: 28, padding: 'clamp(24px, 4vw, 44px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
            <h2 style={h2}>The toolkit</h2>
            <span className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>Click a tool →</span>
          </div>
          <div role="group" aria-label="Tools" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tools.map(([name], i) => (
              <button key={name} type="button" className={'chip' + (tool === i ? ' on' : '')} onClick={() => setTool(i)} aria-pressed={tool === i} style={{ height: 44, padding: '0 18px', borderRadius: 999, border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)', font: 'inherit', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>{name}</button>
            ))}
          </div>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.45, maxWidth: 800 }}>
            <span className="mono" style={{ color: 'var(--accent)', fontSize: 14 }}>{tools[tool][0]} —</span>{' '}
            <span className="swap" key={tools[tool][0]}>{tools[tool][1]}</span>
          </p>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 96, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
          <h2 style={h2}>How we’ll work</h2>
          <span className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>Step {step + 1} of 4</span>
        </div>
        <div style={{ height: 4, borderRadius: 999, background: 'var(--line)', overflow: 'hidden' }}>
          <div className="bar-fill" style={{ height: '100%', width: `${(step + 1) * 25}%`, background: 'var(--accent)', borderRadius: 999 }}></div>
        </div>
        <div className="steps">
          {steps.map(([title, body], i) => (
            <button key={title} type="button" className={'step' + (step === i ? ' on' : '')} onClick={() => setStep(i)} aria-pressed={step === i} style={{ textAlign: 'left', padding: 24, borderRadius: 24, border: '1px solid var(--line)', background: 'var(--tile)', color: 'inherit', font: 'inherit', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 40, minHeight: 200 }}>
              <span className="mono" style={{ fontSize: 13 }}>0{i + 1}</span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.035em' }}>{title}</span>
                <span style={{ fontSize: 15, lineHeight: 1.45, opacity: 0.85 }}>{body}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 96 }}>
        <div style={{ background: 'var(--dark)', color: 'var(--on-dark)', borderRadius: 28, padding: 'clamp(24px, 4vw, 44px)', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
            <h2 style={h2}>Timeline</h2>
            <div role="tablist" aria-label="Timeline" style={{ display: 'flex', gap: 4, padding: 4, borderRadius: 999, border: '1px solid rgba(241,240,236,.2)' }}>
              {['Experience', 'Education'].map((label, i) => (
                <button key={label} type="button" role="tab" aria-selected={tab === i} className={'tab' + (tab === i ? ' on' : '')} onClick={() => setTab(i)} style={{ height: 42, padding: '0 18px', borderRadius: 999, border: 0, background: 'transparent', color: 'inherit', font: 'inherit', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>{label}</button>
              ))}
            </div>
          </div>
          {timeline.map((e) => (
            <div key={e.title + e.org} style={{ display: 'grid', gridTemplateColumns: '150px minmax(0, 1fr)', gap: 20, padding: '24px 0', borderTop: '1px solid rgba(241,240,236,.14)' }}>
              <span className="mono" style={{ fontSize: 13, color: 'var(--on-dark-muted)', paddingTop: 5 }}>{e.when}</span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{e.title}</span>
                <span style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 500 }}>{e.org}</span>
                <span style={{ color: 'var(--on-dark-muted)', fontSize: 15, paddingTop: 4 }}>{e.body}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '110px 0 40px' }}>
        <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24, paddingTop: 40, borderTop: '1px solid var(--ink)' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 0.95, letterSpacing: '-0.05em', fontWeight: 700 }}>Like what you see?</h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/work" className="pill-btn" style={{ height: 56, padding: '0 24px', borderRadius: 999, border: '1px solid var(--ink)', display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>See the work</Link>
            <Link to="/contact" className="pill-btn" style={{ height: 56, padding: '0 24px', borderRadius: 999, background: 'var(--accent)', color: '#fff', display: 'inline-flex', alignItems: 'center', fontWeight: 600 }}>Start a project ↗</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
