"use client";

import { FiArrowUpRight } from "react-icons/fi";

export default function Button({ text }) {
  return (
    <button className="z-20 cursor-pointer relative top-[-3px] bg-neutral-100/80 hover:bg-neutral-50 text-neutral-900 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-1.5 backdrop-blur-sm shadow-lg transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-opacity-75">
      {text}
      <FiArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
