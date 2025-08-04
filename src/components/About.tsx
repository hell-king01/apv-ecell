import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-[#0D0D0D] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative">
              About Us
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00CFFF] to-[#7CFF00] transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`}></div>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Founded with a vision to foster entrepreneurial excellence, our E-Cell has been the 
                launchpad for over 200 startups and countless innovative projects that have 
                transformed industries and touched lives.
              </p>
              
              <p className="text-lg">
                We believe in the power of collaboration, mentorship, and bold thinking. Our 
                community brings together passionate students, experienced mentors, and industry 
                leaders to create an ecosystem where breakthrough ideas flourish.
              </p>
              
              <p className="text-lg">
                From ideation workshops to funding connections, from technical mentorship to 
                market validation - we provide the complete support system that emerging 
                entrepreneurs need to succeed in today's competitive landscape.
              </p>
            </div>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="E-Cell team collaborating on innovative projects"
                className="w-full h-64 md:h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Innovation in Action</p>
                <p className="text-xs text-gray-300">Building tomorrow, today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;