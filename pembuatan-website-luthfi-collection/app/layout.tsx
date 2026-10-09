import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Luthfi Collection | Toko Hijab Cantik & Nyaman',
  description:
    'Luthfi Collection - toko hijab pashmina, segi empat, bergo instan, khimar syar\u2019i, dan inner. Pesan mudah via WhatsApp 0896-5533-2775.',
  keywords: ['toko hijab', 'pashmina', 'hijab segi empat', 'bergo instan', 'khimar', 'Luthfi Collection'],
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
  themeColor: '#6e2d4f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${sans.variable} ${serif.variable} scroll-smooth bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
