import { Link } from 'react-router-dom'
import { ExternalLink, FileText } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { DATA_SOURCES } from '../data/dataSources'

export default function DataSources() {
  usePageMeta(
    'Data Sources',
    'Every official dataset, figure and tariff rate used across the Tariff to Table tools and charts — with a direct link to each.'
  )

  return (
    <>
      <PageHeader
        eyebrow="Show the working"
        title="Data sources"
        intro="Every number in the interactive tools and charts is traceable. Below is each official dataset, figure and tariff rate used on this site, grouped by where it appears, with a direct link so you can check any figure yourself."
      />

      <section className="container-px py-14">
        <div className="mx-auto max-w-3xl space-y-14">
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
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 underline-offset-2 hover:underline dark:text-gold-400"
                        >
                          View source <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {/* Cross-link to the academic bibliography */}
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 rounded-lg border border-navy-200 bg-white p-6 dark:border-navy-800 dark:bg-navy-900/50 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-serif text-lg font-semibold text-navy-900 dark:text-white">
                  Looking for the research paper's citations?
                </h3>
                <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">
                  The full academic bibliography is on the References page.
                </p>
              </div>
              <Link to="/references" className="btn-secondary shrink-0">
                <FileText className="h-4 w-4" /> View References
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
