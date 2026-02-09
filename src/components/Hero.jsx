"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { GraduationCap, HeartPulse, HandHeart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const clipRevealVariant = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
    backgroundPosition: "0% 50%",
  },
  visible: (delay = 0) => ({
    clipPath: "inset(0 0% 0 0)",
    backgroundPosition: "100% 50%",
    transition: {
      clipPath: {
        delay,
        duration: 1.2,
        ease: "easeOut",
      },
      backgroundPosition: {
        delay,
        duration: 1.4,
        ease: "easeOut",
      },
    },
  }),
};

const gradientTextVariant = {
  hidden: {
    backgroundPosition: "0% 50%",
    opacity: 0,
    y: 24,
  },
  visible: (delay = 0) => ({
    backgroundPosition: "100% 50%",
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay, duration: 0.4 },
      y: { delay, duration: 0.6, ease: "easeOut" },
      backgroundPosition: {
        delay,
        duration: 1.4,
        ease: "easeOut",
      },
    },
  }),
};

const textVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative w-full min-h-screen md:min-h-[95vh]">
      {/* Background Image Container with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            y: imageY,
            scale: scale
          }}
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Image
            src="/hero.jpg"
            alt="MAHI Education and Charitable Trust"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFBgP/xAAjEAACAQQBAwUAAAAAAAAAAAABAgMABAUREiExQQYTIjJR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIE/8QAHBEAAgICAwAAAAAAAAAAAAAAAAECEQMhMUFR/9oADAMBAAIRAxEAPwDmy3EWRlS4uLtHlhUsI2X8T+VRc1lryzuo4bS5MEQXcm/ucfg/lWo9SWEeRwzS+mY2lvIiCY1+LJ7jkcfBrnwReHmYV9z7uJmDW84On6j5pSqm6GotpWYrCWd1fXaW1rE0kjerAf1W/wDTWCi9N4sWUUrSF2kkkPys3VqRRU44/wDQRj/I//Z"
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Grayscale overlay that fades out */}
          <motion.div
            className="absolute inset-0 z-10"
            style={{
              mixBlendMode: 'saturation',
              backgroundColor: 'white',
            }}
            initial={{ opacity: 1 }}
            animate={imageLoaded ? { opacity: 0 } : { opacity: 1 }}
            transition={{
              duration: 1.6,
              delay: 0.3,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Dark Overlay with fade on scroll */}
        <motion.div
          className="absolute inset-0 bg-black/40 z-10"
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </div>

      {/* Navigation Bar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Main Hero Content - Left Aligned with Parallax */}
      <motion.div 
        className="relative z-20 container mx-auto px-6 md:px-16 pt-24 md:pt-0 md:h-[calc(100vh-80px)] flex items-center"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-full md:max-w-3xl text-white">
          {/* Line 1 */}
          <motion.h1
            className="
              text-3xl sm:text-4xl md:text-6xl font-black leading-tight pb-1
              overflow-hidden
              bg-gradient-to-r from-white via-white/90 to-[#43E97B]
              bg-[length:300%_100%]
              bg-clip-text text-transparent
            "
            variants={clipRevealVariant}
            initial="hidden"
            animate={mounted && imageLoaded ? "visible" : "hidden"}
            custom={1.2}
          >
            Empowering Communities.
          </motion.h1>

          {/* Line 2 */}
          <motion.h1
            className="
              text-3xl sm:text-4xl md:text-6xl font-black leading-tight pb-1
              overflow-hidden
              bg-gradient-to-r from-white via-white/90 to-[#43E97B]
              bg-[length:300%_100%]
              bg-clip-text text-transparent
            "
            variants={clipRevealVariant}
            initial="hidden"
            animate={mounted && imageLoaded ? "visible" : "hidden"}
            custom={1.45}
          >
            Changing Lives.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-[1.4rem] mt-2 mb-8 opacity-90"
            variants={textVariant}
            initial="hidden"
            animate={mounted && imageLoaded ? "visible" : "hidden"}
            custom={1.8}
          >
            Working towards a society where every individual lives with dignity,
            confidence and opportunity.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted && imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            {/* buttons stay same */}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Feature Cards - stay in place */}
      <div className="absolute bottom- md:-bottom-16 left-0 right-0 z-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Education Card */}
            <div className="bg-[#C6B062] text-white shadow-xl rounded-sm h-[120px] md:h-[150px] relative overflow-hidden">
              <GraduationCap
                size={120}
                className="absolute -top-6 -right-6 text-white/10"
              />

              <div className="flex items-start gap-3 md:gap-5 h-full px-4 md:px-8 py-5 md:py-7 relative z-10">
                <GraduationCap size={36} className="md:w-12 md:h-12" />

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-1 md:mb-2">
                    Education
                  </h3>
                  <p className="text-white/80 text-sm md:text-md max-w-[220px]">
                    Access to quality learning and skill development for every
                    child.
                  </p>
                </div>
              </div>
            </div>

            {/* Health Card */}
            <div className="bg-[#6B5FB5] text-white shadow-xl rounded-sm h-[120px] md:h-[150px] relative overflow-hidden">
              <HeartPulse
                size={120}
                className="absolute -top-6 -right-6 text-white/10"
              />

              <div className="flex items-start gap-3 md:gap-5 h-full px-4 md:px-8 py-5 md:py-7 relative z-10">
                <HeartPulse size={36} className="md:w-12 md:h-12" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Health</h3>
                  <p className="text-white/80 text-sm md:text-md max-w-[220px]">
                    Improving access to healthcare and overall well-being.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Welfare Card */}
            <div className="bg-[#58B6AD] text-white shadow-xl rounded-sm h-[120px] md:h-[150px] relative overflow-hidden">
              <HandHeart
                size={120}
                className="absolute -top-6 -right-6 text-white/10"
              />

              <div className="flex items-start gap-3 md:gap-5 h-full px-4 md:px-8 py-5 md:py-7 relative z-10">
                <HandHeart size={36} className="md:w-12 md:h-12" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Social Welfare</h3>
                  <p className="text-white/80 text-sm md:text-md max-w-[220px]">
                    Supporting dignity, inclusion, and social security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}