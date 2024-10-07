import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa6";

import { FaStarHalfAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

interface TaskHeroParameters {
  title: string;
  para: string;
  span: string;
  image: StaticImageData;
}

export default function TasksHero({
  title,
  para,
  image,
  span,
}: TaskHeroParameters) {
  return (
    <>
      <div className="flex justify-center  custom-max-1200:px-[40px] custom-max-600:px-[20px] custom-max-1000:flex-col custom-max-1000:items-center custom-max-1000:text-center mt-[70px] overflow-hidden    my-[60px]">
        <div className="mx-[10px] relative custom-min-1200:left-[4%] custom-min-1200:mt-[90px]  mt-6">
          {span.length > 1 ? (
            <span className="text-[#514b81] bg-[#514b81]/10 text-[12px] leading-[17px] font-medium p-2 rounded-2xl">
              {span}
            </span>
          ) : null}
          <h1 className="custom-min-1200:text-[50px] max-w-[540px] text-[41px]  font-[900] leading-[60px] custom-max-600:leading-[50px] text-[#24223e]   my-2 ">
            {title}
          </h1>
          <p className="max-w-[480px] text-[19px] font-medium  custom-max-600:leading-[26px] custom-max-600:my-2 font-[family-name:var(--font-axiforma-sans)]">
            {para}
          </p>
          <div className="flex  mt-[30px] custom-max-1000:justify-center custom-max-1000:text-center">
            <button className="bg-task-purple-gradient custom-max-600:w-full custom-max-600:h-[45px]   hover:bg-blue-gradient font-[family-name:var(--font-axiforma-sans)]     justify-center   flex items-center text-[15px] font-semibold text-white  px-[25px]   rounded-[14px] ">
              {" "}
              Get started free
              <FaArrowRightLong className="mx-2 " />
            </button>
            <span className="text-[15px] custom-max-600:hidden ml-2 font-medium text-[#8b91a7]">
              Free forever.
              <br /> No credit card.
            </span>
          </div>
          <div className="flex mt-[10px]  custom-max-1000:justify-center custom-max-600:flex-col custom-max-600:items-center custom-max-1000:text-center">
            <div className="flex">
              {[1, 2, 3, 4].map(() => {
                return (
                  <FaStar
                    key={1}
                    color="yellow"
                    className="mx-[2px]"
                    size={20}
                  />
                );
              })}
              <FaStarHalfAlt color="yellow" className="mx-[2px]" size={20} />
            </div>
            <div>
              <span className="text-[12px] ml-2 font-medium text-[#8b91a7]">
                25,000+ reviews from
              </span>
            </div>
          </div>
        </div>
        <div className="custom-min-1200:relative custom-min-1200:left-[12%] custom-max-600:mt-[50px] flex justify-center custom-max-1000:px-[40px]   z-10 custom-min-1200:w-[722px] w-[550px] custom-min-1200:p-4  h-[500px]   custom-max-1000:w-screen custom-max-1200:h-full ">
          <Image
            src={image}
            alt="image"
            className="custom-min-1200:absolute     custom-min-1200:top-[6%] border-[0.8px] border-[#BDBDDC] rounded-xl custom-max-1000:w-screen   w-[722px]  "
          />
        </div>
      </div>
    </>
  );
}
