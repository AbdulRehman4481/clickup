"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import logo from "../../../public/assets/images/logo-v3-clickup-light (1).svg";
import DropDown1 from "../DropDown1/DropDown1";
import DropDown2 from "../DropDown2/DropDown2";
import SidBar from "../SideBar/SidBar";
export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sidebar, setSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (openDropdown) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openDropdown]);
  const handleDropDown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  return (
    <>
    
      <div className="flex justify-center sticky   top-[20px] z-50  ">
        <div className="flex relative flex-row justify-between w-[1080px] transition-all duration-500 ease-in-out custom-max-1100:w-[1040px] custom-max-1060:w-[1010px]    ">
          <div className="flex ">
            <div className="flex bg-white shadow-[0_4px_6px_0_rgba(67,46,134,0.04)]  justify-around mr-[10px] items-center  custom-max-500:w-[100px] border border-[#CECEEA]    py-[5px] px-[13px]  pr-4 rounded-[14px] h-[46px]">
              <Image src={logo} width={85} height={21} alt="logo" />
              <div className="h-6  w-[0.8px] bg-black custom-max-500p:hidden mx-[9px] " />
              <span className="text-[10px] font-[family-name:var(--font-axiforma-sans)] font-medium  custom-max-500:hidden leading-3">
                The everything
                <br /> app for work.
              </span>
            </div>
            <div className="flex bg-white   custom-max-1012:hidden shadow-[0_4px_6px_0_rgba(67,46,134,0.04)]   rounded-[14px] border-[#CECEEA] border-[0.8px] p-[5px]">
              <div className="hover:bg-[#f1f2f3]  rounded-lg">
                <button
                  onClick={() => handleDropDown("product")}
                  className="flex items-center px-[12px] pt-2 text-sm  rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]"
                >
                  Product
                  <FaChevronDown size={10} className="ml-2" />
                </button>
              </div>
              <div className="hover:bg-[#f1f2f3] rounded-lg">
                <button
                  onClick={() => handleDropDown("solutions")}
                  className="flex items-center   text-sm px-[12px] pt-2 rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)] "
                >
                  Solutions <FaChevronDown size={10} className="ml-2" />
                </button>
              </div>
              <div className="hover:bg-[#f1f2f3]  rounded-lg">
                <button
                  onClick={() => handleDropDown("resources")}
                  className="flex items-center  text-sm px-[12px] pt-2 rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]"
                >
                  Resources <FaChevronDown size={10} className="ml-2" />
                </button>
              </div>
              <div className="hover:bg-[#f1f2f3]  rounded-lg">
                <button className="  text-sm px-[12px] pt-2  rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]">
                  Pricing{" "}
                </button>
              </div>
              <div className="hover:bg-[#f1f2f3]  rounded-lg custom-max-1112:hidden">
                <button className="text-sm px-[12px] pt-2 rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]">
                  Enterprise
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-[9px]">
            <div className="custom-max-1012:border-none custom-min-966:bg-white border border-[#CECEEA] gap-[2px]  flex  p-[5px]   rounded-[14px] ">
              <button className=" text-sm custom-max-1012:hidden px-[12px]  font-normal rounded-lg hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]">
                Log in
              </button>
              <button className="text-white text-sm  px-[12px] font-[850] bg-primary-gradient  rounded-lg font-[family-name:var(--font-axiforma-sans)]">
                Sign Up
              </button>
              <div className="custom-min-1012:hidden bg-white p-[5px] mx-[3px] border-[0.8px] border-[#CECEEA]  rounded-[14px]">
                <button
                  onClick={() => {
                    setSidebar(!sidebar);
                  }}
                  className="text-white text-sm px-[12px] py-[6px]  font-[family-name:var(--font-axiforma-sans)]"
                >
                  <IoMenu size={20} color="black" />
                </button>
              </div>
            </div>
            <div className="flex bg-white  border custom-max-1012:hidden border-[#CECEEA]  cursor-pointer    rounded-[14px] p-[5px] ">
              <span className="text-sm rounded-lg  px-[12px] pt-[8px] hover:bg-[#f1f2f3]  font-[family-name:var(--font-axiforma-sans)]">
                Contact Sales
              </span>
            </div>
          </div>
          {openDropdown === "product" && (
            <>
              <div className="fixed inset-0 custom-max-1012:hidden bg-[#292D34]/20 opacity-50 -z-10" />

              <DropDown1 />
            </>
          )}
          {openDropdown === "solutions" && (
            <>
              <div className="fixed inset-0 bg-[#292D34]/20 custom-max-1012:hidden opacity-50 -z-10" />

              <DropDown2 />
            </>
          )}
          {openDropdown === "solutions" && (
            <>
              <div className="fixed inset-0 bg-[#292D34]/20 custom-max-1012:hidden opacity-50 -z-10" />

              <DropDown2 />
            </>
          )}
          {sidebar && <SidBar isOpen={sidebar} setSidebar={setSidebar} />}
        </div>
      </div>
    </>
  );
}
