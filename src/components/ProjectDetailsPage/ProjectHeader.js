import {
  HiOutlineCalendar,
  HiOutlineTag,
  HiOutlineGlobeAlt,
  HiOutlineCode,
} from "react-icons/hi";
import ProjectLinkButton from "./ProjectLinkButton";

export default function ProjectHeader({
  name,
  tagline,
  tags,
  liveLink,
  repoLink,
  accentColor,
}) {
  return (
    <header className="mb-8 md:mb-12">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3">
        {name}
      </h1>
      <p className="text-lg sm:text-xl text-slate-400 mb-6 max-w-3xl">
        {tagline}
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        {liveLink && (
          <ProjectLinkButton
            href={liveLink}
            text="Check it out"
            icon={<HiOutlineGlobeAlt className="w-5 h-5" />}
            accentColor={accentColor}
          />
        )}
        {repoLink && (
          <ProjectLinkButton
            href={repoLink}
            text="View Code"
            icon={<HiOutlineCode className="w-5 h-5" />}
            accentColor={accentColor}
          />
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3 text-sm text-slate-400">
        {tags && tags.length > 0 && (
          <div className="flex items-center gap-1.5">
            <HiOutlineTag className="w-4 h-4 text-slate-500" />
            <span className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-700/50 px-2 py-0.5 rounded-full text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
