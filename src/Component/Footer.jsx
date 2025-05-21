import React from 'react';
import fb from '../assets/fb.svg'; 
import twitter from '../assets/twitter.svg'; 
import tele from '../assets/tele.svg'; 
import ig from '../assets/ig.svg'; 
import yt from '../assets/yt.svg'; 
import kode from '../assets/kode.svg'; 

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
      
        <div className="col-span-1">
          <div className="mb-4">
            <img src={kode} alt="Petani Kode Logo" className="w-32" />
          </div>
          <p className="text-gray-300 mt-2">
            Tempat belajar budidaya kode (coding) dengan tutorial yang gampang dipahami.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Belajar</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-teal-600">Artikel</a></li>
            <li><a href="#" className="hover:text-teal-600">Tutorial</a></li>
            <li><a href="#" className="hover:text-teal-600">Buku</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Popular Tutorial</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-teal-600">Tutorial Bahasa C</a></li>
            <li><a href="#" className="hover:text-teal-600">Tutorial Javascript</a></li>
            <li><a href="#" className="hover:text-teal-600">Tutorial Java</a></li>
            <li><a href="#" className="hover:text-teal-600">Tutorial PHP</a></li>
            <li><a href="#" className="hover:text-teal-600">Tutorial Python</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Social Media</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-teal-600">Facebook Page</a></li>
            <li><a href="#" className="hover:text-teal-600">Instagram</a></li>
            <li><a href="#" className="hover:text-teal-600">Twitter</a></li>
            <li><a href="#" className="hover:text-teal-600">Youtube Channel</a></li>
            <li><a href="#" className="hover:text-teal-600">Telegram Channel</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Petani Kode</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-teal-600">About</a></li>
            <li><a href="#" className="hover:text-teal-600">FAQs</a></li>
            <li><a href="#" className="hover:text-teal-600">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-400 text-sm mb-4">Ikuti Kami di</p>
        <div className="flex justify-center space-x-4 mb-6">
          <img src={fb} alt="Facebook" className="w-8 h-8 rounded-full" />
          <img src={twitter} alt="Twitter" className="w-8 h-8 rounded-full" />
          <img src={tele} alt="Telegram" className="w-8 h-8 rounded-full" />
          <img src={ig} alt="Instagram" className="w-8 h-8 rounded-full" />
          <img src={yt} alt="YouTube" className="w-8 h-8 rounded-full" />
        </div>
        <p className="text-gray-500 text-xs pb-4">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Petani Kode</span> • Made with <span className="text-red-400">❤️</span> using Hugo 0.134.0
        </p>
      </div>
    </footer>
  );
}

export default Footer;





