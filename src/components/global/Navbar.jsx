"use client";
import React from "react";
import ThemeToggler from "../ThemeToggler";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const { isDark } = useTheme();

  return (
    <header className="px-20 py-3 w-full fixed top-0 left-0 z-50">
      <nav className="w-full flex items-center justify-between gap-5">
        <Image
          src={isDark ? "/images/logo-dark.webp" : "/images/logo.webp"}
          alt="CHUBB'S ARMY"
          width={150}
          height={150}
        />

        <div className="rounded-full p-1 bg-[#BDBDBD33]/20 backdrop-blur-sm">
          <ul className={`flex gap-12 font-sans-medium ${isDark ? "text-white" : "text-black"} rounded-full p-5 bg-[#BDBDBD33]/10 shadow-sm`}>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Why Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <ThemeToggler />
      </nav>
    </header>
  );
};

export default Navbar;
