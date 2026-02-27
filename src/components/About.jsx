import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal, education } from '../data/portfolio'

const HIGHLIGHTS = [
  { icon: '📐', label: 'Competitive Exams', sub: 'IMO & IChO National Qualifier' },
  { icon: '📊', label: 'Quant', sub: 'Markets × Statistics × ML' },
  { icon: '🧬', label: 'ML Research', sub: 'LLMs, Attention, AI Fairness' },
  { icon: '💻', label: 'Software Engineering', sub: 'Python, Java, R, SQL' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 z-10">
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
              <span className="gradient-text">me</span>{' '}]
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#94a3b8' }}>
                <p>
                  I'm a final-year Computer Science, Statistics & Mathematics student at the{' '}
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>University of Toronto</span>
                  {' '}, working at the intersection of quantitative finane, machine learning, and AI research.
                </p>
                <p>
                  My journey spans{' '}
                  <span style={{ color: 'var(--green)' }}>quant trading</span> at RBC Capital Markets,{' '}
                  <span style={{ color: 'var(--cyan)' }}>quant research</span> at CC&L Investment Management, and{' '}
                  <span style={{ color: 'var(--purple)' }}>ML research</span> at UofT, from building alpha signals on tick-level data to researching LLM compression and proportionally fair clusturing algorithms.
                </p>
                <p>
                  I love elegant mathematics, puzzles, and the thrill of turning noisy signals and mispricing in financial markets into competitive edge.
                  Outside of work, I'm a sports enthusiast, I love cricket, soccer and tennis.
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

              {/* University card - full width */}
              <motion.div
                className="col-span-2 rounded-xl p-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.06) 0%, rgba(0,212,255,0.06) 100%)',
                  border: '1px solid rgba(0,255,136,0.2)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-xs mb-1" style={{ color: 'var(--green)' }}>
                      🎓 University of Toronto
                    </div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                      CS × Statistics × Mathematics
                    </div>
                    <div className="font-mono text-xs mt-1" style={{ color: 'var(--muted)' }}>
                      Sep 2021 – Apr 2026 · Toronto, ON
                    </div>
                  </div>
                  <div
                    className="text-right shrink-0 font-mono text-2xl font-bold"
                    style={{ color: 'var(--green)' }}
                  >
                    3.90
                    <div className="text-xs font-normal" style={{ color: 'var(--muted)' }}>
                      GPA
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
