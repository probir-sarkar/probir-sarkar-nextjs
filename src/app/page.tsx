import Button from "@/components/common/Button";
import ContactSection from "@/components/contact-section";
import HeroSkills from "@/components/hero-skills";
import ProjectSection from "@/components/project-section";
import SkillCards from "@/components/skill-cards";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-between bg-radial to-75% bg-no-repeat from-indigo-900/50 to-transparent">
        <div className=""></div>
        <div className="w-10/12 mx-auto">
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
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <HeroSkills />
      </section>
      <section className="min-h-screen w-full mx-auto bg-pattern-1 pb-8 relative">
        <div className="w-full h-1/2 bg-gradient-to-r from-primary to-secondary"></div>
        <div className="glowing-border"></div>
        <h2 className="xl:text-5xl md:text-4xl text-3xl text-center font-bold py-8 leading-relaxed ">
          Showcase of my <span className="text-primary">skills</span>
        </h2>
        <div className="flex ">
          <div className="w-full  z-[1] ">
            <SkillCards />
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent from-75% to-secondary  "></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-radial from-0% via-50% to-75% bg-no-repeat from-indigo-500/20 to-transparent bg-[length:80%_50%] bg-[50%_-50%]"></div>
      </section>
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
