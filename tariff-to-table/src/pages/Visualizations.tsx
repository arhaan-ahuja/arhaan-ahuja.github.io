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
  MANUFACTURING_SHARE,
  MPCE_BY_FRACTILE,
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
    "The data behind the paper's argument: India's rising tariffs, retreat from global trade, flat manufacturing share, and the regressive burden that follows."
  )

  return (
    <>
      <PageHeader
        eyebrow="The Evidence"
        title="Data that supports the theory"
        intro="Figures 1–5 are drawn from official statistics — World Bank and WITS tariff and national-accounts data, and India's official Household Consumption Expenditure Survey. The exact source sits beneath each figure, so you can check any number yourself."
      />

      <section className="container-px py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard
            figNumber={1}
            title="India's average tariff is rising"
            caption="India's MFN applied tariff (simple average, all products) climbed through the protectionist turn, peaking in 2019 — the year it walked away from RCEP."
            source="Source: World Bank / WITS, MFN applied simple-average tariff, all products (TM.TAX.MRCH.SM.FN.ZS)."
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
            figNumber={2}
            title="Among the most protectionist of major economies"
            caption="India maintains the highest average tariff of any large economy — several times the levels of the US, EU and China, and above Brazil."
            source="Source: World Bank / WITS, MFN applied simple-average tariff, all products, 2022."
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
            figNumber={3}
            title="Retreating from global trade"
            caption="After opening rapidly through the 1990s and 2000s, India's trade-to-GDP ratio fell back from its 2012 peak as the protectionist turn took hold. The recent uptick partly reflects higher global commodity prices."
            source="Source: World Bank, Trade (% of GDP) — NE.TRD.GNFS.ZS."
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
            figNumber={4}
            title="Manufacturing hasn't grown behind the wall"
            caption="'Make in India' aimed to lift manufacturing to 25% of GDP. Instead its share has drifted down. Higher tariffs pushed some assembly onshore — India now makes ~97% of the phones it sells, up from ~22% in 2014 — but did not expand manufacturing overall."
            source="Source: World Bank, Manufacturing value added (% of GDP) — NV.IND.MANF.ZS. Mobile-phone self-sufficiency: ICEA / IBEF."
            delay={0.15}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MANUFACTURING_SHARE} margin={{ top: 18, right: 16, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} unit="%" domain={[0, 20]} />
                <Line type="monotone" dataKey="share" stroke={C.teal} strokeWidth={2.5} dot={{ r: 3 }} animationDuration={900}>
                  <LabelList dataKey="share" position="top" formatter={(v: any) => `${v}%`} style={label} />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Full-width regressive burden chart */}
        <div className="mt-6">
          <ChartCard
            figNumber={5}
            title="Why a price rise hits the poorest hardest"
            caption="The poorest 5% of rural Indians live on about ₹1,373 a month; the richest 5% on ₹10,501 — and lower-income households spend a far larger share of that on food and essentials (food alone is ~46% of rural spending). A tariff that raises the price of everyday goods therefore takes a bigger bite from the smallest budgets."
            source="Source: MoSPI, Household Consumption Expenditure Survey 2022-23 — average MPCE by fractile class, rural India (Statement 4)."
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MPCE_BY_FRACTILE} layout="vertical" margin={{ top: 5, right: 56, left: 20, bottom: 0 }}>
                <CartesianGrid stroke={grid} horizontal={false} />
                <XAxis type="number" tick={axis} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="group" tick={axis} axisLine={false} tickLine={false} width={80} />
                <Bar dataKey="mpce" radius={[0, 6, 6, 0]} barSize={22} name="mpce">
                  {MPCE_BY_FRACTILE.map((_, i) => (
                    <Cell key={i} fill={`hsl(14, ${46 - i * 6}%, ${36 + i * 8}%)`} />
                  ))}
                  <LabelList dataKey="mpce" position="right" formatter={(v: any) => `₹${v.toLocaleString('en-IN')}`} style={label} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>
    </>
  )
}
