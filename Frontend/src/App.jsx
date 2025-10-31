import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Pricing from './Pages/Pricing/Pricing';
import AboutUs from './Pages/AboutMe/AboutUs';
import CTA from './Pages/CTA/CTA';
import FAQ from './Pages/FAQ/FAQ';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Admin/Login';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AddSeminar from './Pages/Admin/AddSeminar';
import ManageSeminars from './Pages/Admin/ManageSeminar';
import AddSeminarDateTime from './Pages/Admin/AddSeminarDateTime';
import ViewContacts from './Pages/Admin/ViewContacts';
import AdminBookings from './Pages/Admin/AdminBookings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/cta' element={<CTA />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/admin/addseminar' element={<AddSeminar/>} />
        <Route path='/admin/manageseminar' element={<ManageSeminars/>} />
        <Route path='/admin/seminarslots' element={<AddSeminarDateTime/>} />
        <Route path='/admin/contacts' element={<ViewContacts/>} />
        <Route path='/admin/bookings' element={<AdminBookings/>} />
      </Routes>
    </ BrowserRouter>
  )
}

export default App