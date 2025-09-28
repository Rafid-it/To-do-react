import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">To-Do App</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-400 transition duration-200">
            Home
          </Link>
          <Link to="/todo" className="text-white hover:text-blue-400 transition duration-200">
            To-Do
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          <Link
            to="/"
            className="text-white hover:text-blue-400 transition duration-200 px-4 py-2"
            onClick={() => setIsOpen(false)}
            aria-label="Go to Home page"
          >
            Home
          </Link>
          <Link
            to="/todo"
            className="text-white hover:text-blue-400 transition duration-200 px-4 py-2"
            onClick={() => setIsOpen(false)}
            aria-label="Go to To-Do page"
          >
            To-Do
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;