import image2 from "../../../public/assets/images/portfoilio 8.png";
import TrackingSection from "../TackingSection/TrackingSection";

export default function TrackingContainer() {
  const TrackingData = [
    {
      title: "Monitor progress as it happens",
      span: "Measure",
      para: "Gain a high-level overview of how aligned initatives are progressing.",
      image: image2,
      video: "assets/videos/Portfolios in ClickUp™_3.mp4",
      flex: "flex-row",
    },
    {
      title: "Set your business strategy",
      span: "Organize",
      para: "Select and prioritize Lists that align with strategic objectives.",
      image: image2,
      video: "assets/videos/Portfolios in ClickUp™_2.mp4",
      flex: "flex-row-reverse",
    },
    {
      title: "Keep everyone on the same page",
      span: "Agile",
      para: "Share portfolios with stakeholders and limit permissions when needed, so you feel safe and the team stays informed.",
      video: "assets/videos/Portfolios in ClickUp™.mp4",
      image: image2,
      flex: "flex-row",
    },
  ];
  return (
    <div>
      <div className="text-center  my-20">
        <h1 className="text-[30px] sm:text-[41px] font-extrabold">
          Everything you need to track your business
        </h1>
      </div>

      <div>
        {TrackingData.map((item, i) => {
          return (
            <TrackingSection
            key={i}
              title={item.title}
              span={item.span}
              image={item.image}
              para={item.para}
              video={item.video}
              flex={item.flex}
            />
          );
        })}
      </div>
    </div>
  );
}
