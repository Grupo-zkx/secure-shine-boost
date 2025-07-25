import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Youtube,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const services = [
    "Transporte de Numerário",
    "Transporte de Valores",
    "Abastecimento de ATMs",
    "Coleta em Comércios",
    "Processamento de Valores",
    "Consultoria em Segurança"
  ];

  const quickLinks = [
    { label: "Início", href: "#home" },
    { label: "Serviços", href: "#services" },
    { label: "Sobre", href: "#about" },
    { label: "Clientes", href: "#clients" },
    { label: "Contato", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-accent">ZKX</span>
                  <span className="text-xs text-primary-foreground/80">TRANSPORTES</span>
                </div>
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed">
                Há mais de 20 anos oferecendo soluções completas em transporte 
                seguro de valores, com tecnologia de ponta e equipe especializada.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-sm">(11) 3333-4444</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-sm">contato@zkxtransportes.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-sm">São Paulo - SP</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-accent">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="text-sm text-primary-foreground/90 hover:text-accent transition-smooth"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-accent">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-primary-foreground/90 hover:text-accent transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <h4 className="font-semibold text-accent">Certificações</h4>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li>• Licença Polícia Federal</li>
                  <li>• ISO 9001</li>
                  <li>• ISO 27001</li>
                  <li>• ABNT NBR 15000</li>
                </ul>
              </div>
            </div>

            {/* Newsletter and social */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-accent">Mantenha-se Atualizado</h3>
              
              <div className="space-y-4">
                <p className="text-sm text-primary-foreground/90">
                  Receba novidades sobre segurança e nossos serviços.
                </p>
                
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Seu email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button variant="accent" className="w-full">
                    Inscrever-se
                  </Button>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-accent">Siga-nos</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/80">
                © 2024 ZKX Transportes. Todos os direitos reservados.
              </div>
              
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Política de Privacidade
                </a>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth">
                  Termos de Uso
                </a>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/80 transition-smooth"
                  aria-label="Voltar ao topo"
                >
                  <ArrowUp className="w-5 h-5 text-accent-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;