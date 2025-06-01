import React from "react";
import AnimatedHeroText from "@/components/AnimatedHeroText";
import ProfilePicture from "@/components/AnimatedProfilePicture";
import GlobeTimeBox from "@/components/GlobeTimeBox";
import ContactEmailBox from "@/components/ContactEmailBox";
import TechStackBox from "@/components/TechStackBox";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className=" min-h-screen  text-white flex flex-col items-center pt-20 sm:pt-28 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column / Text */}
          <AnimatedHeroText />
          {/* Right Column / Image */}
          <div className="flex items-center justify-center md:py-0">
            <ProfilePicture />
          </div>
        </div>
        {/* Section for cards */}
        <section className="mt-16 md:mt-24 py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Box 1: GlobeTimeBox */}
            <GlobeTimeBox />

            {/* Box 2: ContactEmailBox */}
            <ContactEmailBox />

            {/* Box 3: Tech box */}
            <TechStackBox />
          </div>
        </section>
      </div>
      {/* Projects Section */}
      <ProjectsSection />
      {/* New Skills Section */}
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
