// app/components/contact-modal-views/QuickConnectView.js
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

// --- User-specific details. Replace placeholders. ---
const MY_EMAIL = "a.saadmughal57@gmail.com";
const MY_PHONE_NUMBER = "923184446540"; // Your number, e.g., 15551234567

export default function QuickConnectView() {
  return (
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
}
