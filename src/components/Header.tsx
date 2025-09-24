import React, { useRef, useState } from "react"
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

  // dropdown states separados
  const [openServicos, setOpenServicos] = useState(false)
  const [openPortais, setOpenPortais] = useState(false)

  const servicosCloseRef = useRef<number | null>(null)
  const portaisCloseRef = useRef<number | null>(null)

  const location = useLocation()
  const navigate = useNavigate()

  // Servicos dropdown helpers
  const openServicosMenu = () => {
    if (servicosCloseRef.current) {
      window.clearTimeout(servicosCloseRef.current)
      servicosCloseRef.current = null
    }
    setOpenServicos(true)
  }
  const scheduleCloseServicos = () => {
    if (servicosCloseRef.current) window.clearTimeout(servicosCloseRef.current)
    servicosCloseRef.current = window.setTimeout(
      () => setOpenServicos(false),
      150
    )
  }
  const cancelCloseServicos = () => {
    if (servicosCloseRef.current) {
      window.clearTimeout(servicosCloseRef.current)
      servicosCloseRef.current = null
    }
  }

  // Portais dropdown helpers
  const openPortaisMenu = () => {
    if (portaisCloseRef.current) {
      window.clearTimeout(portaisCloseRef.current)
      portaisCloseRef.current = null
    }
    setOpenPortais(true)
  }
  const scheduleClosePortais = () => {
    if (portaisCloseRef.current) window.clearTimeout(portaisCloseRef.current)
    portaisCloseRef.current = window.setTimeout(
      () => setOpenPortais(false),
      150
    )
  }
  const cancelClosePortais = () => {
    if (portaisCloseRef.current) {
      window.clearTimeout(portaisCloseRef.current)
      portaisCloseRef.current = null
    }
  }

  // Navegação com suporte a âncoras/hash e limpeza de hash
  const handleNavItemClick = (item: { label: string; to: string }) => {
    setIsMobileMenuOpen(false)

    const [pathPart, hashPart] = item.to.split("#")
    const path = pathPart || "/"
    const hash = hashPart || ""

    if (location.pathname === path) {
      if (hash) {
        const el =
          document.getElementById(hash) ||
          document.querySelector(`[name="${hash}"]`)
        if (el) {
          ;(el as HTMLElement).scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        if (window.location.hash)
          window.history.replaceState(null, "", window.location.pathname)
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
        if (window.location.hash)
          window.history.replaceState(null, "", window.location.pathname)
      }
    } else {
      navigate(item.to)
    }
  }

  return (
    <header
      className="sticky top-0 left-0 w-full z-50 bg-white border-b overflow-x-hidden"
      style={{ borderColor: `${PRATA}44` }}
    >
      {/* Topbar (sempre visível em sm+) */}
      <div
        className="hidden sm:flex w-full text-xs h-8 px-6 items-center justify-between"
        style={{ background: PRATA, color: VERDE, fontWeight: 500 }}
      >
        <div className="flex items-center gap-2 opacity-90">
          <Shield className="w-4 h-4 text-[#237E45]" />
          Segurança homologada · Polícia Federal
        </div>
        <div className="flex gap-4 items-center font-medium">
          <Link
            to="/trabalhe-conosco"
            className="font-bold uppercase hover:underline"
          >
            trabalhe conosco
          </Link>
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
        {/* LOGO (mantive exatamente a classe original) */}
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

        {/* Links centralizados (desktop) */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-6 h-full">
          {FULL_MENU.map((item) => {
            if (
              item.label.toLowerCase() === "serviços" ||
              item.label.toLowerCase() === "servicos"
            ) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={openServicosMenu}
                  onMouseLeave={scheduleCloseServicos}
                >
                  <button
                    onFocus={openServicosMenu}
                    onBlur={scheduleCloseServicos}
                    aria-controls="servicos-dropdown"
                    aria-expanded={openServicos}
                    className="px-3 py-1 text-[1.19rem] font-semibold rounded transition-all duration-150 text-[#237E45] hover:text-[#154723] hover:bg-[#BFC8CC]/20 flex items-center h-full"
                    style={{
                      letterSpacing: ".013em",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.label}
                  </button>

                  <div
                    id="servicos-dropdown"
                    role="menu"
                    className={`absolute left-1/2 transform -translate-x-1/2 mt-0 w-56 rounded-md shadow-lg ring-1 ring-black/5 transition-opacity duration-150 ${
                      openServicos
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                    onMouseEnter={cancelCloseServicos}
                    onMouseLeave={scheduleCloseServicos}
                    style={{
                      top: "100%",
                      zIndex: 60,
                      background: "white",
                      border: `1px solid ${PRATA}33`,
                    }}
                  >
                    <ul className="py-1">
                      <li>
                        <button
                          className="w-full text-left block px-4 py-2 text-sm text-[#237E45] hover:bg-[#BFC8CC]/15"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setOpenServicos(false)
                            handleNavItemClick({
                              label: "Transporte de numerário",
                              to: "/#transportes",
                            })
                          }}
                        >
                          Transporte de numerário
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left block px-4 py-2 text-sm text-[#237E45] hover:bg-[#BFC8CC]/15"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setOpenServicos(false)
                            handleNavItemClick({
                              label: "Abastecimento de ATMs",
                              to: "/#atm",
                            })
                          }}
                        >
                          Abastecimento de ATMs
                        </button>
                      </li>
                      <li>
                        <button
                          className="w-full text-left block px-4 py-2 text-sm text-[#237E45] hover:bg-[#BFC8CC]/15"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setOpenServicos(false)
                            handleNavItemClick({
                              label: "Transporte de Joias e Metais",
                              to: "/#joias",
                            })
                          }}
                        >
                          Transporte de Joias e Metais
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            }

            // itens normais
            return (
              <button
                key={item.label}
                onClick={() => handleNavItemClick(item)}
                className="px-3 py-1 text-[1.19rem] font-semibold rounded transition-all duration-150 text-[#237E45] hover:text-[#154723] hover:bg-[#BFC8CC]/20 flex items-center h-full"
                style={{ letterSpacing: ".013em", textTransform: "capitalize" }}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        {/* Botões à direita (desktop) */}
        <div className="hidden md:flex items-center justify-end flex-none w-auto h-full gap-4">
          <a
            href="https://zkx.satmob.com.br"
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

          <div
            className="relative"
            onMouseEnter={openPortaisMenu}
            onMouseLeave={scheduleClosePortais}
          >
            <button
              onFocus={openPortaisMenu}
              onBlur={scheduleClosePortais}
              aria-controls="portais-dropdown"
              aria-haspopup="true"
              className="px-5 py-1 font-bold rounded-full text-[0.99rem] border border-[#237E45] bg-white text-[#237E45] hover:bg-[#237E45]/10 hover:text-[#154723] transition-all duration-150"
              style={{
                textTransform: "uppercase",
                letterSpacing: ".02em",
                textAlign: "center",
              }}
            >
              Área Restrita
            </button>

            <div
              id="portais-dropdown"
              role="menu"
              className={`absolute right-0 mt-0 w-40 p-1 rounded-lg shadow-lg ring-1 ring-black/5 transition-opacity duration-150 ${
                openPortais
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onMouseEnter={cancelClosePortais}
              onMouseLeave={scheduleClosePortais}
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
                onClick={() => setOpenPortais(false)}
              >
                Corporativo
              </a>
              <a
                href="https://webmail-seguro.com.br/v2/"
                target="_blank"
                className="block px-4 py-2 text-sm text-[#237E45] hover:bg-gray-100"
                onClick={() => setOpenPortais(false)}
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Mobile hamburger (visível em telas < md) */}
        <div className="md:hidden flex items-center">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#237E45] text-white z-50"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t w-full z-40 bg-white text-[#237E45] border-[#BFC8CC]/40 fixed left-0 top-[72px] h-[calc(100vh-72px)] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-2">
            {FULL_MENU.map((item) => {
              if (item.to === "/") {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavItemClick(item)}
                    className="w-full text-left py-3 pl-3 text-lg font-semibold hover:bg-[#BFC8CC]/25 rounded transition-all"
                  >
                    {item.label}
                  </button>
                )
              }

              if (
                item.label.toLowerCase() === "serviços" ||
                item.label.toLowerCase() === "servicos"
              ) {
                return (
                  <details key={item.label} className="group">
                    <summary className="py-3 pl-3 text-lg font-semibold hover:bg-[#BFC8CC]/25 transition-all cursor-pointer list-none">
                      {item.label}
                    </summary>
                    <div className="pl-5 flex flex-col">
                      <button
                        onClick={() =>
                          handleNavItemClick({
                            label: "Transporte de numerário",
                            to: "/#transportes",
                          })
                        }
                        className="py-2 text-base text-left hover:text-[#154723]"
                      >
                        Transporte de numerário
                      </button>
                      <button
                        onClick={() =>
                          handleNavItemClick({
                            label: "Abastecimento de ATMs",
                            to: "/#atm",
                          })
                        }
                        className="py-2 text-base text-left hover:text-[#154723]"
                      >
                        Abastecimento de ATMs
                      </button>
                      <button
                        onClick={() =>
                          handleNavItemClick({
                            label: "Transporte de Joias e Metais",
                            to: "/#joias",
                          })
                        }
                        className="py-2 text-base text-left hover:text-[#154723]"
                      >
                        Transporte de Joias e Metais
                      </button>
                    </div>
                  </details>
                )
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavItemClick(item)}
                  className="w-full text-left py-3 pl-3 text-lg font-semibold hover:bg-[#BFC8CC]/25 rounded transition-all"
                >
                  {item.label}
                </button>
              )
            })}

            <a
              href="https://zkx.satmob.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 mb-2 px-4 py-2 w-full text-center font-bold rounded-full text-base border border-[#237e45] bg-[#237E45]/90 text-white hover:bg-[#154723]/95 hover:text-[#BFC8CC] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Área Cliente
            </a>

            <details className="group mb-2">
              <summary className="px-4 py-2 rounded-full border border-[#237E45] bg-white text-[#237E45] hover:bg-[#237E45]/10 cursor-pointer text-center list-none text-base">
                Área Restrita
              </summary>
              <div className="flex flex-col mt-2 text-center">
                <a
                  href="https://zkx.satmob.com.br"
                  target="_blank"
                  className="py-2 text-base text-[#237E45] hover:text-[#154723]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Corporativo
                </a>
                <a
                  href="https://webmail-seguro.com.br/v2/"
                  target="_blank"
                  className="py-2 text-base text-[#237E45] hover:text-[#154723]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Email
                </a>
              </div>
            </details>
          </div>
        </div>
      )}
    </header>
  )
}
