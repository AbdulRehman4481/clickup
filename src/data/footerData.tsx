import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";

// TypeScript types for links and social icons
type FooterLink = { label: string; href: string };
type SocialIcon = { icon: JSX.Element; href: string };
type StoreButton = { src: string; alt: string };

export const footerLinks: {
  clickUp: FooterLink[];
  resources: FooterLink[];
  features: FooterLink[];
  compare: FooterLink[];
  learn: FooterLink[];
  socialIcons: SocialIcon[];
  storeButtons: StoreButton[];
} = {
  clickUp: [
    { label: "Download", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Community", href: "#" },
    { label: "Affiliate & Referrals", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "Press", href: "#" },
    { label: "Brand", href: "#" },
    { label: "Product Roadmap", href: "#" },
    { label: "Status", href: "#" },
  ],
  resources: [
    { label: "Help Docs", href: "#" },
    { label: "On-Demand Demo", href: "#" },
    { label: "ClickUp University", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Events", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Import", href: "#" },
    { label: "API", href: "#" },
    { label: "Consultants", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  features: [
    { label: "Gantt Chart", href: "#" },
    { label: "Dashboards", href: "#" },
    { label: "Native Time Tracking", href: "#" },
    { label: "Mind Maps", href: "#" },
    { label: "Automations", href: "#" },
    { label: "Notepad", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Email", href: "#" },
    { label: "To-Do List", href: "#" },
    { label: "Kanban Board", href: "#" },
    { label: "Sprints", href: "#" },
  ],
  compare: [
    { label: "vs Monday", href: "#" },
    { label: "vs Asana", href: "#" },
    { label: "vs Jira", href: "#" },
    { label: "vs Trello", href: "#" },
    { label: "vs Airtable", href: "#" },
    { label: "vs Notion", href: "#" },
    { label: "vs Basecamp", href: "#" },
    { label: "vs Wrike", href: "#" },
    { label: "vs MS Project", href: "#" },
    { label: "vs Todoist", href: "#" },
    { label: "vs Smartsheet", href: "#" },
  ],
  learn: [
    { label: "Blog", href: "#" },
    { label: "Software Team Hub", href: "#" },
    { label: "Agency Hub", href: "#" },
  ],
  socialIcons: [
    { icon: <ImLinkedin size={24} />, href: "#" },
    { icon: <FaFacebookSquare size={24} />, href: "#" },
    { icon: <PiInstagramLogoFill size={24} />, href: "#" },
    { icon: <FaSquareXTwitter size={24} />, href: "#" },
  ],
  storeButtons: [
    { src: "/placeholder.svg?height=40&width=120", alt: "Download on the App Store" },
    { src: "/placeholder.svg?height=40&width=135", alt: "Get it on Google Play" },
    { src: "/placeholder.svg?height=40&width=120", alt: "Download on the Mac App Store" },
    { src: "/placeholder.svg?height=40&width=120", alt: "Get it from Microsoft" },
  ],
};
