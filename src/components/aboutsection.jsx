import profileimg from '../assets/images/image7.jpg'







export default function AboutSection() {
  const skills = [
    { name: 'React', level: 99 },
    { name: 'HTML & CSS', level: 99 },
    { name: 'JavaScript', level: 99 },
    { name: 'Tailwind CSS', level: 99 },
    { name: 'UI / Web Design', level: 85 },
  ]

  const facts = [
    { label: 'Location', value: 'Accra, Ghana' },
    { label: 'Availability', value: 'Open to Work' },
    { label: 'Experience', value: '2+ Years' },
    { label: 'Focus', value: 'Frontend Dev' },
  ]

  return (
    <section id="about" style={{
      padding: '8rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto',
      position: 'relative',
    }}>
      {/* Section label */}
      <p className="section-label" style={{ marginBottom: '1rem' }}>Who I Am</p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: 300,
        color: 'var(--ivory)',
        marginBottom: '4rem',
        maxWidth: '500px',
        lineHeight: 1.2,
      }}>
        Passionate about <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>great design</span> & clean code.
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'start',
      }}
        className="about-grid"
      >
        {/* Left — image + facts */}
        <div>
          {/* Image */}
          <div style={{
            position: 'relative',
            marginBottom: '2.5rem',
          }}>
            {/* Gold border offset */}
            <div style={{
              position: 'absolute',
              top: '16px', left: '16px',
              width: '100%', height: '100%',
              border: '1px solid var(--gold)',
              zIndex: 0,
            }}/>
            <img
              src={profileimg}
              alt="James Junior Baah"
              style={{
                width: '100%',
                aspectRatio: '4/5',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
                position: 'relative',
                zIndex: 1,
                filter: 'grayscale(20%)',
              }}
            />
            {/* Gold tag */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem', right: '-1.5rem',
              background: 'var(--gold)',
              color: 'var(--charcoal)',
              padding: '0.6rem 1.2rem',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 500,
              zIndex: 2,
            }}>
              Frontend Dev
            </div>
          </div>

          {/* Quick facts grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'rgba(201,168,76,0.15)',
            border: '1px solid rgba(201,168,76,0.15)',
          }}>
            {facts.map(({ label, value }) => (
              <div key={label} style={{
                padding: '1rem 1.25rem',
                background: 'var(--charcoal)',
              }}>
                <div style={{
                  fontSize: '0.65rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                  marginBottom: '0.3rem',
                }}>{label}</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.1rem', color: 'var(--ivory)',
                }}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — bio + skills */}
        <div>
          <p style={{
            color: 'var(--muted)', fontSize: '0.95rem',
            lineHeight: '1.9', marginBottom: '1.5rem',
          }}>
            I'm <span style={{ color: 'var(--ivory)' }}>James Junior Baah</span>, a frontend developer
            with a keen eye for design and a love for building seamless digital experiences.
            I specialize in turning ideas into polished, responsive interfaces.
          </p>
          <p style={{
            color: 'var(--muted)', fontSize: '0.95rem',
            lineHeight: '1.9', marginBottom: '3rem',
          }}>
            Currently working at <span style={{ color: 'var(--ivory)' }}>RedPear Communications</span> and
            trained at <span style={{ color: 'var(--ivory)' }}>Mest Africa</span>, Accra.
            I'm always pushing the boundaries of what frontend technology can do.
          </p>

          {/* Skills */}
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>Core Skills</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {skills.map(({ name, level }) => (
              <div key={name}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  marginBottom: '0.4rem',
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8rem', color: 'var(--ivory-dim)',
                  }}>{name}</span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.9rem', color: 'var(--gold)',
                  }}>{level}%</span>
                </div>
                {/* Track */}
                <div style={{
                  height: '2px',
                  background: 'rgba(201,168,76,0.12)',
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0,
                    height: '100%', width: `${level}%`,
                    background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                    transition: 'width 1.2s ease',
                  }}/>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/James Junior Baah.WD_.pdf" download className="btn-gold">Download CV</a>
            <a href="/contact" className="btn-ghost">Hire Me</a>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}