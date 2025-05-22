import React from 'react';
import { motion } from 'framer-motion';
import gambar1 from '../assets/Design logo.png';
import gambar2 from '../assets/Design Hp.jpg';
import gambar3 from '../assets/desktop.png';
import icon1 from '../assets/ok.svg';
import icon2 from '../assets/chat.svg';
import icon3 from '../assets/manage.svg';

function Content() {
  const projectCards = [
    {
      image: gambar1,
      title: 'Logo Design',
      description: 'Designing attractive and representative logos for digital brands.',
    },
    {
      image: gambar2,
      title: 'Mobile UI Design',
      description: 'Creating user-friendly and modern mobile interface designs.',
    },
    {
      image: gambar3,
      title: 'Desktop App Design',
      description: 'Designing desktop applications with optimal user experience.',
    },
  ];

  const valueCards = [
    {
      icon: icon1,
      title: 'Communicative',
      description:
        'I communicate what I struggle to make all crystal clear. I can communicate my ideas well.',
    },
    {
      icon: icon2,
      title: 'Collaborative',
      description:
        'I can work within a team, collaborate well with developers because I’m frontend myself, and I love feedbacks.',
    },
    {
      icon: icon3,
      title: 'Time Management',
      description:
        'I take pride in delivering quality work well before deadlines. You won’t have to wait or worry.',
    },
  ];

  return (
    <section id="content" className="py-12 px-4 sm:px-6 md:px-8 lg:px-10 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Project 🔥
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-3 text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Some of the designs I have worked on in the fields of UI/UX and graphic design.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projectCards.map((card, index) => (
          <motion.div
            key={index}
            className="rounded-xl bg-white text-gray-800 shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm sm:text-base leading-relaxed">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My positive traits 😁
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueCards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md border border-gray-200 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;