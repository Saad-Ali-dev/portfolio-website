"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header>
      <Link href="/">
        <Image
          src={"/circular-logo-png.webp"}
          alt="Logo"
          width={60}
          height={60}
          className="hidden lg:inline-block fixed top-6 left-20 z-50"
          priority={true}
        />
      </Link>
      <nav className="fixed top-6 sm:top-8 left-1/2 -translate-x-1/2 z-50 w-auto">
        {/* Glassmorphic container for the links */}
        <div className="bg-black/50 backdrop-blur-lg border border-white/10 shadow-xl rounded-full p-1.5 sm:p-2">
          <ul className="flex items-center justify-center">
            {navLinks.map((link) => (
              <NavItem
                key={link.name}
                href={link.href}
                isActive={pathname === link.href}
              >
                {link.name}
              </NavItem>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
