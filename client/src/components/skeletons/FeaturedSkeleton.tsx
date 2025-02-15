import React from 'react';

const FeaturedSkeleton: React.FC = () => {
  return (
    <div className="bg-[#F6F7F9] w-full py-16">
      <div className="max-w-screen-xl mx-auto px-8 md:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <div className="w-24 mx-auto h-1 bg-[#0084D6]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[...Array(10)].map((_, index) => (
            <div 
              key={index} 
              className="group rounded-lg overflow-hidden"
            >
              <div className="w-full h-96 md:h-64 relative overflow-hidden bg-gray-300 animate-pulse"></div>

              <div className="p-4">
                <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
                <div className="flex items-center justify-between">
                  <div className="h-6 w-16 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-10 w-10 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSkeleton;