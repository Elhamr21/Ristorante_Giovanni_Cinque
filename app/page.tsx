import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MenuSection from "@/components/menu-section"
import GallerySection from "@/components/gallery-section"
import HoursDirectionsSection from "@/components/hours-directions-section"
import ReservationSection from "@/components/reservation-section"
import Footer from "@/components/footer"
import MobileReserveButton from "@/components/mobile-reserve-button"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <HoursDirectionsSection />
      <ReservationSection />
      <Footer />
      <MobileReserveButton />
      <BackToTop />
    </main>
  )
}
