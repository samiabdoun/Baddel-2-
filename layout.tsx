import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baddel - Swap Items, No Money',
  description: 'Exchange items directly with people near you. No payments, just swapping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}