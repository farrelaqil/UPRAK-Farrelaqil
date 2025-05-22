import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import gambar from '../assets/bghero.png';

function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gray-800 text-white min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${gambar})`, backgroundAttachment: 'fixed' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-16">
          <motion.div
            className="md:w-2/3 lg:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <Typewriter
                words={['Farrel Aqil']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I am a student majoring in Software and Game Development with a strong passion for design,
              particularly in UI/UX and graphic design. I enjoy creating visually appealing and user-friendly
              interfaces, and I am always eager to learn new tools and trends in the design world to improve
              my skills and bring creative ideas to life.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <a
                href="https://youtu.be/KWjnoqoX5oE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-800 text-white py-3 px-6 rounded-md text-lg text-center transition duration-300"
              >
                Portofolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
