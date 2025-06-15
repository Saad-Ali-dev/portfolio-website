"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Variants for the main container to stagger H1, H2, P
const heroTextContainerVariants = {
  hidden: {}, // Serves as an initial state for children to inherit
  visible: {
    transition: {
      staggerChildren: 0.25, // Time between each main line's animation start
    },
  },
};

// Variants for each main line (H1, H2, P)
const lineRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80, // Softer spring
      damping: 20,
      duration: 0.8, // Approximate duration
    },
  },
};

// Variants for the container of words within H2 ("I'm", "Saad Ali")
const wordGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Time between "I'm" and "Saad Ali" animating
      delayChildren: 0.1, // Delay after H2 line starts appearing
    },
  },
};

// Variants for individual words/phrases like "I'm" and "Saad Ali"
const wordFadeInUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

// Variants for the waving hand GIF
const wavingHandVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
      delay: 0.3, // Delay after the "Hi" line starts appearing
    },
  },
};

export default function AnimatedHeroText({ setContentVisible }) {
  useEffect(() => {
    setContentVisible(true);
  }, []);

  return (
    <motion.div
      className="flex flex-col justify-center space-y-4 sm:space-y-6 py-4 md:py-8"
      variants={heroTextContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Line 1: Hi + Waving Hand */}
      <motion.h1
        className="text-4xl sm:text-5xl font-semibold text-slate-100 flex items-center"
        variants={lineRevealVariants}
      >
        Hi
        <motion.img
          src="/wavy-hand-gif.gif"
          alt="Waving hand"
          className="ml-2 sm:ml-3 w-10 h-10 sm:w-12 sm:h-12"
          variants={wavingHandVariants}
          // `initial` and `animate` are inherited from the parent `motion.h1`
          // The `delay` in `wavingHandVariants` ensures it animates appropriately.
        />
      </motion.h1>

      {/* Line 2: I'm Saad Ali */}
      <motion.h2
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 leading-tight"
        variants={lineRevealVariants}
      >
        {/* This inner motion.div handles staggering for "I'm" and "Saad Ali" */}
        <motion.div
          variants={wordGroupVariants}
          className="inline-block" // Ensures proper layout for inner spans
        >
          {/* "I'm" - wrapped for individual animation and clipping */}
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              variants={wordFadeInUpVariants}
              className="inline-block mr-3 lg:mr-4" // Preserves original spacing
            >
              I'm
            </motion.span>
          </span>

          {/* "Saad Ali" - wrapped for individual animation, clipping, and styling */}
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              variants={wordFadeInUpVariants}
              className="inline-block text-sky-400 hover:text-sky-300 transition-colors duration-300"
            >
              Saad Ali
            </motion.span>
          </span>
        </motion.div>
      </motion.h2>

      {/* Line 3: Description */}
      {/* Wrapped in a span with overflow-hidden for a cleaner reveal if needed, though for a full paragraph, direct animation is often fine.
          For consistency with word animation, applying overflow-hidden to a wrapper.
      */}
      <span className="block overflow-hidden">
        {" "}
        {/* Use block if P is block, or adjust as needed */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed"
          variants={lineRevealVariants}
        >
          A full stack web developer and tech lover.
        </motion.p>
      </span>

      {/* 
        You can add a Call to Action button or social links here later. 
        If you do, wrap them in a motion component and add them to the stagger sequence.
        For example:
        <motion.div variants={lineRevealVariants} className="mt-6 sm:mt-8">
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600 transition-colors duration-300 text-lg shadow-md hover:shadow-lg"
          >
            View My Work
          </a>
        </motion.div>
      */}
    </motion.div>
  );
}
