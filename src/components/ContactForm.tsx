"use client";

import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { submitContact } from "@/app/actions/contact";
import { contactSchema } from "@/schemas/contactSchema";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

type FormData = z.infer<typeof contactSchema>;

const FormErrors = ({ errors }:{ errors: FieldErrors<FormData> }) => {
  if (Object.keys(errors).length === 0) return null;
  
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg" role="alert">
      <p className="font-bold">Please correct the following errors:</p>
      <ul className="list-disc list-inside mt-2">
        {Object.entries(errors).map(([field, error]) => (
          <li key={field}>{error?.message as string}</li>
        ))}
      </ul>
    </div>
  );
};

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = handleSubmit((data: FormData) => {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitContact(formData);

      if (result.error) {
        toast.error(
          typeof result.error === "string"
            ? result.error
            : "Failed to send message. Please try again.",
          {
            duration: 5000,
            style: {
              padding: "7px 15px 7px 15px",
              border: "2px solid #fc6a74",
              background: "#ffe8ea",
            },
          }
        );
      } else {
        toast.success("Message sent successfully!", {
          duration: 5000,
          style: {
            padding: "12px 20px 12px 20px",
            border: "2px solid #449e36",
            background: "#e4f7e1",
          },
        });
        reset();
      }
    });
  });

  return (
    <>
      <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-lg p-4 md:p-8 shadow-input">
          <form onSubmit={onSubmit} className="px-4 md:px-6 flex flex-col gap-y-4">
            <h1 className="text-white font-semibold text-2xl md:text-3xl">{"Let's get in touch"}</h1>
            <input
              id="name"
              placeholder="Your Name"
              {...register("name")}
              className="outline-none placeholder:text-white text-white text-sm md:text-lg backdrop-brightness-125 ring-1 focus:ring-2 ring-white/70 focus:ring-white/80 bg-white/0 rounded-lg px-4 md:px-6 w-full h-12 mt-4"
            />
            <input
              id="email"
              placeholder="Email Address"
              type="email"
              {...register("email")}
              className="outline-none placeholder:text-white text-white text-sm md:text-lg backdrop-brightness-125 ring-1 focus:ring-2 ring-white/70 focus:ring-white/80 bg-white/0 rounded-lg px-4 md:px-6 w-full h-12 mt-4"
            />
            <input
              id="subject"
              placeholder="Subject"
              {...register("subject")}
              className="outline-none placeholder:text-white text-white text-sm md:text-lg backdrop-brightness-125 ring-1 focus:ring-2 ring-white/70 focus:ring-white/80 bg-white/0 rounded-lg px-4 md:px-6 w-full h-12 mt-4"
            />
            <textarea
              id="message"
              placeholder="Message"
              {...register("message")}
              className="outline-none placeholder:text-white text-white text-sm md:text-lg backdrop-brightness-125 ring-1 focus:ring-2 ring-white/70 focus:ring-white/80 bg-white/0 rounded-lg px-4 md:px-6 pt-2 w-full mt-4"
              rows={4}
            />
            <FormErrors errors={errors} />
            <MagicButton
            title="Send message"
            icon={isPending?
              <span className="loader"></span>:<FaLocationArrow />}
            position="right"
          />
            {/* <button
              type="submit"
              disabled={isPending}
              className="outline-none placeholder:text-white text-white text-sm md:text-lg backdrop-brightness-125 ring-1 focus:ring-2 ring-white/70 focus:ring-white/80 bg-white/0 rounded-lg px-4 md:px-6 w-full h-12 mt-4 flex justify-center items-center text-center"
            >
              {isPending ? (
                <>
                  <span>Sending...</span>
                  <span className="loader"></span>
                </>
              ) : (
                "Send Message"
              )}
            </button> */}
          </form>
        {/* </div> */}
      </div>
    </>
  );
}
