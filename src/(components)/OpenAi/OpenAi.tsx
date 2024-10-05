import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../../public/assets/images/ai-bg-asset.png";
import image2 from "../../../public/assets/images/ai-module-mobile.webp";
import logo from "../../../public/assets/images/logo-v3-clickup-brain-light-v2.svg";
export default function OpenAi() {
  return (
    <div className="flex justify-center items-center w-full  ">
      <div className="bg-gradient-to-r from-[#CECEEA] to-[#FA12E3] max-w-[70%] custom-max-1286:max-w-[90%] custom-max-1060:max-w-[98%] p-[1px] rounded-[14px]">
      <div className="flex h-[440px]  custom-max-700:h-[800px]  custom-max-700:flex-col  bg-white   overflow-hidden   custom-max-975:justify-end custom-max-700:justify-between rounded-[14px]">
        <div className="pl-[64px] pt-[64px] max-w-[35%]  custom-max-975:pl-[10px] custom-max-975:absolute custom-max-700:static custom-max-700:top-5  custom-max-700:pt-5    custom-max-975:left-10 custom-max-850:max-w-[100%]">
          <Image src={logo} alt="logo" height={150} width={150} />
          <p className="font-[900] text-[34px] text-[#24223E] leading-[43px] ">
            <span className="text-[#FA12E3]">One AI</span> for <br /> all your
            work
          </p>
          <p className="text-[15px] font-semibold mb-[24px] mt-1 leading-[21px] font-[family-name:var(--font-axiforma-sans)]">
            Add to any paid plan for $7/user/mo
          </p>
          <p className="text-[15px] custom-max-850:max-w-[300px] custom-max-600:max-w-full font-medium leading-[21px]font-[family-name:var(--font-axiforma-sans)] mb-[30px] ">
            <b>Instantly power up company-wide AI</b> <br /> that connects every aspect of
            your work, across all your apps.
          </p>
          <div className="flex flex-row gap-2 custom-max-500:flex-col">
            <button className="justify-center px-[18px] pt-[13px] pb-[11px] bg-[#FA12E3]/10 font-bold text-[15px] rounded-[14px] text-[#FA12E3] flex items-center hover:bg-[#FA12E3] hover:text-white">
              Try for free <FaArrowRight size={15} className="ml-2" />
            </button>
            <button className="bg-[#514b81]/10 hover:bg-[#514b81]/20 text-[15px] text-[#514b81] font-bold px-[18px] pt-[13px] pb-[11px] rounded-lg">
              Learn more
            </button>
          </div>
        </div>
        <div className="custom-max-700:hidden  max-w-[70%]  overflow-hidden">
          <Image src={image1}  alt="image" className="h-full object-cover w-full"/>
        </div>
        <div className=" custom-min-700:hidden ">
          <Image src={image2} height={500} width={550}  alt="image" />
        </div>
      </div>
      </div>
    </div>
  );  
}
