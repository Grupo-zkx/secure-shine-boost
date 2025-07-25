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
      icon: Landmark,
      title: "Bancos e Financeiras",
      description: "Instituições financeiras de todos os portes",
      companies: ["Banco do Brasil", "Caixa Econômica", "Santander", "Itaú", "Bradesco"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ShoppingBag,
      title: "Varejo e Comércio",
      description: "Redes de varejo e estabelecimentos comerciais",
      companies: ["Shopping Centers", "Supermercados", "Lojas de Departamento", "Farmácias"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Gem,
      title: "Joalherias e Relojoarias",
      description: "Estabelecimentos especializados em objetos de valor",
      companies: ["Vivara", "H.Stern", "Relojoarias", "Casas de Câmbio"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: CreditCard,
      title: "Processamento de Cartões",
      description: "Empresas de meios de pagamento",
      companies: ["Cielo", "Rede", "Stone", "PagSeguro"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Factory,
      title: "Indústrias",
      description: "Grandes complexos industriais",
      companies: ["Multinacionais", "Indústrias Químicas", "Siderúrgicas", "Alimentícias"],
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: Hospital,
      title: "Hospitais e Clínicas",
      description: "Instituições de saúde",
      companies: ["Hospitais Privados", "Clínicas", "Laboratórios", "Planos de Saúde"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: GraduationCap,
      title: "Instituições de Ensino",
      description: "Universidades e escolas",
      companies: ["Universidades", "Escolas Privadas", "Cursos Técnicos", "Faculdades"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Fuel,
      title: "Postos e Combustíveis",
      description: "Rede de postos de combustível",
      companies: ["Shell", "Petrobras", "Ipiranga", "Ale"],
      color: "from-yellow-500 to-yellow-600"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clientSegments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <Card 
                key={segment.title}
                className="group hover:shadow-glow transition-smooth border-0 shadow-card bg-background animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${segment.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-primary group-hover:text-primary-light transition-smooth">
                        {segment.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {segment.description}
                      </p>
                    </div>

                    {/* Companies list */}
                    <div className="space-y-1">
                      {segment.companies.slice(0, 3).map((company) => (
                        <div key={company} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span>{company}</span>
                        </div>
                      ))}
                      {segment.companies.length > 3 && (
                        <div className="text-xs text-primary font-medium">
                          +{segment.companies.length - 3} outros
                        </div>
                      )}
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
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-primary-foreground/90">Clientes Ativos</div>
            </div>
            <div className="space-y-2 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-accent">8</div>
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