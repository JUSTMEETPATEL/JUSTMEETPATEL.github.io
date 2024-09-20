import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skill from "@/components/Skill";
import MacBookDisplay from "@/components/MacBookDisplay";
import Project from "@/components/Project";
import Footer from "@/components/Footer"
import { Hackathon } from "@/components/Hackathon";


export default function Home() {
  return (
    <>

      <FloatingNav navItems={[{name: "Home",link:"/"},{name:"About",link:"#about"},{name:"Projects",link:"#project"},{name:"Hackathon",link:"#hackathon"}]}/>
      <Hero />
      <div className="h-[150vh]"></div> 
      <Education />
      <Skill />
      <Project />
      <Footer />
      <Hackathon />
      <MacBookDisplay />
    </>
  );
}
