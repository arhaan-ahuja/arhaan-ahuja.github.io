import { Link } from 'react-router-dom'
import { SITE, NAV } from '../../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 border-t border-navy-100 bg-white/60 dark:border-white/10 dark:bg-navy-950/60">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
              Tariff<span className="text-gold-500"> to </span>Table
            </p>
            <p className="mt-3 max-w-sm text-sm text-navy-500 dark:text-navy-300">
              An interactive companion to independent research on India's shift
              toward trade protectionism and its effect on social and income
              inequality.
            </p>
            <p className="mt-4 text-sm text-navy-500 dark:text-navy-300">
              By {SITE.author}
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy-400">
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-navy-600 transition-colors hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-navy-400">
              Connect
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/research" className="inline-flex items-center gap-2 text-navy-600 transition-colors hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400">
                  Research Paper
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-navy-100 pt-6 text-xs text-navy-400 dark:border-white/10 sm:flex-row sm:items-center">
          <p>© {year} {SITE.author}. Educational project.</p>
          <p className="max-w-md text-right">
            Figures summarise the author's research paper; some series are
            illustrative of cited trends. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
