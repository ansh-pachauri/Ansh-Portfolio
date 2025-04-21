"use client";

import { useInView } from "react-intersection-observer"
import { motion } from "motion/react"
import Card from "./Card";
import { TypeAnimation } from 'react-type-animation';

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce:true, 
    threshold: 0.2,     
    rootMargin: "200px 0px",
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }
  

  const cards = [
    {
      title: "Shadow Media Marketing",
      description: "Shadow Media Marketing Website which is a marketing agency that provides marketing services to small businesses.",
      image: "/shadowMedia.png",
      link: "https://shadowmarketingllc.com/",
      tags: ["React", "Tailwind CSS", "Javascript", "Express.js", "SMTP"]
    },
    {
      title: "DreamWave",
      description: "DreamWave is a website that allows users to create AI-generated images.",
      image: "/dreamWave.png",
      link: "https://github.com/ansh-pachauri/ImageAi",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Express.js", "Prisma", "PostgreSQL"]
    },
    {
      title: "Brain O Pedia",
      description: "Brain O Pedia is a website that allows users to bookmark their favorite Tweets and Youtube videos.",
      image: "/brainOpedia.png",
      link: "https://github.com/ansh-pachauri/Second-Brain",
      tags: ["React", "Tailwind", "Typescript", "Express.js", "MongoDB"]
    },
    {
      title: "Chat App",
      description: "Chat App is a website that allows users to chat with each other.",
      image: "/chatApp.png",
      link: "https://github.com/ansh-pachauri/Chat-app",
      tags: ["React", "Tailwind", "Typescript", "Express.js", "MongoDB", "Socket.io"]
    },
    {
      title: "Solagig",
      description: "Solagig is a decentralized art sharing platform where users can share and review art and create gigs in exchange for SOL.",
      image: "/solagig.jpg",
      link: "https://github.com/ansh-pachauri/SolaGig",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Express.js", "PostgreSQL", "Web3.js"]
    },
    {
      title: "Portfolio",
      description: "My Portfolio Website.",
      image: "/portfolio.png",
      link: "https://github.com/ansh-pachauri/Ansh-Portfolio",
      tags: ["Next.js", "Tailwind CSS", "Typescript"]
    },
  ]

  return (
    <div
      className="flex flex-col w-full h-full items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 pt-15 md:pt-15"
      ref={ref}
    >
      
      <div className="mb-15 text-center">
      <TypeAnimation
        sequence={["My Projects", 3000]}
        wrapper="h1"
        cursor={false}
        repeat={Infinity}
        className="text-3xl sm:text-4xl font-bold text-purple-500"
      />
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
        {cards.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            className="w-full"
          >
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
