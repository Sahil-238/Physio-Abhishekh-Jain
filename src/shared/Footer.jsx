

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Heart, Facebook, Instagram, Linkedin, ArrowUp, MessageCircle } from 'lucide-react'

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#doctors' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'Home Visits',
  'Pain Management',
  'Post-op Rehabilitation',
  'Neurological Rehab',
  'Sports Physio',
  'Elderly Care',
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Physio Abhishek Jain</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Professional physiotherapy care delivered to your home. Expert treatment for faster recovery and better health.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-500 rounded-full group-hover:w-2 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-500 rounded-full group-hover:w-2 transition-all"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></span>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-emerald-500/20 p-2 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-sm">
                  <p className="text-slate-400 mb-1">Abhishek Jain</p>
                  <a href="tel:9826121186" className="text-white hover:text-emerald-400 transition-colors font-semibold">
                    98261 21186
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-teal-500/20 p-2 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                  <Phone className="w-4 h-4 text-teal-400" />
                </div>
                <div className="text-sm">
                  <p className="text-slate-400 mb-1">Preeti Payal</p>
                  <a href="tel:+917008292803" className="text-white hover:text-emerald-400 transition-colors font-semibold">
                    +91 70082 92803
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-cyan-500/20 p-2 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-sm text-slate-300">
                  House no. 5, B block<br />
                  Teacher Colony, Kota<br />
                  Raipur 492001, Chhattisgarh
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="bg-purple-500/20 p-2 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Clock className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-sm text-slate-300">
                  Mon-Sat: 8:00 AM – 8:00 PM<br />
                  Sunday: By Appointment
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pb-12 border-t border-white/10 pt-12"
        >
          <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Start Your Recovery?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Book a home visit today and experience professional physiotherapy care in the comfort of your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all shadow-lg"
              >
                Book Appointment
              </a>
              <a
                href="https://wa.me/919826121186"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold hover:bg-white/20 transform hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-400 text-center md:text-left">
              <p>© {new Date().getFullYear()} Physio Abhishek Jain. All rights reserved.</p>
              <p className="mt-1">Professional Physiotherapy Care • Raipur, Chhattisgarh</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-500">Built with React + Tailwind</span>
              <button
                onClick={scrollToTop}
                className="bg-emerald-500 hover:bg-emerald-600 p-3 rounded-full transition-colors shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
    </footer>
  )
}