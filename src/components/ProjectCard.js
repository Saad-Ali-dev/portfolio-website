"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

export default function ProjectCard({
  project,
  className,
  customClasses,
  showMainFeaturesOnLg,
}) {
  const currentProject = project;

  // State to track if the screen is large (lg breakpoint)
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Media query for Tailwind's 'lg' breakpoint (min-width: 1024px)
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaQueryChange = (e) => {
      setIsLargeScreen(e.matches);
    };

    // Set initial state
    setIsLargeScreen(mediaQuery.matches);

    // Add listener for changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <div
      className={`relative bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:border-slate-600/80 ${className}`}
    >
      {/* Image Area */}
      <Link href={`/projects/${currentProject.slug}`}>
        <div className="w-full relative z-10 cursor-pointer">
          {/* Aspect ratio container for the image */}
          <div className="aspect-[16/9] ">
            <img
              src={currentProject.image}
              alt={`Screenshot of ${currentProject.name}`}
              className={
                `w-full h-full object-cover` +
                (customClasses && customClasses[0]
                  ? ` ${customClasses[0]}`
                  : "")
              }
              loading="lazy"
            />
          </div>
        </div>
      </Link>

      {/* Content Area */}
      <div className="p-4 sm:p-5 lg:p-6 flex-grow flex flex-col">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg md:text-[25px] font-semibold mb-2 text-slate-100 leading-tight">
            {currentProject.name}
          </h3>
          <Link href={`/projects/${currentProject.slug}`}>
            <Button text="More details" />
          </Link>
        </div>
        <div
          className={`${customClasses && customClasses[1] ? customClasses[1] : ""}`}
        >
          <p className="text-slate-300/90 text-xs sm:text-[16px] mb-4 leading-relaxed flex-grow line-clamp-3 sm:line-clamp-4 md:line-clamp-3">
            {currentProject.shortDescription}
          </p>
          {showMainFeaturesOnLg &&
            currentProject.mainFeatures &&
            currentProject.mainFeatures.length > 0 && (
              <ul className="hidden lg:block space-y-2 mb-4 text-slate-300/90 text-[16px] mt-10">
                {currentProject.mainFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaAngleDoubleRight className="w-4 h-4 flex-shrink-0 mt-0.5 mr-2 relative top-[3.5px] text-gray-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
        </div>
        <div className="mt-auto pt-3">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {currentProject.techUsed
              // Conditional slicing: if it's project1 AND on a large screen, show all; otherwise, slice to 4
              .slice(
                0,
                showMainFeaturesOnLg && isLargeScreen
                  ? currentProject.techUsed.length
                  : 4,
              )
              .map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs bg-slate-700/50 border border-slate-600/30 text-slate-300 hover:text-sky-300 hover:border-sky-400/50 px-2.5 py-1 rounded-full transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            {/* Conditional "+X more" tag: Hide if it's project1 AND on a large screen */}
            {!(showMainFeaturesOnLg && isLargeScreen) &&
              currentProject.techUsed.length > 4 && (
                <span className="text-[10px] sm:text-xs bg-slate-700/50 border border-slate-600/30 text-slate-300 px-2.5 py-1 rounded-full cursor-default">
                  +{currentProject.techUsed.length - 4} more
                </span>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
