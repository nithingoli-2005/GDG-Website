import React from "react";
import { ArrowRight, Heart } from "lucide-react";

import insta1 from "../assets/insta1.jpg";
import insta2 from "../assets/insta2.jpg";
import insta3 from "../assets/insta3.jpg";

const posts = [
  {
    id: 1,
    image: insta1,
    title: "HacktoberFest 2025",
    description:
      "Hacktoberfest 2025 is here to set the open-source world ablaze.A global fest where coders create, collaborate, and conquer.",
    tags: ["#TECH", "#CODING", "#HACKTOBERFEST"],
    link: "https://www.instagram.com/p/DPtTn-1iTul/?igsh=MWwxZ2J0c3RrN3l1NA==",
  },
  {
    id: 2,
    image: insta2,
    title: "Google Cloud Study Jams",
    description:
      "Get ready for Google Cloud Study Jams! This October, dive into a 30-day FREE campaign to master Google Cloud Platform.",
    tags: ["#TECH", "#MLRIT", "#GDGC"],
    link: "https://www.instagram.com/p/DO8RwAHiW-l/?igsh=MWU5dWp0cmxkb3B5Yg==",
  },
  {
    id: 3,
    image: insta3,
    title: "GDGC Info Session",
    description:
      "Join the GDGC Info Session @ MLRIT and become part of a global family of builders and problem-solvers!",
    tags: ["#TECH", "#MLRIT", "#GDGC"],
    link: "https://www.instagram.com/p/DO_RzGPCSGP/?igsh=OWt3dDc0Ymg5Z2Ro",
  },
];

const InstagramSection = () => {
  return (
    <section className="bg-white text-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-light tracking-[0.35em] leading-tight text-slate-800">
          INSTAGRAM
          <br />
          POSTS
        </h2>

        {/* Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PostCard = ({ post }) => {
  return (
    <article className="bg-white rounded-3xl border-5 border-dark-gray-300 shadow-[0_18px_40px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col transform transition duration-300 hover:-translate-y-2 hover:translate-x-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]">
      {/* Poster image */}
      <div className="aspect-[4/5] overflow-hidden border-b border-gray-200">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-6 pt-4 pb-6 flex flex-col gap-3 flex-1">
        {/* Title + arrow */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-lg md:text-xl leading-snug line-clamp-2">
            {post.title}
          </h3>
          <a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 hover:bg-slate-900 hover:text-white transition"
            aria-label="Open Instagram post"
          >
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Description (2 lines feel) */}
        <p className="text-sm text-slate-600 h-12 overflow-hidden">
          {post.description}
        </p>

        {/* Tags + heart */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#e8f0fe] text-[#1a73e8]"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="p-1">
            <Heart
              size={20}
              className="fill-red-500 text-red-500 drop-shadow-sm"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default InstagramSection;
