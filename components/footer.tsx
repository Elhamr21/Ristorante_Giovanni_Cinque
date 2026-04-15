"use client"

import { Star, Facebook, Instagram, Heart } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/giovanni-cinque-logo-YjPE7TJHKbq5Bj8cE7GigGqwmsSIuX.png"
                alt="Giovanni Cinque Logo"
                width={60}
                height={60}
                className="w-14 h-14"
              />
              <span className="font-serif text-xl text-gold">Giovanni Cinque</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Authentische italienische Küche
              <br />
              im Herzen von Berlin am Tierpark.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="font-serif text-lg text-gold mb-4">Kontakt</h4>
            <address className="not-italic text-white/70 text-sm leading-relaxed">
              Am Tierpark 66
              <br />
              10319 Berlin
              <br />
              <a href="tel:+493023302225" className="hover:text-red transition-colors">
                Tel: 030 - 23 30 22 25
              </a>
            </address>
          </div>

          {/* Rating & Social */}
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 text-red fill-red" />
              <span className="text-white font-medium">4.5</span>
              <span className="text-white/60 text-sm">(226 Bewertungen)</span>
            </div>
            <p className="text-white/60 text-sm mb-4">€20–30 pro Person</p>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {currentYear} Ristorante Giovanni Cinque Berlin am Tierpark • Am Tierpark 66, 10319 Berlin
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-red transition-colors">
                Impressum
              </a>
              <span>|</span>
              <a href="#" className="hover:text-red transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
          
          {/* Credit */}
          <div className="text-center mt-6">
            <p className="text-white/40 text-xs flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red fill-red" /> by{" "}
              <a 
                href="https://clearline-ai.tech/en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                ClearLineTech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
