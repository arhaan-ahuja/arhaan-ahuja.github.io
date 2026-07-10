import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Loader from './components/ui/Loader'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Research = lazy(() => import('./pages/Research'))
const Calculator = lazy(() => import('./pages/Calculator'))
const Simulator = lazy(() => import('./pages/Simulator'))
const Timeline = lazy(() => import('./pages/Timeline'))
const Learn = lazy(() => import('./pages/Learn'))
const Visualizations = lazy(() => import('./pages/Visualizations'))
const FAQ = lazy(() => import('./pages/FAQ'))
const References = lazy(() => import('./pages/References'))
const NotFound = lazy(() => import('./pages/NotFound'))

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/simulator" element={<Simulator />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/visualizations" element={<Visualizations />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/references" element={<References />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <ScrollToTop />
      <div id="content" className="flex-1 pt-16">
        <AnimatedRoutes />
      </div>
      <Footer />
    </div>
  )
}
