import React from 'react';
import gambar from '../assets/petani.png';

function Hero() {
  return (
    <section id="hero" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
       
        <div className="md:w-2/3 lg:w-1/2 text-center md:text-left mb-10 md:mb-0 md:ml-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Petani Kode</h1>
          <p className="text-xl md:text-2xl font-light mb-6">
            Belajar budidaya kode <i>(coding)</i> dengan tutorial yang mudah dipahami. <i>Mostly</i> pakai Linux.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md text-lg">
              Mulai Belajar
            </button>
            <button className="border border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white py-3 px-6 rounded-md text-lg">
              Join Newsletter
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src={gambar} alt="Petani" className="max-w-xs md:max-w-md" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
