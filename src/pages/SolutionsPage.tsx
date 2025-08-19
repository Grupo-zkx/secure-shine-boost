import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Banknote,
  Building2,
  ShoppingCart,
  CreditCard,
  Gem,
  Factory,
  ArrowRight,
  Shield,
} from "lucide-react"
import SolutionBanner from "@/components/Solutions/SolutionBanner"
import { Link } from "react-router-dom"
import { solutions } from "@/data/solutions"


const VERDE = "#237E45"
const PRATA = "#BFC8CC"


const SolutionPage = () => (
  <section id="services" className="bg-white">
    {/* Banner institucional no topo */}
    <SolutionBanner />

    <div className="w-full max-w-6xl mx-auto px-4 py-24">
      {/* Grid de Soluções */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {solutions.map((solution) => {
          const Icon = solution.icon
          return (
            <Card
              key={solution.title}
              className="transition-transform duration-200 hover:scale-[1.025] hover:shadow-lg bg-white border border-[#E6E9EA] shadow-sm"
              style={{
                minHeight: 370,
                borderRadius: 20,
              }}
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Ícone */}
                <div
                  className="flex items-center justify-center w-14 h-14 mb-6 rounded-full"
                  style={{
                    background: PRATA,
                  }}
                >
                  <Icon className="w-8 h-8 text-[#237E45]" />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: VERDE, textTransform: "capitalize" }}
                >
                  {solution.title}
                </h3>
                <p
                  className="text-base text-[#6a7682] mb-4"
                  style={{ minHeight: 62 }}
                >
                  {solution.description}
                </p>
                {/* Features */}
                <ul className="flex flex-col gap-1 mb-4">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-[#6a7682]"
                      style={{ textTransform: "capitalize" }}
                    >
                      <Shield className="w-4 h-4 mr-1 text-[#237E45]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full mt-auto font-bold text-[#237E45] border border-[#237E45] rounded-full py-2 hover:bg-[#237E45]/10 transition"
                  style={{ textTransform: "capitalize" }}
                >
                  <Link to={`/solucoes/${solution.slug}`}>
                    Saiba Mais <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* CTA simples final */}
      <div className="text-center pt-6">
        <div
          className="inline-block px-8 py-8 rounded-2xl"
          style={{ background: VERDE }}
        >
          <h3
            className="text-2xl lg:text-3xl font-extrabold text-white mb-2"
            style={{ textTransform: "capitalize" }}
          >
            Precisa de uma solução personalizada?
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-5">
            Nossa equipe está pronta para entender seu desafio e montar uma
            proposta exclusiva para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="font-bold bg-white text-[#237E45] px-8 py-3 rounded-full hover:bg-[#BFC8CC]/60 hover:text-[#237E45] border-none"
              style={{ textTransform: "capitalize" }}
            >
              Falar com Especialista
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#237E45] text-[#237E45] px-8 py-3 rounded-full transition font-bold
      hover:bg-[#BFC8CC]/30 hover:text-[#237E45] hover:border-[#237E45]"
              style={{ borderWidth: 2, textTransform: "capitalize" }}
            >
              Ver Casos de Sucesso
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SolutionPage
