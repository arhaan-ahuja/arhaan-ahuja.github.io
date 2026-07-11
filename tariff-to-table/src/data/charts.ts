// Datasets for the Data & Evidence page.
//
// Every series here is drawn from official statistics — not illustrative.
// Tariffs: World Bank / WITS (World Integrated Trade Solution). National
// accounts (trade openness, manufacturing share): World Bank. Household
// spending: India's official Household Consumption Expenditure Survey (MoSPI).
// Each chart on the page carries its exact source beneath it.

// India's MFN applied tariff — simple average, all products (%). The direct
// measure of protectionism; it rose through the protectionist turn, peaking in
// the RCEP-exit year (2019).
// Source: World Bank / WITS, TM.TAX.MRCH.SM.FN.ZS.
export const TARIFF_TREND = [
  { year: '2015', tariff: 13.2, label: 'Make in India' },
  { year: '2017', tariff: 13.8 },
  { year: '2019', tariff: 15.5, label: 'RCEP exit' },
  { year: '2020', tariff: 14.6, label: 'Atmanirbhar' },
  { year: '2022', tariff: 15.0 },
]

// India's tariff against other major economies — MFN applied simple average,
// all products (%), 2022. India stands out as the most protectionist.
// Source: World Bank / WITS, TM.TAX.MRCH.SM.FN.ZS (2022).
export const TARIFF_VS_PEERS = [
  { economy: 'USA', tariff: 3.5 },
  { economy: 'EU', tariff: 5.2 },
  { economy: 'China', tariff: 7.4 },
  { economy: 'Brazil', tariff: 13.5 },
  { economy: 'India', tariff: 15.0 },
]

// Trade openness (trade as % of GDP) — India climbed through liberalisation to
// a 2012 peak, then fell back during the protectionist turn. The post-2021
// uptick partly reflects higher global commodity prices.
// Source: World Bank, NE.TRD.GNFS.ZS.
export const TRADE_OPENNESS = [
  { year: '1991', openness: 17.0 },
  { year: '1995', openness: 22.9 },
  { year: '2004', openness: 37.5 },
  { year: '2008', openness: 53.4 },
  { year: '2012', openness: 55.8 },
  { year: '2016', openness: 40.1 },
  { year: '2020', openness: 37.8 },
  { year: '2022', openness: 50.7 },
]

// Manufacturing value added (% of GDP). "Make in India" targeted lifting this to
// 25%; instead its share has drifted down — protectionism did not deliver the
// promised broad industrial expansion.
// Source: World Bank, NV.IND.MANF.ZS.
export const MANUFACTURING_SHARE = [
  { year: '2011', share: 16.1 },
  { year: '2014', share: 15.1 },
  { year: '2016', share: 15.2 },
  { year: '2019', share: 13.5 },
  { year: '2022', share: 13.3 },
  { year: '2024', share: 13.1 },
]

// Average monthly per-capita consumption expenditure (MPCE, ₹) by fractile
// class, rural India. The poorest live on a fraction of the richest's budget and
// spend a far larger share of it on food and essentials — so a tariff-driven
// price rise is regressive.
// Source: MoSPI, Household Consumption Expenditure Survey 2022-23 (Statement 4).
export const MPCE_BY_FRACTILE = [
  { group: 'Poorest 5%', mpce: 1373 },
  { group: '20–30%', mpce: 2454 },
  { group: 'Middle', mpce: 3094 },
  { group: '70–80%', mpce: 4458 },
  { group: 'Richest 5%', mpce: 10501 },
]
