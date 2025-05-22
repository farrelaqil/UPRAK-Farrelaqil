import React from 'react';
import { motion } from 'framer-motion';
import twitter from '../assets/twitter.svg'; 
import ig from '../assets/ig.svg'; 
import yt from '../assets/yt.svg'; 
import kode from '../assets/logoabu2.png'; 

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row justify-between gap-y-8 gap-x-12 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Kiri: Logo dan Deskripsi */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={kode} alt="Farrel Aqil Logo" className="w-28 sm:w-32 mb-4" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              By creating my own personal website, I aim to showcase my independence, technical skills, and creativity in building a digital identity.
            </p>
          </motion.div>

          {/* Kanan: Ikon Media Sosial */}
          <motion.div 
            className="text-left lg:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm mb-4 font-medium">My Social Media</p>
            <div className="flex flex-wrap justify-start lg:justify-end gap-3 sm:gap-4">
              {[ 
  { href: "https://x.com/thedaaaq", img: twitter, alt: "Twitter", color: "#1DA1F2" },
  { href: "https://www.instagram.com/thedaa.aq/", img: ig, alt: "Instagram", color: "#C13584" },
  { href: "https://www.youtube.com/@Thedaaaq", img: yt, alt: "YouTube", color: "#FF0000" }
].map((item, idx) => (
  <motion.a 
    key={idx}
    href={item.href} 
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, backgroundColor: item.color }}
    whileTap={{ scale: 0.95 }}
    className="rounded-full"
    style={{ display: 'inline-block', borderRadius: '9999px' }}
  >
    <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full transition duration-200 bg-transparent">
      <img src={item.img} alt={item.alt} className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
  </motion.a>
))}

            </div>
          </motion.div>
        </motion.div>

        {/* Bawah: Copyright */}
        <motion.div 
          className="text-center mt-6 border-t border-gray-700 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} <span className="font-semibold">Farrel Aqil</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
