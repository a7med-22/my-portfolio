import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ScrollIndicator from "./components/ui/ScrollIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3D Portfolio | Next.js + Three.js",
  description: "Advanced 3D portfolio built with Next.js and Three.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <ScrollIndicator />

        {children}
        <Footer />
      </body>
    </html>
  );
}
