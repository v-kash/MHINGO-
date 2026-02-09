"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const yearlyPrograms = [
  {
    year: "2020–21",
    programs: [
      "Tree Plantation",
      "Clean India Campaign",
      "Women Awareness Program",
      "Sewing Training Classes",
      "Computer Training Classes",
    ],
  },
  {
    year: "2021–22",
    programs: [
      "Beauty Parlour Training",
      "Sewing Training Classes",
      "Computer Training Classes",
      "Environment Awareness Program",
    ],
  },
  {
    year: "2022–23",
    programs: [
      "Mobile Repairing Training Class",
      "Sewing Training Classes",
      "Computer Training Classes",
      "Women Awareness Program",
      "Sparrow Home & Pot Distribution",
      "Tree Plantation",
      "Drug Addiction Campaign",
      "Farmer Training",
      "Dr. Babasaheb Ambedkar Jayanti Celebration",
      "Medical Health Check-up Camp",
    ],
  },
  {
    year: "2023–24",
    programs: [
      "Dr. Babasaheb Ambedkar Jayanti Celebration",
      "Beauty Parlour Training",
      "Blanket Distribution Program",
      "Blood Donation Camp",
      "Sparrow Home & Pot Distribution",
      "Clean India Campaign",
      "Computer Training Classes",
      "Education Kit Distribution",
      "Environment Awareness Campaign",
      "Farmer Awareness Campaign",
      "Kitchen Garden Training",
      "Medical Health Check-up Camp",
      "Cobbler Work Training",
      "Women Entrepreneurship Program",
      "Sewing Training Classes",
      "World Women Day Celebration",
    ],
  },
  {
    year: "2024–25",
    programs: [
      "Sparrow Home & Pot Distribution",
      "Education Kit Distribution",
      "Women Awareness Program",
      "Drug Addiction Campaign",
    ],
  },
];

export default function ProgramTimeline() {
  const [selectedYear, setSelectedYear] = useState(4); // Default to latest year
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  /* Auto-cycle through years */
  useEffect(() => {
    if (isPaused) return;

    // First change after 1.6s
    const timeout = setTimeout(() => {
      setSelectedYear((prev) => (prev + 1) % yearlyPrograms.length);
    }, 1600);

    // Then cycle every 5 seconds
    intervalRef.current = setInterval(() => {
      setSelectedYear((prev) => (prev + 1) % yearlyPrograms.length);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#eae8e5]">
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading - Different Style */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-[#0f4c5c] to-[#088395] text-white text-xs font-bold tracking-[0.2em] uppercase mb-3 shadow-md">
                Our Journey
              </span>

              <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0f4c5c] to-[#088395]">
                Programme Timeline
              </h2>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-16 h-1 bg-[#088395] rounded-full" />
                <div className="w-8 h-1 bg-[#0f4c5c] rounded-full" />
                <div className="w-4 h-1 bg-[#088395]/50 rounded-full" />
              </div>
              <p className="text-base mt-3 md:text-lg text-gray-600 max-w-md ">
                Tracking our{" "}
                <span className="text-[#0f4c5c] font-semibold">
                  community impact
                </span>{" "}
                year by year
              </p>
            </div>
          </div>
        </motion.div>

        {/* Year Selector with Pause on Hover */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {yearlyPrograms.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedYear(idx)}
              className={`
                relative px-6 py-3 rounded-full font-semibold text-sm md:text-base
                transition-all duration-300 shadow-md hover:shadow-lg
                ${
                  selectedYear === idx
                    ? "bg-[#0f4c5c] text-white scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              {item.year}
            </button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#088395]/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0f4c5c]/5 rounded-full blur-2xl" />

          {/* Card Container */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:py-8 md:px-10 border border-gray-100">
            {/* Year Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-[#0f4c5c] rounded-full animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f4c5c]">
                Year {yearlyPrograms[selectedYear].year}
              </h3>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-[#0f4c5c]/20 to-transparent ml-4" />
            </div>

            {/* Programs List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {yearlyPrograms[selectedYear].programs.map((program, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  {/* Number Badge */}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#088395]/10 text-[#088395] text-sm font-semibold flex items-center justify-center group-hover:bg-[#088395] group-hover:text-white transition-colors duration-300">
                    {idx + 1}
                  </span>

                  {/* Program Name */}
                  <p className="text-gray-700 text-base leading-relaxed group-hover:text-[#0f4c5c] transition-colors duration-300">
                    {program}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer Count */}
            <div className="mt-10 pt-5 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">
                <span className="font-semibold text-[#0f4c5c] text-lg">
                  {yearlyPrograms[selectedYear].programs.length}
                </span>{" "}
                programmes implemented in {yearlyPrograms[selectedYear].year}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
