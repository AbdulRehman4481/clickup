"use client";
import { FaStar } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import agencies from "../../../public/assets/images/agenices.svg";
import agent from "../../../public/assets/images/convene-headshot.png";
import dashboard from "../../../public/assets/images/dashboard.svg";
import docs from "../../../public/assets/images/docs.svg";
import enger from "../../../public/assets/images/enger.svg";
import market from "../../../public/assets/images/market.svg";
import optimize from "../../../public/assets/images/optimiz.svg";
import pmo from "../../../public/assets/images/pmo.svg";
import product from "../../../public/assets/images/product.svg";
import setting from "../../../public/assets/images/setting.svg";
import curve from "../../../public/assets/images/curve.png";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const tabData = [
  {
    id: 1,
    image: pmo,
    imageTitle: "PMO",
    mainTitle: "The complete agency solution",
    shortDescription:
      "Deliver higher quality client work thats more profitable, faster.",
    tasks: [
      "Visualize projects, progress, and teamwork",
      "Speed up collaboration and feedback cycles",
      "Visualize projects, progress, and teamwork",
    ],
    profile: agent,
    agentWord:
      "“Our executive team decreased project delay by over 70% throughout our first year using ClickUp",
    tab: [
      {
        icon: setting,
        title: "Flexible workflows for every team",
      },
      {
        icon: docs,
        title: "Tasks, docs, spreadsheets, and more",
      },
      {
        icon: optimize,
        title: "Resource and workload optimization",
      },
      {
        icon: dashboard,
        title: "Dashboards and insights",
      },
    ],
  },
  {
    id: 2,
    image: market,
    imageTitle: "Marketing",
    mainTitle: "Marketing",
    shortDescription:
      "Deliver higher quality client work thats more profitable, faster.",
    tasks: [
      "Visualize projects, progress, and teamwork",
      "Speed up collaboration and feedback cycles",
      "Visualize projects, progress, and teamwork",
    ],
    profile: agent,
    agentWord:
      "“Our executive team decreased project delay by over 70% throughout our first year using ClickUp",
    tab: [
      {
        icon: setting,
        title: "Flexible workflows for every team",
      },
      {
        icon: docs,
        title: "Tasks, docs, spreadsheets, and more",
      },
      {
        icon: optimize,
        title: "Resource and workload optimization",
      },
      {
        icon: dashboard,
        title: "Dashboards and insights",
      },
    ],
  },
  {
    id: 3,
    image: product,
    imageTitle: "Product",
    mainTitle: "Product",
    shortDescription:
      "Deliver higher quality client work thats more profitable, faster.",
    tasks: [
      "Visualize projects, progress, and teamwork",
      "Speed up collaboration and feedback cycles",
      "Visualize projects, progress, and teamwork",
    ],
    profile: agent,
    agentWord:
      "“Our executive team decreased project delay by over 70% throughout our first year using ClickUp",
    tab: [
      {
        icon: setting,
        title: "Flexible workflows for every team",
      },
      {
        icon: docs,
        title: "Tasks, docs, spreadsheets, and more",
      },
      {
        icon: optimize,
        title: "Resource and workload optimization",
      },
      {
        icon: dashboard,
        title: "Dashboards and insights",
      },
    ],
  },
  {
    id: 4,
    image: enger,
    imageTitle: "Engineering",
    mainTitle: "Engineering",
    shortDescription:
      "Deliver higher quality client work thats more profitable, faster.",
    tasks: [
      "Visualize projects, progress, and teamwork",
      "Speed up collaboration and feedback cycles",
      "Visualize projects, progress, and teamwork",
    ],
    profile: agent,
    agentWord:
      "“Our executive team decreased project delay by over 70% throughout our first year using ClickUp",
    tab: [
      {
        icon: setting,
        title: "Flexible workflows for every team",
      },
      {
        icon: docs,
        title: "Tasks, docs, spreadsheets, and more",
      },
      {
        icon: optimize,
        title: "Resource and workload optimization",
      },
      {
        icon: dashboard,
        title: "Dashboards and insights",
      },
    ],
  },
  {
    id: 5,
    image: agencies,
    imageTitle: "Agencies",
    mainTitle: "Agencies",
    shortDescription:
      "Deliver higher quality client work thats more profitable, faster.",
    tasks: [
      "Visualize projects, progress, and teamwork",
      "Speed up collaboration and feedback cycles",
      "Visualize projects, progress, and teamwork",
    ],
    profile: agent,
    agentWord:
      "“Our executive team decreased project delay by over 70% throughout our first year using ClickUp",
    tab: [
      {
        icon: setting,
        title: "Flexible workflows for every team",
      },
      {
        icon: docs,
        title: "Tasks, docs, spreadsheets, and more",
      },
      {
        icon: optimize,
        title: "Resource and workload optimization",
      },
      {
        icon: dashboard,
        title: "Dashboards and insights",
      },
    ],
  },
];

