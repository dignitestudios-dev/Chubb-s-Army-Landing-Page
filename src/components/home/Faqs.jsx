import Image from "next/image";
import Accordion from "../common/accordion/Accordion";
import { useTheme } from "@/contexts/ThemeContext";

const Faq = () => {
  const { isDark } = useTheme();

  const faqItems = [
    {
      question: "Is the app free to use",
      answer:
        "Yes, but there will be in app purchase options and an ad-free subscription option.",
      defaultOpen: true,
    },
    {
      question: "What are missions?",
      answer:
        "Missions are fun challenges for pets and their humans. Like “operation treat snatch” and “zoomie challenges” where you can earn point and bragging rights.",
    },
    {
      question: "How does the rank system work?",
      answer:
        "Just like the real Army, your pet starts as a Private (E1). By engaging with the app; liking, sharing, posting and re-posting, you earn points to to move up through the ranks, all the way to Sargent Major (E9).",
    },
    {
      question: "Can I connect with other pet parents?",
      answer:
        "Absolutely! Our Paw to Paw Communications lets you chat with other pet parents, share stories and plan missions.",
    },
    {
      question: "What type of pets can enlist? ",
      answer:
        "Any Pet! Dogs, cats, reptiles, fish, donkeys, rabbits, snails, rats, hamsters, cows, horses, pigs, turtles, etc.",
    },
    {
      question: "Can I share both videos and photos?",
      answer:
        "Yes! Upload your pet’s best moments and their silliest faces and share them with the Army!",
    },
  ];

  return (
    <section
      id="faqs"
      className={`relative py-16 lg:py-24 px-4 md:px-8 lg:px-20 w-full ${
        isDark ? "bg-black" : "bg-white"
      } flex flex-col items-center gap-12 lg:gap-16 bg-cover bg-center`}
      style={{
        backgroundImage: isDark ? "url(/images/faqbg.webp)" : "",
      }}
    >
      <Image
        src={isDark ? "/images/logo-dark.webp" : "/images/logo.webp"}
        alt="CHUBB'S ARMY"
        width={400}
        height={400}
        className="absolute z-10 bottom-0 right-0 p-5 opacity-15 md:opacity-50"
      />

      <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 w-full ">
        <h2
          className={`font-sans-medium ${
            isDark ? "text-white" : "text-black"
          } text-center text-3xl sm:text-4xl md:text-5xl`}
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="relative z-20 w-full max-w-screen-xl flex flex-col items-center px-0 md:px-4 lg:px-8">
        <div className="w-full max-w-screen-md space-y-5">
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              title={item.question}
              content={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
