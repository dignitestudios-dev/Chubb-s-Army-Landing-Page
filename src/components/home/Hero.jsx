import React from "react";
import Navbar from "../global/Navbar";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import AppleStoreButton from "../common/AppleStoreButton";
import GooglePlayStoreButton from "../common/GooglePlayStoreButton";
import PawBrown from "../icons/PawBrown";
import { FaChevronRight } from "react-icons/fa";
import PawGreen from "../icons/PawGreen";

const Hero = () => {
  const { isDark, colorStyles } = useTheme();

  return (
    <section
      className="w-full px-6 sm:px-14 md:px-20 py-3 min-h-screen bg-cover bg-top bg-no-repeat flex items-center"
      style={{
        backgroundImage: `${
          isDark
            ? "url('/images/hero-bg-dark.webp')"
            : "url('/images/hero-bg.webp')"
        }`,
      }}
    >
      <Navbar />

      <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-10 mt-20 md:mt-36">
        <div className="max-w-[700px] h-full my-auto space-y-4 sm:space-y-8">
          <div className="flex items-center gap-1.5 sm:gap-3 bg-[#BDBDBD33] p-1 sm:p-2 backdrop-blur-sm rounded-full w-fit">
            <div className="bg-white h-8 sm:h-10 w-8 sm:w-10 flex justify-center items-center rounded-full -me-1 min-[425px]:me-0 scale-75 min-[425px]:scale-100">
              {isDark ? <PawGreen /> : <PawBrown />}
            </div>

            <p className="text-white text-nowrap text-[8px] min-[425px]:text-xs sm:text-sm md:text-base">
              Keep scrolling hoomans.
            </p>

            <div className="bg-white h-4 min-[425px]:h-6 w-4 min-[425px]:w-6 flex justify-center items-center rounded-full">
              <FaChevronRight
                className={`${colorStyles} text-[10px] min-[425px]:text-base`}
              />
            </div>

            <div
              className={`${colorStyles} bg-white text-nowrap h-6 min-[425px]:h-8 md:h-10 flex items-center  px-1 min-[425px]:px-2 sm:px-3 md:px-6 rounded-full `}
            >
              <p className="text-[8px] min-[425px]:text-xs sm:text-sm md:text-base">
                The animals are taking over!
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-sans-semibold">
            Join Chubb’s Army, The Ultimate Social Hub For Pet Lovers!
          </h1>

          <div className="flex flex-col min-[425px]:flex-row items-center min-[425px]:items-start gap-7 min-[425px]:gap-5">
            <AppleStoreButton varient={"white"} />
            <GooglePlayStoreButton varient={"white"} />
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="p-3 h-fit bg-white/10 backdrop-blur-sm rounded-3xl">
            <Image
              src={"/images/heroimg.webp"}
              alt="CHUBB'S ARMY"
              width={150}
              height={150}
              className={"w-auto min-[425px]:w-[320px] min-[425px]:min-w-[240px] h-[400px] min-[425px]:h-auto"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
