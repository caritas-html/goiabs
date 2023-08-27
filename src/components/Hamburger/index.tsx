import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-full flex items-center justify-center mx-4 w-6">
      <button
        className="text-primary hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={toggleMenu}
      >
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-0 w-screen h-screen glass shadow-lg z-50">
          <div className="flex justify-around align-middle flex-col h-48">
            <button
              className="absolute top-9 right-6 text-white font-black hover:text-gray-900 focus:outline-none focus:text-gray-900"
              onClick={closeMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="#"
              className="h-16 divide-yellow-200 flex justify-center align-middle text-3xl px-4 mt-48 py-3 text-primary hover:bg-gray-100 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="h-16 divide-yellow-200 flex justify-center align-middle text-3xl px-4 py-3 text-primary hover:bg-gray-100 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="h-16 divide-yellow-200 flex justify-center align-middle text-3xl px-4 py-3 text-primary hover:bg-gray-100 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
