export interface TimelineEvent {
  year: string
  title: string
  summary: string
  significance: string
  impact: string
  stance: 'protectionist' | 'liberal' | 'mixed'
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1947',
    title: 'Independence & Self-Sufficiency',
    summary:
      'A newly independent India adopts a highly protectionist model, subsidising local industry and tightly restricting imports to build self-reliance.',
    significance:
      'Reflected the infant-industry argument of Hamilton and List — protect young industries until they can compete.',
    impact:
      'Built an early industrial base, but at the cost of consumer choice: people waited years for basics like telephones and scooters.',
    stance: 'protectionist',
  },
  {
    year: '1950s–80s',
    title: 'The License Raj',
    summary:
      'An elaborate system of licences, quotas, and import restrictions governs production and trade. Reform attempts are repeatedly reversed.',
    significance:
      'Demonstrated the long-run limits of heavy protection — reduced competition and economic efficiency.',
    impact:
      'By the 1960s, high inflation and uncompetitive goods forced a rupee devaluation, signalling the model was unsustainable.',
    stance: 'protectionist',
  },
  {
    year: '1991',
    title: 'Economic Liberalisation',
    summary:
      'A balance-of-payments crisis triggers sweeping reforms — dismantling licences, cutting tariffs, and opening India to trade and investment.',
    significance:
      'A decisive shift toward comparative advantage and global integration — the turning point in modern Indian economic history.',
    impact:
      'Growth averaged 8%+ a year; the poverty ratio fell from 45% (1993–94) to 32% (2009–10); private investment surged.',
    stance: 'liberal',
  },
  {
    year: '1995',
    title: 'WTO Membership',
    summary:
      'India becomes a founding member of the World Trade Organisation and restructures its trade regime to be open and transparent.',
    significance:
      'Locked in liberalisation and embedded India in the global rules-based trading system.',
    impact:
      'Transformed India from a largely closed economy into one of the world\'s largest, with exports rising from $274.8bn to $544.7bn (FY10–FY22).',
    stance: 'liberal',
  },
  {
    year: '2014',
    title: 'Make in India',
    summary:
      'A flagship campaign to turn India into a global design and manufacturing hub, encouraging domestic production.',
    significance:
      'An early marker of the renewed appetite for industrial policy and domestic-capacity building.',
    impact:
      'Mixed: manufacturing\'s GDP share fell from 16.3% (FY14) to 14.7% (FY19), showing branding and intent alone could not reindustrialise.',
    stance: 'mixed',
  },
  {
    year: '2017–19',
    title: 'The Protectionist Turn',
    summary:
      'India raises import duties on a range of goods to discourage imports and encourage domestic production. Average tariffs reach 13.8% (2019).',
    significance:
      'Marks a clear, deliberate pivot back toward selective protectionism.',
    impact:
      'Boosted some sectors but raised consumer prices — a cost that falls hardest on lower-income households.',
    stance: 'protectionist',
  },
  {
    year: '2019',
    title: 'RCEP Withdrawal',
    summary:
      'India pulls out of the Regional Comprehensive Economic Partnership — which became the world\'s largest free-trade agreement, covering ~30% of global GDP.',
    significance:
      'A symbolic and strategic choice to prioritise domestic industry over deeper regional trade integration.',
    impact:
      'Shielded vulnerable sectors from competition but left India outside a major Asia-Pacific trading bloc.',
    stance: 'protectionist',
  },
  {
    year: '2020',
    title: 'Atmanirbhar Bharat',
    summary:
      'The "Self-Reliant India" initiative responds to COVID-19 by prioritising domestic manufacturing and reducing supply-chain vulnerability.',
    significance:
      'Reframed protectionism around economic resilience after the pandemic exposed dependence on global supply chains.',
    impact:
      'Strengthened strategic capacity — e.g. air-conditioner imports later fell 65% — while raising questions about long-run efficiency.',
    stance: 'protectionist',
  },
  {
    year: '2020+',
    title: 'Production Linked Incentive (PLI)',
    summary:
      'Targeted, performance-linked subsidies reward domestic production in strategic sectors like electronics, autos, and pharma.',
    significance:
      'Designed as temporary, targeted support rather than permanent protection — echoing List\'s logic of building capacity, then withdrawing aid.',
    impact:
      'Helped make India the world\'s second-largest mobile-phone manufacturer; gains concentrated within supported sectors and stronger states.',
    stance: 'mixed',
  },
]
