import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowLeft, Users, Trophy, Target } from 'lucide-react';

interface EventsPageProps {
  initialTab?: string;
}

const EventsPage: React.FC<EventsPageProps> = ({ initialTab }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const pitchEvent = {
    title: 'Startup Pitch Competition',
    date: 'March 15, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium, Agnel Polytechnic Vashi',
    description: 'Pitch your startup idea to a panel of investors and win exciting prizes. This is your chance to showcase your startup and receive valuable feedback from industry experts.',
    prizes: [
      '1st Prize: ₹50,000 + Incubation Support',
      '2nd Prize: ₹25,000 + Mentorship Program',
      '3rd Prize: ₹10,000 + Co-working Space Access'
    ],
    details: 'The Annual Startup Pitch Competition is our flagship event where aspiring entrepreneurs get the opportunity to present their innovative ideas to a panel of industry experts and potential investors. This event is open to all students and recent graduates with a passion for entrepreneurship and innovation. Participants will have 5 minutes to pitch their startup idea, followed by a 3-minute Q&A session with our panel of judges.',
    guidelines: [
      'Open to all students and recent graduates (within 2 years)',
      'Teams of 1-4 members allowed',
      'Idea stage to early-revenue startups welcome',
      '5-minute pitch presentation',
      '3-minute Q&A with judges',
      'Submit deck in PDF format by March 10th'
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
    <div 
      className="min-h-screen text-white pt-20 pb-16 relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #151522 0%, #0D0D1F 100%)' }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showDetails ? (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative font-['Space_Grotesk']">
              <span className="relative z-10">
                Pitch <span className="text-[#A259FF] drop-shadow-[0_0_20px_rgba(162,89,255,0.8)]">Event</span>
              </span>
            </h1>
            <div className="relative w-32 h-1.5 mx-auto mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#A259FF] to-[#872ff7] rounded-full border border-white/30 shadow-[0_0_15px_rgba(162,89,255,0.6)]"></div>
              <div className="absolute inset-0 bg-[#A259FF] rounded-full blur-[4px] opacity-70"></div>
            </div>
            
            <div className="glass-card p-10 rounded-2xl relative overflow-hidden group">
              {/* Background effects */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#A259FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#872ff7] rounded-full mix-blend-multiply filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              
              <h2 className="text-3xl font-bold text-white mb-6 font-['Space_Grotesk']">
                {pitchEvent.title}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Calendar, text: pitchEvent.date, color: 'text-[#A259FF]' },
                  { icon: Clock, text: pitchEvent.time, color: 'text-[#872ff7]' },
                  { icon: MapPin, text: pitchEvent.location, color: 'text-[#A259FF]' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center group/item">
                    <div className="w-16 h-16 rounded-2xl bg-[#A259FF]/10 flex items-center justify-center mb-4 group-hover/item:bg-[#A259FF]/20 transition-all duration-300 border border-[#A259FF]/30">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="text-[#CCCCCC] text-center text-sm font-medium group-hover/item:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <p className="text-[#CCCCCC] mb-8 text-lg leading-relaxed">
                {pitchEvent.description}
              </p>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-6 font-['Space_Grotesk'] flex items-center">
                  <Trophy className="w-6 h-6 text-[#A259FF] mr-3" />
                  Prizes & Rewards
                </h3>
                <div className="grid gap-4">
                  {pitchEvent.prizes.map((prize, index) => (
                    <div key={index} className="flex items-center p-4 bg-[#A259FF]/5 rounded-xl border border-[#A259FF]/20 hover:border-[#A259FF]/40 transition-all duration-300 group/prize">
                      <div className="w-8 h-8 bg-[#A259FF]/20 rounded-lg flex items-center justify-center mr-4 group-hover/prize:bg-[#A259FF]/30 transition-all duration-300">
                        <span className="text-[#A259FF] font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-[#CCCCCC] group-hover/prize:text-white transition-colors duration-300">
                        {prize}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => setShowDetails(true)}
                  className="btn-primary px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 flex items-center"
                >
                  <Target className="w-4 h-4 mr-2" />
                  View Details
                </button>
                <button className="btn-secondary px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <button 
                onClick={() => setShowDetails(false)}
                className="inline-flex items-center text-[#A259FF] hover:text-white transition-colors duration-300 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Event Overview
              </button>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk']">
                {pitchEvent.title}
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[#A259FF] to-[#872ff7] mx-auto rounded-full"></div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <div className="space-y-10">
                {/* About Section */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk'] flex items-center">
                    <div className="w-1.5 h-8 bg-gradient-to-b from-[#A259FF] to-[#872ff7] rounded-full mr-4"></div>
                    About the Event
                  </h3>
                  <p className="text-[#CCCCCC] leading-relaxed text-lg">
                    {pitchEvent.details}
                  </p>
                </div>
                
                {/* Guidelines Section */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk'] flex items-center">
                    <div className="w-1.5 h-8 bg-gradient-to-b from-[#A259FF] to-[#872ff7] rounded-full mr-4"></div>
                    Guidelines
                  </h3>
                  <div className="grid gap-4">
                    {pitchEvent.guidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start p-4 bg-[#A259FF]/5 rounded-xl border border-[#A259FF]/20">
                        <div className="w-6 h-6 bg-[#A259FF]/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-[#A259FF] rounded-full"></div>
                        </div>
                        <span className="text-[#CCCCCC]">{guideline}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Judging Criteria Section */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Space_Grotesk'] flex items-center">
                    <div className="w-1.5 h-8 bg-gradient-to-b from-[#A259FF] to-[#872ff7] rounded-full mr-4"></div>
                    Judging Criteria
                  </h3>
                  <div className="grid gap-4">
                    {pitchEvent.criteria.map((criterion, index) => {
                      const [percentage] = criterion.match(/\d+/) || ['0'];
                      const criterionText = criterion.replace(/\(\d+%\)/, '').trim();
                      
                      return (
                        <div key={index} className="p-4 bg-[#A259FF]/5 rounded-xl border border-[#A259FF]/20">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white font-medium">{criterionText}</span>
                            <span className="text-[#A259FF] font-bold text-sm bg-[#A259FF]/20 px-3 py-1 rounded-full">
                              {percentage}%
                            </span>
                          </div>
                          <div className="h-2 bg-[#0D0D1F] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#A259FF] to-[#872ff7] rounded-full transition-all duration-1000"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="pt-6">
                  <button className="w-full btn-primary py-4 text-lg font-semibold rounded-full transition-all duration-300">
                    Register for the Event
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