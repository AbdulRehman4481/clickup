import TasksHero from "@/(components)/TasksHero/TasksHero";
import WhyCharts from "@/(components)/WhyCharts/WhyCharts";
import chart1 from "../../../../public/assets/images/chart(1).avif";
import chart2 from "../../../../public/assets/images/chart(2).avif";
import chart3 from "../../../../public/assets/images/chart(3).avif";
import chart4 from "../../../../public/assets/images/chart(4).avif";
import chart5 from "../../../../public/assets/images/chart(5).avif";
import chart6 from "../../../../public/assets/images/chart1.avif";
import chart7 from "../../../../public/assets/images/chart3.avif";
import chart8 from "../../../../public/assets/images/chart4.avif";
import chart9 from "../../../../public/assets/images/chart7.avif";
import chart10 from "../../../../public/assets/images/chart8.avif";
import chart11 from "../../../../public/assets/images/chart9.avif";

import TasksContainer from "@/(components)/TasksContainer/TasksContainer";
import { StaticImageData } from "next/image";
interface TaskFeature {
  title: string;
  description: string;
  image: StaticImageData;
}
export default function Charts() {
  const taskHeroData = {
    title: "Optimize timelines with Gantt charts",
    span: "ClickUp Gantt Charts",
    para: "Streamline workflows, prioritize deadlines, and eliminate bottlenecks with powerful drag-and-drop Gantt charts.",
    image: chart6,
  };
  const mainData = {
    mainTitle: "Get ahead of every deadline",
    span: "Why Gantt Charts?",
    para: "Manage priorities, track dependencies, and view project progress all in one place with Gantt charts that match your workflow.",
  };

  const TasksData = [
    {
      span: "Project management",
      title: "Clearly visualize workflows",
      para: "Experience the power of clarity by uniting your Spaces, Folders, Lists, tasks and subtasks all in one place. Visualize project workflows and color code your Gantt chart for easy identification.",
      image: chart1,
    },
    {
      span: "Organization",
      title: "Organize and set priorities",
      para: "Get organized and focus your time on what matters most using Gantt charts. From cascading views to lightning-fast sorting and filtering, organizing tasks has never been simpler.",
      image: chart2,
    },
    {
      span: "Progress tracking",
      title: "Visually track progress in real time",
      para: "Use Gantt charts to get updates as real-time as your victories. Easily update project deadlines and collaborate with your team while watching your progress percentages soar.",
      image: chart3,
    },
    {
      span: "Task dependencies",
      title: "Manage task dependencies",
      para: "Turn task dependencies from obstacles to stepping stones with Gantt charts. Create tasks, add dependencies, and reschedule with a click, ensuring your project stays on track.",
      image: chart4,
    },

    {
      span: "Critical Path",
      title: "Identify Critical Paths and Slack Time",
      para: "Shed light on your project’s progress and anticipate any potential roadblocks. Critical Path identifies tasks impacting your deadline, and Slack Time highlights tasks with flexible schedules.",
      image: chart5,
    },
  ];
  const chartsData: TaskFeature[] = [
    {
      title: "Visualize project workflows",
      description:
        "View Spaces, Folders, Lists, tasks and subtasks in one Gantt chart to get a clear picture of your project workflow.",
      image: chart11,
    },
    {
      title: "Simplify task organization",
      description:
        "Stay organized and focus on what matters with multiple flexible views and quick sorting.",
      image: chart10,
    },
    {
      title: "Track progress in real time",
      description:
        "Monitor progress and celebrate milestones with real-time updates and progress percentages.",
      image: chart9,
    },
    {
      title: "Manage dependent tasks",
      description:
        "Easily manage obstacles by creating tasks, linking dependencies, and rescheduling task chains.",
      image: chart8,
    },
    {
      title: "Never miss a deadline",
      description:
        "Keep projects on track by identifying Critical Paths, Slack Time, and dependencies.",
      image: chart7,
    },
  ];

  return (
    <>
      <TasksHero
        title={taskHeroData.title}
        para={taskHeroData.para}
        span={taskHeroData.span}
        image={taskHeroData.image}
      />
      <WhyCharts
        chartsData={chartsData}
        mainTitle={mainData.mainTitle}
        span={mainData.span}
        para={mainData.para}
      />
      <TasksContainer tasksData={TasksData} />
    </>
  );
}
