"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Start", href: "#start" },
  { name: "Speisekarte", href: "#menu" },
  { name: "Galerie", href: "#gallery" },
  { name: "Anfahrt", href: "#directions" },
  { name: "Reservierung", href: "#reservation" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("start")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FDF8F0] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#start" className="flex items-center gap-3 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/giovanni-cinque-logo-YjPE7TJHKbq5Bj8cE7GigGqwmsSIuX.png"
              alt="Giovanni Cinque Logo"
              width={50}
              height={50}
              className="w-12 h-12 transition-transform group-hover:scale-105"
            />
            <span 
              className={`font-playfair text-xl font-semibold transition-colors hidden sm:block`}
              style={{ color: isScrolled ? '#C5A059' : '#FFFFFF' }}
            >
              Giovanni Cinque
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative py-2 text-sm font-medium transition-all duration-300"
                  style={{ 
                    color: isActive 
                      ? '#B22222' 
                      : isScrolled 
                        ? '#2C2C2C' 
                        : '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#B22222'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = isScrolled ? '#2C2C2C' : '#FFFFFF'
                    }
                  }}
                >
                  {item.name}
                  {/* Red underline for active item */}
                  <span 
                    className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundColor: '#B22222' }}
                  />
                </a>
              )
            })}
            
            {/* Phone link in navbar (desktop) */}
            <a
              href="tel:+493023302225"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#B22222' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8B0000'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B22222'}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">030 - 23 30 22 25</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 transition-transform hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X 
                className="w-6 h-6" 
                style={{ color: isScrolled ? '#B22222' : '#FFFFFF' }}
              />
            ) : (
              <Menu 
                className="w-6 h-6" 
                style={{ color: isScrolled ? '#B22222' : '#FFFFFF' }}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#FDF8F0] rounded-lg shadow-lg mb-4 border border-[#E5DFD3]">
            <div className="flex flex-col py-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "")
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 transition-colors font-medium ${
                      isActive ? 'border-l-4' : 'border-l-4 border-transparent'
                    }`}
                    style={{ 
                      color: isActive ? '#B22222' : '#2C2C2C',
                      borderLeftColor: isActive ? '#B22222' : 'transparent',
                      backgroundColor: isActive ? '#F5F0E6' : 'transparent'
                    }}
                  >
                    {item.name}
                  </a>
                )
              })}
              
              {/* Mobile phone link */}
              <a
                href="tel:+493023302225"
                className="mx-4 mt-2 mb-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-medium"
                style={{ backgroundColor: '#B22222' }}
              >
                <Phone className="w-5 h-5" />
                030 - 23 30 22 25
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
