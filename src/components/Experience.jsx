import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/portfolio'

function MetricChip({ label, value, color }) {
  return (
    <div
      className="inline-flex flex-col items-center px-3 py-2 rounded-lg font-mono"
      style={{
        background: `${color}10`,
        border: `1px solid ${color}30`,
        minWidth: '80px',
      }}
    >
      <span className="text-sm font-bold" style={{ color }}>
        {value}
      </span>
      <span className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
        {label}
      </span>
    </div>
  )
}

function ExperienceCard({ job, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-16"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-4 top-6 timeline-dot"
        style={{ color: job.color, borderColor: job.color }}
      />

      <div className="card p-6 mb-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span
                className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                style={{
                  background: `${job.color}15`,
                  color: job.color,
                  border: `1px solid ${job.color}30`,
                }}
              >
                [{job.shortCompany}]
              </span>
              <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                {job.period}
              </span>
            </div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
              {job.role}
            </h3>
            <p className="text-sm mt-0.5" style={{ color: 'var(--muted)' }}>
              {job.company} · {job.location}
            </p>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-5">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              <span className="mt-1 shrink-0 font-mono" style={{ color: job.color }}>▸</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {job.metrics.map((m) => (
            <MetricChip key={m.label} {...m} />
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="tag text-xs"
              style={{
                color: job.color,
                borderColor: `${job.color}30`,
                background: `${job.color}08`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-28 z-10">
      {/* Subtle section bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(0,255,136,0.01)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-14">
            <p className="section-label">02. work_experience</p>
            <h2 className="section-title">
              Where I've{' '}
              <span className="gradient-text">shipped</span>{' '}
              impact
            </h2>
          </div>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experience.map((job, i) => (
            <ExperienceCard key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
