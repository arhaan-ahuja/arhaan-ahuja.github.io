import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Cell,
} from 'recharts'
import PageHeader from '../components/ui/PageHeader'
import ChartCard from '../components/ui/ChartCard'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  TARIFF_TREND,
  TARIFF_VS_PEERS,
  TRADE_OPENNESS,
  MOBILE_PRODUCTION,
  REGRESSIVE_BURDEN,
} from '../data/charts'

const axis = { fontSize: 12, fill: '#8a8478' }
const grid = 'rgba(138,132,120,0.18)'
const label = { fill: '#8a8478', fontSize: 11, fontWeight: 600 }

// Muted, desaturated data palette.
const C = {
  brick: '#9a3b2c',
  slate: '#3f5d73',
  teal: '#4e7d74',
  ochre: '#b3924f',
  moss: '#5b7a52',
}

export default function Visualizations() {
  usePageMeta(
    'Data & Evidence',
    "The data behind the paper's argument: India's rising tariffs, retreat from global trade, import-substitution push, and the regressive burden that follows."
  )

  return (
    <>
      <PageHeader
        eyebrow="The Evidence"
        title="Data that supports the theory"
        intro="Each figure below points the same way: India has, in recent years, turned toward trade protectionism — and that turn falls hardest on the poorest households. Some series match figures cited in the paper exactly; others are illustrative of the trends it describes, as noted."
      />

      <section className="container-px py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="India's average tariff is rising"
            caption="Applied tariffs drifted up through the protectionist turn, peaking around the cited 13.8% in 2019 and higher since."
            source="Indicative path around figures cited in the paper (US Trade Dept., 2019)."
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TARIFF_TREND} margin={{ top: 18, right: 12, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="gTariff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={C.brick} stopOpacity={0.4} />
                    <stop offset="100%" stopColor={C.brick} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} unit="%" domain={[0, 16]} />
                <Area type="monotone" dataKey="tariff" stroke={C.brick} strokeWidth={2.5} fill="url(#gTariff)" animationDuration={900}>
                  <LabelList dataKey="tariff" position="top" formatter={(v: any) => `${v}%`} style={label} />
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Among the most protectionist of major economies"
            caption="India maintains one of the highest average tariffs of any large economy — several times the levels of the US, EU and China."
            source="Simple-average applied tariffs, WTO World Tariff Profiles (latest available); illustrative comparison."
            delay={0.05}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TARIFF_VS_PEERS} margin={{ top: 18, right: 12, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="economy" tick={axis} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} unit="%" />
                <Bar dataKey="tariff" radius={[6, 6, 0, 0]} animationDuration={900}>
                  {TARIFF_VS_PEERS.map((d) => (
                    <Cell key={d.economy} fill={d.economy === 'India' ? C.brick : C.slate} />
                  ))}
                  <LabelList dataKey="tariff" position="top" formatter={(v: any) => `${v}%`} style={label} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Retreating from global trade"
            caption="After opening rapidly through the 1990s and 2000s, India's trade-to-GDP ratio fell back from its 2008–12 peak as the protectionist turn took hold."
            source="Trade as % of GDP; illustrative of the long-run arc described in the paper."
            delay={0.1}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TRADE_OPENNESS} margin={{ top: 18, right: 16, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} unit="%" domain={[0, 60]} />
                <Line type="monotone" dataKey="openness" stroke={C.ochre} strokeWidth={2.5} dot={{ r: 3 }} animationDuration={900}>
                  <LabelList dataKey="openness" position="top" formatter={(v: any) => `${v}%`} style={label} />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Import substitution behind the tariff wall"
            caption="Higher duties on imported handsets pushed assembly onshore: domestic output rose from ~60M units (2014-15) to 310M+ (2021-22) — protectionism working as intended."
            source="Krishnakumar (2022); intermediate years interpolated."
            delay={0.15}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOBILE_PRODUCTION} margin={{ top: 18, right: 12, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={{ ...axis, fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} />
                <Bar dataKey="units" fill={C.slate} radius={[6, 6, 0, 0]} animationDuration={900}>
                  <LabelList dataKey="units" position="top" formatter={(v: any) => `${v}M`} style={label} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Full-width regressive burden chart */}
        <div className="mt-6">
          <ChartCard
            title="Why the burden falls on the poorest"
            caption="Poorer households spend a far larger share of income on consumption, so a tariff-driven price rise takes a bigger bite of their budget — the paper's central distributional point."
            source="Illustrative model of the mechanism described in the paper."
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REGRESSIVE_BURDEN} layout="vertical" margin={{ top: 5, right: 40, left: 20, bottom: 0 }}>
                <CartesianGrid stroke={grid} horizontal={false} />
                <XAxis type="number" tick={axis} axisLine={false} tickLine={false} unit="%" />
                <YAxis type="category" dataKey="group" tick={axis} axisLine={false} tickLine={false} width={80} />
                <Bar dataKey="burden" radius={[0, 6, 6, 0]} barSize={22} name="burden">
                  {REGRESSIVE_BURDEN.map((_, i) => (
                    <Cell key={i} fill={`hsl(14, ${46 - i * 6}%, ${36 + i * 8}%)`} />
                  ))}
                  <LabelList dataKey="burden" position="right" formatter={(v: any) => `${v}% of budget`} style={label} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>
    </>
  )
}
