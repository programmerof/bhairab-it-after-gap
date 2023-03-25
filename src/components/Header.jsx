import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight ml-2 hidden sm:block">
          Bhairab IT Solutions
        </span>
      </div>
      <div className="block sm:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-500 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 14H3V10H17V14ZM17 8H3V4H17V8ZM3 15H17V17H3V15Z"
                fill="white"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3H20V5H0V3ZM0 9H20V11H0V9ZM0 15H20V17H0V15Z"
                fill="white"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"
          } w-full block flex-grow sm:flex sm:items-center sm:w-auto`}
      >
        <div className="flex text-sm sm:flex-grow">

          <div className="sm:hidden">
          <Link
                  to="/intro"
                  className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex"
                >
                  Home
                </Link>

                <Link
                  to="/services"
                  className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex"
                >
                  Services
                </Link>

                <Link
                to="/aboutus"
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex" >About us</Link>
                

                <Link
                  to="/team"
                  className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex"
                >
                  Contact us
                </Link>

                <Link
                to='/portfolio'
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex" >Work Portfolio</Link>

                <Link
                to='/socialmediaservice'
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex" >Social Media Service
                </Link>
          </div>

          <div className="hidden sm:flex sm:flex-row">
          <Link
                  to="/intro"
                  className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex"
                >
                  Home
                </Link>

                <Link
                  to="/services"
                  className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex"
                >
                  Services
                </Link>

                <Link
                to="/aboutus"
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex" >About us</Link>
                

                <Link
                  to="/team"
                  className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex"
                >
                  Contact us
                </Link>

                <Link
                to='/portfolio'
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex" >Work Portfolio</Link>

                <Link
                to='/socialmediaservice'
                className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex" >Social Media Service
                </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;
