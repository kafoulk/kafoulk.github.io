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
  tripguide,
  threejs,
  passionistasProject,
  APLogo,
  connerPrairie,
  unity,
  unreal,
  electron,
  jagsparkScreen,
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
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "JagSpark",
    description:
      "An HCI-researched, cross-platform mobile application developed using React and deployed as an Android APK, designed to reduce social friction and foster low-pressure peer connections for university students.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Android APK",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
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
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
