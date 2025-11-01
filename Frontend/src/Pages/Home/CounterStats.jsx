
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterStats = () => {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  const stats = [
    { end: 1000, suffix: '+', label: 'Families Trained' },
    { end: 500, suffix: '+', label: 'Happy Clients' },
    { end: 20, suffix: '+', label: 'Team Members' },
  ];

  return (
    <div ref={ref} className="bg-[#095a59] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-5xl font-bold text-white">
                {hasBeenInView ? <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </h2>
              <p className="text-white mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterStats;
