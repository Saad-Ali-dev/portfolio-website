import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { homeProjects } from "@/lib/homeProjectsData";
import ProjectCard from "./ProjectCard";
import FancyButton from "./FancyButton";

export default function ProjectsSection() {
  const projectsToShow = homeProjects.slice(0, 3);
  const [project1, project2, project3] = projectsToShow;

  return (
    <div className="w-full max-w-6xl mx-auto py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center mb-10 sm:mb-12">
        <h2 className="text-4xl text-center sm:text-5xl font-bold pb-2">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-slate-400 mt-2 text-center text-sm sm:text-base max-w-2xl">
          Here are a few selections of my recent work. Want to see more? Feel
          free to browse all my projects.
        </p>
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[60%_40%] lg:pr-5 xl:pr-0 md:grid-rows-2 gap-6 sm:gap-8">
        {/* Left Box (Project 1) - Spans two cols on md screens and two rows on lg screen */}
        <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 ">
          <ProjectCard
            project={project1}
            className="h-full"
            customClasses={project1.className}
            showMainFeaturesOnLg={true}
          />
        </div>

        {/* Right Top Box (Project 2) */}
        <div>
          <ProjectCard
            project={project2}
            className="h-full md:h-[77%] lg:h-full"
            customClasses={project2.className}
          />
        </div>

        {/* Right Bottom Box (Project 3) */}
        <div>
          <ProjectCard
            project={project3}
            className="h-full md:h-[77%] lg:h-full"
          />
        </div>
      </div>
      <div className="relative flex justify-center text-center mt-12 sm:mt-16 md:mt-[-10%] lg:mt-16">
        <Link href="/projects">
          <FancyButton text="See more" className="" />
        </Link>
      </div>
    </div>
  );
}
