import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Myskills } from "@/components/Myskills";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
export default function Home() {
  return (
    <>
    <div className="bg-background">
       <Hero />
      <Projects />
      <Myskills />
      <Contact />
      <Navbar />

    </div>
      
    </>
  );
}
