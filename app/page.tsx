import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Myskills } from "@/components/Myskills";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
export default function Home() {
  return (
    <>
    <div className="bg-background">
      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Myskills />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Navbar />

    </div>
      
    </>
  );
}
