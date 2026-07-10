interface StatCardProps {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  detail?: string
}

// Static, editorial stat — no count-up animation.
export default function StatCard({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  label,
  detail,
}: StatCardProps) {
  return (
    <div className="border-t-2 border-navy-900 pt-4 dark:border-navy-100">
      <p className="font-serif text-4xl font-semibold tracking-tight text-navy-900 dark:text-navy-50">
        {prefix}
        {value.toFixed(decimals)}
        <span className="text-gold-600 dark:text-gold-400">{suffix}</span>
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-300">
        {label}
      </p>
      {detail && (
        <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-400">
          {detail}
        </p>
      )}
    </div>
  )
}
