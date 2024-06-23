import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANTI",
  description: "Automated Navigation & Trash Identification",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} mx-auto max-w-[105rem]  md:px-4 `}
      >
        <img
          src="/spline.png"
          alt=""
          className="absolute right-0 top-[-30rem] left-0 w-full z-[-1] opacity-80 animate-move-down lg:block hidden"
        />
        <img
          src="/spline.png"
          alt=""
          className="absolute right-0 top-0 left-0 w-full z-[-1] opacity-80 lg:hidden block"
        />

        <div className="absolute z-[-11] top-4 right-2 w-[20%] h-[30%] rounded-full green_gradient" />
        <div className="absolute z-[-11] top-4 left-2 w-[20%] h-[30%] rounded-full green_gradient" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
