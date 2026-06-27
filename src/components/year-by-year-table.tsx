import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { YearData } from "@/lib/sip-calculations"

interface YearByYearTableProps {
  data: YearData[]
  formatCurrency: (value: number) => string
}

export function YearByYearTable({ data, formatCurrency }: YearByYearTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Year-by-Year Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="p-0 sm:p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Year</TableHead>
                <TableHead className="text-right">Invested</TableHead>
                <TableHead className="text-right">Year Gain</TableHead>
                <TableHead className="text-right">Corpus Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.year}>
                  <TableCell className="font-medium">Year {row.year}</TableCell>
                  <TableCell className="text-right font-mono tabular-nums">
                    {formatCurrency(row.invested)}
                  </TableCell>
                  <TableCell className="text-right font-mono tabular-nums text-green-600 dark:text-green-400">
                    +{formatCurrency(row.gain)}
                  </TableCell>
                  <TableCell className="text-right font-mono tabular-nums font-semibold">
                    {formatCurrency(row.value)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
