"use client";
import React, { useEffect, useState } from "react";
import AnimatedHeroText from "./AnimatedHeroText";
import ProfilePicture from "./AnimatedProfilePicture";
import Loading from "./Loading";

export default function HeroSection() {
  // State to control the visibility of the loader. Initially, true.
  const [showLoader, setShowLoader] = useState(true);

  // Callback function to be passed to child components.
  // When called, it will hide the loader.
  const hideLoader = () => {
    setShowLoader(false);
  };

  return (
    <div>
      {/*
        The main content is always rendered in the DOM to allow child component
        useEffect hooks to run. Its visibility is controlled by `showLoader`.
      */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16"
        style={{
          display: showLoader ? "none" : "",
          opacity: showLoader ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <AnimatedHeroText setContentVisible={hideLoader} />
        <div className="flex items-center justify-center md:py-0">
          <ProfilePicture setContentVisible={hideLoader} />
        </div>
      </div>

      {/* Conditionally render the Loading component */}
      {showLoader && <Loading />}
    </div>
  );
}
