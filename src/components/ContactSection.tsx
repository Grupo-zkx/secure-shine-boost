import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react"

// Paleta institucional
const VERDE = "#237E45"
const PRATA = "#BFC8CC"
const PRATA_BG = "#E6E9EA"
const BRANCO = "#FFFFFF"

// Informações institucionais fixas
const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "0800 349 8027",
    description: "Central de atendimento 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contato@zkxtransportes.com.br",
    description: "Resposta em até 2 horas",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value:
      "Rua Darke de Mattos, 28 - Higienópolis, Rio de Janeiro - RJ\nCEP: 21051-470",
    description: "Sede administrativa",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "24 horas por dia",
    description: "Todos os dias da semana",
  },
]

const services = [
  "Transporte de numerário",
  "Transporte de valores",
  "Abastecimento de ATMs",
  "Coleta em comércios",
  "Processamento de valores",
  "Consultoria em segurança",
]

const ContactSection = () => (
  <section id="contact" className="py-24 bg-[#f8fafb]">
    <div className="container mx-auto px-4">
      {/* Divisor/acento verde */}
      <div
        className="w-16 md:w-24 h-1 mx-auto mb-8 rounded-full"
        style={{ background: VERDE }}
      />

      {/* Header */}
      <div className="text-center mb-16 fade-in-up">
        <h2
          className="text-4xl lg:text-5xl font-black mb-4"
          style={{ color: VERDE }}
        >
          Entre em Contato
        </h2>
        <p className="text-xl text-[#6a7682] max-w-2xl mx-auto font-medium">
          Nossa equipe está sempre pronta para atender você. Solicite um
          orçamento personalizado ou esclareça dúvidas com rapidez e segurança.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Contact form */}
        <div className="lg:col-span-2">
          <Card className="border bg-white shadow-lg hover:shadow-xl transition">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold" style={{ color: VERDE }}>
                    Solicite um Orçamento
                  </h3>
                  <p className="text-[#6a7682]">
                    Preencha o formulário abaixo: nossos especialistas
                    retornarão rapidamente com uma proposta exclusiva.
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium"
                        style={{ color: VERDE }}
                      >
                        Nome
                      </label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium"
                        style={{ color: VERDE }}
                      >
                        Empresa
                      </label>
                      <Input placeholder="Nome da empresa" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium"
                        style={{ color: VERDE }}
                      >
                        Email
                      </label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium"
                        style={{ color: VERDE }}
                      >
                        Telefone
                      </label>
                      <Input placeholder="(XX) XXXXX-XXXX" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium"
                      style={{ color: VERDE }}
                    >
                      Serviços de Interesse
                    </label>
                    <div className="grid md:grid-cols-2 gap-2">
                      {services.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-2 text-sm font-normal"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-[#BFC8CC] focus:ring-[#237E45]"
                          />
                          <span className="text-[#6a7682]">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium"
                      style={{ color: VERDE }}
                    >
                      Mensagem
                    </label>
                    <Textarea
                      placeholder="Descreva suas necessidades e como podemos ajudar..."
                      rows={4}
                    />
                  </div>
                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full flex items-center justify-center gap-2 mt-4 font-bold"
                    style={{
                      background: VERDE,
                      color: BRANCO,
                      border: `2px solid ${VERDE}`,
                      transition: "background 0.2s, color 0.2s",
                    }}
                  >
                    <Send className="w-5 h-5 mr-1" /> Enviar Solicitação
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side: Informações de Contato */}
        <div className="space-y-6 animate-fade-in-right">
          {/* Cards institucionais de contato */}
          <div className="space-y-4">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon
              return (
                <Card
                  key={info.title}
                  className="border shadow-sm bg-white group transition hover:shadow-lg"
                  style={{ borderColor: PRATA_BG }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: PRATA_BG }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: VERDE }}
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold" style={{ color: VERDE }}>
                        {info.title}
                      </h4>
                      {info.title === "Endereço" ? (
                        <p className="whitespace-pre-line text-[#237E45]/90 font-medium">
                          {info.value}
                        </p>
                      ) : (
                        <p className="text-[#237E45]/90 font-medium">
                          {info.value}
                        </p>
                      )}
                      <p className="text-sm" style={{ color: PRATA }}>
                        {info.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick action WhatsApp */}
          <Card className="border-0 shadow-md bg-[#F9FAFB] hover:shadow-lg transition">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-14 h-14 bg-[#BFC8CC]/40 rounded-xl flex items-center justify-center mx-auto">
                <MessageCircle className="w-7 h-7 text-[#237E45]" />
              </div>
              <div>
                <h4 className="text-lg font-bold" style={{ color: VERDE }}>
                  Atendimento Rápido
                </h4>
                <p className="text-sm text-[#6a7682]">
                  Precisa de atendimento imediato? Fale conosco no WhatsApp!
                </p>
              </div>
              <Button
                onClick={() =>
                  window.open("https://wa.me/5521973626151", "_blank")
                }
                variant="outline"
                size="lg"
                className="w-full border-[#237E45] text-[#237E45] font-bold rounded-full hover:bg-[#237E45]/10"
              >
                <MessageCircle className="w-5 h-5 mr-1" /> WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Trust/segurança */}
          <Card className="border-0 shadow-md bg-[#237E45]">
            <CardContent className="p-6 text-center space-y-3 text-white">
              <CheckCircle className="w-10 h-10 mx-auto mb-2 text-[#BFC8CC]" />
              <h4 className="font-bold">Garantia de Segurança</h4>
              <p className="text-sm text-white/90">
                Todos os nossos serviços possuem seguro total e certificações
                reconhecidas nacionalmente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Animações CSS (ou use framer-motion, se preferir) */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(36px);}
          to { opacity: 1; transform: none;}
        }
        .fade-in-up { animation: fade-in-up 1.1s ease-out both; }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(40px);}
          to { opacity: 1; transform: none;}
        }
        .animate-fade-in-right { animation: fade-in-right 1.1s cubic-bezier(.19,.9,.37,1.01) both;}
      `}</style>
    </div>
  </section>
)

export default ContactSection
