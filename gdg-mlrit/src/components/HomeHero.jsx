import React, { useEffect, useState } from "react";
import heroLogo from "../assets/gdg-hero-logo.png";
import heroPhoto from "../assets/gdg-group-photo.jpg";
import heroPhotoAlt1 from "../assets/photo2.jpg";
import heroPhotoAlt2 from "../assets/photo3.jpg";

const HomeHero = () => {
  // Simple three-slide carousel for the hero photo card
  const slides = [
    { src: heroPhoto, alt: "GDG On Campus group" },
    { src: heroPhotoAlt1, alt: "GDG community event" },
    { src: heroPhotoAlt2, alt: "GDG team collaboration" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

      {/* Colored blurry shapes in the background */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#4285F4]/15 blur-3xl -z-10" />
      <div className="pointer-events-none absolute left-40 bottom-10 h-96 w-96 rounded-full bg-[#34A853]/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute right-10 top-32 h-80 w-80 rounded-full bg-[#EA4335]/10 blur-3xl -z-10" />

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2">
        {/* Big GDG logo image */}
        <img
          src={heroLogo}
          alt="Google Developer Groups On Campus"
          className="w-full max-w-xl"
        />

        {/* Tagline text */}
        <p className="mt-10 text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-wide text-white/90">
          Empowering Tech Skills
          <br />
          Unleashing Learning and
          
          Collaboration!
        </p>
      </div>

      {/* RIGHT SIDE – CARD WITH IMAGE */}
      <div className="w-full lg:w-1/2">
        <div className="relative rounded-[32px] bg-gradient-to-b from-[#262626] to-[#3b3b3b] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.9)] px-6 md:px-10 pt-8 pb-10">

          {/* Photo */}
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              key={slides[activeIndex].src}
              src={slides[activeIndex].src}
              alt={slides[activeIndex].alt}
              className="w-full h-[320px] md:h-[360px] object-cover transition-opacity duration-500"
            />
          </div>

          {/* Tenure text */}
          <p className="mt-6 text-center text-xl md:text-2xl font-medium text-gray-100">
            Tenure 2025 - 26
          </p>

          {/* Slider dots */}
          <div className="mt-6 flex justify-end gap-2 pr-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-3 w-3 rounded-full transition ${
                  activeIndex === idx
                    ? "bg-white scale-110"
                    : "bg-slate-500/70 hover:bg-slate-300/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
