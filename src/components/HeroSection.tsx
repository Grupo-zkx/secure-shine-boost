import { Button } from "@/components/ui/button"
import { Shield, Award, Clock, Users } from "lucide-react"
import heroImage from "@/assets/hero-zkx-green.jpg"

// Paleta principal
const VERDE = "#237E45"
const PRATA = "#BFC8CC"
const BRANCO = "#FFFFFF"

const stats = [
  { icon: Shield, label: "Anos de Experiência", value: "20+" },
  { icon: Award, label: "Certificações", value: "15+" },
  { icon: Clock, label: "Disponibilidade", value: "24/7" },
  { icon: Users, label: "Clientes Ativos", value: "500+" },
]

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(115deg, ${VERDE} 42%, ${PRATA} 100%)`,
      }}
    >
      {/* Fundo com geometria (SVG poligonal ou clip-path) e textura leve */}
      <div className="absolute inset-0 z-0">
        {/* Imagem de fundo segmentada: geométrica, sem poluir texto */}
        <img
          src={heroImage}
          alt="Transporte seguro de valores"
          className="w-full h-full object-cover object-center"
          style={{
            opacity: 0.19,
            mixBlendMode: "multiply",
            clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
          }}
        />
        {/* Sombra/área geométrica sobrepondo o rodapé da seção (exemplo: ângulo embaixo) */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 lg:h-44"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <polygon
            fill={BRANCO}
            points="0,8 100,0 100,10 0,10"
            opacity="0.97"
          />
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Esquerda */}
          <div className="space-y-10 max-w-2xl">
            <div className="space-y-6">
              <h1 className="font-black leading-tight tracking-tight text-[clamp(2.2rem,6vw,4.5rem)]">
                <span className="block text-white">Transporte</span>
                <span className="block" style={{ color: PRATA }}>
                  Seguro
                </span>
                <span className="block text-white">de Valores</span>
              </h1>
              <p
                className="text-lg sm:text-xl max-w-xl text-white"
                style={{ textShadow: "0 2px 12px rgba(35,126,69,0.14)" }}
              >
                Protegemos o que é mais importante para seu negócio.
                <br />
                Soluções completas em transporte de valores com tecnologia de
                ponta e equipe especializada.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-3">
              <Button
                size="xl"
                className="bg-[#237E45] text-white text-lg font-bold px-7 py-4 rounded-full shadow-none hover:brightness-110 transition"
              >
                Solicitar Cotação Segura <Shield className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-2 border-[#BFC8CC] text-[#237E45] font-bold px-7 py-4 rounded-full hover:bg-[#237E45]/10 transition"
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Indicadores de confiança */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#237E45]" />
                <span className="text-xs sm:text-sm text-[#BFC8CC]">
                  Licenciado pela Polícia Federal
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#237E45]" />
                <span className="text-xs sm:text-sm text-[#BFC8CC]">
                  ISO 9001 Certificado
                </span>
              </div>
            </div>
          </div>
          {/* Direita: stats geométricos */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl px-6 py-8 flex flex-col items-center justify-center text-center border-2"
                  style={{
                    borderColor: PRATA,
                    background: BRANCO,
                    boxShadow: "0 4px 24px 0 rgba(35,126,69,0.10)",
                    clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)", // levemente 'slanted'
                    transition: "box-shadow 0.22s, transform 0.22s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 28px 0 ${VERDE}22`
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.04)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 24px 0 rgba(35,126,69,0.10)"
                    e.currentTarget.style.transform = "none"
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${VERDE} 70%, ${PRATA} 100%)`,
                      width: 48,
                      height: 48,
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-[#237E45]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#BFC8CC] font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
