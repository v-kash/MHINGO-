"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function RevealGridGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "/gallery1.jpg",
      alt: "Community Education",
      category: "Education",
    },
    {
      id: 2,
      src: "/gallery2.jpg",
      alt: "Skill Development",
      category: "Skills",
    },
    {
      id: 3,
      src: "/gallery3.jpg",
      alt: "Healthcare Services",
      category: "Healthcare",
    },
    {
      id: 4,
      src: "/gallery9.jpg",
      alt: "Women Empowerment",
      category: "Empowerment",
    },
    { id: 5, src: "/gallery5.jpg", alt: "Youth Programs", category: "Youth" },
    {
      id: 6,
      src: "/gallery6.jpg",
      alt: "Community Outreach",
      category: "Outreach",
    },
    {
      id: 7,
      src: "/gallery7.jpg",
      alt: "Education Initiative",
      category: "Education",
    },
    {
      id: 8,
      src: "/gallery8.jpg",
      alt: "Training Workshop",
      category: "Skills",
    },
    
  ];

  return (
    <section id="gallery" className="relative py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#f4a261]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#6aa84f]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header - Same Style as Your Code */}
        <div className="mb-16 text-center max-w-4xl mx-auto relative">
          {/* Label */}
          <motion.h2
            className="text-sm md:text-base tracking-widest text-gray-500 uppercase mb-4 relative inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10">OUR IMPACT IN ACTION</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f4a261] to-transparent"
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
            Every photograph tells a story of{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#f4a261] to-[#e76f51] bg-clip-text text-transparent">
                transformation, hope,
              </span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-2 bg-[#f4a261]/10 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>{" "}
            and community.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Witness the power of collective action through candid moments of
            joy, learning, and empowerment across communities we serve.
          </motion.p>

          {/* Decorative dots */}
          <motion.div
            className="mt-8 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#f4a261]"></span>
            <span className="w-2 h-2 rounded-full bg-[#e76f51]"></span>
            <span className="w-2 h-2 rounded-full bg-[#6aa84f]"></span>
          </motion.div>
        </div>

        {/* Tight Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {images.map((image, index) => (
            <RevealCard
              key={image.id}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}

// function RevealCard({ image, index, onClick }) {
//   const cardRef = useRef(null);
//   const isInView = useInView(cardRef, { once: true, amount: 0.3 });

//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, y: 60, scale: 0.8 }}
//       animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.1,
//         ease: [0.25, 0.4, 0.25, 1],
//       }}
//       className="group relative aspect-square overflow-hidden cursor-pointer bg-gray-100"
//       onClick={onClick}
//     >
//       {/* Image */}
//       <Image
//         src={image.src}
//         alt={image.alt}
//         fill
//         className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
//       />

//       {/* Overlay - shows on hover */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//           <span className="inline-block px-2 py-1 bg-[#f4a261] text-white text-xs font-bold rounded mb-2">
//             {image.category}
//           </span>
//           <h3 className="text-white font-semibold text-sm md:text-base">
//             {image.alt}
//           </h3>
//         </div>
//       </div>

//       {/* Reveal Effect - Curtain from bottom */}
//       <motion.div
//         initial={{ y: 0 }}
//         animate={isInView ? { y: "-100%" } : {}}
//         transition={{
//           duration: 0.8,
//           delay: index * 0.1 + 0.2,
//           ease: [0.65, 0, 0.35, 1],
//         }}
//         className="absolute inset-0 bg-gradient-to-br from-[#f4a261] to-[#e76f51] z-10"
//       />

//       {/* Corner Accent */}
//       <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/80 transition-all duration-500" />
//     </motion.div>
//   );
// }

function RevealCard({ image, index, onClick }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      // whileHover={{ rotateZ: 2 }}
      className="group relative aspect-square overflow-hidden cursor-pointer bg-gray-100 "
      onClick={onClick}
    >
      {/* Image */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f4a261]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-4 transform scale-90 group-hover:scale-100 transition-transform duration-500">
          <span className="inline-block px-2 py-1 bg-white text-[#f4a261] text-xs font-bold rounded mb-2">
            {image.category}
          </span>
          <h3 className="text-white font-semibold text-sm md:text-base drop-shadow-lg">
            {image.alt}
          </h3>
        </div>
      </div>

      {/* Reveal Curtain */}
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: "-100%" } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.1 + 0.2,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#f4a261] to-[#e76f51] z-10"
      />
    </motion.div>
  );
}

// function Lightbox({ image, onClose }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       {/* Close Button */}
//       <motion.button
//         initial={{ scale: 0, rotate: -180 }}
//         animate={{ scale: 1, rotate: 0 }}
//         transition={{ delay: 0.2 }}
//         className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#f4a261] hover:rotate-90 transition-all duration-300"
//         onClick={onClose}
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </motion.button>

//       {/* Image Container */}
//       <motion.div
//         initial={{ scale: 0.8, y: 50 }}
//         animate={{ scale: 1, y: 0 }}
//         transition={{ type: "spring", damping: 25 }}
//         className="relative max-w-5xl w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative aspect-square md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
//           <Image
//             src={image.src}
//             alt={image.alt}
//             fill
//             className="object-contain"
//           />
//         </div>

//         {/* Image Info */}
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-6 text-center"
//         >
//           <span className="inline-block px-4 py-2 bg-[#f4a261] text-white text-sm font-bold rounded-full mb-3">
//             {image.category}
//           </span>
//           <h3 className="text-white text-2xl md:text-3xl font-bold">
//             {image.alt}
//           </h3>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

function Lightbox({ image, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#f4a261] hover:rotate-90 transition-all duration-300"
        onClick={onClose}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </motion.button>

      {/* Image Container - CONTROLLED SIZE */}
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Square aspect ratio with max height */}
        <div className="relative w-full max-h-[70vh] aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Image Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <span className="inline-block px-4 py-2 bg-[#f4a261] text-white text-sm font-bold rounded-full mb-3">
            {image.category}
          </span>
          <h3 className="text-white text-xl md:text-2xl font-bold">
            {image.alt}
          </h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
