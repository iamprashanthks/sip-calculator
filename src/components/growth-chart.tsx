"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { useMemo } from "react"
import type { YearData } from "@/lib/sip-calculations"

interface GrowthChartProps {
  data: YearData[]
}

function formatValue(value: number): string {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`
  if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`
  return `₹${value}`
}

export function GrowthChart({ data }: GrowthChartProps) {
  const chartData = useMemo(
    () =>
      data.map((d) => ({
        year: `Y${d.year}`,
        invested: Math.round(d.invested),
        value: Math.round(d.value),
      })),
    [data]
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Investment Growth Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="investedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
                interval="preserveStartEnd"
              />
              <YAxis
                tickFormatter={formatValue}
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
                width={60}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  background: "var(--card)",
                }}
                formatter={(value: string | number) => [
                  `₹${Number(value).toLocaleString("en-IN")}`,
                ]}
                labelStyle={{ fontWeight: 600, marginBottom: 4 }}
              />
              <Area
                type="monotone"
                dataKey="invested"
                stroke="#3b82f6"
                fill="url(#investedGradient)"
                strokeWidth={2}
                name="Total Invested"
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                fill="url(#valueGradient)"
                strokeWidth={2}
                name="Corpus Value"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
