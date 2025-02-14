import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
// import ProductList from "../components/ProductList";
import Sponsors from "../components/Sponsors";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import FeaturedSkeleton from '../components/FeaturedSkeleton';
import CategoriesSkeleton from '../components/CategoriesSkeleton';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="relative bg-cover bg-center" >
      <HeroSection />
      <Sponsors />
      {isLoading ? <CategoriesSkeleton /> : <Categories />}
      {isLoading ? <FeaturedSkeleton /> : <Featured />}
    </div>
  );
};

export default HomePage;