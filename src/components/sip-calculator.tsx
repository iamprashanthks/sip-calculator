"use client"

import { useState, useCallback, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SlidersHorizontal } from "lucide-react"
import { calculateSIP, formatCurrency } from "@/lib/sip-calculations"
import { ResultCards } from "./result-cards"
import { GrowthChart } from "./growth-chart"
import { YearByYearTable } from "./year-by-year-table"

export function SipCalculator() {
  const [amount, setAmount] = useState("5000")
  const [returnRate, setReturnRate] = useState("12")
  const [years, setYears] = useState("10")

  const result = useMemo(() => {
    const a = parseFloat(amount) || 0
    const r = parseFloat(returnRate) || 0
    const y = parseFloat(years) || 0
    return calculateSIP(a, r, y)
  }, [amount, returnRate, years])

  const handleAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value.replace(/[^0-9.]/g, "")
      setAmount(v)
    },
    []
  )

  const handleReturnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value.replace(/[^0-9.]/g, "")
      setReturnRate(v)
    },
    []
  )

  const handleYearsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value.replace(/[^0-9.]/g, "")
      setYears(v)
    },
    []
  )

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900 dark:to-gray-950">
        <CardContent className="p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-sm font-medium flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-blue-600" />
                Monthly SIP Amount (₹)
              </Label>
              <Input
                id="amount"
                type="text"
                inputMode="decimal"
                value={amount}
                onChange={handleAmountChange}
                className="text-lg font-semibold h-12"
                placeholder="5000"
              />
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={Math.min(parseFloat(amount) || 500, 100000)}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                aria-label="Adjust SIP amount"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₹500</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="return" className="text-sm font-medium flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-green-600" />
                Expected Return (% p.a.)
              </Label>
              <Input
                id="return"
                type="text"
                inputMode="decimal"
                value={returnRate}
                onChange={handleReturnChange}
                className="text-lg font-semibold h-12"
                placeholder="12"
              />
              <input
                type="range"
                min="1"
                max="30"
                step="0.5"
                value={Math.min(parseFloat(returnRate) || 1, 30)}
                onChange={(e) => setReturnRate(e.target.value)}
                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                aria-label="Adjust return rate"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="years" className="text-sm font-medium flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-purple-600" />
                Investment Duration (Years)
              </Label>
              <Input
                id="years"
                type="text"
                inputMode="decimal"
                value={years}
                onChange={handleYearsChange}
                className="text-lg font-semibold h-12"
                placeholder="10"
              />
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={Math.min(parseFloat(years) || 1, 40)}
                onChange={(e) => setYears(e.target.value)}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                aria-label="Adjust investment duration"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 Year</span>
                <span>40 Years</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <ResultCards
        totalInvested={result.totalInvested}
        estimatedReturn={result.estimatedReturn}
        finalCorpus={result.finalCorpus}
      />

      <GrowthChart data={result.yearlyData} />

      <YearByYearTable data={result.yearlyData} formatCurrency={formatCurrency} />
    </div>
  )
}
