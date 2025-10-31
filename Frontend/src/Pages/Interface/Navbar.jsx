import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigative = useNavigate();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'CTA', to: '/cta' },
    // { name: 'Portfolio', to: '/portfolio' },
    // { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'FAQ', to: '/faq' },
  ];

  return (
    <nav className='py-3'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-green-200/40 rounded-tl-full rounded-br-full shadow-lg">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <img className="w-[100px] sm:w-[100px]" src={Logo} alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
             onClick={() => navigative('/contact')}
             className="bg-[#095a59] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#064946] transition-colors">
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6 text-gray-700" />
              ) : (
                <HiMenu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full mt-2 bg-[#095a59] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#064946] transition-colors">
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
