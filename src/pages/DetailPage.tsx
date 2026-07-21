import { useParams, Navigate } from "react-router-dom"
import { solutions } from "@/data/solutions"
import { motion } from "framer-motion"
import { useEffect } from "react"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"

// Banner institucional para página de detalhe de solução
const SolutionDetailBanner = ({ icon: Icon, title, description, img }: any) => (
  <section
    aria-label={`${title} - Banner`}
    className="w-full bg-white flex flex-col items-center relative"
    style={{ minHeight: "53vh" }} // Ligeiramente menor que a principal
  >
    <motion.div
      className="w-full flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", delay: 0.08 }}
      style={{ minHeight: "53vh", maxWidth: "100vw" }}
    >
      {/* Imagem institucional; customize o path conforme sua comunicação */}
      <img
        src={img}
        alt={`Banner institucional ${title}`}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          filter: "brightness(0.80)",
          pointerEvents: "none",
          userSelect: "none",
        }}
        loading="eager"
        draggable={false}
      />
      {/* Conteúdo do banner (ícone, título, descrição) */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center z-10"
        style={{
          paddingTop: "4vh",
          paddingBottom: "60px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <div className="mb-5 flex items-center justify-center">
          <Icon
            className="w-14 h-14 text-[#fff]"
            style={{ filter: "drop-shadow(0 2px 8px #237E4540)" }}
          />
        </div>
        <h1
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-6"
          style={{
            color: "#fff",
            letterSpacing: "0.018em",
            textShadow: "0 3px 22px rgba(21,71,35,.18),0 1px 1px #113b2a80",
          }}
        >
          {title}
        </h1>
        <div
          className="max-w-xl px-4"
          style={{
            color: "#fff",
            fontSize: "1.08rem",
            fontWeight: 500,
            lineHeight: 1.6,
            textAlign: "center",
            whiteSpace: "pre-line",
            textShadow: "0 1px 10px #0005",
          }}
        >
          {description}
        </div>
      </div>
    </motion.div>
  </section>
)

const SolutionDetailPage = () => {
  const { slug } = useParams()
  const solution = solutions.find((sol) => sol.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  if (!solution) {
    // Redireciona para 404 caso slug não seja encontrado
    return <Navigate to="/not-found" replace />
  }

  const Icon = solution.icon

  return (
    <>
      <SolutionDetailBanner
        icon={Icon}
        title={solution.title}
        description={solution.description}
        img={solution.img ?? "/assets/solutions-banner.jpg"}
      />
      <section className="py-12 bg-white min-h-[40vh] flex items-start justify-center">
        <div className="max-w-2xl w-full mx-auto px-4">
          <h2 className="text-xl font-extrabold mb-4" style={{ color: VERDE }}>
            Principais diferenciais:
          </h2>
          <ul className="flex flex-col gap-3 mb-12">
            {solution.features.map((f) => (
              <li
                key={f}
                className="flex items-center text-[1.10rem] text-[#49515a]"
              >
                <span className="inline-block w-3 h-3 mr-3 rounded-full bg-[#237E45]" />
                {f}
              </li>
            ))}
          </ul>
          {/* Espaço para conteúdos avançados, se quiser adicionar */}
        </div>
      </section>
    </>
  )
}

export default SolutionDetailPage
