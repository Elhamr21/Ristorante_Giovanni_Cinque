"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-red text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red/90 transition-all duration-300 hover:scale-110"
      aria-label="Nach oben scrollen"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}
