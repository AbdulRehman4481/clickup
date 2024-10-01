"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "../../../public/assets/images/keith-johnston-HnrXo1vvLl4-unsplash.jpg";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

interface CustomArrowProps {
  onClick: () => void;
}

const CustomPrevArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      className="absolute hidden text-black border-1 right-[20%] top-[50%] h-10 sm:flex justify-center items-center w-10 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const CustomNextArrow = ({ onClick }: CustomArrowProps) => {
  return (
    <div
      className="absolute hidden text-black border-1 right-[75%] top-[50%] sm:flex justify-center items-center rotate-180 h-10 w-10 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

export default function VideoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAfterChange = (currentSlide: number) => {
    setActiveIndex(currentSlide);
  };

  const settings = {
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: handleAfterChange,
    customPaging: (i: number) => (
      <div
        className={`w-1 h-7 rounded-full ${i === activeIndex ? "bg-primary" : "bg-gray-300"} transition-colors duration-200`}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute flex flex-col justify-center w-full">{dots}</div>
    ),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="my-10 max-[900px]:hidden">
      <h1 className="text-center text-4xl font-bold my-3">Perfect fit for every team</h1>
      <p className="text-center my-3">
        Get started fast with out-of-the-box solutions. Easily customize ClickUp
        as team needs grow!
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="p-4 w-[500px] h-[500px]">
            <Image src={image} alt="" className="h-full object-cover" />
          </div>
          <div className="p-4 w-[500px] h-[500px]">
            <Image src={image} alt="" className="h-full object-cover" />
          </div>
          <div className="p-4 w-[500px] h-[500px]">
            <Image src={image} alt="" className="h-full object-cover" />
          </div>
          <div className="p-4 w-[500px] h-[500px]">
            <Image src={image} alt="" className="h-full object-cover" />
          </div>
          <div className="p-4 w-[500px] h-[500px]">
            <Image src={image} alt="" className="h-full object-cover" />
          </div>
          <div className="p-4 w-[500px] h-[500px]">
            <Image src={image} alt="" className="h-full object-cover" />
          </div>
          <div className="p-4 w-[500px] h-[500px]">
            <Image src={image} alt="" className="h-full object-cover" />
          </div>
          <div className="p-4 w-[500px] h-[500px]">
            <Image src={image} alt="" className="h-full object-cover" />
          </div>
          <div className="p-4 w-[500px] h-[500px]">
            <Image src={image} alt="" className="h-full object-cover" />
          </div>
        </Slider>
      </div>
    </div>
  );
}