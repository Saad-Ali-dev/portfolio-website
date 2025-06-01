import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectLinkButton({ href, text, icon, accentColor }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                 bg-slate-700/50 hover:bg-slate-600/70 border border-slate-600/80 text-slate-200 hover:text-white
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${accentColor || "hover:border-sky-500"}`}
    >
      {icon || <HiOutlineExternalLink className="w-4 h-4" />}
      {text}
    </Link>
  );
}
