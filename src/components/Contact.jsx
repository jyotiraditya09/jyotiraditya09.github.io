import Section from './Section'
import { personal } from '../data/portfolio'
import { FileIcon, GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-[17px] leading-relaxed text-ink-2">
        Whether it's a research idea, new developments in ML, or a great problem to solve, I'm always open to
        interesting conversations.
      </p>
      <a
        href={`mailto:${personal.email}`}
        className="mt-6 inline-block break-all text-xl font-medium text-ink underline decoration-line-strong underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-2xl"
      >
        {personal.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-3">
        <li>
          <a className="btn-ghost" href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
            LinkedIn
          </a>
        </li>
        <li>
          <a className="btn-ghost" href={personal.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            GitHub
          </a>
        </li>
        <li>
          <a className="btn-ghost" href={personal.cv} target="_blank" rel="noopener noreferrer">
            <FileIcon />
            CV
          </a>
        </li>
      </ul>
    </Section>
  )
}
