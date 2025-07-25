import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Award, 
  Users, 
  MapPin, 
  Clock, 
  Zap,
  CheckCircle,
  Target
} from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Tecnologia de ponta e protocolos rigorosos para máxima proteção"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Certificações internacionais e padrões de qualidade superiores"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais altamente treinados e qualificados"
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Compromisso com prazos e horários estabelecidos"
    }
  ];

  const certifications = [
    "Licença da Polícia Federal",
    "ISO 9001 - Gestão da Qualidade",
    "ISO 27001 - Segurança da Informação",
    "ABNT NBR 15000 - Transporte de Valores",
    "Certificação ANVISA",
    "Licença Corpo de Bombeiros"
  ];

  const achievements = [
    { icon: MapPin, label: "Estados Atendidos", value: "15+" },
    { icon: Users, label: "Funcionários", value: "2.000+" },
    { icon: Zap, label: "Veículos Blindados", value: "150+" },
    { icon: Target, label: "Taxa de Sucesso", value: "99.9%" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Sobre a ZKX Transportes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de 20 anos protegendo o que é mais importante para nossos clientes, 
            com tecnologia de ponta e a máxima segurança em cada operação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Nossa História
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fundada em 2003, a ZKX Transportes nasceu com o objetivo de revolucionar 
                  o mercado de transporte de valores no Brasil, oferecendo soluções 
                  inovadoras e totalmente seguras.
                </p>
                <p>
                  Ao longo de duas décadas, construímos uma reputação sólida baseada 
                  na confiança, tecnologia e excelência operacional, atendendo desde 
                  pequenos comércios até grandes corporações.
                </p>
                <p>
                  Hoje somos referência nacional em transporte seguro, com presença 
                  em 15 estados e mais de 500 clientes ativos que confiam em nossa experiência.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={achievement.label}
                    className="text-center space-y-2 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right content - Values */}
          <div className="space-y-6 animate-scale-in">
            <h3 className="text-3xl font-bold text-primary text-center lg:text-left">
              Nossos Valores
            </h3>
            <div className="grid gap-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={value.title}
                    className="border-0 shadow-card bg-background hover:shadow-glow transition-smooth"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-bold text-primary">{value.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications section */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Certificações e Licenças
            </h3>
            <p className="text-muted-foreground">
              Mantemos as mais importantes certificações do setor para garantir 
              a qualidade e segurança de nossos serviços.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={cert}
                className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-primary">{cert}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="accent" size="lg">
              Ver Todas as Certificações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;