import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { TIMELINE, type TimelineEvent } from '../data/timeline'

const STANCE: Record<
  TimelineEvent['stance'],
  { dot: string; chip: string; label: string }
> = {
  protectionist: {
    dot: 'bg-data-brick',
    chip: 'bg-data-brick/10 text-data-brick dark:text-gold-300',
    label: 'Protectionist',
  },
  liberal: {
    dot: 'bg-data-moss',
    chip: 'bg-data-moss/10 text-data-moss dark:text-data-moss',
    label: 'Liberalising',
  },
  mixed: {
    dot: 'bg-data-ochre',
    chip: 'bg-data-ochre/10 text-data-ochre dark:text-data-ochre',
    label: 'Mixed',
  },
}

export default function Timeline() {
  usePageMeta(
    "India's Trade Timeline",
    'From independence and the License Raj to 1991, the WTO, Make in India, RCEP, Atmanirbhar Bharat and PLI.'
  )
  const [open, setOpen] = useState<number | null>(2)

  return (
    <>
      <PageHeader
        eyebrow="India's Trade Timeline"
        title="A pendulum between protection and openness"
        intro="Eight turning points that trace India's path from a closed post-independence economy, through the 1991 opening, to its recent return to selective protectionism."
      />

      {/* Legend */}
      <section className="container-px pt-10">
        <Reveal>
          <div className="flex flex-wrap gap-4 text-sm">
            {Object.entries(STANCE).map(([k, v]) => (
              <span key={k} className="inline-flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${v.dot}`} />
                <span className="text-navy-600 dark:text-navy-200">{v.label}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-px py-12">
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[19px] top-2 h-full w-px bg-navy-200 dark:bg-navy-800 sm:left-[27px]" />

          <ol className="space-y-6">
            {TIMELINE.map((ev, i) => {
              const s = STANCE[ev.stance]
              const isOpen = open === i
              return (
                <Reveal key={ev.year + ev.title} delay={i * 0.04}>
                  <li className="relative pl-12 sm:pl-16">
                    {/* dot */}
                    <span className="absolute left-[11px] top-3 sm:left-[19px]">
                      <span className={`block h-4 w-4 rounded-full ${s.dot} ring-4 ring-navy-50 dark:ring-navy-950`} />
                    </span>

                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="card w-full p-5 text-left transition-all hover:border-gold-400/50 sm:p-6"
                      aria-expanded={isOpen}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-serif text-2xl font-semibold text-gold-500">
                          {ev.year}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${s.chip}`}>
                          {s.label}
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-serif text-xl font-semibold text-navy-900 dark:text-white">
                        {ev.title}
                      </h3>
                      <p className="mt-2 text-navy-600 dark:text-navy-200">
                        {ev.summary}
                      </p>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 grid gap-4 border-t border-navy-100 pt-4 dark:border-white/10 sm:grid-cols-2">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                              Economic significance
                            </p>
                            <p className="mt-1 text-sm text-navy-600 dark:text-navy-200">
                              {ev.significance}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                              Impact
                            </p>
                            <p className="mt-1 text-sm text-navy-600 dark:text-navy-200">
                              {ev.impact}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <span className="mt-3 inline-block text-xs font-semibold text-gold-600 dark:text-gold-400">
                        {isOpen ? 'Show less −' : 'Read more +'}
                      </span>
                    </button>
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>
    </>
  )
}
