import { ShieldCheck, HeartHandshake, Cpu, Shield, BadgeCheck, Award } from "lucide-react"

/**
 * Conteúdo institucional do Hero (banner "imagem 1").
 * Slogans e selos sobrepostos à foto estática da frota ZKX.
 */
export const heroSlogans = [
  {
    icon: ShieldCheck,
    title: "PROTEGENDO",
    subtitle: "O QUE REALMENTE IMPORTA",
  },
  {
    icon: HeartHandshake,
    title: "COMPROMISSO",
    subtitle: "QUE NOS MOVE",
  },
  {
    icon: Cpu,
    title: "TECNOLOGIA",
    subtitle: "A FAVOR DA SEGURANÇA",
  },
]

export const heroBadges = [
  { icon: Shield, label: "SEGURANÇA" },
  { icon: BadgeCheck, label: "CONFIANÇA" },
  { icon: Award, label: "EXCELÊNCIA" },
]

export const heroTagline = "Quem é daqui, Atende Melhor!"
