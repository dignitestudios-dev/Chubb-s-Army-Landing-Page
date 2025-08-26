import React from "react";
import { FaApple } from "react-icons/fa";

import { useTheme } from "@/contexts/ThemeContext";

const AppleStoreButton = ({
  varient, // "colored" | "white"
}) => {
  const { colorStyles, isDark } = useTheme();

  return (
    <div className="relative w-fit">
      <button
        className={`${
          varient === "colored"
            ? `text-white ${isDark ? "bg-[#556B2F]" : "bg-[#7D5B3F]"}`
            : `bg-white ${colorStyles}`
        } rounded-full px-3 py-3 sm:px-6 sm:py-3  flex items-center gap-2 text-nowrap text-xs sm:text-base`}
      >
        <FaApple className="text-lg sm:text-2xl" />
        Download for IPhone
      </button>

      <div className="absolute top-[80%] right-0 -rotate-6 text-white bg-gradient-to-r from-[#9E0406] to-[#E48080] rounded-full px-3 py-1 sm:py-2 text-[10px] sm:text-xs">
        Coming Soon
      </div>
    </div>
  );
};

export default AppleStoreButton;
