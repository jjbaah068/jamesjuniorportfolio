import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'MelAnu SkinCare',
    category: 'eCommerce',
    description:
      'A fully functional fusion eCommerce platform built from scratch for MelAnu Skincare — product listings, cart flows, and a seamless checkout experience.',
    tags: ['React', 'Tailwind CSS', 'eCommerce'],
    github: 'https://github.com/MelAnuSkin/melanu',
    live: 'https://melanuskin.netlify.app/',
    featured: true,
    number: '01',
  },
  {
    id: 2,
    title: 'SportsConnect',
    category: 'Web Application',
    description:
      'A platform connecting student-athletes with university scouts and recruiters. Features real-time messaging via Socket.IO and a Node.js backend.',
    tags: ['React', 'Node.js', 'Socket.IO'],
    github: 'https://github.com/sportsconnects/sportsconnect',
    live: 'https://sportsconnectz.netlify.app/',
    featured: true,
    number: '02',
  },
  {
    id: 3,
    title: 'BuyVersity',
    category: 'eCommerce',
    description:
      'An eCommerce advertising platform specifically made for university students to buy and sell within their campus community.',
    tags: ['React', 'Tailwind CSS'],
    github: 'https://github.com/TopTier5/buyversity',
    live: 'https://buyversityc.netlify.app/',
    featured: false,
    number: '03',
  },
  {
    id: 4,
    title: 'MoVable',
    category: 'Web Application',
    description:
      'A ride-hailing app designed specifically for persons with disabilities in Ghana, focusing on accessibility and ease of use.',
    tags: ['React', 'Tailwind CSS'],
    github: 'https://github.com/TopTier5/movable',
    live: 'https://movablec5.netlify.app/',
    featured: false,
    number: '04',
  },
  {
    id: 5,
    title: 'Bookie App',
    category: 'Web Application',
    description:
      'A responsive and fully integrated Library Management Web App for tracking, borrowing, and managing books.',
    tags: ['React', 'Tailwind CSS'],
    github: 'https://github.com/TopTier5/Bookie-App',
    live: 'https://bookieappc.netlify.app/',
    featured: false,
    number: '05',
  },
  {
    id: 6,
    title: 'Zurich Portfolio Project',
    category: 'Portfolio',
    description:
      'A fully responsive and functional portfolio project showcasing clean design and smooth interactions.',
    tags: ['HTML', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/jjbaah068/zurichprofile',
    live: 'https://zurichprofile.vercel.app/',
    featured: false,
    number: '06',
  },
  {
    id: 7,
    title: 'Cisterns of His Glory',
    category: 'Landing Page',
    description:
      'A landing page built using only HTML and CSS for a charity foundation. Clean layout with a focus on storytelling.',
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/jjbaah068/cisternsofhisglorym',
    live: 'https://mydemotestrun.vercel.app/',
    featured: false,
    number: '07',
  },
  {
    id: 8,
    title: 'Authentication System',
    category: 'Mini Project',
    description:
      'A simple but clean user authentication system built using HTML and JavaScript with form validation and session handling.',
    tags: ['HTML', 'JavaScript'],
    github: 'https://github.com/jjbaah068/personalportfolio',
    live: 'https://authentication-eight-tau.vercel.app/',
    featured: false,
    number: '08',
  },
  {
    id: 9,
    title: 'Landing Page',
    category: 'Landing Page',
    description:
      'A simple landing page built using only HTML and CSS.',
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/jjbaah068/landing_page',
    live: 'https://landing-page-olive-nine-77.vercel.app/',
    featured: false,
    number: '09',
  },
  {
    id: 10,
    title: 'Emmanuella Portfolio Project',
    category: 'Portfolio',
    description:
      'A detailed portfolio project built using only HTML and Tailwind CSS.',
    tags: ['HTML', 'Tailwind CSS'],
    github: 'https://github.com/jjbaah068/emmanuella-portfolio',
    live: 'https://emmanuella-portfolio-snowy.vercel.app/',
    featured: false,
    number: '10',
  },
  {
    id: 11,
    title: 'Owuraku Arhin Portfolio Project',
    category: 'Portfolio',
    description:
      'A detailed portfolio project built using React and JavaScript.',
    tags: ['React', 'JavaScript'],
    github: 'https://github.com/jjbaah068/zurichportfolio',
    live: 'https://owurakuarhin.netlify.app/',
    featured: false,
    number: '11',
  },
]

const filters = ['All', 'SaaS Platform', 'eCommerce', 'Web Application', 'Landing Page', 'Portfolio', 'Mini Project']

