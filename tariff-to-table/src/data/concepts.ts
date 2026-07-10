export interface Concept {
  id: string
  term: string
  short: string
  explanation: string
  example: string
  takeaway: string
}

export const CONCEPTS: Concept[] = [
  {
    id: 'absolute-advantage',
    term: 'Absolute Advantage',
    short: 'Producing more with the same resources.',
    explanation:
      "Coined by Adam Smith (1776), absolute advantage is a country's ability to produce more of a good than competitors using the same resources — or the same amount using fewer. The logic: specialise in what you make most efficiently and trade for the rest.",
    example:
      'If India can produce more textiles per worker than another country, India has an absolute advantage in textiles and should focus there.',
    takeaway: 'Specialisation raises total output and economic welfare.',
  },
  {
    id: 'comparative-advantage',
    term: 'Comparative Advantage',
    short: 'Specialising where your opportunity cost is lowest.',
    explanation:
      "David Ricardo (1817) showed that trade benefits both sides even when one country is better at producing everything. What matters is opportunity cost — a country gains by specialising in goods it sacrifices the least to make. It remains the cornerstone of modern trade theory.",
    example:
      "Even if one country is more efficient at both software and farming, both countries gain if each focuses on whichever it gives up the least to produce.",
    takeaway: 'Mutually beneficial trade is possible even between unequal partners.',
  },
  {
    id: 'opportunity-cost',
    term: 'Opportunity Cost',
    short: 'The value of the next-best option you give up.',
    explanation:
      "Opportunity cost is the value of the next-best alternative forgone when you make a choice. It underpins comparative advantage: the 'cost' of producing one good is the other goods you could have made instead.",
    example:
      'If a factory makes phones instead of laptops, the opportunity cost of those phones is the laptops it could have produced.',
    takeaway: 'Every choice has a hidden cost — what you didn\'t choose.',
  },
  {
    id: 'tariffs',
    term: 'Tariffs',
    short: 'A tax on imported goods.',
    explanation:
      'A tariff is a tax charged on imports. It makes foreign goods more expensive, encouraging consumers to buy domestic alternatives and raising government revenue. But it also raises prices and can reduce choice and efficiency — and may invite retaliation.',
    example:
      'India raised import duties on goods like sunglasses and fruit juice to discourage imports and support domestic producers.',
    takeaway: 'Tariffs protect some producers — but consumers usually pay more.',
  },
  {
    id: 'quotas',
    term: 'Import Quotas',
    short: 'A cap on how much can be imported.',
    explanation:
      'A quota directly limits the quantity of a good that can be imported. Unlike a tariff, it restricts volume rather than raising price through tax — though the scarcity it creates tends to push prices up anyway.',
    example:
      'A cap on imported cars limits foreign supply, protecting domestic carmakers but reducing consumer options.',
    takeaway: 'Quotas protect through scarcity rather than taxation.',
  },
  {
    id: 'subsidies',
    term: 'Subsidies',
    short: 'Government support for domestic producers.',
    explanation:
      'A subsidy is financial support given to domestic industry to lower its costs and boost competitiveness. India\'s Production Linked Incentive scheme is a modern, targeted example — rewarding production in strategic sectors.',
    example:
      'PLI payments to electronics manufacturers helped make India the world\'s second-largest mobile-phone maker.',
    takeaway: 'Subsidies boost domestic output but cost taxpayers and can distort markets.',
  },
  {
    id: 'free-trade',
    term: 'Free Trade',
    short: 'Letting markets decide, with minimal barriers.',
    explanation:
      "Free trade holds that global supply and demand will allocate production efficiently, so little intervention is needed. It draws on comparative advantage and tends to lower prices and widen choice — though its gains are not shared equally.",
    example:
      "India's 1991 reforms moved sharply toward free trade, helping growth average over 8% a year.",
    takeaway: 'Free trade maximises efficiency — but creates winners and losers.',
  },
  {
    id: 'protectionism',
    term: 'Protectionism',
    short: 'Regulating trade to shield domestic industry.',
    explanation:
      'Protectionism argues that trade should be regulated so markets function properly and domestic industries are shielded from foreign competition. Its main tools are tariffs, quotas, and subsidies. It can build strategic capacity but tends to raise prices.',
    example:
      'Make in India and Atmanirbhar Bharat used protectionist tools to strengthen domestic manufacturing.',
    takeaway: 'Protection can build industry — but consumers often bear the cost.',
  },
  {
    id: 'infant-industry',
    term: 'Infant Industry Argument',
    short: 'Protect new industries until they can compete.',
    explanation:
      'Advanced by Alexander Hamilton and expanded by Friedrich List, this argues that new, emerging industries need temporary protection from established foreign rivals until they grow strong enough to compete on their own.',
    example:
      'India placed very high tariffs on imported electric vehicles to give its young EV sector time to develop.',
    takeaway: 'Short-term protection can build long-term competitiveness — if it ends.',
  },
  {
    id: 'trade-deficit',
    term: 'Trade Deficit',
    short: 'Importing more than you export.',
    explanation:
      'A trade deficit occurs when a country imports more goods and services than it exports. It is often cited to justify protectionist measures, though economists debate how much a deficit truly matters for long-run welfare.',
    example:
      "India's merchandise-plus-services imports rose alongside exports after liberalisation, reflecting deeper global integration.",
    takeaway: 'A deficit reflects trade flows — not automatically economic weakness.',
  },
]
