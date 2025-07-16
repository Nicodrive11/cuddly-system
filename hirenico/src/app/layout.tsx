import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nico Portfolio | Masters of Software Development',
  description: 'Showcase of applications created during Masters of Software Development program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}