import Image from "next/image";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineDeviceMobile, HiTemplate } from "react-icons/hi";
import { IoPlayOutline } from "react-icons/io5";

import {
  companyType,
  companyTypes,
  Teams,
  TemplateData,
} from "../../data/navbarData";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { ReactNode, useState } from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaArrowRightLong, FaChevronDown } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
type Item = {
  icon: JSX.Element;
  title: string;
};

interface dataType {
  data: companyType[];
}

const TeamSection = ({ data }: dataType) => {
  return (
    <>
      <div className="container px-[10px] custom-max-1045:pl-[5px] pt-[20px] mb-[20px] ">
        <div className="grid grid-cols-3 gap-y-4   gap-x-2">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="max-w-[260px] border-[1px] rounded-[12px]  p-[20px] group hover:border-purple-600 hover:shadow-sm hover:shadow-purple-600 cursor-pointer"
              >
                <p className="flex items-center text-[14px] group-hover:text-purple-600 font-[850] font-[family-name:var(--font-axiforma-sans)]">
                  <span className="mr-1 text-[16px] mb-1 ">{item.icon}</span>
                  {item.title}
                </p>
                <p className="text-[12px] mt-[4px] leading-[18px] text-[#514B81] font-normal font-[family-name:var(--font-axiforma-sans)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
const TemplateSection = () => {
  return (
    <>
      <div className="container px-[10px] custom-max-1045:pl-[5px] pt-[20px] mb-[20px] ">
        <div className="grid grid-cols-3 gap-4">
          {TemplateData.map((item, i) => {
            return (
              <Card key={i} className=" max-w-[260px] shadow-md  border-[0.8px] border-[#524b81]/20 rounded-[14px] p-[10px] ">
                <CardHeader className=" flex-col items-start ">
                  <Image
                  alt="Card background"
                    className="object-cover rounded-xl border-b-[0.8px] border-[#524b81]/20"
                    src={item.icon}
                    width={270}
                  />
                </CardHeader>
                <CardBody className=" flex justify-around ">
                  <h1 className="font-[family-name:var(--font-axiforma-sans)] font-[900] text-[13px]">
                    {item.title}
                  </h1>
                  <p className="text-[12px] font-medium font-[family-name:var(--font-axiforma-sans)] h-[40px] text-[#514B81] my-2">
                    {item.description}
                  </p>
                  <button className="bg-[#ceceea]/20 hover:text-black px-3 rounded-[12px]  text-[#514B81]  py-2 w-full">
                    Get This Template
                  </button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
interface SloutionsTabType {
  title: string;
  icon: ReactNode;
}
const SloutionsTab: SloutionsTabType[] = [
  {
    icon: <RiTeamLine className="mr-1 text-[16px] mb-1" />,
    title: "Team",
  },
  {
    icon: <BsFillBuildingsFill className="mr-1 text-[16px] mb-1" />,
    title: "Company type",
  },
  {
    icon: <HiTemplate className="mr-1 text-[16px] mb-1" />,
    title: "Templates",
  },
];

export default function DropDown2() {
  const [openDropdown, setOpenDropdown] = useState<string | null>("Team");
  const handleDropDown = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };
  return (
    <>
      <div className="absolute  flex justify-center top-14  rounded-[14px]  custom-max-1012:hidden z-50 ">
        <div className="bg-white shadow-lg border-1 border-[#CECEEA] transition-all duration-500 ease-in-out  w-[1080px] custom-max-1082:w-[1040px] custom-max-1045:w-[1010px]  rounded-[14px]">
          <div className="flex ">
            <div className="pt-4 pl-4 pr-4">
              {SloutionsTab.map((item, i) => {
                return (
                  <>
                    <div
                      key={i}
                      onClick={() => {
                        handleDropDown(item.title);
                      }}
                      className={`flex items-center w-[190px] mb-2 py-[8px] px-[11px]  hover:bg-[#CECEEA]/30 rounded-[10px] font-[family-name:var(--font-axiforma-sans)] justify-between group cursor-pointer
                    ${
                      openDropdown === item.title
                        ? "bg-[#CECEEA]/30 text-black"
                        : ""
                    }
                    
                    `}
                    >
                      <span
                        className={`font-bold text-[#514B81] text-[14px] flex items-center  group-hover:text-black
                      ${openDropdown === item.title ? " text-black" : ""}
                      `}
                      >
                        {item.icon}
                        {item.title}
                      </span>
                      <FaChevronDown
                        size={15}
                        className={`-rotate-90  group-hover:text-black text-[#514B81]
                      ${openDropdown === item.title ? " text-black" : ""}
                      `}
                      />
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex flex-row relative justify-between w-full ">
              {openDropdown === "Team" && (
                <>
                  <TeamSection data={Teams} />
                </>
              )}
              {openDropdown === "Company type" && (
                <>
                  <TeamSection data={companyTypes} />
                </>
              )}
              {openDropdown === "Templates" && (
                <>
                  <div className="">
                    <TemplateSection />
                    <div className="flex mx-[10px] justify-between border-[0.8px] h-[60px] items-center px-[30px] rounded-xl mb-[20px] cursor-pointer">
                      <p className="text-[12px] font-medium text-[#24223e] font-font-[family-name:var(--font-axiforma-sans)]">
                        Get started with hundreds of free and ready-to-use
                        template.{" "}
                      </p>
                      <button className="flex items-center font-[family-name:var(--font-axiforma-sans)] text-[12px] font-extrabold">
                        Browse all templates{" "}
                        <FaArrowRightLong className="ml-2" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className=" flex justify-end border-t-1 border-[#CECEEA] p-2  ">
            <button className="text-[#514B81] text-sm font-normal rounded-md hover:bg-[#CECEEA]/30  font-[family-name:var(--font-axiforma-sans)] hover:text-black cursor-pointer flex items-center p-[10px]">
              <BiMessageDetail size={20} className="mr-1" />
              Contact Sales
            </button>
            <button className="text-[#514B81] text-sm font-normal rounded-md hover:bg-[#CECEEA]/30  font-[family-name:var(--font-axiforma-sans)] hover:text-black cursor-pointer flex items-center p-[10px]">
              <IoPlayOutline size={20} className="mr-1" />
              Watch Demo
            </button>
            <button className="text-[#514B81] text-sm font-normal rounded-md hover:bg-[#CECEEA]/30  font-[family-name:var(--font-axiforma-sans)] hover:text-black cursor-pointer flex items-center p-[10px]">
              <HiOutlineDeviceMobile size={20} className="mr-1" />
              Download Apps
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
