"use client";

import React from 'react';
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <section className="w-full px-6 sm:px-12 md:px-20 lg:px-24 mx-auto max-w-[1440px] mt-12 sm:mt-16 mb-12 sm:mb-20" id="about-me">
      <div className="flex flex-col items-center gap-6 sm:gap-10">
        
        {/* Header Section */}
        <div className="text-center max-w-[800px] flex flex-col gap-4">
          <h2 className="font-sans font-medium text-[#222222] text-[32px] sm:text-[38px] md:text-[45px] tracking-[-1.5px] sm:tracking-[-2px]">
            More About Me
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full max-w-[1100px] mt-4 sm:mt-6">
          
          {/* Card 1: Top-Left (Medium, col-span-5) */}
          <div className="flex flex-col justify-between bg-[#121316] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-zinc-800/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group md:col-span-5">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
              <Image
                src="/aryansl-1.jpeg"
                alt="Product Design"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
              {/* Hover Text Overlay */}
              <div className="absolute inset-0 bg-[#121316]/80 backdrop-blur-[6px] flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-1">
                  <h3 className="font-sans font-semibold text-[18px] sm:text-[20px] text-white tracking-[-0.5px]">
                    About Me 
                  </h3>
                  <p className="font-sans text-[12px] sm:text-[13px] leading-relaxed text-zinc-300 font-light">
                    I like building things from zero and figuring out how they work along the way. 
                    From AI agents to full-stack products, I enjoy experimenting with new ideas, solving problems, and turning rough concepts into something real.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Top-Right (Bigger, col-span-7) */}
          <div className="flex flex-col justify-between bg-[#121316] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-zinc-800/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group md:col-span-7">
            <div className="relative w-full aspect-[16/10] md:aspect-auto md:flex-grow overflow-hidden bg-zinc-950 min-h-[180px] sm:min-h-[220px]">
              <Image
                src="/aryansl-3.jpeg"
                alt="Engineering Craft"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 700px"
                priority
              />
              {/* Hover Text Overlay */}
              <div className="absolute inset-0 bg-[#121316]/80 backdrop-blur-[6px] flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-1">
                  <h3 className="font-sans font-semibold text-[18px] sm:text-[20px] text-white tracking-[-0.5px]">
                    Builders Mindset 
                  </h3>
                  <p className="font-sans text-[12px] sm:text-[13px] leading-relaxed text-zinc-300 font-light">
                    I enjoy taking an idea from a blank page to a working product.
                    Participated in 12+ hackathons building projects and 
                    developing how things work and break.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom-Left (Bigger, col-span-7) */}
          <div className="flex flex-col justify-between bg-[#121316] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-zinc-800/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group md:col-span-7">
            <div className="relative w-full aspect-[16/10] md:aspect-auto md:flex-grow overflow-hidden bg-zinc-950 min-h-[180px] sm:min-h-[220px]">
              <Image
                src="/aryansl-4.jpeg"
                alt="AI Agent Orchestration"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 700px"
              />
              {/* Hover Text Overlay */}
              <div className="absolute inset-0 bg-[#121316]/80 backdrop-blur-[6px] flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-1">
                  <h3 className="font-sans font-semibold text-[18px] sm:text-[20px] text-white tracking-[-0.5px]">
                    Systems Thinking and Fast Learning
                  </h3>
                  <p className="font-sans text-[12px] sm:text-[13px] leading-relaxed text-zinc-300 font-light">
                    I like understanding how the pieces connect 
                    from the frontend and APIs to databases and
                    background workflows. I learn best by building, breaking things, and figuring out why they broke.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Bottom-Right (Medium, col-span-5) */}
          <div className="flex flex-col justify-between bg-[#121316] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-zinc-800/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group md:col-span-5">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
              <Image
                src="/aryansl-5.JPG"
                alt="System Integration"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              {/* Hover Text Overlay */}
              <div className="absolute inset-0 bg-[#121316]/80 backdrop-blur-[6px] flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-1">
                  <h3 className="font-sans font-semibold text-[18px] sm:text-[20px] text-white tracking-[-0.5px]">
                    Team Leadership
                  </h3>
                  <p className="font-sans text-[12px] sm:text-[13px] leading-relaxed text-zinc-300 font-light">
                    Participated and led my teams to 1 national level, 
                    2 state level, and several college level hackathons.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};