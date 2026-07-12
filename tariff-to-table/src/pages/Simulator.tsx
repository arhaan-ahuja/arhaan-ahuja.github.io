import { useMemo, useState } from 'react'
import {
  Droplet,
  Smartphone,
  Tv,
  Shirt,
  Gamepad2,
  Nut,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import ExpandableSection from '../components/ui/ExpandableSection'
import { usePageMeta } from '../hooks/usePageMeta'
import { GOODS, INCOME_TIERS, type Tier } from '../data/goods'

const ICONS: Record<string, LucideIcon> = {
  Droplet,
  Smartphone,
  Tv,
  Shirt,
  Gamepad2,
  Nut,
}

// Concrete, sourced figures the spending model is built on — shown in the
// "How these figures are estimated" panel so every assumption is traceable.
const KEY_FIGURES: { value: string; label: string; source: string }[] = [
  {
    value: '₹3,773 rural · ₹6,459 urban',
    label: 'Average monthly spending per person',
    source: 'HCES 2022-23, MoSPI',
  },
  {
    value: '₹1,373 → ₹10,501 (rural)',
    label: "Poorest 5% vs richest 5% — monthly spend per person, showing the gap the model reflects",
    source: 'HCES 2022-23, MoSPI',
  },
  {
    value: '~46% rural · ~39% urban',
    label: 'Share of a household budget spent on food — much higher for poorer families',
    source: 'HCES 2022-23, MoSPI',
  },
  {
    value: '~4.4 people',
    label: 'Average Indian household size used to scale per-person figures',
    source: 'Census / NFHS-5',
  },
  {
    value: '23.5 kg per person / year',
    label: 'Edible-oil consumption (2023) — the basis for the cooking-oil estimate',
    source: 'Dept. of Food & Public Distribution',
  },
]

const inr = (n: number) => '₹' + Math.round(n).toLocaleString('en-IN')

// Friendly Indian large-number label, e.g. ₹1 crore, ₹55 lakh, ₹18,000.
function humanINR(n: number) {
  if (n >= 1e7) return `₹${+(n / 1e7).toFixed(2)} crore`
  if (n >= 1e5) return `₹${+(n / 1e5).toFixed(2)} lakh`
  return inr(n)
}

export default function Simulator() {
  usePageMeta(
    'Who pays the tariff?',
    'See how an import tariff on everyday goods costs a low-, middle- and high-income Indian household — in rupees and as a share of income.'
  )

  const [goodId, setGoodId] = useState(GOODS[0].id)
  const good = GOODS.find((g) => g.id === goodId)!
  const [tariff, setTariff] = useState(good.tariff)
  const [income, setIncome] = useState<Record<Tier, number>>({
    low: INCOME_TIERS[0].income,
    middle: INCOME_TIERS[1].income,
    high: INCOME_TIERS[2].income,
  })

  function pickGood(id: string) {
    setGoodId(id)
    setTariff(GOODS.find((g) => g.id === id)!.tariff)
  }

  const rows = useMemo(() => {
    const data = INCOME_TIERS.map((t) => {
      const amount = good.amount[t.id]
      const extra = amount * (good.importShare / 100) * (tariff / 100)
      const annualIncome = income[t.id] * 12
      const burden = annualIncome > 0 ? (extra / annualIncome) * 100 : 0
      return { tier: t, amount, extra, burden }
    })
    const maxBurden = Math.max(...data.map((d) => d.burden), 0.0001)
    return data.map((d) => ({ ...d, barPct: (d.burden / maxBurden) * 100 }))
  }, [good, tariff, income])

  const isDurable = good.kind === 'durable'

  const hardest = rows.reduce((a, b) => (b.burden > a.burden ? b : a), rows[0])

  return (
    <>
      <PageHeader
        eyebrow="Tariff Impact"
        title="Who pays the tariff?"
        intro="A tariff is a tax on goods coming from abroad. Pick something India taxes, set the rate, and watch how the same tariff takes a very different bite out of each family's budget."
      />

      <section className="container-px py-12">
        {/* Step 1 — pick a good */}
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="h-px w-7 bg-gold-600" /> Step 1 · Pick something to buy
          </p>
          <div className="flex flex-wrap gap-2.5">
            {GOODS.map((g) => {
              const Icon = ICONS[g.icon]
              const active = g.id === goodId
              return (
                <button
                  key={g.id}
                  onClick={() => pickGood(g.id)}
                  className={`inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? 'border-gold-600 bg-gold-600 text-white'
                      : 'border-navy-300 text-navy-700 hover:border-navy-900 dark:border-navy-700 dark:text-navy-100'
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {g.name}
                </button>
              )
            })}
          </div>
          <p className="mt-3 text-sm text-navy-500 dark:text-navy-400">{good.note}</p>
          <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-navy-400 dark:text-navy-500">
            {good.source}
          </p>
        </Reveal>

        {/* Step 2 — set tariff */}
        <Reveal>
          <div className="mt-12 max-w-2xl">
            <p className="eyebrow mb-4">
              <span className="h-px w-7 bg-gold-600" /> Step 2 · Set the import tax
            </p>
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-semibold text-navy-700 dark:text-navy-100">
                Tariff on imported {good.name.toLowerCase()}
              </span>
              <span className="font-serif text-3xl font-semibold text-gold-600 dark:text-gold-400">
                {tariff}%
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={tariff}
              onChange={(e) => setTariff(Number(e.target.value))}
              className="mt-3 w-full accent-gold-600"
            />
            <div className="mt-2 flex items-center justify-between text-sm text-navy-500 dark:text-navy-400">
              <span>India's real rate is about {good.tariff}%.</span>
              {tariff !== good.tariff && (
                <button
                  onClick={() => setTariff(good.tariff)}
                  className="inline-flex items-center gap-1.5 font-medium hover:text-gold-600 dark:hover:text-gold-400"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Reset to real rate
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* Step 3 — three families */}
        <Reveal>
          <p className="eyebrow mb-4 mt-12">
            <span className="h-px w-7 bg-gold-600" /> Step 3 · See who pays the most
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {rows.map((r, i) => {
            const t = INCOME_TIERS[i]
            const isHardest = r.tier.id === hardest.tier.id
            return (
              <Reveal key={r.tier.id} delay={i * 0.06}>
                <div
                  className={`card flex h-full flex-col p-6 ${
                    isHardest ? 'border-gold-600 ring-1 ring-gold-600/30' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-navy-900 dark:text-navy-50">
                      {r.tier.label}
                    </h3>
                    {isHardest && (
                      <span className="rounded-full bg-gold-600/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-400">
                        Hit hardest
                      </span>
                    )}
                  </div>

                  {/* Income (type any amount, or drag) */}
                  <div className="mt-4">
                    <label className="text-sm text-navy-500 dark:text-navy-300">
                      Monthly income — type any amount
                    </label>
                    <div className="mt-1.5 flex items-center rounded-md border border-navy-300 focus-within:border-gold-600 dark:border-navy-700">
                      <span className="pl-3 text-navy-400">₹</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={income[r.tier.id].toLocaleString('en-IN')}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/[^\d]/g, '')
                          const n = digits === '' ? 0 : Math.min(parseInt(digits, 10), 1e9)
                          setIncome((prev) => ({ ...prev, [r.tier.id]: n }))
                        }}
                        aria-label={`${r.tier.label} monthly income in rupees`}
                        className="w-full bg-transparent px-2 py-2 font-semibold text-navy-900 outline-none dark:text-navy-50"
                      />
                      <span className="pr-3 text-xs text-navy-400">/mo</span>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      <input
                        type="range"
                        min={t.min}
                        max={t.max}
                        step={1000}
                        value={Math.min(income[r.tier.id], t.max)}
                        onChange={(e) =>
                          setIncome((prev) => ({
                            ...prev,
                            [r.tier.id]: Number(e.target.value),
                          }))
                        }
                        className="w-full accent-navy-400"
                      />
                      <span className="whitespace-nowrap text-xs font-medium text-navy-500 dark:text-navy-400">
                        {humanINR(income[r.tier.id])}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-navy-500 dark:text-navy-300">
                    {isDurable ? (
                      <>
                        Buys a {good.name.toLowerCase()} costing about{' '}
                        <span className="font-semibold text-navy-800 dark:text-navy-100">
                          {inr(r.amount)}
                        </span>
                        .
                      </>
                    ) : (
                      <>
                        Spends about{' '}
                        <span className="font-semibold text-navy-800 dark:text-navy-100">
                          {inr(r.amount)}
                        </span>{' '}
                        a year on {good.name.toLowerCase()}.
                      </>
                    )}
                  </p>

                  {/* Extra cost */}
                  <div className="mt-4 border-t border-navy-100 pt-4 dark:border-navy-800">
                    <p className="font-serif text-3xl font-semibold text-navy-900 dark:text-navy-50">
                      +{inr(r.extra)}
                      <span className="ml-1 text-base font-sans font-medium text-navy-500 dark:text-navy-400">
                        {isDurable ? `on one ${good.name.toLowerCase()}` : 'a year'}
                      </span>
                    </p>
                    <p className="mt-0.5 text-sm text-navy-500 dark:text-navy-400">
                      {isDurable
                        ? 'a one-time cost, paid when they buy it'
                        : `that's about +${inr(r.extra / 12)} a month`}
                    </p>
                  </div>

                  {/* Burden bar */}
                  <div className="mt-auto pt-5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-navy-500 dark:text-navy-300">
                        Share of a year's income
                      </span>
                      <span className="font-serif text-lg font-semibold text-gold-600 dark:text-gold-400">
                        {r.burden.toFixed(2)}%
                      </span>
                    </div>
                    <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800">
                      <div
                        className="h-full rounded-full bg-gold-600 transition-all duration-500"
                        style={{ width: `${r.barPct}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Per-item basis — how each tier's amount was worked out */}
        <Reveal>
          <div className="card mt-8 p-6">
            <p className="eyebrow mb-3">
              <span className="h-px w-7 bg-gold-600" /> How we got these amounts for {good.name.toLowerCase()}
            </p>
            <p className="text-sm leading-relaxed text-navy-600 dark:text-navy-200">
              {good.basis.note}
            </p>
            <dl className="mt-4 space-y-0">
              {[
                { label: INCOME_TIERS[0].label, calc: good.basis.low },
                { label: INCOME_TIERS[1].label, calc: good.basis.middle },
                { label: INCOME_TIERS[2].label, calc: good.basis.high },
              ].map((r) => (
                <div
                  key={r.label}
                  className="flex flex-col gap-0.5 border-t border-navy-100 py-2.5 dark:border-navy-800 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="text-sm font-semibold text-navy-700 dark:text-navy-100">
                    {r.label}
                  </dt>
                  <dd className="text-sm text-navy-500 dark:text-navy-300 sm:text-right">
                    {r.calc}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-navy-400 dark:text-navy-500">
              Rounded, realistic estimates grounded in HCES 2022-23 and typical
              Indian consumption — not exact survey values.
            </p>
          </div>
        </Reveal>

        {/* Takeaway */}
        <Reveal>
          <div className="mt-10 border-l-[3px] border-gold-600 bg-white px-6 py-5 dark:bg-navy-900/50">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
              The big idea
            </p>
            <p className="mt-2 max-w-3xl leading-relaxed text-navy-700 dark:text-navy-200">
              Notice the pattern: the <strong>{hardest.tier.label.toLowerCase()}</strong>{' '}
              pays the fewest rupees, yet loses the <strong>biggest slice</strong> of
              its income — because poorer families spend a larger share of what they
              earn on everyday goods. A tax that hurts poorer people more than richer
              ones is called a <strong>regressive tax</strong>. That is the heart of
              this research: tariffs can protect Indian industry, but the price rise
              they cause falls hardest on those who can least afford it — and the gap
              is widest for everyday essentials, like cooking oil, that poorer
              families can't avoid buying.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 max-w-3xl">
            <ExpandableSection
              title="How these figures are estimated"
              subtitle="Where the tariff rates, incomes and spending amounts come from — and why they're realistic."
            >
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  <strong>Tariff rates are real.</strong> Each rate is India's
                  actual approximate import duty, cited under the good you pick
                  above (from Ministry of Finance / CBIC / PIB figures, 2024–25).
                </p>
                <p>
                  <strong>Household incomes are illustrative</strong> starting
                  points you can change to your own numbers. The three tiers are
                  meant to span a realistic range for India, not to be exact.
                </p>
                <p>
                  <strong>Spending is modelled, not guessed.</strong> Each amount
                  is a plausible share of that household's yearly budget, grounded
                  in India's official Household Consumption Expenditure Survey
                  (HCES 2022-23) and real per-person consumption. The exact
                  arithmetic for the good you pick — for a lower-, middle- and
                  high-income family — is shown in the{' '}
                  <em>"How we got these amounts"</em> box just above. Richer
                  households spend more in rupees but a <em>smaller share</em> of
                  income on essentials — the pattern (Engel's law) that makes a
                  tariff regressive.
                </p>

                <div className="rounded-md border border-navy-200 bg-navy-50 p-4 dark:border-navy-800 dark:bg-navy-950/40">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
                    The specific numbers behind the model
                  </p>
                  <dl className="mt-3 space-y-2.5">
                    {KEY_FIGURES.map((f) => (
                      <div key={f.label} className="flex flex-col gap-0.5">
                        <dt className="font-semibold text-navy-800 dark:text-navy-100">
                          {f.value}
                        </dt>
                        <dd className="text-navy-500 dark:text-navy-300">
                          {f.label}{' '}
                          <span className="text-navy-400 dark:text-navy-500">
                            — {f.source}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <p className="text-navy-400 dark:text-navy-500">
                  The model assumes the tariff is fully passed on to shoppers, so
                  it shows the upper end of the price effect. A simple educational
                  tool, not a precise forecast.
                </p>
              </div>
            </ExpandableSection>
          </div>
        </Reveal>
      </section>
    </>
  )
}
