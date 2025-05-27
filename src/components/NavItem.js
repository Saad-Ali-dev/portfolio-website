import Link from "next/link";

export default function NavItem({ href, children, isActive }) {
  return (
    <li className="mx-0.5 sm:mx-1">
      <Link
        href={href}
        className={`
          block px-4 sm:px-5 py-2 rounded-full transition-all duration-300 ease-in-out
          text-xs sm:text-sm font-medium whitespace-nowrap
          focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-opacity-75
        ${
          isActive
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-200 hover:bg-white/15 hover:text-white"
        }
        `}
      >
        {children}
      </Link>
    </li>
  );
}
