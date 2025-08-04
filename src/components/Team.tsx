import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Linkedin, Instagram, ExternalLink } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const teamSlides = [
    // Slide 1: 3 cards (President + 2 VPs)
    [
      {
        name: "Arjun Sharma",
        role: "President",
        tagline: "Visionary leader driving innovation",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Priya Patel",
        role: "Vice President - Operations",
        tagline: "Strategic thinker & mentor",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Rohit Gupta",
        role: "Vice President - Technology",
        tagline: "Tech evangelist & problem solver",
        image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      }
    ],
    // Slide 2: 6 cards
    [
      {
        name: "Sneha Kumar",
        role: "Marketing Head",
        tagline: "Brand storyteller & community builder",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Vikram Singh",
        role: "Finance Manager",
        tagline: "Numbers wizard & strategy expert",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Ananya Joshi",
        role: "Events Coordinator",
        tagline: "Experience curator & network builder",
        image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Karan Mehta",
        role: "Public Relations",
        tagline: "Communication expert & networker",
        image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Riya Sharma",
        role: "Content Manager",
        tagline: "Creative storyteller & brand voice",
        image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Amit Patel",
        role: "Technical Coordinator",
        tagline: "Innovation catalyst & tech mentor",
        image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      }
    ],
    // Slide 3: 6 cards
    [
      {
        name: "Neha Agarwal",
        role: "Research Lead",
        tagline: "Data-driven insights & market analysis",
        image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Siddharth Roy",
        role: "Partnership Manager",
        tagline: "Relationship builder & deal maker",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Kavya Reddy",
        role: "Design Lead",
        tagline: "Visual storyteller & UX advocate",
        image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Aryan Jain",
        role: "Operations Manager",
        tagline: "Process optimizer & efficiency expert",
        image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Pooja Singh",
        role: "Community Manager",
        tagline: "Engagement specialist & culture builder",
        image: "https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Rahul Kumar",
        role: "Strategy Advisor",
        tagline: "Business strategist & growth hacker",
        image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      }
    ],
    // Slide 4: 6 cards
    [
      {
        name: "Ishita Gupta",
        role: "Legal Advisor",
        tagline: "Compliance expert & risk manager",
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Varun Malhotra",
        role: "Innovation Lead",
        tagline: "Future thinker & trend spotter",
        image: "https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Shreya Nair",
        role: "Sustainability Officer",
        tagline: "Green advocate & impact measurer",
        image: "https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Aditya Sharma",
        role: "Alumni Relations",
        tagline: "Network builder & legacy keeper",
        image: "https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Meera Patel",
        role: "International Affairs",
        tagline: "Global connector & cultural bridge",
        image: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Harsh Agarwal",
        role: "Quality Assurance",
        tagline: "Excellence enforcer & standard setter",
        image: "https://images.pexels.com/photos/1040883/pexels-photo-1040883.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      }
    ],
    // Slide 5: 4 cards
    [
      {
        name: "Tanvi Joshi",
        role: "Mentorship Coordinator",
        tagline: "Guidance facilitator & growth enabler",
        image: "https://images.pexels.com/photos/1181721/pexels-photo-1181721.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Rohan Verma",
        role: "Technology Integration",
        tagline: "Digital transformer & automation expert",
        image: "https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Divya Kapoor",
        role: "Wellness Advocate",
        tagline: "Balance promoter & stress manager",
        image: "https://images.pexels.com/photos/1181723/pexels-photo-1181723.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      },
      {
        name: "Akash Singh",
        role: "Future Planning",
        tagline: "Vision architect & roadmap creator",
        image: "https://images.pexels.com/photos/1043476/pexels-photo-1043476.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "#",
        instagram: "#"
      }
    ]
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
      className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our Team
          </h2>
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Meet the passionate leaders driving our entrepreneurial community forward
          </p>
        </div>
        
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="team-swiper"
          >
            {teamSlides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className={`grid gap-8 ${
                  slide.length === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                  slide.length === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
                }`}>
                  {slide.map((member, memberIndex) => (
                    <div
                      key={`${slideIndex}-${memberIndex}`}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setFlippedCard(`${slideIndex}-${memberIndex}`)}
                      onMouseLeave={() => setFlippedCard(null)}
                    >
                      <div className="relative h-80 preserve-3d transition-transform duration-500 hover:rotate-y-180">
                        {/* Front of card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden">
                          <div className="glass-card p-6 rounded-xl h-full flex flex-col items-center justify-center text-center hover:translate-y-[-5px] transition-all duration-300">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#00CFFF]/30 group-hover:border-[#00CFFF] transition-colors duration-300">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[#2F0654]/30 group-hover:border-[#2F0654] transition-colors duration-300">
                              <img
                                src={member.image}
                                alt={`${member.name} - ${member.role}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-[#2F0654] font-medium mb-2">{member.role}</p>
                            <p className="text-gray-300 text-sm">{member.tagline}</p>
                          </div>
                        </div>
                        
                        {/* Back of card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                          <div className="glass-card p-6 rounded-xl h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#2F0654]/10 to-[#2F0654]/20">
                            <h3 className="text-xl font-bold text-white mb-4">{member.name}</h3>
                            <div className="flex space-x-4 mb-6">
                              <a
                                href={member.linkedin}
                                className="p-3 rounded-full bg-[#2F0654]/20 hover:bg-[#2F0654]/40 transition-colors duration-300"
                                aria-label={`${member.name}'s LinkedIn profile`}
                              >
                                <Linkedin className="w-5 h-5 text-[#2F0654]" />
                              </a>
                              <a
                                href={member.instagram}
                                className="p-3 rounded-full bg-[#2F0654]/20 hover:bg-[#2F0654]/40 transition-colors duration-300"
                                aria-label={`${member.name}'s Instagram profile`}
                              >
                                <Instagram className="w-5 h-5 text-[#2F0654]" />
                              </a>
                            </div>
                            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#2F0654]/20 hover:bg-[#2F0654]/40 text-[#2F0654] transition-colors duration-300">
                              <ExternalLink className="w-4 h-4" />
                              <span>View Bio</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button className="swiper-button-prev-custom p-3 rounded-full bg-[#2F0654]/20 hover:bg-[#2F0654]/40 text-[#2F0654] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="swiper-pagination-custom flex space-x-2"></div>
            <button className="swiper-button-next-custom p-3 rounded-full bg-[#2F0654]/20 hover:bg-[#2F0654]/40 text-[#2F0654] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;