import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventsPage = () => {
  const [showDetails, setShowDetails] = useState(false);
  
  const pitchEvent = {
    title: 'Startup Pitch Competition',
    date: 'August 25, 2023',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium, E-Cell Building',
    description: 'Pitch your startup idea to a panel of investors and win exciting prizes. This is your chance to showcase your startup and receive valuable feedback.',
    prizes: [
      '1st Prize: $10,000 + Incubation Support',
      '2nd Prize: $5,000 + Mentorship',
      '3rd Prize: $2,500 + Co-working Space'
    ],
    details: 'The Annual Startup Pitch Competition is our flagship event where aspiring entrepreneurs get the opportunity to present their innovative ideas to a panel of industry experts and potential investors. This event is open to all students and recent graduates with a passion for entrepreneurship and innovation. Participants will have 5 minutes to pitch their startup idea, followed by a 3-minute Q&A session with our panel of judges.',
    guidelines: [
      'Open to all students and recent graduates (within 2 years)',
      'Teams of 1-4 members allowed',
      'Idea stage to early-revenue startups welcome',
      '5-minute pitch presentation',
      '3-minute Q&A with judges',
      'Submit deck in PDF format by August 20th'
    ],
    criteria: [
      'Innovation (30%)',
      'Market Potential (25%)',
      'Business Model (25%)',
      'Team (10%)',
      'Presentation (10%)'
    ]
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-20 pb-16 relative overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-[#2F0654] rounded-full mix-blend-screen opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-[#2F0654] rounded-full mix-blend-screen opacity-5 blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showDetails ? (
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative">
              <span className="relative z-10">
                Pitch <span className="text-[#2F0654] drop-shadow-[0_0_10px_rgba(47,6,132,0.7)]">Event</span>
              </span>
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 opacity-10 blur-2xl">
                Pitch Event
              </span>
            </h1>
            <div className="relative w-32 h-1.5 mx-auto mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2F0654] to-[#1a0329] rounded-full border border-white/30 shadow-[0_0_10px_rgba(47,6,84,0.5)]"></div>
              <div className="absolute inset-0 bg-[#2F0654] rounded-full blur-[4px] opacity-70 border border-white/20"></div>
              <div className="absolute inset-0 bg-white/10 rounded-full blur-[1px] group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            
            <div className="bg-[#0D0D0D]/90 backdrop-blur-sm rounded-xl p-8 border-2 border-white/10 relative overflow-hidden group/container">
              {/* Background glow effects */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#2F0654] rounded-full mix-blend-multiply filter blur-3xl opacity-20 border border-white/10 group-hover/container:opacity-30 transition-opacity duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#B388FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 group-hover/container:opacity-20 transition-opacity duration-700"></div>
              
              {/* Border and overlay effects */}
              <div className="absolute inset-0 rounded-xl border border-white/5 group-hover/container:border-white/10 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F0654]/5 via-transparent to-[#2F0654]/5 opacity-0 group-hover/container:opacity-100 transition-opacity duration-700"></div>
              
              {/* Title with gradient and glow */}
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B388FF] mb-4 relative z-10">
                {pitchEvent.title}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#2F0654] via-[#B388FF] to-[#2F0654] opacity-70 group-hover/container:opacity-100 transition-opacity duration-500"></span>
              </h2>
              
              <div className="space-y-3 mb-8">
                {[
                  { icon: <Calendar className="w-4 h-4" />, text: pitchEvent.date },
                  { icon: <Clock className="w-4 h-4" />, text: pitchEvent.time },
                  { icon: <MapPin className="w-4 h-4" />, text: pitchEvent.location }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group/item">
                    <div className="w-8 h-8 rounded-lg bg-[#2F0654]/30 flex items-center justify-center mr-3 group-hover/item:bg-[#2F0654]/50 group-hover/item:shadow-[0_0_10px_rgba(47,6,84,0.5)] transition-all duration-300 border border-white/10">
                      {React.cloneElement(item.icon, { 
                        className: 'w-4 h-4 text-[#B388FF] group-hover/item:text-white transition-colors duration-300' 
                      })}
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="relative p-6 mb-8 rounded-xl bg-gradient-to-br from-[#0D0D0D] to-[#0D0D0D]/80 border border-white/5 group/desc hover:border-white/10 transition-all duration-500">
                <div className="absolute inset-0 rounded-xl bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiBvcGFjaXR5PSIwLjA1IiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQkM4OEZGIiBzdHJva2Utd2lkdGg9IjAuNSIgZD0iTTAgMGg2MDB2NjAwSDB6Ii8+PC9zdmc+')] opacity-30"></div>
                <p className="relative z-10 text-gray-300 group-hover/desc:text-gray-200 transition-colors duration-500 leading-relaxed">
                  {pitchEvent.description}
                </p>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#2F0654] rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover/desc:opacity-20 transition-opacity duration-700"></div>
              </div>
              
              {/* Info Grid */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Date', value: pitchEvent.date, icon: '📅' },
                  { label: 'Time', value: pitchEvent.time, icon: '⏰' },
                  { label: 'Location', value: pitchEvent.location, icon: '📍' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-[#0D0D0D]/70 p-5 rounded-xl border border-white/5 hover:border-white/10 group/item transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2F0654]/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[#2F0654]/30 backdrop-blur-sm flex items-center justify-center text-xl mb-3 group-hover/item:bg-[#2F0654]/50 group-hover/item:text-white transition-all duration-300 border border-white/5">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-[#B388FF] text-sm font-medium mb-1 group-hover/item:text-white transition-colors duration-300">
                        {item.label}
                      </div>
                      <div className="text-white font-medium text-lg">
                        {item.value}
                      </div>
                    </div>
                    
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#B388FF] to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white relative inline-flex items-center">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-[#B388FF] to-[#2F0654] rounded-full mr-3 group-hover:shadow-[0_0_10px_rgba(178,136,255,0.6)] transition-shadow duration-500"></span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B388FF] group-hover:from-[#B388FF] group-hover:to-white transition-all duration-500">
                      Prizes
                    </span>
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#2F0654]/50 to-transparent ml-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <ul className="space-y-3 pl-4 border-l-2 border-[#2F0654]/50 group-hover:border-[#B388FF] pr-2 transition-colors duration-500">
                  {pitchEvent.prizes.map((prize, index) => (
                    <li key={index} className="flex items-start group/item">
                      <div className="relative mt-2.5 mr-3">
                        <div className="w-2 h-2 bg-[#B388FF] rounded-full group-hover/item:bg-white transition-colors duration-300"></div>
                        <div className="absolute inset-0 rounded-full bg-[#B388FF] opacity-0 group-hover/item:opacity-40 group-hover/item:animate-ping transition-opacity duration-300"></div>
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        {prize}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4 relative z-10">
                <button 
                  onClick={() => setShowDetails(true)}
                  className="relative overflow-hidden group bg-gradient-to-r from-[#2F0654] to-[#1a0329] text-white px-8 py-3 rounded-full font-medium transition-all duration-300
                    hover:shadow-[0_0_20px_rgba(47,6,84,0.8)] hover:scale-105 border-2 border-white/30"
                >
                  <span className="relative z-10 flex items-center">
                    View Details
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#3a0a6b] to-[#2F0654] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  <span className="absolute inset-0 border-2 border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                <button className="relative overflow-hidden group border-2 border-[#2F0654] text-white px-8 py-3 rounded-full font-medium 
                  hover:bg-[#2F0654]/30 hover:text-white transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(47,6,84,0.6)] hover:border-white/30">
                  <span className="relative z-10 flex items-center">
                    Register Now
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-[#2F0654]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                  <span className="absolute inset-0 border-2 border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
                <span className="relative z-10">{pitchEvent.title}</span>
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 opacity-10 blur-2xl">
                  {pitchEvent.title}
                </span>
              </h1>
              <div className="relative w-24 h-1 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2F0654] to-[#1a0329] rounded-full border border-white/30"></div>
                <div className="absolute inset-0 bg-[#2F0654] rounded-full blur-[2px] opacity-70 border border-white/20"></div>
                <div className="absolute inset-0 bg-white/10 rounded-full blur-[1px]"></div>
              </div>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-[#2F0654] hover:underline flex items-center mx-auto mb-8"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Event
              </button>
            </div>
            
            <div className="group relative p-6 bg-[#121212]/80 backdrop-blur-sm rounded-xl border-2 border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F0654]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* White border glow effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/10 group-hover:shadow-[0_0_20px_rgba(47,6,84,0.3)] transition-all duration-500 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#B388FF] transition-all duration-500">
                Event Details
              </h2>
              
              <div className="space-y-8 relative z-10">
                {/* About Section */}
                <div className="bg-[#0D0D0D]/50 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-500 group/section">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2F0654]/5 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-xl font-bold text-white mb-4 relative flex items-center">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-[#B388FF] to-[#2F0654] rounded-full mr-3 group-hover/section:shadow-[0_0_10px_rgba(178,136,255,0.7)] transition-shadow duration-500"></span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B388FF] group-hover/section:from-[#B388FF] group-hover/section:to-white transition-all duration-500">
                      About
                    </span>
                  </h3>
                  <p className="text-gray-300 relative group-hover/section:text-gray-200 transition-colors duration-500 pl-4 border-l-2 border-[#2F0654]/50 group-hover/section:border-[#B388FF] pr-2 mb-6">
                    {pitchEvent.details}
                  </p>
                  
                  {/* Guidelines Section */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4 relative flex items-center">
                      <span className="w-1.5 h-6 bg-gradient-to-b from-[#B388FF] to-[#2F0654] rounded-full mr-3 group-hover/section:shadow-[0_0_10px_rgba(178,136,255,0.7)] transition-shadow duration-500"></span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B388FF] group-hover/section:from-[#B388FF] group-hover/section:to-white transition-all duration-500">
                        Guidelines
                      </span>
                    </h3>
                    <ul className="space-y-3 pl-4 border-l-2 border-[#2F0654]/50 group-hover/section:border-[#B388FF] pr-2">
                      {pitchEvent.guidelines.map((guideline, index) => (
                        <li key={index} className="flex items-start group/item">
                          <div className="relative mt-2.5 mr-3">
                            <div className="w-2 h-2 bg-[#B388FF] rounded-full group-hover/item:bg-white transition-colors duration-300"></div>
                            <div className="absolute inset-0 rounded-full bg-[#B388FF] opacity-0 group-hover/item:opacity-40 group-hover/item:animate-ping transition-opacity duration-300"></div>
                          </div>
                          <span className="text-gray-300 group-hover/section:text-gray-200 transition-colors duration-500">
                            {guideline}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Judging Criteria Section */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-white mb-4 relative flex items-center">
                      <span className="w-1.5 h-6 bg-gradient-to-b from-[#B388FF] to-[#2F0654] rounded-full mr-3 group-hover/section:shadow-[0_0_10px_rgba(178,136,255,0.7)] transition-shadow duration-500"></span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B388FF] group-hover/section:from-[#B388FF] group-hover/section:to-white transition-all duration-500">
                        Judging Criteria
                      </span>
                    </h3>
                    <ul className="space-y-4 pl-4 border-l-2 border-[#2F0654]/50 group-hover/section:border-[#B388FF] pr-2">
                      {pitchEvent.criteria.map((criterion, index) => {
                        const [percentage] = criterion.match(/\d+/) || ['0'];
                        const criterionText = criterion.replace(/\(\d+%\)/, '').trim();
                        
                        return (
                          <li key={index} className="group/item">
                            <div className="flex items-start">
                              <div className="relative mt-2.5 mr-3">
                                <div className="w-2 h-2 bg-[#B388FF] rounded-full group-hover/item:bg-white transition-colors duration-300"></div>
                                <div className="absolute inset-0 rounded-full bg-[#B388FF] opacity-0 group-hover/item:opacity-40 group-hover/item:animate-ping transition-opacity duration-300"></div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                                    {criterionText}
                                  </span>
                                  <span className="text-xs font-medium bg-[#2F0654]/50 text-[#B388FF] px-2 py-0.5 rounded-full border border-[#2F0654]/50 group-hover/item:border-[#B388FF]/50 group-hover/item:bg-[#2F0654]/30 transition-all duration-300">
                                    {percentage}%
                                  </span>
                                </div>
                                <div className="h-1.5 bg-[#0D0D0D] rounded-full overflow-hidden border border-white/5">
                                  <div 
                                    className="h-full bg-gradient-to-r from-[#2F0654] to-[#B388FF] rounded-full transition-all duration-1000"
                                    style={{ width: '0%' }}
                                    ref={el => {
                                      if (el) {
                                        // Animate the width when the element is in view
                                        const observer = new IntersectionObserver((entries) => {
                                          entries.forEach(entry => {
                                            if (entry.isIntersecting) {
                                              el.style.width = percentage + '%';
                                              observer.unobserve(entry.target);
                                            }
                                          });
                                        }, { threshold: 0.1 });
                                        observer.observe(el);
                                      }
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                
                <div className="pt-4 relative z-10">
                  <button className="w-full relative overflow-hidden group bg-gradient-to-r from-[#2F0654] to-[#1a0329] text-white py-4 rounded-lg font-medium 
                    hover:shadow-[0_0_20px_rgba(47,6,84,0.8)] hover:scale-[1.02] transition-all duration-300
                    border border-white/30 stroke-white stroke-2">
                    <span className="relative z-10">Register Now</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#3a0a6b] to-[#2F0654] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
