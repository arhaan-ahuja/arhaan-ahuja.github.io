// Every official dataset, figure and rate used in the interactive tools and
// charts, with a direct link and what it feeds. This is the "show your working"
// companion to the academic bibliography on the References page.

export interface DataSource {
  title: string
  publisher: string
  year: string
  usedFor: string // where on the site this figure is used
  url?: string
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
        title: 'Union Budget 2024 — basic customs duty on mobile phones cut to 15%',
        publisher: 'Ministry of Finance (via Business Standard)',
        year: '2024',
        usedFor: 'Smartphone tariff (15%)',
        url: 'https://www.business-standard.com/budget/news/budget-2024-fm-cuts-basic-customs-duty-on-mobile-phones-chargers-to-15-124072300682_1.html',
      },
      {
        title: 'Government hikes import duty on toys to 70%',
        publisher: 'Business Standard',
        year: '2023',
        usedFor: 'Toys tariff (70%)',
        url: 'https://www.business-standard.com/article/economy-policy/govt-hikes-import-duty-on-toys-to-70-to-boost-domestic-manufacturing-123020101712_1.html',
      },
      {
        title: 'Centre reduces basic customs duty on crude edible oils (crude 10%, refined effective ~35.75%)',
        publisher: 'Press Information Bureau, Government of India',
        year: '2025',
        usedFor: 'Cooking-oil tariff (~35%)',
        url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2135774',
      },
      {
        title: 'Union Budget 2025-26 — customs duty on finished flat-panel displays / TVs raised to 20%',
        publisher: 'Ministry of Finance (via Business Today)',
        year: '2025',
        usedFor: 'Television tariff (20%)',
        url: 'https://www.businesstoday.in/union-budget/news/story/union-budget-2025-tvs-to-get-more-expensive-in-india-as-custom-duty-rises-462984-2025-02-01',
      },
      {
        title: 'Customs Tariff of India — apparel, footwear and dry-fruit (specific) duties',
        publisher: 'Central Board of Indirect Taxes & Customs (CBIC)',
        year: '2025',
        usedFor: 'Clothes & shoes (25%) and Almonds & dry fruit (~30%) tariffs',
        url: 'https://www.cbic.gov.in/',
      },
      {
        title: 'India says high tariffs on EVs protect from Chinese imports',
        publisher: 'Reuters (via ThePrint)',
        year: '2024',
        usedFor: 'Automobile / EV preset in the Calculator (70%)',
        url: 'https://theprint.in/economy/india-says-high-tariffs-on-evs-to-protect-from-chinese-imports/2131433/',
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
        publisher: 'Ministry of Statistics & Programme Implementation (MoSPI)',
        year: '2024',
        usedFor:
          'Average spending per person (₹3,773 rural / ₹6,459 urban), the poorest-vs-richest gap, and the food share of budgets',
        url: 'https://www.mospi.gov.in/sites/default/files/publication_reports/Factsheet_HCES_2022-23.pdf',
      },
      {
        title: 'Per-capita edible-oil consumption in India (~23.5 kg per person per year, 2023)',
        publisher: 'Department of Food & Public Distribution (via Business Standard)',
        year: '2025',
        usedFor: 'The cooking-oil spending estimate',
        url: 'https://www.business-standard.com/industry/agriculture/india-edible-oil-consumption-tripled-imports-health-obesity-palm-oil-125042100484_1.html',
      },
      {
        title: 'National Family Health Survey (NFHS-5) — average household size (~4.4)',
        publisher: 'Ministry of Health & Family Welfare, Government of India',
        year: '2021',
        usedFor: 'Scaling per-person figures up to a household',
        url: 'http://rchiips.org/nfhs/factsheet_NFHS-5.shtml',
      },
    ],
  },
  {
    category: 'Tariffs, trade & the economy (charts)',
    intro:
      'The official data behind the figures on the Data & Evidence page.',
    items: [
      {
        title: 'World Integrated Trade Solution (WITS) & World Development Indicators — India tariff, trade and manufacturing data',
        publisher: 'The World Bank',
        year: '2024',
        usedFor:
          "Figures 1–4: India's average tariff, tariff vs peers, trade openness and manufacturing share",
        url: 'https://wits.worldbank.org/CountryProfile/en/IND',
      },
      {
        title: 'Household Consumption Expenditure Survey 2022-23 — average MPCE by fractile class',
        publisher: 'Ministry of Statistics & Programme Implementation (MoSPI)',
        year: '2024',
        usedFor: 'Figure 5: the regressive-burden chart',
        url: 'https://www.mospi.gov.in/sites/default/files/publication_reports/Factsheet_HCES_2022-23.pdf',
      },
      {
        title: 'India becomes second-largest mobile-phone maker; phone self-sufficiency data',
        publisher: 'India Cellular & Electronics Association (ICEA) / IBEF (via Moneycontrol)',
        year: '2022',
        usedFor: 'The ~97% phone self-sufficiency figure noted with the manufacturing chart',
        url: 'https://www.moneycontrol.com/news/business/economy/india-becomes-second-largest-mobile-phone-maker-globally-government-8891981.html',
      },
    ],
  },
]
