import { motion } from 'framer-motion'

interface PageHeaderProps {
  eyebrow: string
  title: string
  intro?: string
}

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="border-b border-navy-200 dark:border-navy-800">
      <div className="container-px py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">
            <span className="h-px w-7 bg-gold-600" />
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-[2.9rem]">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-600 dark:text-navy-300">
              {intro}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
