import { Card, CardContent } from "@/components/ui/card";
import { 
  Building, 
  ShoppingBag, 
  Gem, 
  Landmark, 
  Factory, 
  Store,
  CreditCard,
  Coins,
  Hospital,
  GraduationCap,
  Fuel,
  Home
} from "lucide-react";

const ClientsCarousel = () => {
  const clientSegments = [
    {
      image: "https://images.unsplash.com/photo-1681505526188-805e68c77582?q=80&w=1170&auto=format&fit=crop",
      text: "Bancos & Cooperativas",
      description: "Instituições financeiras de todos os portes",
      icon: Landmark,
      color: "from-green-500 to-green-600"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1683121938935-118d0a16a469?q=80&w=1170&auto=format&fit=crop",
      text: "Varejo",
      description: "Redes de varejo e estabelecimentos comerciais",
      icon: ShoppingBag,
      color: "from-blue-500 to-blue-600"
    },
    {
      image: "https://images.unsplash.com/photo-1611533761160-c3fadf296645?q=80&w=1170&auto=format&fit=crop",
      text: "Postos de Combustíveis",
      description: "Rede de postos de combustível",
      icon: Fuel,
      color: "from-orange-500 to-orange-600"
    },
    {
      image: "https://maquininhadecartao.tec.br/wp-content/uploads/2024/05/loteria-1300x731.webp",
      text: "Lotérica",
      description: "Casas lotéricas e jogos",
      icon: Coins,
      color: "from-purple-500 to-purple-600"
    },
    {
      image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1170&auto=format&fit=crop",
      text: "Farmácia",
      description: "Redes de farmácias e drogarias",
      icon: Hospital,
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Atendemos diversos segmentos com soluções personalizadas, 
            sempre mantendo os mais altos padrões de segurança e confiabilidade.
          </p>
        </div>

        {/* Clients grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {clientSegments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <Card 
                key={segment.text}
                className="group hover:shadow-glow transition-smooth border-0 shadow-card bg-background animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Background image */}
                    <div className="h-40 w-full relative overflow-hidden">
                      <img
                        src={segment.image}
                        alt={segment.text}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${segment.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-primary group-hover:text-primary-light transition-smooth">
                        {segment.text}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {segment.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-scale-in">
              <div className="text-4xl font-bold text-accent">300+</div>
              <div className="text-primary-foreground/90">Clientes Ativos</div>
            </div>
            <div className="space-y-2 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-accent">5</div>
              <div className="text-primary-foreground/90">Segmentos Atendidos</div>
            </div>
            <div className="space-y-2 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-accent">20+</div>
              <div className="text-primary-foreground/90">Anos de Experiência</div>
            </div>
            <div className="space-y-2 animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-accent">100%</div>
              <div className="text-primary-foreground/90">Segurança Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;