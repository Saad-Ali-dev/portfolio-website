"use client";

import Link from "next/link";
import { HiOutlineChevronRight, HiOutlineViewGrid } from "react-icons/hi";
import { useScrollSmootherInstance } from "@/contexts/ScrollContext"; // Import the hook
import { usePathname } from "next/navigation";

export default function TableOfContents({ projectData }) {
  const smoother = useScrollSmootherInstance();
  const pathname = usePathname(); // Current path for constructing full href if needed

  if (!projectData.tableOfContents) return null;

  const sections = [];
  if (projectData.about && projectData.about.id)
    sections.push({
      id: projectData.about.id,
      title: projectData.about.title || "Overview",
    });
  if (projectData.features && projectData.features.id)
    sections.push({
      id: projectData.features.id,
      title: projectData.features.title || "Features",
    });
  if (projectData.technologiesUsed && projectData.technologiesUsed.id)
    sections.push({
      id: projectData.technologiesUsed.id,
      title: projectData.technologiesUsed.title || "Technologies",
    });

  if (sections.length === 0) return null;

  const handleTocClick = (e, sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (smoother && targetElement) {
      e.preventDefault(); // Important: Prevent default browser scroll/navigation

      // Calculate navbar height (approximate, adjust as per your actual Navbar.js)
      // Navbar.js: fixed top-6 sm:top-8, height={60} + padding
      // Let's assume approx 80-90px on larger screens after padding.
      const navbarHeight = 90; // Adjust this value accurately

      smoother.scrollTo(targetElement, true, `top top+=${navbarHeight}px`);

      // Optionally update URL hash without causing a full navigation.
      // Next.js Link might handle this, but for smoother control:
      if (window.history.pushState) {
        window.history.pushState(null, "", `${pathname}#${sectionId}`);
      }
    } else if (targetElement) {
      // Fallback for when smoother is not yet available or if there's an issue
      e.preventDefault();
      const navbarHeight = 90; // Adjust
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      if (window.history.pushState) {
        window.history.pushState(null, "", `${pathname}#${sectionId}`);
      }
    }
    // If targetElement is not found, Link will try to navigate, potentially to a 404 if hash is the only diff.
  };

  return (
    // Adjust top value: top-28 means 7rem = 112px. This should be > navbar height.
    // If Navbar is ~90px, top-[100px] or top-28 is reasonable.
    <aside className="sticky top-28 h-max w-full lg:w-64 xl:w-72">
      <div className="p-6 bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-xl shadow-xl">
        <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center">
          <HiOutlineViewGrid className="w-5 h-5 mr-2 text-slate-400" />
          On this page
        </h3>
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                {/* Keep Link for semantics, but override click */}
                <Link
                  href={`${pathname}#${section.id}`} // Full path with hash for better SSR/fallback
                  onClick={(e) => handleTocClick(e, section.id)}
                  className="flex items-center text-sm text-slate-400 hover:text-sky-300 transition-colors duration-200 group"
                >
                  <HiOutlineChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
