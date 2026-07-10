import { ExternalLink } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { REFERENCES } from '../data/references'

export default function References() {
  usePageMeta(
    'References',
    'Full bibliography for the research paper on India\'s trade protectionism and inequality.'
  )

  return (
    <>
      <PageHeader
        eyebrow="References"
        title="Bibliography"
        intro="The full list of sources cited in the research paper, in alphabetical order by author."
      />

      <section className="container-px py-14">
        <div className="mx-auto max-w-3xl">
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
                    <span className="text-navy-500 dark:text-navy-300"> ({r.year}). </span>
                    <span className="italic text-navy-700 dark:text-navy-100">
                      {r.title}.
                    </span>
                    <span className="text-navy-500 dark:text-navy-300"> {r.source}.</span>
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
          <p className="mt-8 px-4 text-xs text-navy-400">
            Citations follow the formatting used in the original paper. Links are
            provided for convenience and may change over time.
          </p>
        </div>
      </section>
    </>
  )
}
