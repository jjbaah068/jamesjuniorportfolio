import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import emailjs from '@emailjs/browser'
import Header from '../components/header'
import useAccraClock from '../hooks/useAccraClock'
import { EMAIL, EMAILJS, SOCIALS, whatsappHref } from '../data/site'

const needLabels = ['Website', 'Web app / SaaS', 'Dashboard', 'Booking site', 'Redesign']
const timeLabels = ['As soon as possible', 'In 1–3 months', 'Flexible']

const faqData = [
  ['Do you work with clients outside Ghana?', 'Yes. I’m based in Accra and work remotely with teams in other countries, including the UK and the US.'],
  ['What do you need from me to get started?', 'A short description of the project, any designs or brand assets you already have, and your ideal timeline. We’ll fill in the rest on a first call.'],
  ['Can you work from my existing designs?', '[Confirm your answer — e.g. yes, I can build from Figma files or design the UI with you.]'],
  ['How much does a project cost?', '[Add how you price — fixed quote per project, day rate, or a starting-from figure.]'],
]

const chipStyle = { height: 44, padding: '0 16px', borderRadius: 999, border: '1px solid var(--line)', background: 'transparent', color: 'var(--ink)', font: 'inherit', fontSize: 15, cursor: 'pointer' }
const fieldStyle = { height: 54, padding: '0 16px', borderRadius: 14, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)', font: 'inherit', fontWeight: 400 }
const labelStyle = { display: 'flex', flexDirection: 'column', gap: 8, fontWeight: 600 }
const socialStyle = { display: 'flex', justifyContent: 'space-between', padding: '18px 20px', borderRadius: 18, border: '1px solid rgba(241,240,236,.2)', fontWeight: 600 }

const emptyForm = { name: '', email: '', details: '' }

