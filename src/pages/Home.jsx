import Hero from '../components/Hero'
import Services from '../components/Services'
import Doctors from '../components/Doctors'
import VideoSection from '../components/VideoSection'
import ContactForm from '../components/ContactForm'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import MapEmbed from '../components/MapEmbed'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Physio Abhishek Jain – Home Physiotherapy in Raipur</title>
        <meta name="description" content="Home-visit physiotherapy, pain management, and post-op rehab by Abhishek Jain &amp; Preeti Payal in Raipur." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Physio Abhishek Jain",
            "image": "/assets/abhishek.jpg",
            "url": "https://physio-abhishek-jain.example.com/",
            "telephone": "+919826121186",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House no. 5, B block, Teacher Colony",
              "addressLocality": "Raipur",
              "postalCode": "492001",
              "addressCountry": "IN"
            },
            "areaServed": "Raipur",
            "sameAs": []
          }
          `}
        </script>
      </Helmet>
      <Hero />
      <Services />
      <Doctors />
      <Gallery />
      <VideoSection />
      <Testimonials />
      <MapEmbed />
      <ContactForm />
    </>
  )
}


