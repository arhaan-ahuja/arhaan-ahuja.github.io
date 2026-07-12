// Commonly-used goods that India taxes relatively heavily on import.
//
// TARIFF RATES are approximate but real: each reflects India's actual import
// duty (basic customs duty, or the effective duty where cesses matter), sourced
// in `source` below. They are verified against official Budget / CBIC / PIB
// figures as of 2025 and labelled "approximate" in the UI because policy shifts.
//
// Goods are modelled by their *natural unit*:
//   - 'recurring'  → a household's typical spend PER YEAR (oil, clothes, etc.)
//   - 'durable'    → the price of ONE item bought occasionally (phone, TV)
//
// `amount` (yearly spend or one-item price, in ₹, per tier) and `importShare`
// are realistic MODELLED estimates, not exact survey values. Each amount is set
// as a plausible share of that tier's yearly household budget, grounded in the
// Household Consumption Expenditure Survey (HCES 2022-23) and real per-capita
// consumption (e.g. India uses ~23.5 kg of edible oil per person per year, so a
// ~5-person lower-income household spending ₹7,800/yr on oil ≈ 4% of a ₹18k/mo
// budget). Richer households spend more in rupees but a SMALLER share of income
// on essentials (Engel's law) — which is why a tariff acts like a regressive tax.
// The "How these figures are estimated" panel on the Simulator page explains this.

export type Tier = 'low' | 'middle' | 'high'

export interface Good {
  id: string
  name: string
  icon: string // lucide icon name
  kind: 'recurring' | 'durable'
  tariff: number // approx import tariff % (see `source`)
  importShare: number // share of the price that is imported / tariff-exposed
  amount: Record<Tier, number> // ₹: yearly spend (recurring) or item price (durable)
  note: string
  source: string // citation for the tariff rate
}

export const GOODS: Good[] = [
  {
    id: 'oil',
    name: 'Cooking oil',
    icon: 'Droplet',
    kind: 'recurring',
    tariff: 35,
    importShare: 60,
    amount: { low: 7800, middle: 11400, high: 19200 },
    note: 'A kitchen staple bought all year round — India imports over half of its edible oil.',
    source:
      'Effective import duty on refined edible oils ≈ 35.75% in 2025 (crude edible oils were cut to ~16.5% in May 2025). Source: Ministry of Finance / CBIC notifications, 2024–25.',
  },
  {
    id: 'clothes',
    name: 'Clothes & shoes',
    icon: 'Shirt',
    kind: 'recurring',
    tariff: 25,
    importShare: 35,
    amount: { low: 6000, middle: 15000, high: 42000 },
    note: 'Bought a few times a year — apparel and footwear carry sizeable import duties.',
    source:
      'Basic customs duty on apparel is ~20%, and on footwear 20–35%. Source: CBIC Customs Tariff.',
  },
  {
    id: 'toys',
    name: 'Toys',
    icon: 'Gamepad2',
    kind: 'recurring',
    tariff: 70,
    importShare: 50,
    amount: { low: 3000, middle: 7000, high: 18000 },
    note: 'India raised toy tariffs sharply to cut cheap imports.',
    source:
      'Basic customs duty on toys is 70% (raised from 60% in Feb 2023, and from 20% in 2020). Source: CBIC / PIB, 2023.',
  },
  {
    id: 'almonds',
    name: 'Almonds & dry fruit',
    icon: 'Nut',
    kind: 'recurring',
    tariff: 30,
    importShare: 80,
    amount: { low: 2400, middle: 6000, high: 16800 },
    note: 'Mostly imported and bought through the year. Duties vary widely across the basket.',
    source:
      'Dry-fruit duties range widely — walnuts 100%, dates ~30%; almonds are taxed per kilo (₹100/kg shelled ≈ ~15% of value). ~30% is a representative basket rate. Source: CBIC Customs Tariff.',
  },
  {
    id: 'phone',
    name: 'Smartphone',
    icon: 'Smartphone',
    kind: 'durable',
    tariff: 15,
    importShare: 55,
    amount: { low: 9000, middle: 25000, high: 90000 },
    note: 'A one-off purchase every few years — phones and their parts face import duties.',
    source:
      'Basic customs duty on mobile phones is 15% (cut from 20% in the July 2024 Budget). Source: Ministry of Finance, Union Budget 2024.',
  },
  {
    id: 'tv',
    name: 'Television',
    icon: 'Tv',
    kind: 'durable',
    tariff: 20,
    importShare: 45,
    amount: { low: 18000, middle: 35000, high: 120000 },
    note: 'A one-off purchase — imported TVs and panels are taxed to favour local makers.',
    source:
      'Basic customs duty on finished TVs and flat-panel displays is 20% (Budget 2025-26). Source: Ministry of Finance.',
  },
]

export interface IncomeTier {
  id: Tier
  label: string
  income: number // ₹ per month (default, adjustable)
  min: number
  max: number
}

// Illustrative monthly household incomes for India, adjustable by the user.
export const INCOME_TIERS: IncomeTier[] = [
  { id: 'low', label: 'Lower-income family', income: 18000, min: 8000, max: 40000 },
  { id: 'middle', label: 'Middle-class family', income: 55000, min: 30000, max: 150000 },
  { id: 'high', label: 'High-income family', income: 250000, min: 100000, max: 1000000 },
]
