"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function NavLink({ href, children }) {
  const path = usePathname();
const active = 'border-indigo-200 border-b-4'
  return (
    <motion.button
      whileHover={{  color: "#C7D2FE"}}
      transition={{ type: "spring", stiffness: 500 }}
      className="rounded-sm"
    >
      {" "}
      <Link
        href={href}
        className={
          path.startsWith(href)
            ? `no-underline font-bold uppercase ${active}`
            : "no-underline font-bold uppercase"
        }
      >
        {children}
      </Link>
    </motion.button>
  );
}
