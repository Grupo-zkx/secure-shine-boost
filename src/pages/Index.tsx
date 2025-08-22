import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ClientsCarousel from "@/components/ClientsCarouselSection"
import ContactSection from "@/components/ContactSection"

const Index = () => {
  const location = useLocation()

  useEffect(() => {
    // Quando chegar na home com hash, faz scroll automático
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location.hash])

  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <ClientsCarousel />
        <ContactSection />
      </main>
    </div>
  )
}

export default Index
