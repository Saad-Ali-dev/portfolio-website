"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { homeProjects, projectColorSchemes } from "@/lib/homeProjectsData";
import { FiEye } from "react-icons/fi";
import { BsArrowRight, BsDot } from "react-icons/bs";

// Helper to get color scheme
const getColorScheme = (themeName) => {
  return projectColorSchemes[themeName] || projectColorSchemes.default;
};

const ProjectPreview = ({ project }) => {
  if (!project)
    return (
      <div className="w-full aspect-[4/3] bg-slate-800 rounded-xl hidden md:block"></div>
    ); // Placeholder

  const colorScheme = getColorScheme(project.colorTheme);

  return (
    <motion.div
      key={project.id} // Important for AnimatePresence to detect changes
      className="sticky top-28 md:top-36 h-fit" // Sticky positioning for desktop
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Description above image (Desktop) */}
      <div className="hidden md:block mb-4 text-slate-300 group">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center hover:underline"
        >
          {project.expandedDescription}
          <BsArrowRight
            className={`ml-2 ${colorScheme.text} opacity-70 group-hover:opacity-100 transition-opacity`}
          />
        </Link>
      </div>

      {/* Device Frame and Image */}
      <div
        className={`relative group aspect-[16/10] bg-slate-900/50 p-2 md:p-3 rounded-xl md:rounded-2xl border-2 ${colorScheme.border} ${colorScheme.glow} transition-all duration-500 ease-in-out`}
      >
        <div className="relative w-full h-full rounded-md md:rounded-lg overflow-hidden bg-black">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
            priority={project.id === homeProjects[0].id} // Prioritize first image
          />
          {/* "View Details" Overlay - Desktop */}
          <Link href={`/projects/${project.slug}`}>
            <div className="absolute inset-0 flex-col items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hidden md:flex">
              <div
                className={`p-4 rounded-full border ${colorScheme.viewDetailsBorder} ${colorScheme.viewDetailsBg} backdrop-blur-sm transition-colors`}
              >
                <FiEye className={`w-8 h-8 ${colorScheme.text}`} />
              </div>
              <p className={`mt-3 text-sm font-semibold ${colorScheme.text}`}>
                VIEW DETAILS
              </p>
            </div>
          </Link>
        </div>
        {/* Small dot "camera" for device frame aesthetics */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 md:top-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-700 rounded-full"></div>
      </div>

      {/* Details for Mobile - shown below image */}
      <div className="md:hidden mt-4">
        <h3 className={`text-xl font-semibold ${colorScheme.text}`}>
          {project.name}
        </h3>
        <p className="text-sm text-slate-300 mt-1 line-clamp-3">
          {project.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techUsed.slice(0, 5).map(
            (
              tech, // Show limited tags on mobile card
            ) => (
              <span
                key={tech}
                className={`text-xs px-2 py-1 rounded-md ${colorScheme.tagBg} ${colorScheme.tagText}`}
              >
                {tech}
              </span>
            ),
          )}
        </div>
        <Link href={`/projects/${project.slug}`}>
          <div
            className={`mt-3 inline-block text-sm font-medium ${colorScheme.text} hover:underline`}
          >
            View Details <BsArrowRight className="inline ml-1" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

const ProjectListItem = ({
  project,
  index,
  isActive,
  onHover,
  scrollRefSetter,
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    root: null, // viewport relative for mobile
    margin: "0px 0px -60% 0px", // Active when top part of item is in upper 40% of viewport
    amount: 0.1, // at least 10% visible
  });

  const colorScheme = getColorScheme(project.colorTheme);

  useEffect(() => {
    // This effect is primarily for desktop scroll-based activation
    // It assumes onHover will handle the activeIndex update for scroll on desktop
    // For mobile, this could be used if we want to sync something, but not critical for current design
  }, [isInView, index /* onActivate (if passed for scroll) */]);

  return (
    <div
      ref={(el) => {
        itemRef.current = el;
        if (scrollRefSetter) scrollRefSetter(index, el);
      }}
      className={`p-4 md:p-6 rounded-lg transition-all duration-300 ease-in-out cursor-pointer relative group
        ${isActive ? `bg-slate-800/70 ${colorScheme.leftBorder} border-l-4 shadow-lg ${colorScheme.shadow}` : "bg-slate-800/30 hover:bg-slate-800/50"}`}
      onMouseEnter={() => onHover(index)}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <h3
          className={`text-lg md:text-xl font-semibold mb-1 ${isActive ? colorScheme.text : "text-slate-100 group-hover:" + colorScheme.text}`}
        >
          {project.name}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-2 mb-3">
          {project.shortDescription}
        </p>

        <ul className="space-y-1.5 text-xs text-slate-300 mb-3">
          {project.mainFeatures.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start">
              <BsDot
                className={`w-4 h-4 flex-shrink-0 mr-1 mt-0.5 ${isActive ? colorScheme.text : "text-slate-500"}`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {project.techUsed.map((tech) => (
            <span
              key={tech}
              className={`text-[10px] md:text-xs px-2 py-0.5 md:py-1 rounded-full 
              ${isActive ? `${colorScheme.tagBg} ${colorScheme.tagText}` : `bg-slate-700/70 text-slate-300 group-hover:${colorScheme.tagBg} group-hover:${colorScheme.tagText}`} 
              transition-colors duration-200`}
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default function FeaturedProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollContainerRef = useRef(null);
  const projectItemRefs = useRef([]);

  const effectiveIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const activeProject = homeProjects[effectiveIndex];

  const handleScroll = useCallback(() => {
    if (
      hoveredIndex !== null ||
      !scrollContainerRef.current ||
      projectItemRefs.current.length === 0
    )
      return;

    const container = scrollContainerRef.current;
    const { scrollTop, clientHeight } = container;
    const viewportCenter = scrollTop + clientHeight / 2;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    projectItemRefs.current.forEach((itemEl, index) => {
      if (itemEl) {
        const itemTop = itemEl.offsetTop - container.offsetTop; // offsetTop relative to scroll container parent
        const itemHeight = itemEl.offsetHeight;
        const itemCenter = itemTop + itemHeight / 2;
        const distance = Math.abs(viewportCenter - itemCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      }
    });
    setActiveIndex(closestIndex);
  }, [hoveredIndex]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && window.innerWidth >= 768) {
      // Only attach for desktop
      container.addEventListener("scroll", handleScroll, { passive: true });
      // Initial check
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  // For Mobile: Each project card is self-contained with its image
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return (
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">
            Featured Case Studies
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#6DD5FA] via-[#FF47A1] to-[#FF9A8B] bg-clip-text text-transparent">
            My Projects
          </h2>
        </div>
        <div className="space-y-12">
          {homeProjects.map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/projects">
            <div className="text-base font-medium text-slate-300 hover:text-white group inline-flex items-center">
              See more projects
              <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </Link>
        </div>
      </section>
    );
  }

  // For Desktop
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">
          Featured Case Studies
        </p>
        <h2 className="text-4xl pb-4 sm:text-5xl font-bold bg-gradient-to-r from-[#6DD5FA] via-[#FF47A1] to-[#FF9A8B] bg-clip-text text-transparent">
          Projects
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
        {/* Left Panel: Project Preview */}
        <div className="md:sticky md:top-28 h-full">
          {" "}
          {/* Sticky container for desktop */}
          <AnimatePresence mode="wait">
            {activeProject && <ProjectPreview project={activeProject} />}
          </AnimatePresence>
        </div>

        {/* Right Panel: Scrollable Project List */}
        <div
          ref={scrollContainerRef}
          className="md:max-h-[calc(80vh)] md:overflow-y-auto space-y-6 custom-scrollbar pr-2" // Added pr-2 for scrollbar space
          onMouseLeave={() => setHoveredIndex(null)} // Reset hover when mouse leaves the entire list
        >
          {homeProjects.map((project, index) => (
            <ProjectListItem
              key={project.id}
              project={project}
              index={index}
              isActive={index === effectiveIndex}
              onHover={setHoveredIndex}
              scrollRefSetter={(idx, el) => (projectItemRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Link href="/projects">
          <div className="text-base font-medium text-slate-300 hover:text-white group inline-flex items-center">
            See more projects
            <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </Link>
      </div>
    </section>
  );
}
