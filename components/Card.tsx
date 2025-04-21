"use client"

import { useState } from "react";
import { ExternalLinkSVG } from "./ui/ExternalLinkSVG";
import Image from "next/image";


interface CardProps {
    title: string;
    image: string;
    link: string;
    tags?: string[];
  }
  
  export default function Card({ title, image, link, tags = [] }: CardProps) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        className="w-[330px] h-[330px] bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-purple-500/20 flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[200px] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={330}
            height={330}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-30'}`} />
        </div>
        
        <div className="p-5 flex-1  flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-xl font-bold text-white tracking-tight">{title}</h1>
            
            {/* View Project link positioned at top right */}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-medium text-sm"
            >
              <span>View</span>
              <span className="text-purple-400">
                <ExternalLinkSVG />
              </span>
            </a>
          </div>
          
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-3" />
          
          
          {/* Tags after description */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto ">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }