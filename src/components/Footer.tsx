import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "0800 349 8027",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@zkxtransportes.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value:
      "Rua Darke de Mattos, 28 - Higienópolis - Rio de Janeiro - RJ, CEP: 21051-470",
  },
]

const quickLinks = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Clientes", href: "#clients" },
  { label: "Contato", href: "#contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const Footer = () => (
  <footer className="bg-white border-t border-[#E6E9EA]">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 py-7">
        {/* Logo e contato */}
        <div className="flex flex-col items-center md:items-start gap-3 min-w-[210px]">
          <div className="flex items-center gap-2 mb-1">
            <span className="rounded-md bg-[#237E45]/90 p-1.5 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </span>
            <span
              className="font-black text-lg tracking-wide"
              style={{ color: VERDE }}
            >
              ZKX
            </span>
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: PRATA }}
            >
              Transportes
            </span>
          </div>
          <ul className="text-xs text-[#5a666c] font-medium space-y-1">
            {contactInfo.map(({ icon: Icon, value }, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Icon className="w-4 h-4" style={{ color: VERDE }} />
                <span className={idx === 2 ? "whitespace-pre-line" : ""}>
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <h3
            className="font-semibold text-xs uppercase mb-1"
            style={{ color: VERDE }}
          >
            Navegação
          </h3>
          <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-[#5a666c] hover:text-[#237E45] transition px-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <h3
            className="font-semibold text-xs uppercase mb-1"
            style={{ color: VERDE }}
          >
            Redes Sociais
          </h3>
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 bg-[#E6E9EA] rounded-md flex items-center justify-center text-[#237E45] hover:bg-[#237E45] hover:text-white transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E6E9EA] py-3 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-[#8b98a6]">
        <div>© 2024 ZKX Transportes. Todos os direitos reservados.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[#237E45] transition">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-[#237E45] transition">
            Termos de Uso
          </a>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 bg-[#237E45] hover:bg-[#174e2d] rounded-md flex items-center justify-center transition ml-1"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
