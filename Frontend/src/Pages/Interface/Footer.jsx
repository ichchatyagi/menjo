import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#043A37] text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6 lg:px-12 py-16 border-b border-gray-600/40">
        {/* Logo + Description + Subscribe */}
        <div className="space-y-6">
          <h2 className="flex items-center gap-2 text-white text-2xl font-bold">
            <img src={logo} className="w-16" alt="Me&Jo" />
          </h2>
          <p className="text-sm leading-relaxed">
            Accelerate your Business Success with Me&Jo. We provide simple, effective and transformative business growth.
          </p>

          {/* Subscribe */}
          <div className="flex items-center border-b border-gray-500 pb-2">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-400"
            />
            <button className="ml-2 bg-[#0f6e66] hover:bg-[#0d5952] transition-all text-white px-4 py-2 rounded-full text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to='/about' className="hover:text-white">About</Link></li>
            <li><Link to='/contact' className="hover:text-white">Contact</Link></li>
            <li><Link to='/services' className="hover:text-white">Services</Link></li>
            <li><Link to='/cta' className="hover:text-white">CTA</Link></li>
            <li><Link to='/faq' className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-white font-semibold mb-6">Services</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">State of the Art Training</a></li>
            <li><a href="#" className="hover:text-white">Weekly Professional Development</a></li>
            <li><a href="#" className="hover:text-white">Ongoing Mentorship And Coaching</a></li>
            <li><a href="#" className="hover:text-white">Business Tools</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0f6e66]" />
              <p>
                Our address: <br />
                4 Dampier Ct, Endeavour Hills VIC 3802.
              </p>
            </li>
            <li className="flex items-center gap-3 border-t border-gray-600/40 pt-4">
              <Phone className="w-5 h-5 text-[#0f6e66]" />
               ⁠+61 401878539
               +61 452283529
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#0f6e66]" />
              <a href="mailto:mercyandjohn@mercyandjohn.com" className="hover:text-white">mercyandjohn@mercyandjohn.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 py-6 text-sm text-gray-400">
        <p>
          Copyright © 2025 ME&Jo. Designed & Developed by{" "}
          <span className="text-white">Nexstar</span>
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.facebook.com/share/1D9Fyybm6W/?mibextid=wwXIfr" className="hover:text-white">FACEBOOK</a>
          <a href="https://www.instagram.com/mercyandjohn?igsh=dWx5MWhzanBpZzBs" className="hover:text-white">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
