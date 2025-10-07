
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

// Real physiotherapy and home visit images
// Real physiotherapy and home visit images
const physiotherapyImages = [
  'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6', // Home physiotherapy session
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d', // Physical therapy treatment
  'https://images.unsplash.com/photo-1559757175-5700dde675bc', // Manual therapy session
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d', // Physiotherapy treatment room
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef', // Physical therapy exercises
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b', // Rehabilitation exercises
  'https://images.unsplash.com/photo-1557825835-70d97c4aa01d', // Stretching exercises
  'https://images.unsplash.com/photo-1607130547030-25f5073abe3b', // Home exercise therapy
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528', // Physiotherapy equipment
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f', // Professional physiotherapist
]
const allImages = physiotherapyImages

const imageCategories = [
  { name: 'All', count: physiotherapyImages.length },
  { name: 'Home Visits', count: 3 },
  { name: 'Manual Therapy', count: 3 },
  { name: 'Exercises', count: 3 },
  { name: 'Equipment', count: 3 },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const openLightbox = (index) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : allImages.length - 1))
  }

  const goToNext = () => {
    setSelectedImage((prev) => (prev < allImages.length - 1 ? prev + 1 : 0))
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Treatment moments & techniques
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our modern facilities and evidence-based treatment approaches
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {imageCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveFilter(category.name)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === category.name
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-emerald-300 hover:text-emerald-700'
              }`}
            >
              {category.name}
              <span className={`ml-2 text-xs ${activeFilter === category.name ? 'text-emerald-100' : 'text-slate-500'}`}>
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={src} 
                  alt={`Physiotherapy treatment ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800&auto=format&fit=crop'
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold text-sm">Treatment Session</p>
                        <p className="text-emerald-300 text-xs mt-1">Professional Care</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <ZoomIn className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-emerald-500/10 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-emerald-600 text-emerald-700 font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all">
            View Full Gallery
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold z-10">
              {selectedImage + 1} / {allImages.length}
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={allImages[selectedImage]}
              alt={`Physiotherapy treatment ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}