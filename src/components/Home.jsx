import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import headerImage from '../assets/header_img.png';

const Home = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-10 md:min-h-screen">

      {/* Left Content */}
      <motion.div
        className="text-center md:text-left md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Hi, I'm{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
            <Typewriter
              words={['Vaishnavi', 'Web Developer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-lg text-gray-700 max-w-xl mb-8 mx-auto md:mx-0">
          I am a passionate Web Developer with a strong foundation in HTML, CSS, JavaScript, Tailwind CSS, and React.js.
          I specialize in creating responsive, user-friendly interfaces and love turning ideas into interactive web experiences.
          With hands-on experience in building real-world projects.
        </p>

        <a
          href="/VaishnaviResume.pdf"
          download
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded shadow-md transition"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Right: Astronaut Image */}
      <motion.div
        className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.img
          src={headerImage}
          alt="Astronaut"
          className="w-72 md:w-80 h-auto object-contain drop-shadow-xl hover:scale-105 transition duration-300"
          whileHover={{ scale: 1.08 }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
