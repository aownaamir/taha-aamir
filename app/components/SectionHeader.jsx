import { Playfair_Display } from "next/font/google";
const playfairDisplay = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
});

function SectionHeader({ title }) {
  return (
    <div className={`w-full flex justify-center items-center`}>
      <h1 className={`text-4xl text-slate-300 ${playfairDisplay.className}`}>
        {title}
      </h1>
    </div>
  );
}

export default SectionHeader;
