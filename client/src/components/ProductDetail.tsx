import React, { useState, useEffect } from "react";
import ProductSkeleton from "./ProductSkeleton";
import bgImage1 from "../assets/premium_photo-1675186049366-64a655f8f537.avif";
import bgImage2 from "../assets/premium_photo-1677187301660-5e557d9c0724.avif";
import bgImage3 from "../assets/airpods-max-select-silver-202011.jpeg";
import bgImage4 from "../assets/store-card-40-ipad-pro-202405.jpeg";
import bgImage5 from "../assets/store-card-40-macbook-pro-202310.jpeg";

const productData = {
  id: 1,
  name: "Product Name",
  category: "Category A",
  price: "$49.99",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem illum quod alias similique harum autem libero veniam delectus, dicta dolorem at illo, corporis veritatis deserunt debitis et nihil consequuntur excepturi. Harum, enim ea. Dolorem enim eum, eius ipsam corporis vitae. Iure dicta ea fugit. Nemo est at tempora deserunt, vitae dolorum recusandae alias perspiciatis sequi minus amet fugit? Vel beatae quas unde ab earum asperiores rerum, inventore eum architecto enim expedita sed! Animi ratione quas vel nobis quisquam.",
  images: [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5],
};

const ProductDetail: React.FC = () => {
  const [mainImage, setMainImage] = useState(productData.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setMainImage(productData.images[0]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Math.max(1, Number(e.target.value)));
  };

  if (isLoading) {
    return <ProductSkeleton />;
  }

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img
            src={mainImage}
            alt="Product"
            className="w-full h-[480px] object-cover"
          />
          <div className="flex mt-10 gap-2">
            {productData.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-20 h-20 object-cover cursor-pointer border-2 ${
                  mainImage === img ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">{productData.name}</h1>
          <p className="text-gray-600 mt-1">{productData.category}</p>
          <p className="text-2xl font-semibold text-blue-600 mt-2">
            {productData.price}
          </p>
          <p className="text-gray-700 mt-4 leading-6">
            {productData.description}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-16 px-2 py-1 border border-gray-400 text-center outline-none"
            />
            <button className="bg-blue-600 text-white px-14 py-2 hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
