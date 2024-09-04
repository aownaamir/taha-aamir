"use client";

import { useState } from "react";
import { links } from "../data/data";
import SectionHeader from "./SectionHeader";
import { FloatingDock } from "./ui/floating-dock";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { Dancing_Script } from "next/font/google";
import { sendContactForm } from "@/app/lib/api";

const dancingScript = Dancing_Script({
  weight: ["400"],
  subsets: ["latin"],
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = { name, email, message };
    setIsLoading(true);
    try {
      await sendContactForm(data);
      setName("");
      setEmail("");
      setMessage("");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }

  const year = new Date().getFullYear();

  return (
    <div
      id="contact"
      className="w-full  relative px-6 lg:px-20 pt-10  bg-slate-950 flex flex-col justify-center items-center gap-5"
    >
      <ShootingStars />
      <StarsBackground />
      <SectionHeader title="Contact" />
      <div className="w-full h-[600px] 375:h-[490px]  lg:h-[300px]   flex flex-col lg:flex-row justify-center items-center">
        <div className=" w-full h-full   flex justify-center items-center">
          <div className=" w-[90%]  relative mb-5">
            <p
              className={`text-slate-300 text-3xl lg:text-5xl leading-snug text-center font-semibold ${dancingScript.className}`}
            >
              Discipline your mind, stay consistent, and watch your life grow.
            </p>
            <p className="absolute right-0 -bottom-14 lg:-bottom-12 text-slate-300 text-xl">
              &mdash; Taha Aamir
            </p>
          </div>
        </div>
        <div className=" w-full h-full  flex justify-center items-center">
          <form
            action=""
            className=" w-full z-10 flex flex-col justify-center items-center gap-7 lg::gap-10"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-full lg:w-[70%]">
              <input
                value={name}
                required={true}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="w-full bg-transparent pb-2 border-b border-slate-300 focus:ring-0 focus:outline-none text-slate-300 "
              />
            </div>
            <div className="w-full lg:w-[70%]">
              <input
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="w-full bg-transparent pb-2 border-b border-slate-300 focus:ring-0 focus:outline-none text-slate-300 "
              />
            </div>
            <div className="w-full lg:w-[70%]">
              <textarea
                value={message}
                required={true}
                onChange={(e) => setMessage(e.target.value)}
                name=""
                id=""
                placeholder="Message..."
                className="w-full bg-transparent pb-2 border-b border-slate-300 focus:ring-0 focus:outline-none text-slate-300 "
              />
            </div>
            <button
              disabled={isLoading}
              className="w-24 h-10 border-[1.5px] border-slate-300 rounded-md text-slate-300"
            >
              {isLoading ? "Sending" : "Send"}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex items-center justify-center  z-10">
        <FloatingDock
          items={links}
          desktopClassName="bg-transparent"
          mobileClassName="flex"
        />
      </div>
    </div>
  );
}

export default Contact;
