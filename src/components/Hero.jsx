import { personal } from '../data/portfolio'
import Highlights from './Highlights'
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="page">
        <div className="animate-fade-up">
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {personal.name}
          </h1>
          <p className="mt-4 text-base text-muted">
            {personal.role} · {personal.affiliation}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{personal.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="btn-primary" href={personal.cv} target="_blank" rel="noopener noreferrer">
              View CV
              <ArrowUpRightIcon />
            </a>
            <a className="btn-ghost" href={personal.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
              GitHub
            </a>
            <a
              className="icon-btn"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a className="icon-btn" href={`mailto:${personal.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
        <Highlights />
      </div>
    </section>
  )
}
