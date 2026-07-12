import { Link } from 'react-router-dom'
import { HelpCircle, FileText, ArrowRight, FileDown, AlignLeft } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import CalloutBox from '../components/ui/CalloutBox'
import StatCard from '../components/ui/StatCard'
import SectionHeading from '../components/ui/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { SITE } from '../data/site'
import {
  EXECUTIVE_SUMMARY,
  RESEARCH_QUESTION,
  RESEARCH_SECTIONS,
} from '../data/research'

const STAT_FINDINGS = [
  { value: 13.8, decimals: 1, suffix: '%', label: 'Avg. tariff (2019)', detail: 'Among the highest of any major economy.' },
  { value: 13.5, decimals: 1, suffix: '%', label: 'Mfg. share of GDP (2019)', detail: 'Down from 15.1% in 2014. (World Bank)' },
  { value: 310, suffix: 'M', label: 'Phones made (2021-22)', detail: 'Up from ~60M units in 2014-15.' },
  { value: 30, prefix: '~', suffix: '%', label: 'World GDP — RCEP, exited', detail: 'India left the largest free-trade bloc (2019).' },
]

export default function Research() {
  usePageMeta(
    'The Research',
    "A summary of independent research on India's shift toward trade protectionism and its effect on social and income inequality."
  )

  return (
    <>
      <PageHeader
        eyebrow="The Research"
        title="India's protectionist turn and inequality"
        intro="A clear, faithful summary of the original research paper — its question, evidence, and argument — expanded with visuals. Not a verbatim reproduction."
      />

      {/* Two ways to read */}
      <section className="container-px pt-12">
        <Reveal>
          <p className="eyebrow mb-5">
            <span className="h-px w-7 bg-gold-600" /> Two ways to read this
          </p>
          <div className="grid gap-px overflow-hidden rounded-lg border border-navy-200 bg-navy-200 dark:border-navy-800 dark:bg-navy-800 sm:grid-cols-2">
            <a
              href={SITE.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-white p-6 transition-colors hover:bg-navy-50 dark:bg-navy-950 dark:hover:bg-navy-900"
            >
              <span className="mt-0.5 text-gold-600 dark:text-gold-400">
                <FileDown className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-serif text-lg font-semibold text-navy-900 dark:text-navy-50">
                  Read the full paper
                </span>
                <span className="mt-1 block text-sm text-navy-500 dark:text-navy-300">
                  Open the complete ~13-page research paper (PDF) exactly as written.
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:gap-2.5 dark:text-navy-100">
                  Open PDF <ArrowRight className="h-4 w-4 transition-all" />
                </span>
              </span>
            </a>
            <a
              href="#summary"
              className="group flex items-start gap-4 bg-white p-6 transition-colors hover:bg-navy-50 dark:bg-navy-950 dark:hover:bg-navy-900"
            >
              <span className="mt-0.5 text-gold-600 dark:text-gold-400">
                <AlignLeft className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-serif text-lg font-semibold text-navy-900 dark:text-navy-50">
                  Read the summary
                </span>
                <span className="mt-1 block text-sm text-navy-500 dark:text-navy-300">
                  A clear, faithful summary of every section, in plain language with visuals.
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:gap-2.5 dark:text-navy-100">
                  Start with the summary <ArrowRight className="h-4 w-4 transition-all" />
                </span>
              </span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Research question */}
      <section className="container-px py-14">
        <Reveal>
          <div className="border-l-[3px] border-gold-600 pl-6 sm:pl-8">
            <p className="eyebrow mb-3">
              <HelpCircle className="h-3.5 w-3.5" /> Research Question
            </p>
            <p className="max-w-3xl font-serif text-2xl font-medium leading-snug text-navy-900 dark:text-navy-50 sm:text-3xl">
              {RESEARCH_QUESTION}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Executive summary */}
      <section id="summary" className="container-px scroll-mt-24 pb-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div>
              <p className="eyebrow mb-3">
                <span className="h-px w-6 bg-gold-600" /> Executive Summary
              </p>
              <p className="text-lg leading-relaxed text-navy-700 dark:text-navy-100">
                {EXECUTIVE_SUMMARY}
              </p>
              <Link to="/sources" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-400">
                <FileText className="h-4 w-4" /> View all sources &amp; references
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {STAT_FINDINGS.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sectioned argument */}
      <section className="container-px py-14">
        <SectionHeading
          eyebrow="The argument, section by section"
          title="From classical theory to distributional reality"
          subtitle="Each part of the paper, summarised in plain language and paired with its key takeaway."
        />

        <div className="mt-12 space-y-16">
          {RESEARCH_SECTIONS.map((sec, idx) => (
            <Reveal key={sec.id}>
              <article className="grid gap-8 lg:grid-cols-[1fr_minmax(280px,0.8fr)]">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl font-semibold text-gold-500">
                      0{idx + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-400">
                        {sec.kicker}
                      </p>
                      <h3 className="font-serif text-2xl font-semibold text-navy-900 dark:text-white">
                        {sec.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-5 space-y-4 text-navy-600 dark:text-navy-200">
                    {sec.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
                {sec.callout && (
                  <div className="lg:pt-12">
                    <CalloutBox type={sec.callout.type} title={sec.callout.title}>
                      {sec.callout.text}
                    </CalloutBox>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <section className="container-px pb-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-navy-100 glass p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                See the argument in motion
              </h3>
              <p className="mt-1 text-navy-500 dark:text-navy-300">
                Test the paper's logic in the simulator, or explore the data behind it.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/simulator" className="btn-primary">
                Open Simulator <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/visualizations" className="btn-secondary">
                View Data
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
