import { links } from "../data/data";
import SectionHeader from "./SectionHeader";
import { FloatingDock } from "./ui/floating-dock";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: ["400"],
  subsets: ["latin"],
});

function Contact() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full border border-white  relative px-6 lg:px-20 pt-10  bg-slate-950 flex flex-col justify-center items-center gap-2">
      <ShootingStars />
      <StarsBackground />
      <SectionHeader title="Contact" />
      <div className="w-full h-[600px] 375:h-[490px]  lg:h-[300px]   flex flex-col lg:flex-row justify-center items-center">
        <div className=" w-full h-full   flex justify-center items-center">
          <div className=" w-[90%]  relative">
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
          >
            <div className="w-full lg:w-[70%]">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent pb-2 border-b border-slate-300 focus:ring-0 focus:outline-none text-slate-300 "
              />
            </div>
            <div className="w-full lg:w-[70%]">
              <input
                type="text"
                placeholder="Email"
                className="w-full bg-transparent pb-2 border-b border-slate-300 focus:ring-0 focus:outline-none text-slate-300 "
              />
            </div>
            <div className="w-full lg:w-[70%]">
              <input
                type="text"
                placeholder="message..."
                className="w-full bg-transparent pb-2 border-b border-slate-300 focus:ring-0 focus:outline-none text-slate-300 "
              />
            </div>
            <button className="w-24 h-10 border-[1.5px] border-slate-300 rounded-md text-slate-300">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex items-center justify-center  ">
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
