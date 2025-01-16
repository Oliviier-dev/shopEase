import React from "react";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.price}</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
