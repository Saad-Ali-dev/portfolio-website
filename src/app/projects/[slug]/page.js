import { notFound } from "next/navigation";
import ProjectHeader from "@/components/ProjectDetailsPage/ProjectHeader";
import ProjectImageDisplay from "@/components/ProjectDetailsPage/ProjectImageDisplay";
import SectionBlock from "@/components/ProjectDetailsPage/SectionBlock";
import AboutContent from "@/components/ProjectDetailsPage/AboutContent";
import FeaturesContent from "@/components/ProjectDetailsPage/FeaturesContent";
import TechnologiesContent from "@/components/ProjectDetailsPage/TechnologiesContent";
import TableOfContents from "@/components/ProjectDetailsPage/TableOfContents";
import ScrollToTop from "@/components/ScrollToTop";
import { projectsData } from "@/lib/projectsData";
import ContactSection from "@/components/ContactSection";
import React from "react";

// For dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${project.name} | Saad Ali`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | Saad Ali`,
      description: project.tagline,
      images: project.mainImage ? [{ url: project.mainImage }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Saad Ali`,
      description: project.tagline,
      images: project.mainImage ? [project.mainImage] : [],
    },
  };
}

// For ISR or SSG (optional, but good for performance)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

async function getProjectData(slug) {
  // In a real app, you might fetch from an API endpoint if data isn't local
  // For this setup, we fetch directly from the API route logic or lib
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return null;
  return project;
  // OR if you want to strictly use the API route for fetching even in RSC:
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  // const res = await fetch(`${baseUrl}/api/projects/${slug}`, { cache: 'force-cache' }); // or { next: { revalidate: 3600 } } for ISR
  // if (!res.ok) return null;
  // return res.json();
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const projectData = await getProjectData(slug);

  if (!projectData) {
    notFound();
  }

  {
    projectData.about && projectData.about.titleIcon
      ? (projectData.about.RenderedIcon = React.createElement(
          projectData.about.titleIcon,
          { className: "w-7 h-7 sm:w-8 sm:h-8 text-sky-400 mr-3" },
        ))
      : (projectData.about.RenderedIcon = null);
  }
  {
    projectData.features && projectData.features.titleIcon
      ? (projectData.features.RenderedIcon = React.createElement(
          projectData.features.titleIcon,
          { className: "w-7 h-7 sm:w-8 sm:h-8 text-sky-400 mr-3" },
        ))
      : (projectData.features.RenderedIcon = null);
  }
  {
    projectData.technologiesUsed && projectData.technologiesUsed.titleIcon
      ? (projectData.technologiesUsed.RenderedIcon = React.createElement(
          projectData.technologiesUsed.titleIcon,
          { className: "w-7 h-7 sm:w-8 sm:h-8 text-sky-400 mr-3" },
        ))
      : (projectData.technologiesUsed.RenderedIcon = null);
  }

  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen bg-gradient-to-b from-[#000130] via-slate-950 to-black text-white pt-24 pb-16 sm:pt-28 md:pt-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="lg:flex lg:gap-x-16 xl:gap-x-16">
            {/* Main Content Area */}
            <div className="lg:flex-grow lg:w-2/3">
              {" "}
              {/* Adjust width distribution as needed */}
              <ProjectHeader
                name={projectData.name}
                tagline={projectData.tagline}
                tags={projectData.tags}
                liveLink={projectData.liveLink}
                repoLink={projectData.repoLink}
                accentColor={projectData.accentColor}
              />
              <ProjectImageDisplay
                src={projectData.mainImage}
                alt={`${projectData.name} main image`}
              />
              {projectData.about && (
                <SectionBlock
                  id={projectData.about.id}
                  title={projectData.about.title}
                  RenderedIcon={projectData.about.RenderedIcon}
                >
                  <AboutContent description={projectData.about.description} />
                </SectionBlock>
              )}
              {projectData.features &&
                projectData.features.items.length > 0 && (
                  <SectionBlock
                    id={projectData.features.id}
                    title={projectData.features.title}
                    RenderedIcon={projectData.features.RenderedIcon}
                  >
                    <FeaturesContent items={projectData.features.items} />
                  </SectionBlock>
                )}
              {projectData.technologiesUsed &&
                projectData.technologiesUsed.items.length > 0 && (
                  <SectionBlock
                    id={projectData.technologiesUsed.id}
                    title={projectData.technologiesUsed.title}
                    RenderedIcon={projectData.technologiesUsed.RenderedIcon}
                  >
                    <TechnologiesContent
                      items={projectData.technologiesUsed.items}
                    />
                  </SectionBlock>
                )}
            </div>

            {/* Sidebar / Table of Contents */}
            {projectData.tableOfContents && (
              <div className="hidden lg:flex justify-center lg:w-1/3 lg:flex-shrink-0 mt-12 lg:mt-0 pt-16">
                {" "}
                {/* pt matches header height approx */}
                <TableOfContents projectData={projectData} />
              </div>
            )}
          </div>
        </div>
        <ContactSection />
      </main>
    </>
  );
}
