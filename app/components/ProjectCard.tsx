import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  siteUrl?: string;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  headerText?: string;
  headerTextClassName?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl = '#',
  siteUrl = '#',
  headerClassName = 'bg-gradient-to-br from-[#B3E1F5] via-[#E4ECF0] to-[#F7D8D9]',
  headerStyle,
  headerText,
  headerTextClassName = 'text-[#1C1111]',
}) => {
  return (
    <div className="flex flex-col w-full max-w-[480px] bg-[#FAF0F0] rounded-[36px] p-6 sm:p-7 shadow-sm border border-[#F5E1E1]/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Visual / Image Container */}
      <div 
        className={`relative w-full aspect-[4/3] rounded-[28px] overflow-hidden flex items-center justify-center select-none ${headerClassName}`}
        style={headerStyle}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <span className={`font-sans font-medium text-[44px] sm:text-[54px] tracking-[-1.5px] opacity-90 ${headerTextClassName}`}>
            {headerText || title}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col mt-6 flex-grow">
        {/* Title */}
        <h3 className="font-sans font-semibold text-[26px] sm:text-[28px] text-[#1C1111] tracking-[-0.75px] leading-tight transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 font-sans text-[14px] sm:text-[15px] leading-relaxed text-[#5A4D4D]/90 font-light transition-colors duration-300">
          {description}
        </p>

        {/* Buttons / Actions */}
        <div className="flex flex-wrap items-center gap-3 mt-6 sm:mt-7">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0F0404] text-[#EADADA] text-[14px] font-medium font-sans transition-all duration-200 hover:bg-[#1C0909] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Visit Github
          </a>
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0F0404] text-[#EADADA] text-[14px] font-medium font-sans transition-all duration-200 hover:bg-[#1C0909] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Visit Site</span>
            <svg
              className="w-4 h-4 text-[#EADADA] transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
