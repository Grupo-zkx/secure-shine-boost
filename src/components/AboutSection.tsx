import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const VERDE = "#237E45"
const AZUL = "#1e0bd0"
const PRATA = "#BFC8CC"
const PRATA_BG = "#E6E9EA"
const BRANCO = "#FFFFFF"

const values = [
  {
    img: "/assets/about-icons/compromisso-cliente.png",
    title: "Compromisso com o cliente",
    description:
      "Atendimento proximo, transparente e focado em superar expectativas.",
  },
  {
    img: "/assets/about-icons/eficiencia-operacional.png",
    title: "Eficiencia operacional",
    description: "Frota blindada moderna, monitoramento e processos ageis.",
  },
  {
    img: "/assets/about-icons/inovacao-constante.png",
    title: "Inovacao constante",
    description: "Soluções inteligentes para um setor em transformação.",
  },
  {
    img: "/assets/about-icons/seguranca-total.png",
    title: "Segurança Total",
    description:
      "Protecão máxima de valores e patrimônios, com tecnologia de ponta e protocolos rígorosos.",
  },
  {
    img: "/assets/about-icons/integridade-credibilidade.png",
    title: "integridade e credibilidade",
    description:
      "Mais de 20 anos de experiência e confiança reconhecida no mercado.",
  },
]

const AboutSection = () => (
  <section id="sobre" className="pt-20 bg-white relative">
    <div className="container mx-auto px-4">
      {/* QUEBRA VISUAL */}
      <div
        className="w-16 md:w-24 h-1 mx-auto mb-8 rounded-full"
        style={{ background: VERDE }}
      />

      <div className="w-full px-6 md:px-12 lg:px-24 mb-20 relative">
        {/* Marca d'água visível apenas nos 3 blocos */}
        <img
          src="/assets/logo/grupo_zkx.svg"
          alt="Marca d'água Grupo ZKX"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          aria-hidden="true"
          style={{ opacity: 0.06 }}
        />

        {/* Bloco 1 - Sobre */}
        <div className="relative z-10 mb-16 text-center">
          <h3
            className="text-2xl lg:text-3xl font-bold mb-6 uppercase"
            style={{ color: VERDE }}
          >
            Sobre o Grupo ZKX
          </h3>
          <div className="text-base text-justify text-[#5a666c] space-y-4 leading-relaxed mx-auto">
            <p>
              Com mais de <strong>20 anos de experiência</strong> em diferentes
              segmentos – loterias, farmácias, construção civil e serviços – o
              grupo construiu sua história com credibilidade, inovação e
              compromisso com a excelência.
            </p>
            <p>
              A partir dessa base sólida, surge a{" "}
              <strong>ZKX Transporte de Valores e Segurança</strong>, criada
              para oferecer eficiência, confiabilidade e tecnologia de ponta em
              um setor essencial para o mercado do Rio de Janeiro.
            </p>
          </div>
        </div>

        {/* Bloco 2 - Nossa História */}
        <div className="relative z-10 mb-16 text-center">
          <h3
            className="text-2xl lg:text-3xl font-bold mb-6 uppercase"
            style={{ color: VERDE }}
          >
            Nossa História
          </h3>
          <div className="text-base text-justify text-[#5a666c] space-y-4 leading-relaxed mx-auto">
            <p>
              A trajetória do Grupo ZKX teve início com a inspiração do nosso
              fundador, Zé Carlos, que começou sua vida profissional no setor
              bancário, onde desenvolveu um profundo entendimento sobre
              responsabilidade, compromisso e organização.
            </p>
            <p>
              Com trabalho árduo e visão estratégica, tornou-se referência
              nacional no setor lotérico, administrando mais de 33 casas
              lotéricas e sendo condecorado pela Caixa Econômica Federal como o
              maior lotérico do Brasil.
            </p>
            <p>
              O Grupo diversificou suas atividades, investindo em farmácias,
              construção civil, incorporação imobiliária e serviços, sempre
              pautado por qualidade, solidez e inovação.
            </p>
          </div>
        </div>

        {/* Bloco 3 - O Nascimento */}
        <div className="relative z-10 mb-16 text-center">
          <h3
            className="text-2xl lg:text-3xl font-bold mb-6 uppercase"
            style={{ color: VERDE }}
          >
            O Nascimento da ZKX Transporte de Valores e Segurança
          </h3>
          <div className="text-base text-justify text-[#5a666c] space-y-4 leading-relaxed mx-auto">
            <p>
              A ZKX nasceu da união entre a experiência empresarial e a amizade
              com Reynaldo Giannini, um dos fundadores da Transvip. A percepção
              de uma lacuna no setor de transporte de valores no Rio de Janeiro
              motivou a criação de uma empresa com alto padrão de eficiência,
              confiabilidade e segurança.
            </p>
            <p>
              Assim surgiu a ZKX: com DNA empreendedor, visão estratégica e
              compromisso com a excelência, preparada para atender às demandas
              de um mercado exigente e em constante transformação.
            </p>
          </div>
        </div>
      </div>

      {/* Nossos Pilares (fora da marca d’água) */}
      <div className="w-full px-6 md:px-12 lg:px-24 mb-20 text-center">
        <h3
          className="text-2xl lg:text-3xl font-bold text-center uppercase mb-10"
          style={{ color: VERDE }}
        >
          Nossos Pilares
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-6 justify-items-center">
          {values.map(({ img, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center px-4 max-w-xs"
            >
              <img
                src={img}
                className="w-16 h-16 object-contain mb-4"
                alt={title}
              />
              <h4
                className="text-lg font-bold mb-2 uppercase"
                style={{ color: VERDE }}
              >
                {title}
              </h4>
              <p className="text-sm" style={{ color: VERDE, fontWeight: 200 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
