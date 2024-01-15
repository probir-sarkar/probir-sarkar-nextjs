import { dmSerifDisplay } from "@/styles/fonts";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <>
      <section className="min-h-screen w-10/12 mx-auto py-8">
        <h2 className="xl:text-5xl  text-3xl font-bold py-8 leading-relaxed ">
          <span className="text-primary">Get in Touch</span> with me
        </h2>

        <div className="grid items-end lg:gap-40 gap-20 md:grid-cols-2 grid-cols-1">
          <div className="">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="grid gap-2">
              <h5 className={`text-xl font-semibold ${dmSerifDisplay.className}`}>Location</h5>
              <p>Mohali, India</p>
            </div>
            <div className="grid gap-2">
              <h5 className={`text-xl font-semibold ${dmSerifDisplay.className}`}>Talk to me</h5>
              <div className="grid">
                <Link href="tel:+91-951-154-9471">+91-951-154-9471</Link>
                <Link href="mailto:me@probirsarkar.com">me@probirsarkar.com</Link>
              </div>
            </div>
            <div className="grid gap-2">
              <h5 className={`text-xl font-semibold ${dmSerifDisplay.className}`}>Social</h5>
              <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/probir-sarkar">
                  <FaLinkedin className="text-2xl" />
                </Link>
                <Link href="https://wa.me/919511549471">
                  <FaWhatsappSquare className="text-2xl" />
                </Link>
                <Link href="https://github.com/probir-sarkar">
                  <FaGithubSquare className="text-2xl" />
                </Link>
                <Link href="https://blog.probirsarkar.com/">
                  <FaMedium className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
