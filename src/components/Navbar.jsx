import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    // Highlight the last section whose top has passed 40% of the viewport height.
    const update = () => {
      setScrolled(window.scrollY > 24)
      const line = window.innerHeight * 0.4
      let current = ''
      LINKS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      })
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      setActive(atBottom ? LINKS[LINKS.length - 1].id : current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-line bg-canvas/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="page flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink">
          {personal.name}
        </a>
        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 text-sm md:flex">
            {LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`transition-colors ${active === id ? 'text-ink' : 'text-muted hover:text-ink'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personal.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  )
}
