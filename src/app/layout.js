import Navbar from "@/components/Navbar";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast"; // Import Toaster

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
        {/* Add Toaster for form notifications */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1e293b", // slate-800
              color: "#f1f5f9", // slate-100
              border: "1px solid #334155", // slate-700
            },
          }}
        />
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
