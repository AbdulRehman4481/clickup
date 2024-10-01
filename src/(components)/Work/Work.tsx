import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/images/AI-powered-productivity.png";
import image2 from "../../../public/assets/images/view-work-your-way.png";
import butt from "../../../public/assets/images/button.svg";
import onbutt from "../../../public/assets/images/onbutton.svg";
import clock from "../../../public/assets/images/clock.svg";
import sprint from "../../../public/assets/images/sprint.svg";
import image3 from "../../../public/assets/images/clickup-integrations.svg";
import image4 from "../../../public/assets/images/clickup-integration-replaces.svg";
import image5 from "../../../public/assets/images/download.svg";
import image6 from "../../../public/assets/images/search-everything.png";
import image7 from "../../../public/assets/images/stay-ahead.png";
import image8 from "../../../public/assets/images/teams-worldwide-planet.png";
import { FaArrowRight } from "react-icons/fa";

export default function Work() {
  return (
    <div className="mx-5 max-[900px]:hidden">
      <div className="text-center mt-20">
        <h1 className="text-4xl font-extrabold">
          Everything your team is looking for
        </h1>
        <p className="text-[22px] font-medium my-5">
          <strong>
            ClickUp’s exceptional flexibility can handle any type of work.
          </strong>
          And we <br /> never stop innovating.
        </p>
      </div>
      <div className="flex justify-center gap-10 ">
        <div className="max-w-[326px] max-[1150px]:max-w-[50%] bg-primary-gradient rounded-lg">
          <div className="pt-[28px] px-[31px]">
            <h1 className="text-xl font-extrabold text-white ">
              AI-powered productivity
            </h1>
            <p className="text-base font-semibold  text-white mt-4">
              Get work done faster with the only AI-powered assistant tailored
              to your role.
            </p>
          </div>
          <Image src={image1} alt="image1" />
        </div>
        <div className="max-w-[326px] max-[1150px]:max-w-[50%] bg-blue-gradient rounded-lg">
          <div className="pt-[28px] px-[31px]">
            <h1 className="text-xl font-extrabold text-white ">
              View work your way
            </h1>
            <p className="text-base font-semibold mt-5  text-white ">
              Instantly switch between 15 views including list, board, gantt,
              and more.
            </p>
          </div>
          <Image src={image2} alt="image1" className="mt-28" />
        </div>
        <div className="max-w-[326px] max-[1150px]:hidden bg-dark-blue-gradient rounded-lg ">
          <div className="pt-[28px] px-[31px]">
            <h1 className="text-xl font-extrabold text-white ">
              View work your way
            </h1>
            <p className="text-base font-semibold  text-white mt-5">
              Instantly switch between 15 views including list, board, gantt,
              and more.
            </p>
          </div>
          <div className="mt-24">
            <div className="flex flex-row- gap-4 items-center justify-evenly py-5">
              <Image src={clock} alt="btn" />
              <span className="text-white font-bold">Time Tracking</span>
              <Image src={butt} alt="btn" />
            </div>
            <div className="flex flex-row gap-4 items-center bg-white justify-evenly py-5">
              <Image src={sprint} alt="btn" />
              <span className=" font-bold text-[#4AB9FD] mx-6">Sprints</span>
              <Image src={onbutt} alt="btn" />
            </div>
            <div className="flex flex-row gap-4 items-center justify-evenly py-5">
              <Image src={clock} alt="btn" height={30} width={30} />
              <span className="text-white font-bold">Custom Fields</span>
              <Image src={butt} alt="btn" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full gap-10 mt-10 " >
        <div className="flex justify-around flex-row w-[700px] max-[1150px]:w-[1050px] relative h-[372px] bg-purple-gradient  rounded-lg">
          <div className="p-10">
            <h1 className="text-xl font-extrabold text-white">
              Plays well with others
            </h1>
            <p className="text-base font-semibold  text-white mt-4 ">
              Easily integrates with the tools you already use.
            </p>
            <Image src={image3} alt="imae" />
          </div>
          <div>
            <Image
              src={image5}
              alt="imae"
              className="absolute right-[44%] "
              height={372}
            />
          </div>
          <div className="p-10">
            <h1 className="text-xl font-extrabold text-white">
              Plays well with others
            </h1>
            <p>Easily integrates with the tools you already use.</p>
            <Image src={image4} alt="imae" />
          </div>
        </div>
        <div className="max-w-[326px] h-[372px] max-[1150px]:hidden bg-black-gradient rounded-lg ">
          <div className="pt-[28px] px-[31px]">
            <h1 className="text-xl font-extrabold text-white ">
              Search everything
            </h1>
            <p className="text-base font-semibold  text-white mt-5">
              Find any file in ClickUp, a connected app, or your local drive,
              from one place.
            </p>
          </div>
          <div className=" mt-3">
            <Image src={image6} alt="image" />
          </div>
        </div>
      </div>
      <div className="flex justify-center  min-[1150px]:hidden gap-10  my-10">
      <div className="max-w-[326px] h-full max-[1150px]:max-w-[50%]  bg-black-gradient rounded-lg ">
          <div className="pt-[28px] px-[31px]">
            <h1 className="text-xl font-extrabold text-white ">
              Search everything
            </h1>
            <p className="text-base font-semibold  text-white mt-5">
              Find any file in ClickUp, a connected app, or your local drive,
              from one place.
            </p>
          </div>
          <div className=" mt-3">
            <Image src={image6} alt="image"  className="rounded-b-lg"/>
          </div>
        </div>
        <div className="max-w-[326px] h-full max-[1150px]:max-w-[50%] bg-orange-gradient rounded-lg ">
          <div className="pt-[28px] px-[31px]">
            <h1 className="text-xl font-extrabold text-white ">
              Stay ahead of what’s next
            </h1>
            <p className="text-base font-semibold  text-white mt-5">
              Organize your work, reminders, and calendar events all from your
              personalized Home.
            </p>
          </div>
          <div className=" mt-10">
            <Image src={image7} alt="image" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-row-reverse justify-center gap-10 mt-10 max-[1150px]:mx-1">
        <div className="flex flex-row w-[700px] max-[1150px]:w-[1150px] relative h-[372px] bg-[#0C1947]  rounded-lg">
          <div className="p-10">
            <h1 className="text-[20px] font-bold text-white mb-10">
              Trusted by over 2,000,000 teams
            </h1>
            <div className="my-10">
              <div className="flex gap-10 mb-10">
                <div>
                  <p className="text-[20px] font-bold text-white">305M+</p>
                  <p className="text-[20px] font-bold text-[#5e6fac]">
                    Tasks completed
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-bold text-white">55M+</p>
                  <p className="text-[20px] font-bold text-[#5e6fac]">
                    Docs created
                  </p>
                </div>
              </div>
              <div className="flex gap-14">
                <div>
                  <p className="text-[20px] font-bold text-white">615M+ </p>
                  <p className="text-[20px] font-bold text-[#5e6fac]">
                    Messages sent{" "}
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-bold text-white">11M+ </p>
                  <p className="text-[20px] font-bold text-[#5e6fac]">
                    Automations created
                  </p>
                </div>
              </div>
            </div>
            <button className="z-10 bg-gray-400/30 hover:bg-gray-400/60  flex items-center text-2xl font-medium text-white px-10 py-3 rounded-xl transform transition-transform duration-300 hover:translate-y-[1px]">
              {" "}
              Join Today For Free <FaArrowRight className="mx-2" />
            </button>
            <Image
              src={image8}
              alt="image8"
              height={300}
              className="absolute right-[1px] top-[19%] rounded-md "
            />
          </div>
        </div>
        <div className="max-w-[326px] h-[372px] bg-orange-gradient rounded-lg max-[1050px]:hidden ">
          <div className="pt-[28px] px-[31px]">
            <h1 className="text-xl font-extrabold text-white ">
              Stay ahead of what’s next
            </h1>
            <p className="text-base font-semibold  text-white mt-5">
              Organize your work, reminders, and calendar events all from your
              personalized Home.
            </p>
          </div>
          <div className=" mt-10">
            <Image src={image7} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
