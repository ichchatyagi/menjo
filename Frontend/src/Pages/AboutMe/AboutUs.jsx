import React from 'react'
import Navbar from '../Interface/Navbar'
import Footer from '../Interface/Footer'
import AboutCompany from '../Home/AboutCompany'
import AboutMe from './AboutMe'

const AboutUs = () => {
  return (
    <>
        <Navbar />
        <div>
          <AboutCompany />
          <AboutMe />
        </div>
        <Footer />
    </>
  )
}

export default AboutUs