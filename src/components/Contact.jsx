"use client";

import { motion } from "framer-motion";
import {
  FileText,
  CreditCard,
  BarChart3,
  Receipt,
  BadgeCheck,
  Landmark,
  Download,
  X, // 👈 ADD THIS
} from "lucide-react";
import { useState } from "react";

export default function LegalCompliance() {
  const documents = [
    {
      id: 1,
      title: "Trust Registration Certificate",
      icon: FileText,
      files: [
        {
          name: "TRUST-REG-CERTIFICATE.pdf",
          path: "/docs/trust/TRUST-REG-CERTIFICATE.pdf",
        },
        {
          name: "TRUST-MOA.pdf",
          path: "/docs/trust/TRUST-MOA.pdf",
        },
        {
          name: "TRUST-MSME-REG.pdf",
          path: "/docs/trust/TRUST-MSME-REG.pdf",
        },
        {
          name: "TRUST-UDHYAM-CERTIFICATE.pdf",
          path: "/docs/trust/TRUST-UDHYAM-CERTIFICATE.pdf",
        },
      ],
    },

    {
      id: 2,
      title: "PAN Card",
      icon: CreditCard,
      files: [
        {
          name: "TRUST-PANCARD.pdf",
          path: "/docs/pan/TRUST-PANCARD.pdf",
        },
      ],
    },
    {
      id: 3,
      title: "Audit Reports",
      icon: BarChart3,
      files: [
        {
          name: "AUDIT-REPORT-2021-22.pdf",
          path: "/docs/audit/AUDIT-REPORT-2021-22.pdf",
        },
        {
          name: "AUDIT-REPORT-2022-23.pdf",
          path: "/docs/audit/AUDIT-REPORT-2022-23.pdf",
        },
        {
          name: "AUDIT-REPORT-2023-24.pdf",
          path: "/docs/audit/AUDIT-REPORT-2023-24.pdf",
        },
        {
          name: "AUDIT-REPORT-2024-25.pdf",
          path: "/docs/audit/AUDIT-REPORT-2024-25.pdf",
        },
      ],
    },
    {
      id: 4,
      title: "Income Tax Returns (ITR)",
      icon: Receipt,
      files: [
        {
          name: "ITR-7-AY-2023-24.pdf",
          path: "/docs/itr/ITR-7-AY-2023-24.pdf",
        },
        {
          name: "ITR-7-AY-2024-25.pdf",
          path: "/docs/itr/ITR-7-AY-2024-25.pdf",
        },
        {
          name: "ITR-7-AY-2025-26.pdf",
          path: "/docs/itr/ITR-7-AY-2025-26.pdf",
        },
      ],
    },
    {
      id: 5,
      title: "CSR-1 Certificate",
      icon: BadgeCheck,
      files: [
        {
          name: "TRUST-CSR1.pdf",
          path: "/docs/csr1/TRUST-CSR1.pdf",
        },
      ],
    },
    {
      id: 6,
      title: "12A & 80G Certificates",
      icon: Landmark,
      files: [
        {
          name: "TRUST-12A.pdf",
          path: "/docs/12a-80g/TRUST-12A.pdf",
        },
        {
          name: "TRUST-80G.pdf",
          path: "/docs/12a-80g/TRUST-80G.pdf",
        },
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <section id="legal" className="relative py-12 bg-[#ebe6da] overflow-hidden">
      {/* subtle background accent */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#d8a25e]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-[#6b7280]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 text-center max-w-4xl mx-auto">
          <motion.h2
            className="text-sm md:text-base tracking-widest uppercase mb-4 relative inline-block"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10">LEGAL & TRANSPARENCY</span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8a5a44] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            />
          </motion.h2>

          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug mb-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Legal{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#8a5a44] to-[#d8a25e] bg-clip-text text-transparent">
                & Compliance
              </span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-2 bg-[#d8a25e]/20 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            MAHI Education and Charitable Trust is committed to ethical
            practices, transparency, and regulatory compliance. The following
            documents are maintained and available for review.
          </motion.p>
        </div>

        {/* Documents */}
        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc, index) => {
            const Icon = doc.icon;

            return (
              <motion.button
                key={doc.id}
                onClick={() => {
                  setSelectedDoc(doc);
                  setOpen(true);
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="
                  group flex items-center justify-between
                  p-3 rounded-xl
                  bg-white/80 backdrop-blur
                  border border-gray-200
                  shadow-sm hover:shadow-lg
                  transition-all
                "
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#d8a25e]/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#8a5a44]" />
                  </div>

                  <span className="font-semibold text-gray-900 group-hover:text-[#8a5a44] transition-colors">
                    {doc.title}
                  </span>
                </div>

                <Download className="w-5 h-5 text-gray-400 group-hover:text-[#8a5a44] transition-colors" />
              </motion.button>
            );
          })}
        </div>

        {open && selectedDoc && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setOpen(false)} // 👈 close on outside click
          >
            <div
              className="relative bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl"
              onClick={(e) => e.stopPropagation()} // 👈 prevent closing when clicking inside
            >
              {/* ❌ Close Icon */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#8a5a44] transition"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-semibold mb-6">
                {selectedDoc.title}
              </h3>

              <div className="space-y-3">
                {selectedDoc.files.map((file, index) => (
                  <a
                    key={index}
                    href={file.path}
                    download
                    className="
    group flex items-center justify-between
    bg-gray-50 px-4 py-3 rounded-lg
    hover:bg-[#f3e3dc]
    transition-all duration-200
  "
                  >
                    <span className="text-sm text-gray-800 group-hover:text-[#8a5a44] transition-colors">
                      {file.name}
                    </span>

                    <Download className="w-4 h-4 text-gray-500 group-hover:text-[#8a5a44] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
