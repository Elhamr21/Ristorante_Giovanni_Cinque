import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Ristorante Giovanni Cinque | Italienisches Restaurant Berlin am Tierpark',
  description: 'Authentische italienische Küche in Berlin am Tierpark. Genießen Sie Pizza, Pasta und mehr nach traditionellen Rezepten. Täglich geöffnet von 11:00 - 23:00 Uhr.',
  keywords: ['italienisches restaurant', 'berlin', 'tierpark', 'pizza', 'pasta', 'giovanni cinque'],
  openGraph: {
    title: 'Ristorante Giovanni Cinque',
    description: 'Authentische italienische Küche in Berlin am Tierpark',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth bg-cream">
      <body className={`${inter.variable} ${cormorant.variable} ${playfair.variable} font-sans antialiased bg-cream text-charcoal`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
