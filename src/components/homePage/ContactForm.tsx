"use client";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@nextui-org/react";
import { submitContactForm } from "./actions";
import Image from "next/image";
interface Props {
  submitContactForm: (formData: FormData) => Promise<any>;
}

interface FormState {
  submitted: boolean;
}
const initialState = {
  submitted: false,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      variant="flat"
      className={`w-full rounded-none bg-gray-300 font-semibold`}
      isLoading={pending}
    >
      {pending ? "Submitting.." : "Submit"}
    </Button>
  );
};

const ContactForm = () => {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { submitted } = state as FormState;
  if (submitted)
    return (
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          className="text-center text-2xl font-semibold"
        >
          <Image src="/graphics/mail-send.svg" className="w-4/6 mx-auto my-8" alt="emoji" width={500} height={500} />
        </motion.div>
        <p className="text-center">Thank you for your message!</p>
        <p className="text-center">I will get back to you as soon as possible.</p>
      </div>
    );
  return (
    <>
      <p>Please fill out the form below to send me an email and I will get back to you as soon as possible.</p>
      <form action={formAction} className="xl:mt-20 mt-10 space-y-12 ">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className=" text-xl py-2 w-full appearance-none bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className=" text-xl py-2 w-full appearance-none bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
          required
        />
        <textarea
          name="message"
          id="message"
          rows={2}
          placeholder="Message"
          className=" text-xl py-2 w-full appearance-none bg-transparent border-b border-gray-300 focus:border-primary focus:outline-none"
          required
        />
        <SubmitButton />
      </form>
    </>
  );
};

export default ContactForm;
