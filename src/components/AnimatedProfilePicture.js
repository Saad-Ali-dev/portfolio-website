"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function ProfilePicture() {
  const filterId = "backgroundWarpFilter";
  const turbulenceRef = useRef(null);
  const displacementMapRef = useRef(null);

  // Define responsive sizes for the image and its background
  // Image sizes
  const imageSizes = {
    base: "w-56 h-56", // approx 224px
    sm: "sm:w-64 sm:h-64", // approx 256px
    md: "md:w-80 md:h-80", // approx 320px
    lg: "lg:w-[360px] lg:h-[360px]", // approx 360px
  };

  // Background will be slightly larger
  const backgroundSizes = {
    base: "w-60 h-60", // approx 240px
    sm: "sm:w-72 sm:h-72", // approx 288px
    md: "md:w-[350px] md:h-[350px]", // approx 350px
    lg: "lg:w-[400px] lg:h-[400px]", // approx 400px
  };

  useEffect(() => {
    if (turbulenceRef.current && displacementMapRef.current) {
      // Animate feTurbulence baseFrequency for the background
      gsap.to(turbulenceRef.current, {
        keyframes: [
          { attr: { baseFrequency: "0.005 0.008" }, duration: 7 }, // Slower, larger waves
          { attr: { baseFrequency: "0.008 0.005" }, duration: 7 },
          { attr: { baseFrequency: "0.006 0.009" }, duration: 7 },
          { attr: { baseFrequency: "0.009 0.006" }, duration: 7 },
          { attr: { baseFrequency: "0.005 0.008" }, duration: 7 },
        ],
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      // Animate feDisplacementMap scale for the background - very subtle
      gsap.to(displacementMapRef.current, {
        keyframes: [
          { attr: { scale: 8 }, duration: 5 }, // Reduced scale for subtlety
          { attr: { scale: 12 }, duration: 5 },
          { attr: { scale: 7 }, duration: 5 },
          { attr: { scale: 10 }, duration: 5 },
          { attr: { scale: 8 }, duration: 5 },
        ],
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* SVG Filter Definition - This is not rendered directly */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id={filterId}>
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.005 0.008" // Initial, low frequency for smoother waves
              numOctaves={1} // Smoothest noise
              seed={30}
              result="turbulence"
            />
            <feDisplacementMap
              ref={displacementMapRef}
              in="SourceGraphic" // This will be the background div
              in2="turbulence"
              scale={8} // Initial, very subtle scale
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Animated Background Circle */}
      <motion.div
        className={`
          absolute 
          ${backgroundSizes.base} ${backgroundSizes.sm} ${backgroundSizes.md} ${backgroundSizes.lg}
          rounded-full 
          bg-purple-500/10  // Base subtle purple, adjust opacity (e.g., /10, /20)
          shadow-[0_0_25px_0px_rgba(168,85,247,0.3),_0_0_45px_0px_rgba(120,50,200,0.2)] // Purple glow, adjust as needed
          // Apply the SVG filter to this background div
        `}
        style={{ filter: `url(#${filterId})` }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
      />

      {/* Profile Image Container (No filter applied here) */}
      <motion.div
        className={`
          relative 
          ${imageSizes.base} ${imageSizes.sm} ${imageSizes.md} ${imageSizes.lg}
          rounded-full 
          overflow-hidden 
          shadow-xl 
          z-10 
        `}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} // Delay slightly after background
      >
        <Image
          src="/profile-pic-web.webp" // Ensure this path is correct
          alt="Saad Ali" // Update alt text
          fill
          className="object-cover"
          priority // If LCP
          // Update sizes based on the new Tailwind classes
          sizes={`(max-width: 639px) 224px, (max-width: 767px) 256px, (max-width: 1023px) 320px, 360px`}
        />
      </motion.div>
    </div>
  );
}
