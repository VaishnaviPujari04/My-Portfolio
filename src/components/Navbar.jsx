import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => setNavOpen(!navOpen);
  const closeMenu = () => setNavOpen(false);

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-gray-900 text-white fixed top-0 w-full shadow-lg z-50">
      <div className="text-2xl font-bold">
        <span className="text-yellow-400">PORT</span>FOLIO
      </div>

      {/* Desktop Links */}
      <div className="space-x-8 text-lg hidden md:flex">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#academics" className="hover:text-yellow-400">Academics</a>
        <a href="#skills" className="hover:text-yellow-400">Skills</a>
        <a href="#projects" className="hover:text-yellow-400">Projects</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-6 py-6 md:hidden shadow-lg transition-all duration-300 z-40">
          <a href="#home" onClick={closeMenu} className="text-lg hover:text-yellow-400">Home</a>
          <a href="#academics" onClick={closeMenu} className="text-lg hover:text-yellow-400">Academics</a>
          <a href="#skills" onClick={closeMenu} className="text-lg hover:text-yellow-400">Skills</a>
          <a href="#projects" onClick={closeMenu} className="text-lg hover:text-yellow-400">Projects</a>
          <a href="#contact" onClick={closeMenu} className="text-lg hover:text-yellow-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
