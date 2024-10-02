"use client";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { sendMail } from "../action";
import { useToast } from "@/context/toast-context";
import FormField from "./form-field";
import SectionTitle from "@/components/title-component/section-title";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const { showToast } = useToast();
  const methods = useForm<FormValues>();

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const templateParams = {
      from_email: data.email,
      name: data.name,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    };

    try {
      await sendMail(templateParams);
      showToast("Your message has been sent successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <SectionTitle
        title="Get In Touch"
        titleColor="text-black"
        description="Get in touch with us today, and let's turn your real estate dreams into reality."
        className="text-left dark:text-white"
      />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="name"
              type="text"
              placeholder="Name"
              validationRules={{ required: "Name is required" }}
            />
            <FormField
              name="email"
              type="email"
              placeholder="Email"
              validationRules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
            />
            <FormField
              name="phone"
              type="text"
              placeholder="Phone Number"
              validationRules={{
                required: "Phone number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be 10 digits & neumaric",
                },
              }}
              maxLength={10}
            />
            <FormField
              name="subject"
              type="text"
              placeholder="Subject"
              validationRules={{ required: "Subject is required" }}
            />
          </div>
          <FormField
            name="message"
            type="textarea"
            placeholder="Message"
            validationRules={{ required: "Message is required" }}
          />
          <button
            type="submit"
            className="w-full md:w-[40%] px-8 py-3 my-5 opacity-90 text-white font-semibold text-[18px] bg-red-500 items-center justify-center hover:bg-yellow-500 hover:text-white duration-1000"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
