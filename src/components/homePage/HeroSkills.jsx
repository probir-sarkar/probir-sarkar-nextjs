import { NextJsIcon } from "@/components/icons/SkillsIcons";
import Image from "next/image";

const skillData = {
  skills: [
    {
      name: "React",
      icon: "/icons/react.svg",
      alt: "reactjs",
      height: 32,
      width: 96,
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs-13.svg",
      alt: "nextjs",
      height: 32,
      width: 96,
    },
    {
      name: "MongoDB",
      icon: "/icons/MongoDB.svg",
      alt: "mongodb",
      height: 32,
      width: 96,
    },
    {
      name: "Node.js",
      icon: "/icons/nodejs.svg",
      alt: "nodejs",
      height: 32,
      width: 96,
    },
    {
      name: "Express.js",
      icon: "/icons/expressjs.svg",
      alt: "expressjs",
      height: 32,
      width: 96,
    },
    {
      name: "postgreSQL",
      icon: "/icons/postgresql-horizontal.svg",
      alt: "postgresql",
      height: 32,
      width: 128,
    },
  ],
};

const HeroSkills = () => {
  const { skills } = skillData;
  return (
    <div className="">
      <p className="text-center text-xl font-semibold">
        My core specialties are in
      </p>
      <div className="flex w-10/12 mx-auto justify-center gap-4 flex-wrap py-8 fill-gray-300">
        {skills.map((skill, index) => (
          <div key={index} className="h-8 flex justify-center items-center">
            <Image
              src={skill.icon}
              width={skill.width}
              height={skill.height}
              alt={skill.alt}
              className="fill-gray-300 w-fit max-h-full "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSkills;
