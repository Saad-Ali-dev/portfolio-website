import React from "react";
import ProjectCard from "../../components/ProjectsPage/ProjectCard";
import { homeProjects } from "../../lib/homeProjectsData";
import ScrollToTop from "@/components/ScrollToTop";

// Next.js 15 Metadata API for SEO
export async function generateMetadata() {
  const title = "My Projects | Saad Ali - Web Developer"; // Replace John Doe with your name
  const description =
    "Explore a collection of web development projects by John Doe, showcasing expertise in Next.js, React, Tailwind CSS, and modern web technologies."; // Replace John Doe

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
      // images: [{ url: '/path/to/your/og-image.jpg' }], // Add an OG image
      // url: 'https://yourdomain.com/projects', // Replace with your actual domain
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      // images: ['/path/to/your/twitter-image.jpg'], // Add a Twitter image
    },
  };
}

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#000130] to-slate-900 py-16 sm:py-20 lg:py-24 mt-10">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Creations
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto">
            Here's a curated selection of projects I've passionately developed.
            Each project reflects my commitment to crafting clean, efficient,
            and user-friendly web experiences.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {homeProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              // className prop could be used here for additional styling per card if needed,
              // but the default w-full from the variant should suffice within the max-w-4xl container.
            />
          ))}
        </div>
      </div>
    </main>
  );
}
