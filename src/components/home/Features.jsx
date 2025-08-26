import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useTheme } from "@/contexts/ThemeContext";
import PawWhite from "../icons/PawWhite";
import AppleStoreButton from "../common/AppleStoreButton";
import GooglePlayStoreButton from "../common/GooglePlayStoreButton";
import Image from "next/image";
import Star from "../icons/Star";
import StarDark from "../icons/StarDark";
import Star2 from "../icons/Star2";
import Star3 from "../icons/Star3";
import Star4 from "../icons/Star4";
import Star4Dark from "../icons/Star4Dark";
import Star3Dark from "../icons/Star3Dark";
import Star2Dark from "../icons/Star2Dark";

const Features = () => {
  const { isDark, bgColorStyles } = useTheme();
  return (
    <section
      className="px-6 sm:px-14 md:px-20 py-16 bg-cover bg-no-repeat bg-top h-full"
      style={{
        backgroundImage: `${
          isDark
            ? "url('/images/feat-dark-bg.webp')"
            : "url('/images/feat-light-bg.webp')"
        }`,
      }}
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
          Features
        </p>
      </div>

      <h2
        className={`${
          isDark ? "text-white" : "text-black"
        } font-sans-medium text-xl min-[425px]:text-3xl sm:text-4xl lg:text-5xl my-6`}
      >
        Capabilities and <br /> Engagement Mechanics
      </h2>

      <div className="grid grid-cols-1 gap-5 mb-8 sm:mb-14">
        <div className="grid lg:grid-cols-7 gap-5">
          <div
            className={`lg:col-span-4 bg-gradient-to-r ${
              isDark ? "from-[#556B2F]" : "from-[#144776]"
            } to-[#9E0406] rounded-3xl flex flex-col items-center justify-between gap-5 overflow-hidden`}
          >
            <Image
              src={"/images/feat-light-1.webp"}
              alt="CHUBB'S ARMY"
              width={540}
              height={500}
              className="!h-auto  w-[60%] lg:w-[90%]"
            />
            <p className="mb-8 font-sans-semibold sm:font-sans-bold text-xl sm:text-3xl text-white">
              Find Challenges
            </p>
          </div>

          <div
            className={`lg:col-span-3 h-full py-8 px-6 sm:py-12 sm:px-10 ${
              isDark ? "bg-[#596646]" : "bg-[#D5B482]"
            } rounded-3xl flex flex-col gap-5 md:gap-10 relative`}
          >
            <Image
              src={"/images/eventbg2.webp"}
              alt="CHUBB'S ARMY"
              width={370}
              height={370}
              className="max-w-full absolute bottom-0 right-0 opacity-15"
            />
            <p className="font-sans-semibold text-xl md:text-3xl text-white">
              Commence Paw to Paw Communications
            </p>
            <div
              className={`self-start text-white ${
                isDark ? "bg-[#556B2F]" : "bg-[#00000033]"
              } p-3 md:p-5 rounded-xl max-w-[90%] sm:w-[300px] text-sm sm:text-base`}
            >
              <p>CAMI the CAT</p>
              <p>I voted for your Best Nap picture, It was so cute!</p>
              <p className="text-right text-xs">8:26 pm</p>
            </div>
            <div
              className={`self-end text-white bg-gradient-to-l ${
                isDark
                  ? "from-[#C8102E] to-[#690011]"
                  : "from-[#7D5B3F] to-[#4D341F]"
              } p-3 md:p-5 rounded-xl max-w-[90%] sm:w-[300px] text-sm sm:text-base`}
            >
              <p>Thanks so much! He’s an Olympic napper!</p>
              <p className="text-right text-xs">8:26 pm</p>
            </div>{" "}
            <div className="flex items-center p-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <p className="flex-1 text-white ms-2">Write your message</p>
              <div
                className={`bg-gradient-to-l ${
                  isDark
                    ? "from-[#C8102E] to-[#690011]"
                    : "from-[#7D5B3F] to-[#4D341F]"
                } h-8 w-8 flex justify-center items-center rounded-lg`}
              >
                <RiSendPlaneFill color="#fff" size={22} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-7 gap-5  lg:min-h-[470px]">
          <div
            className={`sm:col-span-3 bg-gradient-to-r ${
              isDark
                ? "from-[#690011] to-[#C8102E]"
                : "from-[#4D341F] to-[#7D5B3F]"
            } rounded-3xl flex flex-col items-center justify-between gap-5`}
          >
            <p className="pt-8 mb-4 sm:mb-8 font-sans-bold text-xl md:text-3xl text-white">
              Create Posts
            </p>
            <Image
              src={"/images/feat3.webp"}
              alt="CHUBB'S ARMY"
              width={350}
              height={500}
              className="h-auto w-[80%]"
            />
          </div>

          <div
            className={`sm:col-span-4 h-full py-12 px-10 bg-cover bg-bottom bg-no-repeat rounded-3xl flex items-center justify-start`}
            style={{
              backgroundImage: `url(${
                isDark ? "/images/feat4-dark.webp" : "/images/feat4-light.webp"
              })`,
            }}
          >
            <p className="font-sans-bold text-white text-xl md:text-3xl">
              Discover Animal <br /> Events Near You
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col min-[425px]:flex-row justify-center items-center min-[425px]:items-start gap-7 min-[425px]:gap-5">
        <AppleStoreButton varient={"colored"} />
        <GooglePlayStoreButton varient={"colored"} />
      </div>

      {/* Why this Army */}
      <div
        id="about-us"
        className={`${
          isDark ? "bg-[#556B2F]/80" : "bg-[#7D5B3F]"
        } flex justify-center mt-32 rounded-3xl`}
      >
        <div className="relative overflow-hidden w-full grid md:grid-cols-5 lg:grid-cols-6 gap-10 xl:gap-20 px-3 sm:px-6 md:px-12 rounded-2xl">
          <>
            {/* Vectors Start */}
            <Image
              src={"/images/shape.webp"}
              alt="About Us"
              width={300}
              height={300}
              className="absolute -top-12 -left-28 rotate-[-105deg]"
            />
            <Image
              src={"/images/shape.webp"}
              alt="About Us"
              width={300}
              height={300}
              className="absolute -top-16 -right-14 rotate-[-10deg]"
            />
            <Image
              src={"/images/shape.webp"}
              alt="About Us"
              width={300}
              height={300}
              className="absolute -bottom-16 -right-4 rotate-[140deg]"
            />

            <Image
              src={"/images/logo.webp"}
              alt="About Us"
              width={350}
              height={350}
              className="absolute top-1/3 right-0 opacity-15"
            />
            {/* Vectors End */}
          </>
          <div className="py-16 overflow-hidden h-full md:flex hidden items-end justify-center md:col-span-2 lg:col-span-3">
            <Image
              data-aos="fade-up"
              src={"/images/about.webp"}
              alt="About Us"
              width={200}
              height={100}
              className="w-full max-w-[300px] h-auto"
            />
          </div>
          <div className="relative z-20 space-y-4 pt-8 sm:pt-16 md:py-16 text-white  md:col-span-3 lg:col-span-3 flex items-center">
            <div>
              <div className="rounded-full px-5 py-2 bg-white/20 w-fit mb-5">
                March With Chubb’s Army
              </div>

              <h2 className="font-sans-semibold sm:font-sans-bold text-2xl min-[425px]:text-3xl sm:text-4xl lg:text-5xl mb-8">
                Why this Army was formed
              </h2>

              <ul className="space-y-5">
                <li>
                  <div className="flex items-center gap-3">
                    {isDark ? <StarDark /> : <Star />}
                    <p className="text-white text-base sm:text-lg">
                      Over-sharing guilt; annoying non-pet friends.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    {isDark ? <Star2Dark /> : <Star2 />}
                    <p className="text-white text-base sm:text-lg">
                      Lack of engagement and discoverability on mainstream
                      platforms.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    {isDark ? <Star3Dark /> : <Star3 />}
                    <p className="text-white text-base sm:text-lg">
                      Craving a like-minded pet community.{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3">
                    {isDark ? <Star4Dark /> : <Star4 />}
                    <p className="text-white text-base sm:text-lg">
                      The desire for features beyond photos/videos: ranks,
                      gaming, point structure.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative z-20 py-6 overflow-hidden h-full md:hidden flex items-end justify-center md:col-span-2 lg:col-span-3">
            <Image
              data-aos="fade-up"
              src={"/images/about.webp"}
              alt="About Us"
              width={200}
              height={100}
              className="w-full max-w-[200px] sm:max-w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
