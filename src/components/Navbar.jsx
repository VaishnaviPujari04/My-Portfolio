import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gray-900 text-white fixed top-0 w-full shadow-lg z-50">
      <div className="text-2xl font-bold">
        <span className="text-yellow-400">PORT</span>FOLIO
      </div>

      {/* Desktop Menu */}
      <div className="space-x-8 text-lg hidden md:flex">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#academics" className="hover:text-yellow-400">Academics</a>
        <a href="#skills" className="hover:text-yellow-400">Skills</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-6 py-6 md:hidden z-50">
          <a onClick={toggleMenu} href="#home" className="hover:text-yellow-400 text-lg">Home</a>
          <a onClick={toggleMenu} href="#academics" className="hover:text-yellow-400 text-lg">Academics</a>
          <a onClick={toggleMenu} href="#skills" className="hover:text-yellow-400 text-lg">Skills</a>
          <a onClick={toggleMenu} href="#projects" className="hover:text-yellow-400 text-lg">Projects</a>
          <a onClick={toggleMenu} href="#contact" className="hover:text-yellow-400 text-lg">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
