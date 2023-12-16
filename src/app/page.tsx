import Image from "next/image";
import Button from "@/components/common/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="my-52">
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
        <div className="">
          <Button variant="primary">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
