import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Services', href: '/#services', type: 'hash' },
    { label: 'About Us', href: '/about', type: 'route' },
    { label: 'Testimonials', href: '/#testimonials', type: 'hash' },
    { label: 'Contact', href: '/#footer', type: 'hash' },
  ];

  const renderLink = (link: { label: string; href: string; type: string }, mobile: boolean = false) => {
    const className = mobile
      ? "block px-3 py-2 text-base font-medium text-gray-300 hover:text-orange-500 hover:bg-gray-900 rounded-md transition-all"
      : "text-sm font-semibold text-gray-300 hover:text-orange-500 transition-colors duration-200";

    if (link.type === 'route') {
      return (
        <Link
          key={link.label}
          to={link.href}
          className={className}
          onClick={() => mobile && setIsOpen(false)}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a
        key={link.label}
        href={link.href}
        className={className}
        onClick={() => mobile && setIsOpen(false)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white">
              TRULY<span className="text-orange-500">ADZ</span>.
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => renderLink(link))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => renderLink(link, true))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
