import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Experience2 from "./components/Experience2";
import Lisence from "./components/Lisence";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Experience />
      {/* <Experience2 /> */}
      <Contact />
      <Lisence />
    </div>
  );
}

export default Home;
