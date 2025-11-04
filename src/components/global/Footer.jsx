"use client";
import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import AppleStoreButton from "../common/AppleStoreButton";
import GooglePlayStoreButton from "../common/GooglePlayStoreButton";
import Link from "next/link";

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <footer
      className={`p-6 sm:p-10 md:p-16 lg:p-24 ${
        isDark ? "bg-[#556B2F]" : "bg-[#7D5B3F]"
      } `}
    >
      <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-24 mb-10">
        <div className="flex-1 min-w-[250px] flex flex-col justify-center items-center gap-5">
          <Image
            src={"/images/logo.webp"}
            alt="CHUBB'S ARMY"
            width={150}
            height={150}
          />
          <p className="sm:text-lg text-white text-center">
            Humans Ruined Social Media. <br /> Pets Will Clean Up The Mess!
          </p>
        </div>
        <div className="w-full justify-between xl:w-auto flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex-1 justify-between xl:w-auto flex flex-row gap-24">
            <div>
              <ul className="flex flex-col gap-5">
                <li className="text-2xl text-white">Pages</li>
                <li className="sm:text-lg text-white font-extralight">Home</li>
                <li className="sm:text-lg text-white font-extralight">
                  About Us
                </li>
                <li className="sm:text-lg text-white font-extralight">
                  Features
                </li>
                <li className="sm:text-lg text-white font-extralight">
                  Why Us
                </li>
                <li className="sm:text-lg text-white font-extralight">FAQs</li>
                <li className="sm:text-lg text-white font-extralight">
                  Get App
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-5">
                <li className="text-2xl text-white">Others</li>
                <li className="sm:text-lg text-white font-extralight">
                  Privacy Policy
                </li>
                <li className="sm:text-lg text-white font-extralight">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex flex-col items-center md:items-start gap-5">
              <li className="text-xl sm:text-2xl text-white">
                Download our app
              </li>
              <li className="mb-5">
                <AppleStoreButton />
              </li>
              <li>
                <GooglePlayStoreButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-5 sm:gap-0 items-center justify-between border-t border-white/10 pt-10">
        <p className="text-white text-sm sm:text-base">
          © Chubb's Army Inc. All Rights Reserved.
        </p>

        <div className="flex gap-3 items-center">
          <Link href={"https://x.com/chubbsarmy?s=21"} target="_blank">
            <div className="border border-white/10 rounded-full w-14 h-14 bg-transparent flex justify-center items-center">
              <div className="h-6 w-6 rounded bg-white flex justify-center items-center">
                <FaXTwitter />
              </div>
            </div>
          </Link>

          <Link
            href={"https://www.facebook.com/profile.php?id=61582099932082"}
            target="_blank"
          >
            <div className="border border-white/10 rounded-full w-14 h-14 bg-transparent flex justify-center items-center">
              <FaFacebookSquare size={28} color="#ffffff" />
            </div>
          </Link>

          <Link
            href={
              "https://www.instagram.com/chubbsarmy?igsh=MTV3cGFmbHZ0Nnk1bw=="
            }
            target="_blank"
          >
            <div className="border border-white/10 rounded-full w-14 h-14 bg-transparent flex justify-center items-center">
              <AiFillInstagram size={28} color="#ffffff" />
            </div>
          </Link>

          <Link
            href={"https://www.tiktok.com/@chubbsarmy?_r=1&_t=ZT-911FHWV5uAw"}
            target="_blank"
          >
            <div className="border border-white/10 rounded-full w-14 h-14 bg-transparent flex justify-center items-center">
              <FaTiktok size={22} color="#ffffff" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
