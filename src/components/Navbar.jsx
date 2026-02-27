import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

const NAV_LINKS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'research', label: 'research' },
  { id: 'skills', label: 'skills' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(241,250,238,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #A8DADC' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-mono text-sm font-bold transition-colors duration-200"
          style={{ color: 'var(--green)' }}
        >
          <span style={{ color: 'var(--muted)' }}>&lt;</span>
          JG
          <span style={{ color: 'var(--muted)' }}>/&gt;</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              <span style={{ color: 'var(--green)', opacity: 0.6 }}>./</span>
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs font-medium transition-all duration-200"
          style={{
            border: '1px solid var(--green)',
            color: 'var(--green)',
            background: 'rgba(69,123,157,0.06)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(69,123,157,0.14)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(69,123,157,0.06)'
          }}
        >
          $ connect
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 w-6 rounded transition-all duration-300"
              style={{
                background: 'var(--green)',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translateY(8px)'
                  : i === 2 ? 'rotate(-45deg) translateY(-8px)'
                  : 'scaleX(0)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(241,250,238,0.97)', borderTop: '1px solid #A8DADC' }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left nav-link py-2"
            >
              <span style={{ color: 'var(--green)', opacity: 0.6 }}>./</span>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
