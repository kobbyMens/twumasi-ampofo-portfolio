"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

function ContactSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailPending, setEmailPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    setEmailPending(true);
    try {
      const endpoint = "api/send";
      const response = await axios.post(endpoint, data);
      setEmailPending(false);
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        setErrorMessage(null);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Unable to send email, try again later");
      setEmailSubmitted(false);
    }
  };

  return (
    <section id="contact" className="snap-start">
      <div className="h-screen container px-4 sm:px-12 mx-auto">
        <div className="relative w-full ">
          <div className="absolute w-full top-[95px] md:top-[90px] flex justify-center">
            <h2 className="text-2xl md:text-3xl tracking-widest font-semibold opacity-70">
              Contact Me
            </h2>
          </div>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 ">
          <div className="space-y-4 md:basis-1/2">
            <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold">
              Let&apos;s connect
            </h3>
            <p className="opacity-50 text-sm md:text-base">
              I am currently available to work on new projects. You can hit me
              up via my email and I will respond as soon as possible.
            </p>
            <div className="flex gap-4">
              <Link href={"/"} className="hover:opacity-100 opacity-50">
                <GitHubIcon fontSize={"large"} />
              </Link>
              <Link href={"/"} className="hover:opacity-100 opacity-50">
                <LinkedInIcon fontSize="large" />
              </Link>
            </div>
          </div>

          <div className="lg:px-8 form-container w-full md:basis-1/2">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="text-sm">
                  Your email
                </label>
                <input
                  className="contact-input  text-sm border border-[#33353F] bg-[#121212] hover:bg-[#18191E] rounded-lg"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="kobbymens@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-sm">
                  Subject
                </label>
                <input
                  className=" contact-input border border-[#33353F] text-sm bg-[#121212] hover:bg-[#18191E] rounded-lg"
                  id="subject"
                  name="subject"
                  placeholder="Main reason for connecting"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  className="contact-input  border border-[#33353F] text-sm bg-[#121212] hover:bg-[#18191E] rounded-lg "
                  id="message"
                  name="message"
                  placeholder="Hello, I am Kwame....."
                />
              </div>
              <button
                className="flex py-2 rounded-lg font-semibold text-black hover:bg-[#47be90] bg-[#57d6a5] w-full align-center justify-center"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
