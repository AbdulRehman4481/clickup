import React from "react";
import tik from "../../../public/assets/images/greenTik.svg";
import cross from "../../../public/assets/images/cross.svg";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
export default function TasksDifference() {
  return (
    <div className="flex flex-col items-center p-4  px-[10px] ">
      <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[41px] font-[900] leading-[51px] text-center mb-1 ">
        The secret to your team's success
      </h1>
      <p className="text-[18px] sm:text-lg text-center mb-10">
        ClickUp is the difference between chaotic projects and seamless
        collaboration.
      </p>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1080px] px-[25px] py-[20px]">
        <div className="border-[1px] rounded-lg border-[#ccc] w-full md:w-1/2 p-4">
          <h1 className="text-[24px] font-[family-name:var(--font-axiforma-sans)] text-center leading-[36px] font-bold mb-4">
            Without ClickUp
          </h1>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={cross} alt="cross" className="mr-1" />
            Constantly switching apps
          </p>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={cross} alt="cross" className="mr-1" />
            Endless noise and distractions
          </p>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={cross} alt="cross" className="mr-1" />
            Manual tracking of tasks
          </p>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={cross} alt="cross" className="mr-1" />
            Lost context in communication
          </p>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={cross} alt="cross" className="mr-1" />
            Unorganized and chaotic workflows
          </p>
        </div>
        <div className="border-[1px] rounded-lg border-[#ccc] w-full md:w-1/2 p-4">
          <h1 className="text-[24px] font-[family-name:var(--font-axiforma-sans)] text-center leading-[36px] font-bold mb-4">
            With ClickUp
          </h1>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={tik} alt="tik" className="mr-1" />
            All-in-one communication
          </p>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={tik} alt="tik" className="mr-1" />
            Focused and organized workflows
          </p>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={tik} alt="tik" className="mr-1" />
            Efficient task management
          </p>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={tik} alt="tik" className="mr-1" />
            Seamless integration
          </p>
          <p className="flex items-center text-[16px] font-[family-name:var(--font-axiforma-sans)] font-normal leading-[24px] mb-2">
            <Image src={tik} alt="tik" className="mr-1" />
            Enhanced team collaboration
          </p>
        </div>
      </div>
      <button className="bg-task-purple-gradient mt-[10px] custom-max-770:w-full h-[45px]   hover:bg-blue-gradient font-[family-name:var(--font-axiforma-sans)]     justify-center   flex items-center text-[15px] font-semibold text-white  px-[25px]   rounded-[14px] ">
        {" "}
        Get started free
        <FaArrowRightLong className="mx-2 " />
      </button>
    </div>
  );
}
