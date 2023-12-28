"use client";
import { FaCode } from "react-icons/fa";
import { IconContext } from "react-icons";
import { mernStackSkills } from "@/app/data";

const SkillCards = () => {
  return (
    <IconContext.Provider value={{ size: "2em", className: "flex-none" }}>
      {mernStackSkills.map((skill, index) => (
        <div key={index}>
          <Card skill={skill} index={index} />
        </div>
      ))}
    </IconContext.Provider>
  );
};

const Card = ({ skill, index }) => {
  return (
    <div key={index} className={`py-20`}>
      <div className="w-4/5 mx-auto grid lg:grid-cols-[1fr_2fr] grid-cols-1 gap-8 ">
        <div className="">
          <h2 className="text-5xl font-bold  sticky top-0 leading-relaxed ">
            <span className="text-primary ">{skill.category}</span>
          </h2>
        </div>
        <div className="space-y-12 ">
          {skill.skills.map((skill, index1) => (
            <div
              key={index1}
              className={` bg-gray-900  flex gap-4  items-center px-6  h-36 w-full backdrop-blur rounded-md border border-gray-800  hover:border-primary  hover:shadow-[0px_0px_10px_2px_#00dc82] transition-all duration-300 ease-in-out cursor-pointer`}
            >
              <p className="text-3xl font-bold w-1/12">0{index1 + 1}/</p>

              <div className="ml-2 w-2/12 flex items-center gap-1">
                {skill?.icon || <FaCode />}
                {skill.name}
              </div>
              <p className="w-9/12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCards;
function isEven(n) {
  return n % 2 == 0;
}
