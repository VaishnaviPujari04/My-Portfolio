import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    title: "Flipkart-Clone-Frontend-Project",
    image: project1,
    description:
      "An interactive and responsive frontend clone of India’s leading e-commerce platform — Flipkart. This project recreates the homepage, product listing, product detail pages, and cart functionalities with clean, modern UI using HTML, CSS, and JavaScript.",
    link: "https://github.com/VaishnaviPujari04/Flipkart-Clone-Frontend-Project",
    demo: "https://flipkart-clone-frontend-project.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather-Forecast Webapp",
    image: project2,
    description:
      "A real-time, responsive weather forecasting application built using the OpenWeatherMap API. Users can search any city to instantly view live weather conditions including temperature, wind speed, humidity, and intuitive weather icons.",
    link: "https://github.com/VaishnaviPujari04/weather-forecast-webapp",
    demo: "https://weather-forecast-webapp-theta.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
  },
  {
    title: "Meme-Generator",
    image: project3,
    description:
      "A feature-rich Meme Generator web app built with React, Tailwind CSS, Lucide Icons, and html2canvas. Users can upload images/videos, add draggable and color-customizable text boxes, draw or erase directly over images, and download memes in multiple formats.",
    link: "https://github.com/VaishnaviPujari04/Meme-Generator",
    demo: "https://meme-generator-omega-eight.vercel.app/",
    techStack: ["ReactJS", "Tailwind CSS", "html2canvas", "Lucide Icons"],
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-white via-[#f6ebff] to-[#d9bfff]"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-transparent bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-5 rounded-xl shadow-md flex flex-col min-h-[600px] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {project.title}
            </h3>

            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover rounded-lg mb-5 cursor-pointer"
              whileHover={{
                scale: 1.0,
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            />

            <p className="text-[15px] text-gray-700 mb-4 flex-grow leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{
                    backgroundColor: "#e0e7ff",
                    color: "#1e3a8a",
                    borderColor: "#93c5fd",
                  }}
                  transition={{ duration: 0.25 }}
                  className="text-sm font-medium border border-gray-300 px-3 py-1.5 rounded-full text-gray-800 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-between items-center mt-auto">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#1d4ed8" }}
                className="text-gray-800 text-[16px] font-semibold"
              >
                GitHub
              </motion.a>

              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ color: "#059669" }}
                  className="text-gray-800 text-[16px] font-semibold"
                >
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
