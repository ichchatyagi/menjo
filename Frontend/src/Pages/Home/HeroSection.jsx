import React from 'react';
import OurVission from '../../assets/img/our-vision-bg.png'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${OurVission})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 p-4 md:p-8 lg:p-12 text-white text-center w-full max-w-md md:max-w-lg mx-auto bg-white/20 backdrop-blur-md rounded-3xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
          Our vision is to exceed your expectations by providing innovative solutions and a steadfast commitment to your success.
        </h2>
        <Link to="/contact" className="inline-block px-6 py-3 mb-4 text-sm font-medium text-white bg-teal-500 rounded-full hover:bg-teal-600 transition duration-300">
          Get In Touch
        </Link>
        <a href="#" className="inline-flex items-center text-sm text-white hover:underline">
          Download Our Best Presentation
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;