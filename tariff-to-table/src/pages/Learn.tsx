import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { CONCEPTS } from '../data/concepts'

export default function Learn() {
  usePageMeta(
    'Learn Economics',
    'Plain-language explainers: absolute & comparative advantage, opportunity cost, tariffs, quotas, subsidies, free trade, protectionism and more.'
  )
  const [selected, setSelected] = useState(CONCEPTS[0].id)
  const active = CONCEPTS.find((c) => c.id === selected)!

  return (
    <>
      <PageHeader
        eyebrow="Learn Economics"
        title="The ideas behind the headlines"
        intro="Ten core concepts that power the whole debate — each explained simply, with a real example from India's trade story."
      />

      <section className="container-px py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Concept list */}
          <Reveal>
            <div className="card overflow-hidden">
              {CONCEPTS.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c.id)}
                  className={`flex w-full items-center justify-between gap-3 border-b border-navy-100 px-5 py-3.5 text-left transition last:border-0 dark:border-white/10 ${
                    selected === c.id
                      ? 'bg-gold-500/10'
                      : 'hover:bg-navy-50 dark:hover:bg-white/5'
                  }`}
                >
                  <span>
                    <span className="flex items-center gap-2.5">
                      <span className="font-serif text-sm font-semibold text-gold-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-semibold ${
                          selected === c.id
                            ? 'text-navy-900 dark:text-white'
                            : 'text-navy-700 dark:text-navy-100'
                        }`}
                      >
                        {c.term}
                      </span>
                    </span>
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition ${
                      selected === c.id
                        ? 'text-gold-500'
                        : 'text-navy-300 dark:text-navy-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </Reveal>

          {/* Concept detail */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="card p-7 sm:p-9"
              >
                <p className="eyebrow mb-3">
                  <span className="h-px w-6 bg-gold-500" /> Concept
                </p>
                <h2 className="font-serif text-3xl font-semibold text-navy-900 dark:text-white">
                  {active.term}
                </h2>
                <p className="mt-1 text-lg text-gold-600 dark:text-gold-400">
                  {active.short}
                </p>

                <p className="mt-6 text-navy-600 dark:text-navy-200">
                  {active.explanation}
                </p>

                <div className="mt-6 rounded-2xl border border-navy-100 bg-navy-50/60 p-5 dark:border-white/10 dark:bg-navy-900/40">
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                    In practice
                  </p>
                  <p className="mt-1.5 text-navy-700 dark:text-navy-100">
                    {active.example}
                  </p>
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-gold-400/30 bg-gold-500/5 p-5">
                  <span className="mt-0.5 text-gold-500">★</span>
                  <p className="font-medium text-navy-800 dark:text-navy-50">
                    {active.takeaway}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
