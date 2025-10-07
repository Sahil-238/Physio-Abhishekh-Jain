
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Phone, Menu, X, Heart, MapPin, Clock } from 'lucide-react'

const navItems = [
  { to: '#home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '#services', label: 'Services' },
  { to: '#doctors', label: 'Our Team' },
  { to: '#testimonials', label: 'Testimonials' },
  { to: '#gallery', label: 'Gallery' },
  { to: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Highlight active section (only for in-page sections)
      const sections = ['#home', ...navItems.filter((i) => i.to.startsWith('#')).map((item) => item.to)]
      let current = '#home'
      sections.forEach((sectionId) => {
        const el = document.querySelector(sectionId)
        if (el && window.scrollY >= el.offsetTop - (document.querySelector('header')?.offsetHeight || 0) - 10) {
          current = sectionId
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (to) => {
    setOpen(false)

    // Route navigation
    if (!to.startsWith('#')) {
      navigate(to)
      return
    }

    const element = document.querySelector(to)
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setActiveSection(to)
      return
    }

    // If target section isn't on this route, go Home then scroll
    navigate('/')
    setTimeout(() => {
      const target = document.querySelector(to)
      if (!target) return
      const headerHeight = document.querySelector('header')?.offsetHeight || 100
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setActiveSection(to)
    }, 60)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/90 shadow-lg border-b border-emerald-100/50'
          : 'backdrop-blur-md bg-white/70 border-b border-white/40 shadow-sm'
      }`}
    >
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 hidden lg:block">
        <div className="container-responsive flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Teacher Colony, Kota Raipur</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Sat: 8AM - 8PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:9826121186" className="flex items-center gap-2 hover:text-emerald-100 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">98261 21186</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container-responsive py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-xl">
              <Heart className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="leading-tight">
            <p className="font-bold text-slate-900 text-lg">Physio Abhishek Jain</p>
            <p className="text-xs text-slate-600">Home Visits • Pain Management</p>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.to)
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.to
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:9826121186"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#contact')
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-emerald-600 text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all"
          >
            Book Visit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-xl border-2 border-emerald-200 bg-white hover:bg-emerald-50 transition-colors"
        >
          <span className="sr-only">Toggle menu</span>
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-emerald-700" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-emerald-700" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-emerald-100 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container-responsive py-4">
              {/* Mobile Nav Items */}
              <div className="flex flex-col gap-1 mb-4">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.to}
                    href={item.to}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.to)
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.to
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-3 pt-4 border-t border-emerald-100"
              >
                <a
                  href="tel:9826121186"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call 98261 21186
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-emerald-600 text-emerald-700 text-sm font-semibold"
                >
                  Book Home Visit
                </a>
              </motion.div>

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 pt-4 border-t border-emerald-100 text-sm text-slate-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Teacher Colony, Kota Raipur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Mon-Sat: 8:00 AM – 8:00 PM</span>
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
