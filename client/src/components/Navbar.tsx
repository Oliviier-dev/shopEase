import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import CartDrawer from "./CartDrawer";
import { logoutUser } from "../services/authServices";

const Navbar: React.FC = () => {
  const { isAuthenticated, setIsAuthenticated, setUserData } = useAuth();
  const navigate = useNavigate();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

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

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsAuthenticated(false);
      setUserData(null);
      navigate("/");
      toast.success("Logged out successfully!");

      // Close the dropdown immediately after logout
      setDropdownOpen(false);
    } catch (error: any) {
      toast.error("An error occurred, try again later");
    }
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
              { path: "/widgets", label: "WIDGETS" },
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
          <div
            className="relative text-white cursor-pointer"
            onClick={toggleCart}
          >
            <FaShoppingCart className="w-6 h-6 transition-all duration-300 hover:text-gray-300" />
          </div>

          <div
            className="relative hidden md:block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {!isAuthenticated ? (
              <>
                <FaUser className="w-6 h-6 text-white cursor-pointer transition-all duration-300 hover:text-gray-300" />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white shadow-md z-50">
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
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 text-lg font-medium hover:text-red-700 cursor-pointer"
              >
                <MdLogout className="w-5 h-5" />
                Logout
              </button>
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
              { path: "/widgets", label: "WIDGETS" },
              { path: "/clothes", label: "CLOTHES" },
              { path: "/phones", label: "BOOKS" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-gray-700 cursor-pointer w-full text-center mt-4"
                onClick={closeNav}
              >
                {link.label}
              </Link>
            ))}

            {!isAuthenticated ? (
              <>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-gray-700 cursor-pointer w-full text-center mt-4"
                  onClick={closeNav}
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-700 cursor-pointer w-full text-center mt-4"
                  onClick={closeNav}
                >
                  Log In
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  closeNav();
                }}
                className="block px-4 py-2 text-red-600 cursor-pointer w-full text-center mt-4"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />

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
