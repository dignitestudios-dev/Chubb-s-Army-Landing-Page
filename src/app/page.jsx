"use client";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

// sections import
import Hero from "@/components/home/Hero";
import Events from "@/components/home/Events";
import Features from "@/components/home/Features";
import Join from "@/components/home/Join";
import Mission from "@/components/home/Mission";
import Faq from "@/components/home/Faqs";
import Contact from "@/components/home/Contact";
import Footer from "@/components/global/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Events />
      <Features />
      <Join />
      {/* <Mission /> */}
      {/* <Faq /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
};

const HomeWithThemeProvider = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default HomeWithThemeProvider;
