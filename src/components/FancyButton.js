// components/FancyButton.js
"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const FancyButton = ({ text = "Get In Touch", className = "", onClick }) => {
  // Define variants for the button's overall state (background and text color changes)
  const buttonVariants = {
    rest: {
      backgroundColor: "rgba(40, 40, 40, 0.65)", // Darker semi-transparent initial background
      color: "#FFFFFF", // Initial text color: white
    },
    hover: {
      backgroundColor: "rgba(250, 250, 250, 0.92)", // Lighter, nearly opaque white on hover
      color: "#18181b", // Dark text on hover (zinc-900)
    },
    tap: {
      scale: 0.96, // Slightly more pronounced tap effect
    },
  };

  // Define variants for the arrow circle's animation (x-axis movement)
  // These variants will be triggered when the parent button transitions to 'hover'
  const arrowCircleVariants = {
    rest: { x: 0 }, // Initial position (no offset)
    hover: { x: 8 }, // Circle slides right by 8px when the parent button is hovered
  };

  return (
    <motion.button
      onClick={onClick} // Use the passed onClick prop
      className={`group relative flex items-center justify-center gap-3 
                 rounded-full font-medium cursor-pointer whitespace-nowrap
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40 focus:ring-offset-black/50
                 border border-white/25 overflow-hidden
                 px-7 py-3.5 text-lg 
                 backdrop-blur-md 
                 ${className}`}
      variants={buttonVariants} // Assign the button variants
      initial="rest" // Set initial state
      whileHover="hover" // Transition to hover state on button hover
      whileTap="tap" // Transition to tap state on click
      transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition for bg and text color
      aria-label={text || "Interactive button"}
    >
      {/* Text content - color transition is handled by the parent motion component's 'initial' and 'whileHover' */}
      <span className="z-10">{text}</span>

      {/* Animated circle with arrow */}
      <motion.div
        className="relative top-[2px] z-10 flex items-center justify-center bg-white rounded-full shadow-sm" // White circle, always
        style={{
          width: "32px", // Corresponds to Tailwind w-8
          height: "32px", // Corresponds to Tailwind h-8
        }}
        variants={arrowCircleVariants} // Assign the arrow circle variants
        transition={{ duration: 0.3, ease: "easeInOut" }} // Consistent transition for arrow movement
      >
        <FaArrowRight className="h-4 w-4 text-zinc-800" />{" "}
        {/* Dark arrow (zinc-800), size 16px */}
      </motion.div>
    </motion.button>
  );
};

export default FancyButton;
