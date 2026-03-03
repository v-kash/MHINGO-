"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const donateImages = [
  {
    id: 1,
    src: "/donate.png",
    alt: "Scan QR Code to Donate",
    category: "UPI / QR",
  },
  {
    id: 2,
    src: "/donate2.png",
    alt: "Bank Transfer Details",
    category: "Bank Details",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [selectedDonateImage, setSelectedDonateImage] = useState(null);

  useEffect(() => {
    if (selectedDonateImage) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [selectedDonateImage]);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo9.png"
              alt="MAHI Logo"
              width={140}
              height={50}
              priority
              className="object-contain h-14 w-auto"
            />
            <p
              className={`
                ml-2 text-sm sm:text-base md:text-lg font-medium whitespace-nowrap
                ${scrolled ? "text-[#412B6B]" : "text-white"}
              `}
            >
              Mahi Education & Charitable Trust
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/" scrolled={scrolled}>
              Home
            </NavLink>
            <NavLink href="/#about" scrolled={scrolled}>
              About
            </NavLink>
            <NavLink href="/programs" scrolled={scrolled}>
              Programs
            </NavLink>
            <NavLink href="/#home-gallery" scrolled={scrolled}>
              Gallery
            </NavLink>
            <NavLink href="/#legal" scrolled={scrolled}>
              Governance
            </NavLink>
            <NavLink href="/#contact" scrolled={scrolled}>
              Contact
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Donate Button */}
            <button
              onClick={() => setSelectedDonateImage(donateImages[0])}
              className="
                hidden md:inline-block
                px-5 py-2
                rounded-full
                bg-[#412B6B]
                text-white
                text-sm
                font-semibold
                transition-all duration-300
                hover:bg-[#5a3d91]
              "
            >
              Donate
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 ${
                scrolled ? "text-[#412B6B]" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-black/10 px-6 py-6 flex flex-col gap-2">
          <MobileLink href="/">Home</MobileLink>
          <MobileLink href="/#about">About</MobileLink>
          <MobileLink href="/programs">Programs</MobileLink>
          <MobileLink href="/#home-gallery">Gallery</MobileLink>
          <MobileLink href="/#legal">Governance</MobileLink>
          <MobileLink href="/#contact">Contact</MobileLink>

          {/* Mobile Donate */}
          <button
            onClick={() => setDonateOpen(true)}
            href="/donate"
            className="mt-4 bg-[#412B6B] text-white font-semibold py-3 px-4 rounded-lg text-center"
          >
            Donate
          </button>
        </div>
      </div>
      {/* Bottom Line */}
      <div
        className={`
          h-[1px] w-full transition-all duration-500
          ${scrolled ? "bg-black/10 scale-x-100" : "bg-white/20 scale-x-0"}
          origin-left
        `}
      />
      {selectedDonateImage && (
        <DonateLightbox
          image={selectedDonateImage}
          onClose={() => setSelectedDonateImage(null)}
        />
      )}
    </nav>
  );
}

/* Desktop Link */
function NavLink({ href, children, scrolled }) {
  return (
    <Link
      href={href}
      className={`
        relative font-medium text-lg transition-all duration-300
        hover:-translate-y-0.5
        ${scrolled ? "text-[#412B6B]" : "text-white"}
      `}
    >
      {children}
    </Link>
  );
}

/* Mobile Link */
function MobileLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-black font-medium py-3 px-4 rounded-lg hover:bg-black/5 transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function DonateLightbox({ onClose }) {
  const images = [
    {
      src: "/donate.png",
      alt: "Scan QR Code to Donate",
      category: "UPI / QR",
    },
    {
      src: "/donate2.png",
      alt: "Bank Transfer Details",
      category: "Bank Details",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      {/* Close Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#412B6B] hover:rotate-90 transition-all duration-300"
        onClick={onClose}
      >
        ✕
      </motion.button>

      {/* Images Container */}
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image Box - NOT CROPPED */}
            <div className="relative w-full max-h-[75vh] h-[60vh]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Info */}
            <div className="mt-4 text-center">
              <span className="inline-block px-4 py-2 bg-[#412B6B] text-white text-sm font-bold rounded-full mb-2">
                {img.category}
              </span>
              <h3 className="text-white text-lg font-semibold">{img.alt}</h3>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
