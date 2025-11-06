import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MQL Experts | Verified B2B Databases & Lead Generation",
  description:
    "Smart Data. Smarter Outreach. Solid Results. Get verified B2B databases and lead-generation services for your business.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "MQL Experts | Verified B2B Databases & Lead Generation",
    description: "Smart Data. Smarter Outreach. Solid Results.",
    url: "https://mqlexperts.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17643311871"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17643311871');
            `,
          }}
        ></script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
