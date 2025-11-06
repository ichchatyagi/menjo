import React from 'react'
import Hero from '../../assets/img/hero-bg.png'
import Group from '../../assets/img/Group-7.png'
import Shape from '../../assets/img/hero-shape.png'


const HomeHero = () => {
  return (
    <div className='relative'>
        <img className='w-full absolute inset-0 h-full object-cover' src={Hero} alt="Hero" />
        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
            <div className='py-12 md:py-32 px-4 md:px-8 text-center md:text-left'>
              <div className='flex flex-col md:flex-row items-center'>
                <img src={Shape} alt="" className='mr-0 md:mr-4 mb-4 md:mb-0' />
                <div>
                  <p className='text-lg font-semibold text-green-800'>YOUR VISION. YOUR TIME. YOUR BUSINESS.</p>
                  <h1 className='text-4xl mt-4 font-semibold leading-normal'>Ready to build a business on your terms?</h1>
                  <p className='text-lg mt-4 text-gray-700'>This is your journey. We'll give you the tools to build a life and a business that are truly your own.</p>
                </div>
              </div>
            </div>
            <div className='px-4 md:px-20 mt-8 md:mt-0'>
                <img src={Group} alt="Hero1" className='max-w-full h-auto' />
            </div>
        </div>
    </div>
  )
}

export default HomeHero