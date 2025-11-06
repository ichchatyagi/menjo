import React, { useState } from 'react'
import Navbar from '../Interface/Navbar'
import Footer from '../Interface/Footer'
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'react-toastify';
import { Jelly } from 'ldrs/react'
import 'ldrs/react/Jelly.css'

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [contactPayload, setContactPayload] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  console.log(contactPayload, "Contact Payload")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const URL = "http://localhost:8000/api/contact";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Something went wrong!");
        return;
      }

      toast.success("Form submitted successfully!");
      console.log("Response:", data);
      setLoading(false);

      // Reset form after success
      setContactPayload({ name: "", email: "", phone: "", subject: "", message: "" });

    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Server error, please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Contact Info */}
        <div className='p-20 grid grid-cols-3 gap-10 justify-between'>
          <div className='flex flex-col gap-4 justify-center items-center shadow-xl border-t-2 border-gray-100 p-10 rounded-lg'>
            <span className='border border-black p-5 rounded-full text-white bg-[#066d6d]'><MapPin size={44} /></span>
            <h2>Address</h2>
            <p>Assotech Business Cresterra,<br />Upper Ground floor,Tower 2.<br />Plot No 22,Sector 135, Noida,<br />Uttar Pradesh 201301,India</p>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center shadow-xl border-t-2 border-gray-100 p-10 rounded-lg'>
            <span className='border border-black p-5 rounded-full text-white bg-[#066d6d]'><Phone size={44} /></span>
            <h2>Phone</h2>
            <p>⁠+61 401878539 <br /> +61 452283529</p>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center shadow-xl border-t-2 border-gray-100 p-10 rounded-lg'>
            <span className='border border-black p-5 rounded-full text-white bg-[#066d6d]'><Mail size={44} /></span>
            <h2>Email</h2>
            <p>info@mercyandjohn.co.in</p>
          </div>
        </div>

        {/* Form */}
        <div className='p-20 bg-[#E0F1DF]'>
          <div className='shadow-xl border-t-2 bg-white border-gray-100 p-10 rounded-lg max-w-4xl mx-auto'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='mb-4 grid grid-cols-2 gap-4'>
                <input 
                  type="text" 
                  placeholder='Your Name' 
                  className='border border-gray-300 p-4 rounded-lg w-[400px]'
                  value={contactPayload.name}
                  onChange={(e) => setContactPayload({ ...contactPayload, name: e.target.value })}
                />
                <input 
                  type="email" 
                  placeholder='Your Email' 
                  className='border border-gray-300 p-4 rounded-lg w-[400px]'
                  value={contactPayload.email}
                  onChange={(e) => setContactPayload({ ...contactPayload, email: e.target.value })}
                />
              </div>
              <div className='mb-4 grid grid-cols-2 gap-4'>
                <input 
                  type="text" 
                  placeholder='Phone Number' 
                  className='border border-gray-300 p-4 rounded-lg w-[400px]'
                  value={contactPayload.phone}
                  onChange={(e) => setContactPayload({ ...contactPayload, phone: e.target.value })}
                />
                <input 
                  type="text" 
                  placeholder='Subject' 
                  className='border border-gray-300 p-4 rounded-lg w-[400px]'
                  value={contactPayload.subject}
                  onChange={(e) => setContactPayload({ ...contactPayload, subject: e.target.value })}
                />
              </div>
              <textarea 
                rows="5" 
                placeholder='Message' 
                className='border border-gray-300 p-4 rounded-lg w-full'
                value={contactPayload.message}
                onChange={(e) => setContactPayload({ ...contactPayload, message: e.target.value })}
              ></textarea>
              <button 
                type="submit"
                className='py-4 px-8 bg-[#095a59] text-white font-semibold rounded-full hover:bg-[#064847] transition'
              >
                {loading ? <Jelly size="40" speed="0.9" color="black" /> : 'Request Call Back'}
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div>
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?q=Assotech%20Business%20Cresterra%2CUpper%20Ground%20floor%20%2C%20Tower%202.Plot%20No%2022%2CSector%20135%2C%20Noida%2C%20Uttar%20Pradesh%20201301%2CIndia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
