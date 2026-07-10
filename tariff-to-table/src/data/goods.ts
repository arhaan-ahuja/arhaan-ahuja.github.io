// Commonly-used goods that India taxes relatively heavily on import.
// Tariff rates are approximate, real-world ballpark figures (they change with
// policy) and are labelled as approximate in the UI.
//
// Goods are modelled by their *natural unit*:
//   - 'recurring'  → a household's typical spend PER YEAR (oil, clothes, etc.)
//   - 'durable'    → the price of ONE item bought occasionally (phone, TV)
//
// `amount` is a yearly spend (recurring) or a one-item price (durable), in ₹,
// for each income tier. Poorer households spend less in absolute terms, but a
// larger share of their income on everyday goods — which is why a tariff acts
// like a regressive tax. Figures are realistic but illustrative.

export type Tier = 'low' | 'middle' | 'high'

export interface Good {
  id: string
  name: string
  icon: string // lucide icon name
  kind: 'recurring' | 'durable'
  tariff: number // approx import tariff %
  importShare: number // share of the price that is imported / tariff-exposed
  amount: Record<Tier, number> // ₹: yearly spend (recurring) or item price (durable)
  note: string
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
    note: 'A kitchen staple bought all year round — India imports most of its edible oil.',
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
  },
  {
    id: 'almonds',
    name: 'Almonds & dry fruit',
    icon: 'Nut',
    kind: 'recurring',
    tariff: 40,
    importShare: 80,
    amount: { low: 2400, middle: 6000, high: 16800 },
    note: 'Mostly imported, bought through the year, and taxed at a high rate.',
  },
  {
    id: 'phone',
    name: 'Smartphone',
    icon: 'Smartphone',
    kind: 'durable',
    tariff: 20,
    importShare: 55,
    amount: { low: 9000, middle: 25000, high: 90000 },
    note: 'A one-off purchase every few years — phones and their parts face import duties.',
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
