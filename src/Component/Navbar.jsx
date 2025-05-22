import React, { useState } from 'react';
import logo1 from '../assets/world.svg';
import logo2 from '../assets/logoabu.png';
import logo3 from '../assets/home.svg';
import logo4 from '../assets/play.svg';
import logo5 from '../assets/tutor.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#hero', icon: logo3, label: 'Home' },
    { href: '#content', icon: logo4, label: 'Project' },
    { href: '#footer', icon: logo1, label: 'Social Media' },
    {
      href: 'https://www.canva.com/design/DAGmAHkqb9k/YSt2Pc1mT0eaoDtQM3q9DQ/edit?utm_content=DAGmAHkqb9k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      icon: logo5,
      label: 'CV',
    },
  ];

  return (
    <nav className="bg-gray-900 px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center space-x-4">
          <img src={logo2} alt="Logo" className="h-10" />
          <span className="text-white font-semibold text-lg">Farrel Aqil</span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-medium px-3 py-2 rounded-md hover:bg-cyan-900 transition duration-300"
            >
              <img src={item.icon} alt={item.label} className="h-5" />
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 md:hidden space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-medium px-3 py-2 rounded-md hover:bg-cyan-900 transition duration-300"
            >
              <img src={item.icon} alt={item.label} className="h-5" />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
