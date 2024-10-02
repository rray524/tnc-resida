"use client";
import React from "react";
import HeaderImage from "@/public/images/header.webp";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SubscribeButton from "../button/subscribe-button";
import FooterTitle from "../title-component/footer-title";
import FooterLinks from "../footer-links";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/context/toast-context";
import { links1, links2 } from "../footer-links/components";
import { sendMail } from "@/app/(defaults)/properties/[id]/action";
interface FormData {
  email: string;
}
function Footer() {
  const methods = useForm<FormData>();
  const { showToast } = useToast();

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    const templateParams = {
      from_email: data.email,
      email: data.email,
    };
    try {
      await sendMail(templateParams);
      showToast("Subscription successful!", "success");
      methods.reset();
    } catch (error) {
      showToast("There was an error with your subscription.", "error");
    }
  };

  return (
    <>
      <div className="bg-bgColors dark:bg-gulf-blue">
        <div className="flex flex-col mx-auto sm:flex-row">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center md:text-left my-10 px-5 gap-8">
            <div className="cursor-pointer text-white">
              <Image
                src={HeaderImage}
                alt="blog img"
                width={200}
                height={45}
                className="w-[200px] mx-auto md:mx-0 dark:bg-white"
              />
              <p className="text-[17px] my-3 text-gray-400">
                Embrace the world of digital currency and redefine your
                investment strategies with us.
              </p>
              <div className=" text-center flex items-center justify-center md:justify-normal gap-2 py-3">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-6 w-8 rounded-[100%] text-gray-300  hover:text-white"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-6 w-8 rounded-[100%] text-gray-300  hover:text-white"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-6 w-8 rounded-[100%] text-gray-300  hover:text-white"
                />
              </div>
            </div>
            <div className="text-white flex flex-col items-center md:items-start justify-center md:justify-start">
              <FooterTitle>Company</FooterTitle>
              <FooterLinks links={links1} />
            </div>
            <div className="text-white flex flex-col items-center md:items-start justify-center md:justify-start">
              <FooterTitle>Pages</FooterTitle>
              <FooterLinks links={links2} />
            </div>
            <div className="text-white">
              <FooterTitle>Subscribe Newsletter</FooterTitle>
              <p className="text-[17px] py-1 text-gray-400">
                Subscribe to our newsletter for weekly updates, market insights,
                and special offers.
              </p>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    {...methods.register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="block w-full px-4 py-2 mt-2 border focus:outline-none focus:ring focus:ring-opacity-40 text-gray-800"
                  />
                  {methods.formState.errors.email && (
                    <p className="text-red-400 text-sm ml-4 mt-2">
                      {methods.formState.errors.email.message}
                    </p>
                  )}
                  <div className="text-left my-5">
                    <SubscribeButton
                      onClick={methods.handleSubmit(onSubmit)}
                      isSubmitting={methods.formState.isSubmitting}
                    />
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="h-[1px] bg-gray-500 border-0 w-[100%] max-w-[1500px]" />
        </div>
        <p className="text-[16px] p-5 md:mx-20 text-gray-300 text-center">
          Copyright © 2024 TNC Resida | Powered by Simbanic
        </p>
      </div>
    </>
  );
}

export default Footer;
