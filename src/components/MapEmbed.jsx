


import { motion } from 'framer-motion'
import { MapPin, Navigation, Phone, Clock, ExternalLink, Car, Bus, Landmark } from 'lucide-react'

export default function MapEmbed() {
  return (
    <section id="map" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
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
            Visit Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Find us in Raipur
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conveniently located in Teacher Colony, Kota. Easy to reach by car or public transport.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-200 shadow-2xl group">
              {/* Map Overlay Header */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-900/80 to-transparent p-6 z-10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-500 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Our Clinic</h3>
                      <p className="text-emerald-200 text-sm">Teacher Colony, Kota</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=House+no.+5,+B+block,+Teacher+Colony,+Kota+Raipur+492001"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Map iframe */}
              <iframe
                title="Clinic Location Map"
                src="https://www.google.com/maps?q=House%20no.%205,%20B%20block,%20Teacher%20Colony,%20Kota%20Raipur%20492001&output=embed"
                className="w-full h-[500px] lg:h-[600px]"
                loading="lazy"
                style={{ filter: 'hue-rotate(330deg) saturate(1.1)' }}
              />

              {/* Get Directions Button - Floating */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                <a
                  href="https://maps.google.com/?q=House+no.+5,+B+block,+Teacher+Colony,+Kota+Raipur+492001"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 shadow-2xl transform hover:scale-105 transition-all"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location Info Cards */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    House no. 5, B block<br />
                    Teacher Colony, Kota<br />
                    Raipur 492001, Chhattisgarh
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">Working Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Monday - Saturday</span>
                      <span className="font-semibold text-emerald-700">8 AM - 8 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-semibold text-amber-600">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-600 p-6 shadow-xl text-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1 text-lg">Need Directions?</h3>
                  <p className="text-emerald-100 text-sm">Call us for guidance</p>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href="tel:9826121186"
                  className="block w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 text-center font-semibold transition-colors"
                >
                  98261 21186
                </a>
                <a
                  href="tel:+917008292803"
                  className="block w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 text-center font-semibold transition-colors"
                >
                  +91 70082 92803
                </a>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-100 p-3 rounded-xl">
                  <Landmark className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg">Nearby Landmarks</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                  <Car className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-700">Teacher Colony Main Road</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                  <Bus className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-700">Easy access via public transport</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Can't visit the clinic?</h3>
              <p className="text-slate-300">We offer convenient home visits across Raipur. Book now!</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all shadow-lg whitespace-nowrap"
            >
              Schedule Home Visit
              <Navigation className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}