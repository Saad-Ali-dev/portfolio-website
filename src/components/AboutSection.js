import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import React from "react";

// Define social links for this section
// Remember to replace placeholder URLs with your actual links
const socialLinks = [
  {
    href: "https://linkedin.com/in/your-linkedin-profile", // Replace with your LinkedIn URL
    label: "LinkedIn",
    icon: <FaLinkedinIn className="h-5 w-5" />, // Icon size can be adjusted here
  },
  {
    href: "https://github.com/your-github-username", // Replace with your GitHub URL
    label: "GitHub",
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    href: "https://wa.me/yourwhatsappnumber", // Replace with your WhatsApp number e.g. 1234567890 (no + or spaces)
    label: "WhatsApp",
    icon: <FaWhatsapp className="h-5 w-5" />,
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20  bg-transparent text-white" // Generous padding for spacing
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <p className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
          About Me
        </p>

        <h1
          id="about-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 sm:mb-10 md:mb-12
                     drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] sm:drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]" // Subtle glow effect
        >
          Full-Stack Developer
        </h1>

        <div className="max-w-xl lg:max-w-2xl space-y-5 sm:space-y-6 text-gray-200">
          <p className="text-base sm:text-lg leading-relaxed">
            I'm Saad Ali, a proactive full-stack developer passionate about
            creating dynamic web experiences. From frontend to backend, I thrive
            on solving complex problems with clean, efficient code. My expertise
            spans React, Next.js, and Node.js, and I'm always eager to learn
            more.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            When I'm not immersed in work, I'm exploring new ideas and staying
            curious. Life's about balance, and I love embracing every part of
            it.
          </p>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-100">
            {" "}
            {/* Slightly brighter and bolder for emphasis */}I believe in waking
            up each day eager to make a difference!
          </p>
        </div>

        <div className="flex justify-center space-x-5 sm:space-x-6 mt-10 sm:mt-12">
          {socialLinks.map((social) => (
            <div key={social.label} className="relative group">
              {" "}
              {/* Renamed group to 'group' from 'group/social' for simplicity unless conflicts arise */}
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-all duration-300 block p-2 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent"
                // Added focus styles for accessibility
              >
                <span className="group-hover:scale-110 transition-transform duration-300 block">
                  {" "}
                  {/* Optional: slight scale on icon hover */}
                  {React.cloneElement(social.icon, {
                    className: `${social.icon.props.className || ""} transition-colors duration-300`, // Ensures icon transitions color smoothly
                  })}
                </span>
              </a>
              {/* Tooltip Content (Custom CSS Tooltip) */}
              <div
                role="tooltip"
                className="
                  absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5
                  px-3 py-1.5 rounded-md
                  bg-gray-800 text-white text-xs font-medium whitespace-nowrap
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-opacity duration-300 ease-in-out delay-150 
                  pointer-events-none 
                  z-50
                  before:content-[''] before:absolute
                  before:top-full before:left-1/2 before:-translate-x-1/2
                  before:border-[5px] before:border-transparent before:border-t-gray-800
                "
              >
                {social.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
