import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface ChartCardProps {
  /** Figure number — renders an academic "Figure N" label above the title. */
  figNumber?: number
  title: string
  caption?: string
  source?: string
  children: ReactNode
  delay?: number
}

export default function ChartCard({
  figNumber,
  title,
  caption,
  source,
  children,
  delay = 0,
}: ChartCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="card flex h-full flex-col p-5 sm:p-6">
        {figNumber !== undefined && (
          <span className="mb-2 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
            <span className="h-px w-5 bg-gold-600 dark:bg-gold-400" />
            Figure {figNumber}
          </span>
        )}
        <h3 className="font-serif text-lg font-semibold text-navy-900 dark:text-white">
          {title}
        </h3>
        {caption && (
          <p className="mt-1 text-sm leading-relaxed text-navy-500 dark:text-navy-300">
            {caption}
          </p>
        )}
        <div className="mt-4 h-64 w-full">{children}</div>
        {source && (
          <figcaption className="mt-4 border-t border-navy-200 pt-3 text-xs leading-relaxed text-navy-400 dark:border-navy-800 dark:text-navy-400">
            {source}
          </figcaption>
        )}
      </figure>
    </Reveal>
  )
}

// Shared tooltip styling for Recharts across the app.
export const tooltipStyle = {
  borderRadius: 5,
  border: '1px solid rgba(26,24,20,0.15)',
  background: 'rgba(26, 24, 20, 0.95)',
  color: '#f7f5f0',
  fontSize: 13,
  boxShadow: '0 6px 20px -8px rgba(0,0,0,0.35)',
}
