import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HeroSlider from "../HeroSlider/HeroSlider";

export default function Hero() {
  return (
    <div className="bg-primary-image bg-cover bg-center bg-no-repeat">
      <div className=" flex flex-col justify-center items-center text-center pt-[20px] pl-[20px]   font-[family-name:var(--font-axiforma-sans)] mt-20 mx-8 ">
        <h1 className="text-[64px] leading-[76px]  text-[#24223e] font-extrabold max-[850px]:text-4xl">
          The everything app for work
        </h1>
        <p className="text-[22px] font-medium mt-[12px] max-[850px]:text-[15px] text-black max-w-[580px]">
          <span className="font-extrabold">Now with Chat, powered by AI.</span>
          One place for teams of all sizes to communicate and get work done.
        </p>
        <button className="bg-primary-gradient leading-[24px] w-[421px] h-[66px] max-[500px]:w-[300px]  justify-center mt-[30px]  flex items-center text-2xl font-semibold text-white px-10 py-3 max-[500px]:px-5 max-[500px]:text-lg rounded-[9px] transform transition-transform duration-300 hover:translate-y-[1px]">
          {" "}
          Get Started. It&#39;s FREE <FaArrowRight size={15} className="mx-2 " />
        </button>
        <p className="text-[15px] mt-2 font-medium text-[#8b91a7]">
          Free Forever. No Credit Card.
        </p>
      </div>
      <div>
        <HeroSlider />
      </div>
    </div>
  );
}
