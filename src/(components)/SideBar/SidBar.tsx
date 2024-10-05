import {
  collaborationItems,
  companyType,
  Integrations,
  knowledgeManagementItems,
  projectDevelopmentItems,
  projectManagementItems,
  resourceManagementItems,
  Teams,
  workflowsItems,
} from "@/data/navbarData";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
type Item = {
  icon: JSX.Element;
  title: string;
};
interface DropDownSectionType {
  title: string;
  items: Item[];
}
const DropDownSection = ({ title, items }: DropDownSectionType) => {
  return (
    <>
      <div className="mb-[30px]">
        <h1 className="font-[900] text-[14px] mb-[8px] font-[family-name:var(--font-axiforma-sans)]">
          {title}
        </h1>
        {items.map((item, i) => {
          return (
            <a
              href="tasks"
              key={i}
              className="text-[#514B81]  px-2 text-sm font-normal rounded-md hover:bg-[#CECEEA]/30 py-[4px] mb-1 font-[family-name:var(--font-axiforma-sans)] hover:text-black cursor-pointer flex "
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
interface dataType {
  data: companyType[];
}
const TeamSection = ({ data }: dataType) => {
  return (
    <>
      <div className="container px-[10px]  pt-[20px] mb-[20px] ">
        <div className="grid grid-cols-1 gap-y-4   gap-x-2">
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="w-full border-[1px] rounded-[12px]  p-[20px] group hover:border-purple-600 hover:shadow-sm hover:shadow-purple-600 cursor-pointer"
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
const IntegrationSection = () => {
  return (
    <>
      <div className="container pt-[10px] ">
        <div className="grid grid-cols-1 gap-2 justify-items-between">
          {Integrations.slice(0, 11).map((item, i) => {
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
export default function SidBar({
  isOpen,
  setSidebar,
}: {
  isOpen: boolean;
  setSidebar: (isOpen: boolean) => void;
}) {
  const [sider, setSider] = useState("");

  return (
    <div
      id="sider"
      className={`fixed top-0  left-0 custom-min-1012:hidden px-4 w-full h-full bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-scroll z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex  justify-between items-center p-3 mt-4">
        <div className="flex border p-1 rounded-xl gap-2">
          <a
            href=""
            className="flex w-[100px] h-[36px] justify-center items-center font-semibold hover:bg-[#f1f2f9] rounded-lg "
          >
            Login
          </a>
          <a
            href=""
            className="flex w-[100px] h-[36px] justify-center items-center font-semibold text-white rounded-lg bg-primary-gradient"
          >
            Sign Up
          </a>
        </div>
        <button
          onClick={() => setSidebar(false)}
          className="text-black bg-[#f1f2f9] px-2 py-2 rounded-xl"
        >
          <RxCross2 size={30} />
        </button>
      </div>
      <hr />
      {sider ? (
        <>
          {sider === "Products" && (
            <>
              <div>
                <button
                  onClick={() => {
                    setSider("");
                  }}
                  className="flex h-14 items-center text-[16px] font-semibold"
                >
                  <FaChevronDown size={10} className="mx-2 mt-1 rotate-90" />
                  Back
                </button>
                <hr />
              </div>
              <div className="py-6 px-2">
                <DropDownSection
                  title="Project Management"
                  items={projectManagementItems}
                />
                <DropDownSection
                  title="Resource Management"
                  items={resourceManagementItems}
                />
                <DropDownSection
                  title="Project Development"
                  items={projectDevelopmentItems}
                />
                <DropDownSection
                  title="Collaboration "
                  items={collaborationItems}
                />
                <DropDownSection
                  title="Knowledge Management"
                  items={knowledgeManagementItems}
                />
                <DropDownSection title="Workflows" items={workflowsItems} />
              </div>
            </>
          )}
          {sider === "Solutions" && (
            <>
              <div>
                <button
                  onClick={() => {
                    setSider("");
                  }}
                  className="flex h-14 items-center text-[16px] font-semibold"
                >
                  <FaChevronDown size={10} className="mx-2 mt-1 rotate-90" />
                  Back
                </button>
                <hr />
              </div>
              <div>
                <TeamSection data={Teams} />
                <button className="w-full bg-[#f1f2f9] p-2 rounded-lg mb-3">
                  See All Solutions
                </button>
              </div>
            </>
          )}
          {sider === "Integrations" && (
            <>
              <div>
                <button
                  onClick={() => {
                    setSider("");
                  }}
                  className="flex h-14 items-center text-[16px] font-semibold"
                >
                  <FaChevronDown size={10} className="mx-2 mt-1 rotate-90" />
                  Back
                </button>
                <hr />
              </div>
              <div>
                <IntegrationSection />
                <button className="w-full bg-[#f1f2f9] p-2 rounded-lg mb-3 mt-4">
                  See All Integrations
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="p-4">
            <ul>
              <li
                onClick={() => {
                  setSider("Products");
                }}
                className="py-2  text-[16px] font-normal text-[#24223E] font-[family-name:var(--font-axiforma-sans)] flex justify-between hover:bg-[#f1f2f9] p-2 rounded-lg cursor-pointer"
              >
                Products <FaChevronDown size={15} className="ml-2 -rotate-90" />
              </li>
              <li
                onClick={() => {
                  setSider("Solutions");
                }}
                className="py-2 text-[16px] font-normal text-[#24223E] font-[family-name:var(--font-axiforma-sans)] flex justify-between hover:bg-[#f1f2f9] p-2 rounded-lg cursor-pointer"
              >
                Solutions{" "}
                <FaChevronDown size={15} className="ml-2 -rotate-90" />
              </li>
              <li
                onClick={() => {
                  setSider("Integrations");
                }}
                className="py-2 text-[16px] font-normal text-[#24223E] font-[family-name:var(--font-axiforma-sans)] flex justify-between hover:bg-[#f1f2f9] p-2 rounded-lg cursor-pointer"
              >
                Integrations{" "}
                <FaChevronDown size={15} className="ml-2 -rotate-90" />
              </li>
              <li className="py-2 text-[16px] font-normal text-[#24223E] font-[family-name:var(--font-axiforma-sans)] flex justify-between hover:bg-[#f1f2f9] p-2 rounded-lg cursor-pointer">
                Resources{" "}
                <FaChevronDown size={15} className="ml-2 -rotate-90" />
              </li>
              <li className="py-2 text-[16px] font-normal text-[#24223E] font-[family-name:var(--font-axiforma-sans)] hover:bg-[#f1f2f9] p-2 rounded-lg cursor-pointer">
                Pricing
              </li>
              <li className="py-2 text-[16px] font-normal text-[#24223E] font-[family-name:var(--font-axiforma-sans)] hover:bg-[#f1f2f9] p-2 rounded-lg cursor-pointer">
                Enterprise
              </li>
              <li className="py-2 text-[16px] font-normal text-[#24223E] font-[family-name:var(--font-axiforma-sans)] hover:bg-[#f1f2f9]  rounded-lg cursor-pointer">
                Sales Contact
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
