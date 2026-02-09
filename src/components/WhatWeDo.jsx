"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const programs = [
  {
    title: "Education & Skill Development",
    desc: "We design educational and skill-based initiatives that improve employability, digital literacy, and personal growth among youth and adults, enabling long-term self-reliance.",
    bg: "/programs/education.jpg",
    overlay: "rgba(15, 76, 92, 0.5)", // Reduced from 0.92
  },
  {
    title: "Health & Awareness Initiatives",
    desc: "Our health programs focus on preventive care, medical camps, blood donation drives, and community awareness activities that promote well-being and healthier lives.",
    bg: "/programs/health.jpg",
    overlay: "rgba(107, 95, 181, 0.5)", // Reduced from 0.92
  },
  {
    title: "Women Empowerment",
    desc: "Through awareness programs, skill training, and entrepreneurship initiatives, we support women in building confidence, dignity, and economic independence.",
    bg: "/programs/women.jpg",
    overlay: "rgba(244, 162, 97, 0.5)", // Reduced from 0.92
  },
  {
    title: "Environment & Sustainability",
    desc: "We undertake environmental initiatives such as tree plantation, clean-up drives, kitchen gardens, and sparrow home distribution to encourage responsible use of natural resources.",
    bg: "/programs/environment.jpg",
    overlay: "rgba(88, 182, 173, 0.5)", // Reduced from 0.92
  },
  {
    title: "Social Welfare & Community Support",
    desc: "We work closely with underserved communities to address social challenges through relief distribution, awareness campaigns, and community-based support activities.",
    bg: "/programs/community.jpg",
    overlay: "rgba(45, 55, 72, 0.5)", // Reduced from 0.92
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  /* Auto-cycle */
  useEffect(() => {
    if (isPaused) return;

    // 🔥 Trigger first change sooner
    const timeout = setTimeout(() => {
      setActive((prev) => (prev + 1) % programs.length);
    }, 1600); // feels instant but not jarring

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % programs.length);
    }, 4000);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    // <section className="py-20 md:py-12 bg-[#f9fafb]">
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/new3.jpeg"
          className="w-full h-full object-cover opacity-100"
          alt=""
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[#f7f4ef]/70" />
      {/* Soft cream overlay */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span
            className="
  inline-block
  px-4 py-1.5
  rounded-full
  bg-[#088395]/10
  text-[#088395]
  text-sm
  font-semibold
  tracking-widest
  uppercase
  mb-4
"
          >
            What We Do
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Our Programs
          </h2>

          {/* Accent line — DIFFERENT color */}
          <div className="mt-5 w-50 h-[2px] bg-[#0f4c5c] mx-auto rounded-full" />

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Each program is designed to create{" "}
            <span className="text-[#0f4c5c] font-medium">lasting change</span>{" "}
            by strengthening individuals, families, and communities from within.
          </p>

          {/* tiny accent */}
        </motion.div>

        {/* Section Animation */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-1 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* LEFT MENU (STATIC) */}
          <div
            className="flex flex-col gap-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left intro */}
            {/* Program list */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 pt-3 sm:pt-4 md:pt-14">
              {programs.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="text-left group"
                >
                  <div className="flex items-start gap-4">
                    <motion.span
                      animate={{
                        scale: active === i ? 1 : 0,
                        opacity: active === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-2 h-2 rounded-full bg-[#0f4c5c] mt-2 flex-shrink-0"
                    />

                    <h3
                      className={`text-lg md:text-xl transition-colors ${
                        active === i
                          ? "text-[#0f4c5c] font-semibold"
                          : "text-gray-500 group-hover:text-gray-800"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL (DYNAMIC BG ONLY HERE) */}
          <div className="relative mt-4 sm:mt-6 lg:mt-0 min-h-[280px] sm:min-h-[340px] md:min-h-[340px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  backgroundImage: `url(${programs[active].bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </AnimatePresence>

            {/* Gradient Overlay (lighter) */}

            <div
              className="absolute inset-0 transition-colors duration-700"
              style={{
                background: `linear-gradient(135deg, ${programs[active].overlay} 0%, ${programs[active].overlay.replace("0.75", "0.65")} 100%)`,
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">
                    {programs[active].title}
                  </h3>

                  <p className="text-base md:text-lg text-white/95 leading-relaxed">
                    {programs[active].desc}
                  </p>

                  <div className="mt-8 w-16 h-1 bg-white/80 rounded-full" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
