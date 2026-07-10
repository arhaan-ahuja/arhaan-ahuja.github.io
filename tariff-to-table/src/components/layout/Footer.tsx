import { Link } from 'react-router-dom'
import { Mail, ExternalLink } from 'lucide-react'
import { SITE, NAV } from '../../data/site'

function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.92 1.23 3.23 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

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
              <li>
                <a href={SITE.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-navy-600 transition-colors hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-navy-600 transition-colors hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={SITE.links.email} className="inline-flex items-center gap-2 text-navy-600 transition-colors hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400">
                  <Mail className="h-4 w-4" /> Contact
                </a>
              </li>
              <li>
                <a href={SITE.links.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-navy-600 transition-colors hover:text-gold-600 dark:text-navy-200 dark:hover:text-gold-400">
                  <ExternalLink className="h-4 w-4" /> Portfolio
                </a>
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
