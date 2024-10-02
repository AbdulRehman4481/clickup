"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
const CustomPrevArrow = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div
      className="absolute hidden text-black border-1 right-[20%] top-[50%] h-10 sm:flex justify-center items-center w-10 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const CustomNextArrow = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => {
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
  const [isPlaying, setIsPlaying] = useState<boolean[]>(Array(8).fill(false));

  const handleAfterChange = (currentSlide: number) => {
    setActiveIndex(currentSlide);
  };

  const handlePlay = (index: number) => {
    const updatedPlayingState = [...isPlaying];
    updatedPlayingState[index] = true;
    setIsPlaying(updatedPlayingState);
  };

  const handleEnd = (index: number) => {
    const updatedPlayingState = [...isPlaying];
    updatedPlayingState[index] = false; 
    setIsPlaying(updatedPlayingState);
  };

  const settings = {
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1160,
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
        className={`w-1 h-7 rounded-full ${
          i === activeIndex ? "bg-primary" : "bg-gray-300"
        } transition-colors duration-200`}
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
        Get started fast with out-of-the-box solutions. Easily customize ClickUp as team needs grow!
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          {Array(8).fill("").map((_, index) => (
            <div key={index} className="px-4 relative rounded-2xl group">
              <video
                controls
                width="100%"
                className="rounded-2xl"
                onPlay={() => handlePlay(index)}
                onEnded={() => handleEnd(index)} 
              >
                <source src={`assets/videos/${index + 1}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying[index] && (
                <div className="absolute  border-t-1 border-black bg-white/10 backdrop-blur-md group-hover:hidden rounded-b-2xl h-[40%]  bottom-0 mr-4 max-[1390px]:pt-2   p-4 ">
                  <h1 className="text-white text-xl font-semibold max-[1180px]:text-base my-4 max-[1390px]:my-2">Vela</h1>
                  <h1 className="text-white text-xl font-medium max-[1180px]:text-base font-[family-name:var(--font-axiforma-sans)] max-[1180px]:text-lg">
                  &quot;ClickUp made our <br />production team two-thirds more efficient&quot;
                  </h1>
                  <h1 className="text-white mt-4 max-[1390px]:mt-1 max-[1180px]:text-base">Justin Kosmides</h1>
                  <h1 className="text-white font-semibold max-[1180px]:text-base">CEO & Co Founder</h1>
                </div>
              )}
            </div>
          ))}
        </Slider> 
      </div>
    </div>
  );
}
