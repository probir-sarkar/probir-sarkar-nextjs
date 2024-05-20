// SkillCards.js
"use client";
import React from "react";
import { FaCode } from "react-icons/fa";
import { IconContext } from "react-icons";
import { mernStackSkills } from "@/app/data";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { motion } from "framer-motion";

const SkillCards = () => {
  const allSkills = mernStackSkills.flatMap((skillCategory) => skillCategory.skills);
  const finalSkills = [{ category: "All", skills: allSkills }, ...mernStackSkills];
  return (
    <IconContext.Provider value={{ size: "1.5em", className: "flex-none" }}>
      <div className="w-11/12 mx-auto dark">
        <Tabs
          className="flex justify-center"
          color="primary"
          variant="underlined"
          size="large"
          defaultSelectedKey="0"
          radius="full"
        >
          {finalSkills.map((skillCategory, index) => (
            <Tab key={index} title={skillCategory.category}>
              <SkillCardList skills={skillCategory.skills} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </IconContext.Provider>
  );
};

export default SkillCards;

const SkillCardList = ({ skills }) => {
  return (
    <div className="w-full grid gap-4 xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8">
      {skills.map((skill, index) => (
        <React.Fragment key={index}>
          <SkillCard skill={skill} index={index} />
        </React.Fragment>
      ))}
    </div>
  );
};

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "linear", delay: index * 0.1 }}
    >
      <Card className="w-full h-full bg-slate-900 hover:bg-secondary/75 border border-gray-800 hover:border-primary transition-all ease-in-out duration-200 cursor-pointer ">
        <CardHeader className="flex gap-2 pt-3">
          <div className="rounded-full p-2 bg-primary/25 text-primary">{skill?.icon || <FaCode />}</div>
          <p className="text-xl font-semibold">{skill.name}</p>
        </CardHeader>
        <CardBody className="">
          <p className="text-gray-300">{skill.description || "No description available"}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};
