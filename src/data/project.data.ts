export type Project = {
  name: string;
  description: string;
  github: string;
  live: string;
  stack: string[];
};
export type Projects = Project[];

export const projects: Projects = [
  {
    name: "Toolbox",
    description:
      "A privacy-focused collection of free, powerful utilities. Process files locally in your browser with zero upload wait times.",
    github: "https://github.com/probir-sarkar/toolbox",
    live: "https://toolbox.probir.dev/",
    stack: ["Tanstack Start", "Web Workers"]
  },
  {
    name: "Quizzy",
    description: "Thousands of AI-generated quizzes built autonomously using Next.js, AI SDK, and OpenRouter.",
    github: "https://github.com/probir-sarkar/quizzy",
    live: "https://quizzy.probir.dev/",
    stack: ["Next.js", "AI SDK", "OpenRouter"]
  },
  {
    name: "WarHistory",
    description: "Catalog of major wars and battles spanning 3500 years, organized by each year.",
    github: "https://github.com/probir-sarkar/ai-war-history",
    live: "https://war-history.probir.dev/",
    stack: ["TanStack Start", "Tailwind CSS"]
  },
  {
    name: "One-Liner JavaScript",
    description: "A collection of one-liner JavaScript snippets for your next project.",
    github: "https://github.com/probir-sarkar/one-liner-js",
    live: "https://one-liner-js.probir.dev/",
    stack: ["Astro", "Tailwind CSS", "Markdown"]
  },

  {
    name: "Posivitus",
    description: "A modern digital marketing template built with Next.js and Tailwind CSS.",
    github: "https://github.com/probir-sarkar/positivus",
    live: "https://positivus-theme.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "Shadcn/ui"]
  },
  {
    name: "Taskify",
    description: "A simple todo app with realtime sync using Firebase.",
    github: "https://github.com/probir-sarkar/to-do-app",
    live: "https://taskify.pages.dev/",
    stack: ["React", "TypeScript", "Firebase"]
  },
  {
    name: "TV Maze",
    description: "This project simulates a TV show booking application",
    github: "https://github.com/probir-sarkar/tv-maze-project",
    live: "https://tv-maze.pages.dev/",
    stack: ["React", "Vite", "SWR"]
  },
  {
    name: "CalcPlus",
    description: "Calculators and conversion tools in one place",
    github: "https://github.com/probir-sarkar/calc-plus",
    live: "https://calc-plus.probir.dev/",
    stack: ["Next.js", "Tailwind CSS"]
  },
  {
    name: "Personal Portfolio",
    description: "Personal website of Probir, built with Next.js.",
    github: "https://github.com/probir-sarkar/probir-sarkar-nextjs",
    live: "https://probirsarkar.com/",
    stack: ["Next.js", "Next UI", "Framer Motion"]
  },

  {
    name: "Personal Portfolio - Dev",
    description: "Dev variant of the personal website of Probir, built with Next.js.",
    github: "https://github.com/probir-sarkar/probir.dev",
    live: "https://probir.dev/",
    stack: ["Next.Js", "Shadcn/ui"]
  },
  {
    name: "Task Master",
    description: "A personal project featuring a simple Kanban board application.",
    github: "https://github.com/probir-sarkar/TaskMaster",
    live: "https://task-master.probir.dev/",
    stack: ["React.Js", "Node.js", "PostgreSQL"]
  }
];
