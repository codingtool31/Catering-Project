import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Make sure you add your logo image

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="flex items-center space-x-6">
        <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Logo */}
        <ul className="flex ml-auto space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-gray-400 transition duration-300">Menu</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-gray-400 transition duration-300">Events</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
