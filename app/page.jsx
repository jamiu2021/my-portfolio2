"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const text =
    "Hussein Jamiu Olaide, I'm here to help my client to delve into the world of";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 300); // speed
    } else {
      timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 1000); // reset delay
    }

    return () => clearTimeout(timeout);
  }, [index, text]);

  const classes = "md:p-2 md:border-2 md:text-xl border-indigo-200";
  return (
    <div className="flex flex-col items-center justify-center mt-27 md:mt-30 md:mb-30 md:ml-70 md:mr-70">
      <div className="md:mt-40 mt-20 text-center">
        <p className="md:text-3xl text-2xl mb-4">
          I'm <span className="">{displayedText}</span>
        </p>
        <h1 className="md:text-8xl text-4xl">
          Web Development and design from the future
        </h1>
      </div>
      <ul className="flex items-center justify-center gap-5 mt-6  md:mt-12">
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
