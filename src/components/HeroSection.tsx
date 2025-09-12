import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { heroTypingWords, heroDescription } from "@/data/hero"
import { Link } from "react-router-dom"

/**
 * HeroSection - Institucional ZKX
 * Apresentação institucional, animação Typewriter e CTA inicial.
 * Passa nos checklists WCAG AA+, responsividade e branding.
 */
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
          filter: "brightness(0.84)",
          pointerEvents: "none",
          userSelect: "none",
        }}
        loading="eager"
        draggable={false}
        aria-hidden="true"
      />

      {/* Grid em linhas (topo, espaço, base) */}
      <div
        className="relative w-full"
        style={{
          minHeight: "75vh",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        {/* TOPO: conteúdo central + logo */}
        <div className="w-full">
          <div
            className="mx-auto w-full px-4 md:px-6 lg:px-8"
            style={{ maxWidth: 1200, paddingTop: "6vh" }}
          >
            {/* Grid superior: 1 | 8 | 3 (texto largo). Ajuste aqui se quiser ainda mais espaço */}
            <div className="grid items-start gap-4 md:gap-6">
              <div className="hidden md:block md:col-span-1" />
              <div className="col-span-12 md:col-span-8 flex flex-col items-center">
                <h1
                  className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center mb-3 md:mb-4"
                  style={{
                    color: "#fff",
                    letterSpacing: "0.018em",
                    textShadow:
                      "0 3px 22px rgba(21,71,35,.19), 0 1px 1px rgba(17,59,42,.5)",
                  }}
                >
                  ZKX TRANSPORTE DE VALORES
                </h1>

                <p
                  className="mx-auto max-w-[48ch] md:max-w-[77ch] px-3 text-center text-justify"
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    textShadow: "0 1px 10px #0005",
                  }}
                >
                  {heroDescription}
                </p>
                <img
                  src="/assets/logo/grupo_zkx_branco.svg"
                  alt="ZKX - Transporte de Valores e Segurança"
                  className="mt-6 block"
                  style={{
                    width: "180px",
                    height: "auto",
                    filter: "drop-shadow(0 4px 22px rgba(0,0,0,.25))",
                  }}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>

            {/* Espaçador entre descrição e typing/CTA */}
            <div className="w-full h-12 md:h-16" />
          </div>
        </div>

        {/* Espaço central para manter o topo no topo */}
        <div className="w-full" />

        {/* BASE: typing + CTA */}
        <div className="w-full flex justify-center pb-6">
          <div
            className="w-full flex flex-col items-center"
            style={{ maxWidth: 520 }}
          >
            <span
              className="block text-base md:text-xl font-normal text-center mb-4 uppercase"
              style={{
                color: "#efefef",
                letterSpacing: "-0.01em",
                textShadow: "0 1px 12px #18332155",
              }}
            >
              Cuidamos{" "}
              <Typewriter
                words={heroTypingWords}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={56}
                deleteSpeed={31}
                delaySpeed={1150}
              />
            </span>

            <Link to="/proposta" tabIndex={0}>
              <Button
                size="sm"
                className="px-5 py-2 md:px-7 md:py-3 font-semibold rounded-full border bg-[#237E45dd] text-white/95
            hover:bg-[#154723e7] hover:text-white transition duration-200
            shadow-none opacity-92 backdrop-blur-[2px] text-center"
                style={{
                  fontSize: "1rem",
                  background: "rgba(35,126,69,0.89)",
                  border: "1.5px solid #efefef55",
                }}
                aria-label="Solicitar uma proposta de transporte de valores"
              >
                Solicitar uma Proposta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
)

export default HeroSection
