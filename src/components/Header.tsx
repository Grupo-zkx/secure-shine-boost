import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, Shield } from "lucide-react"
import { motion } from "framer-motion"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"
const LOGO_COLORIDA = "/assets/logo/grupo_zkx.svg"
const LOGO_BRANCA = "/assets/logo/grupo_zkx_branco.svg"

const NAV_ITEMS = [
  { label: "SOLUÇÕES", href: "/solucoes" },
  { label: "SOBRE", href: "/#about" },
  { label: "ATUAÇÃO", href: "/#clients" },
  { label: "FALE CONOSCO", href: "/#contact" },
]
const FULL_MENU = [{ label: "INÍCIO", href: "/" }, ...NAV_ITEMS]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.41, 1, 0.38, 1] }}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
      style={{
        background: isScrolled ? "#fff" : "transparent",
        borderBottom: isScrolled ? `1.7px solid ${PRATA}44` : "none",
        boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
      }}
    >
      {/* Topbar institucional sempre visível */}
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
      {/* Navbar principal com largura total */}
      <nav
        className="w-full flex items-center"
        style={{ padding: "16px 0 0 0", minHeight: 65 }}
      >
        {/* Logo 100% à esquerda */}
        <div
          className="flex items-center justify-start flex-none pl-6"
          style={{ minWidth: 140 }}
        >
          <a
            href="#home"
            className="relative flex items-center"
            style={{ overflow: "visible" }}
          >
            <img
              src={isScrolled ? LOGO_COLORIDA : LOGO_BRANCA}
              alt="Logo ZKX"
              className="h-14 md:h-14 w-auto select-none transition-opacity duration-300"
              style={{
                maxHeight: 56,
                minHeight: 44,
                objectFit: "contain",
                marginTop: "-8px",
                marginBottom: "-7px",
              }}
            />
          </a>
        </div>
        {/* Links centralizados */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-7">
          {FULL_MENU.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-3 py-1 text-[1.21rem] font-semibold rounded transition-all duration-150
                ${
                  isScrolled
                    ? "text-[#237E45] hover:text-[#154723] hover:bg-[#BFC8CC]/20"
                    : "text-white hover:text-[#BFC8CC]/90"
                }`}
              style={{
                letterSpacing: ".014em",
                transition: "color 0.22s, background 0.22s",
                textTransform: "capitalize",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Botão Portal 100% à direita */}
        <div
          className="flex items-center justify-end flex-none pr-6"
          style={{ minWidth: 140 }}
        >
          <a
            href="/portal"
            className={`px-5 py-2 font-bold rounded-full text-[1.07rem] transition-all duration-150
              border border-[#237e45] bg-[#237E45]/90 text-white
              hover:bg-[#154723]/95 hover:text-[#BFC8CC]`}
            style={{ textTransform: "capitalize", letterSpacing: ".013em" }}
          >
            Portal
          </a>
        </div>
        {/* Mobile burger menu */}
        <button
          className={`md:hidden p-2 transition-colors absolute right-5 top-1 
            ${isScrolled ? "text-[#237E45]" : "text-white"}`}
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
      {/* Menu mobile: TITULOS CAPITALIZADOS + Portal centralizado */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden border-t absolute left-0 w-full z-50 transition-colors duration-300
            ${
              isScrolled
                ? "bg-white text-[#237E45] border-[#BFC8CC]/40"
                : "bg-[#237E45]/95 text-white border-white/10"
            }`}
          style={{ top: "100%" }}
        >
          <div className="container mx-auto px-4 flex flex-col gap-1">
            {FULL_MENU.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`py-4 pl-3 text-lg font-semibold transition-all
                  ${
                    isScrolled
                      ? "hover:bg-[#BFC8CC]/25"
                      : "hover:bg-[#1A663A]/40"
                  }`}
                style={{ textTransform: "capitalize" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/portal"
              className={`mt-3 mb-2 px-6 py-3 font-bold rounded-full text-lg border border-[#237e45] bg-[#237E45]/90 text-white
                hover:bg-[#154723]/95 hover:text-[#BFC8CC] mx-auto transition-all duration-150`}
              style={{
                textTransform: "capitalize",
                letterSpacing: ".012em",
                textAlign: "center",
              }}
            >
              Portal
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
