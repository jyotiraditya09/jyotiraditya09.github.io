import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { research } from '../data/portfolio'

function ResearchCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="card p-6 flex flex-col gap-4"
      style={{ height: '100%' }}
    >
      {/* Top bar */}
      <div
        className="h-0.5 rounded-full w-12"
        style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
      />

      {/* Icon + Period */}
      <div className="flex items-center justify-between">
        <span className="text-3xl">{item.icon}</span>
        <span
          className="font-mono text-xs px-2 py-1 rounded"
          style={{
            background: `${item.color}12`,
            color: item.color,
            border: `1px solid ${item.color}25`,
          }}
        >
          {item.period}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3 className="font-bold text-base leading-snug mb-1" style={{ color: 'var(--text)' }}>
          {item.title}
        </h3>
        <p className="font-mono text-xs" style={{ color: item.color }}>
          {item.institution}
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
          Advisor: {item.advisor}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: '#94a3b8' }}>
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="tag"
            style={{
              color: item.color,
              borderColor: `${item.color}25`,
              background: `${item.color}07`,
              fontSize: '0.68rem',
              padding: '2px 8px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="research" className="relative py-16 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-14">
            <p className="section-label">03. research_experience</p>
            <h2 className="section-title">
              Academic{' '}
              <span className="gradient-text-purple">research</span>
            </h2>
            <p className="mt-3 text-sm max-w-xl" style={{ color: 'var(--muted)' }}>
              Pushing the frontier of ML theory - from LLM compression to algorithmic fairness.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {research.map((item, i) => (
            <ResearchCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Neural net decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <NeuralNetSVG />
        </motion.div>
      </div>
    </section>
  )
}

function NeuralNetSVG() {
  const layers = [
    { x: 60, nodes: [80, 140, 200] },
    { x: 200, nodes: [60, 120, 180, 240] },
    { x: 340, nodes: [80, 160, 240] },
    { x: 480, nodes: [120, 200] },
  ]

  const connections = []
  for (let l = 0; l < layers.length - 1; l++) {
    layers[l].nodes.forEach((y1) => {
      layers[l + 1].nodes.forEach((y2) => {
        connections.push({ x1: layers[l].x, y1, x2: layers[l + 1].x, y2 })
      })
    })
  }

  return (
    <svg width="540" height="320" viewBox="0 0 540 320" className="opacity-20">
      {/* Connections */}
      {connections.map((c, i) => (
        <line
          key={i}
          x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
          stroke="#00ff88"
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />
      ))}
      {/* Nodes */}
      {layers.map((layer) =>
        layer.nodes.map((y, ni) => (
          <g key={`${layer.x}-${ni}`}>
            <circle cx={layer.x} cy={y} r="8" fill="#030309" stroke="#00ff88" strokeWidth="1.5" />
            <circle cx={layer.x} cy={y} r="3" fill="#00ff88" opacity="0.6" />
          </g>
        ))
      )}
    </svg>
  )
}
