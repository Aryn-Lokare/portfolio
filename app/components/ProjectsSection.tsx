import React from 'react'
import { ProjectCard } from './ProjectCard'
import { db } from '../../db'
import { projects as projectsTable } from '../../db/schema'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

interface ProjectItem {
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

export const ProjectsSection = async () => {
  const staticProjects: ProjectItem[] = [
    {
      title: 'Veriq',
      description: 'An autonomous multi-agent research platform that investigates, verifies, challenges, and scores claims to produce transparent, evidence-backed reports.',
      imageUrl: '/veriq-bg.png',
      githubUrl: 'https://github.com/Aryn-Lokare/veriq',
      siteUrl: 'https://veriq-murex.vercel.app/',
      headerClassName: 'bg-gradient-to-br from-[#B3E1F5] via-[#E4ECF0] to-[#F7D8D9]',
      headerTextClassName: 'text-[#1C1111]',
    },
    {
      title: 'Trellis',
      headerText: 'trellis',
      description: 'A multimodal GraphRAG platform that turns scattered enterprise documents into a connected knowledge graph, enabling accurate, citation-backed answers across PDFs, audio, spreadsheets, and diagrams.',
      imageUrl: '/trellis-bg.png',
      githubUrl: 'https://github.com/Aryn-Lokare/Trellis',
      siteUrl: 'https://trellis-roan-two.vercel.app/',
      headerStyle: {
        background: 'radial-gradient(circle at 80% 20%, rgba(206, 125, 104, 0.25) 0%, rgba(26, 28, 24, 0) 70%), #1A1C18'
      },
      headerTextClassName: 'text-[#E4E6E3] font-light',
    }
  ];

  let projectsList: ProjectItem[] = staticProjects;

  if (db) {
    try {
      const dbProjects = await db.select().from(projectsTable);
      if (dbProjects.length > 0) {
        projectsList = dbProjects.map(proj => ({
          title: proj.title,
          description: proj.description,
          imageUrl: proj.imageUrl || undefined,
          githubUrl: proj.githubUrl || undefined,
          siteUrl: proj.siteUrl || undefined,
          headerClassName: proj.headerClassName || undefined,
          headerStyle: proj.headerStyle ? JSON.parse(proj.headerStyle) : undefined,
          headerText: proj.headerText || undefined,
          headerTextClassName: proj.headerTextClassName || undefined,
        }));
      }
    } catch (error) {
      console.warn("Neon DB query failed, falling back to static projects list:", error);
    }
  }

  return (
    <div className="w-full px-6 sm:px-12 md:px-20 lg:px-24 mx-auto max-w-[1440px] mt-12 sm:mt-20 md:mt-27 mb-12 sm:mb-20 md:mb-27 flex flex-col items-center">
      <ScrollReveal direction="up">
        <h1 className="font-sans font-medium text-[#222222] text-[32px] sm:text-[38px] md:text-[45px] tracking-[-1.5px] sm:tracking-[-2px] mb-6 sm:mb-10 text-center">
          My Work
        </h1>
      </ScrollReveal>
      
      <StaggerContainer gapDelay={0.25}>
        <div className="flex flex-wrap gap-8 justify-center items-stretch w-full">
          {projectsList.map((project, idx) => (
            <StaggerItem key={idx}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </div>
  )
}
