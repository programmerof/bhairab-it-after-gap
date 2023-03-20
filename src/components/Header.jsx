import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <nav className="bg-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <a
              className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-bold shadow-md"
              href="#"
            >
              Bhairab IT Solution
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <a
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md mx-2"
                href="#"
              >
                Home
              </a>
              <a
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md mx-2"
                href="services.html"
              >
                Services
              </a>
              <a
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md mx-2"
                href="aboutus.html"
              >
                About Us
              </a>
              <a
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md mx-2"
                href="profile.html"
              >
                Contact Us
              </a>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-2 py-1 rounded-md text-sm font-medium shadow-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              href="#"
            >
              Home
            </a>
            <a
              className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
              href="services.html"
            >
              Services
            </a>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header