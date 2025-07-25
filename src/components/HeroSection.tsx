import { Button } from "@/components/ui/button";
import { Shield, Award, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-zkx-green.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Shield, label: "Anos de Experiência", value: "20+" },
    { icon: Award, label: "Certificações", value: "15+" },
    { icon: Clock, label: "Disponibilidade", value: "24/7" },
    { icon: Users, label: "Clientes Ativos", value: "500+" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Transporte seguro de valores"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Transporte</span>
                <span className="block text-gradient-accent">Seguro</span>
                <span className="block">de Valores</span>
              </h1>
              <p className="text-xl text-white/90 max-w-xl">
                Protegemos o que é mais importante para seu negócio. Soluções
                completas em transporte de valores com tecnologia de ponta e
                equipe especializada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="xl" className="group">
                Solicitar Orçamento
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-smooth" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Conhecer Serviços
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-white/90 text-sm">Licenciado pela Polícia Federal</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-white/90 text-sm">ISO 9001 Certificado</span>
              </div>
            </div>
          </div>

          {/* Right content - Stats cards */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;