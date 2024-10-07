import Khanbanlast from "@/(components)/KhanbanLast/Khanbanlast";
import TasksContainer from "@/(components)/TasksContainer/TasksContainer";
import TasksHero from "@/(components)/TasksHero/TasksHero";
import WhyTask from "@/(components)/WhyTask/WhyTask";
import image7 from "../../../../public/assets/images/board1.avif";
import image14 from "../../../../public/assets/images/board2avif.avif";
import image10 from "../../../../public/assets/images/board3.avif";
import image11 from "../../../../public/assets/images/board4.avif";
import image12 from "../../../../public/assets/images/board5.avif";
import image13 from "../../../../public/assets/images/board6.avif";
import image3 from "../../../../public/assets/images/board_hero.avif";
import image8 from "../../../../public/assets/images/image.avif";
import image2 from "../../../../public/assets/images/layout-item-block__graphic-1.avif";
import image4 from "../../../../public/assets/images/layout-item-block__graphic-2.avif";
import image5 from "../../../../public/assets/images/layout-item-block__graphic-3.avif";
import image6 from "../../../../public/assets/images/layout-item-block__graphic-4.avif";
import image1 from "../../../../public/assets/images/layout-item-block__graphic.avif";

export default function Kanban() {
  const taskHeroData = {
    title: "Streamline workflows with Board view",
    span: "ClickUp Board view",
    para: "Visualize work, maximize efficiency, and manage work in progress limits with a beautiful Board view that works for you.",
    image: image3,
  };
  const taskFeaturesData = [
    {
      title: "Easily update workflows",
      description:
        "Manage multiple tasks at once by selecting several cards and dragging the to new column.",
      image: image1,
    },
    {
      title: "Collaborate on tasks",
      description:
        "Assign tasks, add comments, and attach files directly within cards.",
      image: image8,
    },
    {
      title: "Mange task loads",
      description:
        "Easily focus on what matters most by setting priority levels.",
      image: image2,
    },
    {
      title: "Categorize with Subgroups",
      description:
        "Organize tasks across horizontal lanes by projects, priorities, teams, and more for better visual management.",
      image: image4,
    },
    {
      title: "Create custom columns",
      description:
        "Add columns that reflect your workflow stages and color-code them to fit your project's priorities.",
      image: image5,
    },
    {
      title: "Customize your cards for clarity",
      description:
        "Enhance cards with Custom Fields, images, labels, colors, and more to give you a clear picture of relevant details.",
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
      span: "Multi select and drag",
      title: "Manage priorities easier than ever ",
      para: "Highlight what matters most with color-coded labels, due dates, and priority tags. Easily update several tasks at once by multi-selecting cards and dragging them to a new column.",
      image: image7,
    },
    {
      span: "Collaboration",
      title: "Real-time collaboration on tasks",
      para: "Assign tasks, add comments, and attach files directly within cards. Stay connected and ensure everyone is on the same page with a dynamic and flexible kanban system.",
      image: image14,
    },
    {
      span: "WIP Limits",
      title: "Manage task loads with WIP limits",
      para: "Limit the number of tasks in each stage to ensure smooth delivery and eliminate bottlenecks. Easily adjust or remove limits to boost efficiency and focus on delivering value.",
      image: image13,
    },
    {
      span: "Subgroups",
      title: "Categorize tasks with subgroups",
      para: "Use subgroups (AKA swimlanes) to categorize tasks visually across different criteria like assignee, priorities, or even work type. Group tasks related to specific aspects or priorities to enhance visibility.",
      image: image10,
    },
    {
      span: "Custom columns",
      title: "Tailor workflows with custom columns",
      para: "Customize your board to fit your unique workflow. Easily add, hide, or rearrange cards to adapt to changing priorities, and create custom columns that reflect your project stages, such as Scoping,In Progress,Pending Review, and Done.",
      image: image11,
    },
    {
      span: "Card customization",
      title: "Get creative with customizable cards",
      para: "Get a tailored view of your work by adding images, custom tags, and more to cards. Change card sizes, stack and rearrange fields, and add checklists to customize cards to meet your every need. Plus, attach files, add due dates, and set priorities all from one place.f",
      image: image12,
    },
  ];

  return (
    <div>
      {" "}
      <TasksHero
        title={taskHeroData.title}
        para={taskHeroData.para}
        span={taskHeroData.span}
        image={taskHeroData.image}
      />
      <WhyTask
        taskFeaturesData={taskFeaturesData}
        mainTitle={mainData.mainTitle}
        span={mainData.span}
        para={mainData.para}
      />
      <TasksContainer tasksData={TasksData} />
      <Khanbanlast />
    </div>
  );
}
