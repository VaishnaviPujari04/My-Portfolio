import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaUser, FaEnvelope } from 'react-icons/fa';
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatusMessage("✅ Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });

      // Clear message after 4 seconds
      setTimeout(() => setStatusMessage(""), 4000);

    } catch (error) {
      console.error("Error sending message: ", error);
      setStatusMessage("❌ Failed to send message. Please try again!");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gradient-to-r from-white via-[#f6ebff] to-[#d9bfff]">

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.div
        className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-xl shadow-lg p-12 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border w-full px-4 py-3 rounded focus:outline-none"
                required
              />
              <FaUser className="absolute top-3.5 right-3 text-gray-400" />
            </div>
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="border w-full px-4 py-3 rounded focus:outline-none"
                required
              />
              <FaEnvelope className="absolute top-3.5 right-3 text-gray-400" />
            </div>
          </div>
          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="border w-full px-4 py-3 rounded focus:outline-none"
            required
          ></textarea>
          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-orange-300 text-white font-semibold py-3 px-8 rounded shadow hover:scale-110 transform transition duration-300"
            >
              Submit
            </button>
            {statusMessage && (
              <p className={`text-sm font-medium ${
                statusMessage.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}>
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </motion.div>

      {/* Footer Info */}
      <motion.footer
        className="mt-16 text-center text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>Email: vaishnavipujari2712@gmail.com</p>
        <p>Mobile: +91 7020732367</p>
        <div className="flex justify-center space-x-6 text-2xl mt-4">
          <a href="https://github.com/VaishnaviPujari04" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vaishnavi-pujari-35b792228/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:vaishnavipujari2712@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <FaEnvelope />
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          © 2025 Vaishnavi Pujari™. All Rights Reserved.
        </p>
      </motion.footer>
    </section>
  );
};

export default Contact;
