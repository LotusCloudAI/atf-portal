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
        className="relative h-[100vh] flex flex-col justify-center items-center text-center text-white"
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

        <motion.div className="flex gap-4 mt-8 z-10">
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
        {t.tiles.map((tile, i) => (
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
        ))}
      </section>

      {/* ================= LATEST HIGHLIGHTS ================= */}
      <section className="px-8 py-14 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-8">
            Latest Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "ATF Annual Convention 2025",
              "Women Empowerment Drive",
              "Telugu Youth Awards",
            ].map((headline, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-4" />
                <h4 className="font-semibold text-lg mb-2">{headline}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Updates coming soon.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ATF TV SECTION ================= */}
      <ATFTVSection />
    </>
  );
}