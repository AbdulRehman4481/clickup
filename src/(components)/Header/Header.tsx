"use client";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import logo from "../../../public/assets/images/logo-v3-clickup-light (1).svg";
import { useEffect, useState } from "react";
import DropDown1 from "../DropDown1/DropDown1";
import DropDown2 from "../DropDown2/DropDown2";
import DropDown3 from "../DropDown3/DropDow3";
export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  useEffect(() => {
    if (openDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
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
      <div className="flex justify-center sticky top-[20px] z-50 max-[1100px]:mx-10">
        <div className="flex flex-row justify-between w-[1080px] ">
          <div className="flex">
            <div className="flex bg-white shadow-[0_4px_6px_0_rgba(67,46,134,0.04)]  justify-around mr-[10px] items-center  max-[500px]:w-[100px] border border-[#CECEEA]    py-[5px] px-[13px]  pr-4 rounded-[14px] h-[46px]">
              <Image src={logo} width={85} height={21} alt="logo" />
              <div className="h-6  w-[0.8px] bg-black max-[500px]:hidden mx-[9px] " />
              <span className="text-[10px] font-[family-name:var(--font-axiforma-sans)] font-medium  max-[500px]:hidden leading-3">
                The everything
                <br /> app for work.
              </span>
            </div>
            <div className="flex bg-white   max-[950px]:hidden shadow-[0_4px_6px_0_rgba(67,46,134,0.04)]   rounded-[14px] border-[#CECEEA] border-[0.8px] p-[5px]">
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
              <div className="hover:bg-[#f1f2f3]  rounded-lg max-[1112px]:hidden">
                <button className="text-sm px-[12px] pt-2 rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]">
                  Enterprise
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-[9px]">
            <div className="max-[950px]:border-none min-[966px]:bg-white border border-[#CECEEA] gap-[2px]  flex  p-[5px]   rounded-[14px] ">
              <button className=" text-sm max-[950px]:hidden px-[12px]  font-normal rounded-lg hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]">
                Log in
              </button>
              <button className="text-white text-sm  px-[12px] font-[850] bg-primary-gradient  rounded-lg font-[family-name:var(--font-axiforma-sans)]">
                Sign Up
              </button>
              <div className="min-[950px]:hidden bg-white p-[5px] mx-[3px] border-[0.8px] border-[#CECEEA]  rounded-[14px]">
                <button className="text-white text-sm px-[12px] py-[6px]  font-[family-name:var(--font-axiforma-sans)]">
                  <IoMenu size={20} color="black" />
                </button>
              </div>
            </div>
            <div className="flex bg-white  border max-[992px]:hidden border-[#CECEEA]  cursor-pointer    rounded-[14px] p-[5px] ">
              <span className="text-sm rounded-lg  px-[12px] pt-[8px] hover:bg-[#f1f2f3]  font-[family-name:var(--font-axiforma-sans)]">
                Contact Sales
              </span>
            </div>
          </div>
        </div>
      </div>
      {openDropdown === "product" && <DropDown1 />}
      {openDropdown === "solutions" && <DropDown2 />}
      {openDropdown === "resources" && <DropDown3 />}
      
    </>
  );
}
