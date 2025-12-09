import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Replace these imports with your actual 10 images
import member1 from "../assets/team1.jpg";
import member2 from "../assets/team2.jpeg";
import member3 from "../assets/team3.jpg";
import member4 from "../assets/team4.jpg";
import member5 from "../assets/team5.jpg";
import member6 from "../assets/team6.jpg";
import member7 from "../assets/team7.jpg";
import member8 from "../assets/team8.jpg";
import member9 from "../assets/team9.jpg";
import member10 from "../assets/team10.jpg";

const members = [
  {
    image: member1,
    name: "Shivam Kumar",
    role: "Event Lead",
    quote:
      "Empowering innovation, fostering community, and shaping the future—one event at a time. Let's build, learn, and grow together.",
  },
  {
    image: member2,
    name: "Member Two",
    role: "Tech Lead",
    quote:
      "Building impactful solutions with code, creativity, and collaboration.",
  },
  {
    image: member3,
    name: "Member Three",
    role: "Design Lead",
    quote: "Designing experiences that feel simple, inclusive, and delightful.",
  },
  {
    image: member4,
    name: "Member Four",
    role: "ML Lead",
    quote: "Turning data into intelligent and useful experiences.",
  },
  {
    image: member5,
    name: "Member Five",
    role: "Android Lead",
    quote: "Crafting smooth mobile experiences for everyone, everywhere.",
  },
  {
    image: member6,
    name: "Member Six",
    role: "Web Lead",
    quote: "Shipping fast, responsive and reliable web applications.",
  },
  {
    image: member7,
    name: "Member Seven",
    role: "Cloud Lead",
    quote: "Scaling ideas in the cloud with reliability and security.",
  },
  {
    image: member8,
    name: "Member Eight",
    role: "Content Lead",
    quote: "Telling the story of our community—one post at a time.",
  },
  {
    image: member9,
    name: "Member Nine",
    role: "Operations Lead",
    quote: "Making sure every event runs smooth and on time.",
  },
  {
    image: member10,
    name: "Member Ten",
    role: "Community Lead",
    quote: "Bringing people together to learn, share and grow as developers.",
  },
];

const TeamHighlightCarousel = () => {
  const [index, setIndex] = useState(0);
  const current = members[index];
  const prevIndex = index === 0 ? members.length - 1 : index - 1;
  const nextIndex = index === members.length - 1 ? 0 : index + 1;
  const prevMember = members[prevIndex];
  const nextMember = members[nextIndex];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-4 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* LEFT: stacked image cards */}
        <div className="w-full lg:w-[48%] flex justify-center">
          <div className="relative w-full max-w-xl aspect-[4/3]">
            {/* back card left (previous member) */}
            <div className="absolute inset-0 rounded-[38px] bg-black/40 overflow-hidden translate-x-[-18px] translate-y-[26px] rotate-[-10deg]">
              <img
                src={prevMember.image}
                alt={prevMember.name}
                className="w-full h-full object-cover opacity-70"
              />
            </div>

            {/* back card right (next member) */}
            <div className="absolute inset-0 rounded-[38px] bg-black/40 overflow-hidden translate-x-[26px] translate-y-[30px] rotate-[8deg]">
              <img
                src={nextMember.image}
                alt={nextMember.name}
                className="w-full h-full object-cover opacity-70"
              />
            </div>

            {/* main card */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-[0_26px_70px_rgba(0,0,0,0.75)]">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: text + arrows */}
        <div className="w-full lg:w-[52%]">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {current.name}
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-300">
            {current.role}
          </p>

          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
            “{current.quote}”
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
              aria-label="Previous member"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
              aria-label="Next member"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHighlightCarousel;
