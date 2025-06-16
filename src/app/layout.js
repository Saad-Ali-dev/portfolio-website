import Navbar from "@/components/Navbar";
import { Geist } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper"; // Import the new wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Now you can keep your metadata export!
export const metadata = {
  title: "Saad Ali - Developer, Freelancer and Problem Solver",
  keywords: [
    "Saad Ali",
    "Developer",
    "Freelancer",
    "Problem Solver",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "React",
  ],
  description:
    "My portfolio showcasing my work as a developer, freelancer, and problem solver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        {/* Use the client wrapper here. It will handle all client-side logic. */}
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
