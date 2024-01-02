import { FaReact, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress, SiMongodb, SiNextdotjs, SiRedis } from "react-icons/si";
import {
  BiLogoPostgresql,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";

export const mernStackSkills = [
  {
    category: "Frontend",
    // some details about the category
    description:
      "I have experience in building interactive and responsive user interfaces using React.js.",
    skills: [
      {
        name: "JavaScript",
        description:
          "Leveraging the latest JavaScript methods and ES6 functional programming for creating robust and dynamic full-stack applications.",
        icon: <BiLogoJavascript />,
      },
      {
        name: "TypeScript",
        description:
          "Proficient in using TypeScript, a superset of JavaScript, for dynamic web applications, emphasizing a better developer experience (DX)",
        icon: <BiLogoTypescript />,
      },
      {
        name: "React.js",
        description:
          "Skilled in utilizing React.js to craft responsive and user-centric interfaces with reusable components, ensuring optimal performance.",
        icon: <FaReact />,
      },
      {
        name: "Next.js",
        description:
          "Experienced with Next.js for building server-rendered and static websites, creating performant and SEO-friendly web applications.",
        icon: <SiNextdotjs />,
      },
      {
        name: "Redux",
        description:
          "Adept in Redux for managing state in React, ensuring a streamlined and predictable data flow for scalable and maintainable code.",
        icon: <TbBrandRedux />,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        description:
          "Skilled in Node.js for scalable server-side apps, prioritizing asynchronous programming and efficient data handling.",
        icon: <FaNodeJs />,
      },
      {
        name: "Express.js",
        description:
          "Leveraging Express.js for modular server-side applications, prioritizing robust API creation and optimizing overall performance.",
        icon: <SiExpress />,
      },
      {
        name: "AWS",
        description:
          "Utilizing AWS S3 for storage and Elastic Beanstalk for hosting to deploy and manage Node.js applications efficiently.",
        icon: <FaAws />,
      },
      // Add descriptions for other backend skills as needed
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "MongoDB",
        description:
          "Harnessing MongoDB for agile and rapid data storage, enabling efficient management of unstructured data in Node.js applications.",
        icon: <SiMongodb />,
      },
      {
        name: "PostgreSQL",
        description:
          "Leveraging PostgreSQL for reliable and structured data storage, ensuring seamless management and retrieval in applications.",
        icon: <BiLogoPostgresql />,
      },
      {
        name: "Redis",
        description:
          "Applying Redis to optimize data caching, ensuring high performance and efficient access in applications.",
        icon: <SiRedis />,
      },
    ],
  },
  {
    category: "Other",
    skills: [
      {
        name: "Git & GitHub",
        description:
          "Using Git and GitHub for version control and collaboration, streamlining code management and project workflows.",
        icon: <FaGitAlt />,
      },
    ],
  },
];
