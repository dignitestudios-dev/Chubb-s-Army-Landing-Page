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
      className={`px-20 ${
        isDark ? "bg-[#596646]" : "bg-[#F5F5F5]"
      } overflow-hidden relative bg-cover bg-right`}
      style={{
        backgroundImage: isDark ? "url(/images/join-bg-dark.webp)" : "url(/images/join-bg-light.webp)",
      }}
    >
      <div className="flex-1 pe-10">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Image
            src={isDark ? "/images/logo-dark.webp" : "/images/logo.webp"}
            alt="CHUBB'S ARMY"
            width={370}
            height={370}
            className="opacity-15 z-10"
          />
        </div>
        <div className="relative z-20 grid grid-cols-2 pt-24 gap-14">
          <div className="p-5 flex justify-start items-center">
            <div
              className={` space-y-5 ${isDark ? "text-white" : "text-black"}`}
            >
              <div className="w-fit flex gap-2 items-center bg-[#CDCDCD52] p-1.5 pe-4 rounded-full">
                <div
                  className={`${bgColorStyles} h-10 w-10 flex justify-center items-center rounded-full`}
                >
                  <PawWhite />
                </div>
                <p
                  className={`${
                    isDark ? "text-white" : "text-[#181818]"
                  } font-sans-medium`}
                >
                  Get the App
                </p>
              </div>

              <h3 className="font-sans-medium text-5xl">
                Join over 50,000 <br /> happy pet parents
              </h3>

              <p className="text-2xl">
                Sign up for the adventure of a <br /> lifetime!
              </p>
            </div>
          </div>
          <div className="p-5 flex justify-center items-center">
            <div>
              <h3
                className={`bg-gradient-to-b ${
                  isDark
                    ? "from-[#fff] to-[#fff]"
                    : "from-[#938562] to-[#D5BD95]"
                } bg-clip-text text-transparent font-sans-medium text-[200px] leading-[120px]`}
              >
                100% <br /> <span className="text-[100px]">Fun</span>
              </h3>
            </div>
          </div>
          <div className="p-5 flex justify-start items-center">
            <div
              className={` space-y-10 ${isDark ? "text-white" : "text-black"}`}
            >
              <h3 className="font-sans-medium text-5xl">
                The Army is assembling. <br /> Download our app soon!{" "}
              </h3>

              <div className="flex gap-5">
                <AppleStoreButton varient={"colored"} />
                <GooglePlayStoreButton varient={"colored"} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
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
                className="w-[340px] h-auto self-end absolute top-0 right-0 z-10"
              />
              <Image
                src={"/images/join.webp"}
                alt="CHUBB'S ARMY"
                width={340}
                height={340}
                className="w-[340px] h-auto self-end relative z-20"
              />

              <div
                className={`w-[480px] h-[480px] bg-transparent rounded-full border-4 border-[#9E0406] absolute -bottom-[240px] left-1/6 z-10 ${
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
