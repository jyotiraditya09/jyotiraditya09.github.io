import Section from './Section'

const QUESTIONS = ['Where did the data come from?', 'Am I measuring the right thing?']

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-12">
        <div className="space-y-5 text-[17px] leading-relaxed text-ink-2">
          <p>
            I'm a <span className="text-ink">University of Toronto</span> graduate in Computer Science and Statistics
            (double major) with a minor in Mathematics, and currently an ML/AI Engineer at YuJa.
          </p>
          <p>
            I'm interested in reliable statistical and machine learning methods for prediction: models that hold up on
            noisy, changing data. I've worked on this in production ML at YuJa, quantitative research at RBC Capital
            Markets and CC&L, and AI research on fairness and LLM compression at UofT.
          </p>
          <p>
            I love elegant mathematics and puzzles. Outside of work, I'm a sports enthusiast: cricket, soccer, and
            tennis.
          </p>
        </div>
        <aside className="self-start rounded-xl border border-line bg-surface p-5">
          <p className="kicker text-muted">Before every project</p>
          <ol className="mt-4 space-y-3">
            {QUESTIONS.map((q, i) => (
              <li key={q} className="flex gap-3 text-[15px] leading-snug text-ink">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                {q}
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </Section>
  )
}
