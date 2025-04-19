import Card from "./Card"

export const Projects = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 pt-20 md:pt-32">
      
      {/* Section Title */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-500">
          My Projects
        </h1>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
        <Card
          title="Shadow Media Marketing"
          description="Shadow Media Marketing Website which is a marketing agency that provides marketing services to small businesses."
          image="/shadowMedia.png"
          link="https://shadowmarketingllc.com/"
          tags={["React", "Tailwind CSS", "Javascript", "Express.js", "SMTP"]}
        />

        <Card
          title="DreamWave"
          description="DreamWave is a website that allows users to create AI-generated images."
          image="/dreamWave.png"
          link="https://github.com/ansh-pachauri/ImageAi"
          tags={["Next.js", "Tailwind CSS", "Typescript", "Express.js", "Prisma", "PostgreSQL"]}
        />

        <Card
          title="Brain O Pedia"
          description="Brain O Pedia is a website that allows users to bookmark their favorite Tweets and Youtube videos."
          image="/brainOpedia.png"
          link="https://github.com/ansh-pachauri/Second-Brain"
          tags={["React", "Tailwind", "Typescript", "Express.js", "MongoDB"]}
        />

        <Card
          title="Chat App"
          description="Chat App is a website that allows users to chat with each other."
          image="/chatApp.png"
          link="https://github.com/ansh-pachauri/Chat-app"
          tags={["React", "Tailwind", "Typescript", "Express.js", "MongoDB", "Socket.io"]}
        />

        <Card
          title="Solagig"
          description="Solagig is a decentralized art sharing platform where users can share and review art and create gigs in exchange for SOL."
          image="/solagig.png"
          link="https://github.com/ansh-pachauri/SolaGig"
          tags={["Next.js", "Tailwind CSS", "Typescript", "Express.js", "Prisma", "PostgreSQL", "Web3.js"]}
        />

        <Card
          title="Portfolio"
          description="My Portfolio Website."
          image="/portfolio.png"
          link="https://github.com/ansh-pachauri/Ansh-Portfolio"
          tags={["Next.js", "Tailwind CSS", "Typescript"]}
        />
      </div>
    </div>
  );
};
