import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'

function SkillCategory({ name, data, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="card p-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="font-mono text-lg font-bold w-9 h-9 flex items-center justify-center rounded-md"
          style={{ background: `${data.color}15`, color: data.color }}
        >
          {data.icon}
        </span>
        <div>
          <h3 className="font-bold text-sm" style={{ color: 'var(--text)' }}>
            {name}
          </h3>
          <p className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
            {data.items.length} skills
          </p>
        </div>
      </div>

      {/* Skills as terminal output */}
      <div
        className="rounded-lg p-4 font-mono text-xs space-y-1.5"
        style={{ background: 'rgba(29,53,87,0.06)', border: '1px solid rgba(168,218,220,0.5)' }}
      >
        <div className="mb-2" style={{ color: 'var(--muted)' }}>
          <span style={{ color: data.color }}>{'>'}</span>
          {` list --category="${name.toLowerCase().replace(/ /g, '_')}"`}
        </div>
        {data.items.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.06 }}
            className="flex items-center gap-2"
          >
            <span style={{ color: `${data.color}80` }}>│</span>
            <span style={{ color: data.color }}>·</span>
            <span style={{ color: '#1D3557' }}>{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-28 z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(168,218,220,0.02)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-14">
            <p className="section-label">04. technical_skills</p>
            <h2 className="section-title">
              Tech{' '}
              <span className="gradient-text">stack</span>
            </h2>
            <p className="mt-3 text-sm max-w-xl" style={{ color: 'var(--muted)' }}>
              From coding libraries to quantitative and ML skills, my full stack.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {Object.entries(skills).map(([name, data], i) => (
            <SkillCategory key={name} name={name} data={data} index={i} />
          ))}
        </div>

        {/* Proficiency highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 p-6 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.7)',
            border: '1px solid #A8DADC',
          }}
        >
          <div className="font-mono text-xs mb-4" style={{ color: 'var(--muted)' }}>
            <span style={{ color: 'var(--green)' }}>$</span> run proficiency_check --highlight
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: 'Python',
                score: '5 yrs exp.',
                note: 'Bell, RBCCM',
                color: 'var(--green)',
                pct: 100,
              },
              {
                name: 'Quantitative Finance',
                score: '2 yrs exp.',
                note: 'RBCCM + CC&L',
                color: 'var(--cyan)',
                pct: 88,
              },
              {
                name: 'AI/ML Research',
                score: '3 labs',
                note: 'UofT CS + Stats',
                color: 'var(--purple)',
                pct: 82,
              },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-xs font-semibold" style={{ color: item.color }}>
                    {item.name}
                  </span>
                  <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                    {item.score}
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden mb-1"
                  style={{ background: `${item.color}20` }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: item.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.pct}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>
                <p className="font-mono text-xs" style={{ color: 'var(--muted)', fontSize: '0.65rem' }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
