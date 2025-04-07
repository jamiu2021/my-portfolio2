"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Home() {
  const text = "Web Development and design  from the future";
  const classes = "md:p-2 md:border-2 md:text-xl border-indigo-200";
  return (
    <div className="flex flex-col items-center justify-center mt-27 md:mt-30 md:mb-30 md:ml-70 md:mr-70">
      {text.split("-").map((letter, index) => (
        <motion.h1
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
          className="md:text-8xl text-6xl mt-40    text-center flex"
        >
          {letter}
        </motion.h1>
      ))}
      <ul className="flex items-center justify-center gap-5 mt-20  md:mt-12">
        <motion.li
          className={classes}
          whileHover={{ scale: 1.1, backgroundColor: "#A5B4FC" }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <Link href="/work">Dig into our universe</Link>
        </motion.li>
        <motion.li
          className={classes}
          whileHover={{ scale: 1.1, backgroundColor: "#C7D2FE" }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <Link href="/service">See service</Link>
        </motion.li>
      </ul>
    </div>
  );
}
