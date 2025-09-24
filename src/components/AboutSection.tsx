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

      {/* Título e descrição introdutória (mantive o texto e estilo) */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl lg:text-5xl font-black mb-6"
          style={{ color: VERDE }}
        >
          Sobre o Grupo ZKX
        </h2>
        <p
          className="text-base leading-relaxed max-w-2xl mx-auto text-justify"
          style={{ color: "#555", fontWeight: 250 }}
        >
          Com mais de <strong>20 anos de experiência</strong> em diferentes
          segmentos – loterias, farmácias, construção civil e serviços – o grupo
          construiu sua história com credibilidade, inovação e compromisso com a
          excelência. A partir dessa base sólida, surge a{" "}
          <strong>ZKX Transporte de Valores e Segurança</strong>, criada para
          oferecer eficiência, confiabilidade e tecnologia de ponta em um setor
          essencial para o mercado do Rio de Janeiro. Nosso propósito é claro:
          garantir segurança com integridade e atender cada cliente de forma
          próxima e personalizada.
        </p>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 mb-20">
        <div className="relative mb-16">
          {/* Marca d'água (absoluta, baixa opacidade) */}
          <img
            src="/assets/logo/grupo_zkx.svg"
            alt="Marca d'água Grupo ZKX"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            aria-hidden="true"
            style={{ opacity: 0.06 }}
          />

          {/* Layout em linhas: Nossa História (linha 1) */}
          <div className="relative z-10 mb-12">
            <h3
              className="text-2xl lg:text-3xl font-bold"
              style={{ color: VERDE }}
            >
              Nossa História
            </h3>
            <div className="text-base text-justify text-[#5a666c] space-y-4 leading-relaxed mt-4">
              <p>
                A trajetória do Grupo ZKX teve início com a inspiração do nosso
                fundador, Zé Carlos, que começou sua vida profissional no setor
                bancário, onde desenvolveu um profundo entendimento sobre
                responsabilidade, compromisso e organização. Ainda jovem,
                despertou seu espírito empreendedor e deu o primeiro passo
                ousado: adquiriu sua primeira empresa, uma casa lotérica.
              </p>
              <p>
                Com trabalho árduo, visão estratégica e dedicação à excelência,
                construiu uma carreira sólida, tornando-se referência nacional
                no setor lotérico. Ao longo dos anos, chegou a administrar mais
                de 33 casas lotéricas no estado do Rio de Janeiro e, em
                reconhecimento ao seu desempenho, foi condecorado em Brasília
                pela Caixa Econômica Federal como o maior lotérico do Brasil.
                Atualmente, continua ativo no setor, com aproximadamente 20
                lotéricas em operação, além de exercer o cargo de
                vice-presidente do SINCOERJ – Sindicato dos Lotéricos do Estado
                do Rio de Janeiro.
              </p>
              <p>
                A expansão dos negócios não parou por aí. O Grupo diversificou
                suas atividades, investindo em farmácias, construção civil,
                incorporação imobiliária e serviços, sempre pautado pelos mesmos
                valores: qualidade, solidez e inovação.
              </p>
            </div>
          </div>

          {/* Layout em linhas: O Nascimento (linha 2) */}
          <div className="relative z-10">
            <h3
              className="text-2xl lg:text-3xl font-bold"
              style={{ color: VERDE }}
            >
              O Nascimento da ZKX Transporte de Valores e Segurança
            </h3>
            <div className="text-base text-justify text-[#5a666c] space-y-4 leading-relaxed mt-4 text-justify">
              <p>
                A ZKX Transporte de Valores e Segurança nasceu da união entre a
                experiência empresarial e a inspiração de uma amizade com
                Reynaldo Giannini, um dos fundadores da antiga Transvip. Essa
                conexão, aliada à percepção de uma grande lacuna no setor de
                transporte de valores do Rio de Janeiro, foi determinante para a
                criação de uma empresa com alto padrão de eficiência,
                confiabilidade e segurança.
              </p>
              <p>
                Assim surgiu a ZKX: uma empresa com DNA empreendedor, visão
                estratégica e compromisso com a excelência, preparada para
                atender às demandas de um mercado exigente e em constante
                transformação.
              </p>
            </div>
          </div>
        </div>

        {/* Nossos Pilares */}
        <div className="space-y-8">
          <h3
            className="text-2xl lg:text-3xl font-bold text-center uppercase"
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
                <p
                  className="text-sm"
                  style={{ color: VERDE, fontWeight: 200 }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
