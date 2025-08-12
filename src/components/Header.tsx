import { useState } from "react"
import { Menu, X, Phone, Mail, Shield } from "lucide-react"
import { motion } from "framer-motion"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"

const LOGO_COLORIDA = "/assets/logo/grupo_zkx.svg"
const LOGO_BRANCA = "/assets/logo/grupo_zkx_branco.svg"

const NAV_ITEMS = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Clientes", href: "#clients" },
  { label: "Contato", href: "#contact" },
]
const FULL_MENU = [{ label: "Início", href: "#home" }, ...NAV_ITEMS]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoHover, setLogoHover] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.41, 1, 0.38, 1] }}
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: VERDE,
        boxShadow: "none",
        minHeight: 56,
        borderBottom: `1.7px solid ${PRATA}44`,
      }}
    >
      {/* Topbar institucional */}
      <div
        className="hidden sm:flex w-full text-xs h-8 px-6 items-center justify-between"
        style={{ background: PRATA, color: VERDE, fontWeight: 500 }}
      >
        <div className="flex items-center gap-2 opacity-90">
          <Shield className="w-4 h-4 text-[#237E45]" />
          Segurança homologada · Polícia Federal
        </div>
        <div className="flex gap-4 items-center font-medium">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" /> 0800 349 8027
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" /> contato@grupozkx.com.br
          </span>
        </div>
      </div>
      {/* Navbar com logo à esquerda */}
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo à esquerda, fade entre colorida e branca no hover */}
        <a
          href="#home"
          className="relative flex items-center h-12 group"
          style={{ minWidth: 130, width: 130, height: 48 }}
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
        >
          <img
            src={LOGO_COLORIDA}
            alt="Logo Colorida"
            className={`absolute top-0 left-0 h-10 md:h-12 w-auto select-none transition-opacity duration-300 ${
              logoHover ? "opacity-0" : "opacity-100"
            }`}
            style={{ zIndex: 2 }}
          />
          <img
            src={LOGO_BRANCA}
            alt="Logo Branca"
            className={`absolute top-0 left-0 h-10 md:h-12 w-auto select-none transition-opacity duration-300 ${
              logoHover ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: 1 }}
          />
        </a>
        {/* Menu centralizado desktop */}
        <div className="hidden md:flex justify-center w-full gap-8">
          {FULL_MENU.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1 text-[1.12rem] font-semibold capitalize rounded transition-all duration-150 text-white hover:text-[#BFC8CC] hover:bg-[#154723]/22"
              style={{
                letterSpacing: ".012em",
                textTransform: "capitalize",
                transition: "color 0.22s, background 0.22s",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Mobile burger menu */}
        <button
          className="md:hidden p-2 text-white transition-colors absolute right-5 top-1"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </nav>
      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-[#237E45] text-white pt-1 pb-4 border-t border-[#BFC8CC]/25 absolute left-0 w-full z-50"
          style={{ top: "100%" }}
        >
          <div className="container mx-auto px-4 flex flex-col gap-1">
            {FULL_MENU.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-4 pl-3 text-lg font-semibold rounded hover:bg-[#1A663A]/35 capitalize transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ textTransform: "capitalize" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  )
}
