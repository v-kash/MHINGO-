"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

const hoverZoom = {
  scale: 1.05,
  transition: { duration: 0.6, ease: "easeOut" },
};

function Block({ image, overlay, title, text, cta, index }) {
  return (
    <motion.div
      className="relative overflow-hidden group h-full"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {/* Image */}
      <motion.div className="absolute inset-0" whileHover={hoverZoom}>
        <Image src={image} alt={title} fill className="object-cover" />
      </motion.div>

      {/* Color Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlay, opacity: 0.9 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 py-12 text-white max-w-md">
        <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
          {title}
        </h3>

        <p className="mt-4 text-white/90 leading-relaxed">{text}</p>

        <button className="mt-8 w-fit border border-white/70 rounded-full px-6 py-2 text-sm tracking-wide hover:bg-white hover:text-black transition">
          {cta}
        </button>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
  id="about"
  className="bg-white pt-8 sm:pt-20 md:pt-24 lg:pt-32 pb-8"
>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* WHO WE ARE Section */}
        <div className="mb-16 text-center max-w-4xl mx-auto relative">
          {/* Label */}
          <motion.h2
            className="text-sm md:text-base tracking-widest text-gray-500 uppercase mb-4 relative inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10">WHO WE ARE</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f4c5c] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.h2>

          {/* Main headline */}
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We work with communities to restore{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#0f4c5c] to-[#6aa84f] bg-clip-text text-transparent">
                dignity, opportunity,
              </span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-2 bg-[#0f4c5c]/10 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>{" "}
            and self-reliance.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            MAHI Education & Charitable Trust is a non-profit organization
            working across education, healthcare, and social welfare in
            underserved communities.
          </motion.p>

          {/* Decorative dots */}
          <motion.div
            className="mt-8 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#0f4c5c]"></span>
            <span className="w-2 h-2 rounded-full bg-[#6aa84f]"></span>
            <span className="w-2 h-2 rounded-full bg-[#b45309]"></span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* TOP LEFT BLOCK */}
            <div className="min-h-[200px]">
              <Block
                index={0}
                image="/about1.jpg"
                overlay="#0f4c5c"
                title="Strengthening Communities Through Care and Education"
                text="MAHI Education & Charitable Trust works at the grassroots level to improve
access to education, healthcare, and essential social support for underserved
communities.
"
                cta="EXPLORE OUR PROGRAMS"
              />
            </div>

            {/* SPACE BELOW - Add your content here */}
            {/* SPACE BELOW - Core Belief Statement */}
            <motion.div
              className="min-h-[200px] bg-white rounded-lg p-10 relative overflow-hidden flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              {/* Abstract Geometric Shapes */}
              <div className="absolute inset-0 opacity-[0.1]">
                <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#0f4c5c] rounded-full"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#6aa84f] rotate-45"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-[#b45309]"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-sm tracking-widest text-gray-400 uppercase mb-6">
                  Core Belief Statement
                </p>

                <blockquote className="space-y-6">
                  <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed italic">
                    "Education is not a program. It is a promise."
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    We don't believe in charity. We believe in building systems
                    that outlast our presence.
                  </p>
                </blockquote>

                {/* Decorative line accent */}
                <div className="mt-8 w-16 h-1 bg-gradient-to-r from-[#0f4c5c] to-[#6aa84f]"></div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - TWO STACKED SQUARE BLOCKS */}
          <div className="flex flex-col gap-6">
            {/* TOP RIGHT BLOCK */}
            <div className="min-h-[200px]">
              <Block
                index={1}
                image="/hero.jpg"
                overlay="#6aa84f"
                title="Creating Opportunities for Learning and Growth"
                text="We support children and young people through educational initiatives that
encourage learning, skill development, and long-term self-reliance."
                cta="LEARN MORE"
              />
            </div>

            {/* BOTTOM RIGHT BLOCK */}
            <div className="min-h-[200px]">
              <Block
                index={2}
                image="/about1.jpg"
                overlay="#b45309"
                title="Standing With Communities in Times of Need
"
                text="In moments of crisis, MAHI works alongside local communities to provide
timely support, recovery assistance, and pathways toward stability and
resilience.
"
                cta="LEARN MORE"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
