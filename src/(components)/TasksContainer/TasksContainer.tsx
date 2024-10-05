"use client";
import Image from "next/image";
import image2 from "../../../public/assets/images/item__body-1.avif";
import image3 from "../../../public/assets/images/item__body-2.avif";
import image4 from "../../../public/assets/images/item__body-3.avif";
import image5 from "../../../public/assets/images/item__body-4.avif";
import image6 from "../../../public/assets/images/item__body-5.avif";
import image1 from "../../../public/assets/images/item__body.avif";
import { useEffect, useState } from "react";
export default function TasksContainer() {
  const TasksData = [
    {
      span: "Custom statuses",
      title: "Track progress with custom statuses",
      para: "Track progress and keep everyone on the same page using custom statuses. Whether you like simple statuses like “to do” and “complete,” or something more complex, you have the power to customize workflows specific to your process.",
      image: image1,
    },
    {
      span: "Task types",
      title: "Manage any work with task types",
      para: "",
      image: image2,
    },
    {
      span: "Priority levels",
      title: "Stay ahead with prioritized tasks",
      para: "Focus on the work that matters most by using five different priority levels. With levels ranging from low to urgent, each priority is color-coded, so you and your team can easily identify and act on tasks that need your attention now.",
      image: image3,
    },
    {
      span: "Custom Fields",
      title: "Get context with Custom Fields",
      para: "Gather relevant information and empower your team to get work done using Custom Fields. Add links, drop-downs, email addresses, and more to make your tasks a complete work information hub, saving you time searching for necessary details to complete your work.",
      image: image4,
    },
    {
      span: "Task dependencies",
      title: "Link related and dependent tasks",
      para: "Add relationships between tasks for clear insights into how your projects impact each other. Link dependent and related tasks, quickly jump to linked work, and track progress on connected tasks to avoid bottlenecks.",
      image: image5,
    },
    {
      span: "Multiple Lists",
      title: "Visualize your work in multiple Lists",
      para: "Easily manage cross-functional work or plan Sprints by adding tasks or subtasks to multiple Lists. When you add a task to a new List, it maintains its original status, priority, Automations, and Custom Fields, so you and your team are set for success no matter where you view your work.",
      image: image6,
    },
  ];
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
            {TasksData.map((task, i) => {
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
                      <Image src={task.image} alt="image" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="pl-16 custom-max-900:hidden">
            <div className="flex flex-col bg-[#F1F1F9] w-[192px]  p-2 rounded-xl sticky top-[120px]">
              {TasksData.map((task, i) => {
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
