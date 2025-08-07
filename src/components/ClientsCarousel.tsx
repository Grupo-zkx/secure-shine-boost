import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import { Card, CardContent } from "@/components/ui/card"
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
  Home,
} from "lucide-react"

// Paleta
const VERDE = "#237E45"
const PRATA = "#BFC8CC"
const BRANCO = "#FFFFFF"

const clientSegments = [
  {
    image: "/assets/corporativo.jpg",
    text: "Bancos & Cooperativas",
    description: "Instituições financeiras de todos os portes",
    icon: Landmark,
    color: "from-[#237E45] to-[#3dbb78]", // verde gradiente
  },
  {
    image: "/assets/varejo.jpg",
    text: "Varejo",
    description: "Redes de varejo e estabelecimentos comerciais",
    icon: ShoppingBag,
    color: "from-[#BFC8CC] to-[#98A9B6]", // prata/cinza azulado
  },
  {
    image: "/assets/rede_combustivel.jpg",
    text: "Postos de Combustíveis",
    description: "Redes de postos de combustível",
    icon: Fuel,
    color: "from-[#f26907] to-[#ffb44d]", // laranja quente
  },
  {
    image: "/assets/loterica.jpg",
    text: "Lotérica",
    description: "Casas lotéricas e jogos",
    icon: Coins,
    color: "from-[#6b5ca5] to-[#BFC8CC]", // roxo/prata
  },
  {
    image: "/assets/farmacia.jpg",
    text: "Farmácia",
    description: "Redes de farmácias e drogarias",
    icon: Hospital,
    color: "from-[#d8344a] to-[#ffb1c0]", // vermelho/vinho suave
  },
]

const stats = [
  { value: "300+", label: "Clientes Ativos" },
  { value: "5", label: "Segmentos Atendidos" },
  { value: "20+", label: "Anos de Experiência" },
  { value: "100%", label: "Segurança Garantida" },
]

export default function ClientsCarousel() {
  return (
    <section id="clients" className="py-24 bg-[#f8fafb] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div
            className="w-12 h-1 mx-auto mb-6 rounded-full"
            style={{ background: VERDE }}
          />
          <h2
            className="text-4xl lg:text-5xl font-black mb-2"
            style={{ color: VERDE }}
          >
            Principais Clientes
          </h2>
          <p className="text-lg text-[#556267] max-w-2xl mx-auto font-medium">
            Atendemos diversos segmentos com soluções personalizadas, sempre
            mantendo os mais altos padrões de segurança e confiabilidade.
          </p>
        </div>

        {/* Carrossel Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 2500, // tempo entre slides (em ms)
            disableOnInteraction: false, // continua após interação manual
          }}
          className="mb-16 px-2 select-none"
          style={{ paddingBottom: 48 }}
        >
          {clientSegments.map((segment, idx) => {
            const IconComponent = segment.icon
            return (
              <SwiperSlide key={segment.text}>
                <Card
                  className="group relative overflow-hidden border-none shadow-lg bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    borderRadius: 20,
                    minHeight: 310,
                    height: 350,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Imagem de fundo maior - ocupando ~80% do card */}
                  <div className="relative" style={{ flex: "0 0 80%" }}>
                    <div className="h-56 w-full relative overflow-hidden">
                      <img
                        src={segment.image}
                        alt={segment.text}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-800"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${segment.color} via-[#0003] to-transparent opacity-80`}
                      />
                    </div>
                    {/* Ícone grande */}
                    <div className="absolute top-4 right-4 shadow-xl">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${segment.color} rounded-xl flex items-center justify-center`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Conteúdo reduzido - classe px-3 py-3 para ocupar ~20% */}
                  <CardContent
                    className="pt-2 pb-2 px-3 flex flex-col items-center"
                    style={{ flex: "1 0 20%", minHeight: 0 }}
                  >
                    <h3
                      className="text-base font-extrabold mb-1 text-[#237E45] group-hover:text-black transition-colors duration-200 text-center"
                      style={{ lineHeight: 1.1 }}
                    >
                      {segment.text}
                    </h3>
                    <p className="text-xs text-[#6a7682] text-center font-medium">
                      {segment.description}
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* Stats animadas */}
        <div className="rounded-2xl p-8 lg:p-12 mt-2 bg-[#237E45] flex flex-col md:flex-row justify-evenly items-center gap-9 animate-fade-in-up">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex-1 flex flex-col items-center"
              style={{
                animation: "scale-in 1.1s cubic-bezier(.22,1,.36,1) both",
                animationDelay: `${idx * 0.11 + 0.09}s`,
              }}
            >
              <span className="text-4xl lg:text-5xl font-extrabold text-white mb-1 animate-countup">
                {stat.value}
              </span>
              <span
                className="text-white text-base font-medium uppercase tracking-wide"
                style={{ opacity: 0.9 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Keyframes para animação extra */}
        <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: none; }
          }
          .fade-in-up { animation: fade-in-up 1.1s cubic-bezier(.18,.9,.37,1.01) both; }
          @keyframes scale-in {
            0% { opacity: 0; transform: scale(.85);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-countup {
            animation: countup 1.4s both cubic-bezier(.14,.97,.65,1.01);
          }
          @keyframes countup {
            0% { opacity:0; transform: scale(.85);}
            60% { opacity:1; transform: scale(1.12);}
            100% { opacity:1; transform: scale(1);}
          }
        `}</style>
      </div>
    </section>
  )
}
