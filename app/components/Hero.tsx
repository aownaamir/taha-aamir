import face from "@/public/docs/square.jpg";
import Image from "next/image";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { Playfair_Display } from "next/font/google";
import { Roboto } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

function Hero() {
  return (
    <div
      className={`h-screen flex relative bg-slate-950 items-center justify-center`}
    >
      <ShootingStars />
      <StarsBackground />
      <div className=" relative flex flex-col gap-10 justify-center items-center">
        <div className="w-36 h-36 rounded-full overflow-hidden flex justify-center items-center">
          <Image src={face} alt="Taha" className="w-full h-full" />
        </div>
        <div className=" w-full px-10 lg:px-0 lg:w-[600px] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-center">
              <span
                className={`bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 bg-clip-text text-transparent font-bold text-5xl 400:text-6xl ${playfairDisplay.className}`}
              >
                Taha Aamir
              </span>
            </p>
            <p
              className={`${roboto.className} text-md 400:text-lg text-white text-center`}
            >
              Marketing graduate with skills in digital marketing, social media
              and brand management. Experienced in creating effective campaigns
              and using analytics to drive results.
            </p>
            <a href="#contact">
              <button className="w-24 h-10 border-[1.5px] border-slate-300 text-md 400:text-lg rounded-md text-slate-300">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
