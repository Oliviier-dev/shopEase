import React from "react";

const ProductSkeleton: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10">
      <div className="md:w-1/2">
        <div className="w-full h-[480px] bg-gray-200 animate-pulse"></div>
        <div className="flex mt-4 gap-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="w-20 h-20 bg-gray-200 mt-10 animate-pulse"
            ></div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded mt-2 animate-pulse"></div>
        <div className="h-6 w-1/4 bg-gray-200 rounded mt-2 animate-pulse"></div>

        <div className="h-4 w-full bg-gray-200 rounded mt-6 animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 rounded mt-2 animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 rounded mt-2 animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 rounded mt-2 animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded mt-2 animate-pulse"></div>

        <div className="mt-6 flex items-center gap-4">
          <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
