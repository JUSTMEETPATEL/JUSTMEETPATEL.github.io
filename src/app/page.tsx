'use client'
import AboutMe from "@/components/component/about-me";
import Project from "@/components/component/project";
import Skills from "@/components/component/skills";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Separator } from "@/components/ui/separator";
import {  products } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading spinner
  }
  return (
    <>
  
      <main>
        {/* Hero Section */}
        <section>
          <HeroParallax products={products} />
        </section>
        {/* About Me Section */}
        <section id="aboutme">
          <AboutMe />
        </section>
        <Separator className="my-32" />
        {/* Project Section */}
        <section id = "projects">
          <Project />
        </section>
        {/* Skill Section */}
        <section id="skills">
          <Skills />
        </section>
        {/* Achievment Section */}
        {/* <Separator className="my-32"/>
        <section>
          <Achievments />
        </section> */}
      </main>
      
    </>
  );
}

