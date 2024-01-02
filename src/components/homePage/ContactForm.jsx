import { dmSerifDisplay } from "@/styles/fonts";
import Link from "next/link";

const ContactForm = () => {
  return (
    <>
      <section className="min-h-screen w-10/12 mx-auto">
        <h2 className="text-6xl font-bold py-8 leading-relaxed ">
          <span className="text-primary">Get in Touch</span> with me
        </h2>

        <div className="grid items-end lg:gap-40 gap-4 md:grid-cols-2 grid-cols-1">
          <div className="">
            <p>
              Please fill out the form below to send me an email and I will get
              back to you as soon as possible.
            </p>
            <form action="" className="mt-20 space-y-12 ">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className=" text-xl py-2 w-full appearance-none bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className=" text-xl py-2 w-full appearance-none bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
              />
              <textarea
                name="message"
                id="message"
                rows="2"
                placeholder="Message"
                className=" text-xl py-2 w-full appearance-none bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className={`w-full bg-gray-600 py-3 text-xl  text-white tracking-wider hover:bg-gray-700 transition-all ease-in-out duration-200 ${dmSerifDisplay.className}`}
              >
                Send
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="grid gap-2">
              <h5
                className={`text-xl font-semibold ${dmSerifDisplay.className}`}
              >
                Location
              </h5>
              <p>Chandigrh , India</p>
            </div>
            <div className="grid gap-2">
              <h5
                className={`text-xl font-semibold ${dmSerifDisplay.className}`}
              >
                Talk to me
              </h5>
              <div className="grid">
                <Link href="tel:+91-951-154-9471">+91-951-154-9471</Link>
                <Link href="mailto:me@probirsarkar.com">
                  me@probirsarkar.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
