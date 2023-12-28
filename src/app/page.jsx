import Image from "next/image";
import Button from "@/components/common/Button";
import Link from "next/link";
import HeroSkills from "@/components/homePage/HeroSkills";

import SkillCards from "@/components/homePage/SkillCards";

export default function Home() {
  return (
    <div className="">
      <section className="min-h-screen flex flex-col justify-between bg-gradient-radial to-75% bg-no-repeat from-indigo-900/50 to-transparent">
        <div className=""></div>
        <div className="">
          <p className="text-center opacity-75 font-semibold mb-8 ">
            FULL STACK WEB DEVELOPER
          </p>
          <h1 className="text-5xl sm:text-7xl text-center font-bold">
            Hello, I’m
            <br />
            <span className="text-primary ">Probir Sarkar</span>
          </h1>
          <p className="max-w-3xl text-center mx-auto mt-8 text-lg">
            I am a full-stack developer passionate about building scalable and
            performant web applications using the MERN stack (MongoDB, Express,
            React and Node.js).
          </p>
          <div className="flex justify-center mt-8">
            <Button variant="primary">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <HeroSkills />
      </section>
      <section className="min-h-screen w-full mx-auto ">
        <h2 className="text-5xl text-center font-bold py-8 leading-relaxed ">
          <span className="text-primary ">Skills</span> I have to show
        </h2>
        <div className="flex">
          <div className="w-full ">
            <SkillCards />
          </div>
        </div>
      </section>
    </div>
  );
}
