import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../public/assets/images/ai-bg-asset.png";
import image2 from "../../../public/assets/images/ai-module-mobile.webp";
import logo from "../../../public/assets/images/logo-v3-clickup-brain-light-v2.svg";

export default function OpenAi() {
  return (
    <div className="flex justify-center items-center w-full my-10 ">
      <div className="bg-gradient-to-r from-[#CECEEA] to-[#FA12E3] max-w-[80%] max-[1100px]:max-w-[90%] max-[1025px]:max-w-[98%] p-[1px] rounded-lg">
      <div className="flex h-[440px] max-[850px]:flex-col bg-white  max-[850px]:h-fit overflow-hidden    border   rounded-lg">
        <div className="pl-[64px] pt-[64px] max-w-[35%]  max-[920px]:pl-[34px] max-[850px]:max-w-[100%]">
          <Image src={logo} alt="logo" height={150} width={150} />
          <p className="font-bold text-[34px]">
            <span className="text-[#FA12E3]">One AI</span> for <br /> all your
            work
          </p>
          <p className="text-[15px] font-medium">
            Add to any paid plan for $7/user/mo
          </p>
          <p className="text-[15px] font-medium my-5">
            Instantly power up company-wide AI <br /> that connects every aspect of
            your work, across all your apps.
          </p>
          <div className="flex flex-row gap-2">
            <button className="p-2 bg-[#FA12E3]/10 font-bold text-[15px] rounded-lg text-[#FA12E3] flex items-center hover:bg-[#FA12E3] hover:text-white">
              Try for free <FaArrowRight className="mx-2" />
            </button>
            <button className="bg-[#514b81]/10 hover:bg-[#514b81]/20 text-[15px] text-[#514b81] font-bold p-3 rounded-lg">
              Learn more
            </button>
          </div>
        </div>
        <div className="max-[700px]:mt-72 max-[850px]:hidden max-w-[70%]">
          <Image src={image1}  alt="image" className="h-full object-cover w-full"/>
        </div>
        <div className=" min-[850px]:hidden">
          <Image src={image2}  alt="image" />
        </div>
      </div>
      </div>
    </div>
  );
}
