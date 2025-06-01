"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectImageDisplay({ src, alt }) {
  if (!src) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12 md:mb-16 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50"
    >
      <Image
        src={src}
        alt={alt}
        width={1200} // Provide appropriate typical width
        height={675} // Provide appropriate typical height (16:9 aspect ratio example)
        className="w-full h-auto object-contain"
        priority // Consider if it's LCP
      />
    </motion.div>
  );
}
