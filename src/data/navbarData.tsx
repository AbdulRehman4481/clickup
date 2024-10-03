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
} from "react-icons/fa";
const { MdTask } = require("react-icons/md");
import { CgWebsite } from "react-icons/cg";
import { CiViewBoard } from "react-icons/ci";
import { IoStatsChartSharp } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { RiBodyScanFill } from "react-icons/ri";
import { FaChartGantt } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa6";
import { RiDashboard2Line } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { FaArrowsRotate } from "react-icons/fa6";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { BsKanban } from "react-icons/bs";
import { MdRebaseEdit } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
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
import { Calendar } from "@nextui-org/react";
import { ReactNode } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const projectManagementItems = [
  {
    icon: <MdTask />,
    title: "Tasks",
  },
  {
    icon: <CgWebsite />,
    title: "Portfolios",
  },
  {
    icon: <CiViewBoard />,
    title: "Board Views",
  },
  {
    icon: <IoStatsChartSharp />,
    title: "Gantt charts",
  },
];
export const resourceManagementItems = [
  {
    icon: <LuAlarmClock />,
    title: "Time tracking",
  },
  {
    icon: <RiBodyScanFill />,
    title: "Workload views",
  },

  {
    icon: <FaFlag />,
    title: "Goals",
  },
  {
    icon: <RiDashboard2Line />,
    title: "Dashboards",
  },
];

export const projectDevelopmentItems = [
  {
    icon: <FaArrowsRotate />,
    title: "Sprints",
  },
  {
    icon: <BiSolidPieChartAlt2 />,
    title: "Sprints Reports",
  },
  {
    icon: <BsKanban />,
    title: "Kanban",
  },
  {
    icon: <MdRebaseEdit />,
    title: "Roadmap & Backlog",
  },
];

export const collaborationItems = [
  {
    icon: <SiGoogledocs />,
    title: "Docs",
  },
  {
    icon: <CiViewList />,
    title: "WhiteBoards",
  },
  {
    icon: <FaChartGantt />,
    title: "Charts",
  },
  {
    icon: <LuInbox />,
    title: "Inbox",
  },
];

export const knowledgeManagementItems = [
  {
    icon: <SiGoogledocs />,
    title: "Docs",
  },
  {
    icon: <SiWikipedia />,
    title: "Wikis",
  },
  {
    icon: <GiArtificialIntelligence />,
    title: "Ask AI",
  },
  {
    icon: <IoMdSearch />,
    title: "Connected search",
  },
];

export const workflowsItems = [
  {
    icon: <TbSettingsAutomation />,
    title: "Automations",
  },
  {
    icon: <FaWpforms />,
    title: "Forms",
  },
  {
    icon: <RxInput />,
    title: "Custom fields",
  },
  {
    icon: <TbStatusChange />,
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
export const newFeatures = ["Knowledge management", "Clips", "Mobile 3.0"];
