import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../../../public/assets/images/logo-v3-clickup-light (1).svg";
export default function Header() {
  return (
    <div className="sticky mt-[20px] top-[20px] flex justify-center max-[950px]:justify-between w-full  z-50 ">
      <Navbar className="my mx-5 max-w-[1100px] flex justify-center">
        <NavbarBrand className="max-[950px]:flex shadow-sm  justify-around  max-[500px]:w-[100px] border border-[#CECEEA]   py-[10px] px-[12.25px]  rounded-[14px] h-[46px]">
          <Image src={logo} width={85} height={21} alt="logo" />
          <div className="h-6  w-[0.8px] bg-black max-[500px]:hidden mx-2" />
          <span className="text-[10px] font-semibold font-axiforma max-[500px]:hidden leading-3">
            The everything
            <br /> app for work
          </span>
        </NavbarBrand>
        <NavbarContent
          className="flex  max-[950px]:hidden shadow-sm   rounded-xl border-[#CECEEA] border p-[4px]"
          justify="center"
        >
          <NavbarItem className="hover:bg-[#f1f2f3]  rounded-lg">
            <button className="flex items-center p-2 text-sm  rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]" >
              Product
              <RiArrowDropDownLine size={20} />
            </button>
          </NavbarItem>
          <NavbarItem isActive className="hover:bg-[#f1f2f3] rounded-lg">
            <button className="flex items-center  text-sm p-2 rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)] ">
              Solutions <RiArrowDropDownLine size={20} />
            </button>
          </NavbarItem>
          <NavbarItem className="hover:bg-[#f1f2f3]  rounded-lg">
            <button className="flex items-center  text-sm p-2 rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]">
              Resources <RiArrowDropDownLine size={20} />
            </button>
          </NavbarItem>
          <NavbarItem className="hover:bg-[#f1f2f3]  rounded-lg">
            <button className=" text-sm p-2 rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]">
              Pricing{" "}
            </button>
          </NavbarItem>
          <NavbarItem className="hover:bg-[#f1f2f3]  rounded-lg max-[1112px]:hidden">
            <button className="text-sm p-2 rounded-xl hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]">
              Enterprise
            </button>
          </NavbarItem>
        </NavbarContent>
        <div className="flex gap-3">
        <NavbarContent
          justify="end"
          className="border-[#CECEEA] border p-1 shadow-sm rounded-xl max-[1005px]:hidden"
        >
          <NavbarItem className="flex  rounded-lg ">
            <Link
              href="#"
              className="text-sm rounded-lg  hover:bg-[#f1f2f3] p-2 font-[family-name:var(--font-axiforma-sans)]"
            >
              Contact Sales
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="max-[950px]:border-none border border-[#CECEEA]   pt-[2px] pb-[2px] px-[2px]  rounded-xl "
        >
          <NavbarItem className=" max-[950px]:hidden">
            <button
              className=" text-sm px-3 py-[10px] font-bold rounded-lg hover:bg-[#f1f2f3] font-[family-name:var(--font-axiforma-sans)]"
            >
              Log in
            </button>
          </NavbarItem>
          <NavbarItem>
            <button
              className="text-white text-sm px-[8px] py-[8px] font-bold bg-primary-gradient  rounded-lg font-[family-name:var(--font-axiforma-sans)]"
            >
              Sign Up
            </button>
          </NavbarItem>
          <NavbarItem className="min-[950px]:hidden">
            <Button className="text-white text-sm p-2 border-1  rounded-lg font-[family-name:var(--font-axiforma-sans)]">
              <IoMenu size={20} color="black" />
            </Button>
          </NavbarItem>
        </NavbarContent>
        </div>
      </Navbar>
    </div>
  );
}
