import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import ExpandableSection from '../components/ui/ExpandableSection'
import { usePageMeta } from '../hooks/usePageMeta'
import { FAQ as FAQ_ITEMS } from '../data/faq'

export default function FAQ() {
  usePageMeta(
    'FAQ',
    'Common questions about tariffs, who pays them, protectionism, and how trade policy affects consumers.'
  )

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered"
        intro="Short, plain answers to the questions this project comes back to most often."
      />

      <section className="container-px py-14">
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <ExpandableSection title={item.q} defaultOpen={i === 0}>
                {item.a}
              </ExpandableSection>
            </Reveal>
          ))}

          <Reveal>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-navy-100 glass p-6 sm:flex-row sm:items-center">
              <p className="text-navy-600 dark:text-navy-200">
                Want the full reasoning behind these answers?
              </p>
              <Link to="/research" className="btn-primary">
                Read the research <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
