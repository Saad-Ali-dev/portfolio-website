"use client";

import { useEffect, useState, useRef } from "react"; // Added useState, useRef
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollContext from "@/contexts/ScrollContext"; // Import the context

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScrollProvider({ children }) {
  const [smootherInstance, setSmootherInstance] = useState(null);
  const smootherRef = useRef(null); // To help with cleanup

  useEffect(() => {
    // Only initialize smooth scroll on screen widths >= 768px
    if (window.innerWidth < 768) {
      console.info(
        "SmoothScrollProvider: smooth scroll disabled on small screens",
      );
      return;
    }
    const wrapper = document.getElementById("smooth-wrapper");
    const content = document.getElementById("smooth-content");

    if (wrapper && content) {
      const sm = ScrollSmoother.create({
        wrapper: wrapper,
        content: content,
        smooth: 0.8,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.1,
      });
      setSmootherInstance(sm);
      smootherRef.current = sm; // Store in ref for cleanup
    } else {
      console.warn(
        "SmoothScrollProvider: #smooth-wrapper or #smooth-content not found.",
      );
    }

    // Cleanup function
    return () => {
      if (smootherRef.current) {
        // console.log("Killing smoother instance from SmoothScrollProvider");
        smootherRef.current.kill();
        smootherRef.current = null;
      }
      // Kill all ScrollTriggers created by this smoother or globally if necessary.
      // ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Be cautious with global kill
      // ScrollTrigger.normalizeScroll(false); // Reset normalizeScroll
    };
  }, []);

  return (
    <ScrollContext.Provider value={smootherInstance}>
      {children}
    </ScrollContext.Provider>
  );
}
