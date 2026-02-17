"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";


export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#0f4c5c] text-white overflow-hidden"
    >
      {/* subtle texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none" />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6aa84f] via-[#f4a261] to-[#6aa84f]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-10 border-b border-white/20">
          {/* About */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
  <Image
    src="/logo10.png"
    alt="MAHI Logo"
    width={140}
    height={50}
    className="object-contain h-12 w-auto"
  />

  <div className="ml-2 text-left">
    <p className="text-sm sm:text-base font-medium whitespace-nowrap text-white">
      Education & Charitable Trust
    </p>
  </div>
</div>

            <p className="text-white/80 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
              Committed to empowering communities through education, skill
              development, and sustainable social welfare initiatives that
              promote self-reliance and dignified living for all.
            </p>

            <div className="w-14 h-[2px] bg-[#f4a261] rounded-full mt-6 mx-auto md:mx-0" />
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left md:pl-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3 text-sm sm:text-base">
              {[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About Us" },
                { href: "/programs", label: "Programs" },
                { href: "/#gallery", label: "Gallery" },
                { href: "/#contact", label: "Contact" },
                { href: "/#legal", label: "Legal & Compliance" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/80 hover:text-[#f4a261] transition-colors"
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-5 flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-[#6aa84f]" />
              Get in Touch
            </h3>

            <div className="space-y-5 text-sm sm:text-base">
              {/* Phones */}
              <div>
                <p className="text-white/60 mb-2 text-xs sm:text-sm">Phone:</p>
                <a
                  href="tel:9979131367"
                  className="block text-white/90 hover:text-[#f4a261] transition-colors"
                >
                  9979131367 – Mr. Anilkumar V. Dodiya
                </a>
                <a
                  href="tel:9512009535"
                  className="block text-white/90 hover:text-[#f4a261] transition-colors"
                >
                  9512009535 – Office
                </a>
              </div>

              {/* Emails */}
              <div>
                <p className="text-white/60 mb-2 text-xs sm:text-sm flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  Email:
                </p>

                <a
                  href="mailto:mahieducationcharitabletrust2020@gmail.com"
                  className="block text-white/90 hover:text-[#f4a261] transition-colors break-all"
                >
                  mahieduandcharitabletrust2020@gmail.com
                </a>
                <a
                  href="mailto:mahiedu4trust2020@gmail.com"
                  className="block text-white/90 hover:text-[#f4a261] transition-colors break-all"
                >
                  mahiedutrust2020@gmail.com
                </a>
                <a
                  href="mailto:dodiya223653@gmail.com"
                  className="block text-white/90 hover:text-[#f4a261] transition-colors break-all"
                >
                  dodiya223653@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 text-center">
          <p className="text-white/70 text-sm sm:text-base">
            © {new Date().getFullYear()} MAHI Education and Charitable Trust.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
