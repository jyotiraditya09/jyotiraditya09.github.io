// Small decorative figures for the research entries. All are aria-hidden:
// the text next to each figure carries the meaning.

// Three groups of embedded comments, each inside its cluster boundary.
const OFFSETS = [[-9, -7], [6, -11], [11, 2], [-2, 10], [-12, 6], [3, -1], [10, 12]]
const CLUSTERS = [
  { cls: 'fill-accent', c: [38, 36] },
  { cls: 'fill-violet', c: [80, 66] },
  { cls: 'fill-muted', c: [122, 34] },
].map((k) => ({ ...k, pts: OFFSETS.map(([dx, dy]) => [k.c[0] + dx, k.c[1] + dy]) }))

export function ClustersFigure({ className }) {
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden="true">
      {CLUSTERS.map(({ cls, c, pts }) => (
        <g key={cls}>
          <circle cx={c[0]} cy={c[1]} r="23" fill="none" className="stroke-line-strong" strokeDasharray="3 3" />
          {pts.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3.6" className={cls} fillOpacity="0.9" />
          ))}
        </g>
      ))}
    </svg>
  )
}

// A weight matrix with roughly 60% of entries pruned (outlined) and the rest kept.
export function PruningFigure({ className }) {
  const cells = []
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 10; c++) {
      const kept = (r * 7 + c * 3) % 5 < 2
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={12 + c * 14}
          y={10 + r * 14}
          width="10"
          height="10"
          rx="2"
          className={kept ? 'fill-accent' : 'fill-none stroke-line-strong'}
          fillOpacity={kept ? 0.45 + ((r + c) % 3) * 0.25 : undefined}
        />,
      )
    }
  }
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden="true">
      {cells}
    </svg>
  )
}

// An attention matrix with a local band and one global token.
export function AttentionFigure({ className }) {
  const n = 12
  const cells = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let cls = 'fill-line'
      if (Math.abs(i - j) <= 1) cls = 'fill-accent'
      else if (i === 0 || j === 0) cls = 'fill-violet'
      cells.push(<rect key={`${i}-${j}`} x={38 + j * 7} y={8 + i * 7} width="6" height="6" rx="1" className={cls} />)
    }
  }
  return (
    <svg viewBox="0 0 160 100" className={className} aria-hidden="true">
      {cells}
    </svg>
  )
}

export const FIGURES = {
  clusters: ClustersFigure,
  pruning: PruningFigure,
  attention: AttentionFigure,
}
