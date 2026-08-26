import Image from "next/image";
import NavBar from "./components/NavBar";
import {HeroSection} from "./components/HeroSection";
import {ProjectsSection} from "./components/ProjectsSection"
import {AboutMe} from "./components/AboutMe"
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import {ContactSection} from "./components/ContactSection";


export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-grow w-full flex flex-col justify-between items-center">
        <HeroSection />
        <ProjectsSection />
        <AboutMe />
        <Skills />
        <Certificates />
        <ContactSection />
      </main>
    </>
  );
}
