import { Shield, Phone, Mail, MapPin, Instagram, ArrowUp } from "lucide-react"

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
    value: "contato@grupozkx.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value:
      "Rua Darke de Mattos, 28 - Higienópolis - Rio de Janeiro - RJ, CEP: 21051-470",
  },
]

// Links institucionais padronizados
const quickLinks = [
  { label: "Início", href: "#home" },
  { label: "Soluções", href: "#services" }, // troquei "Serviços"
  { label: "Sobre", href: "#about" },
  { label: "Atuação", href: "#clients" }, // troquei "Clientes"
  { label: "Fale Conosco", href: "#contact" }, // troquei "Contato"
]

// Apenas Instagram (institucional e atualizado)
const socialLinks = [{ icon: Instagram, href: "#", label: "Instagram" }]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const Footer = () => (
  <footer className="bg-[#237E45] border-t-0">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 py-9">
        {/* Logo e contato */}
        <div className="flex flex-col items-center md:items-start gap-3 min-w-[210px]">
          <div className="flex items-center gap-2 mb-1">
            {/* Logo SVG/PNG substituindo o Shield */}
            <img
              src="/assets/logo/grupo_zkx_branco.svg" // ajuste o caminho conforme sua estrutura
              alt="ZKX Logo"
              className="w-10 h-10 object-contain"
              draggable={false}
            />
            <div className="flex flex-col justify-center">
              <span className="font-black text-lg md:text-xl tracking-wide text-white leading-tight">
                GRUPO ZKX
              </span>
              <span
                className="text-[0.75rem] md:text-sm font-semibold tracking-wider text-white/65 mt-0.5"
                style={{
                  lineHeight: 1.15,
                  letterSpacing: ".04em",
                  fontWeight: 500,
                }}
              >
                Transporte de valores e segurança
              </span>
            </div>
          </div>
          <ul className="text-xs text-white/85 font-medium space-y-1">
            {contactInfo.map(({ icon: Icon, value }, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-white/90" />
                <span className={idx === 2 ? "whitespace-pre-line" : ""}>
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links institucionais */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <h3 className="font-semibold text-xs uppercase mb-1 text-white/60 tracking-wider">
            Navegação
          </h3>
          <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-white/90 hover:text-[#BFC8CC] transition px-1 font-semibold"
                  style={{ textTransform: "capitalize" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Apenas Instagram */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <h3 className="font-semibold text-xs uppercase mb-1 text-white/60 tracking-wider">
            Redes Sociais
          </h3>
          <div className="flex gap-2">
            <a
              href={socialLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md flex items-center justify-center bg-white/10 text-white hover:bg-white/30 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar instituicional */}
      <div className="border-t border-white/10 py-3 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-white/85">
        <div>© 2024 Grupo ZKX. Todos os direitos reservados.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[#BFC8CC] transition font-semibold">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-[#BFC8CC] transition font-semibold">
            Termos de Uso
          </a>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 bg-white/20 hover:bg-white/40 rounded-md flex items-center justify-center transition ml-1"
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
