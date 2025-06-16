"use client";

import { Toaster } from "react-hot-toast";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function ClientLayoutWrapper({ children }) {
  return (
    <>
      {/* Client-side only components are placed here */}
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

      {/* The SmoothScrollProvider needs to be in a client component */}
      <SmoothScrollProvider>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
          </div>
        </div>
      </SmoothScrollProvider>

      {/* The modal is also a client component and is placed at the root level */}
      <ContactModal />
    </>
  );
}
