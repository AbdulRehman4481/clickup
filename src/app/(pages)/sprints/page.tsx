import image3 from "../../../../public/assets/images/sprints1.avif";

import TasksHero from "@/(components)/TasksHero/TasksHero";

export default function Sprints() {
  const taskHeroData = {
    title: "Build and automate any sprint cycle",
    span: "",
    para: "Power through your projects using ClickUp's all-in-one Sprint feature to save time, foster collaboration, and hit your goals.",
    image: image3,
  };

  return (
    <>
      <TasksHero
        title={taskHeroData.title}
        para={taskHeroData.para}
        image={taskHeroData.image}
        span={taskHeroData.span}
      />
    </>
  );
}
