"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const mainImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie2-zRTe8kQnw1Sxxyd1o1K0xueFlyy4bk.jpg",
    alt: "Eleganter Speiseraum mit roten Wänden",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie4-Ll1rBaLEfcXj0ydEuaYMs2qxkW80hs.jpg",
    alt: "Italienische Weinflaschen und Dekoration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie8-3uWy6rpZQYYXVVSgcN0IFMnSQomigJ.jpg",
    alt: "Außenterrasse mit Laternen",
  },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-neutral-900 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-gold/60 text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-gold/30" />
            <span>Impressionen</span>
            <span className="w-8 h-px bg-gold/30" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3">
            La <span className="text-gold italic">Galleria</span>
          </h2>
          <p className="text-white/50 text-lg">
            Eindrücke aus unserem Restaurant
          </p>
        </div>

        {/* 3 Main Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {mainImages.map((image, index) => (
            <Link
              href="/galerie"
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-gold/30 transition-colors" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white hover:bg-gold hover:border-gold hover:text-charcoal font-medium px-8 py-3 rounded-full transition-all hover:gap-4"
          >
            Alle Bilder ansehen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
