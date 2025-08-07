import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"
const LOGO_SRC = "/lovable-uploads/9fcf5389-316f-482b-aa44-d1c0ded277c0.png"

// Ordem desejada (ESQUERDA)   (CENTRO/LOGO)   (DIREITA)
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

  // Split para simetria: [Serviços, Sobre] — [LOGO] — [Clientes, Contato]
  const leftMenu = NAV_ITEMS.slice(0, 2)
  const rightMenu = NAV_ITEMS.slice(2)

  // Header normal (topo)
  const HeaderDefault = (
    <motion.header
      key="headerDefault"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -28, pointerEvents: "none" }}
      transition={{ duration: 0.32, ease: [0.4, 1, 0.33, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#BFC8CC]/20"
      )}
      style={{ willChange: "opacity,transform" }}
    >
      {/* Topbar */}
      <div className="hidden sm:flex w-full text-xs h-8 px-6 items-center justify-between bg-[#BFC8CC] text-[#237E45] font-medium">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" /> 0800 349 8027
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" /> contato@zkxtransportes.com.br
          </span>
        </div>
        <div className="flex items-center gap-2 font-semibold opacity-85">
          <Shield className="w-4 h-4 text-[#237E45]" />
          Segurança homologada · Polícia Federal
        </div>
      </div>
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        {/* Header principal (antes do scroll) */}
        <a href="#home" className="flex items-center gap-2 min-w-[120px]">
          <img
            src="/lovable-uploads/9fcf5389-316f-482b-aa44-d1c0ded277c0.png"
            alt="ZKX Logo"
            className="h-12 w-auto select-none" // <-- Aumente aqui de 'h-8' para 'h-12'
            style={{
              filter: "none",
              maxHeight: 48, // ou ajuste conforme o ideal para sua tipografia
              objectFit: "contain", // garante não “estourar” o header
              marginTop: 0,
              marginBottom: 0, // ajuda a centralizar se necessário
            }}
          />
          <span
            className="ml-2 font-black uppercase tracking-wide text-sm select-none transition-colors"
            style={{ color: "#237E45", letterSpacing: "0.11em" }}
          >
            ZKX TRANSPORTES
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {FULL_MENU.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-2 py-1 text-sm font-semibold rounded transition-colors text-[#657078] hover:text-[#237E45] hover:bg-[#BFC8CC]/30"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-6 font-bold rounded-full border-2 border-[#237E45] text-[#237E45] bg-white shadow-none
              hover:bg-[#237E45] hover:text-white hover:border-[#237E45] transition"
            style={{ letterSpacing: "0.03em" }}
          >
            Solicitar Orçamento
          </Button>
        </div>
        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-[#237E45] transition-colors"
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
        <div className="md:hidden bg-white text-[#237E45] pt-1 pb-4 border-t border-[#BFC8CC]/20">
          <div className="container mx-auto px-4 flex flex-col gap-2">
            {FULL_MENU.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 pl-2 text-base font-semibold rounded hover:bg-[#E6E9EA]/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="mt-3 h-10 px-6 font-bold rounded-full border-2 border-[#237E45] text-[#237E45] bg-white shadow-none hover:bg-[#237E45] hover:text-white hover:border-[#237E45] transition"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  )

  // Header simétrico com logo central
  const HeaderScrolled = (
    <motion.header
      key="headerScrolled"
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, pointerEvents: "none" }}
      transition={{ duration: 0.36, ease: [0.33, 1, 0.23, 1] }}
      // Correção: fundo branco sólido, borda sutil
      className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#BFC8CC]/30 shadow-none"
      style={{ height: 64, willChange: "opacity,transform" }}
    >
      <nav className="container mx-auto px-4 flex items-center justify-center h-full relative">
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          {leftMenu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1 text-sm font-semibold rounded transition-colors text-[#237E45] hover:bg-[#BFC8CC]/40"
              style={{ fontSize: "1rem" }}
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
              className="px-3 py-1 text-sm font-semibold rounded transition-colors text-[#237E45] hover:bg-[#BFC8CC]/40"
              style={{ fontSize: "1rem" }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-[#237E45] absolute right-2 transition-colors"
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
        <div className="md:hidden bg-white text-[#237E45] pt-1 pb-4 border-t border-[#BFC8CC]/20 absolute top-full left-0 w-full z-50">
          <div className="container mx-auto px-4 flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-3 pl-2 text-base font-semibold rounded hover:bg-[#E6E9EA]/70 transition-colors"
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
