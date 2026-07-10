import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface ChartCardProps {
  title: string
  caption?: string
  source?: string
  children: ReactNode
  delay?: number
}

export default function ChartCard({
  title,
  caption,
  source,
  children,
  delay = 0,
}: ChartCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card flex h-full flex-col p-5 sm:p-6">
        <h3 className="font-serif text-lg font-semibold text-navy-900 dark:text-white">
          {title}
        </h3>
        {caption && (
          <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">
            {caption}
          </p>
        )}
        <div className="mt-4 h-64 w-full">{children}</div>
        {source && (
          <p className="mt-3 text-xs text-navy-400 dark:text-navy-400">
            {source}
          </p>
        )}
      </div>
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
