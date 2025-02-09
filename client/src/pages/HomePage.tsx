import React from "react";
import HeroSection from "../components/HeroSection";
import ProductList from "../components/ProductList";
import Sponsors from "../components/Sponsors";

const HomePage: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center" >
      <HeroSection />
      <Sponsors/>
      <div className="px-4 pb-20 h-auto bg-white">
        <h2 className="text-4xl font-bold text-center mb-8">
          Shop All Latest Offers and Innovations
        </h2>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;