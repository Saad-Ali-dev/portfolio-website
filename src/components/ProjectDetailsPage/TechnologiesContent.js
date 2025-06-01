"use client";
import IconRenderer from "./IconRenderer"; // Import

export default function TechnologiesContent({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="space-y-4">
      {items.map((tech, index) => (
        <li
          key={index}
          className="p-4 bg-slate-800/50 border border-slate-700/70 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-1">
            {/* Use IconRenderer with tech.iconName */}
            {tech.iconName && (
              <IconRenderer
                iconName={tech.iconName}
                className="w-5 h-5 text-sky-400 mr-2.5 flex-shrink-0"
              />
            )}
            <h3 className="text-md font-semibold text-slate-100">
              {tech.name}
            </h3>
          </div>
          <p className="text-sm text-slate-400 ml-[calc(1.25rem+0.625rem)]">
            {tech.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
