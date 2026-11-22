import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal, education } from '../data/portfolio'

const HIGHLIGHTS = [
  { icon: '📊', label: 'Quant Research', sub: 'Alpha signals at RBC and CC&L' },
  { icon: '⚖️', label: 'AI Fairness Research', sub: 'LLMs × cooperative game theory' },
  { icon: '🧠', label: 'ML/AI Engineering', sub: 'Vision-language OCR at YuJa' },
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
                  {' '}graduate in Computer Science and Statistics (double major) with a minor in Mathematics,
                  working at the intersection of machine learning, quantitative finance, and AI research.
                </p>
                <p>
                  In markets, alpha signals get hit by unexpected events and decay over time. That is what drives
                  my research interest:{' '}
                  <span style={{ color: 'var(--text)' }}>reliable statistical and machine learning methods for prediction</span>,
                  and models that account for that uncertainty.
                </p>
                <p>
                  I'm currently an{' '}
                  <span style={{ color: 'var(--purple)' }}>ML/AI Engineer</span> at YuJa, training vision-language
                  models for OCR and running them in production. Before that I did{' '}
                  <span style={{ color: 'var(--green)' }}>quant trading</span> at RBC Capital Markets,{' '}
                  <span style={{ color: 'var(--cyan)' }}>quant research</span> at CC&L Investment Management, and{' '}
                  <span style={{ color: 'var(--purple)' }}>ML research</span> at UofT, from building alpha signals on
                  tick-level data to auditing LLM summaries for fairness.
                </p>
                <p>
                  I love elegant mathematics, puzzles, and the thrill of turning noisy signals and mispricing in
                  financial markets into a competitive edge, and I want to build my career in quantitative research.
                  Outside of work, I'm a sports enthusiast: cricket, soccer, and tennis.
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

            <div>
              {/* Working principle */}
              <div
                className="rounded-lg p-5 mb-4 font-mono"
                style={{ background: 'rgba(5,5,16,0.8)', border: '1px solid #1a1a2e' }}
              >
                <div className="text-xs mb-3" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--green)' }}>$</span> cat before_every_project.txt
                </div>
                {['Where did the data come from?', 'Am I measuring the right thing?'].map((q, i) => (
                  <div key={q} className="flex gap-3 mt-2 text-sm">
                    <span style={{ color: 'var(--cyan)' }}>{`0${i + 1}`}</span>
                    <span style={{ color: '#cbd5e1' }}>{q}</span>
                  </div>
                ))}
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
