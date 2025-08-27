"use client";
import React, { useState } from "react";
import ThemeToggler from "../ThemeToggler";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    const checkbox = document.getElementById("checkbox");
    if (checkbox) checkbox.checked = false;
  };

  return (
    <>
      <header className="px-6 sm:px-12 min-[900px]:px-20 py-3 w-full fixed top-0 left-0 z-50">
        <nav className="w-full flex items-center justify-between gap-5">
          <Image
            src={isDark ? "/images/logo-dark.webp" : "/images/logo.webp"}
            alt="CHUBB'S ARMY"
            width={150}
            height={150}
            className="w-[80px] sm:w-[120px] xl:w-[150px]"
          />

          <div className="hidden min-[835px]:block rounded-full p-1 bg-[#BDBDBD33]/20 backdrop-blur-sm">
            <ul
              className={`flex gap-6 xl:gap-12 font-sans-medium ${
                isDark ? "text-white" : "text-black"
              } rounded-full p-5 bg-[#BDBDBD33]/10 shadow-sm`}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about-us">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#why-us">WhyUs</a>
              </li>
              <li>
                <a href="#faqs">FAQ</a>
              </li>
              <li>
                <a href="#contact-us">ContactUs</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-5">
            <ThemeToggler />

            <div className="min-[835px]:hidden inline">
              <input
                type="checkbox"
                id="checkbox"
                checked={isOpen}
                onChange={(e) => setIsOpen(e.target.checked)}
              />
              <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1" />
                <div className="bars" id="bar2" />
                <div className="bars" id="bar3" />
              </label>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navbar */}
      <div
        className={`min-[835px]:hidden block p-12 fixed ${
          isOpen ? "left-0" : "-left-[100%]"
        } w-screen h-full top-0 z-50 bg-[#BDBDBD33]/20 backdrop-blur-sm transition-all duration-300`}
      >
        <div className="flex justify-end">
          <div className="min-[835px]:hidden inline">
            <input
              type="checkbox"
              id="checkbox"
              checked={isOpen}
              onChange={(e) => setIsOpen(e.target.checked)}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1" />
              <div className="bars" id="bar2" />
              <div className="bars" id="bar3" />
            </label>
          </div>
        </div>

        <div className="h-full flex justify-center items-center">
          <ul className="font-medium tracking-wider text-2xl flex flex-col items-center gap-5 text-white font-coolvetica">
            <li>
              <a href={"#"} className="text-center" onClick={handleLinkClick}>
                Home
              </a>
            </li>

            <li>
              <a
                href={"#about-us"}
                className="text-center"
                onClick={handleLinkClick}
              >
                About
              </a>
            </li>

            <li>
              <a
                href={"#features"}
                className="text-center"
                onClick={handleLinkClick}
              >
                Features
              </a>
            </li>

            <li>
              <a
                href={"#why-us"}
                className="text-center"
                onClick={handleLinkClick}
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href={"#faqs"}
                className="text-center"
                onClick={handleLinkClick}
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href={"#contact-us"}
                className="text-center"
                onClick={handleLinkClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
