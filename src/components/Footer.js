import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

// Removed shadcn/ui tooltip imports
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  {
    href: "https://linkedin.com/in/your-linkedin-profile", // Replace with your LinkedIn URL
    label: "LinkedIn",
    icon: <FaLinkedinIn className="h-5 w-5" />,
  },
  {
    href: "https://github.com/your-github-username", // Replace with your GitHub URL
    label: "GitHub",
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    href: "https://wa.me/yourphonenumber", // Replace with your WhatsApp number (e.g., https://wa.me/1234567890)
    label: "WhatsApp",
    icon: <FaWhatsapp className="h-5 w-5" />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-10 sm:py-14 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
          {/* Left Column: Logo, Description, Copyright, Socials */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="mb-4 inline-block"
              aria-label="Go to homepage"
            >
              <Image
                src="/circular-logo-png.webp"
                alt="Saad Ali Logo"
                width={50}
                height={50}
                className="rounded-full"
                priority={false}
              />
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-md">
              I'm Saad - a full-stack developer, freelancer & problem solver.
              Thanks for checking out my site!
            </p>

            {/* Copyright and Socials container */}
            <div className="w-full mt-auto pt-4">
              <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
                <p className="text-xs text-gray-500 order-2 md:order-1 mt-3 md:mt-0">
                  © {currentYear} Saad Ali. All rights reserved.
                </p>
                <div className="flex space-x-4 order-1 md:order-2">
                  {socialLinks.map((social) => (
                    // Custom Tooltip Implementation
                    <div key={social.label} className="relative group">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="text-gray-400 hover:text-white transition-colors duration-300 block p-1" // Added block and p-1 for better hover area
                      >
                        {social.icon}
                      </a>
                      {/* Tooltip Content */}
                      <div
                        className="
                          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                          px-3 py-1.5 rounded-md
                          bg-gray-700 text-white text-xs whitespace-nowrap
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible
                          transition-all duration-300 ease-in-out
                          z-10
                          // Caret/Arrow for the tooltip
                          before:content-[''] before:absolute
                          before:top-full before:left-1/2 before:-translate-x-1/2
                          before:border-4 before:border-transparent before:border-t-gray-700
                        "
                      >
                        {social.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end">
            <nav className="flex flex-col items-center md:items-end gap-y-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-1 px-0.5"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
