import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 ">
      <div class="flex items-center flex-shrink-0 text-white mr-48">
        <a href="/">
          <img src="public\assets\bhairabictlogo.png" alt="Bhairab IT Solutions logo" width="100" height="50"
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
              to="/intro"
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
              to="/services"
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
                  <img src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png" alt="Instagram" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/122/PNG/512/twitter_socialnetwork_20007.png" alt="Twitter" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png" alt="LinkedIn" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/2972/PNG/512/tiktok_logo_icon_186896.png" alt="TikTok" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/3658/PNG/512/meta_fb_communication_social_media_katana_facebook_icon_228415.png" alt="Facebook" class="w-6 h-6 my-2" />
                </div>
              </div>
            </Link>



          </div>

          {/* LAPTOP SCREEN  */}
          <div className="hidden sm:flex sm:flex-row">

            <Link
              to="/intro"
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
              to="/services"
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
                  <img src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721672-instagram_108066.png" alt="Instagram" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/122/PNG/512/twitter_socialnetwork_20007.png" alt="Twitter" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png" alt="LinkedIn" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/2972/PNG/512/tiktok_logo_icon_186896.png" alt="TikTok" class="w-6 h-6 my-2" />
                </div>
                <div>
                  <img src="https://cdn.icon-icons.com/icons2/3658/PNG/512/meta_fb_communication_social_media_katana_facebook_icon_228415.png" alt="Facebook" class="w-6 h-6 my-2" />
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