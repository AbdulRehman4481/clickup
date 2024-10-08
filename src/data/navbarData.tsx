import {
  FaTasks,
  FaClipboard,
  FaRobot,
  FaFileAlt,
  FaChartBar,
  FaCalendarAlt,
  FaColumns,
  FaComments,
  FaRunning,
  FaEnvelope,
  FaClock,
  FaSearch,
  FaListAlt,
  FaHeartbeat,
  FaRegClock,
  FaBell,
  FaConnectdevelop,
  FaRegCalendarAlt,
  FaRegHeart,
} from "react-icons/fa";
import { MdTask } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { CiViewBoard } from "react-icons/ci";
import { IoStatsChartSharp } from "react-icons/io5";
import { LuAlarmClock, LuPencilLine } from "react-icons/lu";
import { RiBodyScanFill, RiTeamFill, RiTeamLine } from "react-icons/ri";
import { FaChartGantt } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa6";
import { RiDashboard2Line } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { FaArrowsRotate } from "react-icons/fa6";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { BsFillBuildingsFill, BsKanban } from "react-icons/bs";
import { MdRebaseEdit } from "react-icons/md";
import {
  SiGooglecontaineroptimizedos,
  SiGoogledocs,
  SiMagento,
  SiMarketo,
} from "react-icons/si";
import { SiWikipedia } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { TbSettingsAutomation } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa6";
import { RxInput } from "react-icons/rx";
import { LuInbox } from "react-icons/lu";
import { TbStatusChange } from "react-icons/tb";
import clickUpLogo from "../../public/assets/images/integrations-v5-sprite.png";
import slack from "../../public/assets/images/slack-svgrepo-com.svg";
import jira from "../../public/assets/images/jira-svgrepo-com.svg";
import salesforce from "../../public/assets/images/salesforce-svgrepo-com.svg";
import google from "../../public/assets/images/google-color-svgrepo-com.svg";
import figma from "../../public/assets/images/figma-svgrepo-com.svg";
import hubspot from "../../public/assets/images/hubspot-svgrepo-com.svg";
import dropbox from "../../public/assets/images/dropbox-color-svgrepo-com.svg";
import github from "../../public/assets/images/github-142-svgrepo-com.svg";
import gitlab from "../../public/assets/images/gitlab-svgrepo-com.svg";
import zend from "../../public/assets/images/brand-zendesk-svgrepo-com.svg";
import zoom from "../../public/assets/images/zoom-svgrepo-com.svg";
import zapier from "../../public/assets/images/zapier-icon-svgrepo-com.svg";
import loom from "../../public/assets/images/loom-svgrepo-com.svg";
import bitbucket from "../../public/assets/images/bitbucket-svgrepo-com.svg";
import microsoft from "../../public/assets/images/microsoft-teams-svgrepo-com.svg";
import sentry from "../../public/assets/images/sentry-icon-svgrepo-com.svg";
import trello from "../../public/assets/images/trello-svgrepo-com.svg";
import toggl from "../../public/assets/images/toggl-svgrepo-com.svg";
import cal from "../../public/assets/images/integrations-v3-sprite.png";
import make from "../../public/assets/images/integrations-v4-sprite.png";
import { ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { AiFillProject } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import sales from "../../public/assets/images/sales.png";
import project from "../../public/assets/images/project-management.png";
import market from "../../public/assets/images/marketing.png";

export const projectManagementItems = [
  {
    icon: <MdTask />,
    title: "Tasks",
    link: "tasks",
  },
  {
    icon: <CgWebsite />,
    title: "Portfolios",
    link: "portfolios",
  },
  {
    icon: <CiViewBoard />,
    title: "Board Views",
    link: "Kanban",
  },
  {
    icon: <IoStatsChartSharp />,
    title: "Gantt charts",
    link: "charts",
  },
];
export const resourceManagementItems = [
  {
    icon: <LuAlarmClock />,
    title: "Time tracking",
    link: "charts",
  },
  {
    icon: <RiBodyScanFill />,
    link: "charts",
    title: "Workload views",
  },
  
  {
    icon: <FaFlag />,
    link: "charts",
    title: "Goals",
  },
  {
    icon: <RiDashboard2Line />,
    link: "charts",
    title: "Dashboards",
  },
];

export const projectDevelopmentItems = [
  {
    icon: <FaArrowsRotate />,
    link: "sprints",
    title: "Sprints",
  },
  {
    icon: <BiSolidPieChartAlt2 />,
    link: "sprints",
    title: "Sprints Reports",
  },
  {
    icon: <BsKanban />,
    link: "kanban",
    title: "Kanban",
  },
  {
    icon: <MdRebaseEdit />,
    title: "Roadmap & Backlog",
    link: "kanban",
  },
];

export const collaborationItems = [
  {
    icon: <SiGoogledocs />,
    link: "kanban",
    title: "Docs",
  },
  {
    icon: <CiViewList />,
    link: "kanban",
    title: "WhiteBoards",
  },
  {
    icon: <FaChartGantt />,
    link: "charts",
    title: "Charts",
  },
  {
    icon: <LuInbox />,
    link: "kanban",
    title: "Inbox",
  },
];

export const knowledgeManagementItems = [
  {
    icon: <SiGoogledocs />,
    link: "kanban",
    title: "Docs",
  },
  {
    icon: <SiWikipedia />,
    title: "Wikis",
    link: "kanban",
  },
  {
    icon: <GiArtificialIntelligence />,
    link: "kanban",
    title: "Ask AI",
  },
  {
    icon: <IoMdSearch />,
    link: "kanban",
    title: "Connected search",
  },
];

export const workflowsItems = [
  {
    icon: <TbSettingsAutomation />,
    link: "kanban",
    title: "Automations",
  },
  {
    icon: <FaWpforms />,
    link: "kanban",
    title: "Forms",
  },
  {
    icon: <RxInput />,
    link: "kanban",
    title: "Custom fields",
  },
  {
    icon: <TbStatusChange />,
    link: "kanban",
    title: "Custom statuses",
  },
];

export const iconMap = {
  Tasks: FaTasks,
  Whiteboards: FaClipboard,
  Automations: FaRobot,
  Forms: FaWpforms,
  Docs: FaFileAlt,
  Dashboards: FaChartBar,
  "Calendar view": FaCalendarAlt,
  "Kanban view": FaColumns,
  Chat: FaComments,
  Gantt: FaChartGantt,
  Goals: FaFlag,
  Sprints: FaRunning,
  AI: FaRobot,
  Proofing: FaClipboard,
  Milestones: FaCalendarAlt,
  Clips: FaFileAlt,
  "Mind maps": MdRebaseEdit,
  Email: FaEnvelope,
  "Time tracking": FaClock,
  "Connected search": FaSearch,
  "Custom fields": FaListAlt,
  Pulse: FaHeartbeat,
  "Time estimates": FaRegClock,
  Reminders: FaBell,
};

interface FeatureItem {
  icon: keyof typeof iconMap;
  label: string;
}
export const features: FeatureItem[] = [
  { icon: "Tasks", label: "Tasks" },
  { icon: "Whiteboards", label: "Whiteboards" },
  { icon: "Automations", label: "Automations" },
  { icon: "Forms", label: "Forms" },
  { icon: "Docs", label: "Docs" },
  { icon: "Dashboards", label: "Dashboards" },
  { icon: "Calendar view", label: "Calendar view" },
  { icon: "Kanban view", label: "Kanban view" },
  { icon: "Chat", label: "Chat" },
  { icon: "Gantt", label: "Gantt" },
  { icon: "Goals", label: "Goals" },
  { icon: "Sprints", label: "Sprints" },
  { icon: "AI", label: "AI" },
  { icon: "Proofing", label: "Proofing" },
  { icon: "Milestones", label: "Milestones" },
  { icon: "Clips", label: "Clips" },
  { icon: "Mind maps", label: "Mind maps" },
  { icon: "Email", label: "Email" },
  { icon: "Time tracking", label: "Time tracking" },
  { icon: "Connected search", label: "Connected search" },
  { icon: "Custom fields", label: "Custom fields" },
  { icon: "Pulse", label: "Pulse" },
  { icon: "Time estimates", label: "Time estimates" },
  { icon: "Reminders", label: "Reminders" },
];
interface IntegrationItem {
  icon: string | StaticImport;
  name: string;
}
export const Integrations: IntegrationItem[] = [
  { name: "ClickUp API", icon: clickUpLogo },
  { name: "Slack", icon: slack },
  { name: "Jira", icon: jira },
  { name: "Salesforce", icon: salesforce },
  { name: "Gsuite", icon: google },
  { name: "Figma", icon: figma },
  { name: "Hudson", icon: hubspot },
  { name: "Dropbox", icon: dropbox },
  { name: "Github", icon: github },
  { name: "Zendesk", icon: zend },
  { name: "Zoom", icon: zoom },
  { name: "Gitlab", icon: gitlab },
  { name: "Zapier", icon: zapier },
  { name: "Loom", icon: loom },
  { name: "Bitbucket", icon: bitbucket },
  { name: "Make", icon: make },
  { name: "Microsoft Teams", icon: microsoft },
  { name: "Sentry", icon: sentry },
  { name: "Trello", icon: trello },
  { name: "Calendly", icon: cal },
  { name: "Toggl", icon: toggl },
];

export const Teams: companyType[] = [
  {
    title: "Project management",
    description:
      "Empower teams to achieve goals with efficient, clear project planning.",
    icon: <AiFillProject />,
  },
  {
    title: "Product development",
    description:
      "Accelerate innovation for faster, effective team-led product launches.",
    icon: <FaConnectdevelop />,
  },
  {
    title: "Operations",
    description:
      "Optimize workflows for increased team productivity and efficiency.",
    icon: <SiGooglecontaineroptimizedos />,
  },
  {
    title: "IT",
    description:
      "Improve IT operations with solutions fostering teamwork and efficiency.",
    icon: <GrTechnology />,
  },
  {
    title: "Marketing",
    description:
      "Drive marketing outcomes through collaborative strategy and teamwork.",
    icon: <SiMarketo />,
  },
  {
    title: "Human resources",
    description:
      "Enhance team engagement and efficiency with streamlined processes.",
    icon: <RiTeamFill />,
  },
  {
    title: "Sales",
    description:
      "Maximize sales with tools enhancing team efficiency and insight.",
    icon: <FaRegCalendarAlt />,
  },
];
export const newFeatures = ["Knowledge management", "Clips", "Mobile 3.0"];

export interface companyType {
  icon: ReactNode;
  title: string;
  description: string;
}
export const companyTypes: companyType[] = [
  {
    title: "Enterprise",
    description: "Strategic project planning for enterprise success.",
    icon: <BsFillBuildingsFill />,
  },
  {
    title: "Startup",
    description: "Innovative tools for fast-paced startup growth.",
    icon: <RiTeamLine />,
  },
  {
    title: "Non-profit",
    description: "Tools for impactful non-profit management.",
    icon: <FaRegHeart />,
  },
  {
    title: "Education",
    description: "Streamlined workflows for educational productivity.",
    icon: <LuPencilLine />,
  },
  {
    title: "Agency",
    description: "Collaborative solutions for agency efficiency.",
    icon: <SiMagento />,
  },
];

export const TemplateData = [
  {
    title: "Project Management",
    description:
      "Manage roadmaps, backlogs, bugs, agile dev, and documentation.",
    icon: project,
  },
  {
    title: "Sales/CRM",
    description: "Manage leads, deals, and contacts.",
    icon: sales,
  },
  {
    title: "Marketing",
    description: "Plan campaigns, organize assets, and create wikis.",
    icon: market,
  },
];
