import TasksContainer from "@/(components)/TasksContainer/TasksContainer";
import TasksDifference from "@/(components)/TasksDifference/TasksDifference";
import TasksHero from "@/(components)/TasksHero/TasksHero";
import WhyTask from "@/(components)/WhyTask/WhyTask";
import image3 from "../../../../public/assets/images/clickup-tasks.avif";
import image1 from "../../../../public/assets/images/layout-item-block__graphic.avif";
import image2 from "../../../../public/assets/images/layout-item-block__graphic-1.avif";
import image8 from "../../../../public/assets/images/image.avif";
import image4 from "../../../../public/assets/images/layout-item-block__graphic-2.avif";
import image5 from "../../../../public/assets/images/layout-item-block__graphic-3.avif";
import image6 from "../../../../public/assets/images/layout-item-block__graphic-4.avif";
import { StaticImageData } from "next/image";
interface TaskFeature {
  title: string;
  description: string;
  image: StaticImageData;
}
export default function Tasks() {
  const taskHeroData ={
    title:"Build your work’s  foundation with tasks",
    span:"ClickUp Tasks",
    para:"Plan, organize, and collaborate on any project with tasks that adapt to any workflow or type of work.",
    image:image3
  }
  const taskFeaturesData:TaskFeature[] = [
    {
      title: "Customize task status",
      description:
        "Quickly identify and categorize tasks by adding custom tags and statuses.",
      image: image1,
    },
    {
      title: "Do more with task types",
      description:
        "Manage any kind of work with task types that make sense for your team.",
      image: image8,
    },
    {
      title: "Set priority levels",
      description:
        "Easily focus on what matters most by setting priority levels.",
      image: image2,
    },
    {
      title: "Get context with Custom Fields",
      description:
        "Add Custom Fields in tasks to include links, relationships, files, and more, giving you the context you need to finish the job.",
      image: image4,
    },
    {
      title: "Link related and dependent tasks",
      description:
        "Provide clear insights into how your projects impact each other by adding relationships and task dependencies.",
      image: image5,
    },
    {
      title: "View work in multiple Lists",
      description:
        "View work your own way by adding tasks and subtasks to multiple Lists, ensuring easy and instant access.",
      image: image6,
    },
  ];

  const mainData = {
    mainTitle: "Tasks that define your path",
    span: "Tasks that define your path",
    para: "Add custom fields, link dependent tasks, and define tasks with Task Types to fit the way you work.",
  };

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

  return (
    <>
      <TasksHero title={taskHeroData.title} para={taskHeroData.para} image={taskHeroData.image} span={taskHeroData.span} />
      <TasksDifference />
      <WhyTask
      taskFeaturesData={taskFeaturesData}
      mainTitle={mainData.mainTitle}
      span={mainData.span}
      para={mainData.para}
      />
      <TasksContainer
      tasksData={TasksData}
      />
    </>
  );
}
