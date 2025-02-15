import React from "react";

const RecommendedProductsSkeleton: React.FC = () => {
  return (
    <div className="bg-[#F6F7F9] w-full h-full pt-12 pb-20">
      <div className="w-[80%] sm:w-[86%] mx-auto">
        <h2 className="text-2xl font-semibold mb-6">You may also like</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="group overflow-hidden">
              <div className="w-full h-96 sm:h-80 bg-gray-200 animate-pulse"></div>

              <div className="p-4">
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="flex items-center justify-between">
                  <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedProductsSkeleton;
