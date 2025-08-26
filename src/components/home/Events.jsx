import { useTheme } from "@/contexts/ThemeContext";
import React, { useMemo } from "react";
import PawWhite from "../icons/PawWhite";
import AppleStoreButton from "../common/AppleStoreButton";
import GooglePlayStoreButton from "../common/GooglePlayStoreButton";
import Image from "next/image";

const Events = () => {
  const { isDark, colorStyles, bgColorStyles } = useTheme();

  const textStyles = isDark ? "text-white" : "text-[#181818]";

  return (
    <section
      className={`relative px-6 sm:px-14 md:px-20 pt-8 min-[425px]:pt-16 sm:pt-28 pb-12 min-[425px]:pb-20 sm:pb-40 ${
        isDark ? "bg-[#596646]" : "bg-[#D5B482]"
      } `}
    >
      <Image
        src={isDark ? "/images/logo-dark.webp" : "/images/logo.webp"}
        alt="CHUBB'S ARMY"
        width={370}
        height={370}
        className="w-[160px] sm:w-[370px] absolute top-0 left-0 m-3 sm:m-5 opacity-15"
      />

      <Image
        src={"/images/eventbg2.webp"}
        alt="CHUBB'S ARMY"
        width={370}
        height={370}
        className="absolute bottom-0 right-0 z-10 opacity-15"
      />

      <div className="relative z-20 flex flex-col justify-center items-center gap-8">
        <div className="flex gap-2 sm:gap-4 items-center bg-white p-0.5 pe-2 sm:p-1.5 sm:pe-4 rounded-full">
          <div
            className={`${bgColorStyles} -me-2 sm:me-0 scale-75 sm:scale-100 h-10 w-10 flex justify-center items-center rounded-full`}
          >
            <PawWhite />
          </div>
          <p className={`${colorStyles} text-sm sm:text-base`}>Chubb's Army</p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex items-center gap-3">
            <h2
              className={`text-xl min-[425px]:text-3xl sm:text-[44px] lg:text-6xl ${textStyles} font-sans-semibold`}
            >
              Explore local events!
            </h2>

            <div className="p-0.5 sm:p-1 bg-white/20 rounded-full w-fit shadow-xl">
              <div
                className="w-[60px] h-[36px] sm:w-[80px] sm:h-[52px] lg:w-[140px] lg:h-[82px] shadow-md bg-cover bg-no-repeat bg-center rounded-full"
                style={{
                  backgroundImage: `url(/images/event1.webp)`,
                }}
              />
            </div>
          </div>

          <div className="flex items-center flex-col min-[500px]:flex-row gap-3">
            <div className="flex items-center gap-3">
              <p
                className={`text-base min-[425px]:text-lg min-[500px]:text-xl sm:text-2xl lg:text-3xl ${textStyles} font-sans-medium`}
              >
                Exciting adventures
              </p>

              <div className="p-0.5 sm:p-1 bg-white/20 rounded-full w-fit shadow-xl">
                <div
                  className="w-[44px] h-[28px] sm:w-[68px] sm:h-[40px] shadow-md bg-cover bg-center bg-no-repeat rounded-full"
                  style={{
                    backgroundImage: `url(/images/event2.webp)`,
                  }}
                />
              </div>
            </div>

            <p
              className={`text-base min-[425px]:text-lg min-[500px]:text-xl sm:text-2xl lg:text-3xl ${textStyles} font-sans-medium`}
            >
              tailored just for you.
            </p>
          </div>

          <div className="flex items-center flex-col min-[500px]:flex-row gap-3">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white/20 rounded-full w-fit shadow-xl">
                <div
                  className="w-[44px] h-[28px] sm:w-[68px] sm:h-[40px] shadow-md bg-cover bg-center bg-no-repeat rounded-full"
                  style={{
                    backgroundImage: `url(/images/event3.webp)`,
                  }}
                />
              </div>

              <p
                className={`text-sm min-[380px]:text-base min-[425px]:text-lg min-[500px]:text-xl sm:text-2xl lg:text-3xl text-center ${textStyles} font-sans-medium`}
              >
                Connect with fellow paw-rents!
              </p>
            </div>

            <div className="p-1 bg-white/20 rounded-full w-fit shadow-xl">
              <div
                className="w-[44px] h-[28px] sm:w-[68px] sm:h-[40px] shadow-md bg-cover bg-top bg-no-repeat rounded-full"
                style={{
                  backgroundImage: `url(/images/event4.webp)`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col min-[425px]:flex-row items-center min-[425px]:items-start gap-7 min-[425px]:gap-5">
          <AppleStoreButton varient={"colored"} />
          <GooglePlayStoreButton varient={"colored"} />
        </div>
      </div>
    </section>
  );
};

export default Events;
