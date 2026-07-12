import { Link } from 'react-router-dom'
import { SITE, NAV } from '../../data/site'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-navy-100 bg-white/60 dark:border-white/10 dark:bg-navy-950/60">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
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
              <li>
                <Link
                  to="/research"
                  className="text-navy-600 transition-colors hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400"
                >
                  Research Paper
                </Link>
              </li>
              <li>
                <Link
                  to="/sources"
                  className="text-navy-600 transition-colors hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400"
                >
                  Data Sources
                </Link>
              </li>
              <li>
                <Link
                  to="/references"
                  className="text-navy-600 transition-colors hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400"
                >
                  References
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
