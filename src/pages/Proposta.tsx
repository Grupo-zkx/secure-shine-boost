import React, { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { solutions } from "@/data/solutions"

type FormData = {
  company: string
  contactName: string
  email: string
  phone: string
  service: string
  message?: string
}

const VERDE = "#237E45"
const PRATA = "#BFC8CC"

export default function ProposePage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: { service: "Transporte de numerário" },
  })

  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error"
    message?: string
  }>({ type: "idle" })

  async function onSubmit(data: FormData) {
    try {
      setStatus({ type: "idle" })
      // Exemplo: enviar para /api/propostas — adapte conforme seu backend
      const res = await fetch("/api/propostas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || "Erro ao enviar pedido")
      }

      setStatus({
        type: "success",
        message:
          "Proposta solicitada com sucesso. Retornaremos em até 3 dias úteis.",
      })
      reset()
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err?.message || "Falha ao enviar. Tente novamente.",
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="max-w-2xl mx-auto py-12"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl p-6 shadow-md border border-[#f0f3f4]"
      >
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#237E45]" /> Solicitar Proposta
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Preencha os dados abaixo e nossa equipe entrará em contato.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex flex-col">
            <span className="text-sm text-slate-600 mb-1">Empresa *</span>
            <input
              {...register("company", { required: "Informe a empresa" })}
              className="px-3 py-2 rounded border border-[#e6eaeb] focus:ring-2 focus:ring-[#237E45]/30"
            />
            {errors.company && (
              <span className="text-xs text-red-600 mt-1">
                {errors.company.message}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-600 mb-1">
              Nome do contato *
            </span>
            <input
              {...register("contactName", {
                required: "Informe o nome de contato",
              })}
              className="px-3 py-2 rounded border border-[#e6eaeb] focus:ring-2 focus:ring-[#237E45]/30"
            />
            {errors.contactName && (
              <span className="text-xs text-red-600 mt-1">
                {errors.contactName.message}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-600 mb-1">E-mail *</span>
            <input
              type="email"
              {...register("email", {
                required: "Informe o e-mail",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "E-mail inválido",
                },
              })}
              className="px-3 py-2 rounded border border-[#e6eaeb] focus:ring-2 focus:ring-[#237E45]/30"
            />
            {errors.email && (
              <span className="text-xs text-red-600 mt-1">
                {errors.email.message}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-600 mb-1">Telefone *</span>
            <input
              {...register("phone", { required: "Informe o telefone" })}
              className="px-3 py-2 rounded border border-[#e6eaeb] focus:ring-2 focus:ring-[#237E45]/30"
              placeholder="(11) 99999-9999"
            />
            {errors.phone && (
              <span className="text-xs text-red-600 mt-1">
                {errors.phone.message}
              </span>
            )}
          </label>
        </div>

        <label className="flex flex-col mt-3">
          <span className="text-sm text-slate-600 mb-1">
            Serviço de interesse *
          </span>
          <select
            {...register("service", { required: "Selecione um serviço" })}
            className="px-3 py-2 rounded border border-[#e6eaeb] focus:ring-2 focus:ring-[#237E45]/30"
          >
            <option value="" disabled selected>Selecione...</option>
            {solutions.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="text-xs text-red-600 mt-1">
              {errors.service.message}
            </span>
          )}
        </label>

        <label className="flex flex-col mt-3">
          <span className="text-sm text-slate-600 mb-1">
            Detalhes / Mensagem
          </span>
          <textarea
            {...register("message")}
            className="px-3 py-2 rounded border border-[#e6eaeb] min-h-[120px] focus:ring-2 focus:ring-[#237E45]/30"
            placeholder="Descreva volume, frequência, locais e observações"
          />
        </label>

        <div className="flex items-center gap-3 mt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#237E45] hover:bg-[#154723] px-4 py-2"
          >
            {isSubmitting ? "Enviando..." : "Solicitar Proposta"}
          </Button>

          {/* <button
            type="button"
            onClick={() => {
              // download mock
              alert("Download de briefing (mock)")
            }}
            className="text-sm px-3 py-2 rounded border border-[#e6eaeb]"
          >
            Baixar briefing
          </button> */}
        </div>

        {status.type === "success" && (
          <p className="mt-3 text-sm text-green-700">{status.message}</p>
        )}
        {status.type === "error" && (
          <p className="mt-3 text-sm text-red-600">{status.message}</p>
        )}

        <p className="mt-3 text-xs text-slate-500">
          Receberemos sua solicitação e retornaremos em até 3 dias úteis.
        </p>
      </form>
    </motion.div>
  )
}
