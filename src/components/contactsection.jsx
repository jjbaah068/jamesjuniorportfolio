import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const socials = [
    {
        label: 'LinkedIn',
        handle: 'james-kojo-junior-baah',
        href: 'https://www.linkedin.com/in/james-kojo-junior-baah/?trk=opento_sprofile_topcard',
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        handle: 'jjbaah068',
        href: 'https://github.com/jjbaah068',
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
    {
        label: 'Email',
        handle: 'jjbaah068@gmail.com',
        href: 'mailto:jjbaah068@gmail.com',
        icon: (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        label: 'Vercel',
        handle: 'james-junior-baahs-projects',
        href: 'https://vercel.com/james-junior-baahs-projects',
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
            </svg>
        ),
    },
]

const contactInfo = [
    {
        label: 'Based In',
        value: 'Accra, Ghana',
        icon: (
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
    {
        label: 'Availability',
        value: 'Open to Work',
        icon: (
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        label: 'Response Time',
        value: 'Within 24 hours',
        icon: (
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
]

export default function ContactSection() {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState(null)
    const EMAILJS_SERVICE_ID = 'service_vjhilbl'
    const EMAILJS_TEMPLATE_ID = 'template_h3vp2x7'
    const EMAILJS_PUBLIC_KEY = 'lLs47qwdJ13u44x94'

    const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const formRef = useRef(null)

    const handleSubmit = async e => {
        e.preventDefault()
        setStatus('sending')

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY,
            )
            setStatus('sent')
            setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' })
            setTimeout(() => setStatus(null), 5000)
        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
            setTimeout(() => setStatus(null), 5000)
        }
    }

    return (
        <section id="contact" style={{
            padding: '8rem 2rem',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Grid texture */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: `
          linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)
        `,
                backgroundSize: '80px 80px',
            }} />

            {/* Glow bottom left */}
            <div style={{
                position: 'absolute', bottom: '5%', left: '-5%',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
                zIndex: 0,
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <p className="section-label" style={{ marginBottom: '1rem' }}>Get In Touch</p>
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem',
                    marginBottom: '5rem',
                }}>
                    <h2 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 300, color: 'var(--ivory)',
                        lineHeight: 1.15,
                    }}>
                        Let's work{' '}
                        <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>together.</span>
                    </h2>
                    <p style={{
                        color: 'var(--muted)', fontSize: '0.875rem',
                        lineHeight: '1.8', maxWidth: '320px',
                    }}>
                        Have a project, opportunity, or just want to say hello? My inbox is always open.
                    </p>
                </div>

                {/* Two-column layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 420px',
                    gap: '5rem',
                    alignItems: 'start',
                }} className="contact-grid">

                    {/* Left — Form */}
                    <div>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="hidden" name="from_name" value={`${form.firstName} ${form.lastName}`} />
                            <input type="hidden" name="from_email" value={form.email} />

                            {/* Name row */}
                            <div style={{
                                display: 'grid', gridTemplateColumns: '1fr 1fr',
                                gap: '1.5rem', marginBottom: '1.5rem',
                            }} className="name-row">
                                <FormField
                                    label="First Name"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    placeholder="Vincent"
                                    required
                                />
                                <FormField
                                    label="Last Name"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    placeholder="Agyei"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <FormField
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            {/* Subject */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <FormField
                                    label="Subject"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Project inquiry, collaboration..."
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div style={{ marginBottom: '2.5rem' }}>
                                <label style={{
                                    display: 'block',
                                    fontSize: '0.65rem', letterSpacing: '0.2em',
                                    textTransform: 'uppercase', color: 'var(--gold)',
                                    fontFamily: "'DM Sans', sans-serif",
                                    marginBottom: '0.6rem',
                                }}>Message</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or idea..."
                                    required
                                    style={{
                                        width: '100%',
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: '1px solid rgba(201,168,76,0.2)',
                                        color: 'var(--ivory)',
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: '0.9rem',
                                        padding: '0.75rem 0',
                                        outline: 'none',
                                        resize: 'none',
                                        lineHeight: '1.7',
                                        transition: 'border-color 0.3s',
                                    }}
                                    onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                                    onBlur={e => e.target.style.borderBottomColor = 'rgba(201,168,76,0.2)'}
                                />
                            </div>

                            {/* Submit */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <button
                                    type="submit"
                                    disabled={status === 'sending' || status === 'sent'}
                                    className="btn-gold"
                                    style={{
                                        opacity: status === 'sending' ? 0.7 : 1,
                                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                    }}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <span style={{
                                                width: '12px', height: '12px',
                                                border: '1.5px solid var(--gold)',
                                                borderTopColor: 'transparent',
                                                borderRadius: '50%',
                                                display: 'inline-block',
                                                animation: 'spin 0.7s linear infinite',
                                            }} />
                                            Sending...
                                        </>
                                    ) : status === 'sent' ? '✓ Message Sent' : 'Send Message'}
                                </button>

                                {status === 'sent' && (
                                    <p style={{
                                        color: 'var(--gold)', fontSize: '0.8rem',
                                        fontFamily: "'DM Sans', sans-serif",
                                    }}>
                                        I'll get back to you within 24 hours.
                                    </p>
                                )}

                                {status === 'error' && (
                                    <p style={{
                                        color: '#e07070', fontSize: '0.8rem',
                                        fontFamily: "'DM Sans', sans-serif",
                                    }}>
                                        Something went wrong. Try emailing me directly.
                                    </p>
                                )}
                            </div>

                        </form>
                    </div>

                    {/* Right — Info panel */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                        {/* Contact info cards */}
                        <div style={{
                            display: 'flex', flexDirection: 'column',
                            gap: '1px', background: 'rgba(201,168,76,0.1)',
                            border: '1px solid rgba(201,168,76,0.1)',
                        }}>
                            {contactInfo.map(({ label, value, icon }) => (
                                <div key={label} style={{
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    padding: '1.25rem 1.5rem',
                                    background: 'var(--charcoal)',
                                }}>
                                    <span style={{ color: 'var(--gold)' }}>{icon}</span>
                                    <div>
                                        <div style={{
                                            fontSize: '0.62rem', letterSpacing: '0.2em',
                                            textTransform: 'uppercase', color: 'var(--muted)',
                                            marginBottom: '0.2rem',
                                            fontFamily: "'DM Sans', sans-serif",
                                        }}>{label}</div>
                                        <div style={{
                                            fontFamily: "'Cormorant Garamond', serif",
                                            fontSize: '1rem', color: 'var(--ivory)',
                                        }}>{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="section-label" style={{ marginBottom: '1.5rem' }}>Find Me On</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(201,168,76,0.1)' }}>
                                {socials.map(({ label, handle, href, icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            display: 'flex', alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '1rem 1.5rem',
                                            background: 'var(--charcoal)',
                                            textDecoration: 'none',
                                            transition: 'background 0.25s ease',
                                            group: true,
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = 'var(--charcoal-mid)'
                                            e.currentTarget.querySelector('.social-arrow').style.transform = 'translate(3px, -3px)'
                                            e.currentTarget.querySelector('.social-icon').style.color = 'var(--gold)'
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'var(--charcoal)'
                                            e.currentTarget.querySelector('.social-arrow').style.transform = 'translate(0, 0)'
                                            e.currentTarget.querySelector('.social-icon').style.color = 'var(--muted)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <span className="social-icon" style={{ color: 'var(--muted)', transition: 'color 0.25s' }}>
                                                {icon}
                                            </span>
                                            <div>
                                                <div style={{
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: '0.8rem', color: 'var(--ivory)',
                                                    marginBottom: '0.15rem',
                                                }}>{label}</div>
                                                <div style={{
                                                    fontSize: '0.68rem', color: 'var(--muted)',
                                                    letterSpacing: '0.05em',
                                                }}>{handle}</div>
                                            </div>
                                        </div>
                                        <span className="social-arrow" style={{
                                            color: 'var(--muted)', fontSize: '0.9rem',
                                            transition: 'transform 0.25s ease',
                                        }}>↗</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Direct email CTA */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=jjbaah068@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'block',
                                padding: '2rem',
                                border: '1px solid rgba(201,168,76,0.15)',
                                textDecoration: 'none',
                                transition: 'border-color 0.3s, background 0.3s',
                                textAlign: 'center',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'var(--gold)'
                                e.currentTarget.style.background = 'rgba(201,168,76,0.03)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                                e.currentTarget.style.background = 'transparent'
                            }}
                        >
                            <p style={{
                                fontSize: '0.65rem', letterSpacing: '0.2em',
                                textTransform: 'uppercase', color: 'var(--gold)',
                                marginBottom: '0.5rem',
                                fontFamily: "'DM Sans', sans-serif",
                            }}>Prefer email?</p>
                            <p style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: '1.1rem', color: 'var(--ivory)',
                            }}>jjbaah068@gmail.com</p>
                        </a>

                    </div>
                </div>
            </div>

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .name-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    )
}

function FormField({ label, name, type = 'text', value, onChange, placeholder, required }) {
    return (
        <div>
            <label style={{
                display: 'block',
                fontSize: '0.65rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--gold)',
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: '0.6rem',
            }}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(201,168,76,0.2)',
                    color: 'var(--ivory)',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    padding: '0.75rem 0',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                }}
                onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderBottomColor = 'rgba(201,168,76,0.2)'}
            />
        </div>
    )
}