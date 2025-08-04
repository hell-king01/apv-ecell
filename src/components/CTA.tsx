import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-16 px-4 bg-gradient-to-r from-[#2F0654]/10 to-[#2F0654]/20 relative overflow-hidden">
      <div className="absolute inset-0 cta-pulse"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to build the next big idea?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our community of innovators, entrepreneurs, and change-makers. 
          Transform your vision into reality with our support and guidance.
        </p>
        
        <button className="btn-cta group px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
          <span>Get Involved</span>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-[#2F0654] rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-[#2F0654] rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-[#2F0654] rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default CTA;