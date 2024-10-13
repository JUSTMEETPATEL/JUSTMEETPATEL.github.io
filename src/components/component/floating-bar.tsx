"use client";
import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconTerminal, IconCode, IconMan } from "@tabler/icons-react";


const FloatingBar = () => {
  const links = [
    {
      title: "About Me",
      icon: (
        <IconMan className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#aboutme",
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    // {
    //   title: "Achievements",
    //   icon: (
    //     <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/meetpatel011/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/just_meet05/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/JUSTMEETPATEL",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
};

export default FloatingBar;
