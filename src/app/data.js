import { FaReact } from "react-icons/fa";

export const mernStackSkills = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React.js",
        description:
          "I am proficient in using React.js, a powerful JavaScript library for building user interfaces. I leverage React.js to create reusable UI components, ensuring efficiency and interactivity in the development of single-page applications.",
        icon: <FaReact />,
      },
      {
        name: "Next.js",
        description:
          "I use Next.js, a React framework, to build server-side rendered (SSR) websites. This enables me to create dynamic web pages with faster page load times and improved SEO.",
      },
      {
        name: "Redux",
        description:
          "With expertise in Redux, I manage the state of my applications in a predictable way. This centralized state management is particularly beneficial in handling complex data flow within large-scale projects.",
      },
      // Add descriptions for other frontend skills as needed
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        description:
          "I am skilled in using Node.js, a server-side JavaScript runtime, for building scalable and efficient network applications. This allows me to execute JavaScript code outside the browser environment.",
      },
      {
        name: "Express.js",
        description:
          "In backend development, I rely on Express.js, a minimalist and flexible Node.js web application framework. It simplifies the process of building robust server-side logic for web and mobile applications.",
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
          "My proficiency in MongoDB, a NoSQL database, allows me to store data in flexible, JSON-like documents. This choice is driven by MongoDB's scalability, flexibility, and ease of use, making it suitable for MERN stack applications.",
      },
      {
        name: "Mongoose (ODM)",
        description:
          "I use Mongoose, an Object Data Modeling (ODM) library, to interact with MongoDB and Node.js. It provides a higher-level, schema-based abstraction, simplifying database interactions.",
      },
      // Add descriptions for other database skills as needed
    ],
  },
  {
    category: "Other",
    skills: [
      {
        name: "Version Control (e.g., Git)",
        description:
          "I utilize Git for version control, enabling collaborative software development by tracking changes to source code. This facilitates seamless management and coordination of changes in projects.",
      },
      {
        name: "Package Managers (e.g., npm, yarn)",
        description:
          "Proficient in npm and yarn, I streamline the management of third-party libraries and dependencies in my projects. These package managers enhance efficiency in handling project dependencies.",
      },
      // Add descriptions for other general skills as needed
    ],
  },
];
