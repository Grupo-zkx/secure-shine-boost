import { motion } from "framer-motion"
import { heroSlogans, heroBadges, heroTagline } from "@/data/hero"

const VERDE = "#237E45"

/**
 * HeroSection - Institucional ZKX ("imagem 1")
 * Banner estático: foto da frota de carros-fortes com os slogans institucionais
 * sobrepostos (PROTEGENDO / COMPROMISSO / TECNOLOGIA) e a faixa de selos
 * (SEGURANÇA · CONFIANÇA · EXCELÊNCIA + "Quem é daqui, Atende Melhor!").
 * Sem typewriter, botão de proposta ou descrição — conforme plano de alterações.
 */
const HeroSection = () => (
  <section
    id="home"
    aria-label="Transporte de Valores e Segurança ZKX"
    className="w-full relative flex flex-col"
    style={{ minHeight: "75vh", background: "#08142d" }}
  >
    {/* Imagem nova da frota real ZKX (imagem 1) — fundo único */}
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        backgroundImage: "url(/assets/hero-frota.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    {/* Degradê azul-escuro esquerda→direita, fadando para transparente
        (dá legibilidade aos slogans sem esconder a frota à direita) */}
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(90deg, rgba(6,17,40,0.70) 0%, rgba(8,22,52,0.44) 34%, rgba(10,28,64,0.16) 62%, rgba(10,28,64,0) 100%)",
      }}
    />

    <motion.div
      className="relative z-10 flex-1 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{ minHeight: "75vh" }}
    >
      {/* Slogans institucionais */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-16">
          <ul className="flex flex-col gap-6 md:gap-8">
            {heroSlogans.map(({ icon: Icon, title, subtitle }) => (
              <li key={title} className="flex items-center gap-4 md:gap-5">
                <span
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{
                    width: 52,
                    height: 52,
                    background: "rgba(255,255,255,0.10)",
                    border: "1.5px solid rgba(255,255,255,0.35)",
                  }}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span
                    className="text-white font-extrabold tracking-wide text-xl md:text-3xl"
                    style={{ textShadow: "0 2px 14px rgba(0,0,0,.45)" }}
                  >
                    {title}
                  </span>
                  <span
                    className="text-white/85 font-medium text-xs md:text-base tracking-wider uppercase"
                    style={{ textShadow: "0 1px 10px rgba(0,0,0,.5)" }}
                  >
                    {subtitle}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Faixa inferior: selos + tagline */}
      <div
        className="w-full"
        style={{ background: `${VERDE}f2`, borderTop: "2px solid rgba(255,255,255,.12)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <ul className="w-full sm:w-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:gap-8">
            {heroBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-white/90 flex-shrink-0" />
                <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm tracking-wide md:tracking-widest uppercase whitespace-nowrap">
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <span className="text-white font-semibold italic text-sm md:text-base text-center">
            {heroTagline}
          </span>
        </div>
      </div>
    </motion.div>
  </section>
)

export default HeroSection
