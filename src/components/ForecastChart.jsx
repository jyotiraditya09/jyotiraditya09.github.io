// Noisy observations, a fitted trend, and a forecast whose uncertainty band widens:
// a picture of prediction under uncertainty.
const OBSERVED = [
  [14, 126], [22, 111], [31, 117], [40, 104], [48, 108], [57, 95], [66, 99], [75, 86], [84, 92], [93, 80],
  [102, 86], [111, 74], [120, 82], [129, 70], [138, 79], [147, 71], [156, 82], [165, 74], [174, 85],
]
const GRID_Y = [40, 75, 110]

export default function ForecastChart({ className = '' }) {
  return (
    <figure className={className}>
      <svg viewBox="0 0 300 170" className="h-auto w-full" role="img" aria-labelledby="forecast-chart-title">
        <title id="forecast-chart-title">
          Noisy observations with a fitted trend, continued as a forecast whose uncertainty band widens over time
        </title>
        {GRID_Y.map((y) => (
          <line key={y} x1="8" x2="296" y1={y} y2={y} className="stroke-line" strokeWidth="1" />
        ))}
        <line x1="8" x2="296" y1="142" y2="142" className="stroke-line-strong" strokeWidth="1" />
        <path
          className="chart-band fill-accent"
          fillOpacity="0.14"
          d="M180,77 C215,72 250,52 292,46 L292,104 C250,97 215,90 180,83 Z"
        />
        <line x1="180" x2="180" y1="26" y2="142" className="stroke-line-strong" strokeDasharray="3 4" />
        <text x="180" y="18" textAnchor="middle" className="fill-muted font-mono" fontSize="10">
          now
        </text>
        <path
          className="chart-draw stroke-accent"
          pathLength="1"
          d="M10,120 C60,100 100,60 180,80"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="chart-forecast stroke-accent"
          d="M180,80 C215,84 250,70 292,75"
          fill="none"
          strokeWidth="2"
          strokeDasharray="5 5"
          strokeLinecap="round"
        />
        {OBSERVED.map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="2.4"
            className="chart-point fill-muted"
            style={{ animationDelay: `${300 + i * 45}ms` }}
          />
        ))}
        <text x="10" y="160" className="fill-muted font-mono" fontSize="10">
          observed
        </text>
        <text x="294" y="160" textAnchor="end" className="fill-accent font-mono" fontSize="10">
          forecast
        </text>
      </svg>
    </figure>
  )
}
