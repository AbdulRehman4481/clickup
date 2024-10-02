import React from "react";
import image1 from "../../../public/assets/images/collaborate-callout.png";
import image2 from "../../../public/assets/images/collaborate.avif";
import Image from "next/image";

export default function Collaboration() {
  return (
    <>
      <div className="flex max-[950px]:hidden    justify-around mt-[70px] overflow-hidden   my-[100px]">
        <div className="ml-[150px] max-[1286px]:ml-[50px] max-[1135px]:max-[1286px]:ml-[20px]">
          <h1 className="text-[34px] font-[900]  text-transparent bg-primary-gradient bg-clip-text my-2 ">
            Improve collaboration
          </h1>
          <p className="max-w-[480px] my-2 font-[family-name:var(--font-axiforma-sans)]">
            <b>
              Get your teams working together more closely, even if they’re far
              apart.
            </b>
            Centralize project-related communications in one place, brainstorm
            ideas with Whiteboards, and draft plans together with collaborative
            Docs.
          </p>
          <div className="mt-5 mb-10">
            <span className="border rounded-lg font-[family-name:var(--font-axiforma-sans)] px-2 py-2 shadow-sm bg-white">
              Comments
            </span>
            <span className="border rounded-lg font-[family-name:var(--font-axiforma-sans)] px-2 py-2 shadow-sm bg-white mx-2">
              Docs
            </span>
            <span className="border rounded-lg font-[family-name:var(--font-axiforma-sans)] px-2 py-2 shadow-sm bg-white mx-2">
              WhiteBoards
            </span>
            <span className="border rounded-lg font-[family-name:var(--font-axiforma-sans)] px-2 py-2 shadow-sm bg-white">
              Clips
            </span>
          </div>
          <h1 className="text-[34px] text-[#7F76B3]/80 font-extrabold hover:text-transparent hover:bg-primary-gradient bg-clip-text my-2">
            Enhance visibility{" "}
          </h1>
          <h1 className="text-[34px] text-[#7F76B3]/80 font-extrabold hover:text-transparent hover:bg-primary-gradient bg-clip-text my-2">
            Automate work{" "}
          </h1>
        </div>
        <div className="relative  z-10 w-[600px] h-[650px] ">
          <Image
            src={image2}
            alt="image"
            className="absolute left-[20px] max-[1138px]:left-[100px] top-[2%]  max-w-[862px] "
          />
          <div className="bg-primary-gradient absolute left-[1%] max-[1138px]:left-[12%]  rounded-xl h-[574px] w-[862px] -z-10 " />
          <Image
            src={image1}
            alt="image"
            className="absolute top-[20%] h-96 right-[63%] max-w-80  max-[1138px]:right-[50%]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-3 mt-10 min-[950px]:hidden max-[500px]:mx-[10px] mb-[60px]">
        <div className="max-w-[460px] bg-pink-blue-gradient p-[25px] font-semibold rounded-lg ">
          <h1 className="text-white text-[23px] leading-[30px] mb-[13px] font-extrabold font-[family-name:var(--font-axiforma-sans)]">
            Improve Collaboration
          </h1>
          <p className="text-white text-[14px] font-bold font-[family-name:var(--font-axiforma-sans)] leading-[21px]">
            Get your teams working together more closely, even if they’re far
            apart. Centralize project-related communications in one place,
            brainstorm ideas with Whiteboards, and draft plans together with
            collaborative Docs.
          </p>
          <div className="   flex flex-wrap">
            <span className=" mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)]">
              Comments
            </span>
            <span className= " mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)] mx-2">
              Docs
            </span>
            <span className="mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)] mx-2">
              WhiteBoards
            </span>
            <span className="mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)]">
              Clips
            </span>
          </div>
        </div>

        <div className=" bg-pink-blue-2-gradient   max-w-[460px]  p-[25px] font-semibold rounded-lg">
          <h1 className="text-white text-[23px] leading-[30px] mb-[13px] font-extrabold font-[family-name:var(--font-axiforma-sans)]">
          Enhance visibility
          </h1>
          <p className="text-white text-[14px] font-bold font-[family-name:var(--font-axiforma-sans)] leading-[21px]">
            Ditch the needless meetings and repetitive updates. With a single
            source of truth for all ongoing projects across your entire org, you
            get a crystal-clear view of what's happening (or not), and who's
            responsible.
          </p>
          <div className=" flex flex-wrap">
            <span className="mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)]">
              View
            </span>
            <span className="mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)] mx-2">
              Dashboard
            </span>
            <span className=" mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)] mx-2">
              Reports
            </span>
            <span className="mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)]">
              Goals
            </span>
          </div>
        </div>

        <div className="max-w-[460px] bg-white-blue-gradient p-[25px]  rounded-lg">
          <h1 className="text-white text-[23px] leading-[30px] mb-[13px] font-extrabold font-[family-name:var(--font-axiforma-sans)]">
          Automate work
          </h1>
          <p className="text-white text-[14px] font-bold font-[family-name:var(--font-axiforma-sans)] leading-[21px]">
          Streamline business processes without breaking a sweat. Whether it's onboarding employees, handling IT requests, or managing expense reimbursements, you can automate it all with powerful no-code Automations.
          </p>
          <div className=" flex flex-wrap">
            <span className="mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)]">
              Automation
            </span>
            <span className="mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)] mx-2">
              Forms
            </span>
            <span className="mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)] mx-2">
              Task Templates
            </span>
            <span className="mt-[20px] text-[12px] font-medium rounded-lg  px-[11px] pt-[5px] border-[#00000080] shadow-custom-shadow border-[0.8px] pb-[5px]  bg-white font-[family-name:var(--font-axiforma-sans)]">
              Custom Fields
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
