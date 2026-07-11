import { Quote } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

const MOTIVATIONS = [
  {
    title: 'A question that started at a checkout',
    body: "Trade policy can feel distant — negotiated in summits, written in legal text. But it ends somewhere very ordinary: the price of a phone, an air conditioner, a litre of fruit juice. I wanted to trace that line, from a tariff decision to a household budget.",
  },
  {
    title: 'India at a turning point',
    body: "India spent decades as one of the most protected economies on earth, opened up dramatically in 1991, and has — since around 2018 — begun turning back toward protectionism. That makes it a uniquely rich case study in one of economics' oldest debates.",
  },
  {
    title: 'Policy is never neutral',
    body: "Every trade policy creates winners and losers. The research kept returning to one uncomfortable fact: the benefits of protection tend to concentrate, while the costs tend to spread — often landing hardest on those least able to absorb them.",
  },
  {
    title: 'Why build a platform, not just write a paper',
    body: "A paper makes an argument; an interactive tool lets you test it. The simulator and calculator turn the paper's logic into something you can feel — change a tariff, and watch prices, revenue, and inequality move together.",
  },
]

export default function About() {
  usePageMeta(
    'About the Project',
    'Why this research was conducted, the motivation behind it, and why trade policy affects ordinary people.'
  )

  return (
    <>
      <PageHeader
        eyebrow="About the Project"
        title="Why I built Tariff to Table"
        intro="An independent research project — and an attempt to make a genuinely abstract debate feel concrete, personal, and explorable."
      />

      <section className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {MOTIVATIONS.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <div className="card h-full p-7">
                <span className="font-serif text-sm font-semibold text-gold-500">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-navy-900 dark:text-white">
                  {m.title}
                </h3>
                <p className="mt-3 text-navy-600 dark:text-navy-200">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why it matters band */}
      <section className="container-px pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-navy-100 glass p-8 sm:p-12">
            <Quote className="h-9 w-9 text-gold-500" />
            <p className="mt-4 max-w-3xl font-serif text-2xl font-medium leading-snug text-navy-900 dark:text-white">
              Trade policy decides which industries grow, which jobs exist, and
              what we pay at the shop. Understanding it shouldn't require a
              degree — it should be something anyone can explore.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
