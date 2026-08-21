import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moch. Firmansyah | Frontend Developer Portfolio",
  description:
    "Portfolio of Moch. Firmansyah — Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and fluid interactive animations.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Moch. Firmansyah" }],
  creator: "Moch. Firmansyah",
  openGraph: {
    title: "Moch. Firmansyah — Frontend Developer",
    description:
      "Crafting visually refined, high-performance web experiences with modern React, Next.js, and fluid animations.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F5EFE6] text-[#1A1A1A] font-sans antialiased selection:bg-[#F7EAE5] selection:text-[#B5654A]">
        {children}
      </body>
    </html>
  );
}
