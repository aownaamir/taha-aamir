import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Lisence from "./components/Lisence";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Lisence />
    </div>
  );
}

export default Home;
