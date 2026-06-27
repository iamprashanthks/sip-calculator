import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "What is a SIP Calculator?",
    answer:
      "A SIP (Systematic Investment Plan) calculator is a financial tool that helps you estimate the potential returns on your mutual fund SIP investments. It uses the power of compounding to project how your monthly investments can grow over time based on an expected annual rate of return.",
  },
  {
    question: "How does a SIP work?",
    answer:
      "In a SIP, you invest a fixed amount at regular intervals (usually monthly) into a mutual fund scheme. This approach helps you benefit from rupee cost averaging and the power of compounding. Over time, your money grows as the fund generates returns on both your invested capital and the accumulated earnings.",
  },
  {
    question: "What is the power of compounding?",
    answer:
      "Compounding is the process where your investment earnings generate their own earnings over time. In a SIP, the returns you earn are reinvested, allowing your money to grow exponentially. The longer you stay invested, the more powerful the compounding effect becomes, which is why starting early is crucial.",
  },
  {
    question: "Can I change my SIP amount later?",
    answer:
      "Yes, most mutual fund houses allow you to increase or decrease your SIP amount through a process called SIP top-up or SIP step-up. You can also start a new SIP with a different amount or stop an existing one at any time without penalty.",
  },
  {
    question: "Is the SIP return guaranteed?",
    answer:
      "No, SIP returns are not guaranteed. The expected return rate you enter is an estimation based on historical performance. Actual returns depend on market conditions, fund performance, and economic factors. Past performance does not guarantee future results.",
  },
]

export function FAQ() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0 divide-y">
        {faqs.map((faq, i) => (
          <details key={i} className="group py-4 [&:first-child]:pt-0 [&:last-child]:pb-0">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <svg
                className="size-4 shrink-0 text-muted-foreground transition group-open:rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </CardContent>
    </Card>
  )
}
