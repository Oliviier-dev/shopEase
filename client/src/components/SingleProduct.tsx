import React from "react";
import ProductDetail from "./ProductDetail";
import RecommendedProducts from "./RecommendedProducts";

const SingleProduct: React.FC = () => {
  return (
    <div>
      <ProductDetail />
      <RecommendedProducts />
    </div>
  );
};

export default SingleProduct;
