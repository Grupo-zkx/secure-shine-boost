import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

const VERDE = "#237E45"
const VERDE_ESCURO = "#154723"
const PRATA = "#BFC8CC"

const typingWords = [
  "Transporte de numerário",
  "Transporte de Joias e Metais",
  "Abastecimento de ATMs",
  "Processo de Coleta em Comércios",
  "Processamento de Valores",
]

const description = `Protegemos o que é mais importante para seu negócio.
Soluções completas em transporte de valores com tecnologia de ponta e equipe especializada.`

const HeroSection = () => (
  <section
    id="home"
    aria-label="Transporte de Valores e Segurança ZKX"
    className="w-full bg-white flex flex-col items-center relative"
    style={{ minHeight: "75vh" }}
  >
    {/* Banner com imagem e conteúdo */}
    <motion.div
      className="w-full flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.08 }}
      style={{ minHeight: "75vh", maxWidth: "100vw" }}
    >
      {/* Imagem de fundo */}
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

      {/* Conteúdo sobreposto à imagem */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center z-10"
        style={{
          paddingTop: "5vh",
          paddingBottom: "72px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-center"
          style={{
            color: "#fff",
            letterSpacing: "0.018em",
            textShadow: "0 3px 22px rgba(21,71,35,.19),0 1px 1px #113b2a80",
            marginBottom: 44, // AUMENTADO só aqui! (antes era 24 ou menos)
          }}
        >
          Quem é daqui, atende melhor.
        </h2>
        <div
          className="max-w-lg px-4 mb-0"
          style={{
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 540,
            lineHeight: 1.5,
            textAlign: "justify",
            whiteSpace: "pre-line",
            textShadow: "0 1px 10px #0005",
            marginBottom: 32,
          }}
        >
          {description}
        </div>
        <span
          className="block text-base md:text-xl font-normal text-center"
          style={{
            color: "#efefef",
            fontWeight: 400,
            textTransform: "lowercase",
            letterSpacing: "-0.01em",
            textShadow: "0 1px 12px #18332155",
          }}
        >
          cuidamos do seu{" "}
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

      {/* Botão no rodapé do banner */}
      <div
        className="absolute left-0 bottom-0 w-full flex justify-center pb-7"
        style={{ pointerEvents: "auto" }}
      >
        <Button
          size="sm"
          className="px-7 py-2 font-semibold rounded-full border bg-[#237E45dd] text-white/95
            hover:bg-[#154723e7] hover:text-white transition duration-200
            shadow-none opacity-92 backdrop-blur-[2px] text-center"
          style={{
            fontSize: "1.09rem",
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
