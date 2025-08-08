import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"
const LOGO_SRC = "/assets/logo/grupo_zkx_branco.svg"

// Menu nav centralizado
const NAV_ITEMS = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Clientes", href: "#clients" },
  { label: "Contato", href: "#contact" },
]
const FULL_MENU = [{ label: "Início", href: "#home" }, ...NAV_ITEMS]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Menu para cada lado quando scrollado
  const leftMenu = NAV_ITEMS.slice(0, 2)
  const rightMenu = NAV_ITEMS.slice(2)

  // Header padrão (topo, sem logo, sem CTA)
  const HeaderDefault = (
    <motion.header
      key="headerDefault"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -28, pointerEvents: "none" }}
      transition={{ duration: 0.32, ease: [0.4, 1, 0.33, 1] }}
      // Removido border-b e sombra para continuidade visual com a HeroSection:
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md"
      )}
      style={{ willChange: "opacity,transform" }}
    >
      {/* Topbar */}
      <div className="hidden sm:flex w-full text-xs h-8 px-6 items-center justify-between bg-[#BFC8CC] text-[#237E45] font-medium">
        <div className="flex items-center gap-2 font-semibold opacity-85">
          <Shield className="w-4 h-4 text-[#237E45]" />
          Segurança homologada · Polícia Federal
        </div>
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" /> 0800 349 8027
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" /> contato@grupozkx.com.br
          </span>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-2 flex items-center justify-center">
        {/* Menu centralizado, fonte maior, capitalize */}
        <div className="hidden md:flex items-center gap-7 justify-center w-full">
          {FULL_MENU.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1 text-[1.13rem] font-semibold rounded transition-colors text-[#657078] hover:text-[#237E45] hover:bg-[#BFC8CC]/30 capitalize"
              style={{
                textTransform: "capitalize",
                letterSpacing: ".01em",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-[#237E45] transition-colors absolute right-4"
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
      {/* Mobile nav (mantém igual)... */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-[#237E45] pt-1 pb-4 border-t border-[#BFC8CC]/20">
          <div className="container mx-auto px-4 flex flex-col gap-2">
            {FULL_MENU.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 pl-2 text-base font-semibold rounded hover:bg-[#E6E9EA]/70 transition-colors capitalize"
                style={{ textTransform: "capitalize" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  )

  // Header com logo (ao scrollar)
  const HeaderScrolled = (
    <motion.header
      key="headerScrolled"
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, pointerEvents: "none" }}
      transition={{ duration: 0.36, ease: [0.33, 1, 0.23, 1] }}
      // Fundo verde institucional invertido
      className="fixed top-0 left-0 w-full z-50 bg-[#237E45] border-b border-[#BFC8CC]/30 shadow-none"
      style={{ height: 64, willChange: "opacity,transform" }}
    >
      <nav className="container mx-auto px-4 flex items-center justify-center h-full relative">
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          {leftMenu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
              px-3 py-1 text-sm font-semibold rounded transition-colors
              text-white
              hover:bg-[#3dbb78]/25
              hover:text-[#BFC8CC]
              capitalize
            "
              style={{ fontSize: "1rem", letterSpacing: ".01em" }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Logo central */}
        <div className="flex-shrink-0 flex items-center justify-center z-10 mx-8">
          <a
            href="#home"
            className="flex items-center justify-center"
            style={{ minWidth: 56 }}
          >
            <img
              src={LOGO_SRC}
              className="h-9 w-auto select-none"
              alt="ZKX Logo"
              style={{ filter: "none" }}
            />
          </a>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-start gap-6">
          {rightMenu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
              px-3 py-1 text-sm font-semibold rounded transition-colors
              text-white
              hover:bg-[#3dbb78]/25
              hover:text-[#BFC8CC]
              capitalize
            "
              style={{ fontSize: "1rem", letterSpacing: ".01em" }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-white absolute right-4 transition-colors"
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
      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#237E45] text-white pt-1 pb-4 border-t border-[#BFC8CC]/30 absolute top-full left-0 w-full z-50">
          <div className="container mx-auto px-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 pl-2 text-base font-semibold rounded hover:bg-[#BFC8CC]/15 transition-colors capitalize"
                style={{ textTransform: "capitalize" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  )


  return (
    <AnimatePresence mode="wait" initial={false}>
      {!isScrolled ? HeaderDefault : HeaderScrolled}
    </AnimatePresence>
  )
}
