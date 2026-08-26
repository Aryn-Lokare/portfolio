import React from 'react';
import { db } from '../../db';
import { certificates as certificatesTable } from '../../db/schema';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface CertificateCardProps {
  title: string;
  description: string;
  certificateUrl?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, description, certificateUrl = '#' }) => {
  return (
    <div className="group flex flex-col justify-between bg-[#121316] rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12 border border-white/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 min-h-[260px] sm:min-h-[300px] md:min-h-[340px] h-full">
      <div>
        <h3 className="font-sans font-medium text-[20px] sm:text-[23px] md:text-[26px] text-white tracking-[-0.5px] leading-tight mb-3 sm:mb-5">
          {title}
        </h3>
        <p className="font-sans text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-[#f5dddd]/80 font-light mb-6 sm:mb-10">
          {description}
        </p>
      </div>
      <a
        href={certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 w-fit text-[#ffffff] font-sans text-[13px] sm:text-[14px] font-medium transition-colors cursor-pointer"
      >
        <span>View Certificate</span>
        <svg
          className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </div>
  );
};

export const Certificates = async () => {
  const staticAchievements = [
    {
      title: "Diploma Holder",
      description: "Successfully completed my 3 year diploma course in Computer Engineering with 92.12 %",
      certificateUrl: "https://drive.google.com/file/d/1CVK_080pTArwvyHFnOqAHDwZ1e_TqEEp/view?usp=sharing"
    },
    {
      title: "InnovaHacks Chp-1",
      description: "Reached final round of national level hackathon with competing over 1,000 students for 2 rounds",
      certificateUrl: "https://drive.google.com/file/d/1lEu4lk3I3BdYPNlcHe99VeIY3MknJRe3/view?usp=sharing"
    },
    {
      title: "Internship Completion letter",
      description: "Did a 4 months internship at Elite Forums in Full Stack and Generative Ai development",
      certificateUrl: "https://drive.google.com/file/d/18HppzH4Dzwzzd3v6qex7rx6A0dq9G9g9/view?usp=sharing"
    }
  ];

  let achievements = staticAchievements;

  if (db) {
    try {
      const dbCertificates = await db.select().from(certificatesTable);
      if (dbCertificates.length > 0) {
        achievements = dbCertificates.map(cert => ({
          title: cert.title,
          description: cert.description,
          certificateUrl: cert.certificateUrl
        }));
      }
    } catch (error) {
      console.warn("Neon DB query failed, falling back to static certificates list:", error);
    }
  }

  return (
    <section className="w-full bg-[#ffffff] py-12 sm:py-16 md:py-20" id="certificates">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="font-sans font-medium text-[#222222] text-[32px] sm:text-[38px] md:text-[45px] tracking-[-1.5px] sm:tracking-[-2px] text-center mb-8 sm:mb-12">
            Certificates and achievements
          </h2>
        </ScrollReveal>
        
        <StaggerContainer gapDelay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((item, idx) => (
              <StaggerItem key={idx}>
                <CertificateCard {...item} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Certificates;