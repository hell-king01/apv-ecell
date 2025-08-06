import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Linkedin } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers = [
    {
      name: "Soham Dhanokar",
      position: "President",
      linkedin: "https://www.linkedin.com/in/soham-dhanokar-13807a355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image : '/Soham Dhanokar (President).png'
    },
    {
      name: "Swara Hande",
      position: "Head of Public Relations and Marketing",
      linkedin: "https://www.linkedin.com/in/swara-hande-9a8277356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image : '/Swara Hande.JPG'
    },
    {
      name: "Parth Naukudkar",
      position: "Head of Finance and Operations",
      linkedin: "https://www.linkedin.com/in/parth-naukudkar-bab2b9376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image : '/Parth Naukudkar.jpg'
    },
    {
      name: "Jatin Sharma",
      position: "Head of Events and Operations",
      linkedin: "https://www.linkedin.com/in/jatin-sharma-75895b378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      image : '/Jatin Sharma.JPG'
    },
    {
      name: "Harshali Bhosale",
      position: "Head of Design and Creative",
      linkedin: "https://www.linkedin.com/in/harshali-bhosale-8768a3377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image : '/HB.png'
    },
    {
      name: "Arush Wavhal",
      position: "Head of Technology and Development",
      linkedin: "https://www.linkedin.com/in/arush-wavhal-292647377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image : '/Arush Waval.PNG'
    },
    {
      name: "Rajvi Gaikwad",
      position: "Head of Content and Social Media",
      linkedin: "https://www.linkedin.com/in/rajvi-gaikwad-567089339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image : '/RG.png'
    }
  ];

  // Create slides with 1-3-3 pattern
  const slides = [
    [teamMembers[0]], // President
    teamMembers.slice(1, 4), // Next 3 members
    teamMembers.slice(4, 7)  // Last 3 members
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const MemberCard = ({ member, className = '' }: { member: typeof teamMembers[0], className?: string }) => (
    <div className={`h-full text-center p-6 rounded-2xl bg-gradient-to-br from-[#0D0D1F] to-[#1A1A2E] border border-[#A259FF]/20 hover:border-[#A259FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#A259FF]/10 ${className}`}>
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-[#A259FF]/30 hover:border-[#A259FF]/50">
        <img 
          src={member.image} 
          alt={`${member.name} profile`} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-[#A259FF] transition-colors duration-300">
        {member.name}
      </h3>
      <p className="text-[#CCCCCC] mb-4 font-medium group-hover:text-white transition-colors duration-300">
        {member.position}
      </p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-10 h-10 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-full transition-all duration-300 group-hover:scale-110 border border-[#A259FF]/30 hover:border-[#A259FF]"
        aria-label={`${member.name}'s LinkedIn profile`}
      >
        <Linkedin className="w-5 h-5 text-[#A259FF] hover:text-white transition-colors duration-300" />
      </a>
    </div>
  );

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 px-4"
      style={{ background: 'radial-gradient(ellipse at center, #151522 0%, #0D0D1F 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our <span className="text-[#A259FF]">Team</span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-[#A259FF] to-[#2F0654] mx-auto rounded-full transform transition-all duration-1000 delay-200 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          <p className={`text-lg text-[#CCCCCC] mt-6 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Meet the passionate individuals driving innovation and entrepreneurship at APV E-Cell
          </p>
        </div>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              el: '.team-pagination',
              bulletClass: 'inline-block w-3 h-3 mx-1 rounded-full bg-[#A259FF]/30 transition-all duration-300',
              bulletActiveClass: '!bg-[#A259FF] w-8',
            }}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={1000}
            className="team-swiper pb-24"
          >
            {slides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className={`grid ${
                  slide.length === 1 ? 'max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-3 gap-8'
                }`}>
                  {slide.map((member, memberIndex) => (
                    <div key={`${slideIndex}-${memberIndex}`} className={slide.length === 1 ? 'scale-110' : ''}>
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Pagination */}
          <div className="team-pagination flex justify-center mt-8 -mb-8 h-4" />
        </div>
      </div>
    </section>
  );
};

export default Team;