import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Clientes", href: "#clients" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-smooth",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border/50"
          : "bg-transparent"
      )}
    >
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(11) 9999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contato@zkxtransportes.com.br</span>
            </div>
          </div>
          <div className="hidden md:block text-xs">
            Segurança e confiabilidade há mais de 20 anos
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">ZKX</span>
              <span className="text-xs text-muted-foreground">TRANSPORTES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="accent" size="lg">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="accent" size="lg" className="mt-4">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;