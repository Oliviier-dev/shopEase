import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center font-lato"
      style={{
        backgroundAttachment: "fixed",
        zIndex: 10,
      }}
    >
      <div
        className="absolute inset-0 bg-[#1B5C7E] bg-opacity-30"
        style={{ zIndex: 11 }}
      ></div>
      <div className="container mx-auto flex items-center relative z-20 pt-0">
        <div className="max-w-lg text-white ml-10">
          <h1 className="text-6xl font-bold leading-tight">
            Raining Offers For 
            <span className="block text-6xl mt-2">Hot Summer!</span>
          </h1>
          <p className="text-2xl my-4">25% Off On All Products</p>

          <Link
            to="/shop"
            className="inline-block mt-6 px-6 py-3 bg-white text-[#2a6e9d] font-semibold shadow-md transition-all duration-300 hover:bg-black hover:text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
  
};

export default HeroSection;
