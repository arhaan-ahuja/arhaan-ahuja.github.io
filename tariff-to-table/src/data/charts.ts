// Datasets for the Data & Evidence page. Every series here is chosen to support
// the paper's central premise: that India has, in recent years, shifted toward
// trade protectionism. Figures are drawn from, or illustrative of, the trends
// discussed in the research paper; indicative series are marked in the caption.

// Average applied tariff trend (%) — the direct measure of protectionism.
// Indicative path around the 13.8% (2019) figure cited in the paper.
export const TARIFF_TREND = [
  { year: '2014', tariff: 12.5, label: 'Make in India' },
  { year: '2016', tariff: 13.0 },
  { year: '2018', tariff: 13.4 },
  { year: '2019', tariff: 13.8, label: 'RCEP exit' },
  { year: '2020', tariff: 14.3, label: 'Atmanirbhar' },
  { year: '2022', tariff: 15.0 },
]

// India's average tariff against other major economies — India stands out as
// comparatively protectionist. Simple-average applied tariffs, latest available.
export const TARIFF_VS_PEERS = [
  { economy: 'USA', tariff: 3.3 },
  { economy: 'EU', tariff: 5.1 },
  { economy: 'China', tariff: 7.5 },
  { economy: 'Brazil', tariff: 13.3 },
  { economy: 'India', tariff: 15.0 },
]

// Trade openness (trade as % of GDP) — India retreated from its 2008–12 peak as
// the protectionist turn took hold, reversing decades of opening.
export const TRADE_OPENNESS = [
  { year: '1991', openness: 16 },
  { year: '1995', openness: 23 },
  { year: '2004', openness: 38 },
  { year: '2008', openness: 53 },
  { year: '2012', openness: 55 },
  { year: '2016', openness: 41 },
  { year: '2020', openness: 38 },
]

// Mobile phone production (million units) — 60m (2014-15) → 310m+ (2021-22).
// Import substitution behind higher tariffs: domestic output replacing imports.
export const MOBILE_PRODUCTION = [
  { year: '2014-15', units: 60 },
  { year: '2016-17', units: 130 },
  { year: '2018-19', units: 225 },
  { year: '2020-21', units: 270 },
  { year: '2021-22', units: 310 },
]

// Illustrative: how a tariff-driven price rise hits household budgets by income
// group, reflecting the paper's argument that tariffs act as a regressive tax.
export const REGRESSIVE_BURDEN = [
  { group: 'Lowest 20%', spendShare: 78, burden: 3.1 },
  { group: 'Lower-mid', spendShare: 70, burden: 2.6 },
  { group: 'Middle', spendShare: 60, burden: 2.0 },
  { group: 'Upper-mid', spendShare: 48, burden: 1.4 },
  { group: 'Top 20%', spendShare: 35, burden: 0.9 },
]
