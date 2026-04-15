"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, BookOpen, Calendar, Sparkles, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const menuCategories = [
  {
    title: "Antipasti",
    items: [
      { name: "Bruschetta Classica", description: "Geröstetes Brot mit Tomaten, Knoblauch und Basilikum", price: "7,50", image: "/images/food/bruschetta.jpg" },
      { name: "Carpaccio di Manzo", description: "Hauchdünnes Rinderfilet mit Rucola und Parmesan", price: "14,90", image: "/images/food/carpaccio.jpg" },
      { name: "Vitello Tonnato", description: "Kalbfleisch mit Thunfischsauce", price: "13,50", image: "/images/food/vitello-tonnato.jpg" },
      { name: "Antipasto Misto", description: "Gemischte italienische Vorspeisen", price: "16,90", image: "/images/food/antipasto-misto.jpg" },
    ]
  },
  {
    title: "Pasta",
    items: [
      { name: "Spaghetti Carbonara", description: "Mit Speck, Ei und Parmesan", price: "13,90", image: "/images/food/carbonara.jpg" },
      { name: "Tagliatelle al Tartufo", description: "Mit frischer Trüffelsauce", price: "18,90", image: "/images/food/tagliatelle-tartufo.jpg" },
      { name: "Penne all'Arrabbiata", description: "Mit scharfer Tomatensauce", price: "11,90", image: "/images/food/penne-arrabbiata.jpg" },
      { name: "Lasagne della Casa", description: "Hausgemachte Lasagne nach Familienrezept", price: "14,50", image: "/images/food/lasagne.jpg" },
    ]
  },
  {
    title: "Pizza",
    items: [
      { name: "Margherita", description: "Tomaten, Mozzarella, Basilikum", price: "10,90", image: "/images/food/margherita.jpg" },
      { name: "Quattro Formaggi", description: "Vier verschiedene Käsesorten", price: "13,90", image: "/images/food/quattro-formaggi.jpg" },
      { name: "Diavola", description: "Scharfe Salami, Peperoni", price: "13,50", image: "/images/food/diavola.jpg" },
      { name: "Prosciutto e Funghi", description: "Schinken und Champignons", price: "13,90", image: "/images/food/prosciutto-funghi.jpg" },
    ]
  },
  {
    title: "Vom Rind",
    items: [
      { name: "Filetto di Manzo alla Griglia", description: "Rinderfilet (180g) vom Grill mit Kräuterbutter", price: "34,50", image: "/images/food/filetto-griglia.jpg" },
      { name: "Filetto di Manzo alla Barolo", description: "Rinderfilet (180g) mit Barolosauce", price: "35,90", image: "/images/food/filetto-barolo.jpg" },
      { name: "Filetto di Manzo Tartufo", description: "Rinderfilet (180g) auf Trüffelsauce mit Tagliatelle", price: "37,50", image: "/images/food/filetto-tartufo.jpg" },
      { name: "Bistecca alla Griglia", description: "Rumpsteak (200g) vom Grill mit Tagesbeilage", price: "29,90", image: "/images/food/bistecca.jpg" },
    ]
  },
  {
    title: "Dolci",
    items: [
      { name: "Tiramisu", description: "Klassisches italienisches Dessert", price: "7,90", image: "/images/food/tiramisu.jpg" },
      { name: "Panna Cotta", description: "Mit Beerensoße", price: "6,90", image: "/images/food/panna-cotta.jpg" },
      { name: "Gelato Misto", description: "Gemischtes Eis (3 Kugeln)", price: "5,90", image: "/images/food/gelato.jpg" },
      { name: "Tartufo", description: "Schokoladeneis mit flüssigem Kern", price: "7,50", image: "/images/food/tartufo-dessert.jpg" },
    ]
  },
]

interface SelectedItem {
  name: string
  description: string
  price: string
  image: string
}

export default function MenuSection() {
  const [currentCategory, setCurrentCategory] = useState(0)
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null)

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % menuCategories.length)
  }

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + menuCategories.length) % menuCategories.length)
  }

  const scrollToReservation = () => {
    setSelectedItem(null)
    setTimeout(() => {
      const element = document.getElementById("reservation")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const openItemModal = (item: SelectedItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <section id="menu" className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-gold/60 text-sm tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-gold/30" />
              <Sparkles className="w-4 h-4" />
              <span>Cucina Italiana</span>
              <Sparkles className="w-4 h-4" />
              <span className="w-8 h-px bg-gold/30" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
              La Nostra <span className="text-gold italic">Carta</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-md mx-auto">
              Entdecken Sie unsere authentischen italienischen Gerichte
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1.5 border border-white/10">
              {menuCategories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => setCurrentCategory(index)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    currentCategory === index
                      ? "bg-gold text-charcoal shadow-md"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
            {menuCategories[currentCategory].items.map((item, index) => (
              <div
                key={item.name}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Food Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-gold text-charcoal font-bold text-sm px-3 py-1 rounded-full shadow-md">
                  {item.price}&euro;
                </div>

                {/* More Button */}
                <button
                  onClick={() => openItemModal(item)}
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-md hover:bg-gold hover:text-white transition-colors text-sm font-semibold text-charcoal"
                  aria-label="Mehr anzeigen"
                >
                  Mehr
                </button>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h4 className="font-playfair text-white text-lg md:text-xl font-semibold leading-tight mb-1">
                    {item.name}
                  </h4>
                  <p className="text-white/70 text-xs md:text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation & CTA Row */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevCategory}
              className="w-11 h-11 rounded-full border-2 border-white/20 text-white hover:border-gold hover:text-gold hover:bg-gold/10 transition-all flex items-center justify-center"
              aria-label="Previous category"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <Link
              href="/speisekarte"
              className="inline-flex items-center gap-2 bg-gold text-charcoal hover:bg-gold/90 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              Komplette Speisekarte
            </Link>

            <button
              onClick={nextCategory}
              className="w-11 h-11 rounded-full border-2 border-white/20 text-white hover:border-gold hover:text-gold hover:bg-gold/10 transition-all flex items-center justify-center"
              aria-label="Next category"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Category Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {menuCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setCurrentCategory(index)}
                className={`transition-all duration-300 ${
                  index === currentCategory 
                    ? "w-8 h-2 bg-gold rounded-full" 
                    : "w-2 h-2 bg-white/20 rounded-full hover:bg-white/40"
                }`}
                aria-label={`Go to ${cat.title}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Lightbox for Selected Item */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-2xl bg-charcoal rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red text-white transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className="object-cover"
              />
              {/* Price Badge */}
              <div className="absolute top-4 left-4 bg-gold text-charcoal font-bold text-lg px-4 py-2 rounded-full shadow-lg">
                {selectedItem.price}&euro;
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-2">
                {selectedItem.name}
              </h3>
              <p className="text-white/60 text-base md:text-lg mb-6">
                {selectedItem.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/speisekarte"
                  className="flex-1 flex items-center justify-center gap-2 bg-gold text-charcoal hover:bg-gold/90 font-semibold px-6 py-3.5 rounded-full transition-colors text-center"
                >
                  <BookOpen className="w-5 h-5" />
                  Speisekarte ansehen
                </Link>
                <button
                  onClick={scrollToReservation}
                  className="flex-1 flex items-center justify-center gap-2 bg-red text-white hover:bg-red/90 font-semibold px-6 py-3.5 rounded-full transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Tisch reservieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
