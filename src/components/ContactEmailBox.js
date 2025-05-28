"use client";

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

export default function ContactEmailBox() {
  const email = "a.saadmughal57@gmail.com";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Revert icon after 2 seconds
    } catch (err) {
      console.error("Failed to copy email: ", err);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl h-full justify-center">
      {/* Title with Moving Glow Effect */}
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-10 leading-tight">
        <span className="animated-glow-text">
          Let's work together on your next project
        </span>
      </h3>

      {/* Email Button/Box */}
      <button
        onClick={handleCopyEmail}
        className="group relative flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 w-full max-w-xs sm:max-w-sm bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-opacity-75"
        aria-label={`Copy email address ${email} to clipboard`}
      >
        <div className="flex items-center justify-center">
          {isCopied ? (
            <FaCheck className="text-green-400 text-xl sm:text-2xl mr-2.5 sm:mr-3 transition-all duration-200" />
          ) : (
            <IoCopyOutline className="text-slate-400 group-hover:text-sky-300 text-xl sm:text-2xl mr-2.5 sm:mr-3 transition-all duration-200" />
          )}
          <span
            className={`text-sm sm:text-base font-medium ${isCopied ? "text-green-300" : "text-slate-300 group-hover:text-slate-100"} transition-colors duration-200`}
          >
            {isCopied ? "Copied!" : email}
          </span>
        </div>
      </button>
      <style jsx global>{`
        .animated-glow-text {
          background-image: linear-gradient(
            -120deg,
            #e0e7ff 0%,
            #a5b4fc 25%,
            #67e8f9 50%,
            #a5b4fc 75%,
            #e0e7ff 100%
          );
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: textGlow 5s linear infinite;
          display: inline-block;
        }

        @keyframes textGlow {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </div>
  );
}
