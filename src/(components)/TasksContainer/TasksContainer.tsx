"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
interface TasksData {
  span: string;
  title: string;
  para: string;
  image:StaticImageData;
}

interface WhyTaskProps {
  tasksData: TasksData[];
}
export default function TasksContainer({tasksData}:WhyTaskProps) {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    const sections = document.querySelectorAll("div[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className="flex justify-center mt-[200px] lg:p-0 px-10">
        <div className="max-w-[1080px] flex ">
          <div className="flex flex-col">
            {tasksData.map((task, i) => {
              return (
                <>
                  <div key={i} id={task.span} className="max-w-[800px] mb-[100px]">
                    <div>
                      <span className="text-[#514b81] bg-[#514b81]/10 text-[12px]  leading-[17px] font-medium font-[family-name:var(--font-axiforma-sans)] p-2 rounded-2xl">
                        {task.span}
                      </span>
                      <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[31px]   md:text-[41px] font-[900] pt-7 leading-[51px]  mb-1">
                        {task.title}
                      </h1>
                      <p className="text-[18px] sm:text-lg  mb-10">
                        {task.para}
                      </p>
                    </div>
                    <div>
                      <Image src={task.image} alt="image"  className="rounded-xl w-full border"/>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="pl-16 custom-max-900:hidden">
            <div className="flex flex-col bg-[#F1F1F9] w-[192px]  p-2 rounded-xl sticky top-[120px]">
              {tasksData.map((task, i) => {
                return (
                  <a
                    key={i}
                    href={`#${task.span}`}
                    className={`text-[13px] font-medium cursor-pointer p-2 rounded-lg ${
                      activeLink === task.span
                        ? "bg-white text-black" 
                        : "text-[#514B81]"
                    }`}
                  >
                    {task.span}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
