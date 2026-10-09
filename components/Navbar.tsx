
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-900"
        >
          Fadoiru Lexiana
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-600 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}