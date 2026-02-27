import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";

const GooglePlayStoreButton = ({
  varient, // "colored" | "white"
}) => {
  const { isDark } = useTheme();

  return (
    <div className="relative w-fit">
      <Link href="https://play.google.com/store/apps/details?id=com.cts.chubbsarmy&hl=en" target="_blank">
        <button
          className={`bg-transparent rounded-full border-2 ${
            varient === "colored"
              ? isDark
                ? "border-white text-white"
                : "bg-[#7D5B3F] text-[#7D5B3F]"
              : "border-white text-white"
          } cursor-pointer px-3 py-3 sm:px-6 sm:py-3 flex items-center gap-2 text-nowrap text-xs sm:text-base`}
        >
          <FaGooglePlay className="text-lg sm:text-2xl" />
          Download for Android
        </button>
      </Link>
      {/* <div className="absolute top-[80%] right-0 -rotate-6 text-white bg-gradient-to-r from-[#9E0406] to-[#E48080] rounded-full px-3 py-1 sm:py-2 text-[10px] sm:text-xs">
        Coming Soon
      </div> */}
    </div>
  );
};

export default GooglePlayStoreButton;
