import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0D1F] text-white py-20 border-t border-[#A259FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                APV <span className="text-[#A259FF]">E-CELL</span>
              </h3>
              <p className="text-[#CCCCCC] leading-relaxed">
                Empowering the next generation of entrepreneurs and innovators at Agnel Polytechnic, Vashi. 
                Building tomorrow's success stories today.
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/apv_ecell/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#A259FF]/20 hover:bg-[#A259FF] rounded-xl flex items-center justify-center transition-all duration-300 group border border-[#A259FF]/30 hover:border-[#A259FF] hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#A259FF] group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#A259FF] mb-6 font-['Space_Grotesk']">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about" 
                  className="text-[#CCCCCC] hover:text-[#A259FF] transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#A259FF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#vision-mission" 
                  className="text-[#CCCCCC] hover:text-[#A259FF] transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#A259FF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Vision & Mission
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="text-[#CCCCCC] hover:text-[#A259FF] transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#A259FF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Our Team
                </a>
              </li>
              <li>
                <a 
                  href="#highlights" 
                  className="text-[#CCCCCC] hover:text-[#A259FF] transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#A259FF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Achievements
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#A259FF] mb-6 font-['Space_Grotesk']">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#A259FF]/20 flex items-center justify-center border border-[#A259FF]/30 group-hover:border-[#A259FF] transition-all duration-300">
                  <Mail className="w-4 h-4 text-[#A259FF]" />
                </div>
                <span className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">apvecell@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#A259FF]/20 flex items-center justify-center border border-[#A259FF]/30 group-hover:border-[#A259FF] transition-all duration-300">
                  <Phone className="w-4 h-4 text-[#A259FF]" />
                </div>
                <span className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">+91 77159 90922</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#A259FF]/20 flex items-center justify-center border border-[#A259FF]/30 group-hover:border-[#A259FF] transition-all duration-300">
                  <MapPin className="w-4 h-4 text-[#A259FF]" />
                </div>
                <span className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">Agnel Polytechnic, Vashi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#A259FF]/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#CCCCCC] text-sm">
              © 2025 APV Entrepreneurship Cell. All rights reserved.
            </p>
            <p className="text-[#CCCCCC] text-sm">
              Built for the National Entrepreneurship Challenge
            </p>
          </div>
          <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-[#A259FF] to-transparent opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;