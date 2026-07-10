import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { IndianRupee, TrendingUp, Info } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { tooltipStyle } from '../components/ui/ChartCard'
import { usePageMeta } from '../hooks/usePageMeta'

const COUNTRIES = ['China', 'United States', 'European Union', 'Japan', 'South Korea', 'Other']

interface Preset {
  name: string
  tariff: number
  importShare: number
}
const PRODUCTS: Preset[] = [
  { name: 'Smartphone / electronics', tariff: 20, importShare: 60 },
  { name: 'Home appliances (AC, TV)', tariff: 18, importShare: 45 },
  { name: 'Automobile / EV', tariff: 70, importShare: 30 },
  { name: 'Apparel & footwear', tariff: 12, importShare: 35 },
  { name: 'Edible oils', tariff: 35, importShare: 55 },
  { name: 'Furniture', tariff: 25, importShare: 40 },
  { name: 'Custom', tariff: 15, importShare: 50 },
]

const inr = (n: number) =>
  '₹' + Math.round(n).toLocaleString('en-IN')

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-700 dark:text-navy-100">
        {label}
      </span>
      {children}
    </label>
  )
}

const inputCls =
  'w-full rounded-xl border border-navy-200 bg-white px-4 py-2.5 text-navy-900 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 dark:border-white/15 dark:bg-navy-900 dark:text-white'

export default function Calculator() {
  usePageMeta(
    'Tariff Calculator',
    'Estimate how a tariff on the goods you buy changes your monthly and annual spending.'
  )

  const [country, setCountry] = useState(COUNTRIES[0])
  const [productIdx, setProductIdx] = useState(0)
  const [spending, setSpending] = useState(4000)
  const [tariff, setTariff] = useState(PRODUCTS[0].tariff)
  const [importShare, setImportShare] = useState(PRODUCTS[0].importShare)

  function selectProduct(idx: number) {
    setProductIdx(idx)
    setTariff(PRODUCTS[idx].tariff)
    setImportShare(PRODUCTS[idx].importShare)
  }

  const result = useMemo(() => {
    const importedSpend = spending * (importShare / 100)
    const monthlyIncrease = importedSpend * (tariff / 100)
    const annualIncrease = monthlyIncrease * 12
    const pct = spending > 0 ? (monthlyIncrease / spending) * 100 : 0
    return { monthlyIncrease, annualIncrease, pct, newMonthly: spending + monthlyIncrease }
  }, [spending, tariff, importShare])

  const chartData = [
    { name: 'Before tariff', value: spending, fill: '#3f5d73' },
    { name: 'After tariff', value: result.newMonthly, fill: '#9a3b2c' },
  ]

  return (
    <>
      <PageHeader
        eyebrow="Tariff Calculator"
        title="What does a tariff cost you?"
        intro="Enter what you spend on a category of goods, how much of it is imported, and the tariff rate — and see the impact on your budget."
      />

      <section className="container-px py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Inputs */}
          <Reveal>
            <div className="card p-6 sm:p-8">
              <h2 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                Your inputs
              </h2>
              <div className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Country of origin">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className={inputCls}
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Product category">
                    <select
                      value={productIdx}
                      onChange={(e) => selectProduct(Number(e.target.value))}
                      className={inputCls}
                    >
                      {PRODUCTS.map((p, i) => (
                        <option key={p.name} value={i}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label={`Estimated monthly spending — ${inr(spending)}`}>
                  <input
                    type="range"
                    min={200}
                    max={50000}
                    step={100}
                    value={spending}
                    onChange={(e) => setSpending(Number(e.target.value))}
                    className="w-full accent-gold-500"
                  />
                </Field>

                <Field label={`Current tariff rate — ${tariff}%`}>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={tariff}
                    onChange={(e) => {
                      setTariff(Number(e.target.value))
                      setProductIdx(PRODUCTS.length - 1)
                    }}
                    className="w-full accent-gold-500"
                  />
                </Field>

                <Field label={`Imported share of this spending — ${importShare}%`}>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={importShare}
                    onChange={(e) => {
                      setImportShare(Number(e.target.value))
                      setProductIdx(PRODUCTS.length - 1)
                    }}
                    className="w-full accent-gold-500"
                  />
                </Field>
              </div>
            </div>
          </Reveal>

          {/* Results */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-3">
                <ResultStat
                  icon={<IndianRupee className="h-4 w-4" />}
                  label="Extra per month"
                  value={inr(result.monthlyIncrease)}
                  accent
                />
                <ResultStat
                  icon={<TrendingUp className="h-4 w-4" />}
                  label="Extra per year"
                  value={inr(result.annualIncrease)}
                />
                <ResultStat
                  label="Spending increase"
                  value={`+${result.pct.toFixed(1)}%`}
                />
              </div>

              <div className="card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500 dark:text-navy-300">
                  Monthly spending: before vs after
                </h3>
                <div className="mt-4 h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#8a8478' }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 12, fill: '#8a8478' }} axisLine={false} tickLine={false} width={70} tickFormatter={(v) => inr(v)} />
                      <Tooltip
                        contentStyle={tooltipStyle}
                        formatter={(v: any) => [inr(v), 'Monthly']}
                        cursor={{ fill: 'rgba(127,147,194,0.1)' }}
                      />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={80}>
                        {chartData.map((d, i) => (
                          <Cell key={i} fill={d.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <motion.div
                key={result.monthlyIncrease}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                className="rounded-2xl border border-gold-400/30 bg-gold-500/5 p-6"
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-400">
                  <Info className="h-4 w-4" /> Why this happens
                </p>
                <p className="mt-2 text-navy-600 dark:text-navy-200">
                  About <strong>{importShare}%</strong> of your {inr(spending)} monthly
                  spend on {PRODUCTS[productIdx].name.toLowerCase()} is imported
                  {country !== 'Other' ? ` from ${country}` : ''}. A{' '}
                  <strong>{tariff}% tariff</strong> taxes that imported portion,
                  and businesses typically pass most of that cost on to consumers.
                  The result is roughly <strong>{inr(result.monthlyIncrease)}</strong> more
                  each month — <strong>{inr(result.annualIncrease)}</strong> a year — for the
                  same basket of goods. Because lower-income households spend a
                  larger share of their income on essentials, the same percentage
                  increase hits them hardest.
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>

        <p className="mt-8 text-center text-xs text-navy-400">
          Simplified model assuming near-full pass-through of the tariff to
          consumers. Illustrative, not a precise forecast.
        </p>
      </section>
    </>
  )
}

function ResultStat({
  icon,
  label,
  value,
  accent,
}: {
  icon?: React.ReactNode
  label: string
  value: string
  accent?: boolean
}) {
  return (
    <div
      className={`card p-5 ${
        accent ? 'border-gold-400/40 bg-gold-500/5' : ''
      }`}
    >
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy-500 dark:text-navy-300">
        {icon} {label}
      </p>
      <p
        className={`mt-2 font-serif text-2xl font-semibold ${
          accent ? 'text-gold-500' : 'text-navy-900 dark:text-white'
        }`}
      >
        {value}
      </p>
    </div>
  )
}
