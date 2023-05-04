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
          <img src="/assets/bhairabictlogo.png" alt="Bhairab IT Solutions logo" width="100" height="50"
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
              to="/showwork"
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Work Showcase
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="/assets/showcase.png" alt="Services" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to='/blog'
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Blog
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="data:image/png;base64,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" alt="Work Portfolio" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <div className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md">
              <div className="flex flex-col items-center">
                <div className="mb-2">Social Media Service</div>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <a href="https://www.instagram.com/bhairabictsolution/" target="_blank">
                  <img src="/assets\socialmediaicon\ig.png" alt="Instagram" className="w-6 h-6 my-2" />
                </a>
                <a href="https://twitter.com" target="_blank">
                  <img src="/assets\socialmediaicon\twitter.png" alt="Twitter" className="w-6 h-6 my-2" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <img src="/assets\socialmediaicon\ld.png" alt="LinkedIn" className="w-6 h-6 my-2" />
                </a>
                <a href="https://www.tiktok.com/@bhairabictsolution1" target="_blank">
                  <img src="/assets\socialmediaicon\tiktok.png" alt="TikTok" className="w-6 h-6 my-2" />
                </a>
                <a href="https://www.facebook.com/BhairabICTS" target="_blank">
                  <img src="/assets\socialmediaicon\fb.png" alt="Facebook" className="w-6 h-6 my-2" />
                </a>
              </div>
            </div>



          </div>

          {/* LAPTOP SCREEN  */}
          <div className="hidden sm:flex sm:flex-row  bg-blue-400 rounded-xl ml-auto pt-2 pb-2 pl-2">

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
              to="/showwork"
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Work Showcase
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="/assets/showcase.png" alt="Services" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>

            <Link
              to='/blog'
              className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md flex flex-col items-center"
            >
              Blog
              <br />
              <div class="flex flex-row justify-center items-center gap-2">
                <div>
                  <img src="data:image/png;base64,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" alt="Work Portfolio" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>



            <div className="mr-4 bg-gray-800 text-gray-100 hover:text-gray-50 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium shadow-md">
              <div className="flex flex-col items-center">
                <div className="mb-2">Social Media Service</div>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <a href="https://www.instagram.com/bhairabictsolution/" target="_blank">
                  <img src="/assets\socialmediaicon\ig.png" alt="Instagram" className="w-6 h-6 my-2" />
                </a>
                <a href="https://twitter.com" target="_blank">
                  <img src="/assets\socialmediaicon\twitter.png" alt="Twitter" className="w-6 h-6 my-2" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <img src="/assets\socialmediaicon\ld.png" alt="LinkedIn" className="w-6 h-6 my-2" />
                </a>
                <a href="https://www.tiktok.com/@bhairabictsolution1" target="_blank">
                  <img src="/assets\socialmediaicon\tiktok.png" alt="TikTok" className="w-6 h-6 my-2" />
                </a>
                <a href="https://www.facebook.com/BhairabICTS" target="_blank">
                  <img src="/assets\socialmediaicon\fb.png" alt="Facebook" className="w-6 h-6 my-2" />
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;