
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: 'Dextr Exchange',
  description: "Tired of Low Returns and High Slippage? Discover Dextr: Maximize your earnings and minimize risk with Dextr's unique reputation-based AMM- take charge of your crypto journey today!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="/companylogo.svg" />
      <Script src="https://cdn.pagesense.io/js/brainchain/f56e5f0b854a40d4a059d58ef7165b61.js"></Script>
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-H83B715197" />
    </html>
  )
}
