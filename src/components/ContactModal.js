"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";

// Validation Schema for the contact form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message cannot exceed 1000 characters." }),
});

// --- User-specific details. Replace placeholders. ---
const socialLinks = [
  { href: "https://linkedin.com/in/saad-ali-dev", icon: <FaLinkedinIn /> }, // Replace with your LinkedIn URL
  { href: "https://github.com/saad-ali-dev", icon: <FaGithub /> }, // Replace with your GitHub URL
];

const MY_EMAIL = "a.saadmughal57@gmail.com";
const MY_PHONE_NUMBER = "923184446540"; // IMPORTANT: Replace with your number (e.g., 15551234567 for USA)

export default function ContactModal({ isOpen, onClose }) {
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
    if (!isOpen) {
      // Reset form and tab when modal closes to ensure it's fresh next time
      const timer = setTimeout(() => {
        reset();
        setActiveTab("quick");
        setIsSubmitting(false);
      }, 300); // Delay reset until after exit animation
      return () => clearTimeout(timer);
    }

    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose, reset]);

  // Handler for closing the modal by dragging it down
  const handleDragEnd = (event, info) => {
    if (info.offset.y > 150 || info.velocity.y > 500) {
      onClose();
    }
  };

  // Form submission handler
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
      setTimeout(onClose, 1500);
    } catch (error) {
      toast.error(error.message || "Failed to send message.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const QuickConnectView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Email Box */}
      <a
        href={`mailto:${MY_EMAIL}?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!`}
        className="group p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300"
      >
        <FaEnvelope className="w-8 h-8 text-blue-400 mb-3" />
        <h3 className="text-lg font-semibold text-white">Email</h3>
        <p className="text-sm text-gray-400 mt-1">Send me an email directly.</p>
        <p className="text-xs text-gray-500 mt-3 truncate">{MY_EMAIL}</p>
      </a>

      {/* WhatsApp Box */}
      <a
        href={`https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent("Hi! I found you on your portfolio...")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300"
      >
        <FaWhatsapp className="w-8 h-8 text-green-400 mb-3" />
        <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
        <p className="text-sm text-gray-400 mt-1">Message me on WhatsApp.</p>
        <p className="text-xs text-gray-500 mt-3">Quick and direct chat.</p>
      </a>
    </div>
  );

  const ContactFormView = () => (
    <form onSubmit={handleSubmit(processForm)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full bg-black/20 border ${errors.name ? "border-red-500 focus:ring-red-500" : "border-white/20 focus:ring-blue-500"} rounded-md p-2.5 text-white focus:outline-none focus:ring-2 transition-all`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full bg-black/20 border ${errors.email ? "border-red-500 focus:ring-red-500" : "border-white/20 focus:ring-blue-500"} rounded-md p-2.5 text-white focus:outline-none focus:ring-2 transition-all`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <span className="text-xs text-gray-400">
            {messageValue?.length || 0} / 1000
          </span>
        </div>
        <textarea
          id="message"
          rows="4"
          {...register("message")}
          className={`w-full bg-black/20 border ${errors.message ? "border-red-500 focus:ring-red-500" : "border-white/20 focus:ring-blue-500"} rounded-md p-2.5 text-white focus:outline-none focus:ring-2 transition-all`}
          placeholder="What would you like to discuss?"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
      >
        <FaPaperPlane />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
            {/* Draggable Handle */}
            <div className="w-16 h-1.5 bg-gray-600 rounded-full mx-auto my-3"></div>

            <div className="p-4 sm:p-8 pt-0">
              {/* Header: Socials + Tabs */}
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

              {/* Content Area */}
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
                    <ContactFormView />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Footer with Availability Status */}
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
