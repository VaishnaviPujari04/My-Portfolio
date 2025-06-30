import React from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: '2020',
    title: 'SSLC',
    place: 'Shri Siddhanath Vidyalaya, Kharsundi',
    score: '94.20%',
    side: 'left',
  },
  {
    year: '2023',
    title: 'Diploma',
    place: 'Government Residence Women Polytechnic, Tasgaon',
    score: '88.51%',
    side: 'right',
  },
  {
    year: '2023\nOngoing',
    title: 'B-tech CSE',
    place: 'RIT College, Uran Islampur, Maharashtra',
    score: '8.38 CGPA',
    side: 'left',
  },
];

const Timeline = () => {
  return (
    <section id="academics" className="w-full bg-gradient-to-r from-white via-[#f6ebff] to-[#d9bfff] py-20 px-4 md:px-10">
      {/* Section Title */}
      <motion.h2
        className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400 mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Academics
      </motion.h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black" />

        {/* Timeline items */}
        <div className="space-y-20 relative z-10">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center w-full">
              {item.side === 'left' ? (
                <>
                  <motion.div
                    className="w-[45%] bg-white p-6 rounded-md shadow-md"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-[#183D3D]">{item.title}</h3>
                    <p className="text-gray-600">{item.place}</p>
                    <p className="text-gray-700 mt-1">{item.score}</p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col items-center w-[10%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-20 h-20 rounded-full border-2 border-black bg-[#f6ebff] z-20 relative flex items-center justify-center text-sm text-black text-center whitespace-pre-line">
                      {item.year}
                    </div>
                    <div className="w-[2px] h-6 bg-black" />
                  </motion.div>

                  <div className="w-[45%]" />
                </>
              ) : (
                <>
                  <div className="w-[45%]" />

                  <motion.div
                    className="flex flex-col items-center w-[10%]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-20 h-20 rounded-full border-2 border-black bg-[#f6ebff] z-20 relative flex items-center justify-center text-sm text-black text-center whitespace-pre-line">
                      {item.year}
                    </div>
                    <div className="w-[2px] h-6 bg-black" />
                  </motion.div>

                  <motion.div
                    className="w-[45%] bg-white p-6 rounded-md shadow-md"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-[#183D3D]">{item.title}</h3>
                    <p className="text-gray-600">{item.place}</p>
                    <p className="text-gray-700 mt-1">{item.score}</p>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
