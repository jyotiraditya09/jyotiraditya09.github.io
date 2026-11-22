import Section from './Section'
import { FIGURES } from './Figures'
import { research } from '../data/portfolio'

export default function Research() {
  return (
    <Section id="research" title="Research">
      <ol className="space-y-12">
        {research.map((item) => {
          const Figure = FIGURES[item.figure]
          return (
            <li key={item.title} className="grid gap-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <div className="flex aspect-[16/10] w-full max-w-[13rem] items-center justify-center rounded-lg border border-line bg-surface p-3 sm:mt-1 sm:max-w-none">
                {Figure && <Figure className="h-full w-full" />}
              </div>
              <div>
                <p className="font-mono text-xs text-muted">{item.period}</p>
                <h3 className="mt-1 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-0.5 text-sm text-ink-2">
                  Advisor: {item.advisor} <span className="text-muted">· {item.institution}</span>
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
                  {item.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
