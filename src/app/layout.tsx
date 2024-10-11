
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: 'Dextr Exchange',
  description: "Transform your on-chain liquidity with Dextr! Eliminate rebalancing losses and make your idle liquidity work for you. Discover the best prices and protect your profits with our comprehensive MEV insurance. Join us today and start unlocking your trading potential!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image" href="/dextr_icon_new.png" />
      <Script src="https://cdn.pagesense.io/js/brainchain/f56e5f0b854a40d4a059d58ef7165b61.js"></Script>
      </head>
      <body className='scroll-smooth'>{children}</body>
      <GoogleAnalytics gaId="G-H83B715197" />
    </html>
  )
}
