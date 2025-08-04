import React, { useEffect, useRef, useState } from 'react';

const Highlights = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const achievements = [
    { name: "IIT Bombay", type: "Partner Institution" },
    { name: "Startup India", type: "Recognition" },
    { name: "National Innovation Foundation", type: "Award" },
    { name: "TechCrunch", type: "Featured Startup" },
    { name: "Economic Times", type: "Media Coverage" },
    { name: "NASSCOM", type: "Member Organization" },
    { name: "Invest India", type: "Government Partner" },
    { name: "Indian Angel Network", type: "Investor Network" },
    { name: "Microsoft for Startups", type: "Tech Partner" },
    { name: "AWS Activate", type: "Cloud Partner" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="py-20 px-4 bg-[#0D0D0D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Highlights & Achievements
          </h2>
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Recognized by leading institutions and featured in prestigious platforms
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0D0D0D] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0D0D0D] to-transparent z-10"></div>
          
          <div className="marquee-container">
            <div className="marquee-content">
              {[...achievements, ...achievements].map((achievement, index) => (
                <div
                  key={index}
                  className="marquee-item group"
                >
                  <div className="glass-card p-6 rounded-xl text-center min-w-[250px] hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#2F0654]/20 to-[#2F0654]/40 flex items-center justify-center border border-[#2F0654]/30 group-hover:border-[#2F0654] transition-colors duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#2F0654] to-[#1a0329] rounded-full"></div>
                    </div>
                    <h3 className="text-white font-bold mb-2 group-hover:text-[#2F0654] transition-colors duration-300">
                      {achievement.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{achievement.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-3xl md:text-4xl font-bold text-[#2F0654] mb-2">15+</div>
              <div className="text-gray-300">Startups Launched</div>
            </div>
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-3xl md:text-4xl font-bold text-[#2F0654] mb-2">25+</div>
              <div className="text-gray-300">Events Organized</div>
            </div>
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-3xl md:text-4xl font-bold text-[#2F0654] mb-2">₹10L+</div>
              <div className="text-gray-300">Funding Raised</div>
            </div>
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-3xl md:text-4xl font-bold text-[#2F0654] mb-2">500+</div>
              <div className="text-gray-300">Students Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;