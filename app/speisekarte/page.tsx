"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Download, Home, Calendar, ZoomIn, ZoomOut, Maximize2, Minimize2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Menu pages from the actual PDF
const menuPages = [
  { id: 1, title: "Titelseite", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu1-aOvnZns5yhEr5K1GeOoSmlLtxUfbAo.png" },
  { id: 2, title: "Aperitifs", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu2-njky8MIe1hHkX2Gy6xCO7vMADZzF2R.png" },
  { id: 3, title: "Homemade Lemonade", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu3-te6xD22AkZnNA0vCG42EKRSYWyj6UB.png" },
  { id: 4, title: "Vorspeisen", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu4-diIYnzt9riUrqu5BXbJi2bjtQKqPLe.png" },
  { id: 5, title: "Salate & Suppen", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu5-EA2jcqvaeMSO7EjWgbTnUGV1vud9zo.png" },
  { id: 6, title: "Pasta", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu6-Scy7gtXWbUKA1naMN4Vc6daBtKpoL0.png" },
  { id: 7, title: "Frische Pasta", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu7-0RbRtnAblcHO7WsULKxwpZvQNitxJN.png" },
  { id: 8, title: "Steinofen-Pizza", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu8-rtevrCdrfZfOXxfQz6ZnRl493OQcXE.png" },
  { id: 9, title: "Fleischgerichte", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu9-01Jc33l20Np2iTo44LSN8vL0a49vs4.png" },
  { id: 10, title: "Fisch & Garnelen", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu10-8K0mLiRS2QMTNGdtxA8xCmQUULpyks.png" },
  { id: 11, title: "Lamm & Desserts", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu11-RLuYT61VDNGMDC9O17qYV5ATuaXzRj.png" },
  { id: 12, title: "Heisse Getränke", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu12-TsIxUZMCNwj2Eb2esksRYQYNoM5Gxb.png" },
  { id: 13, title: "Säfte & Biere", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu13-JChjktjQ9x4JeyiPvyCJIYPcVySWUA.png" },
  { id: 14, title: "Spirituosen", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu14-47sEgJfcnBLk5vqoaMQh2L0cxhhsde.png" },
  { id: 15, title: "Offene Weine", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu15-b3GZIJH73UgnJ7vYSkYee2k0s7hwaZ.png" },
  { id: 16, title: "Allergene & Info", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/menu16-kDKacqjDs8yw0i3bHFfQYrAChpzZAl.png" },
]

export default function SpeisekartePage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"next" | "prev" | null>(null)
  const [zoom, setZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const bookRef = useRef<HTMLDivElement>(null)

  const totalPages = menuPages.length

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages - (isMobile ? 1 : 2) && !isFlipping) {
      setFlipDirection("next")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev + (isMobile ? 1 : 2))
        setIsFlipping(false)
        setFlipDirection(null)
      }, 600)
    }
  }, [currentPage, totalPages, isFlipping, isMobile])

  const goToPrevPage = useCallback(() => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection("prev")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(prev => prev - (isMobile ? 1 : 2))
        setIsFlipping(false)
        setFlipDirection(null)
      }, 600)
    }
  }, [currentPage, isFlipping, isMobile])

  const goToPage = (pageIndex: number) => {
    if (!isFlipping && pageIndex !== currentPage) {
      const adjustedIndex = isMobile ? pageIndex : Math.floor(pageIndex / 2) * 2
      setFlipDirection(adjustedIndex > currentPage ? "next" : "prev")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(adjustedIndex)
        setIsFlipping(false)
        setFlipDirection(null)
      }, 600)
    }
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNextPage()
    if (e.key === "ArrowLeft") goToPrevPage()
  }, [goToNextPage, goToPrevPage])

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNextPage()
      else goToPrevPage()
    }
    setTouchStart(null)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      bookRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const leftPage = menuPages[currentPage]
  const rightPage = menuPages[currentPage + 1]

  return (
    <div 
      ref={bookRef}
      className="min-h-screen bg-charcoal flex flex-col"
    >
      {/* Subtle Background Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">Zurück zur Startseite</span>
          </Link>
          
          <div className="text-center">
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-gold">
              Unsere Speisekarte
            </h1>
            <p className="text-white/50 text-sm mt-1 hidden sm:block">
              Giovanni Cinque - Cucina Italiana
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://blobs.vusercontent.net/blob/giovanni-cinque-speisekarte-vY9y3fdVOi0NQKL2ARDFZuOL5Umonk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold/20 hover:bg-gold/30 text-gold px-3 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">PDF</span>
            </a>
            <Link
              href="/#reservation"
              className="flex items-center gap-2 bg-red hover:bg-red/90 text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Reservieren</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Book Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-4 md:py-8 relative z-10">
        {/* Zoom Controls - Desktop Only */}
        <div className="hidden lg:flex items-center gap-2 mb-4">
          <button
            onClick={() => setZoom(z => Math.max(0.6, z - 0.1))}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-white text-sm min-w-[60px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={() => setZoom(z => Math.min(1.2, z + 0.1))}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors ml-2"
            aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>

        {/* The Book */}
        <div 
          className="relative w-full max-w-6xl"
          style={{ 
            perspective: "2500px",
            transform: `scale(${isMobile ? 1 : zoom})`,
            transformOrigin: "center center"
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Book Container */}
          <div className="relative mx-auto" style={{ maxWidth: isMobile ? "400px" : "1100px" }}>
            {/* Book Shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/40 blur-xl rounded-full" />
            
            {/* Book Binding/Spine */}
            {!isMobile && (
              <div className="absolute left-1/2 top-0 bottom-0 w-6 -translate-x-1/2 z-30 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-950 via-amber-800 to-amber-950 rounded-sm" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                {/* Spine details */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-20 bg-gold/20 rounded-full" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold/30" />
              </div>
            )}

            {/* Pages Container */}
            <div 
              className={`flex ${isMobile ? "justify-center" : ""}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {isMobile ? (
                /* Mobile: Single Page View */
                <div 
                  className={`relative bg-cream rounded-lg overflow-hidden shadow-2xl transition-all duration-600 ${
                    isFlipping ? (flipDirection === "next" ? "animate-page-flip-next" : "animate-page-flip-prev") : ""
                  }`}
                  style={{ 
                    width: "min(90vw, 400px)", 
                    aspectRatio: "0.707",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(197,160,89,0.2)"
                  }}
                >
                  {/* Page Texture Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none z-10" />
                  
                  {/* Page Content */}
                  <div className="relative w-full h-full">
                    <Image
                      src={leftPage?.image || ""}
                      alt={leftPage?.title || "Menu page"}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 90vw, 50vw"
                      priority
                    />
                  </div>

                  {/* Page Edge Effect */}
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
                </div>
              ) : (
                /* Desktop: Two-Page Spread View */
                <>
                  {/* Left Page */}
                  <div 
                    className={`relative bg-cream overflow-hidden transition-transform duration-600 ${
                      isFlipping && flipDirection === "prev" ? "animate-page-flip-in-left" : ""
                    }`}
                    style={{ 
                      width: "520px", 
                      aspectRatio: "0.707",
                      borderRadius: "4px 0 0 4px",
                      boxShadow: "-5px 0 30px rgba(0,0,0,0.3)",
                      transformOrigin: "right center",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {/* Paper Texture */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10 pointer-events-none z-10" />
                    
                    {/* Page Content */}
                    <div className="relative w-full h-full">
                      {leftPage && (
                        <Image
                          src={leftPage.image}
                          alt={leftPage.title}
                          fill
                          className="object-contain"
                          sizes="50vw"
                          priority
                        />
                      )}
                    </div>

                    {/* Inner shadow near spine */}
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />
                    
                    {/* Page curl hint */}
                    <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Right Page */}
                  <div 
                    className={`relative bg-cream overflow-hidden transition-transform duration-600 ${
                      isFlipping && flipDirection === "next" ? "animate-page-flip-in-right" : ""
                    }`}
                    style={{ 
                      width: "520px", 
                      aspectRatio: "0.707",
                      borderRadius: "0 4px 4px 0",
                      boxShadow: "5px 0 30px rgba(0,0,0,0.3)",
                      transformOrigin: "left center",
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {/* Paper Texture */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-transparent to-black/10 pointer-events-none z-10" />
                    
                    {/* Page Content */}
                    <div className="relative w-full h-full">
                      {rightPage && (
                        <Image
                          src={rightPage.image}
                          alt={rightPage.title}
                          fill
                          className="object-contain"
                          sizes="50vw"
                          priority
                        />
                      )}
                    </div>

                    {/* Inner shadow near spine */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />
                    
                    {/* Page curl hint */}
                    <div className="absolute right-0 bottom-0 w-12 h-12 bg-gradient-to-tl from-amber-100/30 to-transparent pointer-events-none" />
                  </div>
                </>
              )}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 0 || isFlipping}
              className={`absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all z-40 ${
                currentPage === 0 || isFlipping
                  ? "bg-white/10 text-white/30 cursor-not-allowed" 
                  : "bg-gold text-charcoal hover:bg-gold/90 hover:scale-110 shadow-lg shadow-gold/30"
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>
            
            <button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages - (isMobile ? 1 : 2) || isFlipping}
              className={`absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all z-40 ${
                currentPage >= totalPages - (isMobile ? 1 : 2) || isFlipping
                  ? "bg-white/10 text-white/30 cursor-not-allowed" 
                  : "bg-gold text-charcoal hover:bg-gold/90 hover:scale-110 shadow-lg shadow-gold/30"
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7" />
            </button>
          </div>
        </div>

        {/* Page Navigation */}
        <div className="mt-6 md:mt-8 flex flex-col items-center gap-4">
          {/* Page Indicator */}
          <div className="text-white/70 text-sm font-medium">
            {isMobile 
              ? `Seite ${currentPage + 1} von ${totalPages}`
              : `Seite ${currentPage + 1}${rightPage ? `-${currentPage + 2}` : ""} von ${totalPages}`
            }
          </div>

          {/* Page Title */}
          <div className="text-gold text-center font-playfair text-lg">
            {leftPage?.title}
            {!isMobile && rightPage && <span className="text-white/30 mx-2">|</span>}
            {!isMobile && rightPage?.title}
          </div>

          {/* Page Thumbnails / Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 max-w-2xl px-4">
            {menuPages.map((page, index) => {
              const isActive = isMobile 
                ? index === currentPage 
                : index === currentPage || index === currentPage + 1
              return (
                <button
                  key={page.id}
                  onClick={() => goToPage(index)}
                  disabled={isFlipping}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                    isActive
                      ? "bg-gold scale-125 shadow-lg shadow-gold/30" 
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to page ${index + 1}: ${page.title}`}
                  title={page.title}
                />
              )
            })}
          </div>

          {/* Keyboard Hint - Desktop Only */}
          <p className="hidden lg:block text-white/40 text-xs mt-2">
            Verwenden Sie die Pfeiltasten zum Blättern oder wischen Sie auf Touch-Geräten
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-4 text-center">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Giovanni Cinque - Cucina Italiana
        </p>
      </footer>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes page-flip-next {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(-90deg); }
          100% { transform: rotateY(0deg); }
        }
        
        @keyframes page-flip-prev {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(90deg); }
          100% { transform: rotateY(0deg); }
        }
        
        @keyframes page-flip-in-right {
          0% { transform: rotateY(-90deg); opacity: 0; }
          50% { transform: rotateY(-45deg); opacity: 0.5; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
        
        @keyframes page-flip-in-left {
          0% { transform: rotateY(90deg); opacity: 0; }
          50% { transform: rotateY(45deg); opacity: 0.5; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
        
        .animate-page-flip-next {
          animation: page-flip-next 0.6s ease-in-out;
        }
        
        .animate-page-flip-prev {
          animation: page-flip-prev 0.6s ease-in-out;
        }
        
        .animate-page-flip-in-right {
          animation: page-flip-in-right 0.6s ease-out;
        }
        
        .animate-page-flip-in-left {
          animation: page-flip-in-left 0.6s ease-out;
        }
        
        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </div>
  )
}
