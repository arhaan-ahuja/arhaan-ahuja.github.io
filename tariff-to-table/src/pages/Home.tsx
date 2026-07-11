import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import StatCard from '../components/ui/StatCard'
import { KEY_FINDINGS } from '../data/research'
import { usePageMeta } from '../hooks/usePageMeta'

const STAT_VALUES = [
  { value: 13.8, decimals: 1, suffix: '%', label: KEY_FINDINGS[0].label, detail: KEY_FINDINGS[0].detail },
  { value: 13.5, decimals: 1, suffix: '%', label: 'Mfg. share of GDP, 2019', detail: 'Down from 15.1% in 2014 despite the protectionist push — far below the 25% target. (World Bank)' },
  { value: 30, prefix: '~', suffix: '%', label: 'Of world GDP — RCEP, exited', detail: "India left RCEP in 2019, the world's largest free-trade bloc — a clear step back from open trade." },
  { value: 21.9, decimals: 1, suffix: '%', label: 'Poverty ratio, 2011–12', detail: 'Down from 45.3% in 1993–94 after the 1991 liberalisation. (Tendulkar)' },
]

const TOOLS = [
  { to: '/research', n: '01', title: 'The Research', desc: 'The full argument — literature, trajectory, rationale, and distributional effects — summarised clearly.' },
  { to: '/simulator', n: '02', title: 'Who Pays the Tariff?', desc: 'Pick a good and a tariff rate, and see how the cost takes a bigger bite out of a poorer family than a richer one.' },
  { to: '/calculator', n: '03', title: 'Tariff Calculator', desc: 'Estimate how a tariff on the goods you buy changes your monthly and annual spending.' },
  { to: '/timeline', n: '04', title: "India's Trade Timeline", desc: 'From the License Raj to PLI — the pendulum between protection and openness.' },
  { to: '/learn', n: '05', title: 'Learn Economics', desc: 'Plain-language explainers for tariffs, comparative advantage, opportunity cost and more.' },
  { to: '/visualizations', n: '06', title: 'Interactive Data', desc: "Charts on India's tariffs, trade flows, manufacturing and the regressive burden of tariffs." },
]

// A small static editorial figure: India's average applied tariff (%).
function TariffFigure() {
  const pts = [
    [0, 30],
    [40, 26],
    [80, 22],
    [120, 14],
    [160, 8],
    [200, 11],
  ]
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')
  return (
    <figure className="border border-navy-200 bg-white p-5 dark:border-navy-800 dark:bg-navy-900/40">
      <figcaption className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500 dark:text-navy-400">
        Figure 1 — India's avg. applied tariff, %
      </figcaption>
      <svg viewBox="0 0 210 44" className="w-full" role="img" aria-label="Line chart showing India's average tariff falling after 1991 then rising after 2017">
        <line x1="0" y1="43" x2="210" y2="43" stroke="currentColor" className="text-navy-200 dark:text-navy-800" strokeWidth="0.6" />
        <path d={path} fill="none" stroke="#9a3b2c" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="1.7" fill="#9a3b2c" />
        ))}
      </svg>
      <div className="mt-2 flex justify-between text-[0.65rem] text-navy-400">
        <span>1991</span>
        <span>2008</span>
        <span>2022</span>
      </div>
    </figure>
  )
}

export default function Home() {
  usePageMeta(
    'How trade policy reaches your table',
    "Tariff to Table — an interactive companion to research on India's trade protectionism and inequality."
  )

  return (
    <>
      {/* Masthead hero */}
      <section className="border-b border-navy-200 dark:border-navy-800">
        <div className="container-wide py-16 sm:py-24">
          <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="eyebrow mb-5">
                <span className="h-px w-7 bg-gold-600" />
                A research project · India · Trade policy
              </p>
              <h1 className="max-w-3xl text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                How trade policy reaches the everyday consumer
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600 dark:text-navy-300">
                A tariff set in a capital eventually shows up as a price on a
                shelf. This project examines the real-world effects of
                protectionist trade policy on households, businesses and
                economies — using India's recent return to protectionism as its
                case study.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/research" className="btn-primary">
                  Read the research
                </Link>
                <Link to="/simulator" className="btn-secondary">
                  Explore the simulator
                </Link>
                <Link to="/calculator" className="btn-secondary">
                  Calculate your tariff impact
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <TariffFigure />
            </div>
          </div>
        </div>
      </section>

      {/* Key findings */}
      <section className="container-wide py-16">
        <Reveal>
          <p className="eyebrow mb-8">
            <span className="h-px w-7 bg-gold-600" />
            At a glance
          </p>
        </Reveal>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STAT_VALUES.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <StatCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Explore */}
      <section className="border-t border-navy-200 dark:border-navy-800">
        <div className="container-wide py-16">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <p className="eyebrow mb-3">
                <span className="h-px w-7 bg-gold-600" />
                Explore the platform
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Read the argument, then test the ideas yourself
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-lg border border-navy-200 bg-navy-200 dark:border-navy-800 dark:bg-navy-800 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t, i) => (
              <Reveal key={t.to} delay={i * 0.04}>
                <Link
                  to={t.to}
                  className="group flex h-full flex-col bg-white p-6 transition-colors hover:bg-navy-50 dark:bg-navy-950 dark:hover:bg-navy-900"
                >
                  <span className="font-serif text-sm font-semibold text-gold-600 dark:text-gold-400">
                    {t.n}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-navy-900 dark:text-navy-50">
                    {t.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500 dark:text-navy-300">
                    {t.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:gap-2.5 dark:text-navy-100">
                    Open <ArrowRight className="h-4 w-4 transition-all" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis pull-quote */}
      <section className="border-t border-navy-200 dark:border-navy-800">
        <div className="container-px py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-6 justify-center">From the conclusion</p>
              <blockquote className="font-serif text-2xl font-medium leading-snug text-navy-900 dark:text-navy-50 sm:text-3xl">
                “Protectionism is not inherently beneficial or harmful. Its impact
                on inequality depends on whether the gains from industrial growth
                are deliberately shared.”
              </blockquote>
              <Link
                to="/research"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 dark:text-gold-400"
              >
                Read the full argument <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
