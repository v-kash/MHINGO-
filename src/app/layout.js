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
  title: "About Us | MAHI Education & Charitable Trust",
  description:
    "Learn about MAHI Education & Charitable Trust, a non-profit organization working to empower communities through education, healthcare, skill development, and social welfare initiatives.",
  keywords: [
    "MAHI Education Trust",
    "NGO in India",
    "Education NGO",
    "Charitable Trust",
    "Community Development",
    "Non Profit Organization",
    "Social Welfare NGO",
    "Skill Development NGO",
    "Healthcare NGO",
  ],
  authors: [{ name: "MAHI Education & Charitable Trust" }],
  creator: "MAHI Education & Charitable Trust",
  publisher: "MAHI Education & Charitable Trust",

  openGraph: {
    title: "About MAHI Education & Charitable Trust",
    description:
      "Discover how MAHI Education & Charitable Trust works with communities to restore dignity, opportunity, and self-reliance through education and social welfare programs.",
    url: "https://yourdomain.com/about",
    siteName: "MAHI Education & Charitable Trust",
    images: [
      {
        url: "https://yourdomain.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "MAHI Education & Charitable Trust – About Us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About MAHI Education & Charitable Trust",
    description:
      "Empowering communities through education, healthcare, and sustainable social welfare initiatives.",
    images: ["https://yourdomain.com/og-about.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
