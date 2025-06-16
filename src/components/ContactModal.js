"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";

import useModalStore from "@/store/useModalStore";
import QuickConnectView from "./ContactModalViews/QuickConnectView"; // Import separated view
import ContactFormView from "./ContactModalViews/ContactFormView"; // Import separated view

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message cannot exceed 1000 characters." }),
});

const socialLinks = [
  { href: "https://linkedin.com/in/saad-ali-dev", icon: <FaLinkedinIn /> },
  { href: "https://github.com/saad-ali-dev", icon: <FaGithub /> },
];

export default function ContactModal() {
  const { isModalOpen, closeModal } = useModalStore();
  const [activeTab, setActiveTab] = useState("quick");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const messageValue = watch("message", "");

  useEffect(() => {
    if (!isModalOpen) {
      const timer = setTimeout(() => {
        reset();
        setActiveTab("quick");
        setIsSubmitting(false);
      }, 300);
      return () => clearTimeout(timer);
    }

    const handleEsc = (event) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen, closeModal, reset]);

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 150 || info.velocity.y > 500) {
      closeModal();
    }
  };

  const processForm = async (data) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      toast.success("Message sent successfully! I'll get back to you soon.", {
        id: toastId,
      });
      setTimeout(closeModal, 1500);
    } catch (error) {
      toast.error(error.message || "Failed to send message.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-b from-[#1c1c1c] to-[#111111] border-t border-white/10 rounded-t-2xl w-full max-w-3xl text-white shadow-2xl cursor-grab active:cursor-grabbing"
          >
            <div className="w-16 h-1.5 bg-gray-600 rounded-full mx-auto my-3"></div>
            <div className="p-4 sm:p-8 pt-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-xl"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-1 bg-black/30 border border-white/10 p-1 rounded-full">
                  <button
                    onClick={() => setActiveTab("quick")}
                    className={`px-4 py-1.5 text-sm rounded-full transition-colors duration-200 ${activeTab === "quick" ? "bg-white text-black font-semibold" : "text-gray-300 hover:bg-white/10"}`}
                  >
                    Quick connect
                  </button>
                  <button
                    onClick={() => setActiveTab("form")}
                    className={`px-4 py-1.5 text-sm rounded-full transition-colors duration-200 ${activeTab === "form" ? "bg-white text-black font-semibold" : "text-gray-300 hover:bg-white/10"}`}
                  >
                    Fill a form
                  </button>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "quick" ? (
                    <QuickConnectView />
                  ) : (
                    <ContactFormView
                      {...{
                        register,
                        errors,
                        handleSubmit,
                        processForm,
                        isSubmitting,
                        messageValue,
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-center">
                <div className="relative flex items-center gap-2 text-sm text-green-400">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Currently available for new opportunities
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
