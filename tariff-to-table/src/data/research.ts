// All content below is an original summary of the author's research paper.
// It preserves the paper's arguments and evidence without reproducing it verbatim.

export interface KeyFinding {
  stat: string
  label: string
  detail: string
}

export const KEY_FINDINGS: KeyFinding[] = [
  {
    stat: '13.8%',
    label: 'Average Indian tariff (2019)',
    detail:
      'The US Trade Department flagged India as having among the highest tariffs of any major economy.',
  },
  {
    stat: '16.3% → 14.7%',
    label: 'Manufacturing share of GDP (FY14–FY19)',
    detail:
      'Despite the protectionist push, manufacturing actually shrank as a share of GDP — showing tariffs alone did not reindustrialise India.',
  },
  {
    stat: '~80%',
    label: 'Workforce in informal employment',
    detail:
      'Industrial growth does not automatically reach most workers, who lack stable, formal-sector jobs.',
  },
  {
    stat: '45% → 32%',
    label: 'Poverty ratio after 1991 liberalisation',
    detail:
      'Opening up the economy coincided with falling poverty and 8%+ average annual growth.',
  },
]

export interface ResearchSection {
  id: string
  title: string
  kicker: string
  paragraphs: string[]
  callout?: { type: 'insight' | 'tension' | 'evidence'; title: string; text: string }
}

export const EXECUTIVE_SUMMARY =
  "India's trade policy has swung between two philosophies: protectionism, which regulates trade to nurture domestic industry, and liberalisation, which trusts open markets to allocate resources efficiently. After decades of post-independence protectionism and a decisive 1991 opening, India has — since roughly 2017–18 — turned back toward selective protectionism through Make in India, Atmanirbhar Bharat, and the Production Linked Incentive scheme. This paper asks who bears the cost of that turn. It argues that while protectionism can build strategic industries and resilience, its benefits concentrate in particular firms, sectors, and regions, while its costs — higher consumer prices above all — fall broadly and weigh most on lower-income households. The net effect on inequality is therefore mixed, and depends on whether industrial gains are paired with policies that spread the benefits.";

export const RESEARCH_QUESTION =
  "To what extent has India's recent shift toward trade protectionism affected social and income inequality?";

