import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education } from '../data/portfolio'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-28 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-14">
            <p className="section-label">05. education</p>
            <h2 className="section-title">
              Academic{' '}
              <span className="gradient-text">foundation</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Main education card */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-8 h-full"
              style={{
                background: 'linear-gradient(135deg, rgba(69,123,157,0.06) 0%, rgba(168,218,220,0.04) 50%, rgba(29,53,87,0.06) 100%)',
                border: '1px solid rgba(69,123,157,0.25)',
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                    {education.school}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#457B9D' }}>
                    {education.degree}
                  </p>
                  <p className="font-mono text-xs mt-2" style={{ color: 'var(--muted)' }}>
                    {education.period} · {education.location}
                  </p>
                </div>
                <div
                  className="shrink-0 text-center px-4 py-3 rounded-xl font-mono"
                  style={{
                    background: 'rgba(69,123,157,0.1)',
                    border: '1px solid rgba(69,123,157,0.3)',
                  }}
                >
                  <div className="text-2xl font-bold" style={{ color: 'var(--green)' }}>
                    3.90
                  </div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>GPA / 4.0</div>
                </div>
              </div>

              {/* Teaching Assistant */}
              <div className="mb-5">
                <h4 className="font-mono text-xs font-semibold mb-2" style={{ color: 'var(--cyan)' }}>
                  Teaching Assistant
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.ta.map((course) => (
                    <span
                      key={course}
                      className="tag text-xs"
                      style={{
                        color: 'var(--cyan)',
                        borderColor: 'rgba(168,218,220,0.5)',
                        background: 'rgba(168,218,220,0.12)',
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-mono text-xs font-semibold mb-3" style={{ color: 'var(--green)' }}>
                  Achievements & Scholarships
                </h4>
                <ul className="space-y-2">
                  {education.achievements.map((ach) => (
                    <li
                      key={ach}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: '#457B9D' }}
                    >
                      <span className="mt-1 shrink-0" style={{ color: 'var(--green)' }}>◆</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Olympiad / competitive card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                background: '#1D3557',
                border: '1px solid #457B9D',
              }}
            >
              <div className="font-mono text-xs mb-4" style={{ color: 'var(--muted)' }}>
                <span style={{ color: 'var(--purple)' }}>$</span> cat competitive_scores.txt
              </div>

              <div className="space-y-4">
                {education.olympiads.map((item, i) => {
                  const colors = ['var(--cyan)', 'var(--cyan)', 'var(--cyan)', 'var(--cyan)', 'var(--cyan)', 'var(--cyan)']
                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex gap-3 items-start p-3 rounded-lg"
                      style={{ background: `${colors[i]}08`, border: `1px solid ${colors[i]}18` }}
                    >
                      <span
                        className="font-mono text-xs font-bold shrink-0 mt-0.5"
                        style={{ color: colors[i] }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm" style={{ color: '#F1FAEE' }}>
                        {item}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Key stat highlight */}
              <div
                className="mt-6 p-4 rounded-lg text-center"
                style={{ background: 'rgba(168,218,220,0.12)', border: '1px solid rgba(168,218,220,0.3)' }}
              >
                <div className="font-mono text-xs mb-1" style={{ color: 'var(--muted)' }}>
                  IIT-JEE All India Rank
                </div>
                <div className="font-mono text-3xl font-bold" style={{ color: 'var(--green)' }}>
                  AIR 889
                </div>
                <div className="font-mono text-xs mt-1" style={{ color: 'var(--muted)' }}>
                  Top 0.07% · ~1.2M candidates
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
