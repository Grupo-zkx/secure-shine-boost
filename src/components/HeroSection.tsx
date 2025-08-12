import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

const LOGO = "/assets/logo/grupo_zkx.png"
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

const HEADER_HEIGHT = 64 // ajuste para a altura real do header (inclua o topbar se houver)

const HeroSection = () => (
  <section
    id="home"
    aria-label="Transporte de Valores e Segurança ZKX"
    className="w-full flex flex-col items-center bg-white"
    style={{
      marginTop: HEADER_HEIGHT,
      minHeight: "88vh", // Banner maior para mostrar mais imagem
    }}
  >
    {/* Faixa com imagem */}
    <motion.div
      className="w-full relative flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", delay: 0.08 }}
      style={{ minHeight: 500 }} // Aumenta a altura do banner
    >
      <img
        src="/assets/hero-img.jpg"
        alt="Equipe ZKX transporte de valores"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{
          filter: "brightness(0.80)", // Menos escurecido para mostrar mais detalhes
          minHeight: "100%",
          maxHeight: "100%",
        }}
        loading="eager"
        draggable={false}
      />
      {/* Conteúdo centralizado sobre a imagem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.22, duration: 0.7, type: "spring" }}
        className="flex flex-col items-center relative z-10"
      >
        <img
          src={LOGO}
          alt="ZKX Logo"
          className="h-36 md:h-44 w-auto mx-auto mb-9 select-none"
          style={{ objectFit: "contain", maxWidth: "60vw", minHeight: 120 }}
        />
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-3"
          style={{
            color: "#fff",
            letterSpacing: "0.018em",
            marginBottom: "1.15rem",
            textShadow:
              "0 3px 22px rgba(21, 71, 35, 0.19), 0 1px 1px #113b2a80",
          }}
        >
          Quem é daqui, atende melhor.
        </h2>
        <span
          className="block text-lg md:text-xl font-normal"
          style={{
            color: "#efefef",
            fontWeight: 400,
            textTransform: "lowercase",
            letterSpacing: "-0.01em",
            textShadow: "0 1px 12px #18332155",
          }}
        >
          cuidamos do seu&nbsp;
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
      </motion.div>
    </motion.div>

    {/* Texto corporativo centralizado, com espaçamento confortável */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.95, duration: 0.7, type: "spring" }}
      className="w-full flex flex-col items-center"
      style={{ marginTop: 64, marginBottom: 38 }}
    >
      <div
        className="max-w-xl px-4 mx-auto"
        style={{
          color: VERDE,
          fontSize: "1.22rem",
          fontWeight: 540,
          lineHeight: 1.58,
          textAlign: "justify",
          whiteSpace: "pre-line",
        }}
      >
        {description}
      </div>
    </motion.div>

    {/* Botão destacado, com grande margem abaixo */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.22, duration: 0.55, type: "spring" }}
      className="flex justify-center w-full z-20 mb-14"
    >
      <Button
        size="xl"
        className="px-7 py-4 font-bold rounded-full border-2 border-[#237E45] bg-[#237E45] text-white hover:bg-[#154723] hover:scale-105 hover:shadow-lg transition shadow-md"
      >
        Solicitar Cotação Segura <Shield className="ml-2 w-5 h-5" />
      </Button>
    </motion.div>

    {/* Divider institucional, larga e elegante */}
    <motion.hr
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1.41, duration: 0.6, type: "spring" }}
      className="w-40 my-10 border-t-2 border-[#BFC8CC] mx-auto"
      style={{
        borderColor: PRATA,
        borderRadius: 2,
        marginTop: 54,
        marginBottom: 24,
      }}
    />
  </section>
)

export default HeroSection
