import { skillData } from "@/data";
import Image from "next/image";



const HeroSkills = () => {
  const { skills } = skillData;
  return (
    <div className="">
      <p className="text-center text-xl font-semibold">
        My core specialties are in
      </p>
      <div className="w-10/12 mx-auto  my-8">
        <div className="flex  mx-auto flex-wrap justify-center  gap-4  fill-gray-300">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="md:h-8 h-6  flex flex-none justify-center items-center"
            >
              <Image
                src={skill.icon}
                alt={skill.alt}
                width={0}
                height={0}
                className="fill-gray-300  w-fit max-h-full "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSkills;
