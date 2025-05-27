import React from "react";
import AnimatedHeroText from "@/components/AnimatedHeroText";
import ProfilePicture from "@/components/AnimatedProfilePicture";

export default function HomePage() {
  return (
    <main className=" min-h-screen  text-white flex flex-col items-center pt-20 sm:pt-28 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mt-8 relative z-10">
        {/* Container for the page content below navbar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column / Box */}
          <AnimatedHeroText />
          {/* Right Column / Box */}
          <div className="flex items-center justify-center md:py-0">
            <ProfilePicture />
          </div>
        </div>
        {/* 
          Other content for your homepage will go beneath this section.
          For example:
          <section className="mt-16 md:mt-24 py-12 text-center">
            <h3 className="text-3xl font-semibold text-slate-100">My Projects</h3>
            <p className="mt-4 text-slate-300">Showcase your projects here...</p>
          </section>
        */}
      </div>
    </main>
  );
}
