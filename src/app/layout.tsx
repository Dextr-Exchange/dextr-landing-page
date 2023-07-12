
import './globals.css'
import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Dextr Exchange',
  description: 'A web3 protocol that enables peer-to-peer exchange of digital assets using Account Abstraction and SBTs.',
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
        <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
