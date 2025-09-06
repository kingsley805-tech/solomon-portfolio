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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  logo,
  
  
  carrent,
  jobit,
  tripguide,
   postgre,
  oracle,
  api,
  windows,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "State Management",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Modular Design",
    icon: creator,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Oracle DB",
    icon: oracle,
  },
  {
    name: "REST APIs",
    icon: api,
  },
  {
    name: "Windows OS",
    icon: windows,
  },
  {
    name: "Postgresql",
    icon: postgre,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "Hardware & Software Technician",
    company_name: "COCOBOD",
    icon: logo,
    iconBg: "#383E56",
    date: "2025- Present",
    points: [
  "Delivered efficient hardware support, including diagnosing and repairing UPS units, copiers, and printers, as well as labeling and maintaining telephone systems and newly acquired IT assets in a high-volume public sector setting. (Oct – Dec 2024)",
  "Provided software and application support by assisting staff with IT tools, performing regular backups of database applications, managing domain resources, and distributing staff pay slips securely. (Jan – Mar 2025)",
  "Managed network infrastructure, resolving all LAN and networking issues, delivering weekly verbal network performance reports, and ensuring seamless operation of network printers and shared LAN resources. (Apr – Aug 2025)",
  "Led digital communications and publicity efforts, creating promotional materials (flyers, birthday cards, brochures), managing company social media accounts, and executing all digital and public-facing design tasks, along with asset labeling. (Sep – Oct 2025)",
],

  },
  {
  title: "Internship - Ghana",
  company_name: "Hedge Pensions Trust (HPT)",
  icon: logo, // replace with your actual icon variable or path
  iconBg: "#E6DEDD",
  date: "2024",
  points: [
    "Supported the IT and data management team, contributing to internal tools and pension record systems.",
    "Assisted in troubleshooting company IT infrastructures and providing solutions.",
    "Resolved internet issues, printer and photocopier issues.",
    "Handled system unit and other peripheral device support.",
  ],
},

 {
  title: "Internship - Ghana",
  company_name: "Civil and Local Government Service Association, Ghana (CLOGSAG)",
  icon: logo, // replace with your actual icon variable or path
  iconBg: "#383E56",
  date: "2021",
  points: [
    "Assisted the media team in capturing and recording all company programs and events.",
    "Managed the companys YouTube and other social media accounts, including live streaming and uploading content.",
    "Performed basic graphic design, photo, and video editing after capturing images and videos.",
    "Assisted in troubleshooting company IT infrastructures, including internet, printers, photocopiers, and system units with peripheral devices.",
  ],
},

  {
    title: "Backend Developer",
    company_name: "Sleek",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "inventory system",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Encarta-debug/dankyisolomonjavafx",
  },
  {
    name: "MediFlux(working ON)",
    description:
      "Web application that enables users to search for available medications, view estimated price ranges, and locate nearby pharmacies or health centers based  location.",
    tags: [
      {
        name: "react,Node",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Master Course M-System",
    description:
      "It enables students and instructors to manage courses efficiently by allowing users to search and register for available courses and access learning materials online.",
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
    source_code_link: "https://github.com/Encarta-debug/skill-master-course-management",
  },
];

export { services, technologies, experiences, testimonials, projects };
