"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "./actions";
import Image from "next/image";
import { toast } from "sonner";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(36, { message: "Name must be at most 36 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(2000, { message: "Message must be at most 2000 characters long." }),
});
type ContactFields = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFields>({
    resolver: zodResolver(contactFormSchema),
  });
  const [submitted, setSubmitted] = useState(false);
  const onSubmit: SubmitHandler<ContactFields> = async (data) => {
    try {
      const submitForm = await submitContactForm(data);
      if (!submitForm) throw new Error("Failed to submit form");
      toast.success("Form submitted successfully");
      setSubmitted(true);
    } catch (e) {
      toast.error("Failed to submit form");
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="xl:mt-20 mt-10 space-y-12 ">
        <div className="">
          <input
            type="text"
            placeholder="Name"
            className={` text-xl py-2 w-full appearance-none bg-transparent border-b border-gray-300  focus:outline-none
            ${errors.name ? "border-red-500" : "focus:border-primary"}
            `}
            {...register("name")}
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>
        <div className="">
          <input
            type="email"
            placeholder="Email"
            className={` text-xl py-2 w-full appearance-none bg-transparent border-b border-gray-300  focus:outline-none
            ${errors.email ? "border-red-500" : "focus:border-primary"}
            `}
            {...register("email")}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div className="">
          <textarea
            id="message"
            rows={2}
            placeholder="Message"
            className={` text-xl py-2 w-full appearance-none bg-transparent border-b border-gray-300  focus:outline-none
            ${errors.message ? "border-red-500" : "focus:border-primary"}
            `}
            {...register("message")}
          />
          <p className="text-red-500 text-sm">{errors.message?.message}</p>
        </div>
        <Button
          type="submit"
          size="lg"
          variant="flat"
          className={`w-full rounded-none bg-gray-300 font-semibold`}
          isLoading={isSubmitting}
        >
          {isSubmitting ? "Submitting.." : "Submit"}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
