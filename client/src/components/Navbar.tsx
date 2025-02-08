import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

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

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav className="bg-opacity-5 shadow-md p-6 z-40 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-14">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300"
          >
            shopEase
          </Link>

          <div className="hidden md:flex gap-4 text-white">
            {[
              { path: "/shop", label: "EVERYTHING" },
              { path: "/accessories", label: "ACCESSORIES" },
              { path: "/clothes", label: "CLOTHES" },
              { path: "/books", label: "BOOKS" },
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
            className="relative hidden md:block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaUser className="w-6 h-6 text-white cursor-pointer transition-all duration-300 hover:text-gray-300" />

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white shadow-md rounded-lg z-50">
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

          <div className="md:hidden">
            <FaBars
              className="w-6 h-6 text-white cursor-pointer"
              onClick={toggleNav}
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white transform transition-transform duration-300 ease-in-out ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-6">
          <FaTimes
            className="w-6 h-6 text-gray-700 cursor-pointer float-right"
            onClick={closeNav}
          />
          <div className="mt-36 flex flex-col items-center">
            {[
              { path: "/shop", label: "EVERYTHING" },
              { path: "/accessories", label: "ACCESSORIES" },
              { path: "/clothes", label: "CLOTHES" },
              { path: "/phones", label: "BOOKS" },
              { path: "/login", label: "Log In" },
              { path: "/signup", label: "Sign Up" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 w-full text-center mt-4"
                onClick={closeNav}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isNavOpen && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-40"
          onClick={closeNav}
        />
      )}
    </nav>
  );
};

export default Navbar;