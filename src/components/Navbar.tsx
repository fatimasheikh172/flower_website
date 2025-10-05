"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r to-blue-200 dark:from-gray-900 dark:via-pink-900 dark:to-purple-900 shadow-lg text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          LuxeBlooms
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-200 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/flowers" className="hover:text-yellow-200 transition">
              Flowers
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r to-blue-200 dark:from-gray-900 dark:via-pink-900 dark:to-purple-900 px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-4 font-medium text-lg">
            <li>
              <Link
                href="/"
                className="hover:text-yellow-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-yellow-200 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-yellow-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/flowers"
                className="hover:text-yellow-200 transition"
                onClick={() => setIsOpen(false)}
              >
                Flowers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
