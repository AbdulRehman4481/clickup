import Image, { StaticImageData } from "next/image";
interface TaskFeature {
  title: string;
  description: string;
  image: StaticImageData;
}

interface WhyTaskProps {
  chartsData: TaskFeature[];
  mainTitle: string;
  span: string;
  para: string;
}
export default function WhyCharts({
  chartsData,
  mainTitle,
  span,
  para,
}: WhyTaskProps) {
  return (
    <>
   
      <div className="flex flex-col items-center p-4 custom-max-600:px-[40px] px-[10px]">
        <div className="flex flex-col items-center">
          <span className="text-[#514b81] bg-[#514b81]/10 text-[12px] mb-3 leading-[17px] font-medium font-[family-name:var(--font-axiforma-sans)] p-2 rounded-2xl">
            {span}
          </span>
          <h1 className="font-[family-name:var(--font-axiforma-sans)] text-[41px] font-[900] leading-[51px] text-center mb-1">
            {mainTitle}
          </h1>
          <p className="text-[18px] sm:text-lg text-center mb-10">{para}</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 max-w-[1080px] gap-6 w-full py-[20px]">
          {chartsData.slice(0, 2).map((item, i) => {
            return (
              <div className="w-full md:w-1/2">
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
          {chartsData.slice(2, 5).map((item, i) => {
            return (
              <div className="md:w-1/3 custom-max-900:max-w-[500px]">
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
      </div>
    </>
  );
}
