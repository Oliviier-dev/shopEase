import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  return (
    <nav className="bg-opacity-5 shadow-md p-6 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-14">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300"
          >
            shopEase
          </Link>

          <div className="flex gap-4 text-white">
            {[
              { path: "/shop", label: "EVERYTHING" },
              { path: "/accessories", label: "ACCESSORIES" },
              { path: "/clothes", label: "CLOTHES" },
              { path: "/phones", label: "BOOKS" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-2 py-1 transition-all font-medium duration-300 hover:text-gray-300"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative text-white">
            <FaShoppingCart className="w-6 h-6 transition-all duration-300 hover:text-gray-300" />
          </Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaUser className="w-6 h-6 text-white cursor-pointer transition-all duration-300 hover:text-gray-300" />

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white shadow-md rounded-lg">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
