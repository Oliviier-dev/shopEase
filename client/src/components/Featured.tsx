import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import bgImage1 from "../assets/premium_photo-1675186049366-64a655f8f537.avif";
import bgImage2 from "../assets/premium_photo-1677187301660-5e557d9c0724.avif";

const products = [
  { id: 1, name: 'Product 1', price: '$20', category: 'Category A', image: bgImage1 },
  { id: 2, name: 'Product 2', price: '$30', category: 'Category B', image: bgImage2 },
  { id: 3, name: 'Product 3', price: '$25', category: 'Category A', image: bgImage1 },
  { id: 4, name: 'Product 4', price: '$15', category: 'Category C', image: bgImage2 },
  { id: 5, name: 'Product 5', price: '$40', category: 'Category B', image: bgImage1 },
  { id: 6, name: 'Product 6', price: '$50', category: 'Category A', image: bgImage2 },
  { id: 7, name: 'Product 7', price: '$35', category: 'Category C', image: bgImage1 },
  { id: 8, name: 'Product 8', price: '$60', category: 'Category B', image: bgImage2 },
  { id: 9, name: 'Product 9', price: '$45', category: 'Category A', image: bgImage1 },
  { id: 10, name: 'Product 10', price: '$55', category: 'Category C', image: bgImage2 },
];

const Featured: React.FC = () => {
  return (
    <div className="bg-[#F6F7F9] w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <div className="w-24 mx-auto h-1 bg-[#0084D6]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="group rounded-lg overflow-hidden"
            >
              <div className="w-full h-56 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-[#0084D6]">{product.price}</p>
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

export default Featured;