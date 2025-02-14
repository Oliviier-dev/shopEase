import React from "react";
import { Link } from "react-router-dom";
import bgImage1 from "../assets/premium_photo-1675186049366-64a655f8f537.avif";
import bgImage2 from "../assets/premium_photo-1677187301660-5e557d9c0724.avif";
import bgImage3 from "../assets/photo-1625490939776-17cef70ec079.avif";

const Categories: React.FC = () => {
  const categories = [
    {
      title: "Fashion Essentials",
      category: "clothes",
      subtext:
        "Stay stylish with the latest fashion trends. From casual to formal, find what fits your style.",
      imageUrl: bgImage1,
    },
    {
      title: "Must-Read Books",
      category: "books",
      subtext:
        "Explore a wide range of books, from gripping novels to insightful non-fiction.",
      imageUrl: bgImage2,
    },
    {
      title: "Cool Widgets",
      category: "widgets",
      subtext:
        "Discover gadgets that make life easier. From home automation to personal, we've got it all.",
      imageUrl: bgImage3,
    },
  ];

  return (
    <div className="py-10 bg-white mb-10">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg h-[400px] sm:h-[480px]"
              style={{
                backgroundImage: `url(${category.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-start p-6">
                {" "}
                <h3 className="text-white text-2xl font-semibold">
                  {category.title}
                </h3>
                <p className="text-white mt-2 text-sm">{category.subtext}</p>
                <Link
                  to={category.category}
                  className="mt-4  px-5 py-3 bg-white text-black border-white border shadow-md transition-all duration-300 hover:bg-black hover:text-white hover:border-white"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
