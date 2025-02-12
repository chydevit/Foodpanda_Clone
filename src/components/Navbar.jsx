import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSglwTVFRtnc64NyUM4sxS07rK90An49C9xjw&s"
          alt="Logo"
          className="h-8 w-8 rounded-lg"
        />
        <span className="ml-2 text-pink-500 font-bold text-xl">foodpanda</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={toggleUserDropdown}
            className="flex items-center text-gray-700 hover:text-pink-500"
          >
            <span>User</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center text-gray-700 hover:text-pink-500"
          >
            <span>EN</span>
            <svg
             className="w-4 h-4 ml-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" />
              <path d="M4 12h16M12 2c2.5 3 4 7 4 10s-1.5 7-4 10M12 2C9.5 5 8 9 8 12s1.5 7 4 10" />
            </svg>
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  French
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Spanish
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <button className="text-pink-500 hover:text-pink-700">
          <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
