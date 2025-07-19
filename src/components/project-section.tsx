import React from "react";
import Link from "next/link";
import { FaCode, FaLink } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { Project, projects } from "@/data/project.data";

const ProjectSection = () => {
  return (
    <section className="w-11/12 mx-auto md:mt-24 ">
      <h2 className="xl:text-5xl  md:text-4xl text-3xl text-center font-bold xl:mb-12 md:mb-8 mb-4 leading-relaxed ">
        Personal <span className="text-primary ">Projects</span>
      </h2>

      <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group/project flex flex-col justify-between text-white w-full h-full bg-slate-900 border border-gray-800 hover:border-primary rounded-2xl overflow-hidden ">
      <div className="p-0">
        <ProjectImage project={project} />
      </div>
      <div className="p-3 flex-auto">
        <div className="flex items-center justify-between ">
          <h3 className="text-xl font-bold ">{project.name}</h3>
          <div className="xl:opacity-0 group-hover/project:opacity-100  flex space-x-2 transition-opacity ease-in-out duration-200 ">
            <Link
              className="hover:text-primary"
              target="_blank"
              href={project.live}
            >
              <FaLink className="w-5 h-5" />
            </Link>
            <Link
              className="hover:text-primary"
              target="_blank"
              href={project.github}
            >
              <FiGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <p className="text-gray-400">{project.description}</p>
      </div>
      <div className="p-3 ">
        <div className="flex">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((stack) => (
              <div
                className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium px-1 h-7 text-small rounded-full bg-transparent border-success text-success"
                key={stack}
              >
                <span className="flex-1 text-inherit font-normal px-2">
                  {stack}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectImage = ({ project }: { project: Project }) => {
  return (
    <div className="w-full h-36 flex">
      <div className="w-full h-full bg-gradient-to-tl from-secondary to-slate-900 flex justify-center items-center">
        {project.name}
      </div>
    </div>
  );
};
