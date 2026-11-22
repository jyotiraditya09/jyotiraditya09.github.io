import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="page flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <a href="#top" className="transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
