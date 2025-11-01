import React from "react";
import Hero2 from "../../assets/img/hero2.png";
import { useNavigate } from "react-router-dom";
import CounterStats from "./CounterStats";

const AboutCompany = () => {
  const navigate = useNavigate();
  return (
    <>
      
      <section className="bg-[#E0F1DF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20 py-20 items-center">
          <div className="flex justify-center py-6">
            <img
              src={Hero2}
              alt="About Company"
              className="max-w-full h-auto rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[#095a59] font-semibold tracking-wide uppercase">
              About Company
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
              More Than a Website: Your Partner in Success
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Building a business requires a strong mindset, clear strategies, and a supportive community. We provide all three, along with engaging webinars, to empower you to turn your vision into a reality.
            </p>
            <div>
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#095a59] hover:bg-[#064847] transition-all duration-300 text-white rounded-full px-8 py-4 text-lg font-medium shadow-md"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default AboutCompany;
