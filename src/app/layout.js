// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "MAHI Education & Charitable Trust",
//   description:
//     "Learn about MAHI Education & Charitable Trust, a non-profit organization working to empower communities through education, healthcare, skill development, and social welfare initiatives.",
//   keywords: [
    
//   ],
//   authors: [{ name: "MAHI Education & Charitable Trust" }],
//   creator: "MAHI Education & Charitable Trust",
//   publisher: "MAHI Education & Charitable Trust",

//   openGraph: {
//     title: "MAHI Education & Charitable Trust",
//     description:
//       "Discover how MAHI Education & Charitable Trust works with communities to restore dignity, opportunity, and self-reliance through education and social welfare programs.",
//     url: "https://mahieducationtrust.org/about",
//     siteName: "MAHI Education & Charitable Trust",
//     images: [
//       {
//         url: "https://mahieducationtrust.org/og-about.jpeg",
//         width: 1200,
//         height: 630,
//         alt: "MAHI Education & Charitable Trust – About Us",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },

//   // twitter: {
//   //   card: "summary_large_image",
//   //   title: "About MAHI Education & Charitable Trust",
//   //   description:
//   //     "Empowering communities through education, healthcare, and sustainable social welfare initiatives.",
//   //   images: ["https://yourdomain.com/og-about.jpeg"],
//   // },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: {
    default: "MAHI Education & Charitable Trust | NGO for Education & Social Welfare in India",
    template: "MAHI Education & Charitable Trust",
  },
  description:
    "MAHI Education & Charitable Trust is a registered non-profit NGO empowering underserved communities across India through education, healthcare, skill development, and social welfare. 80G & 12A certified. Donate or volunteer today.",
  keywords: [
    "MAHI Education Trust",
    "MAHI Charitable Trust",
    "NGO India",
    "non-profit India",
    "education NGO India",
    "charitable trust India",
    "social welfare NGO",
    "community empowerment India",
    "skill development NGO",
    "donate NGO India",
    "80G donation India",
    "12A certified trust",
    "CSR NGO India",
    "women empowerment NGO",
    "healthcare NGO India",
    "youth programs India",
    "underprivileged children education",
    "trust registration India",
    "volunteer NGO India",
    "MAHI trust programs",
  ],
  authors: [{ name: "MAHI Education & Charitable Trust", url: "https://mahieducationtrust.org" }],
  creator: "MAHI Education & Charitable Trust",
  publisher: "MAHI Education & Charitable Trust",

  // ─── CANONICAL & ALTERNATE ─────────────────────────────────────
  alternates: {
    canonical: "https://mahieducationtrust.org/",
    languages: {
      "en-IN": "https://mahieducationtrust.org/",
    },
  },

  // ─── ROBOTS ────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── OPEN GRAPH ────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mahieducationtrust.org/",
    siteName: "MAHI Education & Charitable Trust",
    title: "MAHI Education & Charitable Trust | NGO for Education & Social Welfare in India",
    description:
      "A registered non-profit NGO empowering underserved communities across India through education, healthcare, and social welfare. 80G & 12A certified. Join us — donate, volunteer, or partner today.",
    images: [
      {
        url: "https://mahieducationtrust.org/hero.jpg",
        width: 1200,
        height: 630,
        alt: "MAHI Education & Charitable Trust – Empowering Communities in India",
        type: "image/jpeg",
      },
    ],
  },

  // ─── TWITTER / X ───────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "MAHI Education & Charitable Trust | NGO India",
    description:
      "Empowering communities through education, healthcare & social welfare in India. 80G & 12A certified trust. Donate today.",
    images: [
      {
        url: "https://mahieducationtrust.org/hero.jpg",
        alt: "MAHI Education & Charitable Trust",
      },
    ],
    creator: "@mahitrust",
    site: "@mahitrust",
  },

  // ─── ICONS / FAVICON ───────────────────────────────────────────
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico" },
  //     { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  //     { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  //   ],
  //   apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  //   shortcut: "/favicon.ico",
  // },

  // ─── MANIFEST ──────────────────────────────────────────────────
  // manifest: "/site.webmanifest",

  // ─── VERIFICATION (Add your codes from Google/Bing Search Console) ──
  verification: {
    google: "PASTE_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
    // bing: "PASTE_YOUR_BING_VERIFICATION_CODE_HERE",
  },

  
  // ─── CATEGORY ──────────────────────────────────────────────────
  category: "Non-Profit / Charity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}