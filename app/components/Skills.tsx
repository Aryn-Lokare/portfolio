"use client";

import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal';

interface DockItemProps {
  name: string;
  bgColor: string;
  children: React.ReactNode;
  url?: string;
}

const DockItem: React.FC<DockItemProps> = ({ name, bgColor, children, url = '#' }) => {
  return (
    <div className="relative group">
      {/* Tooltip */}
      <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-200 text-[12px] font-mono bg-zinc-900 text-white px-3 py-1.5 rounded-xl absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-md z-30 hidden sm:block">
        {name}
        {/* Tooltip Arrow */}
        <div className="w-2 h-2 bg-zinc-900 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Dock Icon */}
      <a
        href={url}
        target={url !== '#' ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-[14px] sm:rounded-[18px] ${bgColor} shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.08)] hover:scale-115 hover:-translate-y-3.5 active:scale-95 transition-all duration-300 ease-out cursor-pointer`}
      >
        {children}
      </a>
    </div>
  );
};

const Skills = () => {
  const techStack = [
    {
      name: "Next.js",
      bgColor: "bg-black",
      icon: (
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9">
          <Image src="/nextjs.png" alt="Next.js" fill className="object-contain" />
        </div>
      )
    },
    {
      name: "Tailwind CSS",
      bgColor: "bg-[#38bdf8]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      )
    },
    {
      name: "TypeScript",
      bgColor: "bg-[#3178c6]",
      icon: (
        <div className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8">
          <Image src="/ts.png" alt="TypeScript" fill className="object-contain" />
        </div>
      )
    },
    {
      name: "Python",
      bgColor: "bg-[#3776ab]",
      icon: (
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9">
          <Image src="/python.png" alt="Python" fill className="object-contain" />
        </div>
      )
    },
    {
      name: "LangGraph",
      bgColor: "bg-[#1c1917]",
      icon: (
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9">
          <Image src="/lg.png" alt="LangGraph" fill className="object-contain" />
        </div>
      )
    },
    {
      name: "Git",
      bgColor: "bg-[#f05032]",
      icon: (
        <div className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8">
          <Image src="/git.png" alt="Git" fill className="object-contain" />
        </div>
      )
    },
    {
      name: "Docker",
      bgColor: "bg-[#2496ed]",
      icon: (
        <div className="relative w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10">
          <Image src="/docket.png" alt="Docker" fill className="object-contain" />
        </div>
      )
    },
    {
      name: "Ubuntu",
      bgColor: "bg-[#E95420]",
      icon: (
        <div className="relative w-full h-full rounded-[14px] sm:rounded-[18px] overflow-hidden">
          <Image src="/ubuntu.jpg" alt="Ubuntu" fill className="object-cover" />
        </div>
      )
    }
  ];

  return (
    <section className="w-full bg-[#ffffff] py-12 sm:py-16 md:py-24" id="tech-stack">
      <div className="w-full max-w-[1100px] mx-auto px-6 flex flex-col items-center gap-6 sm:gap-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center">
            <h2 className="font-sans font-medium text-[#222222] text-[32px] sm:text-[38px] md:text-[45px] tracking-[-1.5px] sm:tracking-[-2px] mb-2">
              My Tech Stack
            </h2>
            <p className="font-sans font-light text-[#5A4D4D] text-[14px] sm:text-[16px] max-w-[500px] mx-auto">
              The frameworks, languages, and environments I use to build systems from zero to one.
            </p>
          </div>
        </ScrollReveal>

        {/* macOS Dock Container */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex justify-center w-full mt-2 sm:mt-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3.5 bg-[#f3f4f6]/85 backdrop-blur-md p-2.5 sm:p-3.5 rounded-[20px] sm:rounded-[28px] border border-zinc-200/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              
              {/* Tech Stack Icons */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                {techStack.map((tech, idx) => (
                  <DockItem key={idx} name={tech.name} bgColor={tech.bgColor}>
                    {tech.icon}
                  </DockItem>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Skills;