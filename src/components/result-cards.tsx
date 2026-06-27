import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/sip-calculations"

interface ResultCardsProps {
  totalInvested: number
  estimatedReturn: number
  finalCorpus: number
}

export function ResultCards({ totalInvested, estimatedReturn, finalCorpus }: ResultCardsProps) {
  const total = totalInvested + estimatedReturn

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground font-medium">Total Invested</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">
            {formatCurrency(totalInvested)}
          </p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-green-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground font-medium">Estimated Return</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-green-700 dark:text-green-400">
            +{formatCurrency(estimatedReturn)}
          </p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-purple-500 sm:col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm text-muted-foreground font-medium">Final Corpus</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-purple-700 dark:text-purple-400">
            {formatCurrency(finalCorpus)}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
