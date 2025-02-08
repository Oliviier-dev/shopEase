import { Link } from "react-router-dom";
import bgImage from "../assets/home-new-bg-free-img.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[55vh] md:min-h-[calc(100vh-80px)] flex items-center font-lato before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#2c5a73] before:via-[#1B5C7E]/60 before:to-[#2c5a73]/30 before:opacity-70"
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container mx-auto flex items-center justify-center md:justify-start relative z-10 pt-0">
        <div className="max-w-lg text-white text-center md:text-left mx-4 md:ml-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Raining Offers For
            <span className="block text-4xl md:text-6xl mt-2">Hot Summer!</span>
          </h1>
          <p className="text-lg md:text-2xl my-4">25% Off On All Products</p>

          <Link
            to="/shop"
            className="inline-block mt-6 w-full md:w-auto px-6 py-3 bg-white text-black font-semibold shadow-md transition-all duration-300 hover:bg-black hover:text-white"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
