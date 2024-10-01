import React from "react";
import image1 from "../../../public/assets/images/collaborate-callout.png";
import image2 from "../../../public/assets/images/collaborate.avif";
import Image from "next/image";

export default function Collaboration() {
  return (
    <>
      <div className="flex max-[950px]:hidden    justify-around mt-10 overflow-hidden   my-[100px]">
        <div className="ml-20 ">
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
            className="absolute left-[5%] top-[2%] h-[600px] max-w-[900px] "
          />
          <div className="bg-primary-gradient absolute left-[1%]  rounded-xl w-[850px] h-[580px] -z-10 " />
          <Image
            src={image1}
            alt="image"
            className="absolute top-[20%] h-96 right-[63%] max-w-80  "
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-3 mt-10 min-[950px]:hidden">
        <div className="max-w-[460px] bg-primary-gradient px-4 font-semibold rounded-lg">
          <h1 className="text-white text-2xl my-2 font-bold">
            Improve Collaboration
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            commodi ducimus consequatur id suscipit maiores quis dolorem quod
            atque, veritatis, repudiandae omnis sequi accusamus est temporibus.
            Voluptatum non maiores veritatis?{" "}
          </p>
          <div className="mt-5 mb-10 flex flex-wrap">
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white">
              Comments
            </span>
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white mx-2">
              Docs
            </span>
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white mx-2">
              WhiteBoards
            </span>
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white">
              Clips
            </span>
          </div>
        </div>

        <div className="max-w-[460px] bg-primary-gradient px-4 font-semibold rounded-lg">
          <h1 className="text-white text-2xl my-2 font-bold">
            Improve Collaboration
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            commodi ducimus consequatur id suscipit maiores quis dolorem quod
            atque, veritatis, repudiandae omnis sequi accusamus est temporibus.
            Voluptatum non maiores veritatis?{" "}
          </p>
          <div className="mt-5 mb-10 flex flex-wrap">
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white">
              Comments
            </span>
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white mx-2">
              Docs
            </span>
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white mx-2">
              WhiteBoards
            </span>
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white">
              Clips
            </span>
          </div>
        </div>

        <div className="max-w-[460px] bg-primary-gradient px-4 font-semibold rounded-lg">
          <h1 className="text-white text-2xl my-2 font-bold">
            Improve Collaboration
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            commodi ducimus consequatur id suscipit maiores quis dolorem quod
            atque, veritatis, repudiandae omnis sequi accusamus est temporibus.
            Voluptatum non maiores veritatis?{" "}
          </p>
          <div className="mt-5 mb-10 flex flex-wrap">
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white">
              Comments
            </span>
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white mx-2">
              Docs
            </span>
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white mx-2">
              WhiteBoards
            </span>
            <span className="border rounded-lg px-2 py-1 shadow-lg bg-white">
              Clips
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
