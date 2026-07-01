import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  apex,
  threejs,
  passionistasProject,
  APLogo,
  connerPrairie,
  unity,
  unreal,
  electron,
  jagsparkScreen,
  zenithVR,
  cometLab,
} from "../assets";
import { PolyhedronGeometry } from "three";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Simulation Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: backend,
  },
  {
    title: "Marketing Strategist",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Unreal Engine",
    icon: unreal,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Electron",
    icon: electron,
  },
];

const experiences: TExperience[] = [
  {
    title: "Content Creator",
    companyName: "The Passionistas Project",
    icon: passionistasProject,
    iconBg: "#E6DEDD",
    date: "January 2024 - April 2024",
    points: [
      "Developing and producing engaging short-form video content across platforms like Instagram Reels and TikTok to elevate brand visibility.",
      "Implementing current social media trends and visual styles to ensure high audience engagement and brand consistency.",
      "Participating in creative brainstorming sessions and review cycles, providing constructive feedback to optimize video performance and storytelling.",
    ],
  },
  {
    title: "Website Manager",
    companyName: "Audet & Partners, LLP",
    icon: APLogo,
    iconBg: "#FFFFFF",
    date: "January 2024 - February 2025",
    points: [
      "Redesigning and maintaining the firm's core web applications using HTML5, CSS3, JavaScript (ES6), and PHP 8 for robust backend database configuration.",
      "Collaborating with cross-functional teams, including specialized SEO strategists, to implement high-impact optimization fixes and improve Google search rankings.",
      "Implementing responsive design principles and clean code architecture to ensure cross-browser compatibility and a seamless user experience for legal clients.",
      "Participating in technical reviews and performance audits to routinely optimize site speed, database security, and search engine visibility.",
    ],
  },
  {
    title: "Website Manager & Digital Marketing Manager",
    companyName: "Audet & Partners, LLP",
    icon: APLogo,
    iconBg: "#FFFFFF",
    date: "February 2025 - Present",
    points: [
      "Promoted to dual Website and Digital Marketing Manager role by the founder to oversee the firm’s comprehensive digital presence and paid advertising campaigns.",
      "Developing, executing, and monitoring paid advertisement strategies across digital platforms to generate high-quality leads while maintaining core web development tasks.",
      "Managing the firm's official social media profiles and broadcast presence, focusing strictly on outbound content curation and brand positioning in accordance with firm governance.",
      "Collaborating directly with the founder and internal teams to align digital marketing initiatives with firm-wide compliance, outreach restrictions, and growth goals.",
    ]
  },
  {
    title: "Simulation Developer & Project Manager",
    companyName: "Conner Prairie Living History Museum",
    icon: connerPrairie,
    iconBg: "#E6DEDD",
    date: "September 2025 - Present",
    points: [
      "Serving as Project Manager and Simulation Developer to build a functional tractor simulator prototype for Conner Prairie's upcoming Food, Farm, and Energy Experience.",
      "Collaborating with museum leadership and cross-functional teams to design an interactive experience that teaches precision agriculture and seasonal farming methods.",
      "Developing and implementing backend dashboard analytics to track user engagement data and evaluate the simulation’s educational effectiveness on museum visitors.",
      "Utilizing Unity, Figma, and version control tools to establish core driving physics, 3D modeling pipelines, and responsive UI/UX tailored for a high-traffic public environment.",
    ],
  },
    {
    title: "Project Manager",
    companyName: "Convergent Media and Exploratory Technologies (COMET) Lab",
    icon: cometLab,
    iconBg: "#E6DEDD",
    date: "August 2026 - Present",
    points: [
      "Serving as Project Manager to lead cross-functional student and graduate teams in developing convergent media applications, responsive UI/UX designs, and interactive technology prototypes within the COMET Lab.",
      "Collaborating with university researchers and industry clients to scope project requirements, manage production timelines, and deploy emerging technology solutions tailored to specific stakeholder needs.",
      "Utilizing industry-standard asset pipelines, Figma, and version control tools to establish core project architectures, organize design systems, and streamline team-wide deployment strategies.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Kiersten updated our website and implemented a new SEO and paid ads strategy that increased our overall website traffic and brought the firm more qualified leads.",
    name: "William Audet",
    designation: "Founder",
    company: "Audet & Partners, LLP",
    image: "src/assets/william-audet-sq.jpg",
  },
  {
    testimonial:
      "Placeholder Text",
    name: "Dr. Ronda Hamm",
    designation: "Director of Food, Farm & Energy Experience",
    company: "Conner Prairie Living History Museum",
    image: "https://unavatar.io/github/username",
  },
  {
    testimonial:
      "Hire Kiersten... NOW. Perfect balance of curiosity, enthusiasm, and get shit done. I have seen her manage product development with a small team, design and develop full stack, and jump in the deep end of stacks shes never experienced with enthusiasm and grace. Would hire again. ",
    name: "Zeb Wood",
    designation: "CTO",
    company: "OpenMind XR",
    image: "src/assets/zebWood.png",
  },
];

const projects: TProject[] = [
  {
    name: "JagSpark",
    description:
      "An HCI-researched, cross-platform mobile application developed using React and deployed as an Android APK, designed to reduce social friction and foster low-pressure peer connections for university students.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "androidAPK",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jagsparkScreen,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "APEX Cummins Service LLM",
    description:
      "An enterprise-level LLM application developed during TechPoint Indiana's 2026 Service Engineering Reboot for Cummins Inc., designed to optimize engineering workflows and automate technical document retrieval using advanced natural language processing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: apex,
    sourceCodeLink: "https://github.com/kafoulk/cumminsSER13_2026",
  },
  {
    name: "Zenith VR",
    description:
      "A prototype virtual reality collaboration platform featuring an intelligent AI moderator, developed and evaluated to enhance remote meeting presence, promote inclusive participation, and reduce cognitive fatigue compared to traditional video conferencing tools.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "metaQuest",
        color: "green-text-gradient",
      },
      {
        name: "uxResearch",
        color: "pink-text-gradient",
      },
    ],
    image: zenithVR,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
