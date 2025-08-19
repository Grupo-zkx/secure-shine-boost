import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Card } from "@/components/ui/card"

const VERDE = "#237E45"

const clientSegments = [
  {
    image: "/assets/carroussel/corporativo.jpg",
    text: "Bancos & Cooperativas",
    description: "Instituições financeiras de todos os portes",
  },
  {
    image: "/assets/carroussel/varejo.jpg",
    text: "Varejo",
    description: "Redes de varejo e estabelecimentos comerciais",
  },
  {
    image: "/assets/carroussel/rede_combustivel.jpg",
    text: "Postos de Combustíveis",
    description: "Redes de postos de combustível",
  },
  {
    image: "/assets/carroussel/loterica.jpg",
    text: "Lotérica",
    description: "Casas lotéricas e jogos",
  },
  {
    image: "/assets/carroussel/farmacia.jpg",
    text: "Farmácia",
    description: "Redes de farmácias e drogarias",
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
            Principais Atuações
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mb-16 px-2 select-none"
          style={{ paddingBottom: 48 }}
        >
          {clientSegments.map((segment) => (
            <SwiperSlide key={segment.text}>
              <Card
                className="group relative overflow-hidden border-none shadow-lg bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  borderRadius: 20,
                  minHeight: 310,
                  height: 350,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  padding: 0,
                }}
              >
                {/* Imagem ocupa o card inteiro */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={segment.image}
                    alt={segment.text}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      borderRadius: 20,
                      minHeight: 310,
                      maxHeight: 350,
                      height: 350,
                    }}
                  />
                  {/* Título institucional centralizado */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span
                      className="text-lg md:text-xl font-black uppercase text-white text-center"
                      style={{
                        opacity: 0.65,
                        padding: "0.6em 1.2em",
                        background:
                          "linear-gradient(to bottom,rgba(0,0,0,0.19),rgba(0,0,0,0.04) 90%)",
                        borderRadius: 13,
                        textShadow: "0 2px 16px #15472344",
                        letterSpacing: ".06em",
                        lineHeight: 1.11,
                        filter: "blur(.05px)",
                        boxSizing: "border-box",
                        fontWeight: 700,
                        display: "block",
                        pointerEvents: "none",
                      }}
                    >
                      {segment.text}
                    </span>
                  </div>
                  {/* Overlay da descrição no hover, agora no bottom */}
                  <div
                    className="absolute left-0 right-0 bottom-0 flex items-end justify-center h-2/6 pointer-events-none transition-all duration-400"
                    style={{ borderRadius: "0 0 20px 20px" }}
                  >
                    <span
                      className="opacity-0 group-hover:opacity-100 w-full py-4 px-5 text-base font-medium leading-tight text-white text-center transition-opacity duration-400"
                      style={{
                        background:
                          "linear-gradient(to top,rgba(0,0,0,0.74) 75%,transparent 100%)",
                        borderRadius: "0 0 16px 16px",
                        textShadow: "0 2px 22px #15472399",
                        pointerEvents: "none",
                        fontWeight: 500,
                        fontSize: "1em",
                        boxSizing: "border-box",
                        maxWidth: "100%",
                      }}
                    >
                      {segment.description}
                    </span>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats institucionais (mantidas) */}
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
