import { NextResponse } from "next/server";
import { projectsData } from "@/lib/projectsData";

export async function GET(request, { params }) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}

// Optional: If you plan to generate static pages for projects at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}
