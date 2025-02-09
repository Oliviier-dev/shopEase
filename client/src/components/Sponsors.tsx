import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo2 from "../assets/client-logo-2.png";
import logo3 from "../assets/client-logo-3.png";
import logo4 from "../assets/client-logo-4.png";

const Sponsors: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  const images = [logo2, logo3, logo4, logo2];

  return (
    <div className="relative w-10/12 md:w-full max-w-6xl mx-auto px-6 pb-10 pt-16">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={img} alt={`Sponsor ${index + 1}`} className="w-full h-6 object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sponsors;
