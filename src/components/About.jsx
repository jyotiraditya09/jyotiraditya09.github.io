import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal, education } from '../data/portfolio'

const HIGHLIGHTS = [
  { icon: '🧠', label: 'ML/AI Engineering', sub: 'Production systems at YuJa' },
  { icon: '📊', label: 'Quant', sub: 'Markets × Statistics × ML' },
  { icon: '🧬', label: 'ML Research', sub: 'LLM Compression, AI Fairness' },
  { icon: '📐', label: 'Competitive Exams', sub: 'IChO National Qualifier' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-16 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-14">
            <p className="section-label">01. who_am_i</p>
            <h2 className="section-title">
              About{' '}
              <span className="gradient-text">me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                <p>
                  I'm a{' '}
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>University of Toronto</span>
                  {' '}graduate in Computer Science and Statistics with a minor in Mathematics, working at the
                  intersection of machine learning, quantitative finance, and AI research.
                </p>
                <p>
                  I'm currently an{' '}
                  <span style={{ color: 'var(--purple)' }}>ML/AI Engineer</span> at YuJa, building document AI and OCR
                  systems. Before that I did{' '}
                  <span style={{ color: 'var(--green)' }}>quant trading</span> at RBC Capital Markets,{' '}
                  <span style={{ color: 'var(--cyan)' }}>quant research</span> at CC&L Investment Management, and{' '}
                  <span style={{ color: 'var(--purple)' }}>ML research</span> at UofT, from building alpha signals on
                  tick-level data to researching LLM compression and proportionally fair clustering.
                </p>
                <p>
                  I love elegant mathematics, puzzles, and the thrill of turning noisy signals and mispricing in
                  financial markets into a competitive edge. Outside of work, I'm a sports enthusiast: cricket,
                  soccer, and tennis.
                </p>
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-8">
                {[
                  { label: 'github.com/jyotiraditya09', href: personal.github, color: 'var(--green)' },
                  { label: 'linkedin.com/in/jyotirgupta', href: personal.linkedin, color: 'var(--cyan)' },
                  { label: personal.email, href: `mailto:${personal.email}`, color: 'var(--purple)' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs transition-opacity hover:opacity-70"
                    style={{ color: link.color }}
                  >
                    ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="card p-5"
                >
                  <div className="text-2xl mb-3">{h.icon}</div>
                  <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>
                    {h.label}
                  </div>
                  <div className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                    {h.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
