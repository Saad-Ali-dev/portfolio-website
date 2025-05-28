"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create the smooth scroller FIRST!
    // Ensure the #smooth-wrapper and #smooth-content elements exist in the DOM
    // before ScrollSmoother.create() is called.
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper", // Or it will auto-find by ID
      content: "#smooth-content", // Or it will auto-find by ID
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position [1]
      effects: true, // looks for data-speed and data-lag attributes on elements for parallax [1]
      normalizeScroll: true, // Prevents mobile browser address bars from hiding/showing and solves multi-thread issues [1]
      smoothTouch: 0.1, // Shorter smoothing time on touch devices (default is NO smoothing) [1]
      // You can add more options from the docs here: https://gsap.com/docs/v3/Plugins/ScrollSmoother/
    });

    // Optional: Add any ScrollTrigger animations here AFTER the smoother is created
    // For example, to pin an element:
    // ScrollTrigger.create({
    //   trigger: ".my-section",
    //   pin: true,
    //   start: "top top",
    //   end: "+=500",
    //   markers: true, // For debugging
    // });

    // Cleanup function: Important for Next.js to prevent memory leaks
    return () => {
      if (smoother) {
        smoother.kill(); // Kills ScrollSmoother instance and its effects [1]
      }
      if (ScrollTrigger.getAll().length > 0) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill any ScrollTriggers
      }
      ScrollTrigger.normalizeScroll(false); // Disable normalizeScroll on unmount
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return <>{children}</>;
}
