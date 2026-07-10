import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV } from '../../data/site'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-navy-50/95 backdrop-blur-sm transition-colors duration-300 dark:bg-navy-950/95 ${
        scrolled
          ? 'border-navy-200 dark:border-navy-800'
          : 'border-transparent'
      }`}
    >
      <nav className="container-wide flex h-16 items-center justify-between">
        <Link
          to="/"
          className="group flex items-baseline gap-2"
          aria-label="Tariff to Table — home"
        >
          <span className="font-serif text-xl font-semibold tracking-tight text-navy-900 dark:text-navy-50">
            Tariff to Table
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-gold-600 dark:text-gold-400'
                    : 'text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-navy-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-navy-300 text-navy-700 lg:hidden dark:border-navy-700 dark:text-navy-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-200 bg-navy-50 lg:hidden dark:border-navy-800 dark:bg-navy-950"
          >
            <div className="container-wide grid grid-cols-2 gap-1 py-4">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gold-600/10 text-gold-600 dark:text-gold-400'
                        : 'text-navy-700 hover:bg-navy-100 dark:text-navy-100 dark:hover:bg-navy-900'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
