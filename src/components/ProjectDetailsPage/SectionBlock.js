"use client";
import { motion } from "framer-motion";
import IconRenderer from "./IconRenderer"; // Import

// Changed Icon prop to iconName
export default function SectionBlock({
  id,
  title,
  iconName,
  children,
  className = "",
}) {
  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-8 md:py-10 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <div className="flex items-center mb-6 md:mb-8">
          {/* Use IconRenderer */}
          {iconName && (
            <IconRenderer
              iconName={iconName}
              className="w-7 h-7 sm:w-8 sm:h-8 text-sky-400 mr-3"
            />
          )}
          <h2
            id={`${id}-heading`}
            className="text-2xl sm:text-3xl font-semibold text-slate-100"
          >
            {title}
          </h2>
        </div>
      )}
      {children}
    </motion.section>
  );
}
