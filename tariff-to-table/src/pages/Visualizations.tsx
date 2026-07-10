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
  Tooltip,
  Legend,
  Cell,
} from 'recharts'
import PageHeader from '../components/ui/PageHeader'
import ChartCard, { tooltipStyle } from '../components/ui/ChartCard'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  TARIFF_TREND,
  TRADE_FLOWS,
  MANUFACTURING_SHARE,
  TRADE_OPENNESS,
  MOBILE_PRODUCTION,
  POVERTY_RATIO,
  REGRESSIVE_BURDEN,
} from '../data/charts'

const axis = { fontSize: 12, fill: '#8a8478' }
const grid = 'rgba(138,132,120,0.18)'

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
    'Interactive Data',
    "Charts on India's tariff trends, trade flows, manufacturing share, trade openness, and the regressive burden of tariffs."
  )

  return (
    <>
      <PageHeader
        eyebrow="Interactive Data"
        title="The numbers behind the argument"
        intro="Hover any chart to read the values. Some series exactly match figures cited in the paper; others are illustrative of the trends it describes, as noted."
      />

      <section className="container-px py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="India's average tariff trend"
            caption="Applied tariffs drifted up through the protectionist turn (peaking around the cited 13.8% in 2019)."
            source="Indicative path around figures cited in the paper (US Trade Dept., 2019)."
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TARIFF_TREND} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="gTariff" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={C.brick} stopOpacity={0.4} />
                    <stop offset="100%" stopColor={C.brick} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} unit="%" />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, 'Avg tariff']} />
                <Area type="monotone" dataKey="tariff" stroke={C.brick} strokeWidth={2.5} fill="url(#gTariff)" animationDuration={900} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Imports vs exports ($bn)"
            caption="Both flows roughly doubled between FY10 and FY22 as India deepened global integration."
            source="Govt of India, Ministry of Commerce & Industry (2022); intermediate years interpolated."
            delay={0.05}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TRADE_FLOWS} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${v}bn`, '']} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="exports" stroke={C.moss} strokeWidth={2.5} dot={{ r: 3 }} name="Exports" animationDuration={900} />
                <Line type="monotone" dataKey="imports" stroke={C.slate} strokeWidth={2.5} dot={{ r: 3 }} name="Imports" animationDuration={900} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Manufacturing share of GDP"
            caption="Despite the protectionist push, manufacturing fell from 16.3% (FY14) to 14.7% (FY19)."
            source="Figures cited in the paper; intermediate years interpolated."
            delay={0.1}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MANUFACTURING_SHARE} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="gMfg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={C.slate} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={C.slate} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} domain={[13, 17]} unit="%" />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, 'Mfg share']} />
                <Area type="monotone" dataKey="share" stroke={C.slate} strokeWidth={2.5} fill="url(#gMfg)" animationDuration={900} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Trade openness (trade as % of GDP)"
            caption="India opened rapidly after 1991, peaked around 2008, then trended down with the protectionist turn."
            source="Illustrative of the long-run arc described in the paper."
            delay={0.15}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={TRADE_OPENNESS} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} unit="%" />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, 'Openness']} />
                <Line type="monotone" dataKey="openness" stroke={C.ochre} strokeWidth={2.5} dot={{ r: 3 }} animationDuration={900} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Mobile phone production (million units)"
            caption="A flagship success: output rose from ~60M (2014-15) to 310M+ (2021-22) — but gains concentrated in this sector."
            source="Krishnakumar (2022); intermediate years interpolated."
            delay={0.2}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOBILE_PRODUCTION} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={{ ...axis, fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}M units`, 'Production']} cursor={{ fill: 'rgba(127,147,194,0.1)' }} />
                <Bar dataKey="units" fill={C.slate} radius={[6, 6, 0, 0]} animationDuration={900} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Poverty ratio after liberalisation"
            caption="The post-1991 opening coincided with poverty falling from 45% (1993-94) to 32% (2009-10)."
            source="Figures cited in the paper."
            delay={0.25}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={POVERTY_RATIO} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="gPov" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={C.moss} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={C.moss} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={{ ...axis, fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} unit="%" />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, 'Poverty ratio']} />
                <Area type="monotone" dataKey="ratio" stroke={C.moss} strokeWidth={2.5} fill="url(#gPov)" animationDuration={900} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Full-width regressive burden chart */}
        <div className="mt-6">
          <ChartCard
            title="Why tariffs are regressive"
            caption="Poorer households spend a far larger share of income on consumption, so a tariff-driven price rise takes a bigger bite of their budget — the paper's central distributional point."
            source="Illustrative model of the mechanism described in the paper."
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REGRESSIVE_BURDEN} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 0 }}>
                <CartesianGrid stroke={grid} horizontal={false} />
                <XAxis type="number" tick={axis} axisLine={false} tickLine={false} unit="%" />
                <YAxis type="category" dataKey="group" tick={axis} axisLine={false} tickLine={false} width={80} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v: number, n) => [n === 'burden' ? `${v}% of budget` : `${v}%`, n === 'burden' ? 'Tariff burden' : 'Spent on goods']} cursor={{ fill: 'rgba(127,147,194,0.1)' }} />
                <Bar dataKey="burden" radius={[0, 6, 6, 0]} barSize={22} name="burden">
                  {REGRESSIVE_BURDEN.map((_, i) => (
                    <Cell key={i} fill={`hsl(14, ${46 - i * 6}%, ${36 + i * 8}%)`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>
    </>
  )
}
