

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rohit Kumar',
    age: 45,
    condition: 'Knee Surgery Recovery',
    text: 'After knee surgery, I was worried about recovery. The home sessions were incredibly convenient and effective. Within 6 weeks, I was walking confidently again!',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Rohit+Kumar&background=10b981&color=fff&size=128'
  },
  {
    name: 'Anita Patel',
    age: 38,
    condition: 'Chronic Neck Pain',
    text: 'Years of desk work gave me terrible neck pain. The guided exercises and manual therapy reduced my pain drastically. I can work comfortably now!',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Anita+Patel&background=0891b2&color=fff&size=128'
  },
  {
    name: 'S. Verma',
    age: 62,
    condition: 'Lower Back Pain',
    text: 'Professional, punctual, and caring. My chronic back pain is finally under control after just 3 months of regular home visits. Highly recommended!',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=S+Verma&background=059669&color=fff&size=128'
  },
  {
    name: 'Priya Sharma',
    age: 52,
    condition: 'Post-Stroke Recovery',
    text: 'The neurological rehabilitation after my stroke was life-changing. Patient, understanding, and results-oriented approach helped me regain independence.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=14b8a6&color=fff&size=128'
  },
  {
    name: 'Rajesh Singh',
    age: 29,
    condition: 'Sports Injury',
    text: 'Injured during cricket. The sports physio program got me back on the field in record time. Excellent knowledge of sports rehabilitation!',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Rajesh+Singh&background=0d9488&color=fff&size=128'
  },
  {
    name: 'Mrs. Gupta',
    age: 68,
    condition: 'Balance & Mobility',
    text: 'At my age, I was afraid of falling. The elderly care program improved my balance and confidence. I feel much more stable now.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Mrs+Gupta&background=10b981&color=fff&size=128'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Patients who chose home care
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from real people who transformed their lives with our physiotherapy
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl border border-emerald-200/50 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-emerald-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full ring-2 ring-emerald-200"
                />
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.age} years • {testimonial.condition}</p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-100 to-transparent rounded-tl-full opacity-50" />
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-3xl border border-emerald-200 bg-white p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Happy Patients', color: 'text-emerald-600' },
              { value: '4.9/5', label: 'Average Rating', color: 'text-teal-600' },
              { value: '95%', label: 'Success Rate', color: 'text-cyan-600' },
              { value: '14+', label: 'Years Experience', color: 'text-emerald-600' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
              >
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-700 mb-6">
            Ready to start your recovery journey?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all shadow-xl"
          >
            Book Your Home Visit Today
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}