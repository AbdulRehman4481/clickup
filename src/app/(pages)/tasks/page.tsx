import TasksContainer from "@/(components)/TasksContainer/TasksContainer";
import TasksDifference from "@/(components)/TasksDifference/TasksDifference";
import TasksHero from "@/(components)/TasksHero/TasksHero";
import WhyTask from "@/(components)/WhyTask/WhyTask";

export default function Tasks() {
  return (
    <>
      <TasksHero />
      <TasksDifference />
      <WhyTask />
      <TasksContainer />
    </>
  );
}
