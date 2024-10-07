import Image, { StaticImageData } from "next/image";

interface TrackingProps {
  title: string;
  span: string;
  para: string;
  image: StaticImageData;
  video: string;
  flex: string;
}

export default function TrackingSection({
  title,
  span,
  para,
  image,
  video,
  flex,
}: TrackingProps) {
  return (
    <div className="flex justify-center mt-[150px]">
      <div
        className={`flex custom-max-900:flex-col-reverse custom-max-900:gap-14 gap-x-[60px] custom-max-900:items-center ${flex} max-w-[1080px] mx-10`}
      >
        <div className={`custom-max-900:w-full md:w-1/2 
            ${flex === "flex-row-reverse" ? "custom-min-900:pl-10" : "custom-min-900:pr-10"}
            mb-6 md:mb-0`}>
          <span className="text-[#514b81] bg-[#514b81]/10 text-[12px] mb-3 leading-[17px] font-medium p-2 rounded-2xl">
            {span}
          </span>
          <h1 className=" text-[20px] sm:text-[34px] font-extrabold my-2">
            {title}
          </h1>
          <p className="text-[17px] font-medium my-3">{para}</p>
          <button className="text-[#7612FA] font-bold bg-[#7612FA]/20 p-3 rounded-xl hover:bg-[#7612FA]/30">
            Get started
          </button>
        </div>

        <div className="custom-max-900:w-full w-1/2">
          <div className="bg-primary-gradient  rounded-xl relative">
            <div className="rounded-lg w-full h-full">
              <video
                autoPlay
                loop
                muted
                className="w-[530px] custom-max-900:hidden h-full rounded-lg "
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Image
                src={image}
                alt="dsfsdf"
                className="custom-min-900:hidden w-full rounded-xl"
              />
              <div
                className={`w-full h-[110%]  rounded-xl -z-10 bg-primary-gradient absolute -top-4   right-4
                ${flex === "flex-row-reverse" ? "custom-min-900:right-4" : "custom-min-900:left-4"}
                 `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
