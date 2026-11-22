// A compact row of headline numbers for one role or project.
export default function Metrics({ items }) {
  if (!items?.length) return null
  return (
    <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 rounded-lg border border-line bg-surface px-4 py-3 sm:flex sm:flex-wrap sm:gap-x-8">
      {items.map(({ value, label }) => (
        <div key={label} className="flex flex-col-reverse justify-end">
          <dt className="text-xs text-muted">{label}</dt>
          <dd className="text-base font-semibold tabular-nums tracking-tight text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  )
}
