import Chapters from "./pages/Chapters";
import Events from "./pages/Events";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.css";

/* ---------- Interfaces ---------- */
interface Tile {
  title: string;
  desc: string;
  image: string;
  link: string;
}
interface LangContent {
  heroTitle: string;
  heroTagline: string;
  becomeMember: string;
  donateNow: string;
  quickLinks: string[];
  connectTitle: string;
  newsletterText: string;
  tiles: Tile[];
}

/* ---------- English & Telugu Tiles ---------- */
const EN_TILES: Tile[] = [
  {
    title: "News",
    desc: "Community updates & press releases.",
    image: "/images/news.png",
    link: "/news",
  },
  {
    title: "Events",
    desc: "Cultural festivals & gatherings.",
    image: "/images/events.png",
    link: "/events",
  },
  {
    title: "Chapters",
    desc: "Regional chapters & contacts.",
    image: "/images/chapters.png",
    link: "/chapters",
  },
  {
    title: "Programs",
    desc: "Education, youth & cultural initiatives.",
    image: "/images/programs.png",
    link: "/programs",
  },
  {
    title: "Scholarships",
    desc: "Support for bright Telugu students.",
    image: "/images/scholarships.png",
    link: "/scholarships",
  },
  {
    title: "Membership",
    desc: "Join our growing Telugu community.",
    image: "/images/membership.png",
    link: "/membership",
  },
  {
    title: "Donate",
    desc: "Support Telugu cultural & social causes.",
    image: "/images/donate.png",
    link: "/donate",
  },
  {
    title: "Media",
    desc: "Photos, videos & newsletters.",
    image: "/images/media.png",
    link: "/media",
  },
  {
    title: "Helpline",
    desc: "Support for emergencies & legal help.",
    image: "/images/helpline.png",
    link: "/helpline",
  },
  {
    title: "Careers",
    desc: "Jobs, internships & volunteering.",
    image: "/images/careers.png",
    link: "/careers",
  },
  {
    title: "Governance",
    desc: "Leadership & organizational structure.",
    image: "/images/governance.png",
    link: "/governance",
  },
  {
    title: "About ATF",
    desc: "Our mission, vision & contact info.",
    image: "/images/about.png",
    link: "/about",
  },
  {
    title: "Horoscope",
    desc: "Personal predictions & Panchangam.",
    image: "/images/horoscope.png",
    link: "/horoscope",
  },
  {
    title: "Vedic Calendar",
    desc: "Festivals & auspicious days.",
    image: "/images/calendar.png",
    link: "/calendar",
  },
  {
    title: "Jobs & Business",
    desc: "Entrepreneurship & career growth.",
    image: "/images/jobs.png",
    link: "/jobs",
  },
  {
    title: "Women Empowerment",
    desc: "Programs for women leaders.",
    image: "/images/women.png",
    link: "/women",
  },
];

const TE_TILES: Tile[] = [
  {
    title: "వార్తలు",
    desc: "తెలుగు కమ్యూనిటీ తాజా అప్‌డేట్లు.",
    image: "/images/news.png",
    link: "/news",
  },
  {
    title: "కార్యక్రమాలు",
    desc: "సాంస్కృతిక వేడుకలు మరియు సమావేశాలు.",
    image: "/images/events.png",
    link: "/events",
  },
  {
    title: "శాఖలు",
    desc: "ప్రాంతీయ శాఖలు మరియు వివరాలు.",
    image: "/images/chapters.png",
    link: "/chapters",
  },
  {
    title: "పథకాలు",
    desc: "విద్యా, యువత మరియు సాంస్కృతిక కార్యక్రమాలు.",
    image: "/images/programs.png",
    link: "/programs",
  },
  {
    title: "విద్యావేతనాలు",
    desc: "తెలుగు విద్యార్థులకు మద్దతు.",
    image: "/images/scholarships.png",
    link: "/scholarships",
  },
  {
    title: "సభ్యత్వం",
    desc: "మన తెలుగు కుటుంబంలో చేరండి.",
    image: "/images/membership.png",
    link: "/membership",
  },
  {
    title: "దానం",
    desc: "సామాజిక మరియు సాంస్కృతిక కార్యక్రమాలకు మద్దతు.",
    image: "/images/donate.png",
    link: "/donate",
  },
  {
    title: "మీడియా",
    desc: "ఫోటోలు, వీడియోలు మరియు వార్తలు.",
    image: "/images/media.png",
    link: "/media",
  },
  {
    title: "హెల్ప్‌లైన్",
    desc: "అత్యవసర మరియు సహాయక సేవలు.",
    image: "/images/helpline.png",
    link: "/helpline",
  },
  {
    title: "ఉద్యోగాలు",
    desc: "ఉద్యోగాలు, ఇంటర్న్‌షిప్స్ మరియు సేవలు.",
    image: "/images/careers.png",
    link: "/careers",
  },
  {
    title: "పాలన",
    desc: "నాయకత్వం మరియు సంస్థ నిర్మాణం.",
    image: "/images/governance.png",
    link: "/governance",
  },
  {
    title: "గురించి",
    desc: "మా లక్ష్యం, దృష్టి మరియు సంప్రదించండి.",
    image: "/images/about.png",
    link: "/about",
  },
  {
    title: "జాతకం",
    desc: "వ్యక్తిగత జాతక ఫలితాలు మరియు పంచాంగం.",
    image: "/images/horoscope.png",
    link: "/horoscope",
  },
  {
    title: "వేద క్యాలెండర్",
    desc: "పండుగలు మరియు శుభ దినాలు.",
    image: "/images/calendar.png",
    link: "/calendar",
  },
  {
    title: "ఉద్యోగాలు & వ్యాపారం",
    desc: "ఉద్యోగ మరియు వ్యాపార అవకాశాలు.",
    image: "/images/jobs.png",
    link: "/jobs",
  },
  {
    title: "మహిళా శక్తి",
    desc: "మహిళల అభివృద్ధి మరియు నాయకత్వం.",
    image: "/images/women.png",
    link: "/women",
  },
];

