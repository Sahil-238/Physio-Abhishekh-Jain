

import { motion } from 'framer-motion'
import { Phone, MapPin, CheckCircle, Award, Users, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal-200/30 blur-3xl"
        />
      </div>

      <div className="container-responsive py-20 md:py-32 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold mb-6"
          >
            <Award className="w-4 h-4" />
            Certified Professional Care
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-tight"
          >
            Physiotherapy at your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              home in Raipur
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Abhishek Jain & Preeti Payal provide personalized home-visit physiotherapy for pain
            management, post-operative rehabilitation, and faster recovery.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
            >
              Book a Home Visit
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="tel:9826121186"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call 98261 21186
            </a>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-2 text-slate-600"
          >
            <MapPin className="w-5 h-5 text-emerald-600" />
            <span className="text-sm">House no. 5, B block, Teacher Colony, Kota Raipur 492001</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 grid grid-cols-3 gap-6"
          >
            {[
              { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Happy Patients' },
              { icon: <Award className="w-6 h-6" />, value: '14+', label: 'Years Combined' },
              { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Availability' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-emerald-600 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Benefits Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            {/* Floating card with glassmorphism */}
            <div className="rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-2xl shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Why choose home physiotherapy?
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  'Personal attention and tailored exercises',
                  'No travel required — maximize comfort and safety',
                  'Faster recovery with consistent guided sessions',
                  'Proven results for pain relief and post-op rehab',
                  'Family involvement in rehabilitation process',
                  'Flexible scheduling to suit your routine'
                ].map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 border-2 border-white flex items-center justify-center text-white font-bold"
                      >
                        {i === 4 ? '+' : ''}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Join 500+ patients</p>
                    <p className="text-xs text-slate-600">who chose home care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 grid grid-cols-3 gap-2 opacity-30">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-emerald-500" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,48L80,45.3C160,43,320,37,480,37.3C640,37,800,43,960,42.7C1120,43,1280,37,1360,34.7L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  )
}