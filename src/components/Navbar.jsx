import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gray-900 text-white fixed top-0 w-full shadow-lg z-50">
      <div className="text-2xl font-bold">
        <span className="text-yellow-400">PORT</span>FOLIO
      </div>
      <div className="space-x-8 text-lg hidden md:flex">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#academics" className="hover:text-yellow-400">Academics</a>
        <a href="#skills" className="hover:text-yellow-400">Skills</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
