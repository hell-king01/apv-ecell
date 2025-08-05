import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Linkedin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers = [
    {
      name: "Arjun Sharma",
      position: "President",
      linkedin: "https://linkedin.com/in/arjunsharma",
      initials: "AS"
    },
    {
      name: "Priya Patel",
      position: "Vice President",
      linkedin: "https://linkedin.com/in/priyapatel",
      initials: "PP"
    },
    {
      name: "Rahul Kumar",
      position: "Technical Head",
      linkedin: "https://linkedin.com/in/rahulkumar",
      initials: "RK"
    },
    {
      name: "Sneha Gupta",
      position: "Marketing Head",
      linkedin: "https://linkedin.com/in/snehagupta",
      initials: "SG"
    },
    {
      name: "Vikram Singh",
      position: "Operations Head",
      linkedin: "https://linkedin.com/in/vikramsingh",
      initials: "VS"
    },
    {
      name: "Ananya Reddy",
      position: "Finance Head",
      linkedin: "https://linkedin.com/in/ananyareddy",
      initials: "AR"
    },
    {
      name: "Karthik Nair",
      position: "Events Coordinator",
      linkedin: "https://linkedin.com/in/karthiknair",
      initials: "KN"
    }
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
      id="team"
      ref={sectionRef}
      className="py-24 px-4"
      style={{ background: 'radial-gradient(ellipse at center, #151522 0%, #121212 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our <span className="text-[#A259FF]">Team</span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] mx-auto rounded-full transform transition-all duration-1000 delay-200 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          <p className={`text-lg text-[#CCCCCC] mt-6 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Meet the passionate individuals driving innovation and entrepreneurship at APV E-Cell
          </p>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="team-swiper pb-16"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="team-card group">
                  <div className="team-avatar group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-[#A259FF] transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#CCCCCC] mb-6 font-medium group-hover:text-white transition-colors duration-300">
                    {member.position}
                  </p>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-full transition-all duration-300 group-hover:scale-110 linkedin-icon border border-[#A259FF]/30 hover:border-[#A259FF]"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-5 h-5 text-[#A259FF] hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;