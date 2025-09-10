import { useRef, useState } from "react"
import { Menu, X, Phone, Mail, Shield } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const VERDE = "#237E45"
const PRATA = "#BFC8CC"

const LOGO_COLORIDA = "/assets/logo/logo_zkx_horizontal.png"

const NAV_ITEMS = [
  { label: "SOBRE", to: "/#sobre" },
  { label: "ATUAÇÃO", to: "/#atuacao" },
  { label: "SOLUÇÕES", to: "/solucoes" },
  { label: "PROPOSTA", to: "/proposta" },
]
const FULL_MENU = [{ label: "INÍCIO", to: "/" }, ...NAV_ITEMS]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const closeTimeoutRef = useRef<number | null>(null)

  const location = useLocation()
  const navigate = useNavigate()

  const openMenu = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(true)
  }

  const scheduleCloseMenu = () => {
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = window.setTimeout(
      () => setOpenDropdown(false),
      150
    )
  }

  const cancelScheduledClose = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

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
              style={{ objectFit: "contain", display: "block" }}
            />
          </Link>
        </div>

        {/* Links centralizados */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-6 h-full">
          {/* Renderização dos itens: substituí o item "Serviços" por um dropdown controlado */}
          {FULL_MENU.map((item) => {
            if (
              item.label.toLowerCase() === "serviços" ||
              item.label.toLowerCase() === "servicos"
            ) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleCloseMenu}
                  aria-haspopup="true"
                  aria-expanded={openDropdown}
                >
                  <button
                    className="px-3 py-1 text-[1.19rem] font-semibold rounded transition-all duration-150 text-[#237E45] hover:text-[#154723] hover:bg-[#BFC8CC]/20 flex items-center h-full"
                    style={{
                      letterSpacing: ".013em",
                      textTransform: "capitalize",
                    }}
                    onFocus={openMenu}
                    onBlur={scheduleCloseMenu}
                    aria-controls="servicos-dropdown"
                  >
                    {item.label}
                  </button>

                  {/* Painel do dropdown — colado sem gap */}
                  <div
                    id="servicos-dropdown"
                    role="menu"
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-0 w-56 rounded-md shadow-lg ring-1 ring-black/5 transition-opacity duration-150
                    ${
                      openDropdown
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                    onMouseEnter={cancelScheduledClose}
                    onMouseLeave={scheduleCloseMenu}
                    style={{
                      top: "100%",
                      zIndex: 60,
                      background: "white",
                      border: `1px solid ${PRATA}33`,
                    }}
                  >
                    <ul className="py-1">
                      <li>
                        <a
                          href="#transportes"
                          className="block px-4 py-2 text-sm text-[#237E45] hover:bg-[#BFC8CC]/15"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setOpenDropdown(false)
                          }}
                        >
                          Transporte de numerário
                        </a>
                      </li>
                      <li>
                        <a
                          href="#atm"
                          className="block px-4 py-2 text-sm text-[#237E45] hover:bg-[#BFC8CC]/15"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setOpenDropdown(false)
                          }}
                        >
                          Abastecimento de ATMs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#joias"
                          className="block px-4 py-2 text-sm text-[#237E45] hover:bg-[#BFC8CC]/15"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setOpenDropdown(false)
                          }}
                        >
                          Transporte de Joias e Metais
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            }

            // Itens normais
            return (
              <Link
                key={item.label}
                to={item.to}
                className="px-3 py-1 text-[1.19rem] font-semibold rounded transition-all duration-150 text-[#237E45] hover:text-[#154723] hover:bg-[#BFC8CC]/20 flex items-center h-full"
                style={{ letterSpacing: ".013em", textTransform: "capitalize" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Botões à direita */}
        <div className="hidden md:flex items-center justify-end flex-none w-auto h-full gap-4">
          {/* Botão Área Cliente */}
          <a
            href="https://zkx.egtv.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-1 font-bold rounded-full text-[0.99rem] border border-[#237E45] bg-[#237E45] text-white hover:bg-[#154723] hover:text-[#BFC8CC] transition-all duration-150"
            style={{
              textTransform: "uppercase",
              letterSpacing: ".02em",
              textAlign: "center",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Área Cliente
          </a>

          {/* Dropdown Portais — convertido para controle por foco/hover também */}
          <div
            className="relative"
            onMouseEnter={() => {
              openMenu()
              // reuse same handlers so only one dropdown state exists; if you want separate, create another state
            }}
            onMouseLeave={scheduleCloseMenu}
          >
            <button
              className="px-5 py-1 font-bold rounded-full text-[0.99rem] border border-[#237E45] bg-white text-[#237E45] hover:bg-[#237E45]/10 hover:text-[#154723] transition-all duration-150"
              style={{
                textTransform: "uppercase",
                letterSpacing: ".02em",
                textAlign: "center",
              }}
              onFocus={openMenu}
              onBlur={scheduleCloseMenu}
              aria-controls="portais-dropdown"
              aria-haspopup="true"
            >
              Área Restrita
            </button>

            <div
              id="portais-dropdown"
              role="menu"
              className={`absolute right-0 mt-0 w-40 p-1 rounded-lg shadow-lg ring-1 ring-black/5 transition-opacity duration-150
              ${
                openDropdown
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onMouseEnter={cancelScheduledClose}
              onMouseLeave={scheduleCloseMenu}
              style={{
                top: "100%",
                zIndex: 60,
                background: "white",
                border: `1px solid ${PRATA}33`,
              }}
            >
              <a
                href="https://zkx.satmob.com.br"
                target="_blank"
                className="block px-4 py-2 text-sm text-[#237E45] hover:bg-gray-100"
                onClick={() => setOpenDropdown(false)}
              >
                Corporativo
              </a>
              <a
                href="https://webmail-seguro.com.br/v2/"
                target="_blank"
                className="block px-4 py-2 text-sm text-[#237E45] hover:bg-gray-100"
                onClick={() => setOpenDropdown(false)}
              >
                Email
              </a>
            </div>
          </div>
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
            {FULL_MENU.map((item) => {
              if (item.to === "/") {
                // caso especial para o botão INÍCIO
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      setIsMobileMenuOpen(false)

                      if (location.pathname === "/") {
                        // já está no index, rola pro topo mesmo com hash
                        window.scrollTo({ top: 0, behavior: "smooth" })

                        // opcional: limpar hash da URL
                        if (window.location.hash) {
                          history.replaceState(
                            null,
                            "",
                            window.location.pathname
                          )
                        }
                      } else {
                        // se estiver em outra página, navega pro index
                        navigate("/")
                      }
                    }}
                    className="px-3 py-1 text-[1.19rem] font-semibold rounded transition-all duration-150 text-[#237E45] hover:text-[#154723] hover:bg-[#BFC8CC]/20 flex items-center h-full"
                    style={{
                      letterSpacing: ".013em",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.label}
                  </button>
                )
              }

              // todos os outros itens continuam sendo Link normalmente
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-1 text-[1.19rem] font-semibold rounded transition-all duration-150 text-[#237E45] hover:text-[#154723] hover:bg-[#BFC8CC]/20 flex items-center h-full"
                  style={{
                    letterSpacing: ".013em",
                    textTransform: "capitalize",
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              to="/portal"
              className="mt-3 mb-2 px-6 py-3 font-bold rounded-full text-lg border border-[#237e45] bg-[#237E45]/90 text-white hover:bg-[#154723]/95 hover:text-[#BFC8CC] mx-auto transition-all duration-150"
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
              className="mb-3 px-6 py-3 font-bold rounded-full text-lg border border-[#237e45] bg-white text-[#237E45] hover:bg-[#237E45]/10 hover:text-[#154723] mx-auto transition-all duration-150"
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
