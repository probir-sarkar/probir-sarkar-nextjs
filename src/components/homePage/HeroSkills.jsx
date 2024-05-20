import Image from "next/image";

const skillData = {
  skills: [
    {
      name: "React",
      icon: "/icons/react.svg",
      alt: "reactjs",
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs-13.svg",
      alt: "nextjs",
    },
    {
      name: "MongoDB",
      icon: "/icons/MongoDB.svg",
      alt: "mongodb",
    },
    {
      name: "Node.js",
      icon: "/icons/nodejs.svg",
      alt: "nodejs",
    },
    {
      name: "Express.js",
      icon: "/icons/expressjs.svg",
      alt: "expressjs",
    },
    {
      name: "postgreSQL",
      icon: "/icons/postgresql-horizontal.svg",
      alt: "postgresql",
    },
  ],
};

const HeroSkills = () => {
  const { skills } = skillData;
  return (
    <div className="">
      <p className="text-center text-xl font-semibold">My core specialties are in</p>
      <div className="w-10/12 mx-auto  my-8">
        <div className="flex  mx-auto flex-wrap justify-center  gap-4  fill-gray-300">
          {skills.map((skill, index) => (
            <div key={index} className="md:h-8 h-6  flex flex-none justify-center items-center">
              <Image
                src={skill.icon}
                width={96}
                height={32}
                alt={skill.alt}
                className="fill-gray-300 w-fit max-h-full "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSkills;
