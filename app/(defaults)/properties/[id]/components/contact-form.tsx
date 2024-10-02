"use client";
import React from "react";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import profile from "@/public/images/profile.png";
import { sendMail } from "../action";
import InputField from "./input-field";
import { useToast } from "@/context/toast-context";

interface FormData {
  name: string;
  email: string;
  contact: string;
  message: string;
}

const ContactForm = () => {
  const { showToast } = useToast();
  const methods = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      from_email: data.email,
      name: data.name,
      phone: data.contact,
      email: data.email,
      message: data.message,
    };

    try {
      await sendMail(templateParams);
      showToast("Your message have been sent successfully!", "success");
      methods.reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <div className="flex mx-auto justify-center lg:order-last order-first my-30 h-[765px] p-10 border border-solid border-gray-300 w-full">
      <div className="items-center justify-center text-center">
        <Image
          src={profile}
          alt="img"
          className="mx-auto rounded-full h-[100px] w-[100px]"
        />
        <h1 className="text-xl font-bold my-3 dark:text-white">Simon Wood</h1>
        <h1 className="text-[1px] text-gray-500 text-semibold">
          Chief Marketing Officer
        </h1>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="my-3"
            noValidate
          >
            <InputField
              name="name"
              placeholder="Name"
              validation={{ required: "Name is required" }}
            />
            <InputField
              name="email"
              placeholder="Email"
              type="email"
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
            />
            <InputField
              name="contact"
              placeholder="Phone Number"
              type="text"
              validation={{
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be 10 digits & neumaric",
                },
              }}
              maxLength={10}
            />
            <InputField
              name="message"
              placeholder="Message"
              type="textarea"
              rows={15}
              className="w-[280px] my-3 p-5 bg-gray-200 mx-auto block h-[150px] resize-none"
              validation={{ required: "Message is required" }}
            />
            <button
              type="submit"
              className="bg-red-500 p-4 text-white font-bold opacity-85 mx-auto block"
              disabled={methods.formState.isSubmitting}
            >
              {methods.formState.isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ContactForm;
