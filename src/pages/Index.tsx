import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClientsCarousel from "@/components/ClientsCarouselSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <ClientsCarousel />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
