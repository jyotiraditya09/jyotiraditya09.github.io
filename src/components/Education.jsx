import Section from './Section'
import { education } from '../data/portfolio'

function List({ title, children }) {
  return (
    <div>
      <h4 className="kicker text-muted">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-2">{children}</ul>
    </div>
  )
}

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="min-w-0 max-w-xl">
          <h3 className="text-base font-semibold text-ink">{education.school}</h3>
          <p className="mt-0.5 text-[15px] leading-relaxed text-ink-2">{education.degree}</p>
          <p className="mt-1 font-mono text-xs text-muted">
            {education.period} · {education.location}
          </p>
          <p className="mt-4 text-sm text-ink-2">
            <span className="text-muted">Teaching assistant:</span> {education.ta.join(', ')}
          </p>
        </div>
        <div className="rounded-xl border border-line bg-surface px-5 py-4">
          <p className="text-2xl font-semibold tabular-nums tracking-tight text-ink">
            {education.gpa}
            <span className="text-base font-normal text-muted"> / {education.gpaScale}</span>
          </p>
          <p className="mt-0.5 text-xs text-muted">GPA</p>
        </div>
      </div>
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <List title="Awards and scholarships">
          {education.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
        <List title="Competitive exams">
          <li>
            {education.jee.result} <span className="text-muted">· {education.jee.note}</span>
          </li>
          {education.olympiads.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      </div>
    </Section>
  )
}
