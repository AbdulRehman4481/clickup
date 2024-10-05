import React from "react";
import image1 from "../../../public/assets/images/layout-item-block__graphic.avif";
import image2 from "../../../public/assets/images/layout-item-block__graphic-1.avif";
import image3 from "../../../public/assets/images/image.avif";
import image4 from "../../../public/assets/images/layout-item-block__graphic-2.avif";
import image5 from "../../../public/assets/images/layout-item-block__graphic-3.avif";
import image6 from "../../../public/assets/images/layout-item-block__graphic-4.avif";
import Image from "next/image";

export default function WhyTask() {
  return (
    <>
      <div className="flex flex-col items-center p-4 custom-max-600:px-[40px] px-[10px]">
        <div className="flex flex-col items-center">
          <span className="text-[#514b81] bg-[#514b81]/10 text-[12px] mb-3 leading-[17px] font-medium font-[family-name:var(--font-axiforma-sans)] p-2 rounded-2xl">
            Why Tasks?
          </span>
          <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[41px] font-[900] leading-[51px] text-center mb-1">
            Tasks that define your path
          </h1>
          <p className="text-[18px] sm:text-lg text-center mb-10">
            Add custom fields, link dependent tasks, and define tasks with Task
            Types to fit the way you work.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px]">
          <div className="md:w-1/3 custom-max-900:max-w-[500px]">
            <Image src={image1} alt="image" className="rounded-t-[16px]" />
            <div className="border-l-[1px] border-b-[1px] border-r-[1px] p-[30px] rounded-b-[16px]">
              <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
                Customize task status
              </h1>
              <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
                Quickly identify and categorize tasks by adding custom tags and
                statuses.
              </p>
            </div>
          </div>

          <div className="md:w-1/3 custom-max-900:max-w-[500px]">
            <Image src={image3} alt="image" className="rounded-t-[16px]" />
            <div className="border-l-[1px] border-b-[1px] border-r-[1px] p-[30px] rounded-b-[16px]">
              <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
              Do more with task types
              </h1>
              <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
              Manage any kind of work with task types that make sense for your team.
              </p>
            </div>
          </div>

          <div className="md:w-1/3 custom-max-900:max-w-[500px]">
            <Image src={image2} alt="image" className="rounded-t-[16px]" />
            <div className="border-l-[1px] border-b-[1px] border-r-[1px] p-[30px] rounded-b-[16px]">
              <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
              Set priority levels
              </h1>
              <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
              Easily focus on what matters most by setting priority levels.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px]">
          <div className="w-full md:w-1/2">
            <Image src={image4} alt="image" className="rounded-t-[16px]" />
            <div className="border-l-[1px] border-b-[1px] border-r-[1px] p-[30px] rounded-b-[16px]">
              <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
              Get context with Custom Fields
              </h1>
              <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
              Add Custom Fields in tasks to include links, relationships, files, and more, giving you the context you need to finish the job.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Image src={image5} alt="image" className="rounded-t-[16px]" />
            <div className="border-l-[1px] border-b-[1px] border-r-[1px] p-[30px] rounded-b-[16px]">
              <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
              Link related and dependent tasks
              </h1>
              <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
              Provide clear insights into how your projects impact each other by adding relationships and task dependencies.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px]">
          <div className="w-full flex lg:flex-row flex-col rounded-[16px] h-auto border-[1px]">
            <div className="w-full lg:w-[50%] h-[275px] lg:h-auto">
              <Image
                src={image6}
                alt="image"
                className="rounded-t-[16px] lg:rounded-l-[16px] lg:rounded-tr-none w-full h-full object-cover"
              />
            </div>

            <div className="w-full lg:w-[50%] flex flex-col justify-center p-[20px] lg:p-[30px] rounded-b-[16px] lg:rounded-r-[16px]">
              <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
              View work in multiple Lists
              </h1>
              <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
              View work your own way by adding tasks and subtasks to multiple Lists, ensuring easy and instant access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
