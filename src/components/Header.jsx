import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
    <nav className="flex items-center justify-between flex-wrap bg-blue-300 p-4 ">
      <div class="flex items-center flex-shrink-0 text-white mr-48">
        <a href="/">
          <img src="bhairabictlogo.png" alt="Bhairab IT Solutions logo" width="100" height="50"
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        </a>
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

          <div className="sm:hidden ">
          <Link
              to="/Home"
              className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Home
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/color/256/home-page.png" alt="Home" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to="/Ourservicesmain"
              className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Services
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/plasticine/256/services.png" alt="Services" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to="/aboutus"
              className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              About us
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-about-social-media-ui-tanah-basah-glyph-tanah-basah.png" alt="About Us" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to="/team"
              className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Contact us
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/256/external-contact-us-contact-us-flatart-icons-lineal-color-flatarticons.png" alt="Contact Us" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to='/portfolio'
              className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Work Portfolio
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/fluency/256/portfolio.png" alt="Work Portfolio" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>



            <Link
              to='/socialmediaservice'
              className="bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Social Media Service
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="\socialmediaicon\ig.png" alt="Instagram" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="\socialmediaicon\twitter.png" alt="Twitter" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="\socialmediaicon\ld.png" alt="LinkedIn" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="\socialmediaicon\tiktok.png" alt="TikTok" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="\socialmediaicon\fb.png" alt="Facebook" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>



          </div>

          {/* LAPTOP SCREEN  */}
          <div className="hidden sm:flex sm:flex-row  bg-red-500 rounded-xl ml-auto pt-2 pb-2 pl-2">

            <Link
              to="/Home"
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Home
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/color/256/home-page.png" alt="Home" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to="/Ourservicesmain"
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Services
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/plasticine/256/services.png" alt="Services" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to="/aboutus"
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              About us
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/256/external-about-social-media-ui-tanah-basah-glyph-tanah-basah.png" alt="About Us" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to="/team"
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Contact us
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/256/external-contact-us-contact-us-flatart-icons-lineal-color-flatarticons.png" alt="Contact Us" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to='/portfolio'
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Work Portfolio
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="https://img.icons8.com/fluency/256/portfolio.png" alt="Work Portfolio" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>



            <Link
              to='/socialmediaservice'
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Social Media Service
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
              <div>
                  <img src="\socialmediaicon\ig.png" alt="Instagram" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="\socialmediaicon\twitter.png" alt="Twitter" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="\socialmediaicon\ld.png" alt="LinkedIn" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="\socialmediaicon\tiktok.png" alt="TikTok" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="\socialmediaicon\fb.png" alt="Facebook" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;