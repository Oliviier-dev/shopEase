import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaTags, FaLock } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import promotionImage from "../assets/store-card-40-watch-s9-202309.jpeg";

const PromotionSection: React.FC = () => {
  return (
    <div className="bg-white">
      {" "}
      <div className="max-w-6xl py-14 mx-auto px-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-600 uppercase tracking-wider">
              Limited Time Offer
            </h3>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Special Edition
            </h2>
            <p className="text-gray-600 text-lg">
              Upgrade your workspace with our Smart Widget. It offers seamless
              integration, real-time updates, and boosts your productivity.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-2xl font-bold text-[#0084D6]">
                Get 20% Off the Smart Widget Today!
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-block px-8 py-3 bg-[#0084D6] text-white font-semibold shadow-md hover:bg-[#006bb3] transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={promotionImage}
              alt="Special Edition T-shirt"
              className="w-full max-w-sm shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F6F7F9] w-full py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <GiWorld className="text-4xl text-black mx-auto" />
            <h3 className="font-semibold text-lg text-black mt-4">
              Worldwide Shipping
            </h3>
            <p className="text-sm text-black mt-2 max-w-xs mx-auto">
              We offer fast and reliable shipping services worldwide, ensuring
              that your order reaches you wherever you are.
            </p>
          </div>

          <div className="text-center">
            <FaShieldAlt className="text-4xl text-black mx-auto" />
            <h3 className="font-semibold text-lg text-black mt-4">
              Best Quality
            </h3>
            <p className="text-sm text-black mt-2 max-w-xs mx-auto">
              Our products are crafted with the highest quality standards,
              ensuring durability and long-lasting performance.
            </p>
          </div>

          <div className="text-center">
            <FaTags className="text-4xl text-black mx-auto" />
            <h3 className="font-semibold text-lg text-black mt-4">
              Best Offers
            </h3>
            <p className="text-sm text-black mt-2 max-w-xs mx-auto">
              Enjoy exclusive deals and discounts on the latest products. We
              provide the best offers to bring you more value.
            </p>
          </div>

          <div className="text-center">
            <FaLock className="text-4xl text-black mx-auto" />
            <h3 className="font-semibold text-lg text-black mt-4">
              Secure Payments
            </h3>
            <p className="text-sm text-black mt-2 max-w-xs mx-auto">
              Your transactions are fully secure with us. We use the latest
              encryption technologies to protect your payment information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;
