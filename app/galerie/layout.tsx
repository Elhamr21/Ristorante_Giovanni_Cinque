import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galerie | Ristorante Giovanni Cinque",
  description: "Eindrücke aus unserem italienischen Restaurant in Berlin am Tierpark. Entdecken Sie unseren gemütlichen Speiseraum und die idyllische Terrasse.",
}

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
