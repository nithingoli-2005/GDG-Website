import React from "react";
import vishalImg from "../assets/prasad.jpeg";
import paragImg from "../assets/kush.jpeg";
import TeamHighlightCarousel from "../components/TeamHighlightCarousel";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#050505] to-[#111111] text-white">
      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-28 md:space-y-32">
        {/* ===== TOP ROW – DR. PRASAD ===== */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Circle photo */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-b from-[#585858] to-[#303030] shadow-[0_30px_80px_rgba(0,0,0,0.7)] flex items-center justify-center">
              <div className="w-[78%] h-[78%] rounded-full overflow-hidden border-4 border-white/15 bg-black flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front w-full h-full">
                    <img
                      src={vishalImg}
                      alt="Dr. K. Sai Prasad"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flip-card-back w-full h-full rounded-full bg-black/85">
                    <span className="text-lg font-semibold text-white">
                      Dr. K. Sai Prasad
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#d7d9e3]">
              Dr. K. Sai Prasad
            </h2>
            <p className="mt-3 text-lg md:text-xl text-[#f1f3f4]/85">
              Faculty Advisor
            </p>
          </div>
        </section>

        {/* ===== BOTTOM ROW – MR. PARAG ===== */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          {/* Circle photo */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-b from-[#585858] to-[#303030] shadow-[0_30px_80px_rgba(0,0,0,0.7)] flex items-center justify-center">
              <div className="w-[78%] h-[78%] rounded-full overflow-hidden border-4 border-white/15 bg-black flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front w-full h-full">
                    <img
                      src={paragImg}
                      alt="Kushwant KR"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flip-card-back w-full h-full rounded-full bg-black/85">
                    <span className="text-lg font-semibold text-white">
                      Kushwant KR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#d7d9e3]">
              Kushwant Kumar Reddy
            </h2>
            <p className="mt-3 text-lg md:text-xl text-[#f1f3f4]/85">
              GDGC Lead
            </p>
          </div>
        </section>
        <TeamHighlightCarousel />
      </main>
    </div>
  );
};

export default AboutPage;
