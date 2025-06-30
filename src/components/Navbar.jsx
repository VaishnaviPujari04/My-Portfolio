import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">
          <span className="text-yellow-400">PORT</span>FOLIO
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#academics" className="hover:text-yellow-400">Academics</a>
          <a href="#skills" className="hover:text-yellow-400">Skills</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-900 space-y-6 py-6">
          <a onClick={closeMenu} href="#home" className="text-lg hover:text-yellow-400">Home</a>
          <a onClick={closeMenu} href="#academics" className="text-lg hover:text-yellow-400">Academics</a>
          <a onClick={closeMenu} href="#skills" className="text-lg hover:text-yellow-400">Skills</a>
          <a onClick={closeMenu} href="#projects" className="text-lg hover:text-yellow-400">Projects</a>
          <a onClick={closeMenu} href="#contact" className="text-lg hover:text-yellow-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
