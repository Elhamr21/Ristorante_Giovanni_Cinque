"use client"

import { Phone, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="start" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-cW45TWoBcDXUYSNxZgfIG9RsMJ3ezD.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/giovanni-cinque-logo-YjPE7TJHKbq5Bj8cE7GigGqwmsSIuX.png"
            alt="Giovanni Cinque Logo"
            width={160}
            height={160}
            className="w-36 h-36 md:w-44 md:h-44 drop-shadow-2xl"
            priority
          />
        </div>

        {/* Headline - Gold color with Playfair Display */}
        <h1 
          className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 drop-shadow-lg"
          style={{ color: '#C5A059' }}
        >
          Ristorante Giovanni Cinque
        </h1>

        {/* Subheadline - White */}
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-10 max-w-2xl mx-auto font-light tracking-wide">
          Köstliche Pizza & Pasta nach traditionellen Rezepten
        </p>

        {/* CTA Button - Red with hover scale effect */}
        <a
          href="#reservation"
          className="inline-block text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl text-lg mb-8"
          style={{ backgroundColor: '#B22222' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8B0000'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B22222'}
        >
          Tisch reservieren
        </a>

        {/* Phone Pill - Red background */}
        <div className="flex justify-center">
          <a
            href="tel:+493023302225"
            className="inline-flex items-center gap-3 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg text-lg"
            style={{ backgroundColor: '#B22222' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8B0000'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B22222'}
          >
            <Phone className="w-5 h-5" />
            030 - 23 30 22 25
          </a>
        </div>
      </div>

      {/* Scroll Down Bouncing Arrow */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-gold transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-10 h-10 drop-shadow-lg" />
      </a>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent pointer-events-none" />
    </section>
  )
}
