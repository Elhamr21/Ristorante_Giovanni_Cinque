"use client"

import { Flame, Wine } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-charcoal overflow-hidden">
      
      {/* Full-width Hero Layout */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        
        {/* Left Side - Steak Image with Overlay */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RMtr90l0AC840JVxsITJZeWi0xOuDZ.png"
            alt="Gegrillte Steaks mit Rosmarin, Gewürzen und Olivenöl auf schwarzem Hintergrund"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/60 lg:via-transparent lg:to-transparent" />
          
          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-5 py-3 rounded-full border border-gold/30">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="text-white font-medium text-sm tracking-wide">Vom Holzkohlegrill</span>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="relative flex items-center bg-charcoal">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20 max-w-xl">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">Willkommen</span>
            </div>
            
            {/* Main Title */}
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Benvenuti
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gold/90 font-light mb-8 leading-relaxed">
              Ristorante Giovanni Cinque
            </p>
            
            {/* Description */}
            <div className="space-y-5 text-white/70 leading-relaxed">
              <p>
                Im Herzen von Berlin am Tierpark heißen wir Sie herzlich willkommen. 
                Seit unserer Eröffnung verwöhnen wir unsere Gäste mit authentischer 
                italienischer Küche nach traditionellen Familienrezepten.
              </p>
              <p>
                Unsere Leidenschaft für gutes Essen und herzliche Gastfreundschaft 
                spiegelt sich in jedem Gericht wider – von hausgemachter Pasta bis 
                zur knusprigen Pizza aus dem Steinofen.
              </p>
            </div>
            
            {/* Signature Line */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="font-playfair text-lg italic text-gold">
                &ldquo;Der wahre Geschmack Italiens&rdquo;
              </p>
              <p className="text-white/50 text-sm mt-2">
                — Ihr Giovanni Cinque Team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Wine Section */}
      <div className="grid lg:grid-cols-2 min-h-[50vh]">
        
        {/* Left Side - Wine Content */}
        <div className="relative flex items-center bg-gradient-to-br from-red/20 to-charcoal order-2 lg:order-1">
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20 max-w-xl ml-auto">
            {/* Wine Icon */}
            <div className="flex items-center gap-3 mb-6">
              <Wine className="w-6 h-6 text-red" />
              <span className="text-red text-sm font-medium tracking-[0.2em] uppercase">Weinkarte</span>
            </div>
            
            {/* Title */}
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              Erlesene Weine
            </h3>
            
            {/* Description */}
            <p className="text-white/70 leading-relaxed mb-8">
              Entdecken Sie unsere sorgfältig ausgewählte Weinkarte mit edlen Tropfen 
              aus den besten Weinregionen Italiens. Von einem samtigen Chianti bis 
              zum spritzigen Prosecco – wir haben den perfekten Begleiter für Ihr Menü.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm">
                Chianti
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm">
                Montepulciano
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm">
                Prosecco
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm">
                Lambrusco
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Wine Image */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden group order-1 lg:order-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aiDoZ7JFRxIHdOq6zrma4STHRxYGMi.png"
            alt="Sommelier gießt Rotwein in ein elegantes Weinglas"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/60 lg:via-transparent lg:to-transparent" />
          
          {/* Floating Badge */}
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10">
            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-5 py-3 rounded-full border border-red/30">
              <Wine className="w-5 h-5 text-red" />
              <span className="text-white font-medium text-sm tracking-wide">Offene Weine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
