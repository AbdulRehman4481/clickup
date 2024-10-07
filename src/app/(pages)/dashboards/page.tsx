import Khanbanlast from "@/(components)/KhanbanLast/Khanbanlast";
import TasksContainer from "@/(components)/TasksContainer/TasksContainer";
import TasksDifference from "@/(components)/TasksDifference/TasksDifference";
import TasksHero from "@/(components)/TasksHero/TasksHero";
import VisualizeWork from "@/(components)/VisualizeWork/VisualizeWork";
import { StaticImageData } from "next/image";
import dash7 from "../../../../public/assets/images/dash0.avif";
import dash1 from "../../../../public/assets/images/dash1.avif";
import dash15 from "../../../../public/assets/images/dash11.avif";
import dash14 from "../../../../public/assets/images/dash12.avif";
import dash13 from "../../../../public/assets/images/dash14.avif";
import dash12 from "../../../../public/assets/images/dash15.avif";
import dash11 from "../../../../public/assets/images/dash16.avif";
import dash10 from "../../../../public/assets/images/dash17.avif";
import dash9 from "../../../../public/assets/images/dash18.avif";
import dash2 from "../../../../public/assets/images/dash2.avif";
import dash3 from "../../../../public/assets/images/dash3.avif";
import dash4 from "../../../../public/assets/images/dash4.avif";
import dash5 from "../../../../public/assets/images/dash5.avif";
import dash6 from "../../../../public/assets/images/dash6.avif";
import dash8 from "../../../../public/assets/images/dash7.avif";
import dash17 from "../../../../public/assets/images/dash9.avif";

interface TaskFeature {
  title: string;
  description: string;
  image: StaticImageData;
}

export default function Dashboards() {
  const taskFeaturesData: TaskFeature[] = [
    {
      title: "Personal Productivity",
      description:
        "Prioritize tasks, track progress, and focus on what matters most.",
      image: dash7,
    },
    {
      title: "Team WorkLoad",
      description:
        "Track task completion , risks, and blockers across teams and projects. ",
      image: dash2,
    },
    {
      title: "Time Tracking",
      description:
        "Easily focus on what matters most by setting priority levels.",
      image: dash3,
    },
    {
      title: "Software Sprints ",
      description:
        "Add Custom Fields in tasks to include links, relationships, files, and more, giving you the context you need to finish the job.",
      image: dash5,
    },
    {
      title: "Marketing Campaigns",
      description:
        "Provide clear insights into how your projects impact each other by adding relationships and task dependencies.",
      image: dash4,
    },
    {
      title: "Sales Overviews",
      description:
        "View work your own way by adding tasks and subtasks to multiple Lists, ensuring easy and instant access.",
      image: dash6,
    },
    {
      title: "Client Portals",
      description:
        "View work your own way by adding tasks and subtasks to multiple Lists, ensuring easy and instant access.",
      image: dash6,
    },
    {
      title: "CRM Visualizations",
      description:
        "View work your own way by adding tasks and subtasks to multiple Lists, ensuring easy and instant access.",
      image: dash6,
    },
    {
      title: "AI Insights",
      description:
        "View work your own way by adding tasks and subtasks to multiple Lists, ensuring easy and instant access.",
      image: dash8,
    },
  ];
  const taskHeroData = {
    title: "Get powerful insights with Dashboards",
    span: "ClickUp Dashboards",
    para: "Create fully customizable Dashboards to prioritize your work, improve project performance, manage sprints and teams, and so much more.",
    image: dash1,
  };

  const TasksData = [
    {
      span: "Personal Productivity",
      title: "Visualize your productivity with a personalized daily Dashboard",
      para: "Dive into your personal productivity. Prioritize tasks, track progress, and focus on what matters most. It's your personal command center for an efficient, organized workflow.",
      image: dash17,
    },
    {
      span: "Team Workloads",
      title: "Align teams across your entire company with Project Dashboards",
      para: "Get a clear view of project progress for your team and company. Track deadlines, manage tasks, and see who's working on what in real time. Keep your company aligned, so you can focus on what matters most  getting the job done.",
      image: dash10,
    },
    {
      span: "Time Tracking",
      title: "Centralize time sheets and reporting for billable work",
      para: "Transform client work with an intuitive Time Tracking Dashboard. Track every hour, create clear visibility, simplify billing, and help your team prioritize the right client work with ease.",
      image: dash15,
    },
    {
      span: "Software Sprints",
      title: "Accelerate software delivery with Sprint Dashboards",
      para: "Streamline your team's planning and performance with our Sprint Dashboard, including sprint velocity, burn up, burn down, lead time, cycle time, and cumulative flow charts. Keep your sprint objective on track, deliver faster, and work smarter across sprints.",
      image: dash14,
    },
    {
      span: "Marketing Campaigns",
      title: "Boost marketing engagement and reach with Campaign Dashboards",
      para: "Track the progress and conversion of priority marketing initiatives in a single view. Track the reach and engagement of content you post online, number of MQLs you generate, and how well those convert into sales.",
      image: dash13,
    },
    {
      span: "Sales Overviews",
      title:
        "Customize sales overviews to track key metrics across your business",
      para: "Streamline your success with a tailored Sales Dashboard, designed to track and highlight key metrics that matter most to your business. Make informed decisions swiftly, celebrate achievements in real time, and propel your business to new heights.",
      image: dash12,
    },
    {
      span: "Client Portals",
      title: "Create client portals to collaborate on tasks and deliverables",
      para: "Invite any client into ClickUp as a guest and share a client portal to provide real-time project updates and collaborate in one place. Track projects and tasks, see workloads across project teams, and chat in real time.",
      image: dash11,
    },
    {
      span: "CRM Visualization",
      title: "Retain customers with dedicated CRM Dashboards",
      para: "Monitor how well you’re responding to customer incidents and risks. Surface your riskiest customer segments, summarize potential reasons for churn, and forecast revenue across regions and teams.",
      image: dash10,
    },
    {
      span: "AI Insights",
      title: "Use AI to surface insights from any Dashboard in seconds",
      para: "Ask AI any question and ClickUp Brain will search the data in every Dashboard of your Workspace to answer instantly, unlocking insights across your entire company, and reducing random pings and distractions for every team.",
      image: dash9,
    },
  ];

  return (
    <>
      <TasksHero
        title={taskHeroData.title}
        para={taskHeroData.para}
        image={taskHeroData.image}
        span={taskHeroData.span}
      />
      <TasksDifference />
      <VisualizeWork taskFeaturesData={taskFeaturesData} />
      <TasksContainer tasksData={TasksData} />
      <Khanbanlast />
    </>
  );
}
