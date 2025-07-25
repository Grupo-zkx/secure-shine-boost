import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 9999-9999",
      description: "Central de atendimento 24/7"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contato@zkxtransportes.com.br",
      description: "Resposta em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Av. Paulista, 1000 - São Paulo/SP",
      description: "Sede administrativa"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "24 horas por dia",
      description: "Todos os dias da semana"
    }
  ];

  const services = [
    "Transporte de numerário",
    "Transporte de valores",
    "Abastecimento de ATMs",
    "Coleta em comércios",
    "Processamento de valores",
    "Consultoria em segurança"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe está pronta para atender você. Solicite um orçamento 
            personalizado ou tire suas dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card bg-background">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">
                      Solicitar Orçamento
                    </h3>
                    <p className="text-muted-foreground">
                      Preencha o formulário abaixo e nossa equipe entrará em contato 
                      para elaborar uma proposta personalizada.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Nome</label>
                        <Input placeholder="Seu nome completo" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Empresa</label>
                        <Input placeholder="Nome da empresa" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Email</label>
                        <Input type="email" placeholder="seu@email.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Telefone</label>
                        <Input placeholder="(11) 99999-9999" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Serviços de Interesse</label>
                      <div className="grid md:grid-cols-2 gap-2">
                        {services.map((service) => (
                          <label key={service} className="flex items-center gap-2 text-sm">
                            <input type="checkbox" className="rounded border-border" />
                            <span className="text-muted-foreground">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Mensagem</label>
                      <Textarea 
                        placeholder="Descreva suas necessidades e como podemos ajudar..."
                        rows={5}
                      />
                    </div>

                    <Button variant="accent" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Solicitação
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.title}
                    className="border-0 shadow-card bg-background hover:shadow-glow transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-primary">{info.title}</h4>
                          <p className="text-primary font-medium">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick action */}
            <Card className="border-0 shadow-card bg-gradient-to-br from-accent/10 to-accent/5">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mx-auto">
                  <MessageCircle className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-primary">Atendimento Rápido</h4>
                  <p className="text-sm text-muted-foreground">
                    Precisa de atendimento imediato? Nossa equipe está disponível via WhatsApp.
                  </p>
                </div>
                <Button variant="accent" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Trust indicators */}
            <Card className="border-0 shadow-card bg-primary">
              <CardContent className="p-6 text-center space-y-4 text-primary-foreground">
                <CheckCircle className="w-12 h-12 text-accent mx-auto" />
                <div className="space-y-2">
                  <h4 className="font-bold">Garantia de Segurança</h4>
                  <p className="text-sm text-primary-foreground/90">
                    Todos os nossos serviços possuem seguro total e garantia de qualidade.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;