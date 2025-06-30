import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb, SiFirebase } from 'react-icons/si';

const skillsData = [
  { Icon: FaHtml5, label: 'HTML5', color: 'text-orange-600' },
  { Icon: FaCss3Alt, label: 'CSS3', color: 'text-blue-600' },
  { Icon: FaJs, label: 'JavaScript', color: 'text-yellow-500' },
  { Icon: FaReact, label: 'React JS', color: 'text-cyan-500' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
  { Icon: SiMysql, label: 'MySQL', color: 'text-blue-800' },
  { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-700' },
  { Icon: SiFirebase, label: 'Firebase', color: 'text-yellow-600' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-20 bg-gradient-to-r from-white via-[#f6ebff] to-[#d9bfff]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsData.map(({ Icon, label, color }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col items-center p-6 rounded-xl transition transform hover:scale-110 hover:shadow-xl`}
          >
            <Icon className={`text-8xl mb-4 ${color}`} />
            <p className="text-xl font-medium text-gray-800">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
