export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Frontend Development',
      description:
        'Building fast, responsive, and accessible web applications using React, Tailwind CSS, and modern JavaScript. Every line of code written with performance and maintainability in mind.',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'TanStack'],
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'UI / Web Design',
      description:
        'Designing visually engaging, user-centred interfaces that balance aesthetics with usability. From wireframes to high-fidelity designs that translate perfectly into code.',
      tags: ['UI Design', 'Figma', 'Design Systems', 'Prototyping'],
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'eCommerce Development',
      description:
        'Crafting seamless online shopping experiences — from product listings and cart flows to checkout and payment integration. Built for conversion and optimised for all devices.',
      tags: ['React', 'Paystack', 'Cart Systems', 'Responsive'],
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'SaaS Dashboard Interfaces',
      description:
        'Building complex admin and agent dashboards with real-time data, WebSocket integration, role-based views, and polished component systems for SaaS products.',
      tags: ['Dashboards', 'WebSockets', 'TanStack Query', 'Charts'],
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'API & Backend Integration',
      description:
        'Connecting frontends to REST APIs, handling authentication flows, managing state with TanStack Query, and building reliable data-fetching layers that just work.',
      tags: ['REST APIs', 'Auth Flows', 'TanStack Query', 'Axios'],
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Website Optimisation',
      description:
        'Auditing and improving existing websites for performance, accessibility, and responsiveness. Turning slow or broken interfaces into polished, production-ready products.',
      tags: ['Performance', 'Accessibility', 'Responsive', 'Refactoring'],
      icon: (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" style={{
      padding: '8rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Ambient glow left */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>What I Offer</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300, color: 'var(--ivory)',
              lineHeight: 1.15, maxWidth: '500px',
            }}>
              Services built for <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>real results.</span>
            </h2>
            <p style={{
              color: 'var(--muted)', fontSize: '0.875rem',
              lineHeight: '1.8', maxWidth: '320px',
            }}>
              From initial concept to final deployment — I cover the full frontend spectrum with precision and care.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.1)',
        }} className="services-grid">
          {services.map(({ number, title, description, tags, icon }) => (
            <ServiceCard
              key={number}
              number={number}
              title={title}
              description={description}
              tags={tags}
              icon={icon}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop: '5rem',
          padding: '3rem',
          border: '1px solid rgba(201,168,76,0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.75rem', fontWeight: 300,
              color: 'var(--ivory)', marginBottom: '0.5rem',
            }}>
              Have a project in mind?
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
              Let's talk about how I can help bring your idea to life.
            </p>
          </div>
          <a href="/contact" className="btn-gold">Start a Conversation</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ number, title, description, tags, icon }) {
  return (
    <div
      className="service-card"
      style={{
        padding: '2.5rem 2rem',
        background: 'var(--charcoal)',
        position: 'relative',
        transition: 'background 0.3s ease',
        cursor: 'default',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--charcoal-mid)'
        e.currentTarget.querySelector('.card-number').style.opacity = '0.06'
        e.currentTarget.querySelector('.card-icon').style.color = 'var(--gold)'
        e.currentTarget.querySelector('.card-line').style.width = '100%'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--charcoal)'
        e.currentTarget.querySelector('.card-number').style.opacity = '0.03'
        e.currentTarget.querySelector('.card-icon').style.color = 'var(--muted)'
        e.currentTarget.querySelector('.card-line').style.width = '0%'
      }}
    >
      {/* Big background number */}
      <div className="card-number" style={{
        position: 'absolute', top: '1rem', right: '1.5rem',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '6rem', fontWeight: 600,
        color: 'var(--gold)', opacity: '0.03',
        lineHeight: 1, transition: 'opacity 0.3s ease',
        userSelect: 'none', pointerEvents: 'none',
      }}>{number}</div>

      {/* Top line animation */}
      <div style={{ position: 'absolute', top: 0, left: 0, height: '2px', width: '100%', background: 'transparent' }}>
        <div className="card-line" style={{
          height: '100%', width: '0%',
          background: 'var(--gold)',
          transition: 'width 0.4s ease',
        }} />
      </div>

      {/* Icon */}
      <div className="card-icon" style={{
        color: 'var(--muted)',
        marginBottom: '1.5rem',
        transition: 'color 0.3s ease',
      }}>{icon}</div>

      {/* Number label */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.65rem', letterSpacing: '0.25em',
        textTransform: 'uppercase', color: 'var(--gold)',
        marginBottom: '0.75rem',
      }}>{number}</p>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.4rem', fontWeight: 300,
        color: 'var(--ivory)', marginBottom: '1rem',
        lineHeight: 1.3,
      }}>{title}</h3>

      {/* Description */}
      <p style={{
        color: 'var(--muted)', fontSize: '0.85rem',
        lineHeight: '1.8', marginBottom: '1.75rem',
      }}>{description}</p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            padding: '0.3rem 0.75rem',
            border: '1px solid rgba(201,168,76,0.2)',
            color: 'var(--muted)',
            fontSize: '0.65rem', letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}