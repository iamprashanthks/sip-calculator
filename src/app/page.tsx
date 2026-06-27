import { SipCalculator } from "@/components/sip-calculator"
import { FAQ } from "@/components/faq"
import { SupportMe } from "@/components/support-me"

export default function Home() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 bg-clip-text text-transparent">
            SIP Calculator
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Plan your mutual fund investments. Enter your monthly SIP amount,
            expected returns, and investment duration to see your potential
            wealth grow.
          </p>
        </div>

        <SipCalculator />

        <FAQ />
      </div>

      <footer className="w-full border-t py-6">
        <div className="max-w-5xl mx-auto px-4 text-center text-xs text-muted-foreground">
          <p>
            This SIP calculator provides estimated returns for illustrative
            purposes only. Actual returns may vary based on market conditions
            and fund performance. Past performance does not guarantee future
            results. Consult a financial advisor for personalized investment
            advice.
          </p>
        </div>
      </footer>

      <SupportMe />
    </>
  )
}
