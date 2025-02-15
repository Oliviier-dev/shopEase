import React from "react";

const CartSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((_, index) => (
        <div key={index} className="flex items-center gap-5">
          <div className="w-12 h-12 bg-gray-300 rounded"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
          <div className="w-5 h-5 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default CartSkeleton;
