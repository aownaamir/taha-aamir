import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { aboutMe } from "@/app/data/data";
import SectionHeader from "./SectionHeader";

function About() {
  return (
    <div className="relative px-10 pt-10 w-full  h-[105vh] 360:h-[130vh] 375:h-[140vh] 380:h-[115vh] 400:h-[105vh] lg:h-[60vh] bg-slate-950 flex flex-col justify-center items-center">
      <ShootingStars />
      <StarsBackground />

      <SectionHeader title="About Me" />
      <div className=" mt-12 flex flex-col lg:flex-row w-full justify-center items-center divide-y lg:divide-x lg:divide-y-0 divide-slate-300">
        {aboutMe.map((item, i) => (
          <div
            key={i}
            className="lg:w-[350px] w-full h-[250px] xs:h-[280px] lg:h-[300px] text-slate-300  flex flex-col gap-5 justify-center items-center "
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
