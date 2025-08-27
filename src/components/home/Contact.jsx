import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const { isDark } = useTheme();
  return (
    <section
      id="contact-us"
      className={`py-10 px-6 sm:py-14 sm:px-14 md:py-20 md:px-20 ${
        isDark ? "bg-[#596646]" : "bg-[#D5B482]"
      }`}
    >
      <div
        className={`flex flex-col-reverse sm:grid sm:grid-cols-2 rounded-3xl overflow-hidden border-2 ${
          isDark ? "border-white/30" : "border-[#7D5B3F]"
        }`}
      >
        <div
          className={`py-8 px-7 md:py-16 md:px-14 ${
            isDark ? "bg-[#556B2F]" : "bg-[#7D5B3F]"
          }`}
        >
          <h2 className="text-3xl font-sans-medium text-white">
            Our Contact Info:
          </h2>
          <p className="text-white">
            Please email us with any comments, suggestions or{" "}
            <br className="hidden lg:block" /> questions.
          </p>

          <div className="text-white mt-8 sm:mt-20">
            <p className="font-sans-medium">Headquarters</p>
            <div className="flex items-center gap-2 mt-1.5">
              <FaLocationDot size={20} /> <p>Dallas, TX</p>
            </div>
          </div>

          <div className="text-white mt-8 sm:mt-16">
            <p className="font-sans-medium">Email</p>
            <div className="flex items-center gap-2 mt-1.5">
              <MdEmail size={20} /> <p>info@ChubbsArmy.com</p>
            </div>
          </div>
        </div>
        <div className="bg-transparent p-6 md:p-10">
          <p
            className={`font-sans-semibold text-xl md:text-2xl ${
              isDark ? "text-white" : "text-[#7D5B3F]"
            }`}
          >
            Be one of the first to know when Chubb's Army launches - get in
            touch with us to stay updated!
          </p>

          <form className="tracking-wider sm:space-y-6 mt-2 sm:mt-8">
            <div className="mt-6">
              <label
                className={`block mb-2 font-medium ${
                  isDark ? "text-white/30" : "text-[#7D5B3F]"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="e.g. John"
                className={`w-full text-white border-b-2 py-2 ${
                  isDark ? "border-white/30" : "border-[#7D5B3F]"
                } outline-none placeholder:text-white`}
              />
            </div>
            <div className="mt-6">
              <label
                className={`block mb-2 font-medium ${
                  isDark ? "text-white/30" : "text-[#7D5B3F]"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                required
                placeholder="e.g. john@mail.com"
                className={`w-full text-white border-b-2 py-2 ${
                  isDark ? "border-white/30" : "border-[#7D5B3F]"
                } outline-none placeholder:text-white`}
              />
            </div>
            <div className="mt-6">
              <label
                className={`block mb-2 font-medium ${
                  isDark ? "text-white/30" : "text-[#7D5B3F]"
                }`}
              >
                Phone Number
              </label>
              <input
                type="text"
                placeholder="e.g. 0491 570 156"
                className={`w-full text-white border-b-2 py-2 ${
                  isDark ? "border-white/30" : "border-[#7D5B3F]"
                } outline-none placeholder:text-white`}
              />
            </div>
            <div className="mt-4">
              <label
                className={`block mb-2 font-medium ${
                  isDark ? "text-white/30" : "text-[#7D5B3F]"
                }`}
              >
                Message
              </label>

              <textarea
                rows={4}
                placeholder="Enter your message here"
                className={`w-full text-white border-b-2 py-2 ${
                  isDark ? "border-white/30" : "border-[#7D5B3F]"
                } outline-none placeholder:text-white`}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`mt-5 bg-gradient-to-l px-8 sm:px-12 py-2.5 sm:py-4 text-white font-sans-medium rounded-full ${
                isDark
                  ? "from-[#C8102E] to-[#690011]"
                  : "from-[#7D5B3F] to-[#7D5B3F]"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
