import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { allProjects, Project } from "./actions";
import Link from "next/link";
import { FaCode, FaLink } from "react-icons/fa";
import { Badge } from "@nextui-org/badge";
import { FiGithub } from "react-icons/fi";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";

const ProjectSection = async () => {
  const projects = await allProjects();
  if (!projects) return <div></div>;
  return (
    <section className="w-11/12 mx-auto md:mt-36 ">
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
    <Card className="group/project text-white w-full h-full bg-slate-900 border border-gray-800 hover:border-primary ">
      <CardHeader className="p-0">
        <ProjectImage project={project} />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between ">
          <h3 className="text-xl font-bold ">{project.name}</h3>
          <div className="xl:opacity-0 group-hover/project:opacity-100  flex space-x-2 transition-opacity ease-in-out duration-200 ">
            <Link className="hover:text-primary" target="_blank" href={project.live}>
              <FaLink className="w-5 h-5" />
            </Link>
            <Link className="hover:text-primary" target="_blank" href={project.github}>
              <FiGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <p className="text-gray-400">{project.description}</p>
      </CardBody>
      <CardFooter>
        <div className="flex">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((stack) => (
              <Chip key={stack} variant="bordered" color="success">
                {stack}
              </Chip>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
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
