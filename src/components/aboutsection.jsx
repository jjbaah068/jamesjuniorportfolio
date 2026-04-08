import { useState, useEffect } from 'react'
import profileimg from '../assets/images/image7.jpg'
import image from '../assets/images/image3.jpeg'
import manutd from '../assets/images/images.png'
import cv from "../assets/James Junior Baah-F&B_.pdf"

// Spotify tracks — replace src with real album cover images you save in assets
const tracks = [
    { title: 'Pop Star', artist: 'Black Sherif', id: '2LO82nA2HMBbwqs0KNUeMx' },
    { title: 'Rich Flex', artist: 'Drake & 21 Savage', id: '1bDbXMyjaUIooNwFE9wn0N' },
    { title: 'Blinding Lights', artist: 'The Weeknd', id: '0VjIjW4GlUZAMYd2vXMi3b' },
    { title: 'Raindance', artist: 'Dave ft Tems', id: '3oTuTpF1F3A7rEC6RKsMRz' },
    { title: 'fukumean', artist: 'Gunna', id: '4rXLjWdF2ZZpXCVTfWcshS' },
]
export default function AboutSection() {
    const [trackIndex, setTrackIndex] = useState(0)

    const skills = [
        { name: 'React', level: 100 },
        { name: 'HTML & CSS', level: 100 },
        { name: 'JavaScript', level: 100 },
        { name: 'Tailwind CSS', level: 100 },
        { name: 'UI / Web Design', level: 99 },
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

            {/* Main two-column grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '5rem',
                alignItems: 'start',
            }} className="about-grid">

                {/* Left — image + facts */}
                <div>
                    <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
                        <div style={{
                            position: 'absolute', top: '16px', left: '16px',
                            width: '100%', height: '100%',
                            border: '1px solid var(--gold)', zIndex: 0,
                        }} />
                        <img
                            src={image}
                            alt="James Junior Baah"
                            style={{
                                width: '100%', aspectRatio: '4/5',
                                objectFit: 'cover', objectPosition: 'top',
                                display: 'block', position: 'relative', zIndex: 1,
                                filter: 'grayscale(20%)',
                            }}
                        />
                        <div style={{
                            position: 'absolute', bottom: '1.5rem', right: '-1.5rem',
                            background: 'var(--gold)', color: 'var(--charcoal)',
                            padding: '0.6rem 1.2rem',
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: '0.7rem', letterSpacing: '0.2em',
                            textTransform: 'uppercase', fontWeight: 500, zIndex: 2,
                        }}>Frontend Dev</div>
                    </div>

                    {/* Quick facts */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr',
                        gap: '1px', background: 'rgba(201,168,76,0.15)',
                        border: '1px solid rgba(201,168,76,0.15)',
                    }}>
                        {facts.map(({ label, value }) => (
                            <div key={label} style={{ padding: '1rem 1.25rem', background: 'var(--charcoal)' }}>
                                <div style={{
                                    fontSize: '0.65rem', letterSpacing: '0.2em',
                                    textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem',
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
                    <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                        I'm <span style={{ color: 'var(--ivory)' }}>James Junior Baah</span>, a frontend developer
                        with a keen eye for design and a love for building seamless digital experiences.
                        I specialize in turning ideas into polished, responsive interfaces.
                    </p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.9', marginBottom: '3rem' }}>
                        Currently working at <span style={{ color: 'var(--ivory)' }}>RedPear Communications</span> and
                        trained at <span style={{ color: 'var(--ivory)' }}>Mest Africa</span>, Accra.
                        I'm always pushing the boundaries of what frontend technology can do.
                    </p>

                    <p className="section-label" style={{ marginBottom: '1.5rem' }}>Core Skills</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {skills.map(({ name, level }) => (
                            <div key={name}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'var(--ivory-dim)' }}>{name}</span>
                                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.9rem', color: 'var(--gold)' }}>{level}%</span>
                                </div>
                                <div style={{ height: '2px', background: 'rgba(201,168,76,0.12)', position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0,
                                        height: '100%', width: `${level}%`,
                                        background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                                        transition: 'width 1.2s ease',
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href={cv} 
                        download= "James Junior Baah CV.pdf"
                        className="btn-gold">Download CV</a>
                        <a href="/contact" className="btn-ghost">Hire Me</a>
                    </div>
                </div>
            </div>

            {/* ── Beyond The Code section ── */}
            <div style={{ marginTop: '6rem' }}>
                <p className="section-label" style={{ marginBottom: '1rem' }}>Beyond The Code</p>
                <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    fontWeight: 300, color: 'var(--ivory)',
                    marginBottom: '3rem', lineHeight: 1.2,
                }}>
                    A few things that make me,{' '}
                    <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>me.</span>
                </h3>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1px',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.1)',
                }} className="beyond-grid">

                    {/* ── Man United Card ── */}
                    <div style={{
                        background: 'var(--charcoal)',
                        padding: '2.5rem',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Big red background glow */}
                        <div style={{
                            position: 'absolute', top: '-40px', right: '-40px',
                            width: '200px', height: '200px',
                            background: 'radial-gradient(circle, rgba(200,16,46,0.08) 0%, transparent 70%)',
                            pointerEvents: 'none',
                        }} />

                        <p style={{
                            fontSize: '0.65rem', letterSpacing: '0.25em',
                            textTransform: 'uppercase', color: 'var(--gold)',
                            fontFamily: "'DM Sans', sans-serif", marginBottom: '1.5rem',
                        }}>Off The Pitch</p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            {/* Man United Emblem SVG */}
                            <div style={{
                                width: '72px', height: '72px', flexShrink: 0,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '1px solid rgba(200,16,46,0.3)',
                                background: 'rgba(200,16,46,0.05)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <img
                                    src={manutd}
                                    alt="Manchester United"
                                    style={{ width: '58px', height: '58px', objectFit: 'contain' }}
                                />
                            </div>

                            <div>
                                <h4 style={{
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontSize: '1.4rem', fontWeight: 300,
                                    color: 'var(--ivory)', marginBottom: '0.25rem',
                                }}>Manchester United</h4>
                                <p style={{
                                    fontSize: '0.72rem', color: '#C8102E',
                                    letterSpacing: '0.15em', textTransform: 'uppercase',
                                    fontFamily: "'DM Sans', sans-serif",
                                }}>Red Devils · Die Hard Fan</p>
                            </div>
                        </div>

                        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: '1.8' }}>
                            Football is my escape from the screen. Win, lose or draw —
                            <span style={{ color: 'var(--ivory)' }}> the Red Devils</span> have my heart every matchday.
                        </p>

                        {/* Red stripe bottom */}
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0,
                            height: '3px',
                            background: 'linear-gradient(90deg, #C8102E, transparent)',
                        }} />
                    </div>

                    
                    {/* ── Spotify Card ── */}
                    <div style={{
                        background: 'var(--charcoal)',
                        padding: '2.5rem',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Green glow */}
                        <div style={{
                            position: 'absolute', top: '-40px', right: '-40px',
                            width: '200px', height: '200px',
                            background: 'radial-gradient(circle, rgba(30,215,96,0.06) 0%, transparent 70%)',
                            pointerEvents: 'none',
                        }} />

                        <div style={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'flex-start', marginBottom: '1.5rem',
                        }}>
                            <p style={{
                                fontSize: '0.65rem', letterSpacing: '0.25em',
                                textTransform: 'uppercase', color: 'var(--gold)',
                                fontFamily: "'DM Sans', sans-serif",
                            }}>Currently Playing</p>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1ED760">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                            </svg>
                        </div>

                        {/* Track selector pills */}
                        <div style={{
                            display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem',
                        }}>
                            {tracks.map((track, i) => (
                                <button key={i} onClick={() => setTrackIndex(i)} style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    border: i === trackIndex ? '1px solid #1ED760' : '1px solid rgba(255,255,255,0.1)',
                                    background: i === trackIndex ? 'rgba(30,215,96,0.1)' : 'transparent',
                                    color: i === trackIndex ? '#1ED760' : 'var(--muted)',
                                    fontSize: '0.65rem', letterSpacing: '0.05em',
                                    fontFamily: "'DM Sans', sans-serif",
                                    cursor: 'pointer', transition: 'all 0.2s ease',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {track.title}
                                </button>
                            ))}
                        </div>

                        {/* Real Spotify embed */}
                        <iframe
                            key={tracks[trackIndex].id}
                            src={`https://open.spotify.com/embed/track/${tracks[trackIndex].id}?utm_source=generator&theme=0`}
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            style={{
                                border: 'none',
                                borderRadius: '8px',
                            }}
                        />

                        {/* Green stripe */}
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, right: 0,
                            height: '3px',
                            background: 'linear-gradient(90deg, #1ED760, transparent)',
                        }} />
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .beyond-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    )
}