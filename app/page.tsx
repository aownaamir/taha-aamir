import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Lisence from "./components/Lisence";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <Contact />
      <Lisence />
    </div>
  );
}

export default Home;
