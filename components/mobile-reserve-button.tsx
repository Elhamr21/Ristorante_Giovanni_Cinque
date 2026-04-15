"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

export default function MobileReserveButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="tel:+493023302225"
      className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 bg-red text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red/90 transition-all duration-300 animate-bounce-slow"
      aria-label="Jetzt anrufen"
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}