export default function Contact() {
  const { clock } = useAccraClock(15000)
  const [needs, setNeeds] = useState({})
  const [time, setTime] = useState(-1)
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [copied, setCopied] = useState(false)
  const [faq, setFaq] = useState(0)
  const copyTimer = useRef(null)

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  const picked = needLabels.filter((l) => needs[l])

  const copyEmail = () => {
    try { navigator.clipboard?.writeText(EMAIL) } catch { /* clipboard not available */ }
    setCopied(true)
    clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopied(false), 1800)
  }

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const send = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const timeline = time >= 0 ? timeLabels[time] : 'Not specified'
    const types = picked.length ? picked.join(', ') : 'Not specified'
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          firstName: form.name,
          lastName: '',
          name: form.name,
          email: form.email,
          subject: `New project enquiry — ${types}`,
          message: `Project type: ${types}\nTimeline: ${timeline}\n\n${form.details}`,
        },
        { publicKey: EMAILJS.publicKey },
      )
      setStatus('sent')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const reset = () => {
    setStatus('idle')
    setNeeds({})
    setTime(-1)
    setForm(emptyForm)
  }

  const copyButton = (
    <button type="button" className="pill-btn" onClick={copyEmail} style={{ height: 44, padding: '0 18px', borderRadius: 999, border: 0, background: 'var(--ink)', color: 'var(--bg)', font: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
      {copied ? 'Copied!' : 'Copy email'}
    </button>
  )

  return (
    <div className="st pg-contact">
      <Header active="contact" action={copyButton} />

      <main className="wrap" style={{ paddingTop: 72, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h1 style={{ margin: '0 0 28px', fontSize: 'clamp(56px, 10vw, 150px)', lineHeight: 0.86, letterSpacing: '-0.065em', fontWeight: 700 }}>Let’s talk<span style={{ color: 'var(--accent)' }}>.</span></h1>
        <div className="cgrid">
          <aside style={{ background: 'var(--dark)', color: 'var(--on-dark)', borderRadius: 28, padding: 'clamp(24px, 3.5vw, 40px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 40 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 500 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: '#22C55E', display: 'inline-block' }}></span>Taking on new projects
              </span>
              <p style={{ margin: 0, fontSize: 26, lineHeight: 1.2, letterSpacing: '-0.03em', fontWeight: 500 }}>Tell me about your idea — a new product, a redesign, or a site that needs to convert.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button type="button" className="social" onClick={copyEmail} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '18px 20px', borderRadius: 18, border: '1px solid rgba(241,240,236,.2)', background: 'transparent', color: 'inherit', font: 'inherit', textAlign: 'left', cursor: 'pointer' }}>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="mono" style={{ fontSize: 11, opacity: 0.7, textTransform: 'uppercase' }}>Email</span>
                  <span style={{ fontWeight: 600 }}>{copied ? 'Copied to clipboard' : EMAIL}</span>
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"></rect><path d="M5 15V5a2 2 0 0 1 2-2h10"></path></svg>
              </button>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="social" style={socialStyle}>LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="social" style={socialStyle}>GitHub <span aria-hidden="true">↗</span></a>
              <a href={whatsappHref} target={SOCIALS.whatsapp ? '_blank' : undefined} rel="noreferrer" className="social" style={socialStyle}>WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
            <span className="mono" style={{ fontSize: 13, color: 'var(--on-dark-muted)' }}>Accra · {clock} GMT</span>
          </aside>

          <section style={{ background: 'var(--tile)', borderRadius: 28, padding: 'clamp(24px, 3.5vw, 40px)', minHeight: 640 }}>
            {status !== 'sent' ? (
              <form onSubmit={send} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ fontWeight: 600 }}>What are you building?</span>
                  <div role="group" aria-label="Project type" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {needLabels.map((label) => (
                      <button key={label} type="button" className={'chip' + (needs[label] ? ' on' : '')} onClick={() => setNeeds((n) => ({ ...n, [label]: !n[label] }))} aria-pressed={!!needs[label]} style={chipStyle}>{label}</button>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <span style={{ fontWeight: 600 }}>Timeline</span>
                  <div role="group" aria-label="Timeline" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {timeLabels.map((label, i) => (
                      <button key={label} type="button" className={'chip' + (time === i ? ' on' : '')} onClick={() => setTime(i)} aria-pressed={time === i} style={chipStyle}>{label}</button>
                    ))}
                  </div>
                </div>
                <div className="two">
                  <label style={labelStyle}>Name
                    <input className="field" type="text" name="name" required value={form.name} onChange={onChange} placeholder="Your name" style={fieldStyle} />
                  </label>
                  <label style={labelStyle}>Email
                    <input className="field" type="email" name="email" required value={form.email} onChange={onChange} placeholder="you@company.com" style={fieldStyle} />
                  </label>
                </div>
                <label style={labelStyle}>Project details
                  <textarea className="field" name="details" rows="5" required value={form.details} onChange={onChange} placeholder="Goals, audience, links to anything you like…" style={{ padding: '14px 16px', borderRadius: 14, border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)', font: 'inherit', fontWeight: 400, resize: 'vertical' }}></textarea>
                </label>
                <button type="submit" className="pill-btn" disabled={status === 'sending'} style={{ height: 60, borderRadius: 999, border: 0, background: 'var(--accent)', color: '#fff', font: 'inherit', fontSize: 17, fontWeight: 600, cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? 0.8 : 1 }}>
                  {status === 'sending' ? 'Sending…' : 'Send message ↗'}
                </button>
                {status === 'error' && (
                  <p role="alert" style={{ margin: 0, color: '#B42318', fontSize: 15 }}>
                    Something went wrong sending your message. Please try again, or email me at {EMAIL}.
                  </p>
                )}
              </form>
            ) : (
              <div style={{ height: '100%', minHeight: 560, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 18 }}>
                <span className="pop" style={{ width: 72, height: 72, borderRadius: 999, background: 'var(--accent)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                </span>
                <span style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>Message sent!</span>
                <span style={{ color: 'var(--muted)', fontSize: 18, maxWidth: 460 }}>
                  Thanks for reaching out — I’ll get back to you soon. {picked.length ? 'You asked about: ' + picked.join(', ') + '.' : ''}
                </span>
                <button type="button" className="pill-btn" onClick={reset} style={{ height: 50, padding: '0 22px', borderRadius: 999, border: '1px solid var(--ink)', background: 'transparent', color: 'var(--ink)', font: 'inherit', fontWeight: 600, cursor: 'pointer' }}>Send another</button>
              </div>
            )}
          </section>
        </div>
      </main>

      <section className="wrap" style={{ paddingTop: 96, paddingBottom: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 0.95, letterSpacing: '-0.05em', fontWeight: 700 }}>Good to know</h2>
        <div style={{ background: 'var(--tile)', borderRadius: 28, overflow: 'hidden' }}>
          {faqData.map(([q, a], i) => {
            const open = faq === i
            return (
              <div key={q} style={{ borderBottom: '1px solid var(--line)' }}>
                <button type="button" className="faq" onClick={() => setFaq(open ? -1 : i)} aria-expanded={open} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '24px 28px', border: 0, background: 'transparent', color: 'inherit', font: 'inherit', fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', textAlign: 'left', cursor: 'pointer' }}>
                  <span>{q}</span>
                  <span className={'plus' + (open ? ' open' : '')} aria-hidden="true" style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 999, background: 'var(--bg)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 400 }}>+</span>
                </button>
                {open && <p style={{ margin: 0, padding: '0 28px 26px', maxWidth: 760, color: 'var(--muted)', fontSize: 17 }}>{a}</p>}
              </div>
            )
          })}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, paddingTop: 40, fontSize: 14, color: 'var(--muted)' }}>
          <span>© 2026 James Junior Baah</span>
          <Link to="/" style={{ textDecoration: 'none' }}>Back to home ↑</Link>
        </div>
      </section>
    </div>
  )
}
