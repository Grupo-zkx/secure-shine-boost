import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

const typingWords = [
  "transporte de numerário",
  "transporte de joias e metais",
  "abastecimento de ATMs",
  "processo de coleta em comércios",
  "processamento de valores",
]

const description = `Protegemos o que é mais importante para seu negócio.
Soluções completas em transporte de valores e segurança com tecnologia de ponta e equipe especializada.`

const HeroSection = () => (
  <section
    id="home"
    aria-label="Transporte de Valores e Segurança ZKX"
    className="w-full bg-white flex flex-col items-center relative"
    style={{ minHeight: "75vh" }}
  >
    {/* Banner institucional */}
    <motion.div
      className="w-full flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.08 }}
      style={{ minHeight: "75vh", maxWidth: "100vw" }}
    >
      {/* Imagem de fundo responsiva */}
      <img
        src="/assets/hero-img.jpg"
        alt="Equipe ZKX transporte de valores"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          filter: "brightness(0.80)",
          pointerEvents: "none",
          userSelect: "none",
        }}
        loading="eager"
        draggable={false}
      />

      {/* Conteúdo sobreposto */}
      <div
        className="relative w-full flex flex-col items-center justify-center z-10 px-2 md:px-0"
        style={{
          paddingTop: "8vh",
          paddingBottom: "54px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center mb-8"
          style={{
            color: "#fff",
            letterSpacing: "0.018em",
            textShadow: "0 3px 22px rgba(21,71,35,.19),0 1px 1px #113b2a80",
          }}
        >
          Quem é daqui, atende melhor.
        </h2>
        <div
          className="max-w-xs md:max-w-lg px-3 mb-3 md:mb-0"
          style={{
            color: "#fff",
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.5,
            whiteSpace: "pre-line",
            textShadow: "0 1px 10px #0005",
            textAlign: "justify",
          }}
        >
          {description}
        </div>
        <span
          className="block text-base md:text-xl font-normal text-center mb-3 md:mb-5"
          style={{
            color: "#efefef",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            textShadow: "0 1px 12px #18332155",
          }}
        >
          Cuidamos do seu{" "}
          <Typewriter
            words={typingWords}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={56}
            deleteSpeed={31}
            delaySpeed={1150}
          />
        </span>
      </div>
      {/* Botão responsivo */}
      <div
        className="absolute left-0 bottom-0 w-full flex justify-center pb-5"
        style={{ pointerEvents: "auto" }}
      >
        <Button
          size="sm"
          className="px-5 py-2 md:px-7 md:py-3 font-semibold rounded-full border bg-[#237E45dd] text-white/95
            hover:bg-[#154723e7] hover:text-white transition duration-200
            shadow-none opacity-92 backdrop-blur-[2px] text-center"
          style={{
            fontSize: "1rem",
            background: "rgba(35, 126, 69, 0.89)",
            border: "1.5px solid #efefef55",
          }}
        >
          Solicitar uma Proposta
        </Button>
      </div>
    </motion.div>
  </section>
)

export default HeroSection
