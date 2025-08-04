import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'events', path: '/events', label: 'Events' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-lg border-b border-white/10 shadow-[0_0_30px_rgba(47,6,84,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="relative text-white text-xl font-bold group"
          >
            <span className="relative z-10">E-Cell</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2F0654] group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 group
                  ${location.pathname === item.path
                    ? 'bg-gradient-to-r from-[#2F0654] to-[#1a0329] text-white shadow-[0_0_15px_rgba(47,6,84,0.7)] border border-white/30'
                    : 'text-gray-300 hover:text-white hover:bg-[#2F0654]/30 hover:shadow-[0_0_15px_rgba(47,6,84,0.4)] border border-transparent hover:border-white/20'
                  }`}
              >
                <span className="relative z-10 flex items-center">
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  )}
                </span>
                {location.pathname === item.path && (
                  <>
                    <span className="absolute inset-0 rounded-full bg-[#2F0654] opacity-70 blur-[10px] z-0"></span>
                    <span className="absolute inset-0 rounded-full border border-white/40 z-0"></span>
                  </>
                )}
                <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-white/30 transition-all duration-300 z-0"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-[#2F0654]/30 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-[#0D0D0D]/95 backdrop-blur-lg">
            <div className="space-y-2 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg border ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-[#2F0654]/80 to-[#1a0329]/80 border-white/20 shadow-[0_0_15px_rgba(47,6,84,0.5)]'
                      : 'text-gray-300 hover:text-white hover:bg-[#2F0654]/30 border-transparent hover:border-white/10 hover:shadow-[0_0_10px_rgba(47,6,84,0.3)]'
                  }`}
                >
                  <div className="flex items-center">
                    {item.label}
                    {isActive(item.path) && (
                      <span className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Glowing accent at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2F0654] to-transparent opacity-50"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;