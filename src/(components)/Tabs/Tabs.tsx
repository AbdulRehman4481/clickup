import React from "react";
import pmo from "../../../public/assets/images/pmo.svg";
import market from "../../../public/assets/images/market.svg";
import product from "../../../public/assets/images/product.svg";
import enger from "../../../public/assets/images/enger.svg";
import agencies from "../../../public/assets/images/agenices.svg";
import agent from "../../../public/assets/images/convene-headshot.png";
import setting from "../../../public/assets/images/setting.svg";
import docs from "../../../public/assets/images/docs.svg";
import optimize from "../../../public/assets/images/optimiz.svg";
import dashboard from "../../../public/assets/images/dashboard.svg";
import { GiCheckMark } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
export default function Tabs() {
  return (
    <div className=" flex flex-col justify-center items-center m-6 max-[900px]:hidden">
      <div>
        <div className="flex justify-center gap-10 max-[1177px]:gap-5 max-[1060px]:gap-2">
          <div className="border rounded-xl flex flex-col justify-center items-center max-[1060px]:w-32  w-40 h-28  cursor-pointer transform transition-transform duration-300 hover:translate-y-[1px]">
            <Image src={pmo} alt="pmo" height={40} width={40} />
            <span className="text-base font-bold text-[#514b81] my-2">PMO</span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-xl w-40 h-28 max-[1060px]:w-32 cursor-pointer  transform transition-transform duration-300 hover:translate-y-[1px]">
            <Image src={market} alt="pmo" height={40} width={40} />
            <span className="text-base font-bold text-[#514b81] my-2">
              Marketing{" "}
            </span>
          </div>
          <div className="border rounded-xl flex flex-col justify-center items-center w-40 h-28 cursor-pointer max-[1060px]:w-32 transform transition-transform duration-300 hover:translate-y-[1px]">
            <Image src={product} alt="pmo" height={40} width={40} />
            <span className="text-base font-bold text-[#514b81] my-2">
              Product
            </span>
          </div>
          <div className="border rounded-xl flex flex-col justify-center items-center w-40 h-28 cursor-pointer  transform max-[1060px]:w-32 transition-transform duration-300 hover:translate-y-[1px]">
            <Image src={enger} alt="pmo" height={40} width={40} />
            <span className="text-base font-bold text-[#514b81] my-2">
              Engineering
            </span>
          </div>
          <div className="border rounded-xl flex flex-col justify-center items-center w-40 h-28 cursor-pointer max-[1060px]:w-32  transform transition-transform duration-300 hover:translate-y-[1px]">
            <Image src={agencies} alt="pmo" height={40} width={40} />
            <span className="text-base font-bold text-[#514b81] my-2">
              Agencies
            </span>
          </div>
          <div className="border rounded-xl flex flex-col justify-center items-center w-40 h-28 max-[1060px]:w-32 hover:shadow-lg hover:shadow-primary  transform transition-transform duration-300 hover:translate-y-[1px] cursor-pointer ">
            <span className="text-base font-bold text-[#514b81] my-2">
              See All Items
            </span>
          </div>
        </div>

        <div className="flex border-1 mt-5 w-full justify-center gap-10 rounded-lg pt-[50px] pb-[50px] pl-[47px] max-[1060px]:pl-[27px] max-[1060px]:gap-5 max-[980px]:pl-[17px] max-[980px]:gap-0">
          <div className="max-w-[500px]">
            <h2 className="text-2xl font-bold my-3">
              The complete agency solution
            </h2>
            <p className="font-semibold text-lg my-3">
              Deliver higher quality client work that's more profitable, faster.
            </p>
            <div>
              <p className="flex my-3">
                <span className="border-2 border-black rounded-full">
                  <GiCheckMark size={25} className="px-1" />
                </span>
                Visualize projects, progress, and teamwork
              </p>
              <p className="flex my-3">
                <span className="border-2 border-black rounded-full">
                  <GiCheckMark size={25} className="px-1" />
                </span>
                Speed up collaboration and feedback cycles
              </p>
              <p className="flex my-3">
                <span className="border-2 border-black rounded-full">
                  <GiCheckMark size={25} className="px-1" />
                </span>
                Visualize projects, progress, and teamwork
              </p>
            </div>
            <div className="flex mt-8 gap-3">
              <Image src={agent} alt="agent" height={100} width={100} />
              <div>
                <div className="flex">
                  <span>
                    <FaStar color="yellow" />
                  </span>
                  <span>
                    <FaStar color="yellow" />
                  </span>
                  <span>
                    <FaStar color="yellow" />
                  </span>
                  <span>
                    <FaStar color="yellow" />
                  </span>
                  <span>
                    <FaStar color="yellow" />
                  </span>
                </div>
                <p>
                  <strong>
                    ClickUp brings all of our teams together into one place{" "}
                  </strong>
                  so that they can stay on track, collaborate and communicate.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-10 max-[950px]:mx-3">
            <div className="border-2 rounded-lg ">
              <div className="flex  p-4">
                <Image
                  src={setting}
                  alt="setting"
                  height={40}
                  width={40}
                  className="bg-[#f1f2f3] rounded-lg p-2"
                />
                <p className="mx-4">Flexible workflows for every team</p>
              </div>
              <hr />
              <div className="flex  p-4">
                <Image
                  src={docs}
                  alt="setting"
                  height={40}
                  width={40}
                  className="bg-[#f1f2f3] rounded-lg p-2"
                />
                <p className="mx-4">Tasks, docs, spreadsheets, and more</p>
              </div>
              <hr />
              <div className="flex  p-4">
                <Image
                  src={optimize}
                  alt="setting"
                  height={40}
                  width={40}
                  className="bg-[#f1f2f3] rounded-lg p-2"
                />
                <p className="mx-4">Resource and workload optimization</p>
              </div>
              <hr />
              <div className="flex  p-4">
                <Image
                  src={dashboard}
                  alt="setting"
                  height={40}
                  width={40}
                  className="bg-[#f1f2f3] rounded-lg p-2"
                />
                <p className="mx-4">Dashboards and insights</p>
              </div>
            </div>
            <button className="bg-primary-gradient flex items-center text-xl font-medium text-white px-10 py-3 w-full rounded-xl  mt-5 justify-center  transform transition-transform duration-300 hover:translate-y-[1px]">
              Use This Solution <FaArrowRight className="mx-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
