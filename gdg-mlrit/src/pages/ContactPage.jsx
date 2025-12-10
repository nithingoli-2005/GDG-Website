import React from "react";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import { FiSend } from "react-icons/fi";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS / backend here later
    console.log("Form submitted");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#050505] to-[#141414] text-white relative overflow-hidden">
        <Navbar />
        {/* main container */}
        <main className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-24 flex justify-center">
          {/* contact card */}
          <div
            className="relative w-full max-w-3xl rounded-[32px] bg-[#0d0d0d] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] px-6 md:px-10 py-10 md:py-12"
            style={{ borderRadius: "32px 8px 32px 32px" }}
          >
            {/* Heading */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#d5d7e5]">
                Get In Touch
              </h1>
              <p className="mt-4 text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
                Have a question or want to collaborate? Fill out the form below
                and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm md:text-base text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-[#8ab4f8]"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-200"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm md:text-base text-gray-100 placeholder:text-gray-500 focus:outline-none focus:border-[#8ab4f8]"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-gray-200"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Share your thoughts..."
                  className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm md:text-base text-gray-100 placeholder:text-gray-500 resize-none focus:outline-none focus:border-[#8ab4f8]"
                  required
                />
              </div>

              {/* Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-xl bg-white text-black px-6 md:px-8 py-3 text-sm md:text-base font-semibold shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:bg-gray-100 transition"
                >
                  <span>Send Message</span>
                  <FiSend className="text-lg" />
                </button>
              </div>
            </form>
          </div>
        </main>

        {/* ===== Side social pills (only on large screens) ===== */}
        {/* Left side: LinkedIn + Twitter-X */}
        <div className="hidden lg:block">
          {/* Left chevron (two pills) */}
          <a
            href="https://www.linkedin.com/company/gdgcmlrit/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-16 top-1/2 -translate-y-12 origin-center -rotate-45 rounded-full bg-white/5 border border-white/10 px-12 py-5 text-base font-medium shadow-[0_18px_50px_rgba(0,0,0,0.9)] hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://chat.whatsapp.com/Le4TAk0oopgAs7vcrxSvXk"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-12 top-1/2 translate-y-12 origin-center -rotate-45 rounded-full bg-white/5 border border-white/10 px-12 py-5 text-base font-medium shadow-[0_18px_50px_rgba(0,0,0,0.9)] hover:bg-white/10 transition"
          >
            Whatsapp
          </a>

          {/* Right chevron (two pills) */}
          <a
            href="https://youtube.com/@gdgcmlrit?si=9yejXjerihbOS6Ub"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-16 top-1/2 -translate-y-12 origin-center rotate-45 rounded-full bg-white/5 border border-white/10 px-12 py-5 text-base font-medium shadow-[0_18px_50px_rgba(0,0,0,0.9)] hover:bg-white/10 transition"
          >
            Youtube
          </a>
          <a
            href="https://www.instagram.com/gdgcmlrit?igsh=bmY1cmwxYjJoYTY5"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-12 top-1/2 translate-y-12 origin-center rotate-45 rounded-full bg-white/5 border border-white/10 px-12 py-5 text-base font-medium shadow-[0_18px_50px_rgba(0,0,0,0.9)] hover:bg-white/10 transition"
          >
            Instagram
          </a>
        </div>
      </div>
      <ContactFooter />
    </>
  );
};

export default ContactPage;
