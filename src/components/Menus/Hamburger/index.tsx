'use client';

import React, { useState } from 'react';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        id="hamburger-menu"
        className={`flex flex-col justify-center items-center w-12 h-12 rounded-full bg-color-yellow-pattern text-black cursor-pointer mx-4`}
        onClick={handleMenuClick}
      >
        <div className="w-6 h-1 bg-black rounded-full mb-1.5 transition-opacity duration-300 opacity-100 hover:opacity-50"></div>
        <div className="w-6 h-1 bg-black rounded-full mb-1.5 transition-opacity duration-300 opacity-100 hover:opacity-50"></div>
        <div className="w-6 h-1 bg-black rounded-full transition-opacity duration-300 opacity-100 hover:opacity-50"></div>
      </div>

      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-fit bg-black bg-opacity-90 z-50 transition-transform duration-1000 transform ${
            isOpen ? 'translate-y-0' : 'translate-y-100'
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white z-50">
            <button
              className="absolute top-0 right-0 w-8 h-8 text-4xl text-white text-opacity-75 font-bold cursor-pointer"
              onClick={handleCloseClick}
            >
              &times;
            </button>
            <ul>
              <li className="bg-gray-700 text-color-yellow-pattern bg-opacity-100 text-2xl font-bold text-center py-4 border-b border-gray-300">
                <a href="#">Home</a>
              </li>
              <li className="bg-gray-700 text-color-yellow-pattern bg-opacity-95 text-2xl font-bold text-center py-4 border-b border-gray-300">
                <a href="#">About</a>
              </li>
              <li className="bg-gray-700 text-color-yellow-pattern bg-opacity-95 text-2xl font-bold text-center py-4 border-b border-gray-300">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
