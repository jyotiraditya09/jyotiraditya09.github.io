import { highlights } from '../data/portfolio'

export default function Highlights() {
  return (
    <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20 md:grid-cols-4">
      {highlights.map((h) => (
        <li key={h.label} className="bg-surface px-4 py-5 sm:px-5">
          <p className="text-xl font-semibold tabular-nums tracking-tight text-ink sm:text-2xl">{h.value}</p>
          <p className="mt-1 text-sm text-ink-2">{h.label}</p>
          <p className="mt-0.5 text-xs text-muted">{h.context}</p>
        </li>
      ))}
    </ul>
  )
}
