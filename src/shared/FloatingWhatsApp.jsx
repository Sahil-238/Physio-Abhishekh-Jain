import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, ChevronRight } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const number = '919826121186'
  const text = encodeURIComponent('Hello, I would like to book a physiotherapy home visit.')

  // Show button after user scrolls a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-expand greeting after 3 seconds if not interacted
  useEffect(() => {
    if (isVisible && !hasInteracted) {
      const timer = setTimeout(() => {
        setIsExpanded(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, hasInteracted])

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
    setHasInteracted(true)
  }

  const handleWhatsAppClick = () => {
    setHasInteracted(true)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Expanded Chat Card */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ type: 'spring', damping: 20 }}
                className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-w-xs"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold">Physio Abhishek Jain</p>
                    <p className="text-emerald-100 text-xs">Typically replies instantly</p>
                  </div>
                  <button
                    onClick={handleExpand}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Message Body */}
                <div className="p-4 bg-slate-50">
                  <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm mb-3">
                    <p className="text-sm text-slate-700 mb-2">
                      👋 Hi there! Need help with pain management or physiotherapy?
                    </p>
                    <p className="text-xs text-slate-500">
                      We offer home visits across Raipur. How can we assist you today?
                    </p>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="space-y-2">
                    <a
                      href={`https://wa.me/${number}?text=${text}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleWhatsAppClick}
                      className="flex items-center justify-between gap-2 px-4 py-3 bg-white hover:bg-emerald-50 rounded-lg border border-slate-200 hover:border-emerald-300 transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium text-slate-700">Book Home Visit</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </a>

                    <a
                      href={`https://wa.me/${number}?text=${encodeURIComponent('I need help with pain management')}`}
                      target="_blank"
                      rel="noreferrer"
                      onClick={handleWhatsAppClick}
                      className="flex items-center justify-between gap-2 px-4 py-3 bg-white hover:bg-emerald-50 rounded-lg border border-slate-200 hover:border-emerald-300 transition-all group"
                    >
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium text-slate-700">Ask a Question</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 bg-white border-t border-slate-100">
                  <a
                    href="tel:9826121186"
                    className="flex items-center justify-center gap-2 text-xs text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    Or call us: 98261 21186
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 15 }}
            className="relative"
          >
            {/* Pulsing ring animation */}
            <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse opacity-50"></div>

            {/* Main button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExpand}
              className="relative w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl flex items-center justify-center group overflow-hidden"
              aria-label="Chat on WhatsApp"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Icon */}
              <motion.div
                animate={{ rotate: isExpanded ? 0 : [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                className="relative z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.44 0 .06 5.38.06 12c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.6A11.98 11.98 0 0 0 12.06 24C18.68 24 24.06 18.62 24.06 12c0-3.2-1.25-6.2-3.54-8.52ZM12.06 22a9.97 9.97 0 0 1-5.08-1.4l-.36-.21-3.68.95.98-3.58-.23-.37A9.95 9.95 0 1 1 22.06 12 10.04 10.04 0 0 1 12.06 22Zm5.49-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.48 1.08 2.92 1.23 3.12.15.2 2.14 3.27 5.18 4.47.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.03-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </motion.div>

              {/* Notification badge */}
              {!hasInteracted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">1</span>
                </motion.div>
              )}
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: 0.5 }}
                  className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg pointer-events-none"
                >
                  Need help? Chat with us!
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}