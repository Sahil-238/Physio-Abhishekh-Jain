

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [error, setError] = useState('')

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setStatus('sending')
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        },
        { publicKey }
      )
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setFormData({ name: '', phone: '', message: '' })
      }, 3000)
    } catch (err) {
      setError('Could not send message. Please try again or call us.')
      setStatus('idle')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Ready to start your recovery?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Book a home visit or reach out to us. We're here to help you heal faster.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-8 bg-white shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
              
              {status === 'sent' ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-8 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">Message Sent!</h4>
                  <p className="text-emerald-700">We'll call you shortly to schedule your home visit.</p>
                </motion.div>
              ) : (
                <div className="grid gap-6">
                  {error && (
                    <div className="rounded-lg border-2 border-amber-400 bg-amber-50 text-amber-800 p-3 text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Tell us about your condition *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all resize-none"
                      placeholder="Describe your pain, injury, or rehabilitation needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:from-emerald-700 hover:to-teal-700 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Quick Contact */}
            <div className="rounded-2xl border border-emerald-200 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Contact Us Directly</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/70 hover:bg-white transition-colors">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Abhishek Jain</p>
                    <a href="tel:9826121186" className="text-emerald-700 font-semibold hover:text-emerald-800 text-lg">
                      98261 21186
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/70 hover:bg-white transition-colors">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Preeti Payal</p>
                    <a href="tel:+917008292803" className="text-emerald-700 font-semibold hover:text-emerald-800 text-lg">
                      +91 70082 92803
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Visit Our Clinic</h4>
                  <p className="text-sm text-slate-600">
                    House no. 5, B block<br />
                    Teacher Colony, Kota<br />
                    Raipur 492001, Chhattisgarh
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=House+no.+5,+B+block,+Teacher+Colony,+Kota+Raipur+492001"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-lg">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Working Hours</h4>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>Monday - Saturday: 8 AM - 8 PM</p>
                    <p>Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white text-center shadow-xl"
        >
          <p className="font-semibold text-lg mb-2">Need immediate assistance?</p>
          <p className="text-emerald-100 mb-4">Call us now for emergency home visits</p>
          <a
            href="tel:9826121186"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call 98261 21186
          </a>
        </motion.div>
      </div>
    </section>
  )
}