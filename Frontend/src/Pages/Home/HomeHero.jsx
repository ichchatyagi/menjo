import React from 'react'
import Hero from '../../assets/img/hero-bg.png'
import Group from '../../assets/img/Group-7.png'
import Shape from '../../assets/img/hero-shape.png'


const HomeHero = () => {
  return (
    <div className=''>
        <img className='w-full absolute' src={Hero} alt="Hero" />
        <div className='grid grid-cols-2 gap-4'>
            <div className='relative top-0 py-32'>
              <div className='flex flex-row'>
                <img src={Shape} alt="" />
                <div>
                  <p className='text-lg mt-4 font-semibold text-green-800'>YOUR VISION. YOUR TIME. YOUR BUSINESS.</p>
                  <h1 className='text-4xl mt-4 font-semibold leading-normal'>Ready to build a business on your terms?</h1>
                  <p className='text-lg mt-4 text-gray-700'>This is your journey. We'll give you the tools to build a life and a business that are truly your own.</p>
                </div>
              </div>
            </div>
            <div className='relative top-10 px-20'>
                <img src={Group} alt="Hero1" />
            </div>
        </div>
    </div>
  )
}

export default HomeHero