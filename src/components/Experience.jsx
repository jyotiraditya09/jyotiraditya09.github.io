import Section from './Section'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-1 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-6">
            <p className="whitespace-nowrap font-mono text-xs leading-6 text-muted">{job.period}</p>
            <div>
              <h3 className="text-base font-semibold text-ink">{job.role}</h3>
              <p className="mt-0.5 text-sm text-ink-2">
                {job.company} <span className="text-muted">· {job.location}</span>
              </p>
              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-5 text-[15px] leading-relaxed text-ink-2 before:absolute before:left-0 before:top-[0.75em] before:h-px before:w-2.5 before:bg-accent before:content-['']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools">
                {job.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
