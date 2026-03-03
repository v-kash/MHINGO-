"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const TOTAL_IMAGES = 74;

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const images = Array.from(
    { length: TOTAL_IMAGES },
    (_, i) => `/gallery/gallery${i + 9}.jpeg`,
  );

  return (
    <div className="min-h-screen bg-white px-6 py-6">
      {/* Back Button */}
      {/* Header Row */}
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#f4a261] transition-colors duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-2xl font-semibold text-gray-900">Gallery</h1>

        {/* Spacer to balance the back button */}
        <div className="w-24" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {images.map((src, index) => (
          <div key={index} className="aspect-square overflow-hidden">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
