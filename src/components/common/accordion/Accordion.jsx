"use client";
import React, { useEffect, useRef, useState } from "react";

import "./Accordion.css";
import { useTheme } from "@/contexts/ThemeContext";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");
  const { isDark } = useTheme();

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div
      data-aos="fade-up"
      className={`group accordion__section ${
        isDark ? "hover:!bg-[#556B2F]" : "hover:!bg-[#7D5B3F]"
      }  ${active ? (isDark ? "!bg-[#556B2F]" : "!bg-[#7D5B3F]") : ""}`}
    >
      <div
        className={`accordion p-2 sm:p-5 ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <div
          className={`font-bold rounded-full group-hover:text-white group-hover:border-white ${
            isDark
              ? "border-2 border-[#ffffff] text-[#ffffff]"
              : active
              ? "border-2 border-[#ffffff] text-[#ffffff]"
              : "border-2 border-[#000000] text-[#000000]"
          } min-w-6 min-h-6 w-6 h-6 flex justify-center items-center`}
          style={{ marginLeft: "20px" }}
        >
          {active ? "-" : "+"}
        </div>
        <p
          className={`accordion__title sm:text-lg group-hover:text-white  ${
            isDark ? "text-white" : active ? "text-white" : "text-black"
          }`}
        >
          {props.title}
        </p>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content text-sm sm:text-base"
      >
        <div
          className="accordion__text text-white"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
