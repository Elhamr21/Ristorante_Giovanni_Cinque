"use client"

import { Star, Quote, ExternalLink } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Helen Dwyer",
    role: "Local Guide",
    rating: 5,
    date: "vor 1 Jahr",
    text: "The Abacus Tierpark Hotel restaurant has been closed both nights we stayed so we have had 2 meals at Giovanni Cinque and they have both been delicious! Traditional Italian, done well. The staff on both Sunday and Monday nights have been wonderful.",
    avatar: "H"
  },
  {
    id: 2,
    name: "Celine Mouzannar",
    role: "",
    rating: 5,
    date: "vor 1 Jahr",
    text: "I recently visited with my family. All our meals were delicious. I had the Carbonara Alla Mama, one of the best I've ever had. The price was affordable and offered excellent value for money. The staff's service was welcoming and warm.",
    avatar: "C"
  },
  {
    id: 3,
    name: "Marco B.",
    role: "",
    rating: 5,
    date: "vor 6 Monaten",
    text: "Authentische italienische Küche wie bei Mama! Die Pizza aus dem Steinofen ist fantastisch und die hausgemachte Pasta ein Traum. Sehr freundliches Personal und gemütliche Atmosphäre.",
    avatar: "M"
  },
  {
    id: 4,
    name: "Sarah K.",
    role: "Local Guide",
    rating: 5,
    date: "vor 3 Monaten",
    text: "Wir waren mit unseren Kindern dort und wurden herzlich empfangen. Das Essen war ausgezeichnet und die Portionen großzügig. Definitiv unser neues Lieblingsrestaurant in der Nähe vom Tierpark!",
    avatar: "S"
  }
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-gold/60 text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-gold/30" />
            <span>Bewertungen</span>
            <span className="w-8 h-px bg-gold/30" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-3">
            Le <span className="text-gold italic">Recensioni</span>
          </h2>
          <p className="text-white/50 text-sm tracking-wider uppercase mb-6">
            Was unsere Gäste sagen
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-5 h-5 ${star <= 4.5 ? "text-gold fill-gold" : "text-gold fill-gold/50"}`} 
                />
              ))}
            </div>
            <span className="text-xl font-bold text-white">4.5</span>
            <span className="text-white/40 text-sm">(226 Bewertungen)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-gold/30 transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-6 h-6 text-gold/10 group-hover:text-gold/20 transition-colors" />
              
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-3.5 h-3.5 ${star <= review.rating ? "text-gold fill-gold" : "text-white/20"}`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-4">
                {`"${review.text}"`}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-gold text-charcoal flex items-center justify-center font-semibold text-xs">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{review.name}</p>
                  <p className="text-white/40 text-xs">
                    {review.role && `${review.role} · `}{review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a 
            href="https://www.google.com/search?q=giovanni+cinque+berlin+bewertungen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium transition-colors"
          >
            Alle Bewertungen auf Google ansehen
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
