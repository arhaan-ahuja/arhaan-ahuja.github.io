import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="container-px flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-serif text-7xl font-semibold text-gold-500">404</p>
      <h1 className="mt-4 text-2xl font-semibold">This page didn't make it past customs</h1>
      <p className="mt-2 max-w-md text-navy-500 dark:text-navy-300">
        The page you're looking for doesn't exist. Let's route you back to
        familiar territory.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" /> Back home
      </Link>
    </section>
  )
}
