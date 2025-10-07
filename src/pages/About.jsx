


import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Award, Heart, Target, Users, CheckCircle, Phone, MapPin, Clock, Star, TrendingUp, Shield } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Personalized Programs',
    description: 'Strength and mobility programs tailored to your specific goals and condition',
    color: 'emerald',
  },
  {
    icon: Heart,
    title: 'Hands-On Therapy',
    description: 'Manual therapy techniques for effective pain relief and improved movement',
    color: 'teal',
  },
  {
    icon: Shield,
    title: 'Post-Surgery Care',
    description: 'Expert guidance for safe, confident recovery after surgical procedures',
    color: 'cyan',
  },
]

const stats = [
  { icon: Users, value: '500+', label: 'Patients Treated', color: 'text-emerald-600' },
  { icon: Award, value: '14+', label: 'Years Experience', color: 'text-teal-600' },
  { icon: Star, value: '4.9/5', label: 'Patient Rating', color: 'text-yellow-500' },
  { icon: TrendingUp, value: '95%', label: 'Success Rate', color: 'text-cyan-600' },
]

const certifications = [
  'MPT (Master of Physiotherapy)',
  'BPT (Bachelor of Physiotherapy)',
  'Certified Manual Therapist',
  'Sports Injury Specialist',
]

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      <Helmet>
        <title>About | Physio Abhishek Jain – Home Physiotherapy</title>
        <meta name="description" content="About Physio Abhishek Jain &amp; Preeti Payal – compassionate, evidence-based home physiotherapy care in Raipur." />
      </Helmet>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            About Physio Abhishek Jain
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We are a dedicated home-visit physiotherapy team committed to delivering compassionate, 
            evidence-based care that helps you recover faster and live better.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Story Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Our Story */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Led by <strong className="text-slate-900">Abhishek Jain</strong> and <strong className="text-slate-900">Preeti Payal</strong>, 
                  we bring over 14 years of combined experience in physiotherapy to your doorstep. Our mission is simple: 
                  to provide professional, personalized care in the comfort and convenience of your home.
                </p>
                <p>
                  We believe that healing happens best in familiar surroundings. That's why we've built our practice 
                  around home visits, allowing us to understand your environment and create treatment plans that truly 
                  fit your lifestyle and recovery needs.
                </p>
                <p>
                  From post-surgical rehabilitation to chronic pain management, sports injuries to elderly care, 
                  we combine modern techniques with traditional hands-on therapy to deliver results that matter.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className={`bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-50 p-3 rounded-xl w-fit mb-4`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Certifications & Expertise</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Card */}
            <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8 shadow-xl sticky top-24">
              <h2 className="font-bold text-slate-900 text-xl mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                {/* Phone Numbers */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white hover:shadow-md transition-shadow">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Phone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Abhishek Jain</p>
                      <a 
                        href="tel:9826121186" 
                        className="text-emerald-700 font-bold text-lg hover:text-emerald-800 transition-colors"
                      >
                        98261 21186
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white hover:shadow-md transition-shadow">
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Preeti Payal</p>
                      <a 
                        href="tel:+917008292803" 
                        className="text-teal-700 font-bold text-lg hover:text-teal-800 transition-colors"
                      >
                        +91 70082 92803
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white">
                  <div className="bg-cyan-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Clinic Address</p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      House no. 5, B block<br />
                      Teacher Colony, Kota<br />
                      Raipur 492001, Chhattisgarh
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Working Hours</p>
                    <p className="text-sm text-slate-700">
                      Mon-Sat: 8 AM - 8 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="mt-6 block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-center hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Book Home Visit
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}