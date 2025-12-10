import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/EventsFooter";
import placeholderImg from "../assets/placeholder.jpg";
import sept1 from "../assets/sept1.jpg";
import sept2 from "../assets/sept2.png";
import sept3 from "../assets/sept3.jpg";
import sept4 from "../assets/sept4.jpg";
import eventOct1 from "../assets/placeholder.jpg";
import eventOct2 from "../assets/placeholder.jpg";
import eventOct3 from "../assets/placeholder.jpg";
import eventOct4 from "../assets/placeholder.jpg";

// small helper so missing images fall back to placeholder
const EventImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.src = placeholderImg;
      }}
      className="w-full h-full object-cover rounded-[26px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
    />
  );
};

const events = [
  {
    id: 1,
    monthLabel: "Sept' 25",
    title: "Introduction Session GDG on Campus MLRIT",
    description:
      "This session introduced students to the community, opportunities, and upcoming initiatives.",
    images: [sept1, sept2, sept3, sept4],
  },
  {
    id: 2,
    monthLabel: "Oct' 25",
    title: "Google Clound Study Jams",
    description:
      "Learn the fundamentals of the Google Cloud Platform, how to run containers on it and how to use the platform for data engineering. ",
    images: [eventOct1, eventOct2, eventOct3, eventOct4],
  },
  {
    id: 3,
    monthLabel: "Coming\nSoon ...",
    title: "",
    description: "",
    images: [],
    comingSoon: true,
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Navbar />
      {/* ===== HEADER TEXT ===== */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-24 pb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Google Developer Groups Events
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed">
          The timeline encapsulates all the events organized by GDG on Campus
          MLRIT in the tenure 2025–2026.
        </p>
      </section>

      {/* ===== TIMELINE SECTION ===== */}
      <section className="timeline-container relative max-w-6xl mx-auto px-6 md:px-10 pb-24">
        {/* Vertical line background */}
        <div className="absolute left-12 md:left-20 top-0 bottom-0 w-1 bg-gray-300" />

        {/* (progress line removed) */}
        <div className="space-y-24 md:space-y-28">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative flex flex-col md:flex-row gap-10 md:gap-16"
            >
              {/* Timeline dot + month label */}
              <div className="w-full md:w-1/3 lg:w-1/4 flex md:justify-start">
                <div className="relative pl-12 md:pl-16">
                  {/* Dot */}
                  <div className="absolute left-[-6px] md:left-[-10px] top-3 w-5 h-5 rounded-full bg-white border border-gray-300 shadow-sm timeline-dot" />
                  {/* Month text */}
                  <p className="text-4xl md:text-5xl font-semibold text-gray-400 whitespace-pre-line">
                    {event.monthLabel}
                  </p>
                </div>
              </div>

              {/* Event content */}
              <div className="w-full md:flex-1">
                {!event.comingSoon ? (
                  <>
                    <h2 className="text-xl md:text-2xl font-semibold">
                      {event.title}
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
                      {event.description}
                    </p>

                    {/* Image grid */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.images.map((img, i) => (
                        <div
                          key={i}
                          className="aspect-[4/3] bg-gray-100 rounded-[26px] overflow-hidden"
                        >
                          <EventImage
                            src={img}
                            alt={`${event.title} image ${i + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-400"></h2>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OUR PAST EVENTS BLOCK ===== */}
      {/* <section className="mt-4 bg-white rounded-t-[40px] shadow-[0_-24px_60px_rgba(0,0,0,0.25)] border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.12em] text-gray-500 uppercase">
            Our Past Events
          </h2>
          <p className="mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
            GDG On Campus MLRIT is a student-led community supported by Google
            that fosters learning, collaboration, and innovation in technical
            areas among university students. These events capture our journey of
            building, learning, and growing together.
          </p>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default EventsPage;
