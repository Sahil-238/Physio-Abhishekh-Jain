import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import FloatingWhatsApp from '../shared/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}


