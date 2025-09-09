"use client";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React, { useEffect, useState } from "react";

// sections import
import Hero from "@/components/home/Hero";
import Events from "@/components/home/Events";
import Features from "@/components/home/Features";
import Join from "@/components/home/Join";
import Mission from "@/components/home/Mission";
import Faq from "@/components/home/Faqs";
import Contact from "@/components/home/Contact";
import Footer from "@/components/global/Footer";
import VideoPopup from "@/components/global/VideoPopup";

const Home = () => {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  useEffect(() => {
    // Show video popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowVideoPopup(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const closeVideoPopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <>
      <Hero />
      <Events />
      <Features />
      <Join />
      <Mission />
      <Faq />

      <Contact />
      <Footer />

      {/* Video Popup Modal */}
      <VideoPopup isOpen={showVideoPopup} onClose={closeVideoPopup} />
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
