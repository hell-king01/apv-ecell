import { useState } from 'react';

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
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showDetails ? (
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pitch <span className="text-[#00CFFF]">Event</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#0066FF] mx-auto mb-8"></div>
            
            <div className="bg-[#121212] rounded-xl p-8 border border-[#2A2A2A] text-left">
              <h2 className="text-2xl font-bold text-white mb-4">{pitchEvent.title}</h2>
              
              <div className="space-y-2 text-gray-300 mb-6">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#00CFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {pitchEvent.date} • {pitchEvent.time}
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#00CFFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {pitchEvent.location}
                </p>
              </div>
              
              <p className="text-gray-300 mb-6">{pitchEvent.description}</p>
              
              <div className="space-y-2 mb-6">
                <h3 className="text-lg font-semibold text-white">Prizes:</h3>
                <ul className="space-y-1 text-gray-300">
                  {pitchEvent.prizes.map((prize, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#00CFFF] mr-2">•</span>
                      <span>{prize}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setShowDetails(true)}
                  className="bg-gradient-to-r from-[#00CFFF] to-[#0066FF] text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity duration-300"
                >
                  View Details
                </button>
                <button className="border border-[#00CFFF] text-[#00CFFF] px-6 py-2 rounded-full font-medium hover:bg-[#00CFFF]/10 transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {pitchEvent.title}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00CFFF] to-[#0066FF] mx-auto mb-6"></div>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-[#00CFFF] hover:underline flex items-center mx-auto mb-8"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Event
              </button>
            </div>
            
            <div className="bg-[#121212] rounded-xl p-8 border border-[#2A2A2A]">
              <h2 className="text-2xl font-bold text-white mb-6">Event Details</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#00CFFF] mb-3">About</h3>
                  <p className="text-gray-300">{pitchEvent.details}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#00CFFF] mb-3">Prizes</h3>
                  <ul className="space-y-2">
                    {pitchEvent.prizes.map((prize, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#00CFFF] mr-2">•</span>
                        <span className="text-gray-300">{prize}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#00CFFF] mb-3">Guidelines</h3>
                  <ul className="space-y-2">
                    {pitchEvent.guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#00CFFF] mr-2">•</span>
                        <span className="text-gray-300">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#00CFFF] mb-3">Judging Criteria</h3>
                  <ul className="space-y-2">
                    {pitchEvent.criteria.map((criterion, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#00CFFF] mr-2">•</span>
                        <span className="text-gray-300">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-[#00CFFF] to-[#0066FF] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300">
                    Register Now
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
