import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2F0654] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-[#2F0654] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#vision" 
                  className="text-gray-300 hover:text-[#2F0654] transition-colors duration-300"
                >
                  Vision & Mission
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="text-gray-300 hover:text-[#2F0654] transition-colors duration-300"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a 
                  href="#highlights" 
                  className="text-gray-300 hover:text-[#2F0654] transition-colors duration-300"
                >
                  Achievements
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2F0654] mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#2F0654]" />
                <span className="text-gray-300">apvecell@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#2F0654]" />
                <span className="text-gray-300">+91 77159 90922</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#2F0654]" />
                <span className="text-gray-300">Agnel Polytechnic, Vashi</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#2F0654] mb-4">Follow Us</h3>
            <div className="flex">
              <a 
                href="https://www.instagram.com/apv_ecell/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#2F0654] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Empty column for spacing */}
          <div className="space-y-4">
            {/* This column is intentionally left empty for better spacing */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 APV Entrepreneurship Cell. All rights reserved. Built for the National Entrepreneurship Challenge.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;