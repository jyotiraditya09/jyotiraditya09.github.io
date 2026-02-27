import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

function useTypewriter(texts, speed = 90) {
  const [displayText, setDisplayText] = useState('')
  const [textIdx, setTextIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const current = texts[textIdx]
    const delay = deleting ? speed * 0.5 : speed

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayText.length + 1)
        setDisplayText(next)
        if (next === current) {
          setPaused(true)
          setTimeout(() => { setPaused(false); setDeleting(true) }, 2000)
        }
      } else {
        const next = current.slice(0, displayText.length - 1)
        setDisplayText(next)
        if (next === '') {
          setDeleting(false)
          setTextIdx((i) => (i + 1) % texts.length)
        }
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [displayText, deleting, textIdx, texts, speed, paused])

  return displayText
}


export default function Hero() {
  const role = useTypewriter(personal.roles, 80)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,255,136,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex items-center min-h-[80vh]">
          {/* Left column */}
          <div style={{ animation: 'fadeInUp 0.8s ease 0.2s both' }}>
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-mono text-xs"
              style={{
                background: 'rgba(69,123,157,0.08)',
                border: '1px solid rgba(69,123,157,0.3)',
                color: 'var(--green)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'var(--green)', animation: 'pulseGlow 2s infinite' }}
              />
              Open to opportunities
            </div>

            {/* Name with glitch */}
            <h1
              className="font-sans font-black mb-4 leading-none"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              <div className="glitch-container">
                <span className="relative z-10" style={{ color: 'var(--text)' }}>
                  Jyotiraditya
                </span>
                <span className="glitch-layer1">Jyotiraditya</span>
                <span className="glitch-layer2">Jyotiraditya</span>
              </div>
              <br />
              <span className="gradient-text">Gupta</span>
            </h1>

            {/* Animated role */}
            <div className="flex items-center gap-2 mb-6" style={{ height: '2rem' }}>
              <span className="font-mono text-lg" style={{ color: 'var(--cyan)', opacity: 0.7 }}>
                //
              </span>
              <span
                className="font-mono text-lg font-medium"
                style={{ color: 'var(--cyan)' }}
              >
                {role}
                <span className="animate-blink" style={{ color: 'var(--green)' }}>
                  ▋
                </span>
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-base mb-8 max-w-md leading-relaxed"
              style={{ color: 'var(--muted)' }}
            >
              {personal.tagline}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mb-10">
              {personal.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center px-4 py-3 rounded-lg"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: `1px solid ${stat.color}40`,
                    minWidth: '90px',
                  }}
                >
                  <span
                    className="font-mono text-base font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                    <span className="text-xs" style={{ color: 'var(--muted)', fontWeight: 400 }}>
                      {stat.suffix}
                    </span>
                  </span>
                  <span className="font-mono text-xs mt-1" style={{ color: 'var(--muted)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-200"
                style={{
                  background: 'var(--green)',
                  color: '#F1FAEE',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 24px rgba(69,123,157,0.4)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                <GithubIcon />
                ./view-projects
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-200"
                style={{
                  border: '1px solid rgba(168,218,220,0.6)',
                  color: 'var(--green)',
                  background: 'rgba(168,218,220,0.12)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(168,218,220,0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(168,218,220,0.12)')}
              >
                <LinkedinIcon />
                ./connect
              </a>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          className="flex flex-col items-center gap-2 pb-8"
          style={{ color: 'var(--muted)', animation: 'float 2.5s ease-in-out infinite' }}
        >
          <span className="font-mono text-xs">scroll</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
