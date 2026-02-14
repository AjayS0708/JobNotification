import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'KodNest Job Notification Tracker',
  description: 'Professional job notification tracking system built with KodNest Premium Design System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen bg-[#FAFAFA]">
          <div className="max-w-[1440px] mx-auto px-40 py-64">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
