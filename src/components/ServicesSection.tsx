import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Banknote, 
  Building2, 
  ShoppingCart, 
  CreditCard, 
  Gem, 
  Factory,
  ArrowRight,
  Shield,
  Clock,
  Users
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Banknote,
      title: "Transporte de Numerário",
      description: "Movimentação segura de dinheiro entre agências bancárias, caixas eletrônicos e estabelecimentos comerciais.",
      features: ["Veículos blindados", "Equipe armada", "Rastreamento GPS", "Seguro total"]
    },
    {
      icon: Gem,
      title: "Transporte de Joias e Metais",
      description: "Especialistas no transporte de objetos de alto valor como joias, metais preciosos e obras de arte.",
      features: ["Embalagem especial", "Escolta especializada", "Certificação", "Avaliação prévia"]
    },
    {
      icon: Building2,
      title: "Abastecimento de ATMs",
      description: "Serviço completo de abastecimento e manutenção de caixas eletrônicos com equipe técnica especializada.",
      features: ["Manutenção técnica", "Reposição 24h", "Monitoramento", "Relatórios detalhados"]
    },
    {
      icon: ShoppingCart,
      title: "Coleta em Comércios",
      description: "Coleta programada de valores em estabelecimentos comerciais com horários flexíveis.",
      features: ["Horários flexíveis", "Coleta programada", "Comprovantes", "Sistema online"]
    },
    {
      icon: CreditCard,
      title: "Processamento de Valores",
      description: "Contagem, conferência e processamento de valores com tecnologia de ponta e total transparência.",
      features: ["Contagem automatizada", "Auditoria completa", "Relatórios online", "Certificação digital"]
    },
    {
      icon: Factory,
      title: "Soluções Corporativas",
      description: "Soluções personalizadas para grandes empresas e indústrias com necessidades específicas.",
      features: ["Planejamento customizado", "Consultoria especializada", "SLA garantido", "Suporte 24/7"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em transporte de valores, sempre com a máxima
            segurança e tecnologia de ponta para proteger seus ativos.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-glow transition-smooth border-0 shadow-card bg-background animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-primary group-hover:text-primary-light transition-smooth">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Shield className="w-4 h-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action */}
                    <Button variant="outline" className="w-full group/btn">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-90" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Precisa de uma Solução Personalizada?
              </h3>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para desenvolver uma solução
                sob medida para as necessidades específicas da sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="xl">
                  Falar com Especialista
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Ver Casos de Sucesso
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;