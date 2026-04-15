"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Home, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie1-PpBL8UR1e78eL2E46wEtv7PxhhU6Ad.jpg",
    alt: "Restaurant Eingang mit rotem Teppich",
    title: "Willkommen",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie2-zRTe8kQnw1Sxxyd1o1K0xueFlyy4bk.jpg",
    alt: "Eleganter Speiseraum mit roten Wänden",
    title: "Speiseraum",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie3-4fvg6xcHKaIkagnfwZ6W6fBkyLqbHb.jpg",
    alt: "Gemütliche Sitzecke am Fenster",
    title: "Sitzecke",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie4-Ll1rBaLEfcXj0ydEuaYMs2qxkW80hs.jpg",
    alt: "Italienische Weinflaschen und Dekoration",
    title: "Ambiente",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie5-cTXUapFSfZOSoRsfWWHUqfjy0lQW45.jpg",
    alt: "Innenraum mit italienischen Bildern",
    title: "Dekoration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie6-RICuidPTZp0TXuzDsT8d8jyvAEbhYF.jpg",
    alt: "Dining area mit Weinregal",
    title: "Weinregal",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie7-LzDJMqJEEgN6PeDEfb6THSmsldbNIP.jpg",
    alt: "Speiseraum mit großen Fenstern",
    title: "Tageslicht",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie8-3uWy6rpZQYYXVVSgcN0IFMnSQomigJ.jpg",
    alt: "Außenterrasse mit Laternen",
    title: "Terrasse",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie9-rnbIaoWWsUx7vtNzhZAe7Ny3qKdf25.jpg",
    alt: "Außenbereich mit Willkommensschild",
    title: "Außenbereich",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galerie10-CwiTFxpR1DWFhCSw8UUvxvh6oZ9iqX.jpg",
    alt: "Terrasseneingang mit Blumen",
    title: "Eingang",
  },
]

export default function GalleriePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-charcoal/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Zurück</span>
          </Link>
          
          <div className="text-center">
            <h1 className="font-playfair text-xl md:text-2xl font-bold text-gold">
              La Galleria
            </h1>
          </div>
          
          <Link 
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors"
          >
            <Home className="w-5 h-5" />
          </Link>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-gold/60 text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-gold/30" />
            <span>Impressionen</span>
            <span className="w-8 h-px bg-gold/30" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
            Eindrücke aus unserem Restaurant
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Entdecken Sie die einladende Atmosphäre unseres italienischen Restaurants. 
            Von unserem gemütlichen Speiseraum bis zur idyllischen Terrasse.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer border border-white/10 hover:border-gold/30 transition-all"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/50 mb-4">
            Besuchen Sie uns und erleben Sie die Atmosphäre selbst
          </p>
          <Link
            href="/#reservation"
            className="inline-flex items-center gap-2 bg-gold text-charcoal hover:bg-gold/90 font-medium px-8 py-3 rounded-full transition-colors"
          >
            Tisch reservieren
          </Link>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-charcoal hover:bg-gold/90 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-gold hover:text-charcoal rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-gold hover:text-charcoal rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium text-lg">
                {galleryImages[currentImage].title}
              </p>
              <p className="text-white/60 text-sm mt-1">
                {currentImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImage(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage
                    ? "bg-gold w-6"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-6 text-center border-t border-white/10 bg-charcoal">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Giovanni Cinque - Cucina Italiana
        </p>
      </footer>
    </div>
  )
}
