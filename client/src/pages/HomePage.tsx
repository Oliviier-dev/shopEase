import React from "react";
import HeroSection from "../components/HeroSection";
import bgImage from "../assets/home-new-bg-free-img.jpg";
import ProductMarquee from "../components/ProductMarquee";
import ProductList from "../components/ProductList";


const HomePage: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <HeroSection />
      {/* <div className="px-4 pt-6 flex flex-col lg:flex-row gap-6 justify-between font-outfit">
        <div className="pt-4 pl-12 max-tablet:pl-2 flex flex-col justify-center lg:w-1/2">
          <h1 className="text-6xl font-bold max-tablet:text-2xl">Store.</h1>
          <h2 className="text-3xl text-slate-500 mt-4 max-laptop:text-xl max-tablet:text-lg">
            The best way to buy the products you love.
          </h2>
          <div className="mt-6 w-fit">
            <button className="bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800">
              <Link to="/shop" className="flex items-center gap-2 text-lg">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 hidden group-hover:block transition-all ease-in-out duration-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center lg:w-1/2">
          <HeroShowProduct />
        </div>
      </div> */}

      {/* <div className="mt-8">
        <ProductMarquee />
      </div> */}

      {/* <div className="mt-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Shop All Latest Offers and Innovations
        </h2>
        <ProductList />
      </div> */}
    </div>
  );
};

export default HomePage;