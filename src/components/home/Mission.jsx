import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import MissionIcon1Dark from "../icons/MissionIcon1Dark";
import MissionIcon1 from "../icons/MissionIcon1";
import MissionIcon2Dark from "../icons/MissionIcon2Dark";
import MissionIcon2 from "../icons/MissionIcon2";
import MissionIcon3Dark from "../icons/MissionIcon3Dark";
import MissionIcon3 from "../icons/MissionIcon3";
import Image from "next/image";

const Mission = () => {
  const { isDark } = useTheme();

  return (
    <section
      className={`px-6 sm:px-14 md:px-20 py-8 sm:py-12 md:py-16 text-white ${
        isDark ? "bg-[#556B2F]" : "bg-[#7D5B3F]"
      } relative`}
    >
      <div className="absolute opacity-15 md:opacity-50 top-0 right-0 h-full flex items-center">
        <Image
          src={isDark ? "/images/logo-dark.webp" : "/images/logo.webp"}
          alt="CHUBB'S ARMY"
          width={400}
          height={400}
          className=""
        />
      </div>
      <div className="relative z-20 space-y-8">
        <h2 className="text-2xl min-[425px]:text-3xl sm:text-4xl lg:text-5xl font-sans-semibold">Mission Critical Intel</h2>
        <p>
          Chubb’s Army is a family. A community. We are immersive, social, and
          unique.
        </p>

        <div className="flex items-center gap-3">
          {isDark ? <MissionIcon1Dark /> : <MissionIcon1 />}
          <p className="sm:text-lg">
            Chubb’s Army isn’t just about content — it’s about connection.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isDark ? <MissionIcon2Dark /> : <MissionIcon2 />}
          <p className="sm:text-lg">
            Ranks, missions, tribute walls, events, and paw-tastic campaigns
            create purposeful interaction.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isDark ? <MissionIcon3Dark /> : <MissionIcon3 />}
          <p className="sm:text-lg">
            Pet owners don’t just want to show off. They want their pets to mean
            something to others.
          </p>
        </div>

        <p className="text-white text-lg sm:text-2xl">
          We’re not competing with TikTok. We’re complementing it — turning
          casual pet content into mission - <br /> driven participation.
        </p>
      </div>
    </section>
  );
};

export default Mission;
