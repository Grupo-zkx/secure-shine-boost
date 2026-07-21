import { motion } from "framer-motion"
import { heroTagline } from "@/data/hero"

const VERDE = "#237E45"

/**
 * SolutionBanner - Banner institucional da página Soluções.
 * Replica a imagem do Hero da Home (imagem 1 — frota real ZKX, /assets/hero-frota.jpg)
 * em largura total (w-full), com o mesmo tratamento de fundo (cover/center) e degradê
 * azul-escuro para legibilidade do título centralizado.
 */
const SolutionBanner = () => (
  <section
    aria-label="Nossas Soluções - Banner"
    className="w-full relative flex flex-col"
    style={{ minHeight: "52vh", background: "#08142d" }}
  >
    {/* Imagem da frota real ZKX (mesma do Hero da Home) — fundo único */}
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        backgroundImage: "url(/assets/hero-frota.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    {/* Degradê azul-escuro (topo→base + reforço central) para legibilidade
        do título centralizado sem esconder a frota */}
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(180deg, rgba(6,17,40,0.62) 0%, rgba(8,22,52,0.42) 45%, rgba(6,17,40,0.66) 100%)",
      }}
    />

    <motion.div
      className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 py-20"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.08 }}
      style={{ minHeight: "52vh" }}
    >
      <h1
        className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-white"
        style={{
          letterSpacing: "0.018em",
          textShadow: "0 3px 22px rgba(0,0,0,.45), 0 1px 1px rgba(17,59,42,.5)",
        }}
      >
        Nossas Soluções
      </h1>
      <p
        className="mt-6 max-w-lg text-white/90 font-medium text-base md:text-lg leading-relaxed"
        style={{ textShadow: "0 1px 10px rgba(0,0,0,.5)" }}
      >
        Escolha a melhor solução que atende a necessidade da sua empresa.
      </p>
    </motion.div>

    {/* Faixa verde inferior — coerência de identidade com o Hero da Home */}
    <div
      className="w-full"
      style={{ background: `${VERDE}f2`, borderTop: "2px solid rgba(255,255,255,.12)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-2.5 text-center">
        <span className="text-white font-semibold italic text-sm md:text-base">
          {heroTagline}
        </span>
      </div>
    </div>
  </section>
)

export default SolutionBanner
