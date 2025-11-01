import React from "react";
import { TrendingUp, Hand } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Business Package",
    price: '$3000 - $18000',
    icon: <Hand className="w-8 h-8 text-[#095a59]" />,
    features: [
      "Patented high-ticket commissions structure",
      "Global opportunity",
      "Retirement planning (fixed incomes, quarterly bonuses)",
      "High commission payouts (8/8 pieces at 4A and beyond)",
      "Handles dropshipping & product fulfillment",
    ],
  },
];

const PricingSection = () => {

  const navigate = useNavigate();

  return (
    <section className="bg-[#E6F7E6] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <p className="text-[#095a59] font-semibold tracking-wide">
            Pricing Plan
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
            Chose The Best Affordable <br /> Pricing Plan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Unlock your full potential with our meticulously designed plans. Each one provides exclusive access to our expert-led webinars and proven strategies, giving you the tools to fast-track your business growth.
          </p>

          <div className="space-y-6">
            <div>
              <p className="font-medium text-gray-900 flex items-center gap-2">
                <span className="text-xl">—</span> Increase your conversion rate
              </p>
              <p className="text-gray-600 ml-6">
                Tired of your brilliant ideas just sitting there? We'll give you the exact blueprint and proven strategies to not just grow, but rapidly scale your business. Stop guessing and start converting your passion into profit today.
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 flex items-center gap-2">
                <span className="text-xl">+</span> End-to-end encryption for messages
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center gap-6"
            >
              {/* Icon */}
              <div className="bg-[#E6F7E6] w-20 h-20 flex items-center justify-center rounded-full">
                {plan.icon}
              </div>

              {/* Price */}
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{plan.price}</p>
                <span className="text-gray-500 text-sm">Monthly</span>
              </div>

              {/* Plan Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                {plan.name}
              </h3>

              <hr className="w-full border-gray-200" />

              {/* Features */}
              <ul className="text-gray-700 space-y-3 text-sm text-left w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#095a59]">→</span> {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => navigate("/contact")}
                className="w-fit mt-4 px-8 py-4 rounded-full border-2 border-[#095a59] text-[#095a59] font-medium hover:bg-[#095a59] hover:text-white transition-all duration-300">
                Get Started Today
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
