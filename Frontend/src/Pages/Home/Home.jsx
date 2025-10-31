import React from 'react'
import Navbar from '../Interface/Navbar'
import Footer from '../Interface/Footer'
import HomeHero from './HomeHero'
import AboutCompany from './AboutCompany'
import WhatWeForYou from './WhatWeForYou'
import PricePlan from './PricePlan'
import HeroSection from './HeroSection'

const Home = () => {
  return (
    <>
        <Navbar />
        <div>
            <HomeHero />
            <AboutCompany />
            <WhatWeForYou />
            <PricePlan />
            <HeroSection />
        </div>
        <Footer/>
    </>
  )
}

export default Home