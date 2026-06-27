import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SIP Calculator India – Free Systematic Investment Plan Calculator Online",
  description:
    "Plan your mutual fund investments with our free SIP calculator. Calculate monthly SIP returns, total invested amount, estimated returns, and final corpus with an interactive growth chart.",
  keywords: [
    "SIP calculator",
    "SIP calculator India",
    "systematic investment plan calculator",
    "mutual fund SIP calculator",
    "monthly SIP calculator",
    "SIP return calculator",
    "investment calculator India",
  ],
  metadataBase: new URL("https://sipcalculator.in"),
  openGraph: {
    title: "SIP Calculator – Free Online Systematic Investment Plan Calculator",
    description:
      "Calculate your mutual fund SIP returns instantly. Check total invested, estimated returns, final corpus with interactive charts.",
    url: "https://sipcalculator.in",
    siteName: "SIP Calculator",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIP Calculator – Free Online SIP Return Calculator",
    description:
      "Plan your mutual fund investments. Calculate SIP returns, total invested amount, and final corpus with growth charts.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sipcalculator.in",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SIP Calculator India",
  url: "https://sipcalculator.in",
  description:
    "A free systematic investment plan calculator to estimate mutual fund SIP returns with interactive growth charts.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  browserRequirements: "Requires JavaScript",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
        {children}
      </body>
    </html>
  )
}
