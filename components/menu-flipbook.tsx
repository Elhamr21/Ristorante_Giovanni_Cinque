"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Download, BookOpen } from "lucide-react"
import Image from "next/image"

// Menu pages from the actual PDF
const menuPages = [
  { id: 1, title: "Titelseite", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu1-aOvnZns5yhEr5K1GeOoSmlLtxUfbAo.png" },
  { id: 2, title: "Aperitifs", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu2-njky8MIe1hHkX2Gy6xCO7vMADZzF2R.png" },
  { id: 3, title: "Homemade Lemonade", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu3-te6xD22AkZnNA0vCG42EKRSYWyj6UB.png" },
  { id: 4, title: "Vorspeisen", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu4-diIYnzt9riUrqu5BXbJi2bjtQKqPLe.png" },
  { id: 5, title: "Salate, Suppen & Kindergerichte", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu5-EA2jcqvaeMSO7EjWgbTnUGV1vud9zo.png" },
  { id: 6, title: "Pasta", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu6-Scy7gtXWbUKA1naMN4Vc6daBtKpoL0.png" },
  { id: 7, title: "Frische Pasta", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu7-0RbRtnAblcHO7WsULKxwpZvQNitxJN.png" },
  { id: 8, title: "Steinofen-Pizza", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu8-rtevrCdrfZfOXxfQz6ZnRl493OQcXE.png" },
  { id: 9, title: "Hähnchen, Rind & Schwein", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu9-01Jc33l20Np2iTo44LSN8vL0a49vs4.png" },
  { id: 10, title: "Fisch & Garnelen", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu10-8K0mLiRS2QMTNGdtxA8xCmQUULpyks.png" },
  { id: 11, title: "Lamm & Desserts", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu11-RLuYT61VDNGMDC9O17qYV5ATuaXzRj.png" },
  { id: 12, title: "Heisse Getränke & Erfrischungen", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu12-TsIxUZMCNwj2Eb2esksRYQYNoM5Gxb.png" },
  { id: 13, title: "Säfte & Biere", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu13-JChjktjQ9x4JeyiPvyCJIYPcVySWUA.png" },
  { id: 14, title: "Spirituosen & Longdrinks", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu14-47sEgJfcnBLk5vqoaMQh2L0cxhhsde.png" },
  { id: 15, title: "Offene Weine", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu15-b3GZIJH73UgnJ7vYSkYee2k0s7hwaZ.png" },
  { id: 16, title: "Allergene & Info", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu16-kDKacqjDs8yw0i3bHFfQYrAChpzZAl.png" },
]

interface MenuFlipbookProps {
  isOpen: boolean
  onClose: () => void
}

export default function MenuFlipbook({ isOpen, onClose }: MenuFlipbookProps) {
  const [currentSpread, setCurrentSpread] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"left" | "right" | null>(null)
  const [zoom, setZoom] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  // Group pages into spreads (pairs for book view)
  const spreads: Array<{ left: typeof menuPages[0] | null; right: typeof menuPages[0] | null }> = []
  for (let i = 0; i < menuPages.length; i += 2) {
    spreads.push({
      left: menuPages[i] || null,
      right: menuPages[i + 1] || null,
    })
  }

  const totalSpreads = spreads.length

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextPage = useCallback(() => {
    if (currentSpread < totalSpreads - 1 && !isFlipping) {
      setFlipDirection("left")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentSpread(prev => prev + 1)
        setIsFlipping(false)
        setFlipDirection(null)
      }, 300)
    }
  }, [currentSpread, totalSpreads, isFlipping])

  const prevPage = useCallback(() => {
    if (currentSpread > 0 && !isFlipping) {
      setFlipDirection("right")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentSpread(prev => prev - 1)
        setIsFlipping(false)
        setFlipDirection(null)
      }, 300)
    }
  }, [currentSpread, isFlipping])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return
    if (e.key === "ArrowRight") nextPage()
    if (e.key === "ArrowLeft") prevPage()
    if (e.key === "Escape") onClose()
  }, [isOpen, nextPage, prevPage, onClose])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setCurrentSpread(0)
      setZoom(1)
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const currentLeft = spreads[currentSpread]?.left
  const currentRight = spreads[currentSpread]?.right

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Flipbook Container */}
      <div className="relative z-10 w-full max-w-6xl mx-4 md:mx-8 h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-gold" />
            <h2 className="font-playfair text-xl md:text-2xl text-gold">
              Unsere Speisekarte
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {/* Zoom Controls - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setZoom(z => Math.max(0.5, z - 0.25))}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-white text-sm min-w-[50px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom(z => Math.min(1.5, z + 0.25))}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
            
            {/* Download */}
            <a
              href="https://blobs.vusercontent.net/blob/giovanni-cinque-speisekarte-vY9y3fdVOi0NQKL2ARDFZuOL5Umonk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gold text-white hover:bg-gold/80 transition-colors"
              aria-label="Download PDF"
            >
              <Download className="w-5 h-5" />
            </a>
            
            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-red text-white hover:bg-red/80 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Book Container */}
        <div 
          className="relative flex-grow bg-gradient-to-br from-amber-900 to-amber-950 rounded-lg shadow-2xl overflow-hidden"
          style={{ perspective: "2000px" }}
        >
          {/* Book spine shadow - Hidden on mobile */}
          {!isMobile && (
            <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/30 via-black/50 to-black/30 z-20 pointer-events-none" />
          )}
          
          {/* Pages Container */}
          <div 
            className={`flex h-full ${isMobile ? "" : ""}`}
            style={{ transform: `scale(${isMobile ? 1 : zoom})`, transformOrigin: "center center" }}
          >
            {isMobile ? (
              /* Mobile: Single page view */
              <div className="w-full h-full relative bg-cream overflow-auto">
                <div className={`w-full h-full transition-transform duration-300 ${
                  flipDirection === "left" ? "animate-flip-left" : flipDirection === "right" ? "animate-flip-right" : ""
                }`}>
                  <Image
                    src={currentLeft?.image || ""}
                    alt={currentLeft?.title || "Menu page"}
                    fill
                    className="object-contain bg-cream"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            ) : (
              /* Desktop: Two-page spread view */
              <>
                {/* Left Page */}
                <div className="w-1/2 h-full relative bg-cream overflow-hidden">
                  <div className={`absolute inset-0 transition-transform duration-300 ${
                    flipDirection === "right" ? "animate-flip-right" : ""
                  }`}>
                    {currentLeft && (
                      <Image
                        src={currentLeft.image}
                        alt={currentLeft.title}
                        fill
                        className="object-contain bg-cream"
                        sizes="50vw"
                        priority
                      />
                    )}
                    {/* Page texture */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Right Page */}
                <div className="w-1/2 h-full relative bg-cream overflow-hidden">
                  <div className={`absolute inset-0 transition-transform duration-300 ${
                    flipDirection === "left" ? "animate-flip-left" : ""
                  }`}>
                    {currentRight && (
                      <Image
                        src={currentRight.image}
                        alt={currentRight.title}
                        fill
                        className="object-contain bg-cream"
                        sizes="50vw"
                        priority
                      />
                    )}
                    {/* Page texture */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            disabled={currentSpread === 0}
            className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all z-30 ${
              currentSpread === 0 
                ? "bg-white/20 text-white/40 cursor-not-allowed" 
                : "bg-red text-white hover:bg-red/80 hover:scale-110 shadow-lg"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextPage}
            disabled={currentSpread === totalSpreads - 1}
            className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all z-30 ${
              currentSpread === totalSpreads - 1 
                ? "bg-white/20 text-white/40 cursor-not-allowed" 
                : "bg-red text-white hover:bg-red/80 hover:scale-110 shadow-lg"
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Page Indicator */}
        <div className="flex items-center justify-center mt-4 gap-4 flex-shrink-0">
          <div className="flex gap-1.5 flex-wrap justify-center max-w-xs md:max-w-none">
            {spreads.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping) {
                    setCurrentSpread(index)
                  }
                }}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentSpread 
                    ? "bg-gold scale-125" 
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to spread ${index + 1}`}
              />
            ))}
          </div>
          <span className="text-white/80 text-sm whitespace-nowrap">
            {isMobile 
              ? `Seite ${currentSpread * 2 + 1} von ${menuPages.length}`
              : `Seite ${currentSpread * 2 + 1}-${Math.min(currentSpread * 2 + 2, menuPages.length)} von ${menuPages.length}`
            }
          </span>
        </div>

        {/* Page titles */}
        <div className="text-center mt-2 text-white/60 text-sm flex-shrink-0">
          {isMobile ? (
            <span>{currentLeft?.title}</span>
          ) : (
            <span>
              {currentLeft?.title}
              {currentRight && ` | ${currentRight.title}`}
            </span>
          )}
        </div>

        {/* Keyboard hint - Hidden on mobile */}
        <p className="hidden md:block text-center text-white/50 text-xs mt-2 flex-shrink-0">
          Verwenden Sie die Pfeiltasten oder klicken Sie zum Blättern
        </p>
      </div>
    </div>
  )
}
