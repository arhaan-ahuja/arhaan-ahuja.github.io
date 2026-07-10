// Datasets for the Visualizations page. Figures are drawn from, or illustrative
// of, the trends discussed in the research paper. Where a series is indicative
// rather than an exact official statistic, it is marked in the chart caption.

// Manufacturing as a share of GDP — the paper cites 16.3% (FY14) → 14.7% (FY19).
export const MANUFACTURING_SHARE = [
  { year: 'FY14', share: 16.3 },
  { year: 'FY15', share: 16.0 },
  { year: 'FY16', share: 15.6 },
  { year: 'FY17', share: 15.3 },
  { year: 'FY18', share: 15.1 },
  { year: 'FY19', share: 14.7 },
]

// Trade flows ($bn) — paper cites exports $274.8bn → $544.7bn and imports
// $348.4bn → $613.65bn between FY10 and FY22.
export const TRADE_FLOWS = [
  { year: 'FY10', exports: 274.8, imports: 348.4 },
  { year: 'FY13', exports: 360, imports: 470 },
  { year: 'FY16', exports: 410, imports: 500 },
  { year: 'FY19', exports: 480, imports: 560 },
  { year: 'FY22', exports: 544.7, imports: 613.65 },
]

// Mobile phone production (million units) — 60m (2014-15) → 310m+ (2021-22).
export const MOBILE_PRODUCTION = [
  { year: '2014-15', units: 60 },
  { year: '2016-17', units: 130 },
  { year: '2018-19', units: 225 },
  { year: '2020-21', units: 270 },
  { year: '2021-22', units: 310 },
]

// Average applied tariff trend (%) — indicative path around the cited 13.8% (2019).
export const TARIFF_TREND = [
  { year: '2014', tariff: 12.5, label: 'Make in India' },
  { year: '2016', tariff: 13.0 },
  { year: '2018', tariff: 13.4 },
  { year: '2019', tariff: 13.8, label: 'RCEP exit' },
  { year: '2020', tariff: 14.3, label: 'Atmanirbhar' },
  { year: '2022', tariff: 15.0 },
]

// Poverty ratio (%) after liberalisation — 45% (1993-94) → 32% (2009-10).
export const POVERTY_RATIO = [
  { year: '1993-94', ratio: 45 },
  { year: '1999-00', ratio: 40 },
  { year: '2004-05', ratio: 37 },
  { year: '2009-10', ratio: 32 },
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

// Trade openness (trade as % of GDP) — illustrative arc of India's journey.
export const TRADE_OPENNESS = [
  { year: '1990', openness: 15 },
  { year: '1995', openness: 23 },
  { year: '2000', openness: 28 },
  { year: '2008', openness: 53 },
  { year: '2014', openness: 49 },
  { year: '2019', openness: 40 },
  { year: '2022', openness: 46 },
]
