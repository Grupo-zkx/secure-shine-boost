import { useState } from "react"
import { Menu, X, Phone, Mail, Shield } from "lucide-react"
import { Link } from "react-router-dom"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"

const LOGO_COLORIDA = "/assets/logo/logo_zkx_horizontal.png"

const NAV_ITEMS = [
  { label: "SOBRE", to: "/#sobre" },
  { label: "ATUAÇÃO", to: "/#atuacao" },
  { label: "SOLUÇÕES", to: "/solucoes" },
  { label: "PROPOSTA", to: "/#contato" },
]
const FULL_MENU = [{ label: "INÍCIO", to: "/" }, ...NAV_ITEMS]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className="sticky top-0 left-0 w-full z-50 bg-white border-b"
      style={{ borderColor: `${PRATA}44` }}
    >
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
            <Link
              to="/trabalhe-conosco"
              className="font-bold uppercase hover:underline"
            >
              trabalhe conosco
            </Link>
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            0800 349 8027
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
            <a
              href="mailto:contato@grupozkx.com.br"
              className="hover:underline"
            >
              contato@grupozkx.com.br
            </a>
          </span>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className="flex items-center justify-between px-6 min-h-[72px]">
        {/* LOGO horizontal */}
        <div className="flex items-center flex-none min-w-[160px] h-full pr-4">
          <Link to="/" className="flex items-center h-full">
            <img
              src={LOGO_COLORIDA}
              alt="Logo ZKX"
              className="max-h-12 max-w-[310px] w-auto h-auto select-none"
              style={{
                objectFit: "contain",
                display: "block",
              }}
            />
          </Link>
        </div>

        {/* Links centralizados */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-6 h-full">
          {FULL_MENU.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="px-3 py-1 text-[1.19rem] font-semibold rounded transition-all duration-150
                text-[#237E45] hover:text-[#154723] hover:bg-[#BFC8CC]/20 flex items-center h-full"
              style={{ letterSpacing: ".013em", textTransform: "capitalize" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Botões à direita */}
        <div className="hidden md:flex items-center justify-end flex-none w-auto h-full gap-4">
          <Link
            to="/portal"
            className="px-5 py-1 font-bold rounded-full text-[0.99rem] border border-[#237E45] bg-[#237E45] text-white
              hover:bg-[#154723] hover:text-[#BFC8CC] transition-all duration-150"
            style={{
              textTransform: "uppercase",
              letterSpacing: ".02em",
              textAlign: "center",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Area Cliente
          </Link>
          <Link
            to="/restrita"
            className="px-5 py-1 font-bold rounded-full text-[0.99rem] border border-[#237E45] bg-white text-[#237E45]
              hover:bg-[#237E45]/10 hover:text-[#154723] transition-all duration-150"
            style={{
              textTransform: "uppercase",
              letterSpacing: ".02em",
              textAlign: "center",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Area Restrita
          </Link>
        </div>

        {/* Mobile burger menu */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#237E45] absolute right-5 top-3"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t absolute left-0 w-full z-50 bg-white text-[#237E45] border-[#BFC8CC]/40"
          style={{ top: "100%" }}
        >
          <div className="container mx-auto px-4 flex flex-col gap-1">
            {FULL_MENU.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="py-4 pl-3 text-lg font-semibold hover:bg-[#BFC8CC]/25 transition-all"
                style={{ textTransform: "capitalize" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/portal"
              className="mt-3 mb-2 px-6 py-3 font-bold rounded-full text-lg border border-[#237e45] bg-[#237E45]/90 text-white
                hover:bg-[#154723]/95 hover:text-[#BFC8CC] mx-auto transition-all duration-150"
              style={{
                textTransform: "uppercase",
                letterSpacing: ".012em",
                textAlign: "center",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portal
            </Link>
            <Link
              to="/#contato"
              className="mb-3 px-6 py-3 font-bold rounded-full text-lg border border-[#237e45] bg-white text-[#237E45]
                hover:bg-[#237E45]/10 hover:text-[#154723] mx-auto transition-all duration-150"
              style={{
                textTransform: "uppercase",
                letterSpacing: ".012em",
                textAlign: "center",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
