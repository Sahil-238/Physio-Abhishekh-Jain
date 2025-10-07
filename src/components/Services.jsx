

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Activity, Stethoscope, Brain, Zap, Heart, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react'

const services = [
  {
    title: 'Home Visits',
    description: 'One-on-one sessions at your home with assessment, manual therapy, and guided exercise.',
    icon: Home,
    color: 'emerald',
    features: ['Personalized care', 'No travel needed', 'Flexible scheduling'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Pain Management',
    description: 'Evidence-based techniques to relieve back, neck, knee, and shoulder pain.',
    icon: Activity,
    color: 'blue',
    features: ['Chronic pain relief', 'Manual therapy', 'Exercise programs'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Post-op Rehabilitation',
    description: 'Safe strengthening, gait training, and mobility restoration after surgery.',
    icon: Stethoscope,
    color: 'purple',
    features: ['Faster recovery', 'Mobility training', 'Strength building'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Neurological Rehab',
    description: 'Stroke, Parkinsons, and nerve injury rehab to regain independence.',
    icon: Brain,
    color: 'violet',
    features: ['Stroke recovery', 'Balance training', 'Coordination work'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Sports Physio',
    description: 'Return-to-sport programs, taping, and load management for athletes.',
    icon: Zap,
    color: 'orange',
    features: ['Injury prevention', 'Performance boost', 'Quick recovery'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Elderly Care',
    description: 'Balance training, fall prevention, and gentle mobility for seniors.',
    icon: Heart,
    color: 'rose',
    features: ['Fall prevention', 'Gentle exercises', 'Independence focus'],
    gradient: 'from-rose-500 to-pink-500',
  },
]

const stats = [
  { icon: Users, label: 'Patients Treated', value: '500+' },
  { icon: Clock, label: 'Years Experience', value: '14+' },
  { icon: CheckCircle, label: 'Success Rate', value: '95%' },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Focused care for faster recovery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy services tailored to your unique needs and recovery goals
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 rounded-2xl border border-emerald-200 bg-white p-6 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-emerald-100 p-3 rounded-xl mb-3">
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon with gradient background */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Not sure which service you need?
            </h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
              Book a free consultation call and we'll help you choose the right treatment plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all shadow-xl"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:9826121186"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 border-2 border-white/20 transform hover:scale-105 transition-all"
              >
                Call 98261 21186
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}