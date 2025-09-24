import { motion } from "framer-motion"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"

const SolutionBanner = () => (
  <section
    aria-label="Nossas Soluções - Banner"
    className="w-full bg-white flex flex-col items-center relative"
  >
    <motion.div
      className="w-full flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.08 }}
    >
      {/* Imagem de fundo centralizada */}
      <img
        src="/assets/hero-img.jpg"
        alt="Banner institucional Soluções"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          filter: "brightness(0.80)",
          pointerEvents: "none",
          userSelect: "none",
        }}
        loading="eager"
        draggable={false}
      />

      {/* Conteúdo centralizado sobreposto */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center z-10"
        style={{
          paddingTop: "5vh",
          paddingBottom: "72px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-center uppercase"
          style={{
            color: "#fff",
            letterSpacing: "0.018em",
            textShadow: "0 3px 22px rgba(21,71,35,.19),0 1px 1px #113b2a80",
            marginBottom: 44,
          }}
        >
          Nossas Soluções
        </h1>
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
          Escolha a melhor solução que atende a necessidade da sua empresa.
        </div>
      </div>
    </motion.div>
  </section>
)

export default SolutionBanner
