import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Banknote,
  Building2,
  ShoppingCart,
  CreditCard,
  Gem,
  Factory,
  ArrowRight,
  Shield,
} from "lucide-react"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"
const BRANCO = "#FFFFFF"

const services = [
  {
    icon: Banknote,
    title: "Transporte de Numerário",
    description:
      "Movimentação segura de dinheiro entre agências bancárias, caixas eletrônicos e estabelecimentos comerciais.",
    features: [
      "Veículos blindados",
      "Equipe armada",
      "Rastreamento GPS",
      "Seguro total",
    ],
  },
  {
    icon: Gem,
    title: "Transporte de Joias e Metais",
    description:
      "Especialistas no transporte de objetos de alto valor como joias, metais preciosos e obras de arte.",
    features: [
      "Embalagem especial",
      "Escolta especializada",
      "Certificação",
      "Avaliação prévia",
    ],
  },
  {
    icon: Building2,
    title: "Abastecimento de ATMs",
    description:
      "Serviço completo de abastecimento e manutenção de caixas eletrônicos com equipe técnica especializada.",
    features: [
      "Manutenção técnica",
      "Reposição 24h",
      "Monitoramento",
      "Relatórios detalhados",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Coleta em Comércios",
    description:
      "Coleta programada de valores em estabelecimentos comerciais com horários flexíveis.",
    features: [
      "Horários flexíveis",
      "Coleta programada",
      "Comprovantes",
      "Sistema online",
    ],
  },
  {
    icon: CreditCard,
    title: "Processamento de Valores",
    description:
      "Contagem, conferência e processamento de valores com tecnologia de ponta e total transparência.",
    features: [
      "Contagem automatizada",
      "Auditoria completa",
      "Relatórios online",
      "Certificação digital",
    ],
  },
  {
    icon: Factory,
    title: "Soluções Corporativas",
    description:
      "Soluções personalizadas para grandes empresas e indústrias com necessidades específicas.",
    features: [
      "Planejamento customizado",
      "Consultoria especializada",
      "SLA garantido",
      "Suporte 24/7",
    ],
  },
]

const ServicesSection = () => (
  <section id="services" className="py-24 bg-white">
    <div className="container mx-auto px-4">
      {/* Título */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl lg:text-5xl font-black mb-4"
          style={{ color: VERDE }}
        >
          Nossos Serviços
        </h2>
        <p
          className="text-lg lg:text-xl max-w-xl mx-auto"
          style={{ color: PRATA }}
        >
          Segurança, tecnologia e eficiência para proteger seus valores — o que
          há de mais moderno para sua empresa.
        </p>
      </div>

      {/* Grid de Serviços */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Card
              key={service.title}
              className="transition-transform duration-200 hover:scale-[1.025] hover:shadow-lg bg-white border border-[#E6E9EA] shadow-sm"
              style={{
                minHeight: 370,
                borderRadius: 20,
              }}
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Ícone */}
                <div
                  className="flex items-center justify-center w-14 h-14 mb-6 rounded-full"
                  style={{
                    background: PRATA,
                  }}
                >
                  <Icon className="w-8 h-8 text-[#237E45]" />
                </div>
                {/* Título e descrição */}
                <h3 className="text-xl font-bold mb-2" style={{ color: VERDE }}>
                  {service.title}
                </h3>
                <p
                  className="text-base text-[#6a7682] mb-4"
                  style={{ minHeight: 64 }}
                >
                  {service.description}
                </p>
                {/* Features */}
                <ul className="flex flex-col gap-1 mb-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-[#6a7682]"
                    >
                      <Shield className="w-4 h-4 mr-1 text-[#237E45]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Botão CTA */}
                <Button
                  variant="ghost"
                  className="w-full mt-auto font-bold text-[#237E45] border border-[#237E45] rounded-full py-2 hover:bg-[#237E45]/10 transition"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* CTA simples final */}
      <div className="text-center pt-6">
        <div
          className="inline-block px-8 py-8 rounded-2xl"
          style={{ background: VERDE }}
        >
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2">
            Precisa de uma solução personalizada?
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-5">
            Nossa equipe está pronta para entender seu desafio e montar uma
            proposta exclusiva para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="font-bold bg-white text-[#237E45] px-8 py-3 rounded-full hover:bg-[#BFC8CC]/60 hover:text-[#237E45] border-none"
            >
              Falar com Especialista
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#237E45] text-[#237E45] px-8 py-3 rounded-full transition font-bold
    hover:bg-[#BFC8CC]/30 hover:text-[#237E45] hover:border-[#237E45]"
              style={{ borderWidth: 2 }}
            >
              Ver Casos de Sucesso
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ServicesSection
