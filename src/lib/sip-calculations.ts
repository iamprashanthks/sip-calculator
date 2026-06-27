export interface YearData {
  year: number
  invested: number
  value: number
  gain: number
  gainPercent: number
}

export function calculateSIP(
  monthlyAmount: number,
  annualReturn: number,
  years: number
): { totalInvested: number; estimatedReturn: number; finalCorpus: number; yearlyData: YearData[] } {
  const monthlyRate = annualReturn / 12 / 100
  const totalMonths = years * 12
  let previousValue = 0
  const yearlyData: YearData[] = []

  for (let y = 1; y <= years; y++) {
    const months = y * 12
    const invested = monthlyAmount * months
    const value = monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
    const gain = value - invested
    const yearGain = value - previousValue - monthlyAmount * 12
    const gainPercent = invested > 0 ? (gain / invested) * 100 : 0

    yearlyData.push({
      year: y,
      invested: Math.round(invested * 100) / 100,
      value: Math.round(value * 100) / 100,
      gain: Math.round(yearGain * 100) / 100,
      gainPercent: Math.round(gainPercent * 100) / 100,
    })

    previousValue = value
  }

  const finalCorpus = yearlyData[yearlyData.length - 1].value
  const totalInvested = yearlyData[yearlyData.length - 1].invested

  return {
    totalInvested,
    estimatedReturn: Math.round((finalCorpus - totalInvested) * 100) / 100,
    finalCorpus,
    yearlyData,
  }
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-IN").format(value)
}
