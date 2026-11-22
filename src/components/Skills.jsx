import Section from './Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line">
        {skills.map(({ group, items }) => (
          <div key={group} className="grid gap-1.5 py-4 first:pt-0 last:pb-0 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6">
            <dt className="text-sm font-medium text-ink">{group}</dt>
            <dd className="text-[15px] leading-relaxed text-ink-2">{items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
