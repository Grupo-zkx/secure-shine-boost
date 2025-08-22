import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Award,
  Users,
  MapPin,
  Clock,
  Zap,
  CheckCircle,
  Target,
} from "lucide-react"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"
const PRATA_BG = "#E6E9EA"
const BRANCO = "#FFFFFF"

const values = [
  {
    icon: Shield,
    title: "Integridade & Segurança",
    description:
      "Atuamos com ética, transparência e máxima proteção em cada operação. Investimos em tecnologia de monitoramento e processos rigorosos para garantir que cada cliente tenha plena tranquilidade.",
  },
  {
    icon: Award,
    title: "Excelência & Profissionalismo",
    description:
      "Buscamos a excelência em tudo que fazemos, investindo continuamente em processos, treinamentos e certificações que elevam nosso patamar no mercado.",
  },
  {
    icon: Users,
    title: "Desenvolvimento Humano",
    description:
      "Valorizamos e capacitamos nossa equipe — nosso maior patrimônio. Construímos profissionais de referência, com foco em compromisso, responsabilidade e crescimento.",
  },
  {
    icon: Clock,
    title: "Compromisso com o Cliente",
    description:
      "Crescemos junto com nossos clientes, entregando soluções sob medida, pontualidade exemplar e atendimento próximo e dedicado em cada etapa.",
  },
]

const achievements = [
  { icon: MapPin, label: "Cidades Atendidas", value: "33+" },
  { icon: Users, label: "Colaboradores", value: "2.000+" },
  { icon: Zap, label: "Frota Blindada", value: "Moderna" },
  { icon: Target, label: "Nível de Satisfação", value: "99,9%" },
]

const certifications = [
  "Licença Polícia Federal",
  "ABNT NBR 15000: Transporte de Valores",
  "Certificação ANVISA",
  "Licença Corpo de Bombeiros",
]

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-white relative">
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
        <p
          className="text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: "#555", fontWeight: 500 }}
        >
          Solidez, inovação e confiança: há mais de 20 anos protegendo o
          patrimônio de empresas em todo o Rio de Janeiro, investindo em
          tecnologia, excelência operacional e desenvolvimento humano.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* História ZKX */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3
              className="text-2xl lg:text-3xl font-bold mb-3"
              style={{ color: VERDE }}
            >
              Nossa História
            </h3>
            <div className="text-base text-[#5a666c] space-y-4 leading-relaxed">
              <p>
                A história da ZKX começa com a inspiração empreendedora de{" "}
                <strong>José Carlos Carvalho</strong>, nosso fundador, que
                trouxe sua experiência bancária e sua trajetória como o maior
                lotérico do Brasil para fundar uma empresa comprometida com a
                excelência e a responsabilidade.
              </p>
              <p>
                Atuando inicialmente com lotéricas, destacamo-nos por visão
                estratégica, profissionalismo e ética — princípios que moldaram
                o DNA da ZKX. Nossa empresa foi criada para atender e superar as
                exigências de um mercado que não aceita falhas: o transporte e a
                segurança patrimonial de valores.
              </p>
              <p>
                Hoje, o <strong>Grupo ZKX</strong> investe constantemente em
                inovação, renovando sua frota blindada, implementando sistemas
                de monitoramento de última geração e capacitando equipes que são
                referência nacional em confiabilidade e atendimento.
              </p>
            </div>
          </div>
          {/* Números/Conquistas */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={achievement.label} className="text-center space-y-2">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl mx-auto"
                    style={{ background: PRATA_BG }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: VERDE }}
                    />
                  </div>
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: VERDE }}
                  >
                    {achievement.value}
                  </div>
                  <div className="text-sm" style={{ color: PRATA }}>
                    {achievement.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* Valores */}
        <div className="space-y-6">
          <h3
            className="text-2xl lg:text-3xl font-bold"
            style={{ color: VERDE, textAlign: "center" }}
          >
            Nossos Pilares
          </h3>
          <div className="flex flex-col gap-4">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={value.title}
                  className="border bg-white shadow-sm hover:shadow-lg transition"
                  style={{ borderColor: PRATA_BG }}
                >
                  <CardContent className="flex items-start gap-4 p-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: PRATA_BG }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: VERDE }}
                      />
                    </div>
                    <div>
                      <h4
                        className="text-lg font-bold mb-1"
                        style={{ color: VERDE }}
                      >
                        {value.title}
                      </h4>
                      <p className="text-[#6a7682] text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Certificações */}
      <div
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
      </div>
    </div>
  </section>
)

export default AboutSection
