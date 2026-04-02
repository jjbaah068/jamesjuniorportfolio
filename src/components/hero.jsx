import { useEffect, useState } from 'react'

const roles = ['Software Engineer','Frontend Engineer', 'React Specialist', 'AI Trainer', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '0 2rem',
    }}>
      {/* Background grid texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}/>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        zIndex: 0,
      }}/>

      {/* Bottom line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '2rem', right: '2rem',
        height: '1px', background: 'rgba(201,168,76,0.15)',
      }}/>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1, paddingTop: '6rem' }}>
        <p className="section-label animate-fade-up delay-1">James Junior Baah</p>

        <h1 className="animate-fade-up delay-2" style={{
          fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          color: 'var(--ivory)',
          marginTop: '1rem',
          marginBottom: '0.5rem',
          fontWeight: 300,
        }}>
          Crafting Digital<br/>
          <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Experiences.</span>
        </h1>

        <div className="animate-fade-up delay-3" style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginTop: '1.5rem', marginBottom: '2.5rem',
        }}>
          <div style={{ width: '30px', height: '1px', background: 'var(--gold)' }}/>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem', color: 'var(--muted)',
            transition: 'opacity 0.4s ease',
            opacity: visible ? 1 : 0,
          }}>
            {roles[roleIndex]}
          </span>
        </div>

        <p className="animate-fade-up delay-3" style={{
          maxWidth: '480px', color: 'var(--muted)',
          fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '3rem',
        }}>
          Frontend developer passionate about building clean, interactive interfaces.
          Based in Accra, Ghana — working globally.
        </p>

        <div className="animate-fade-up delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/projects" className="btn-gold">View My Work</a>
          <a href="/contact" className="btn-ghost">Get In Touch</a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-4" style={{
          display: 'flex', gap: '3rem', marginTop: '5rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          flexWrap: 'wrap',
        }}>
          {[['9+', 'Projects Completed'], ['2+', 'Years Experience'], ['5+', 'Technologies']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: 'var(--gold)', fontWeight: 300 }}>{num}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', right: '2rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--muted)', writingMode: 'vertical-rl' }}>Scroll</span>
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }}/>
      </div>
    </section>
  )
}