import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TravelTours from './pages/TravelTours'
import GlobalOpportunities from './pages/GlobalOpportunities'
import BusinessServices from './pages/BusinessServices'
import About from './pages/About'
import Contact from './pages/Contact'
import ConsultingSupport from './pages/ConsultingSupport'
import RealEstate from './pages/RealEstate'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/travel-tours" element={<TravelTours />} />
        <Route path="/global-opportunities" element={<GlobalOpportunities />} />
        <Route path="/business-services" element={<BusinessServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consulting-support" element={<ConsultingSupport />} />
        <Route path="/real-estate" element={<RealEstate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
