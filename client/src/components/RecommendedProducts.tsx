import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import bgImage1 from "../assets/premium_photo-1675186049366-64a655f8f537.avif";
import bgImage2 from "../assets/premium_photo-1677187301660-5e557d9c0724.avif";
import bgImage3 from "../assets/airpods-max-select-silver-202011.jpeg";
import bgImage4 from "../assets/store-card-40-ipad-pro-202405.jpeg";
import RecommendedProductsSkeleton from "./skeletons/RecommendedProductsSkeleton";

const recommendedProducts = [
  {
    id: 1,
    name: "Product 1",
    price: "$29.99",
    image: bgImage1,
  },
  {
    id: 2,
    name: "Product 2",
    price: "$39.99",
    image: bgImage2,
  },
  {
    id: 3,
    name: "Product 3",
    price: "$49.99",
    image: bgImage3,
  },
  {
    id: 4,
    name: "Product 4",
    price: "$59.99",
    image: bgImage4,
  },
];

const RecommendedProducts: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <RecommendedProductsSkeleton />;
  }

  return (
    <div className="bg-[#F6F7F9] w-full h-full pt-12 pb-20">
      <div className="w-[80%] sm:w-[86%] mx-auto">
        <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="group overflow-hidden">
              <Link to={`/product/${product.id}`}>
                <div className="w-full h-96 sm:h-80 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-[#0084D6]">
                    {product.price}
                  </p>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0084D6] hover:text-white transition-colors duration-300">
                    <FaShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
