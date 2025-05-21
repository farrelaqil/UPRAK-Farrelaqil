import React from 'react';
import logo1 from '../assets/world.svg';       
import logo2 from '../assets/svgexport-1.svg'; 
import logo3 from '../assets/home.svg';
import logo4 from '../assets/play.svg';
import logo5 from '../assets/tutor.svg';
import logo6 from '../assets/buku.svg';
import logo7 from '../assets/discord.svg';
import logo8 from '../assets/search.svg';

function Navbar() {
  return (
    <nav className="bg-teal-600 px-4 py-3 flex items-center justify-center sticky top-0 z-50 shadow-md">
  <div className="w-full max-w-7xl flex items-center justify-between">
    <div className="flex items-center space-x-8">
      <img src={logo2} alt="Logo" className="h-10" />
      <ul className="hidden md:flex space-x-2 items-center">
        <li>
          <a href="#hero" className="flex items-center gap-2 text-white font-medium px-3 py-2 rounded-md hover:bg-teal-700">
            <img src={logo3} alt="Home" className="h-5" />Home</a>
        </li>
        <li>
          <a href="#content" className="flex items-center gap-2 text-white font-medium px-3 py-2 rounded-md hover:bg-teal-700">
            <img src={logo4} alt="Kelas" className="h-5" />Kelas</a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium px-3 py-2 rounded-md hover:bg-teal-700">
            <img src={logo5} alt="Tutorial" className="h-5" />Tutorial</a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium px-3 py-2 rounded-md hover:bg-teal-700">
            <img src={logo6} alt="Buku" className="h-5" />Buku</a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium px-3 py-2 rounded-md hover:bg-teal-700">
            <img src={logo7} alt="Discord" className="h-5" />Discord</a>
        </li>
      </ul>
    </div>

    <div className="flex items-center gap-4">
      <img src={logo8} alt="Search" className="h-5 cursor-pointer" />
      <img src={logo1} alt="Theme" className="h-5 cursor-pointer" />
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-medium px-4 py-2 rounded-lg shadow-md">
        Join Newsletter
      </button>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
