import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TEXT } from "./HomeData";
import ATFTVSection from "../components/home/ATFTVSection";

interface HomeProps {
  lang: "EN" | "TE";
  theme: "light" | "dark";
  setLang: (l: "EN" | "TE") => void;
  setTheme: (t: "light" | "dark") => void;
  setSearchOpen: (v: boolean) => void;
}

export default function Home({ lang }: HomeProps) {
  const t = TEXT[lang];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-center items-center text-center text-white px-6"
        style={{
          backgroundImage: "url(/images/hero-bg2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <motion.h1
          className="text-4xl md:text-6xl font-bold z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t.heroTitle}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {t.heroTagline}
        </motion.p>

        <motion.div className="flex flex-wrap gap-4 mt-8 z-10 justify-center">
          <Link
            to="/membership"
            className="bg-[#B91C1C] text-white px-6 py-3 rounded-2xl hover:bg-red-700 transition"
          >
            {t.becomeMember}
          </Link>

          <Link
            to="/donate"
            className="bg-[#1E3A8A] text-white px-6 py-3 rounded-2xl hover:bg-blue-900 transition"
          >
            {t.donateNow}
          </Link>
        </motion.div>
      </section>

      {/* ================= TILE GRID ================= */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {t.tiles.map((tile: any, i: number) =>
          tile.external ? (
            <a
              href={tile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="block group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                <div className="absolute bottom-0 p-4 text-white backdrop-blur-sm">
                  <h2 className="text-lg font-bold">{tile.title}</h2>
                  <p className="text-sm opacity-90">{tile.desc}</p>
                </div>
              </div>
            </a>
          ) : (
            <Link to={tile.link} key={i} className="block group">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                <div className="absolute bottom-0 p-4 text-white backdrop-blur-sm">
                  <h2 className="text-lg font-bold">{tile.title}</h2>
                  <p className="text-sm opacity-90">{tile.desc}</p>
                </div>
              </div>
            </Link>
          )
        )}
      </section>

      {/* ================= LATEST HIGHLIGHTS ================= */}
      <section className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-8">
            Latest Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition">
              <img
                src="/images/atf-convention-2026.png"
                alt="ATF Annual Convention 2026"
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h4 className="font-semibold text-lg mb-2">
                ATF Annual Convention 2026
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                America-wide Telugu cultural and leadership gathering.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition">
              <img
                src="/images/women-empowerment.png"
                alt="Women Empowerment Initiative"
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h4 className="font-semibold text-lg mb-2">
                Women Empowerment Initiative
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Supporting women leaders across ATF chapters nationwide.
              </p>
            </div>

            <Link
              to="/YouthDayCompetitions"
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition block"
            >
              <img
                src="/images/youthday-hero1.png"
                alt="ATF National Youth Day Competitions 2026"
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h4 className="font-semibold text-lg mb-2">
                ATF National Youth Day Competitions 2026
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                National youth competitions celebrating Swami Vivekananda Jayanti.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ATF VEDIC CALENDAR ================= */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-8 text-center">
            ATF Vedic Calendar & Horoscope
          </h3>

          <div className="shadow-xl rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              src="https://storage.googleapis.com/atf-calendar-preview/ATFCalender.html"
              title="ATF Calendar"
              className="w-full h-[650px] border-0"
            />
          </div>

          <div className="text-center mt-6">
            <a
              href="https://storage.googleapis.com/atf-calendar-preview/ATFCalender.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#B91C1C] text-white px-6 py-3 rounded-xl shadow hover:bg-red-700 transition"
            >
              Open Full Calendar
            </a>
          </div>
        </div>
      </section>

      {/* ================= ATF TV SECTION ================= */}
      <ATFTVSection />
    </>
  );
}