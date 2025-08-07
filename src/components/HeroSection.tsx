import { Button } from "@/components/ui/button"
import { Shield, Award, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import heroImage from "@/assets/hero-zkx-green.jpg"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"
const BRANCO = "#FFFFFF"

const stats = [
  { icon: Shield, label: "Anos de Experiência", value: "20+" },
  { icon: Award, label: "Certificações", value: "15+" },
  { icon: Clock, label: "Disponibilidade", value: "24/7" },
  { icon: Users, label: "Clientes Ativos", value: "500+" },
]

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.22 + i * 0.14,
      duration: 0.7,
      type: "spring",
      stiffness: 90,
    },
  }),
  hover: { scale: 1.055, boxShadow: `0 10px 34px ${VERDE}22` },
  tap: { scale: 0.97 },
}

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{
      background: `linear-gradient(115deg, ${VERDE} 42%, ${PRATA} 100%)`,
    }}
  >
    {/* Fundo */}
    <div className="absolute inset-0 z-0">
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
      <svg
        className="absolute bottom-0 left-0 w-full h-32 lg:h-44"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        style={{ display: "block" }}
      >
        <polygon fill={BRANCO} points="0,8 100,0 100,10 0,10" opacity="0.97" />
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
              className="bg-[#237E45] text-white text-lg font-bold px-7 py-4 rounded-full shadow-none hover:scale-105 hover:shadow-xl active:scale-100 transition-all duration-150 flex items-center group"
              tabIndex={0}
            >
              Solicitar Cotação Segura
              <Shield className="ml-2 w-5 h-5 group-hover:animate-bounce-small" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-2 border-[#BFC8CC] text-[#237E45] font-bold px-7 py-4 rounded-full hover:bg-[#237E45]/10 hover:scale-105 active:scale-100 transition-all duration-150"
            >
              Conhecer Serviços
            </Button>
          </div>
          {/* Indicadores de confiança */}
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#237E45] animate-pulse" />
              <span className="text-xs sm:text-sm text-[#BFC8CC]">
                Licenciado pela Polícia Federal
              </span>
            </div>
          </div>
        </div>
        {/* Direita: stats - QUADRADOS maiores, texto verde */}
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                variants={cardVariants}
                className="flex flex-col items-center justify-center text-center cursor-pointer"
                style={{
                  width: 168,
                  height: 168,
                  background: BRANCO,
                  borderRadius: 22,
                  border: `2.5px solid ${PRATA}`,
                  boxShadow: "0 2px 18px 0 rgba(35,126,69,0.11)",
                  transition: "border 0.17s, box-shadow 0.17s, transform 0.17s",
                }}
              >
                <div
                  className="flex items-center justify-center mb-3"
                  style={{
                    background: `linear-gradient(90deg, ${VERDE} 62%, ${PRATA} 100%)`,
                    borderRadius: 14,
                    width: 58,
                    height: 58,
                    boxShadow: `0 2px 12px 0 ${VERDE}24`,
                  }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className="text-4xl font-extrabold"
                  style={{ color: VERDE }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-base font-bold mt-2"
                  style={{ color: VERDE }}
                >
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
    <style>{`
      @keyframes bounce-small {
        0% { transform: translateY(0);}
        20% { transform: translateY(-7px);}
        40% { transform: translateY(0);}
        60% { transform: translateY(-4px);}
        80% { transform: translateY(0);}
        100% { transform: none;}
      }
      .group-hover\\:animate-bounce-small:hover {
        animation: bounce-small 0.65s;
      }
    `}</style>
  </section>
)

export default HeroSection