/* ---------- Language Content ---------- */
const TEXT: Record<"EN" | "TE", LangContent> = {
  EN: {
    heroTitle: "American Telugu Federation",
    heroTagline:
      "A unified hub for Telugu communities across America — news, events, programs, and culture.",
    becomeMember: "Become a Member",
    donateNow: "Donate",
    quickLinks: ["News", "Events", "Programs", "Membership"],
    connectTitle: "Connect with Us",
    newsletterText: "Subscribe to our Newsletter",
    tiles: EN_TILES,
  },
  TE: {
    heroTitle: "అమెరికన్ తెలుగు ఫెడరేషన్",
    heroTagline:
      "తెలుగు కమ్యూనిటీ కోసం ఐక్య వేదిక — వార్తలు, కార్యక్రమాలు, సంస్కృతి.",
    becomeMember: "సభ్యుడిగా చేరండి",
    donateNow: "దానం చేయండి",
    quickLinks: ["వార్తలు", "కార్యక్రమాలు", "పథకాలు", "సభ్యత్వం"],
    connectTitle: "మాతో కలవండి",
    newsletterText: "మా వార్తాపత్రికకు చందా ఇవ్వండి",
    tiles: TE_TILES,
  },
};

/* ---------- Under Construction Component ---------- */
function UnderConstruction({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-center px-6">
      <h1 className="text-4xl font-bold text-[#1E3A8A] dark:text-yellow-400 mb-4">
        {title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
        The {title} page is under construction.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        ATF development team is working to bring this section live soon.
      </p>
    </div>
  );
}

/* ---------- App Component ---------- */

  export default function App() {
  const [lang, setLang] = useState<"EN" | "TE">("EN");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const t = TEXT[lang];

  return (
      <div
        className={`${
          theme === "dark"
            ? "dark bg-gray-900 text-gray-100"
            : "bg-white text-gray-800"
        } min-h-screen flex flex-col transition-all`}
      >
        {/* ---------- Navbar ---------- */}
        <header className="absolute top-0 left-0 w-full z-20 bg-gradient-to-r from-[#B91C1C] via-[#9B1C6C] to-[#1E3A8A] flex items-center justify-between px-8 py-4 shadow-lg text-white">
          <div className="flex items-center space-x-3">
            <img
              src="/images/atf-logo.png"
              alt="ATF Logo"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="font-semibold text-lg">
              American Telugu Federation
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/member" className="hover:text-yellow-300 text-sm">
              Member Portal
            </Link>
            <Link to="/admin" className="hover:text-yellow-300 text-sm">
              Admin Portal
            </Link>
            <button
              onClick={() => setLang(lang === "EN" ? "TE" : "EN")}
              className="px-3 py-1 text-sm bg-yellow-400 text-black rounded-xl hover:bg-yellow-500 transition"
            >
              {lang === "EN" ? "తెలుగు" : "English"}
            </button>
            <Link
              to="/membership"
              className="px-3 py-1 bg-[#B91C1C] text-white rounded-xl hover:bg-[#991B1B] text-sm"
            >
              {t.becomeMember}
            </Link>
            <Link
              to="/donate"
              className="px-3 py-1 bg-yellow-500 text-black rounded-xl hover:bg-yellow-600 text-sm"
            >
              {t.donateNow}
            </Link>
          </div>
        </header>
        {/* ---------- Hero Section ---------- */}
        <section
          className="relative h-[100vh] flex flex-col justify-center items-center text-center text-white overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero-bg2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* 🔍 Visibility test marker */}
          <div className="absolute top-10 left-10 z-50 text-3xl font-bold text-yellow-400 bg-black/60 px-4 py-2 rounded-xl">
            ✅ ATF Portal Loaded — Hero Visible
          </div>

          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

          <motion.h1
            className="text-4xl md:text-6xl font-bold drop-shadow-lg z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {t.heroTagline}
          </motion.p>
          <motion.div
            className="flex gap-4 mt-8 flex-wrap justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Link
              to="/membership"
              className="bg-[#B91C1C] hover:bg-[#991B1B] text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition"
            >
              {t.becomeMember}
            </Link>
            <Link
              to="/donate"
              className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition"
            >
              {t.donateNow}
            </Link>
          </motion.div>
        </section>

        {/* ---------- Tile Grid ---------- */}
        <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.tiles.map((tile, i) => (
            <Link to={tile.link} key={i} className="block group">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute bottom-0 p-4 text-white backdrop-blur-sm group-hover:shadow-[0_0_20px_#FFD700] transition-all">
                  <h2 className="text-lg font-bold">{tile.title}</h2>
                  <p className="text-sm opacity-90">{tile.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* ---------- Highlights ---------- */}
        <section className="px-8 py-10 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-2xl font-bold text-[#1E3A8A] dark:text-yellow-400 mb-6">
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
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-4" />
                <h4 className="font-semibold text-lg mb-2">{headline}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Exciting updates and stories coming soon.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="bg-gray-900 text-gray-300 px-8 py-10 mt-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {t.quickLinks.map((item, i) => (
                  <li key={i} className="hover:text-yellow-400 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                {t.connectTitle}
              </h3>
              <div className="flex space-x-4 text-xl">
                <i className="fab fa-facebook hover:text-yellow-400"></i>
                <i className="fab fa-twitter hover:text-yellow-400"></i>
                <i className="fab fa-youtube hover:text-yellow-400"></i>
                <i className="fab fa-linkedin hover:text-yellow-400"></i>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                {t.newsletterText}
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
                />
                <button className="bg-yellow-400 px-4 rounded-r-md text-gray-900 font-semibold hover:bg-yellow-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            © 2025 American Telugu Federation | All Rights Reserved
          </div>
        </footer>

        {/* ---------- Floating Buttons ---------- */}
        <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50">
          <button
            onClick={() =>
              alert(
                "PADMA (Personal AI Digital Multimodal Assistant) coming soon!",
              )
            }
            className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-xl hover:bg-[#B91C1C] transition"
            title="Chat with PADMA Assistant"
          >
            💬
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl border transition ${
              theme === "dark"
                ? "bg-yellow-400 text-[#1E3A8A]"
                : "bg-[#1E3A8A] text-yellow-400"
            }`}
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setSearchOpen(true)}
            className="w-12 h-12 rounded-full bg-[#B91C1C] text-white flex items-center justify-center shadow-xl hover:bg-[#1E3A8A] transition"
            title="Search ATF Portal"
          >
            🔍
          </button>
        </div>

        {/* ---------- Search Modal ---------- */}
        {searchOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 w-11/12 max-w-md relative">
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute top-2 right-3 text-gray-500 dark:text-gray-300 text-xl hover:text-red-500"
              >
                ✕
              </button>
              <h2 className="text-2xl font-semibold text-center text-[#1E3A8A] dark:text-yellow-400 mb-4">
                Search ATF Portal
              </h2>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none text-gray-800 dark:text-gray-200 dark:bg-gray-800"
              />
              <div className="mt-4 space-y-2 max-h-60 overflow-y-auto">
                {t.tiles
                  .filter((tile) =>
                    tile.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()),
                  )
                  .map((tile, i) => (
                    <Link
                      key={i}
                      to={tile.link}
                      onClick={() => setSearchOpen(false)}
                      className="block p-2 rounded-md hover:bg-yellow-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                    >
                      {tile.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------- Routes ---------- */}
        <Routes>
          {/* Dynamic tiles rendering */}
          {EN_TILES.map((tile, i) => (
            <Route
              key={i}
              path={tile.link}
              element={<UnderConstruction title={tile.title} />}
            />
          ))}

          {/* Static pages */}
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/events" element={<Events />} />
          <Route
            path="/member"
            element={<UnderConstruction title="Member Portal" />}
          />
          <Route
            path="/admin"
            element={<UnderConstruction title="Admin Portal" />}
          />
        </Routes>
      </div>
  );
}
