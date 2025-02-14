import React from "react";

const CategoriesSkeleton: React.FC = () => {
  return (
    <div className="py-10 bg-white mb-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg h-[400px] sm:h-[480px] bg-gray-200 animate-pulse"
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end items-start p-6">
                <div className="h-8 w-3/4 bg-gray-300 rounded mb-4 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-300 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-300 rounded mb-4 animate-pulse"></div>
                <div className="h-12 w-32 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSkeleton;