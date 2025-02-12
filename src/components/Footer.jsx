import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Left Section: Logos */}
      <div className="flex items-center space-x-4">
        {/* Foodpanda Logo */}
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSglwTVFRtnc64NyUM4sxS07rK90An49C9xjw&s"
            alt="Foodpanda Logo"
            className="h-8 w-8 rounded-lg"
          />
          <span className="ml-2 text-pink-500 font-bold text-xl">
            foodpanda
          </span>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300"></div>

        {/* Delivery Hero Logo */}
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAvSrbn6IQPKQBq-inSXktNPQeYQZNkIaXg&s"
            alt="Delivery Hero Logo"
            className="h-8 w-8"
          />
          <span className="ml-2 text-red-500 font-bold text-xl">
            Delivery Hero
          </span>
        </div>
      </div>

      {/* Right Section: Social Icons */}
      <div className="flex items-center space-x-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-500"
        >
          <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
