import React, { useEffect, useRef, useState } from 'react';

const VisionMission = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="vision-mission"
      ref={sectionRef}
      className="py-20 px-4 bg-[#0D0D0D] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00CFFF]/5 to-[#00CFFF]/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-card p-8 rounded-xl h-full hover:translate-y-[-5px] transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-[#00CFFF]/10 border border-[#00CFFF]/30 group-hover:border-[#00CFFF]/60 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#00CFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    <circle cx="12" cy="8" r="1" fill="currentColor" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h8M10 14h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Our Vision</h3>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#00CFFF] mt-2 flex-shrink-0"></div>
                  <p>Creating a global ecosystem of student entrepreneurs who drive meaningful change</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#00CFFF] mt-2 flex-shrink-0"></div>
                  <p>Bridging the gap between academic knowledge and real-world innovation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#00CFFF] mt-2 flex-shrink-0"></div>
                  <p>Establishing our institution as a leading hub for entrepreneurial excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-card p-8 rounded-xl h-full hover:translate-y-[-5px] transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-[#00CFFF]/10 border border-[#00CFFF]/30 group-hover:border-[#00CFFF]/60 transition-colors duration-300">
                  <svg className="w-8 h-8 text-[#00CFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9-7-9-7-9 7 9 7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l-3-2.5V21l3-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l3-2.5V21l-3-2z" />
                    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={1.5} fill="none" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 8l8 8M16 8l-8 8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Our Mission</h3>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#00CFFF] mt-2 flex-shrink-0"></div>
                  <p>Nurture innovative thinking through workshops, mentorship, and practical exposure</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#00CFFF] mt-2 flex-shrink-0"></div>
                  <p>Connect students with industry leaders, investors, and successful entrepreneurs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#00CFFF] mt-2 flex-shrink-0"></div>
                  <p>Provide resources and support for transforming ideas into viable businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;