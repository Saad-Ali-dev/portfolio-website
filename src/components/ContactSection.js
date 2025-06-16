"use client";

import Image from "next/image";
import FancyButton from "./FancyButton";
import useModalStore from "@/store/useModalStore"; // Import the store to access the modal state

const ContactSection = () => {
  const { openModal } = useModalStore(); // Get the action from the store

  return (
    <section
      id="contact"
      className="relative w-full text-white overflow-hidden min-w-screen"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        <Image
          src="/contact-bg.avif"
          alt="Abstract background texture"
          fill
          quality={70}
          priority={false}
          className="opacity-10 sm:opacity-20 w-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[70vh] sm:min-h-[80vh] py-16 sm:py-24 md:py-32">
        <div className="mb-6 md:mb-8">
          <Image
            src="/wings.svg"
            alt="Brand Emblem"
            width={256}
            height={256}
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
          />
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold uppercase tracking-tight leading-tight 
                     text-gray-50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
        >
          From Concept to{" "}
          <span className="font-black text-white">Creation</span>
        </h2>
        <h3
          className="mt-1 sm:mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold uppercase tracking-tight leading-tight 
                     text-gray-50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
        >
          Let's Make It Happen!
        </h3>
        <div className="mt-8 sm:mt-10 md:mt-12">
          <FancyButton text="Get In Touch" onClick={openModal} />
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 max-w-lg lg:max-w-xl space-y-3 text-gray-300">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I'm available for{" "}
            <strong className="font-semibold text-gray-100">
              full-time roles
            </strong>{" "}
            &{" "}
            <strong className="font-semibold text-gray-100">
              freelance projects
            </strong>
            .
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I thrive on crafting dynamic web applications, and delivering
            seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
