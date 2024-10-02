"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { GiArtificialIntelligence, GiElectric } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { LuAlarmClock } from "react-icons/lu";
import { SiGoogleforms } from "react-icons/si";
import { TfiClipboard } from "react-icons/tfi";
import image1 from "../../../public/assets/images/home-tabs-v3-ai-desktop.png";
import image2 from "../../../public/assets/images/home-tabs-v3-automations-desktop.png";
import image4 from "../../../public/assets/images/home-tabs-v3-forms-desktop.png";
import image5 from "../../../public/assets/images/home-tabs-v3-goals-desktop.png";
import image6 from "../../../public/assets/images/home-tabs-v3-time-tracking-desktop.png";
import lines from "../../../public/assets/images/transition-lines.svg";

export default function HeroSlider() {
  const icons = [
    { id: 1, icon: <FaHashtag size={26}/>, image: image1, title: "Chat" },
    { id: 2, icon: <AiOutlineDashboard size={26}/>, image: image2, title: "Dashboard" },
    { id: 4, icon: <FaHashtag size={26} />, image: image4, title: "Docs" },
    { id: 5, icon: <LuAlarmClock size={26}/>, image: image5, title: "Time Tracking" },
    { id: 6, icon: <TfiClipboard size={26}/>, image: image6, title: "Whiteboard" },
    { id: 7, icon: <SiGoogleforms size={26}/>, image: image4, title: "Forms" },
    { id: 9, icon: <GiElectric size={26}/>, image: image1, title: "Automation" },
    { id: 10, icon: <GoGoal size={26}/>, image: image5, title: "Goals" },
    { id: 8, icon: <GiElectric size={26} />, image: image6, title: "Electric" },
    { id: 3, icon: <GiArtificialIntelligence size={26} />, image: image4, title: "AI" },
  ];

  const [selected, setSelected] = useState(0);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleClick = (index: number) => {
    setSelected(index);

    if (iconRefs.current[index]) {
      iconRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="bg-secondary-gradient mt-[50px]" >
      <div className="flex justify-center items-center">
        <div className="relative flex justify-center items-center  w-[900px] overflow-hidden h-[150px]">
          <div className="flex transition-all duration-500 ease-in-out">
            {icons.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleClick(index)}
                className={`text-center text-2xl rounded-2xl flex flex-col items-center cursor-pointer transition-transform duration-500 ease-in-out
                  `}
                  style={{
                    transform: `translate(${(index - selected) * 50}px, ${
                      index === selected ? '-10px' : '0px'
                    })`,
                  }}
                ref={(el) => {
                  iconRefs.current[index] = el;
                }} 
              >
                <div
                  className={` w-fit backdrop-blur-lg p-3 rounded-2xl transition-transform duration-500 ease-in-out ${
                    index === selected ? "text-white p-5  bg-blue-950/100 z-10" : "border-white bg-white/20 border"
                  }`}
                >
                  {item.icon}
                </div>
                <div
                  className={`mt-2 text-sm  text-[#000000b3] ${
                    index === selected ? "font-bold" : "font-semibold"
                  }`}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex relative justify-center text-center items-center flex-col">
        <div className="border-white  bg-white/20 border rounded-[20px] p-2">
          <Image
            src={icons[selected].image}
            alt={`Image for icon ${icons[selected].id}`}
            width={1064}
            height={700}
            className="rounded-[20px] shadow-lg"
          />
            <div className="absolute bottom-[30%] blur-xl left-0 w-full h-[30%] max-[800px]:blur-md max-[800px]:hidden   bg-gradient-to-t from-white via-white/100 to-transparent rounded-lg" />
        </div>
        <Image src={lines} alt="lines" width={1064} height={400} className="" />
        <div>
          <h1 className="text-[41px] font-[900] leading-snug text-[#24223E]">
            Save time and get
            <br /> more done
          </h1>

          <p className="text-[19px] mt-2 font-medium">
            Supercharge productivity. Streamline work by <br />
            doing it, and seeing it, in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