export default function Tabs() {
  const [selected, setSelected] = useState(0);

  const handleClick = (index: number) => {
    setSelected(index);
  };
  return (
    <div className=" flex flex-col justify-center items-center m-6 custom-max-900:hidden">
      <div>
        <div className="flex justify-center gap-10 custom-max-1177:gap-5 custom-max-1060:gap-2">
          {tabData.map((data, i) => {
            return (
              <div key={i} onClick={() => handleClick(i)}>
                <div className="flex flex-col justify-center items-center border rounded-xl w-40 h-28 custom-max-1060:w-32 cursor-pointer  transform transition-transform duration-300 hover:translate-y-[1px]">
                  <Image src={data.image} alt="pmo" height={40} width={40} />
                  <span className="text-base font-bold text-[#514b81] my-2">
                    {data.imageTitle}
                  </span>
                </div>
              </div>
            );
          })}
          <div className="border rounded-xl flex flex-col justify-center items-center w-40 h-28 custom-max-1060:w-32 hover:shadow-lg hover:shadow-primary  transform transition-transform duration-300 hover:translate-y-[1px] cursor-pointer ">
            <span className="text-base font-bold text-[#514b81] my-2">
              See All Items
            </span>
          </div>
        </div>

        <div className="flex border-1 relative mt-5 w-full justify-center gap-10 rounded-lg  custom-max-1060:pl-[27px] custom-max-1060:gap-5 custom-max-980:pl-[17px] custom-max-980:gap-0">
          <div className="max-w-[500px] pt-[50px] pb-[50px] pl-[47px]">
            <h2 className="text-2xl font-bold my-3">
              {tabData[selected].mainTitle}
            </h2>
            <p className="font-semibold text-lg my-3">
              {tabData[selected].shortDescription}
            </p>
            <div>
              {tabData[selected].tasks.map((task, i) => {
                return (
                  <p key={i} className="flex my-3">
                    <span className="border-2 bg-gray-200 mr-2 border-black rounded-full">
                      <GiCheckMark size={20} className="px-1 " />
                    </span>
                    {task}
                  </p>
                );
              })}
            </div>
            <div className="flex mt-8 gap-3">
              <Image
                src={tabData[selected].profile}
                alt="agent"
                height={100}
                width={100}
              />
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color="yellow" />
                  ))}
                </div>
                <p>
                  <strong>{tabData[selected].agentWord.slice(0, 55)}</strong>
                  {tabData[selected].agentWord.slice(55)}
                </p>
              </div>
            </div>
          </div>
              <Image src={curve} alt="curve" className=""/>
          <div className="mx-10 custom-max-950:mx-3 pt-[50px] pb-[50px] bg-[#F9F8FD] ">
            <div className="border-2 rounded-lg ">
              {tabData[selected].tab.map((data, i) => {
                return (
                  <div key={i}>
                    <div className="flex  p-4">
                      <Image
                        src={data.icon}
                        alt="setting"
                        height={40}
                        width={40}
                        className="bg-[#f1f2f3] rounded-lg p-2"
                      />
                      <p className="mx-4">{data.title}</p>
                    </div>

                    <hr />
                  </div>
                );
              })}
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
