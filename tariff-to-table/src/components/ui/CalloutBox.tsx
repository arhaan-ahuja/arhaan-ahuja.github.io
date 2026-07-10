import type { ReactNode } from 'react'

type Variant = 'insight' | 'tension' | 'evidence'

const config: Record<Variant, { label: string; accent: string }> = {
  insight: { label: 'Key insight', accent: 'border-l-gold-600' },
  tension: { label: 'The tension', accent: 'border-l-navy-900 dark:border-l-navy-100' },
  evidence: { label: 'Evidence', accent: 'border-l-data-slate' },
}

interface CalloutBoxProps {
  type: Variant
  title: string
  children: ReactNode
}

export default function CalloutBox({ type, title, children }: CalloutBoxProps) {
  const c = config[type]
  return (
    <div
      className={`border border-l-[3px] ${c.accent} border-navy-200 bg-white px-6 py-5 dark:border-navy-800 dark:bg-navy-900/50`}
    >
      <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
        {c.label}
      </p>
      <h4 className="mb-1.5 font-serif text-lg font-semibold text-navy-900 dark:text-navy-50">
        {title}
      </h4>
      <p className="leading-relaxed text-navy-600 dark:text-navy-300">
        {children}
      </p>
    </div>
  )
}
