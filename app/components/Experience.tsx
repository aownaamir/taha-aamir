import { experiences } from "../data/data";
import { Button } from "./ui/moving-border";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import SectionHeader from "./SectionHeader";

function Experience() {
  return (
    <div className="w-full border border-white  relative px-10 pt-10 bg-slate-950 flex flex-col justify-center items-center">
      <ShootingStars />
      <StarsBackground />
      <SectionHeader title="Experience" />

      <div className=" w-full mt-12  flex justify-center items-center">
        <div className="flex flex-col lg:grid grid-cols-3 gap-x-12 gap-y-9 justify-center items-center">
          {experiences.map((item, i) => (
            <Button
              key={item.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              className="w-[280px] h-[110px] pointer-events-none"
              containerClassName="w-[280px] h-[110px]"
            >
              <div className="w-full flex justify-center items-center gap-2">
                <div className="min-w-[30%] max-w-[30%] h-[60px] flex justify-center items-center">
                  <item.svg />
                </div>
                <div className="min-w-[60%] max-w-[60%] text-left flex flex-col gap-0">
                  <h2 className="text-md ">
                    <span>{item.position}</span>
                  </h2>
                  <p className="">
                    <span>{item.organization}</span>
                  </p>
                  <p className="text-gray-500">
                    <i>
                      {" "}
                      <span>{item.location}</span>
                    </i>
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