export const RESEARCH_SECTIONS: ResearchSection[] = [
  {
    id: 'literature',
    title: 'Literature Review',
    kicker: 'The centuries-old debate',
    paragraphs: [
      "The case for open trade is old. Adam Smith's absolute advantage (1776) held that nations should specialise in what they produce most efficiently and trade for the rest, raising total output. David Ricardo's comparative advantage (1817) went further: even a country that is worse at everything still gains by specialising where its opportunity cost is lowest. This remains the cornerstone of modern trade theory and the rationale for free-trade agreements.",
      "Not everyone agreed. Alexander Hamilton's infant industry argument said new industries need temporary protection until they can survive foreign competition. Friedrich List expanded this in 1841, arguing manufacturing power is so important that a nation may sacrifice short-term efficiency to build it. In his view, protectionism and liberalisation are each justified depending on circumstance — neither is universally superior.",
      "These schools persist today. Neoclassical economists, focused on consumer welfare, tend to favour liberalisation via comparative advantage. Developmentalist and structuralist thinkers favour state intervention and infant-industry protection, fearing that opening up too early disrupts development.",
      "Crucially, trade policy also shapes inequality. The WTO (2008) notes that liberalisation creates winners and losers; UNCTAD (2019) finds globalisation reduced poverty but often widened within-country income gaps, concentrating gains among skilled workers and capital owners. Protectionism is not a clean fix either: tariffs raise consumer prices and weigh hardest on poorer households, who spend more of their income on goods.",
    ],
    callout: {
      type: 'tension',
      title: 'The core tension',
      text: 'Free trade tends to maximise efficiency and lower prices; protectionism can build strategic capacity. Both create winners and losers — the question is always who, and by how much.',
    },
  },
  {
    id: 'trajectory',
    title: "India's Trade Trajectory",
    kicker: 'From License Raj to global integration — and back',
    paragraphs: [
      "After independence, India was highly protectionist, subsidising local industry and tightly restricting imports in pursuit of self-sufficiency. The cost to ordinary citizens was steep: people waited years for a telephone line or a scooter. Each attempt at reform was quickly reversed. By the 1960s, high inflation and uncompetitive goods — and a forced rupee devaluation — exposed the limits of the model.",
      "The 1991 reforms changed everything. Growth averaged over 8% a year; the poverty ratio fell from 45% (1993–94) to 32% (2009–10); private investment surged. India joined the WTO in 1995 as a founding member and restructured its trade regime to be open and transparent. Exports of goods and services rose from $274.8bn to $544.7bn between FY10 and FY22, and India became one of the world's fastest-growing major economies.",
      "Since around 2017–18, the pendulum has swung back. India raised duties on a range of goods, withdrew from the RCEP free-trade bloc in 2019, and launched Make in India (2014), Atmanirbhar Bharat (2020), and the PLI scheme. Results are mixed: manufacturing's GDP share fell from 16.3% (FY14) to 14.7% (FY19), yet electronics boomed — India became the world's second-largest mobile-phone maker and air-conditioner imports fell 65%.",
    ],
    callout: {
      type: 'evidence',
      title: 'A pendulum, not a straight line',
      text: "India's path mirrors the literature exactly: post-independence protectionism echoed Hamilton and List; 1991 embraced Ricardo; the recent turn shows developing economies balancing global integration against the urge to build domestic industry.",
    },
  },
  {
    id: 'rationale',
    title: 'Economic Rationale Behind the Turn',
    kicker: 'Why protect — and why critics push back',
    paragraphs: [
      "India's protectionist turn is strategic, not arbitrary. Liberalisation can expose young domestic producers to established foreign firms before they are ready. So policy has aimed to reduce import dependence, strengthen domestic production, and grow strategically important industries — for example, very high tariffs to shield the emerging electric-vehicle sector from Chinese imports, buying time for workers and firms to build expertise.",
      "Resilience is the second motive. COVID-19 exposed the danger of over-reliance on global supply chains for essential goods, so Atmanirbhar Bharat focused on domestic capacity and reducing vulnerability to external shocks. Tellingly, the PLI scheme is designed as targeted, time-limited support rather than permanent protection — echoing List's idea of sacrificing short-term efficiency to build long-term capacity.",
      "But the effectiveness of protectionism is contested. Economists warn that tariffs create deadweight losses by raising prices, shrinking choice, and misallocating resources. Shielding firms can dull competitive pressure, slowing innovation. Protecting weak industries can divert resources from sectors where India already holds a comparative advantage. And higher tariffs invite retaliation from trading partners.",
    ],
    callout: {
      type: 'insight',
      title: 'Targeted, not permanent',
      text: 'The PLI scheme is deliberately structured as temporary, performance-linked support — an attempt to capture infant-industry benefits while limiting the long-run costs of permanent protection.',
    },
  },
  {
    id: 'social',
    title: 'Social & Distributional Effects',
    kicker: 'Who wins, who pays',
    paragraphs: [
      "Protectionism is usually judged on growth and self-reliance — but its effects are not shared evenly. Trade policy creates winners and losers, so aggregate gains need not mean inclusive development. The benefits of protection concentrate in specific firms and sectors, while the costs spread broadly across consumers.",
      "Sectorally, Make in India and PLI strongly supported electronics, autos, and pharma. Mobile-phone production leapt from ~60 million units (2014–15) to over 310 million (2021–22) — a real success, but one whose gains sit largely within those protected industries.",
      "Geographically, the gains are uneven too. Industrial capability clusters in states with strong infrastructure — Gujarat and Maharashtra led approved projects and investment in 2023–24 — while states like Bihar and Uttar Pradesh, with weaker infrastructure, benefit far less. Protection can thus reinforce existing regional inequality.",
      "On employment, the picture is complex. Protecting industry can create jobs, but quality matters: with over 80% of India's workforce in informal employment, manufacturing growth does not automatically deliver stable income gains for most workers.",
    ],
    callout: {
      type: 'tension',
      title: 'A regressive tilt',
      text: 'Because poorer households spend a larger share of income on consumption, tariff-driven price increases act like a regressive tax — concentrating benefits while broadly distributing costs.',
    },
  },
  {
    id: 'conclusion',
    title: 'Conclusions',
    kicker: 'A mixed, conditional verdict',
    paragraphs: [
      "India's trade story is a vivid case study of the free-trade-versus-protectionism debate, with the country moving between philosophies as its circumstances changed: protectionism after independence, liberalisation in 1991, and a renewed, selective protectionism from around 2018–19.",
      "Trade policy shapes not just the economy but social and income disparities. The 1991 opening strengthened growth, cut poverty, and connected India to the world. The recent turn has supported strategic sectors and domestic production — but its benefits have not been shared equally, while tariff-driven price increases fall hardest on lower-income households.",
      "The verdict is therefore mixed and conditional. Protectionism is neither inherently good nor bad. Its impact on inequality depends on whether industrial growth is paired with policies that ensure the gains are distributed across society — not concentrated among the firms, sectors, and regions already best placed to capture them.",
    ],
    callout: {
      type: 'insight',
      title: 'The bottom line',
      text: 'Protectionism is not inherently beneficial or harmful — its effect on inequality depends on whether the gains from industrial growth are deliberately shared.',
    },
  },
]
