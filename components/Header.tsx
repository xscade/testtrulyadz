import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isCollapsed, setIsCollapsed] = useState(false); // Desktop/Global collapse state
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCollapse = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
    } else {
      setIsOpen(false); // Close mobile menu if open
      setIsCollapsed(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/#services', type: 'hash' },
    { label: 'About Us', href: '/about', type: 'route' },
    { label: 'Testimonials', href: '/testimonials', type: 'route' },
    { label: 'Contact', href: '/#footer', type: 'hash' },
  ];

  const renderLink = (link: { label: string; href: string; type: string }, mobile: boolean = false) => {
    const isActive = link.type === 'route' && location.pathname === link.href;
    
    const mobileClasses = `block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
      isActive 
        ? "bg-orange-500/10 text-orange-500 border border-orange-500/20" 
        : "text-gray-300 hover:text-white hover:bg-white/5 hover:translate-x-2"
    }`;
    
    const desktopClasses = `relative text-sm font-bold tracking-wide transition-colors duration-300 py-2 group ${
      isActive ? "text-orange-500" : "text-gray-300 hover:text-white"
    }`;

    const content = (
      <>
        {link.label}
        {!mobile && (
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-left transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`} />
        )}
      </>
    );

    if (link.type === 'route') {
      return (
        <Link
          key={link.label}
          to={link.href}
          className={mobile ? mobileClasses : desktopClasses}
          onClick={() => mobile && setIsOpen(false)}
        >
          {content}
        </Link>
      );
    }
    return (
      <a
        key={link.label}
        href={link.href}
        className={mobile ? mobileClasses : desktopClasses}
        onClick={() => mobile && setIsOpen(false)}
      >
        {content}
      </a>
    );
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen 
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-2 shadow-lg shadow-orange-500/5" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center relative">
            {/* Logo - Always Visible */}
            <div className="flex-shrink-0 flex items-center relative group cursor-pointer z-50">
              <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Link to="/" className="relative text-2xl font-black tracking-tighter text-white group-hover:scale-105 transition-transform duration-300">
                TRULY<span className="text-orange-500">ADZ</span>.
              </Link>
            </div>

            {/* Desktop Nav Container */}
            <div className="hidden md:flex items-center justify-end flex-1 ml-8">
              
              {/* Collapsible Menu Items */}
              <div 
                className={`
                  flex space-x-8 items-center bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm mr-4
                  transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-right overflow-hidden
                  ${isCollapsed ? 'w-0 opacity-0 scale-x-0 px-0' : 'w-auto opacity-100 scale-x-100'}
                `}
              >
                <div className="flex space-x-8 items-center min-w-max">
                  {navLinks.map((link) => renderLink(link))}
                  <Link 
                    to="/contact" 
                    className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transform hover:-translate-y-0.5"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Collapse/Reveal Toggle Button */}
              <button
                onClick={toggleCollapse}
                className={`
                  relative z-50 flex items-center justify-center w-10 h-10 rounded-full 
                  transition-all duration-300 focus:outline-none group hover:bg-white/10
                  ${isCollapsed ? 'bg-orange-500/20 text-orange-500 scale-110' : 'text-gray-400 hover:text-white'}
                `}
                title={isCollapsed ? "Show Menu" : "Hide Menu"}
              >
                <div className={`transition-transform duration-500 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}>
                    {isCollapsed ? (
                      <MenuIcon className="w-6 h-6" />
                    ) : (
                      <CloseIcon className="w-5 h-5" />
                    )}
                </div>
              </button>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50">
              <button
                onClick={toggleMenu}
                className={`relative group p-2 rounded-full transition-colors ${isOpen ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                aria-label="Toggle menu"
              >
                <div className={`absolute inset-0 bg-orange-500/20 rounded-full blur transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                {isOpen ? <CloseIcon className="h-6 w-6 relative" /> : <MenuIcon className="h-6 w-6 relative" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-300 flex items-center justify-center z-40 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-sm px-6 space-y-2">
          {navLinks.map((link, idx) => (
            <div 
              key={link.label} 
              className={`transform transition-all duration-500 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {renderLink(link, true)}
            </div>
          ))}
          <div 
            className={`pt-6 transform transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-center text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
