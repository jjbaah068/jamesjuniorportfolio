import cv from "../assets/James Junior Baah-F&B_.pdf"


const experiences = [
  {
    role: 'Frontend Developer',
    company: 'RedPear Communications',
    location: 'Ghana (Remote)',
    period: 'September 2025 — Present',
    type: 'Full-time',
    typeColor: '#C9A84C',
    typeBg: 'rgba(201,168,76,0.08)',
    points: [
      'Building and maintaining Pear Support — a customer support SaaS platform',
      'Developed agent & admin dashboards with real-time WebSocket data',
      'Integrated Paystack payment and subscription flows',
      'Built notification systems, session transfer flows, and multi-platform chat support',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'MelAnu SkinCare',
    location: 'Tamale, Ghana (Remote)',
    period: 'August 2025',
    type: 'Internship',
    typeColor: '#6BCB8B',
    typeBg: 'rgba(107,203,139,0.08)',
    points: [
      'Built a fully functional eCommerce platform from scratch for MelAnu SkinCare',
      'Implemented product listings, cart, and checkout flows',
      'Ensured full responsiveness across all devices',
    ],
  },
  {
    role: 'Frontend Developer (Trainee)',
    company: 'Mest Africa',
    location: 'Accra, Ghana',
    period: 'May 2025 — Present',
    type: 'Apprenticeship',
    typeColor: '#7EB8F7',
    typeBg: 'rgba(126,184,247,0.08)',
    points: [
      'Intensive frontend training program at one of Africa\'s top tech hubs',
      'Worked on collaborative real-world projects with cross-functional teams',
      'Deepened expertise in React, TanStack, and modern frontend architecture',
    ],
  },
  {
    role: 'Junior Insurance Underwriter / Analyst',
    company: 'Activa International Insurance',
    location: 'Accra, Ghana',
    period: 'November 2022 — February 2024',
    type: 'Full-time',
    typeColor: '#C9A84C',
    typeBg: 'rgba(201,168,76,0.08)',
    points: [
      'Assessed and underwrote insurance policies across motor and travel lines',
      'Conducted risk analysis and prepared detailed reports for senior underwriters',
      'Managed client portfolios and maintained accurate policy documentation',
    ],
  },
]

const education = [
  {
    degree: 'BA Economics (Major)',
    school: 'University of Ghana',
    period: '2018 — 2022',
    detail: 'Graduated with strong foundations in statistics and economics.',
  },
  {
    degree: 'Frontend Development',
    school: 'Mest Africa',
    period: '2025',
    detail: 'Practical, project-based training in modern frontend development and product design.',
  },
  {
    degree: 'Master of Science in Software Engineering',
    school: 'Quantic School of Business and Technology',
    period: '2026 — Present',
    detail: 'Full-time, flexible program focused on advanced software engineering principles and leadership skills.',
  },
]

const techStack = [
  'React', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'TanStack Query', 'TanStack Router',
  'React Router', 'WebSockets', 'REST APIs',
  'Paystack', 'Recharts', 'Figma', 'Git & GitHub',
]

export default function ResumeSection() {
  return (
    <section id="resume" style={{
      padding: '8rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '5%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <p className="section-label" style={{ marginBottom: '1rem' }}>My Journey</p>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem',
          marginBottom: '5rem',
        }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300, color: 'var(--ivory)',
            lineHeight: 1.15, maxWidth: '500px',
          }}>
            Experience &{' '}
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Education.</span>
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={cv} 
            download= "James Junior Baah CV.pdf"
            className="btn-gold">Download CV</a>
            <a href="/contact" className="btn-ghost">Hire Me</a>
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '5rem',
          alignItems: 'start',
        }} className="resume-grid">

          {/* Left — Experience timeline */}
          <div>
            <p className="section-label" style={{ marginBottom: '2.5rem' }}>Work Experience</p>

            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                top: 0, left: '11px', bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, var(--gold), transparent)',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {experiences.map((exp, i) => (
                  <ExperienceItem key={i} {...exp} />
                ))}
              </div>
            </div>
          </div>

          {/* Right — Education + Tech stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

            {/* Education */}
            <div>
              <p className="section-label" style={{ marginBottom: '2rem' }}>Education</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(201,168,76,0.1)' }}>
                {education.map((edu, i) => (
                  <div key={i} style={{
                    padding: '1.75rem',
                    background: 'var(--charcoal)',
                    borderLeft: '2px solid var(--gold)',
                  }}>
                    <div style={{
                      fontSize: '0.65rem', letterSpacing: '0.2em',
                      textTransform: 'uppercase', color: 'var(--gold)',
                      marginBottom: '0.5rem',
                    }}>{edu.period}</div>
                    <h4 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.2rem', fontWeight: 300,
                      color: 'var(--ivory)', marginBottom: '0.25rem',
                    }}>{edu.degree}</h4>
                    <p style={{
                      fontSize: '0.8rem', color: 'var(--gold)',
                      marginBottom: '0.75rem', opacity: 0.8,
                    }}>{edu.school}</p>
                    <p style={{
                      fontSize: '0.82rem', color: 'var(--muted)',
                      lineHeight: '1.7',
                    }}>{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="section-label" style={{ marginBottom: '1.75rem' }}>Tech Stack</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {techStack.map(tech => (
                  <span key={tech} style={{
                    padding: '0.4rem 0.9rem',
                    border: '1px solid rgba(201,168,76,0.2)',
                    color: 'var(--muted)',
                    fontSize: '0.7rem', letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: "'DM Sans', sans-serif",
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--gold)'
                      e.currentTarget.style.color = 'var(--gold)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                      e.currentTarget.style.color = 'var(--muted)'
                    }}
                  >{tech}</span>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div style={{
              padding: '2rem',
              border: '1px solid rgba(201,168,76,0.15)',
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1px', background: 'rgba(201,168,76,0.1)',
            }}>
              {[
                ['9+', 'Projects'],
                ['2+', 'Years Exp.'],
                ['3', 'Companies'],
                ['14+', 'Technologies'],
              ].map(([num, label]) => (
                <div key={label} style={{
                  padding: '1.25rem', background: 'var(--charcoal)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2rem', color: 'var(--gold)', fontWeight: 300,
                  }}>{num}</div>
                  <div style={{
                    fontSize: '0.65rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: 'var(--muted)',
                    marginTop: '0.25rem',
                  }}>{label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .resume-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}

function ExperienceItem({ role, company, location, period, type, typeColor, typeBg, points }) {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* Dot */}
      <div style={{ flexShrink: 0, paddingTop: '0.35rem' }}>
        <div style={{
          width: '22px', height: '22px',
          border: '1px solid var(--gold)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--charcoal)',
        }}>
          <div style={{
            width: '7px', height: '7px',
            borderRadius: '50%',
            background: 'var(--gold)',
          }} />
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem',
          marginBottom: '0.5rem',
        }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.35rem', fontWeight: 300,
            color: 'var(--ivory)', lineHeight: 1.2,
          }}>{role}</h3>
          <span style={{
            padding: '0.25rem 0.75rem',
            background: typeBg,
            color: typeColor,
            fontSize: '0.65rem', letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            border: `1px solid ${typeColor}22`,
            whiteSpace: 'nowrap',
          }}>{type}</span>
        </div>

        <p style={{
          fontSize: '0.82rem', color: 'var(--gold)',
          opacity: 0.85, marginBottom: '0.25rem',
        }}>{company} · {location}</p>

        <p style={{
          fontSize: '0.7rem', color: 'var(--muted)',
          letterSpacing: '0.1em', marginBottom: '1.25rem',
        }}>{period}</p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {points.map((point, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{
                color: 'var(--gold)', fontSize: '0.6rem',
                marginTop: '0.35rem', flexShrink: 0,
              }}>◆</span>
              <span style={{
                fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.7',
              }}>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}