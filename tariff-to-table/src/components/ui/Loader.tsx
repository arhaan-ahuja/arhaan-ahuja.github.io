import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-50 dark:bg-navy-950"
    >
      <p className="font-serif text-2xl font-semibold tracking-tight text-navy-900 dark:text-navy-50">
        Tariff to Table
      </p>
      <div className="mt-5 h-px w-40 overflow-hidden bg-navy-200 dark:bg-navy-800">
        <motion.div
          className="h-full bg-gold-600"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
