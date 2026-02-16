"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imageVariants = {
  initial: { x: -120, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const textVariants = {
  initial: { x: 120, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export default function MissionVisionCard() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  /* allow auto-switch only after first animation */
  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;
    const interval = setInterval(
      () => setActive((p) => (p === 0 ? 1 : 0)),
      5000
    );
    return () => clearInterval(interval);
  }, [hasAnimated]);

  /* background parallax */
  const { scrollYProgress: bgScrollProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(bgScrollProgress, [0, 1], ["-40%", "40%"]);

  /* image parallax */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  const content = [
    {
      tag: "Our Mission",
      number: "01",
      title: "Empowering Communities for a Sustainable Future",
      text: "To empower individuals and communities through education, skill development, and social welfare initiatives that promote self-reliance and sustainable use of resources.",
      image: "/about1.jpg",
    },
    {
      tag: "Our Vision",
      number: "02",
      title: "Building an Inclusive Society with Dignity",
      text: "To build an inclusive society where every individual enjoys dignity, confidence, equal opportunities, and a better quality of life.",
      image: "/hero.jpg",
    },
  ];

  const handlePrev = () => setActive((p) => (p === 0 ? 1 : 0));
  const handleNext = () => setActive((p) => (p === 0 ? 1 : 0));

  return (
    <section id="MV" ref={ref} className="relative py-14 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <Image
            src="/mission-bg.jpg"
            alt=""
            fill
            className="object-cover scale-110"
            priority
          />
        </motion.div>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-[#0d5465]/90" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-12">
        {/* heading */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-[#f4a261] mb-2">
            WHAT DRIVES US
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Mission & Vision
          </h2>
        </div>

        {/* card */}
        <div className="relative">
          {/* arrows – desktop only */}
          <button
  onClick={handlePrev}
  className="absolute z-20 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex hover:scale-105 transition-transform"
  aria-label="Previous"
>
  <div className="w-14 h-14 rounded-full bg-white hover:bg-[#f4a261] flex items-center justify-center shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
</button>

         <button
  onClick={handleNext}
  className="absolute z-20 right-0 top-1/2 translate-x-1/2 -translate-y-1/2 hidden md:flex hover:scale-105 transition-transform"
  aria-label="Next"
>
  <div className="w-14 h-14 rounded-full bg-white hover:bg-[#f4a261] flex items-center justify-center shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
</button>


          <div
            className="
              bg-white rounded-sm shadow-xl overflow-hidden
              grid grid-cols-1 md:grid-cols-[55%_45%]
              min-h-[520px] sm:min-h-[480px] md:min-h-[390px]
            "
          >
            {/* image */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ y: yImage }}
                className="relative h-[220px] sm:h-[260px] md:h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="hidden md:block h-full w-full"
                >
                  <Image
                    src={content[active].image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="md:hidden absolute inset-0">
                  <Image
                    src={content[active].image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* text */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                variants={textVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative p-6 sm:p-8 md:p-12 flex flex-col justify-center"
              >
                <span className="absolute top-2 right-4 md:right-8 text-[56px] md:text-[96px] font-bold text-gray-100 pointer-events-none">
                  {content[active].number}
                </span>

                <p className="text-sm tracking-widest uppercase text-[#f4a261] mb-3 font-semibold">
                  {content[active].tag}
                </p>

                <h3 className="text-2xl pb-2 md:text-3xl font-semibold bg-gradient-to-r from-[#0f4c5c] to-[#6aa84f] bg-clip-text text-transparent">
                  {content[active].title}
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {content[active].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* footer text */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-white mb-2">
            What Sets Us Apart?
          </p>
          <p className="text-white/80 max-w-2xl mx-auto">
            We don't just provide aid — we build systems that empower communities
            to thrive independently.
          </p>
        </div>
      </div>
    </section>
  );
}
