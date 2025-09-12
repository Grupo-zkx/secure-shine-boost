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

// const certifications = [
//   "Licença Polícia Federal",
//   "ABNT NBR 15000: Transporte de Valores",
//   "Certificação ANVISA",
//   "Licença Corpo de Bombeiros",
// ]

const AboutSection = () => (
  <section id="sobre" className="pt-20 bg-white relative">
    {/* Marca d'água */}
    <div className="container mx-auto px-4">
      {/* QUEBRA VISUAL */}
      <div
        className="w-16 md:w-24 h-1 mx-auto mb-8 rounded-full"
        style={{ background: VERDE }}
      />

      {/* Título */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl lg:text-5xl font-black mb-6"
          style={{ color: VERDE }}
        >
          Sobre o Grupo ZKX
        </h2>
        {/* Descrição */}
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
          {/* Grid das duas colunas com marca d'água */}
          <div className="grid lg:grid-cols-2 gap-16 items-start relative">
            {/* Marca d'água */}
            <img
              src="/assets/logo/grupo_zkx.svg"
              alt="Marca d'água Grupo ZKX"
              className="absolute inset-0 w-full h-full object-contain opacity-15 pointer-events-none select-none"
              aria-hidden="true"
            />

            <div className="flex flex-col justify-between h-full relative z-10">
              {/* Nossa História */}
              <div className="space-y-4">
                <h3
                  className="text-2xl lg:text-3xl font-bold"
                  style={{ color: VERDE }}
                >
                  Nossa História
                </h3>
                <div className="text-base text-[#5a666c] space-y-4 leading-relaxed">
                  <p>
                    A trajetória do Grupo ZKX teve início com a inspiração do
                    nosso fundador, Zé Carlos, que começou sua vida profissional
                    no setor bancário, onde desenvolveu um profundo entendimento
                    sobre responsabilidade, compromisso e organização. Ainda
                    jovem, despertou seu espírito empreendedor e deu o primeiro
                    passo ousado: adquiriu sua primeira empresa, uma casa
                    lotérica.
                  </p>
                  <p>
                    Com trabalho árduo, visão estratégica e dedicação à
                    excelência, construiu uma carreira sólida, tornando-se
                    referência nacional no setor lotérico. Ao longo dos anos,
                    chegou a administrar mais de 33 casas lotéricas no estado do
                    Rio de Janeiro e, em reconhecimento ao seu desempenho, foi
                    condecorado em Brasília pela Caixa Econômica Federal como o
                    maior lotérico do Brasil. Atualmente, continua ativo no
                    setor, com aproximadamente 20 lotéricas em operação, além de
                    exercer o cargo de vice-presidente do SINCOERJ – Sindicato
                    dos Lotéricos do Estado do Rio de Janeiro.
                  </p>
                  <p>
                    A expansão dos negócios não parou por aí. O Grupo
                    diversificou suas atividades, investindo em farmácias,
                    construção civil, incorporação imobiliária e serviços,
                    sempre pautado pelos mesmos valores: qualidade, solidez e
                    inovação.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full relative z-10">
              {/* Nossa Missão */}
              <div>
                <h3
                  className="text-2xl lg:text-3xl font-bold mb-2"
                  style={{ color: VERDE }}
                >
                  Nossa Missão
                </h3>
                <div className="text-base text-[#5a666c] space-y-4 leading-relaxed">
                  <p>
                    Garantir segurança, confiabilidade e excelência operacional
                    no transporte de valores, por meio de soluções inteligentes,
                    tecnologia de ponta e uma equipe altamente capacitada.
                  </p>
                  <p>
                    A ZKX nasceu para ir além da prestação de serviços: é a
                    materialização de uma trajetória de credibilidade construída
                    ao longo de décadas.
                  </p>
                </div>

                {/* Nosso Futuro */}
                <div>
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-2"
                    style={{ color: VERDE }}
                  >
                    Nosso Futuro
                  </h3>
                  <div className="space-y-2">
                    <p>
                      Nosso objetivo é consolidar a ZKX como a maior e mais
                      respeitada empresa de transporte de valores do estado do
                      Rio de Janeiro. Para isso, investimos continuamente em:
                    </p>
                    <ul
                      className="list-disc list-inside ps-6 my-1 italic"
                      style={{ fontWeight: 100 }}
                    >
                      <li>Frota blindada moderna.</li>
                      <li>Sistemas de monitoramento de última geração.</li>
                      <li>Desenvolvimento humano e profissional da equipe.</li>
                      <li>
                        Inovação e tecnologia aplicada à segurança patrimonial.
                      </li>
                    </ul>
                    <p>
                      Com integridade, comprometimento e foco no cliente,
                      seguimos um caminho claro: crescer com solidez e
                      transformar o mercado de transporte de valores e
                      segurança.
                    </p>
                  </div>
                </div>
                {/* Nosso Lema */}
                <div className="py-5">
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-2"
                    style={{ color: VERDE }}
                  >
                    Nosso Lema
                  </h3>
                  <p className="text-base text-[#5a666c] leading-relaxed">
                    “Quem é daqui, atende melhor.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nascimento da ZKX*/}

        <div className="space-y-8 pb-8">
          <h3
            className="text-2xl lg:text-3xl font-bold text-center uppercase"
            style={{ color: VERDE }}
          >
            O Nascimento da ZKX Transporte de Valores e Segurança
          </h3>
          <div className="text-base text-[#5a666c] space-y-4 leading-relaxed mx-8 text-justify">
            <p>
              A ZKX Transporte de Valores e Segurança nasceu da união entre a
              experiência empresarial e a inspiração de uma amizade com Reynaldo
              Giannini, um dos fundadores da antiga Transvip. Essa conexão,
              aliada à percepção de uma grande lacuna no setor de transporte de
              valores do Rio de Janeiro, foi determinante para a criação de uma
              empresa com alto padrão de eficiência, confiabilidade e segurança.
            </p>
            <p>
              Assim surgiu a ZKX: uma empresa com DNA empreendedor, visão
              estratégica e compromisso com a excelência, preparada para atender
              às demandas de um mercado exigente e em constante transformação.
            </p>
          </div>
        </div>

        {/* Nossos Pilares – verticalizado */}
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
                <h3
                  className="text-lg font-bold mb-2 uppercase"
                  style={{ color: VERDE }}
                >
                  {title}
                </h3>
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

      {/* Certificações */}
      {/* <div
        className="rounded-2xl p-8 lg:p-12 shadow-sm"
        style={{ background: "#F9FAFB", border: `1px solid ${PRATA_BG}` }}
      >
        <div className="text-center mb-8">
          <h3
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ color: VERDE }}
          >
            Certificações & Licenças
          </h3>
          <p className="text-base" style={{ color: "#6a7682" }}>
            Comprometimento que vai além do discurso: atuamos em conformidade
            com todas as normas e exigências brasileiras, validando nossa
            qualidade, segurança e excelência operacional.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={cert}
              className="flex items-center gap-3 p-4 rounded-lg"
              style={{
                background: "#E6E9EA44",
                border: `1px solid ${PRATA_BG}`,
              }}
            >
              <CheckCircle className="w-5 h-5" style={{ color: VERDE }} />
              <span className="text-sm font-semibold" style={{ color: VERDE }}>
                {cert}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            variant="accent"
            size="lg"
            className="font-bold px-8 py-3 rounded-full"
            style={{
              background: VERDE,
              color: BRANCO,
              border: `2px solid ${VERDE}`,
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Ver Todas as Certificações
          </Button>
        </div>
      </div> */}
    </div>
  </section>
)

export default AboutSection
