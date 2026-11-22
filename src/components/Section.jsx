export default function Section({ id, title, children }) {
  return (
    <section id={id} className="border-t border-line py-16 sm:py-24">
      <div className="page grid gap-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-12">
        <h2 className="kicker text-accent md:sticky md:top-24 md:self-start">{title}</h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
