import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import SolutionPage from "./pages/SolutionsPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SolutionDetailPage from "./pages/DetailPage"
import WhatsAppButton from "./components/WhatsappButton"
import ProposePage from "./pages/PropostaPage"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solucoes" element={<SolutionPage />} />
          <Route path="/proposta" element={<ProposePage />} />
          {/* <Route path="/solucoes/:slug" element={<SolutionDetailPage />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
