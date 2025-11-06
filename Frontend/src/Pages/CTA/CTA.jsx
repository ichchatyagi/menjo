import React, { useState, useEffect } from 'react'
import Navbar from '../Interface/Navbar'
import Footer from '../Interface/Footer'
import { MdEventAvailable } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import BookSeminar from './BookSeminar';

const CTA = () => {
    const navigate = useNavigate();
    const [meet , setMeet] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getSeminarData = async () => {
        const URL = "https://menjo-gm0f.onrender.com/api/seminars";

        try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Failed to fetch seminars");
        }

        setData(result);
        } catch (err) {
        console.error("Error fetching seminars:", err);
        alert("Could not fetch seminars");
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        getSeminarData();
    }, []);

  return (
    <>
        <Navbar />
        <div className='flex flex-col relative overflow-hidden p-4 md:p-16'>
            {data && data.map((item, index) => (
                <div key={index} className='flex flex-col md:flex-row shadow-lg bg-[#066d6d] mb-2 rounded-lg text-white py-8 md:py-16 px-4 md:px-6 lg:px-12 text-center'>
                    <img src={`https://menjo-gm0f.onrender.com${item.cover_image}`} className='bg-white/50 w-full md:w-96 h-auto md:h-96 mr-0 md:mr-2 border border-[#E0F1DF] p-2 object-cover rounded-lg' alt="" />
                    <div className='text-left bg-[#E0F1DF] p-4 md:p-9 text-black rounded-lg mt-4 md:mt-0'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-4'>{item.title}</h2>
                        {item.schedules && (
                                <div className='mb-4'>
                                    <h3 className='text-xl font-semibold mb-2'>Upcoming Dates:</h3>
                                    <div className='list-disc list-inside'>
                                        {item.schedules.map((date, idx) => (
                                            <div className='flex flex-row items-center mb-1' key={idx}>
                                                <span className={`${date.color} mr-2`}><MdEventAvailable /></span>
                                                <span key={idx}>{date.date}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        <p className='max-w-2xl mx-auto mb-8'>{item.description}</p>
                        <button
                            onClick={() => navigate('/contact')} 
                            className='py-4 px-8 bg-white text-[#066d6d] font-semibold rounded-full hover:bg-gray-200 transition'>
                                Get In Touch
                        </button>
                        <button
                            onClick={() => setMeet(!meet)}
                            className='py-4 px-8 ml-4 bg-white text-[#066d6d] font-semibold rounded-full hover:bg-gray-200 transition mt-4'>
                            Schedule a Meeting
                        </button>
                    </div>
                </div>
            ))}
        </div>
        {meet && (
            <BookSeminar setMeet={setMeet}/>
        )}
        <Footer />
    </>
  )
}

export default CTA