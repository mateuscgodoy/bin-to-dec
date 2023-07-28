import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Binary to Decimal Converter',
  description: 'A simple web app to convert binary numbers into decimal ones, and vice-versa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-neutral-200 dark:bg-neutral-900 dark:text-white'>
        {children}
      </body>
    </html>
  )
}
