import { TypewriterEffect } from "./ui/typewriter-effect";

export const Hero = () => {
  const words = [
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "Developer",
      className: "text-purple-500 dark:text-purple-500",
    },
  ];
  return (
    <div className="flex flex-row h-full w-full items-center justify-between px-20 pt-40">
      <div className="flex flex-col items-start justify-start space-y-4">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-7xl font-bold">
            Hi I'm <span className="text-purple-500">Ansh Pachauri.</span>
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start">
          <p className="text-gray-500 text-xl">
            I am a software engineer with a passion for building scalable and
            efficient systems.
          </p>
        </div>
        <div className="flex flex-row items-start justify-start">
          <TypewriterEffect words={words} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="w-72 h-72 rounded-full object-cover"
          src="/profile.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
};
