"use client";

import { useState, useEffect } from "react";
import Button from "../Button";
import Link from "next/link";

export default function ProjectCard({ project, className }) {
  const currentProject = project;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaQueryChange = (e) => setIsLargeScreen(e.matches);
    setIsLargeScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div
      className={`relative bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:border-slate-600/80 w-full h-auto lg:h-[700px] ${className || ""}`}
    >
      {/* Image Area (approx. 65-70% height) */}
      <Link href={`/projects/${currentProject.slug}`}>
        <div className="w-full relative cursor-pointer overflow-hidden">
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            className="w-full h-full object-cover transition-transform duration-300 "
            loading="lazy"
          />
        </div>
      </Link>

      {/* Content Area (approx. 30-35% height) */}
      <div className="h-[35%] sm:h-[30%] w-full p-4  sm:p-5 lg:p-6 flex flex-col justify-between mt-4">
        {/* Top part of content: Name, Description, Button */}
        <div className="">
          {" "}
          {/* Prevents content from pushing tech stack out */}
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 leading-tight mr-3 truncate">
              {project.name}
            </h3>
            <div className="flex-shrink-0">
              <Link href={`/projects/${currentProject.slug}`}>
                <Button text="More details" />
              </Link>
            </div>
          </div>
          <p className="text-slate-300/90 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3">
            {project.shortDescription}
          </p>
        </div>

        {/* Bottom part of content: Tech Stack */}
        <div className="mt-auto pt-2">
          {" "}
          {/* mt-auto pushes this to bottom if space, pt-2 for spacing */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.techUsed
              .slice(0, isLargeScreen ? project.techUsed.length : 6) // Show all on large, limit on small
              .map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs bg-slate-700/50 border border-slate-600/30 text-slate-300 hover:text-sky-300 hover:border-sky-400/50 px-2.5 py-1 rounded-full transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            {!isLargeScreen && project.techUsed.length > 6 && (
              <span className="text-[10px] sm:text-xs bg-slate-700/50 border border-slate-600/30 text-slate-300 px-2.5 py-1 rounded-full cursor-default">
                +{project.techUsed.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
