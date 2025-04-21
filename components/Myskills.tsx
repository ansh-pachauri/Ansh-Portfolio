import { TypeAnimation } from "react-type-animation";
import { MarqueeDemo } from "./MarqueeDemo";

export const Myskills = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 pt-20 md:pt-32">
      
     
      <div className="w-full text-center mb-4">
      <TypeAnimation
        sequence={["My Projects", 3000]}
        wrapper="h1"
        cursor={false}
        repeat={Infinity}
        className="text-3xl sm:text-4xl font-bold text-purple-500"
      />
    
      </div>

      {/* Marquee Component */}
      <div className="w-full max-w-7xl">
        <MarqueeDemo />
      </div>
    </div>
  );
};
