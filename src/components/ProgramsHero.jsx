"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ───────────────── animations reused ───────────────── */

const clipRevealVariant = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
    backgroundPosition: "0% 50%",
  },
  visible: (delay = 0) => ({
    clipPath: "inset(0 0% 0 0)",
    backgroundPosition: "100% 50%",
    transition: {
      clipPath: { delay, duration: 1.1, ease: "easeOut" },
      backgroundPosition: { delay, duration: 1.3, ease: "easeOut" },
    },
  }),
};

const textVariant = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export default function ProgramsHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0.55, 0.45, 0],
  );

  return (
    <section
      ref={ref}
      className="relative w-full h-[80vh] min-h-[520px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src="/programs1.jpg"
            alt="Our Programs"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-[#0f4c5c]"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex items-center"
        style={{ y: contentY }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
          <div className="max-w-3xl text-white">
            {/* Label */}
            <motion.p
              className="text-sm tracking-widest uppercase text-[#f4a261] mb-4"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={0.6}
            >
              Our Work
            </motion.p>

            {/* Line 1 */}
            <motion.h1
              className="
                text-4xl md:text-6xl font-black leading-tight pb-1
                overflow-hidden
                bg-gradient-to-r from-white via-white/90 to-[#f4a261]
                bg-[length:300%_100%]
                bg-clip-text text-transparent
              "
              variants={clipRevealVariant}
              initial="hidden"
              animate="visible"
              custom={0.9}
            >
              What We Do
            </motion.h1>

            {/* Line 2 */}
            <motion.h1
              className="
                text-4xl md:text-6xl font-black leading-tight pb-1
                overflow-hidden
                bg-gradient-to-r from-white via-white/90 to-[#f6bd60]
                bg-[length:300%_100%]
                bg-clip-text text-transparent
              "
              variants={clipRevealVariant}
              initial="hidden"
              animate="visible"
              custom={1.15}
            >
              Our Programs
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-[1.3rem] mt-4 max-w-2xl text-white/90"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={1.5}
            >
              From education and healthcare to women empowerment and
              environmental sustainability, our programs are designed to create
              long-term, community-driven impact.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
