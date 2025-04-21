"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLine,
  IconBrandLinkedin,
  IconBrandX,
  IconCode,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-black" />
      ),
      href: "#hero",
      onClick: () => scrollToSection("hero"),
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-black" />
      ),
      href: "#projects",
      onClick: () => scrollToSection("projects"),
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-black" />
      ),
      href: "#skills",
      onClick: () => scrollToSection("skills"),
    },
    {
      title: "Contact",
      icon: (
        <IconBrandLine className="h-full w-full text-black" />
      ),
      href: "#contact",
      onClick: () => scrollToSection("contact"),
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-black" />
      ),
      href: "https://www.linkedin.com/in/ansh-pachauri-798912250/",
      onClick: () => window.open("https://www.linkedin.com/in/ansh-pachauri-798912250/", "_blank"),
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-black" />
      ),
      href: "hhttps://x.com/pachauri_ansh03",
      onClick: () => window.open("https://x.com/pachauri_ansh03", "_blank"),
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-black" />
      ),
      href: "https://github.com/ansh-pachauri",
      onClick: () => window.open("https://github.com/ansh-pachauri", "_blank"),
    },
  ];

  return (
    <div className="flex items-center justify-center h-[90px] w-full">
      <FloatingDock
        desktopClassName="translate-y-20"
        mobileClassName="translate-x-25"
        items={links}
      />
    </div>
  );
}
