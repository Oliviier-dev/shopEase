import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItemCount = 0;

  useEffect(() => {
    const cookies = document.cookie.split("; ").reduce(
      (acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
      },
      {} as Record<string, string>,
    );

    setIsLoggedIn(!!cookies.token);
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">shopEase</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-600">
            Products
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="relative text-gray-600 hover:text-blue-600"
              >
                <FaShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
