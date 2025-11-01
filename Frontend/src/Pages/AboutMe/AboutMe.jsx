import React from 'react'
import John from '../../assets/img/Johnson_Thomas.webp'


const AboutMe = () => {
  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center'>
            <img src={John} className='max-w-[400px] mx-auto border-x-8 border-[#095a59]' alt="" />
            <div className='flex flex-col gap-6'>
                <span className='bg-[#095a59] w-12 rounded-e-full'><span className='bg-[#095a59] w-12 rounded-e-full'></span></span>
                <p className='text-[#095a59] font-semibold tracking-wide uppercase'>About Me</p>
                <h1 className='text-3xl md:text-5xl font-bold leading-snug text-gray-900'>Hi! I'm Johnson Thomas</h1>
                <p className='text-gray-700 leading-relaxed'>I was determined to regain control of my schedule, and that’s when I discovered this straight forward training system that transformed my journey. Even with no prior experience in the online space, our comprehensive systems allowed me to navigate the process smoothly and create the life I envisioned for myself and my family.</p>
            </div>
             <div className="hero relative justify-end">
          <video
            className="top-0 left-0 lg:w-[23vw] lg:h-[50vh] object-cover mx-auto border-x-8 border-[#095a59]"
            src="/video.mp4"
            controls
          />
        </div>
        </div>
       
    </div>
    
  )
}

export default AboutMe