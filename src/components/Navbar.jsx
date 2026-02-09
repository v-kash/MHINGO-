"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${
          scrolled ? "bg-white/60 backdrop-blur-xl shadow-sm" : "bg-transparent"
        }
      `}
    >
      {/* NAVBAR CONTENT */}
      <div className="px-8 md:px-16 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                border transition-all duration-300
                ${
                  scrolled
                    ? "bg-black text-white border-black/10"
                    : "bg-white/10 text-white border-white/20"
                }
              `}
            >
              <span className="font-bold">M</span>
            </div>

            <span
              className={`
                font-black text-2xl tracking-tight transition-colors
                ${scrolled ? "text-black" : "text-white"}
              `}
            >
              MAHI
            </span>
          </div>

          {/* Menu */}
          {/* Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <Link
              href="/"
              className={`relative font-medium text-lg ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Home
            </Link>

            <Link
              href="/#about"
              className={`relative font-medium text-lg ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              About
            </Link>

            <Link
              href="/programs"
              className={`relative font-medium text-lg ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Programs
            </Link>

            <Link
              href="/#gallery"
              className={`relative font-medium text-lg ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/#legal"
              className={`relative font-medium text-lg ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Governance{" "}
            </Link>

            <Link
              href="/#contact"
              className={`relative font-medium text-lg ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Right Side */}
          {/* <div className="flex items-center gap-4">
            <button
              className="
                px-6 py-3 rounded-full
                bg-[rgba(var(--yellow),0.9)]
                text-[rgb(var(--primary-dark))]
                hover:bg-[rgba(var(--orange),0.95)]
                transition-all duration-300
                font-bold text-sm
                hover:scale-105
                shadow-lg
                flex items-center gap-2
              "
            >
              DONATE NOW
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>

            <button
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`
    md:hidden overflow-hidden
    transition-all duration-300 ease-out
    ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
  `}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-black/10">
          <div className="px-8 py-6 flex flex-col gap-1">
            <Link
              href="/"
              className="text-black font-medium py-3 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 transform hover:translate-x-1"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-black font-medium py-3 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 transform hover:translate-x-1"
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-black font-medium py-3 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 transform hover:translate-x-1"
            >
              Programs
            </Link>
            <Link
              href="/#gallery"
              className="text-black font-medium py-3 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 transform hover:translate-x-1"
            >
              Gallery
            </Link>
            <Link
              href="/#legal"
              className="text-black font-medium py-3 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 transform hover:translate-x-1"
            >
              Docs
            </Link>
            <Link
              href="/#contact"
              className="text-black font-medium py-3 px-4 rounded-lg hover:bg-black/5 transition-all duration-200 transform hover:translate-x-1"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* 🔥 ANIMATED UNDERLINE */}
      <div
        className={`
          h-[1px] w-full
          transition-all duration-500 ease-out
          ${scrolled ? "bg-black/10 scale-x-100" : "bg-white/20 scale-x-0"}
          origin-left
        `}
      />
    </nav>
  );
}
