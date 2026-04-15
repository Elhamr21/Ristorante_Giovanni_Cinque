"use client"

import { useState } from "react"
import { Phone, Calendar, MapPin, Heart, Clock, Users, Send, Mail } from "lucide-react"
import Image from "next/image"

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        message: ""
      })
    }, 3000)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="reservation" className="py-20 md:py-28 bg-neutral-900 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold/60 text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-gold/30" />
            <span>Kontakt</span>
            <span className="w-8 h-px bg-gold/30" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Reservierung & <span className="text-gold italic">Kontakt</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-0.5 bg-red" />
            <Heart className="w-5 h-5 text-red fill-red" />
            <span className="w-12 h-0.5 bg-red" />
          </div>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Reservieren Sie Ihren Tisch online oder kontaktieren Sie uns direkt.
            <br />
            Wir freuen uns auf Ihren Besuch!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Reservation Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 order-2 lg:order-1">
            <h3 className="font-playfair text-2xl text-gold mb-6 text-center">
              Tisch reservieren
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-playfair text-xl text-white mb-2">Vielen Dank!</h4>
                <p className="text-white/60">Ihre Reservierungsanfrage wurde gesendet. Wir melden uns in Kürze bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ihr vollständiger Name"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-white placeholder:text-white/30"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                      E-Mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ihre@email.de"
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-white placeholder:text-white/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
                      Telefon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="030 123 456 78"
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-white placeholder:text-white/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Date, Time, Guests Row */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-white/80 mb-1.5">
                      Datum *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-white [color-scheme:dark]"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-white/80 mb-1.5">
                      Uhrzeit *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-white appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-charcoal">Wählen</option>
                        <option value="11:00" className="bg-charcoal">11:00</option>
                        <option value="11:30" className="bg-charcoal">11:30</option>
                        <option value="12:00" className="bg-charcoal">12:00</option>
                        <option value="12:30" className="bg-charcoal">12:30</option>
                        <option value="13:00" className="bg-charcoal">13:00</option>
                        <option value="13:30" className="bg-charcoal">13:30</option>
                        <option value="14:00" className="bg-charcoal">14:00</option>
                        <option value="17:00" className="bg-charcoal">17:00</option>
                        <option value="17:30" className="bg-charcoal">17:30</option>
                        <option value="18:00" className="bg-charcoal">18:00</option>
                        <option value="18:30" className="bg-charcoal">18:30</option>
                        <option value="19:00" className="bg-charcoal">19:00</option>
                        <option value="19:30" className="bg-charcoal">19:30</option>
                        <option value="20:00" className="bg-charcoal">20:00</option>
                        <option value="20:30" className="bg-charcoal">20:30</option>
                        <option value="21:00" className="bg-charcoal">21:00</option>
                        <option value="21:30" className="bg-charcoal">21:30</option>
                        <option value="22:00" className="bg-charcoal">22:00</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-white/80 mb-1.5">
                      Personen *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-white appearance-none cursor-pointer"
                      >
                        <option value="1" className="bg-charcoal">1 Person</option>
                        <option value="2" className="bg-charcoal">2 Personen</option>
                        <option value="3" className="bg-charcoal">3 Personen</option>
                        <option value="4" className="bg-charcoal">4 Personen</option>
                        <option value="5" className="bg-charcoal">5 Personen</option>
                        <option value="6" className="bg-charcoal">6 Personen</option>
                        <option value="7" className="bg-charcoal">7 Personen</option>
                        <option value="8" className="bg-charcoal">8+ Personen</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">
                    Nachricht (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Besondere Wünsche, Allergien, Anlass..."
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-white placeholder:text-white/30 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red hover:bg-red/90 disabled:bg-red/60 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Reservierung anfragen
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Quick Contact Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/giovanni-cinque-logo-YjPE7TJHKbq5Bj8cE7GigGqwmsSIuX.png"
                  alt="Giovanni Cinque Logo"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>

              <h3 className="font-playfair text-xl text-gold mb-6 text-center">
                Direkt anrufen
              </h3>

              {/* Phone Button */}
              <a
                href="tel:+493023302225"
                className="flex items-center justify-center gap-3 bg-red hover:bg-red/90 text-white font-bold text-lg px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mb-6"
              >
                <Phone className="w-6 h-6" />
                030 - 23 30 22 25
              </a>

              {/* Online Reservation Link */}
              <a
                href="https://www.quandoo.de/en/place/giovanni-cinque-am-tierpark-124206"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Online via Quandoo
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red" />
                </div>
                <h3 className="font-playfair text-xl text-gold">Adresse</h3>
              </div>
              <address className="not-italic text-white/60 leading-relaxed pl-13">
                <span className="font-semibold text-white">Ristorante Giovanni Cinque</span>
                <br />
                Am Tierpark 66
                <br />
                10319 Berlin
              </address>
              <a
                href="https://maps.google.com/?q=Am+Tierpark+66,+10319+Berlin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium mt-4 transition-colors"
              >
                Route planen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-playfair text-xl text-gold">Öffnungszeiten</h3>
              </div>
              <div className="space-y-2 text-white/60">
                <div className="flex justify-between">
                  <span>Montag - Sonntag</span>
                  <span className="font-semibold text-white">11:00 - 23:00</span>
                </div>
                <p className="text-sm text-white/40 pt-2 border-t border-white/10 mt-3">
                  Warme Küche bis 22:30 Uhr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
