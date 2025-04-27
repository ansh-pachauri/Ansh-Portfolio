"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import Card from "./Card";
import { TypeAnimation } from "react-type-animation";

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "200px 0px",
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  const cards = [
    {
      title: "Shadow Marketing",
      image: "/shadowMedia.png",
      link: "https://shadowmarketingllc.com/",
      tags: ["React", "Tailwind CSS", "Javascript", "Express.js", "SMTP"],
    },
    {
      title: "DreamWave",
      image: "/dreamWave.png",
      link: "https://github.com/ansh-pachauri/ImageAi",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Express.js", "Prisma", "PostgreSQL"],
    },
    {
      title: "Brain O Pedia",
      image: "/brainOpedia.png",
      link: "https://github.com/ansh-pachauri/Second-Brain",
      tags: ["React", "Tailwind", "Typescript", "Express.js", "MongoDB"],
    },
    {
      title: "Chat App",
      image: "/chatApp.png",
      link: "https://github.com/ansh-pachauri/Chat-app",
      tags: ["React", "Tailwind", "Typescript", "Express.js", "MongoDB", "Socket.io"],
    },
    {
      title: "Solagig",
      image: "/solagig.jpg",
      link: "https://github.com/ansh-pachauri/SolaGig",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Express.js", "PostgreSQL", "Web3.js"],
    },
    {
      title: "Portfolio",
      image: "/portfolio-2.png",
      link: "https://github.com/ansh-pachauri/Ansh-Portfolio",
      tags: ["Next.js", "Tailwind CSS", "Typescript"],
    },
  ];

  return (
    <div
      className="flex flex-col w-full items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-10 md:pt-5"
      ref={ref}
    >
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <TypeAnimation
          sequence={["My Projects", 3000]}
          wrapper="h1"
          cursor={false}
          repeat={Infinity}
          className="text-3xl sm:text-4xl font-bold text-purple-500"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ repeat: Infinity, duration: 0.8 }}
            variants={cardVariants}
            className="w-full"
          >
            <Card
              title={project.title}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
