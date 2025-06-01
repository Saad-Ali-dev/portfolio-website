"use client";
import IconRenderer from "./IconRenderer"; // Import

export default function FeaturesContent({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((feature, index) => (
        <div
          key={index}
          className="bg-slate-800/50 border border-slate-700/70 rounded-xl p-6 shadow-lg
                     transition-all duration-300 hover:border-slate-600 hover:shadow-purple-500/20"
        >
          {/* Use IconRenderer with feature.iconName */}
          {feature.iconName && (
            <IconRenderer
              iconName={feature.iconName}
              className="w-8 h-8 text-sky-400 mb-4"
            />
          )}
          <h3 className="text-lg font-semibold text-slate-100 mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
