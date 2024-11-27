"use client"; // Make sure to add this for client-side rendering

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for `useRouter` in Next.js

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter for redirection

  // Handle logout functionality
  const logout = () => {
    // Clear user session (e.g., remove from localStorage or state)
    localStorage.removeItem('user');
    console.log("User logged out");

    // Redirect to the home or login page
    router.push('/login');  // Redirect to login page (you can change this if needed)
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-white text-2xl font-bold transition-transform transform hover:scale-105">
          <a href="/">MyCyberLabs</a>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-1 mx-10 justify-center space-x-8">
          {['Courses', 'Live Classes', 'Resources', 'Our Solution', 'Engage'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-105"
            >
              {item}
            </a>
          ))}
          <button>
            <a
              href="/signup"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-400 transition duration-300"
            >
              Sign Up
            </a>
          </button>
        </div>

        {/* Mobile Menu Button and Search Bar */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? '✖️' : '☰'}
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 p-1 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-20"
          />
        </div>

        {/* Right: Search Bar with Icon (Desktop) */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2">
            <span className="text-white">🔍</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 rounded-lg shadow-lg mt-2">
          <div className="flex flex-col items-center p-4">
            {['Courses', 'Live Classes', 'Resources', 'Our Solution', 'Engage'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white hover:text-blue-400 transition duration-200 py-2"
              >
                {item}
              </a>
            ))}

            {/* Logout Button */}
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-400 transition duration-300 mt-4"
            >
              Logout
            </button>

            {/* Sign Up Button */}
            <a
              href="/signup"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-400 transition duration-300 mt-4"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
