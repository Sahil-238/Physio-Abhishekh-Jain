
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Award, Briefcase, MapPin, CheckCircle, Star, Users, ChevronRight } from 'lucide-react'

const doctors = [
  {
    name: 'Abhishek Jain',
    role: 'Senior Physiotherapist',
    credentials: 'MPT, BPT',
    specializations: ['Sports Injury', 'Orthopedic Rehab', 'Post-Surgery Care'],
    experience: '14+ Years',
    phone: '9826121186',
    whatsapp: '919826121186',
    img: '/assets/abhishek.jpg',
    patients: '250+',
    rating: '4.9',
  },
  {
    name: 'Preeti Payal',
    role: 'Senior Physiotherapist',
    credentials: 'MPT, BPT',
    specializations: ['Neurological', 'Pediatric Care', 'Women\'s Health'],
    experience: '12+ Years',
    phone: '+917008292803',
    whatsapp: '917008292803',
    img: '/assets/preeti.jpg',
    patients: '280+',
    rating: '4.9',
  },
]

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Meet Our Experts
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Your home-visit physiotherapists
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experienced, certified professionals dedicated to your recovery and wellness
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group rounded-3xl border border-emerald-200/50 bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-5">
                {/* Image Section */}
                <div className="md:col-span-2 relative overflow-hidden">
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="h-full w-full object-cover aspect-[4/5] md:aspect-auto group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { 
                      e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + doctor.name.replace(' ', '+') + '&background=10b981&color=fff&size=400' 
                    }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-slate-900">{doctor.rating}</span>
                    </div>
                  </div>
                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-xs font-semibold">{doctor.experience} Experience</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-3 p-8 flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                    <p className="text-emerald-600 font-semibold mb-2">{doctor.role}</p>
                    <p className="text-sm text-slate-600 flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {doctor.credentials}
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specializations.map((spec, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                    <div className="flex items-center justify-around">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">{doctor.patients}</div>
                        <div className="text-xs text-slate-600 mt-1">Happy Patients</div>
                      </div>
                      <div className="h-12 w-px bg-emerald-200"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-teal-600">{doctor.rating}/5</div>
                        <div className="text-xs text-slate-600 mt-1">Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-6 flex items-start gap-2 text-sm text-slate-600">
                    <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>House no. 5, B block, Teacher Colony, Kota Raipur 492001</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex gap-3">
                    <a 
                      href={`tel:${doctor.phone}`} 
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a 
                      href={`https://wa.me/${doctor.whatsapp}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-emerald-100/50 to-transparent rounded-tl-full pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-3xl border border-emerald-200 bg-white p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Award, value: 'Certified', label: 'Licensed Professionals', color: 'text-emerald-600' },
              { icon: Users, value: '500+', label: 'Patients Treated', color: 'text-teal-600' },
              { icon: Star, value: '4.9/5', label: 'Average Rating', color: 'text-yellow-500' },
              { icon: Briefcase, value: '25+', label: 'Years Combined', color: 'text-cyan-600' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                <div className="text-3xl font-bold text-slate-900 mb-1">{item.value}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-3">Ready to start your recovery journey?</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Book a consultation with our expert physiotherapists and experience personalized care in the comfort of your home
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all shadow-lg"
          >
            Schedule Home Visit
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}