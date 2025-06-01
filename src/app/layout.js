import Navbar from "@/components/Navbar";

import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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

        <SmoothScrollProvider>
          <div id="smooth-wrapper">
            <div id="smooth-content">
              {children}
              <Footer />
            </div>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
