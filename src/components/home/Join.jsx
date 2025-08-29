"use client";
import React from "react";
import PawWhite from "../icons/PawWhite";
import { useTheme } from "@/contexts/ThemeContext";
import AppleStoreButton from "../common/AppleStoreButton";
import GooglePlayStoreButton from "../common/GooglePlayStoreButton";
import Image from "next/image";

const Join = () => {
  const { bgColorStyles, isDark } = useTheme();

  return (
    <div
      className={`px-6 sm:px-14 md:px-20 ${
        isDark ? "bg-[#596646]" : "bg-[#F5F5F5]"
      } overflow-hidden relative`}
    >
      <div className="flex-1 lg:pe-10">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Image
            src={"/images/logo.webp"}
            alt="CHUBB'S ARMY"
            width={370}
            height={370}
            className="opacity-15 z-10"
          />
        </div>
        <div className="w-full relative z-20 min-[850px]:grid min-[850px]:grid-cols-2 pt-10 sm:pt-16 md:pt-24 gap-7 xl:gap-14">
          <div className="sm:p-5 w-full flex justify-start items-center">
            <div
              className={`flex flex-col items-center sm:block space-y-5 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              <div className="w-fit flex gap-2 sm:gap-4 items-center bg-[#CDCDCD52] p-0.5 pe-2 sm:p-1.5 sm:pe-4 rounded-full">
                <div
                  className={`${bgColorStyles} -me-2 sm:me-0 scale-75 sm:scale-100 h-10 w-10 flex justify-center items-center rounded-full`}
                >
                  <PawWhite />
                </div>
                <p
                  className={`${
                    isDark ? "text-white" : "text-black"
                  } text-sm sm:text-base`}
                >
                  Get the App
                </p>
              </div>

              <h3 className="font-sans-medium text-xl min-[425px]:text-3xl sm:text-4xl lg:text-5xl text-center sm:text-start">
                Join over 50,000 <br className="hidden lg:block" /> happy pet
                parents
              </h3>

              <p className="text-base sm:text-lg lg:text-2xl text-center sm:text-start">
                Sign up for the adventure of a{" "}
                <br className="hidden lg:block" /> lifetime!
              </p>
            </div>
          </div>
          <div className="sm:p-5 hidden min-[850px]:flex justify-center items-center">
            <div>
              <h3
                className={`bg-gradient-to-b ${
                  isDark
                    ? "from-[#fff] to-[#fff]"
                    : "from-[#938562] to-[#D5BD95]"
                } bg-clip-text text-transparent font-sans-medium text-9xl leading-28 min-[1150]:text-[200px] min-[1150]:leading-[120px]`}
              >
                100% <br /> <span className="text-[100px]">Fun</span>
              </h3>
            </div>
          </div>
          <div className="sm:p-5 mt-5 sm:mt-0 flex justify-start items-center">
            <div
              className={` space-y-10 ${isDark ? "text-white" : "text-black"}`}
            >
              <h3 className="font-sans-medium text-xl min-[425px]:text-3xl sm:text-4xl lg:text-5xl text-center sm:text-start">
                The Army is assembling. <br className="hidden lg:block" />{" "}
                Download our app soon!{" "}
              </h3>

              <div className="flex items-center justify-center sm:justify-start flex-col min-[490px]:flex-row min-[850px]:flex-col min-[1150]:flex-row gap-8 min-[1150]:gap-5">
                <AppleStoreButton varient={"colored"} />
                <GooglePlayStoreButton varient={"colored"} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative mt-12 min-[850px]:mt-0">
            <div className="flex pt-12">
              <Image
                src={
                  isDark
                    ? "/images/dot-grid-dark.webp"
                    : "/images/dot-grid.webp"
                }
                alt="CHUBB'S ARMY"
                width={280}
                height={280}
                className="w-[220px] sm:w-[340px] h-auto self-end absolute top-0 right-0 z-10"
              />
              <Image
                src={"/images/join.webp"}
                alt="CHUBB'S ARMY"
                width={340}
                height={340}
                className="w-[240px] sm:w-[340px] h-auto self-end relative z-20"
              />

              <div
                className={`w-[420px] h-[420px] min-[1150]:w-[480px] min-[1150]:h-[480px] bg-transparent rounded-full border-4 border-[#9E0406] absolute -bottom-[240px]  left-0 xl:left-1/6 z-10 ${
                  isDark ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
