import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative z-10 border-t py-10"
      style={{ borderColor: '#1a1a2e', background: 'rgba(9,9,15,0.9)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-mono text-sm font-bold" style={{ color: 'var(--green)' }}>
            <span style={{ color: 'var(--muted)' }}>&lt;</span>
            JG
            <span style={{ color: 'var(--muted)' }}>/&gt;</span>
          </div>

          {/* Center text */}
          <div className="font-mono text-xs text-center" style={{ color: 'var(--muted)' }}>
            <span>Designed & built by </span>
            <span style={{ color: 'var(--green)' }}>Jyotiraditya Gupta</span>
            <span> · {year}</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { href: personal.github, label: 'GitHub' },
              { href: personal.linkedin, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, label: 'Email' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--green)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-6 pt-4 text-center font-mono text-xs"
          style={{ color: 'var(--muted)', borderTop: '1px solid #1a1a2e', opacity: 0.5 }}
        >
          {`// Built with React + Vite + Tailwind CSS`}
        </div>
      </div>
    </footer>
  )
}
