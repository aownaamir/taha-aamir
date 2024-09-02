import Education from "../svgs/Education";
import Person from "../svgs/Person";
import Work from "../svgs/Work";
import { FaBirthdayCake } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidBusSchool } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { GiIsland } from "react-icons/gi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { aboutMe } from "@/app/data/data";
import SectionHeader from "./SectionHeader";

function About() {
  return (
    <div className="relative px-10 pt-10 w-full h-[115vh] lg:h-screen bg-slate-950">
      <ShootingStars />
      <StarsBackground />

      <SectionHeader title="About Me" />
      <div className="mt-16 flex flex-col lg:flex-row w-full justify-center items-center divide-y lg:divide-x lg:divide-y-0 divide-slate-300">
        {aboutMe.map((item, i) => (
          <div
            key={i}
            className="w-[350px] h-[300px] text-slate-300  flex flex-col gap-5 justify-center items-center "
          >
            <div className="w-[75px] h-[75px] flex justify-center items-center border border-slate-300 rounded-full">
              <item.svg size="35px" />
            </div>
            <p className="flex justify-center items-center gap-2">
              <item.icon1 /> {item.num1}
            </p>
            <p className="flex justify-center items-center gap-2">
              <item.icon2 /> {item.num2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