export default function ProjectsSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="projects" style={{
      padding: '8rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <p className="section-label" style={{ marginBottom: '1rem' }}>My Work</p>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem',
          marginBottom: '3.5rem',
        }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300, color: 'var(--ivory)',
            lineHeight: 1.15,
          }}>
            Things I've{' '}
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>built.</span>
          </h2>
          <p style={{
            color: 'var(--muted)', fontSize: '0.875rem',
            lineHeight: '1.8', maxWidth: '300px',
          }}>
            A selection of projects ranging from SaaS platforms to eCommerce and beyond.
          </p>
        </div>

        {/* Filter bar */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
          marginBottom: '4rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(201,168,76,0.1)',
        }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: '0.4rem 1.1rem',
              background: active === f ? 'var(--gold)' : 'transparent',
              color: active === f ? 'var(--charcoal)' : 'var(--muted)',
              border: active === f ? '1px solid var(--gold)' : '1px solid rgba(201,168,76,0.2)',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.68rem', letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
              onMouseEnter={e => {
                if (active !== f) {
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.color = 'var(--gold)'
                }
              }}
              onMouseLeave={e => {
                if (active !== f) {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                  e.currentTarget.style.color = 'var(--muted)'
                }
              }}
            >{f}</button>
          ))}
        </div>

        {/* Featured projects — large cards */}
        {active === 'All' && (
          <div style={{ marginBottom: '2px' }}>
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>Featured</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(201,168,76,0.1)',
              marginBottom: '1px',
            }} className="featured-grid">
              {projects.filter(p => p.featured).map(p => (
                <FeaturedCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {/* All / filtered projects grid */}
        <div>
          {active === 'All' && (
            <p className="section-label" style={{ margin: '3rem 0 1.5rem' }}>All Projects</p>
          )}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.1)',
          }} className="projects-grid">
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop: '5rem',
          display: 'flex', justifyContent: 'center',
        }}>
          <a
            href="https://github.com/jjbaah068"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-grid  { grid-template-columns: 1fr !important; }
          .projects-grid  { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .projects-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style> 

    </section>  
  )
}

function FeaturedCard({ project }) {
  return (
    <div
      className="featured-card"
      style={{
        padding: '2.5rem 2rem',
        background: 'var(--charcoal)',
        position: 'relative', overflow: 'hidden',
        transition: 'background 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--charcoal-mid)'
        e.currentTarget.querySelector('.fc-line').style.width = '100%'
        e.currentTarget.querySelector('.fc-num').style.opacity = '0.06'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--charcoal)'
        e.currentTarget.querySelector('.fc-line').style.width = '0%'
        e.currentTarget.querySelector('.fc-num').style.opacity = '0.03'
      }}
    >
      {/* Top line */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'transparent' }}>
        <div className="fc-line" style={{ height: '100%', width: '0%', background: 'var(--gold)', transition: 'width 0.4s ease' }} />
      </div>

      {/* BG number */}
      <div className="fc-num" style={{
        position: 'absolute', bottom: '-1rem', right: '1rem',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '8rem', fontWeight: 600,
        color: 'var(--gold)', opacity: '0.03',
        lineHeight: 1, transition: 'opacity 0.3s ease',
        userSelect: 'none', pointerEvents: 'none',
      }}>{project.number}</div>

      {/* Featured badge */}
      <span style={{
        display: 'inline-block',
        padding: '0.2rem 0.6rem',
        background: 'rgba(201,168,76,0.1)',
        border: '1px solid rgba(201,168,76,0.25)',
        color: 'var(--gold)',
        fontSize: '0.6rem', letterSpacing: '0.2em',
        textTransform: 'uppercase',
        fontFamily: "'DM Sans', sans-serif",
        marginBottom: '1.5rem',
      }}>Featured</span>

      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.6rem', fontWeight: 300,
        color: 'var(--ivory)', marginBottom: '0.5rem',
        lineHeight: 1.2,
      }}>{project.title}</h3>

      <p style={{
        fontSize: '0.7rem', color: 'var(--gold)',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        marginBottom: '1.25rem', opacity: 0.8,
      }}>{project.category}</p>

      <p style={{
        color: 'var(--muted)', fontSize: '0.85rem',
        lineHeight: '1.8', marginBottom: '2rem',
      }}>{project.description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            padding: '0.25rem 0.65rem',
            border: '1px solid rgba(201,168,76,0.2)',
            color: 'var(--muted)', fontSize: '0.65rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
          }}>{tag}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href={project.live} target="_blank" rel="noreferrer" className="btn-gold"
          style={{ fontSize: '0.65rem', padding: '0.6rem 1.25rem' }}>
          Live Site ↗
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost"
          style={{ fontSize: '0.65rem', padding: '0.6rem 1.25rem' }}>
          GitHub ↗
        </a>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div
      style={{
        padding: '2rem 1.75rem',
        background: 'var(--charcoal)',
        position: 'relative', overflow: 'hidden',
        transition: 'background 0.3s ease',
        cursor: 'default',
        display: 'flex', flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--charcoal-mid)'
        e.currentTarget.querySelector('.pc-line').style.width = '100%'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--charcoal)'
        e.currentTarget.querySelector('.pc-line').style.width = '0%'
      }}
    >
      {/* Top line */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'transparent' }}>
        <div className="pc-line" style={{ height: '100%', width: '0%', background: 'var(--gold)', transition: 'width 0.35s ease' }} />
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', marginBottom: '1rem',
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '0.85rem', color: 'var(--gold)', opacity: 0.5,
        }}>{project.number}</span>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href={project.github} target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href={project.live} target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>

      <p style={{
        fontSize: '0.65rem', color: 'var(--gold)',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        marginBottom: '0.6rem', opacity: 0.75,
        fontFamily: "'DM Sans', sans-serif",
      }}>{project.category}</p>

      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.25rem', fontWeight: 300,
        color: 'var(--ivory)', marginBottom: '0.85rem',
        lineHeight: 1.3,
      }}>{project.title}</h3>

      <p style={{
        color: 'var(--muted)', fontSize: '0.82rem',
        lineHeight: '1.75', marginBottom: '1.5rem', flex: 1,
      }}>{project.description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            padding: '0.2rem 0.6rem',
            border: '1px solid rgba(201,168,76,0.15)',
            color: 'var(--muted)', fontSize: '0.62rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}