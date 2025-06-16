"use client";

import React from "react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiSanity,
  SiContentful,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiZustand,
  SiPnpm,
  SiBun,
  SiGit,
  SiGithub,
  SiVercel,
  SiAmazonaws,
  SiDocker,
  SiExpo,
  SiClerk,
  SiLinux,
  SiJavascript,
  SiPython,
  SiMui,
  SiOpenai,
  SiStripe,
  SiRedux,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { BsLightningCharge, BsGearFill, BsBraces } from "react-icons/bs";

// Define skills data based on the screenshot
const skills = [
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
export default function SkillsSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 w-full overflow-hidden">
      {/* Background Flower Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto -translate-y-70 sm:-translate-y-16 md:-translate-y-20">
          <Image
            src="/steel-flower.webp"
            alt="Abstract background element"
            width={700}
            height={700}
            className="object-contain animate-subtle-spin-fade"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 100%)",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-widest uppercase mb-2 sm:mb-3">
          MY SKILLS
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 lg:mb-20">
          <span className="text-slate-100">Technology</span>{" "}
          <span
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Stack
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5">
            {skills.map((skill) => (
              <li key={skill.name}>
                <div
                  className={`group flex items-center space-x-2 bg-slate-800/70 hover:bg-slate-700/90 backdrop-blur-sm border border-slate-700/60 hover:border-slate-600 rounded-lg px-3 py-1.5 sm:px-3.5 sm:py-2 transition-all duration-200 ease-in-out cursor-default shadow-md hover:shadow-purple-500/10 hover:scale-105 `}
                >
                  <span
                    className={`text-lg sm:text-xl group-hover:text-sky-300 transition-colors duration-200 ${skill.color}`}
                  >
                    {skill.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Keyframes for the animation */}
      <style jsx global>{`
        @keyframes subtle-spin-fade {
          0% {
            transform: rotate(0deg) scale(0.95);
            opacity: 0.25;
          }
          50% {
            transform: rotate(5deg) scale(1);
            opacity: 0.35;
          }
          100% {
            transform: rotate(0deg) scale(0.95);
            opacity: 0.25;
          }
        }
        .animate-subtle-spin-fade {
          animation: subtle-spin-fade 12s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
