"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll(); // 👈 ADD THIS LINE

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
        }
      `}
    >
      {/* NAVBAR CONTENT */}
      <div className="px-8 md:px-16 ">
        <div className="max-w-7xl mx-auto flex items-center ">
          {/* Logo */}
          {/* <div className="flex items-center gap-2">
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
          </div> */}
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo9.png"
                alt="MAHI Logo"
                width={140}
                height={50}
                priority
                className="object-contain h-14 sm:h-16 w-auto"
              />
              <div className="ml-2">
                <p
                  className={`
      text-sm sm:text-base md:text-lg
      font-medium
      whitespace-nowrap
      transition-colors
      ${scrolled ? "text-[#412B6B]" : "text-white"}
    `}
                >
                  Education & Charitable Trust
                </p>
              </div>
            </Link>
          </div>

          {/* Menu */}
          {/* Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-8">
            {/* <Link
              href="/"
              className={`relative font-medium text-lg ${
                scrolled ? "text-[#6B5FB5]" : "text-white"
              }`}
            >
              Home
            </Link> */}
            <Link
              href="/"
              className={`
    relative 
    font-medium 
    text-lg 
    group 
    transform 
    transition-all 
    duration-300 
    ease-out
    hover:-translate-y-0.5
    ${scrolled ? "text-[#412B6B]" : "text-white"}
  `}
            >
              Home
              <Underline />
            </Link>

            <Link
              href="/#about"
              className={`
    relative 
    font-medium 
    text-lg 
    group 
    transform 
    transition-all 
    duration-300 
    ease-out
    hover:-translate-y-0.5
    ${scrolled ? "text-[#412B6B]" : "text-white"}
  `}
            >
              About
              <Underline />
            </Link>

            <Link
              href="/programs"
              className={`
    relative 
    font-medium 
    text-lg 
    group 
    transform 
    transition-all 
    duration-300 
    ease-out
    hover:-translate-y-0.5
    ${scrolled ? "text-[#412B6B]" : "text-white"}
  `}
            >
              Programs
              <Underline />
            </Link>

            <Link
              href="/#gallery"
              className={`
    relative 
    font-medium 
    text-lg 
    group 
    transform 
    transition-all 
    duration-300 
    ease-out
    hover:-translate-y-0.5
    ${scrolled ? "text-[#412B6B]" : "text-white"}
  `}
            >
              Gallery
              <Underline />
            </Link>

            <Link
              href="/#legal"
              className={`
    relative 
    font-medium 
    text-lg 
    group 
    transform 
    transition-all 
    duration-300 
    ease-out
    hover:-translate-y-0.5
    ${scrolled ? "text-[#412B6B]" : "text-white"}
  `}
            >
              Governance
              <Underline />
            </Link>

            <Link
              href="/#contact"
              className={`
    relative 
    font-medium 
    text-lg 
    group 
    transform 
    transition-all 
    duration-300 
    ease-out
    hover:-translate-y-0.5
    ${scrolled ? "text-[#412B6B]" : "text-white"}
  `}
            >
              Contact
              <Underline />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-1 flex justify-end">
            <button
              className={`md:hidden p-2 transition-colors ${
                scrolled ? "text-[#6B5FB5]" : "text-white"
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
          </div>

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
function Underline() {
  return (
    <span className="absolute left-0 -bottom-2 w-full h-3 pointer-events-none">
      <svg viewBox="0 0 120 12" className="w-full h-full">
        <path
          d="M0 6 Q10 0 20 6 T40 6 T60 6 T80 6 T100 6 T120 6"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="wave-line"
        />
      </svg>
    </span>
  );
}
