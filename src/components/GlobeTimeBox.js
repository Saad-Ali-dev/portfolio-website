"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

export default function GlobeTimeBox() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const getTimeInIslamabad = () => {
      const now = new Date();
      // Use hourCycle for 24-hour format (00-23).
      // Forcing "en-US" locale with specific options ensures HH:MM format
      // as some locales might add AM/PM or use different separators.
      const options = {
        timeZone: "Asia/Karachi", // Timezone for Islamabad, Pakistan
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23", // For 24-hour format (00:00 - 23:59)
      };
      try {
        const formatter = new Intl.DateTimeFormat("en-US", options);
        setTime(formatter.format(now));
      } catch (e) {
        console.error("Error formatting time for Asia/Karachi:", e);
        // Fallback with similar options if timezone formatting fails
        const fallbackOptions = {
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        };
        setTime(new Date().toLocaleTimeString("en-US", fallbackOptions));
      }
    };

    getTimeInIslamabad(); // Initial call
    const intervalId = setInterval(getTimeInIslamabad, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    // Main card:
    // - `overflow-hidden` is crucial for clipping the globe image at the card's rounded boundaries.
    // - `flex flex-col` to arrange items vertically.
    // - `h-full` to take up full height if in a grid/flex row.
    // - `p-0` on the main card, padding will be handled by inner elements for edge-to-edge time bar.
    <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-3xl flex flex-col text-center shadow-2xl h-full overflow-hidden p-0">
      {/* Text content area with its own padding */}
      <div className="p-6 sm:p-8 pb-2 sm:pb-4 relative z-20">
        {" "}
        {/* z-20 to ensure text is above globe */}
        <h3 className="text-xl sm:text-2xl font-semibold">
          <span
            className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent "
            style={{
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            I'm very flexible with timezone communications
          </span>
        </h3>
      </div>

      {/* Globe Image Area:
          - `flex-grow` allows this area to take up available vertical space.
          - `relative` for positioning the Image component absolutely within.
          - `w-full` to span the width.
          - `flex items-center justify-center` to center the image container.
      */}
      <div className="relative flex-grow w-full flex items-center justify-center pt-0  min-h-[150px] sm:min-h-[180px] md:min-h-[200px]">
        {/* Inner container for the Image. This div is made taller by using a negative bottom offset,
            allowing the Image to extend downwards and be partially covered by the time bar.
            `inset-x-0` makes it full width relative to its parent.
            `top-0` anchors it to the top.
            `bottom-[-X%]` effectively increases its height by pushing its bottom boundary down.
        */}
        <div className="absolute inset-x-0 top-0 bottom-[-35%] sm:bottom-[-40%] md:bottom-[-50%]">
          <Image
            src="/globe.png" // Assumes dotted-globe.png is in your /public folder
            alt="Dotted globe visualization"
            fill
            className="object-contain object-center" // `object-contain` scales image down to fit, preserving aspect ratio.
            // `object-center` ensures it's centered.
            sizes="(max-width: 640px) 90vw, (max-width: 767px) 70vw, (max-width: 1023px) 45vw, 350px" // Adjust based on actual column widths
            quality={80} // Adjust image quality for optimization (0-100)
            priority // Consider adding if it's an LCP element, remove if not critical for first paint
          />
        </div>
      </div>

      {/* Time Display Area:
          - `relative z-10` to ensure it sits on top of the globe.
          - `mt-auto` pushes it to the bottom of the flex container.
          - `w-full` for full width.
          - Background and border to match the style.
          - Padding (`p-3 sm:p-4`) for the content within the time bar.
      */}
      <div className="relative z-10 mt-auto w-full bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50">
        <div className="p-3 sm:p-4 flex items-center justify-center text-slate-300 text-sm sm:text-base">
          <span className="text-xs text-slate-400 mr-2 uppercase tracking-wider">
            Remote
          </span>
          <FiMapPin className="text-sky-400 mr-1.5 flex-shrink-0" />
          <span className="font-medium">Pakistan - {time}</span>
        </div>
      </div>
    </div>
  );
}
