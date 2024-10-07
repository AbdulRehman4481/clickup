import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import image from "../../../public/assets/images/board8.avif";

export default function Khanbanlast() {
  return (
    <div className="max-w-[1080px]   mx-auto p-4">
      <div className="bg-dark-purple-gradient rounded-xl overflow-hidden shadow-xl">
        <div className="flex custom-max-900:flex-col-reverse flex-row">
          <div className="p-8 lg:p-12 custom-min-900:w-1/2 flex flex-col justify-center">
            <h2 className="text-white text-[17px]  font-semibold mb-2">
              Supercharge your productivity
            </h2>
            <h1 className="text-white text-[24px]  font-bold mb-6">
              Everything you need to stay organized and get work done.
            </h1>
            <button className="bg-white  font-bold w-fit px-3 py-3 rounded-xl inline-flex items-center justify-center transition duration-300 ease-in-out hover:bg-purple-100 mb-4 max-w-xs">
              Try ClickUp free
              <BsArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="text-purple-200 text-sm ">No credit card required</p>
          </div>
          <div className="lg:w-1/2 custom-max-900:p-4 p-0 custom-max-900:flex custom-max-900:justify-center">
            <Image
              src={image}
              alt="ClickUp Interface"
              className="w-full h-[300px] custom-max-900:h-[321px] custom-max-900:w-[512px]  object-cover  mt-[60px] custom-max-900:rounded-xl rounded-tl-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
