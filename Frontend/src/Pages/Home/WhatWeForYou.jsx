import React, {useState} from "react";
import { Briefcase, FileText, Lightbulb, Shield } from "lucide-react";
import Service from '../../assets/img/service-box-thumb.png';
import Service1 from '../../assets/img/service-box-thumb1.png';
import Service2 from '../../assets/img/service-box-thumb2.png';
import Service3 from '../../assets/img/service-box-thumb3.png';


const services = [
  {
    title: "State Of The ART Training",
    img: Service,
    desc: "Our training provides more than just a course—it's a comprehensive blueprint for success. We give you a powerful combination of mindset and proven systems to help you build and scale a profitable business with confidence.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    desc1: "Our training provides more than just a course—it's"
  },
  {
    title: "Weekly Professional Development",
    img: Service1,
    desc: "Stay on the cutting edge with our weekly professional development. We provide fresh insights and actionable strategies every week to keep you motivated and your business growing.",
    icon: <FileText className="w-8 h-8 text-white" />,
    desc1: "Stay on the cutting edge with our weekly professional"
  },
  {
    title: "Ongoing Mentorship and Coaching",
    img: Service2,
    desc: "Get personalized guidance every step of the way. Our ongoing mentorship and coaching provide you with a dedicated partner to navigate challenges, clarify your vision, and accelerate your business growth.",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    desc1: "Get personalized guidance every step of the way."
  },
  {
    title: "Business Tools",
    img: Service3,
    desc: "Access all the essential business tools and resources you need in one place. We provide a curated suite of systems to help you manage, automate, and grow your business with confidence.",
    icon: <Shield className="w-8 h-8 text-white" />,
    desc1: "Access all the essential business tools and resources"
  },
];

const ServicesSection = () => {
  const [learnMore, setLearnMore] = useState(-1);
  return (
    <section className="bg-[#066d6d] relative overflow-hidden py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-white/80 uppercase tracking-wide mb-2">
          What We For You
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
          We Can Inspire And Offer <br /> Different Service
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#066d6d]/90 via-[#066d6d]/60 to-transparent flex flex-col justify-end items-center p-6">
                <div className="mb-4 bg-white/20 p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white text-left leading-tight">
                  {learnMore == index ? service.desc : service.desc1 }
                </p>
                <p 
                  onClick={() =>  {
                      if(learnMore == index){
                        setLearnMore(-1)
                      } else {
                        setLearnMore(index)
                      }
                    }
                  }
                  className="text-blue-400 hover:text-blue-500 hover:cursor-pointer">{ learnMore == index ? 'See less..' : 'Learn more..'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
