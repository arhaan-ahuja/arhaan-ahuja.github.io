// Every official dataset, figure and tariff rate used in the interactive tools
// and charts, with a direct link and what it feeds. Primary government / official
// sources are preferred throughout. Items also cited in the research paper are
// flagged with `alsoInPaper` and appear again in the bibliography below.

export interface DataSource {
  title: string
  publisher: string
  year: string
  usedFor: string // where on the site this figure is used
  url?: string
  alsoInPaper?: boolean // also listed in the research-paper bibliography
}

export interface DataSourceGroup {
  category: string
  intro: string
  items: DataSource[]
}

export const DATA_SOURCES: DataSourceGroup[] = [
  {
    category: 'Import tariff rates',
    intro:
      'The rates in the "Who pays the tariff?" simulator and the Tariff Calculator.',
    items: [
      {
        title: 'Highlights of the Union Budget 2024-25 — basic customs duty on mobile phones cut to 15%',
        publisher: 'Press Information Bureau · Ministry of Finance, Government of India',
        year: '2024',
        usedFor: 'Smartphone tariff (15%)',
        url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2035609',
      },
      {
        title: 'Reduction in basic customs duty on crude edible oils (crude ~16.5% effective; refined ~35.75%)',
        publisher: 'Press Information Bureau · Ministry of Finance, Government of India',
        year: '2025',
        usedFor: 'Cooking-oil tariff (~35%)',
        url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2135774',
      },
      {
        title: 'Highlights of the Union Budget 2025-26 — customs duty on finished flat-panel displays / TVs raised to 20%',
        publisher: 'Press Information Bureau · Ministry of Finance, Government of India',
        year: '2025',
        usedFor: 'Television tariff (20%)',
        url: 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2098353',
      },
      {
        title: 'Customs Tariff of India — statutory duty schedule (toys 70%; apparel ~20%; footwear 20–35%; dry-fruit specific duties)',
        publisher: 'Central Board of Indirect Taxes & Customs (CBIC), Government of India',
        year: '2025',
        usedFor:
          'Toys (70%), Clothes & shoes (25%) and Almonds & dry fruit (~30%) tariffs',
        url: 'https://www.cbic.gov.in/',
      },
      {
        title: 'India says high tariffs on cars/EVs protect the domestic market',
        publisher: 'Reuters (via ThePrint)',
        year: '2024',
        usedFor: 'Automobile / EV preset in the Calculator (70%)',
        url: 'https://theprint.in/economy/india-says-high-tariffs-on-evs-to-protect-from-chinese-imports/2131433/',
        alsoInPaper: true,
      },
    ],
  },
  {
    category: 'Household spending & consumption',
    intro:
      'The basis for the modelled per-family spending amounts in the simulator.',
    items: [
      {
        title: 'Household Consumption Expenditure Survey 2022-23 — Fact Sheet (MPCE, fractile classes, food share)',
        publisher: 'Ministry of Statistics & Programme Implementation (MoSPI), Government of India',
        year: '2024',
        usedFor:
          'Average spending per person (₹3,773 rural / ₹6,459 urban), the poorest-vs-richest gap, and the food share of budgets',
        url: 'https://www.mospi.gov.in/sites/default/files/publication_reports/Factsheet_HCES_2022-23.pdf',
        alsoInPaper: true,
      },
      {
        title: 'Report on edible oils — per-capita consumption ~19.7 kg per person per year',
        publisher: 'NITI Aayog, Government of India (via Press Information Bureau)',
        year: '2024',
        usedFor: 'The cooking-oil spending estimate',
        url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2049737',
      },
    ],
  },
  {
    category: 'Tariffs, trade & the economy (charts)',
    intro: 'The official data behind the figures on the Data & Evidence page.',
    items: [
      {
        title: 'World Integrated Trade Solution (WITS) & World Development Indicators — India tariff, trade and manufacturing data',
        publisher: 'The World Bank',
        year: '2024',
        usedFor:
          "Figures 1–4: India's average tariff, tariff vs peers, trade openness and manufacturing share",
        url: 'https://wits.worldbank.org/CountryProfile/en/IND',
        alsoInPaper: true,
      },
      {
        title: 'Household Consumption Expenditure Survey 2022-23 — average MPCE by fractile class',
        publisher: 'Ministry of Statistics & Programme Implementation (MoSPI), Government of India',
        year: '2024',
        usedFor: 'Figure 5: the regressive-burden chart',
        url: 'https://www.mospi.gov.in/sites/default/files/publication_reports/Factsheet_HCES_2022-23.pdf',
        alsoInPaper: true,
      },
      {
        title: 'Electronics & mobile-phone manufacturing in India (domestic production and self-sufficiency)',
        publisher: 'India Brand Equity Foundation (IBEF), Ministry of Commerce & Industry',
        year: '2024',
        usedFor: 'The ~97% phone self-sufficiency figure noted with the manufacturing chart',
        url: 'https://www.ibef.org/industry/electronics-system-design-manufacturing-esdm',
      },
    ],
  },
]
