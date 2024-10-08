import Image from "next/image";
import { BiMessageDetail } from "react-icons/bi";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { IoPlayOutline } from "react-icons/io5";
import { LuPuzzle } from "react-icons/lu";
import logo from "../../../public/assets/images/logo-v3-clickup-brain-light-v2.svg";
import tik from "../../../public/assets/images/tik.svg";

import {
  collaborationItems,
  features,
  iconMap,
  Integrations,
  knowledgeManagementItems,
  projectDevelopmentItems,
  projectManagementItems,
  resourceManagementItems,
  workflowsItems,
} from "../../data/navbarData";

import { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { TbLayoutDashboard } from "react-icons/tb";
type Item = {
  icon: JSX.Element;
  title: string;
  link:string;
};

interface ProductTabsType {
  title: string;
  icon: ReactNode;
}

interface DropDownSectionType {
  title: string;
  items: Item[];
}

const DropDownSection = ({ title, items }: DropDownSectionType) => {
  return (
    <>
      <div className="mb-[30px]">
        <h1 className="font-[900] text-[14px] mb-[4px] font-[family-name:var(--font-axiforma-sans)]">
          {title}
        </h1>
        {items.map((item, i) => {
          return (
            <a
            href={item.link}
              key={i}
              
              className="text-[#514B81]  text-sm font-normal rounded-md hover:bg-[#CECEEA]/30 py-[4px] mb-1 font-[family-name:var(--font-axiforma-sans)] hover:text-black cursor-pointer flex "
            >
              {" "}
              <span className="text-[16px] mr-[2px]">{item.icon}</span>
              {item.title}
            </a>
          );
        })}
      </div>
    </>
  );
};
const FeaturedSection = () => {
  return (
    <>
      <div className="container pt-[10px] ">
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <p
                key={i}
                className="text-[#514B81]   text-sm font-normal rounded-md hover:bg-[#CECEEA]/30 py-[6px] pl-[2px]  font-[family-name:var(--font-axiforma-sans)] hover:text-black cursor-pointer flex "
              >
                <Icon className="mr-[2px]" />
                <span className="text-[16px] mr-[2px]"></span>
                {feature.label}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};
const IntegrationSection = () => {
  return (
    <>
      <div className="container pt-[10px] w-[600px]">
        <div className="grid grid-cols-3  justify-items-between">
          {Integrations.map((item, i) => {
            return (
              <div key={i}>
                <p className="text-[#514B81] text-sm font-normal rounded-md hover:bg-[#CECEEA]/30 py-[6px] pl-[2px] font-[family-name:var(--font-axiforma-sans)] hover:text-black cursor-pointer flex">
                  <Image
                    src={item.icon}
                    alt={`${item.icon}`}
                    width={15}
                    height={15}
                  />
                  <span className="text-[16px] mr-[2px]"></span>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const ProductTabs: ProductTabsType[] = [
  {
    icon: <GiElectric className="mr-1 text-[16px] mb-1" />,
    title: "Capabilities",
  },
  {
    icon: <TbLayoutDashboard className="mr-1 text-[16px] mb-1" />,
    title: "All Features",
  },
  {
    icon: <LuPuzzle className="mr-1 text-[16px] mb-1" />,
    title: "Integrations",
  },
];

export default function DropDown1() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(
    "Capabilities"
  );
  const handleDropDown = (dropdown: string) => {
    setOpenDropdown(dropdown);
  };
  return (
    <>
      <div className="absolute  flex justify-center top-14  rounded-[14px]  custom-max-1012:hidden z-50 ">
        <div className="bg-white shadow-lg border-1 border-[#CECEEA] transition-all duration-500 ease-in-out  w-[1080px] custom-max-1100:w-[1040px] custom-max-1060:w-[1010px]  rounded-[14px]">
          <div className="flex ">
            <div className="pt-4 pl-4 pr-4">
              {ProductTabs.map((item, i) => {
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
            <div className="flex flex-row relative justify-between w-full">
              {openDropdown === "Capabilities" && (
                <>
                  <div className="flex gap-10  pt-4 pl-2  ">
                    <div className=" ">
                      <DropDownSection
                        title="Project Management"
                        items={projectManagementItems}
                      />
                      <DropDownSection
                        title="Resource Management"
                        items={resourceManagementItems}
                      />
                    </div>
                    <div>
                      <DropDownSection
                        title="Project Development"
                        items={projectDevelopmentItems}
                      />
                      <DropDownSection
                        title="Collaboration "
                        items={collaborationItems}
                      />
                    </div>
                    <div>
                      <DropDownSection
                        title="Knowledge Management"
                        items={knowledgeManagementItems}
                      />
                      <DropDownSection
                        title="Workflows"
                        items={workflowsItems}
                      />
                    </div>
                  </div>
                  <div className=" flex flex-col justify-around bg-small-pink-gradient pr-10 pl-[20px] rounded-tr-xl border-l-1 border-dashed">
                    <div>
                      <h1 className="text-[14px] font-[850] font-[family-name:var(--font-axiforma-sans)]">
                        Powered By{" "}
                      </h1>
                      <Image src={logo} alt="logo" />
                      <p className="flex text-[14px] text-[#514B81] my-2 font-[family-name:var(--font-axiforma-sans)]">
                        <Image src={tik} alt="tik" className="mr-1" />
                        Generate standup
                      </p>
                      <p className="flex text-[14px] text-[#514B81] mb-2 font-[family-name:var(--font-axiforma-sans)]">
                        <Image src={tik} alt="tik" className="mr-1" />
                        Summarise tasks
                      </p>
                      <p className="flex text-[14px] text-[#514B81] mb-2 font-[family-name:var(--font-axiforma-sans)]">
                        <Image src={tik} alt="tik" className="mr-1" />
                        Spark ideas
                      </p>
                      <p className="flex text-[14px] text-[#514B81] mb-2 font-[family-name:var(--font-axiforma-sans)]">
                        <Image src={tik} alt="tik" className="mr-1" />
                        Generate plans
                      </p>
                      <p className="flex text-[14px] text-[#514B81] mb-2 font-[family-name:var(--font-axiforma-sans)]">
                        <Image src={tik} alt="tik" className="mr-1" />
                        Enhance writing
                      </p>
                      <p className="flex text-[14px] text-[#514B81] mb-2 font-[family-name:var(--font-axiforma-sans)]">
                        <Image src={tik} alt="tik" className="mr-1" />
                        Create reports
                      </p>
                    </div>
                    <button className="bg-[#ceceea]/20 hover:text-black px-3 rounded-[12px]  text-[#514B81]  py-2 w-full">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-small-pink-gradient absolute right-0 rounded-tr-2xl" />
                </>
              )}
              {openDropdown === "All Features" && (
                <>
                  <div>
                    <FeaturedSection />
                    <div>
                      <button className="my-[12px] mb-6 bg-[#ceceea]/20  hover:text-black px-3 rounded-[12px]  text-[#514B81]  py-2 w-full">
                        See All Features
                      </button>
                    </div>
                  </div>
                  <div className=" flex flex-col  justify-around  bg-small-green-gradient  pl-[20px] rounded-tr-xl border-l-1 border-dashed">
                    <div>
                      <h1>Just Released</h1>
                      <ul className="space-y-2 pr-[40px]">
                        <li className="flex items-center space-x-2">
                          <span className="bg-green-500 text-white rounded-md px-1">
                            New
                          </span>
                          <span className="text-[16px] font-normal text-[#514B81]">
                            Knowledge <br /> management
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="bg-green-500 text-white rounded-md px-1">
                            New
                          </span>
                          <span className="text-[16px] font-normal text-[#514B81]">
                            Clips
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="bg-green-500 text-white rounded-md px-1">
                            New
                          </span>
                          <span className="text-[16px] font-normal text-[#514B81]">
                            Mobile 3.0
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="pr-[20px]">
                      <button className="bg-[#ceceea]/20  hover:text-black px-3 rounded-[12px]  text-[#514B81]  py-2 w-full">
                        See Changelog
                      </button>
                    </div>
                  </div>
                </>
              )}
              {openDropdown === "Integrations" && (
                <>
                  {" "}
                  <div>
                    <IntegrationSection />
                    <div>
                      <button className="my-[12px] mb-6 bg-[#ceceea]/20  hover:text-black px-3 rounded-[12px]  text-[#514B81]  py-2 w-full">
                        See All Integration
                      </button>
                    </div>
                  </div>
                  <div className=" flex flex-col  px-14  justify-around    pl-[20px] rounded-tr-xl border-l-1 border-dashed">
                    <div>
                      <h1 className="font-bold font-[family-name:var(--font-axiforma-sans)] text-sm">
                        Import
                      </h1>
                      <ul className=" pr-[40px]">
                        {Integrations.slice(0, 8).map((item, i) => {
                          return (
                            <p
                              key={i}
                              className="text-[#514B81]   text-sm font-normal rounded-md hover:bg-[#CECEEA]/30 py-[6px] pl-[2px]  font-[family-name:var(--font-axiforma-sans)] hover:text-black cursor-pointer flex "
                            >
                              <Image
                                src={item.icon}
                                alt={`${item.icon}`}
                                width={15}
                                height={15}
                              />
                              <span className="text-[16px] mr-[2px]"></span>
                              {item.name}
                            </p>
                          );
                        })}
                      </ul>
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
