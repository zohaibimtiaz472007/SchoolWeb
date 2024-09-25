import React from 'react';
import { motion } from 'framer-motion';

const TeamMember = ({ name, position, image }) => (
  <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 transition-transform transform hover:scale-105">
    <img className="w-full h-48 object-cover" src={image} alt={name} />
    <div className="p-4">
      <h3 className="text-xl font-bold text-teal-400">{name}</h3>
      <p className="text-gray-300">{position}</p>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Principal',
      image: 'path/to/image1.jpg',
    },
    {
      name: 'Jane Smith',
      position: 'Math Teacher',
      image: 'path/to/image2.jpg',
    },
    {
      name: 'Emily Johnson',
      position: 'Science Teacher',
      image: 'path/to/image3.jpg',
    },
    // Add more members as needed
  ];

  return (
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-black py-16">
      {/* Scrolling News Bar */}
      <div className="absolute top-0 w-full overflow-hidden bg-gray-900">
        <div className="flex animate-scroll whitespace-nowrap py-3 text-white">
          <p className="mx-4 text-lg font-semibold">Meet Our Dedicated Team | Leaders in Innovation</p>
          <p className="mx-4 text-lg font-semibold">Committed to Excellence | Building Tomorrow's Future</p>
        </div>
      </div>

      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Team
      </motion.h2>

      <motion.p
        className="mt-8 max-w-2xl text-center text-xl leading-relaxed text-gray-300"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        Our team consists of passionate professionals committed to shaping the future of education and technology.
        Together, we inspire, innovate, and lead.
      </motion.p>

      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </motion.div>

      <motion.div
        className="mt-12 flex gap-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <button className="px-6 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-400 transition-all">
          Learn More About Us
        </button>
        <button className="px-6 py-2 rounded-full bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all">
          Contact Our Team
        </button>
      </motion.div>
    </section>
  );
};

export default Team;
