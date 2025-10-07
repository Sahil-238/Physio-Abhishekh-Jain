import ContactForm from '../components/ContactForm'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Physio Abhishek Jain – Book a Home Visit</title>
        <meta name="description" content="Contact Abhishek Jain &amp; Preeti Payal to book a home physiotherapy visit in Raipur." />
      </Helmet>
      <ContactForm />
    </>
  )
}


