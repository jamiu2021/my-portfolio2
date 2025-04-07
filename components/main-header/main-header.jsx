"use client";
import Link from "next/link";
import NavLink from "./nav-link";
import { Menu, X } from "lucide-react";

import { useState } from "react";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <header className="flex items-center justify-between py-8 px-6 bg-[#0c1021] fixed top-0 z-40 w-full text-xl border border-b-indigo-200 ">
        <Link
          href="/"
          className="flex justify-center items-center hover:skew-y-5 tracking-[0.15em] font-bold gap-8 text-2xl uppercase no-underline "
        >
          portfolio
        </Link>
        <nav>
          <ul className="hidden list-none md:flex gap-6 m-0 p-0">
            <li>
              <NavLink href="/about">about </NavLink>
            </li>
            <li>
              <NavLink href="/work">work </NavLink>
            </li>
            <li>
              <NavLink href="/service">svice </NavLink>
            </li>
            <li>
              <NavLink href="/contact">Hit me up </NavLink>
            </li>
          </ul>

          <button
            className="md:hidden p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>
      {isOpen && (
        <ul className=" w-full  md:hidden  space-y-2 bg-[#0c1021] p-4 fixed text-center z-40">
          <li>
            <NavLink href="/about">About </NavLink>
          </li>
          <li>
            <NavLink href="/work">Work </NavLink>
          </li>
          <li>
            <NavLink href="/service">Service </NavLink>
          </li>
          <li>
            <NavLink href="/contact">Hit me up</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
