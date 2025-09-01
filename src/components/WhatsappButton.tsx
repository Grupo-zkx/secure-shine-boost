import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"


const WHATSAPP_NUMBER = "5521973626151" // Coloque seu número completo com código do país

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed bottom-16 right-6 z-50 w-16 h-16 bg-green-600 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
      aria-label="Fale conosco via WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </motion.a>
  )
}
