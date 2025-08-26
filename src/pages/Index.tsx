import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ClientsCarousel from "@/components/ClientsCarouselSection"
import ContactSection from "@/components/ContactSection"

const Index = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll automático para o elemento hash, responsivo em todas telas
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        // marginTop mobile se existir sticky nav
        const y = el.getBoundingClientRect().top + window.pageYOffset - 16
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }, [location.hash])

  return (
    <div className="min-h-screen bg-white">
      <main className="w-full flex flex-col">
        <HeroSection />
        <AboutSection />
        <ClientsCarousel />
        <ContactSection />
      </main>
    </div>
  )
}

export default Index
