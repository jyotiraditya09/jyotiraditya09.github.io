import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-5 text-[17px] leading-relaxed text-ink-2">
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
    </Section>
  )
}
