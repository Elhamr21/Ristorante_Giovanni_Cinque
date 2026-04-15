import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speisekarte | Ristorante Giovanni Cinque Berlin',
  description: 'Entdecken Sie unsere Speisekarte mit authentischer italienischer Küche: Pizza, Pasta, Fleisch, Fisch und Desserts. Alle Gerichte werden nach traditionellen Rezepten zubereitet.',
  keywords: ['speisekarte', 'menu', 'pizza', 'pasta', 'italienisch', 'berlin', 'tierpark', 'giovanni cinque'],
  openGraph: {
    title: 'Speisekarte | Giovanni Cinque',
    description: 'Entdecken Sie unsere Speisekarte mit authentischer italienischer Küche',
    locale: 'de_DE',
    type: 'website',
  },
}

export default function SpeisekarteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
