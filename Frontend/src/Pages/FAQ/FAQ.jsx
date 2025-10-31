import React, { useState } from 'react'
import Navbar from '../Interface/Navbar'
import Footer from '../Interface/Footer'

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    const data = [
        {
            question: "What is a webinar and how does it work?",
            answer: "A webinar is an online seminar or workshop that allows participants to join from anywhere using an internet connection. It usually includes a presentation, live video, and interactive Q&A sessions."
        },
        {
            question: "What services do you offer?",
            answer: "We offer a range of services including State of Art Training, Weekly Professional Development, Ongoing Mentorship And Coaching, Business Tools."
        },
        {
            question: "How do I register for a webinar?",
            answer: "You can register via the signup form on our website or through the webinar landing page. Once registered, you'll receive a confirmation email with the event details and a link to join."
        },
        {
            question: "Is the webinar live or pre-recorded?",
            answer: "We host both live and pre-recorded webinars. Live webinars allow for real-time interaction and Q&A, while pre-recorded sessions can be viewed on-demand at your convenience."
        },
        {
            question: "What is your pricing structure?",
            answer: "Our pricing is based on the scope of the project. We offer both fixed-price packages and hourly rates. Please contact us for a detailed quote."
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes, we offer ongoing support and maintenance packages to ensure your website remains up-to-date and secure."
        },
        {
            question: "How long do the webinars last?",
            answer: "Our webinars typically run between 45 minutes to 1 hour, including time for Q&A."
        },
        {
            question: "How can I become a speaker or guest on your webinars?",
            answer: "We’re always open to expert collaborations. Please reach out through our contact form or email us."
        }
    ]
  return (
    <>
        <Navbar />
            <div className='bg-[#066d6d] p-16 shadow-lg grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                <div className='bg-[#E0F1DF]'>
                    <h1 className='text-3xl md:text-5xl font-bold leading-snug text-gray-900 p-10 text-center'>Frequently Asked Questions</h1>
                    <div className='p-10'>
                        {data.map((item, index) => (
                            <div key={index} className='mb-6 border p-2 rounded-lg shadow-md'>
                                <div className='flex flex-row items-center justify-between'>
                                    <h2 className='text-xl font-semibold mb-2 text-black'>{item.question}</h2>
                                    {expandedIndex === index ? <span className='text-black cursor-pointer' onClick={() => setExpandedIndex(null)}>-</span> : <span className='text-black cursor-pointer' onClick={() => toggleExpand(index)}>+</span>}
                                </div>
                                { expandedIndex === index &&
                                 <p className='text-gray-700'>{item.answer}</p>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className='bg-[#E0F1DF]'>
                    <h2 className='text-3xl md:text-5xl font-bold leading-snug text-gray-900 p-10 text-center'>What you will learn?</h2>
                    <div className='p-10'>
                        <ul className='list-disc list-inside text-gray-700'>
                            <li className='mb-2 text-lg'><strong>A Proven Blueprint for Success:</strong> Understand our complete, results-driven framework to build and scale your business.</li>
                            <li className='mb-2 text-lg'><strong>Access to Our Core Services:</strong> Get a clear overview of our professional training, ongoing mentorship, and community support.</li>
                            <li className='mb-2 text-lg'><strong>The Power of Our Systems:</strong> Discover how our tested business tools and strategies eliminate guesswork and fast-track your growth.</li>
                            <li className='mb-2 text-lg'><strong>Confidence to Convert:</strong> Learn how to turn your vision into a profitable reality with the right mindset and expert guidance.</li>
                            <li className='mb-2 text-lg'><strong>Live Q&A:</strong> Get answers to your specific questions about starting and growing your business.</li>
                        </ul>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default FAQ