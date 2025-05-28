"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  SiNextdotjs,
  SiJavascript,
  SiExpress,
  SiGithub,
  SiPrisma,
  SiStripe,
  SiMui,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiPostgresql,
  SiVercel,
  SiOpenai,
  SiTypescript,
  SiNodedotjs,
  SiFramer,
  SiMongodb,
  SiRedux,
  SiClerk,
  SiDocker,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { BsLightningCharge, BsGearFill, BsBraces } from "react-icons/bs";

const allTech = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "React", icon: <SiReact />, color: "text-sky-400" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
  { name: "Python", icon: <SiPython />, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Material UI", icon: <SiMui />, color: "text-blue-500" },
  { name: "Motion", icon: <SiFramer />, color: "text-pink-500" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
  { name: "Zod", icon: <BsLightningCharge />, color: "text-blue-400" },
  { name: "Prisma", icon: <SiPrisma />, color: "text-teal-300" },
  { name: "Mongoose", icon: <VscJson />, color: "text-red-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" },
  { name: "Stripe", icon: <SiStripe />, color: "text-purple-400" },
  { name: "OpenAI API", icon: <SiOpenai />, color: "text-green-400" },
  { name: "Agentic AI", icon: <BsGearFill />, color: "text-indigo-400" },
  { name: "Clerk", icon: <SiClerk />, color: "text-violet-500" },
  { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
  { name: "Git", icon: <SiGit />, color: "text-red-500" },
  { name: "GitHub", icon: <SiGithub />, color: "text-gray-200" },
  { name: "Vercel", icon: <SiVercel />, color: "text-white" },
  { name: "Shadcn/UI", icon: <BsBraces />, color: "text-neutral-300" },
];

// Split into rows. Adjust itemsPerRow to change density.
const itemsPerRow = 8; // Roughly 25 / 3 = 8-9
const row1 = allTech.slice(0, itemsPerRow);
const row2 = allTech.slice(itemsPerRow, itemsPerRow * 2);
const row3 = allTech.slice(itemsPerRow * 2, itemsPerRow * 3);

const TechMarqueeRow = ({ techItems, duration, direction = 1 }) => {
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-2">
      <motion.div
        className="flex space-x-3 sm:space-x-4"
        animate={{
          x: [
            `${direction === 1 ? "0%" : "-220%"}`,
            `${direction === 1 ? "-220%" : "0%"}`,
          ],
        }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className={`flex items-center space-x-2 bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 transition-colors duration-200 ${tech.color}`}
          >
            <span className="text-lg sm:text-xl">{tech.icon}</span>
            <span className="text-xs sm:text-sm font-medium text-slate-200">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function TechStackBox() {
  return (
    <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-3xl flex flex-col items-center text-center shadow-2xl h-full">
      <h3 className="text-2xl font-semibold leading-tight px-4 sm:pt-8 py-4">
        <span className="bg-gradient-to-r from-purple-300 via-white to-purple-400 bg-clip-text text-transparent">
          Passionate about cutting-edge technologies
        </span>
      </h3>
      <div className="w-full flex-grow flex flex-col justify-center space-y-1 sm:space-y-2 pb-4 sm:pb-0">
        <TechMarqueeRow techItems={row1} duration={40} direction={1} />
        <TechMarqueeRow techItems={row2} duration={40} direction={-1} />
        <TechMarqueeRow techItems={row3} duration={40} direction={1} />
      </div>
    </div>
  );
}
