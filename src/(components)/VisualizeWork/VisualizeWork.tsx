import Image, { StaticImageData } from "next/image";

interface TaskFeature {
  title: string;
  description: string;
  image: StaticImageData;
}

interface WhyTaskProps {
  taskFeaturesData: TaskFeature[];
}

export default function VisualizeWork({ taskFeaturesData }: WhyTaskProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-4 custom-max-600:px-[40px] px-[10px]">
        <div className="flex flex-col items-center">
          <span className="text-[#514b81] bg-[#514b81]/10 text-[12px] mb-3 leading-[17px] font-medium font-[family-name:var(--font-axiforma-sans)] p-2 rounded-2xl">
            Why Dashboards?
          </span>
          <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[41px] font-[900] leading-[51px] text-center mb-1">
            Dashboards are the easiest <br /> way to
            <span className="text-[#7612Fa] bg-[#7612Fa]/10">
              visualize work
            </span>
          </h1>
          <p className="text-[18px] sm:text-lg text-center mb-10">
            Create any Dashboard in seconds to transform your projects into a
            flexible canvas of data,
            <br /> lists, cards, charts, and graphs tailored to your work.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px]">
          {taskFeaturesData.slice(0, 3).map((item, i) => {
            return (
              <div key={i} className="md:w-1/3 custom-max-900:max-w-[500px]">
                <Image
                  src={item.image}
                  alt="image"
                  className="rounded-t-[16px]"
                />
                <div className="border-l-[1px] border-b-[1px] border-r-[1px] p-[30px] rounded-b-[16px]">
                  <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
                    {item.title}
                  </h1>
                  <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px]">
          {taskFeaturesData.slice(3, 5).map((item, i) => {
            return (
              <div key={i} className="w-full md:w-1/2">
                <Image
                  src={item.image}
                  alt="image"
                  className="rounded-t-[16px]"
                />
                <div className="border-l-[1px] border-b-[1px] border-r-[1px] p-[30px] rounded-b-[16px]">
                  <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
                    {item.title}
                  </h1>
                  <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px]">
          {taskFeaturesData.slice(5, 8).map((item, i) => {
            return (
              <div key={i} className="md:w-1/3 custom-max-900:max-w-[500px]">
                <Image
                  src={item.image}
                  alt="image"
                  className="rounded-t-[16px]"
                />
                <div className="border-l-[1px] border-b-[1px] border-r-[1px] p-[30px] rounded-b-[16px]">
                  <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
                    {item.title}
                  </h1>
                  <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col lg:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px]">
          {taskFeaturesData.slice(8, 9).map((item, i) => {
            return (
              <div key={i} className="w-full flex lg:flex-row flex-col rounded-[16px] h-auto border-[1px]">
                <div className="w-full lg:w-[50%] h-[275px] lg:h-auto">
                  <Image
                    src={item.image}
                    alt="image"
                    className="rounded-t-[16px] lg:rounded-l-[16px] lg:rounded-tr-none w-full h-full object-cover"
                  />
                </div>

                <div className="w-full lg:w-[50%] flex flex-col justify-center p-[20px] lg:p-[30px] rounded-b-[16px] lg:rounded-r-[16px]">
                  <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[20px] font-extrabold">
                    {item.title}
                  </h1>
                  <p className="font-[family-name:var(--font-axiforma-sans)] text-[15px] font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
