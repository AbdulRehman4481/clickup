import OrganizeTeam from "@/(components)/OrganizeTeam/OrganizeTeam";
import TasksHero from "@/(components)/TasksHero/TasksHero";
import TrackingContainer from "@/(components)/TrackingContainer/TrackingContainer";
import image3 from "../../../../public/assets/images/videoframe_5465.avif";

export default function Portfolios() {
  const portfoliosHeroData = {
    title: "Monitor all of your initiatives in one place",
    span: "",
    para: "Portfolios is the mission control for everything you need to track in your business—from strategy to execution.",
    image: image3,
  };
  return (
    <>
      <TasksHero
        title={portfoliosHeroData.title}
        para={portfoliosHeroData.para}
        span={portfoliosHeroData.span}
        image={portfoliosHeroData.image}
      />
      <OrganizeTeam />
      <TrackingContainer />
    </>
  );
}
