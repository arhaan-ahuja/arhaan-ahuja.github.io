import { ExternalLink, BookMarked } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { DATA_SOURCES } from '../data/dataSources'
import { REFERENCES } from '../data/references'

// Small pill marking a source that is used both in the interactive tools/charts
// and cited in the research paper's bibliography below.
function BothPill() {
  return (
    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold-600/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-400">
      <BookMarked className="h-3 w-3" /> Also cited in the research paper
    </span>
  )
}

export default function Sources() {
  usePageMeta(
    'Sources',
    'Every dataset, figure and citation used across Tariff to Table — official data behind the tools and charts, plus the full research-paper bibliography.'
  )

  return (
    <>
      <PageHeader
        eyebrow="Sources & references"
        title="Every source, in one place"
        intro="Nothing on this site is unsourced. Part one lists the official data behind the interactive tools and charts — government and World Bank figures, each with a direct link. Part two is the full academic bibliography for the research paper. Sources used in both are marked."
      />

      <section className="container-px py-14">
        <div className="mx-auto max-w-3xl space-y-16">
          {/* Part 1 — data behind the tools */}
          <div>
            <Reveal>
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-navy-900 dark:text-white">
                  1 · Data behind the tools &amp; charts
                </h2>
                <p className="mt-2 text-sm text-navy-500 dark:text-navy-300">
                  The official statistics and tariff rates that power the simulator
                  and the figures — grouped by where they appear.
                </p>
              </div>
            </Reveal>

            <div className="space-y-12">
              {DATA_SOURCES.map((group, gi) => (
                <Reveal key={group.category} delay={Math.min(gi * 0.05, 0.2)}>
                  <div>
                    <p className="eyebrow mb-2">
                      <span className="h-px w-7 bg-gold-600" /> {group.category}
                    </p>
                    <p className="mb-5 text-sm text-navy-500 dark:text-navy-300">
                      {group.intro}
                    </p>
                    <ul className="grid gap-px overflow-hidden rounded-lg border border-navy-200 bg-navy-200 dark:border-navy-800 dark:bg-navy-800">
                      {group.items.map((item) => (
                        <li
                          key={item.title}
                          className="bg-white p-5 dark:bg-navy-950 sm:p-6"
                        >
                          <p className="font-serif text-base font-semibold text-navy-900 dark:text-navy-50">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">
                            {item.publisher} · {item.year}
                          </p>
                          <p className="mt-2 text-sm text-navy-600 dark:text-navy-200">
                            <span className="font-semibold text-navy-800 dark:text-navy-100">
                              Used for:
                            </span>{' '}
                            {item.usedFor}
                          </p>
                          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                            {item.url && (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 underline-offset-2 hover:underline dark:text-gold-400"
                              >
                                View source <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>
                          {item.alsoInPaper && <BothPill />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Part 2 — bibliography */}
          <div>
            <Reveal>
              <div className="mb-8 border-t border-navy-200 pt-12 dark:border-navy-800">
                <h2 className="font-serif text-2xl font-semibold text-navy-900 dark:text-white">
                  2 · Research-paper bibliography
                </h2>
                <p className="mt-2 text-sm text-navy-500 dark:text-navy-300">
                  The full list of sources cited in the research paper, in
                  alphabetical order by author.
                </p>
              </div>
            </Reveal>

            <ol className="space-y-1">
              {REFERENCES.map((r, i) => (
                <Reveal key={r.title + i} delay={Math.min(i * 0.02, 0.3)}>
                  <li className="group flex gap-4 rounded-xl px-4 py-3.5 transition hover:bg-white dark:hover:bg-navy-800/50">
                    <span className="font-serif text-sm font-semibold text-gold-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="text-sm">
                      <span className="font-semibold text-navy-900 dark:text-white">
                        {r.author}
                      </span>
                      <span className="text-navy-500 dark:text-navy-300">
                        {' '}
                        ({r.year}).{' '}
                      </span>
                      <span className="italic text-navy-700 dark:text-navy-100">
                        {r.title}.
                      </span>
                      <span className="text-navy-500 dark:text-navy-300">
                        {' '}
                        {r.source}.
                      </span>
                      {r.url && (
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1.5 inline-flex items-center gap-1 text-gold-600 underline-offset-2 hover:underline dark:text-gold-400"
                        >
                          Link <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
