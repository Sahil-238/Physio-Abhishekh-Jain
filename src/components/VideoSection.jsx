

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize, PlayCircle, CheckCircle } from 'lucide-react'

const videoHighlights = [
  { icon: CheckCircle, text: 'Evidence-based techniques', color: 'text-emerald-600' },
  { icon: CheckCircle, text: 'Personalized treatment plans', color: 'text-teal-600' },
  { icon: CheckCircle, text: 'Professional equipment', color: 'text-cyan-600' },
  { icon: CheckCircle, text: 'Comfortable home setting', color: 'text-emerald-600' },
]

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)

  const handlePlayClick = () => {
    setIsPlaying(true)
    setShowOverlay(false)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-4 backdrop-blur-sm border border-emerald-500/30">
            Watch Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            A quick look at our approach
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            See how we combine modern techniques with compassionate care to deliver results
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl bg-black group">
              {/* Video iframe */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/fNhxePvbcO4?start=10&rel=0&modestbranding=1${isPlaying ? '&autoplay=1' : ''}&mute=0&loop=1&playlist=fNhxePvbcO4`}
                title="Physiotherapy Training Session"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
                      
              {/* Custom overlay with play button */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-slate-900/90 to-teal-900/90 flex items-center justify-center cursor-pointer backdrop-blur-sm"
                    onClick={handlePlayClick}
                  >
                    {/* Decorative rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border-2 border-emerald-500/20 animate-ping" />
                      <div className="absolute w-32 h-32 rounded-full border-2 border-emerald-500/30" />
                    </div>

                    {/* Play button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 group/btn"
                    >
                      <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity" />
                      <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full p-8 shadow-2xl">
                        <Play className="w-12 h-12 text-white fill-white translate-x-1" />
                      </div>
                    </motion.button>

                    {/* Text overlay */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                      >
                        <h3 className="text-xl font-bold text-white mb-2">See Our Treatment Process</h3>
                        <p className="text-emerald-200 text-sm">Watch how we help patients recover and regain mobility</p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Corner badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                LIVE DEMO
              </div>
            </div>
          </motion.div>

          {/* Video Highlights */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-emerald-500/30 bg-white/5 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold text-white mb-6">What You'll See</h3>
              <div className="space-y-4">
                {videoHighlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <highlight.icon className={`w-5 h-5 ${highlight.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-slate-200">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 p-4 text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-xs text-emerald-300">Success Stories</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-500/30 p-4 text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">14+</div>
                <div className="text-xs text-teal-300">Years Experience</div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-center hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/25"
            >
              Book Your Session Now
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom feature cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Expert Therapists',
              description: 'Certified professionals with 14+ years experience',
              icon: '👨‍⚕️',
            },
            {
              title: 'Modern Equipment',
              description: 'Latest technology for effective treatment',
              icon: '🏥',
            },
            {
              title: 'Proven Results',
              description: '95% success rate in patient recovery',
              icon: '📈',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
              className="rounded-2xl border border-emerald-500/30 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-slate-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}