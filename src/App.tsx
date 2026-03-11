import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

/* ------------------------------------------------------------------
   COMPONENTS
------------------------------------------------------------------ */
import BackHome from "./components/BackHome";

/* PADMA */
import PadmaChat from "./pages/padma/PadmaChat";

/* AUTH */
import Login from "./pages/auth/Login";
import AdminLogin from "./pages/auth/AdminLogin";

/* MEMBER PORTAL */
import MemberDashboard from "./pages/member/MemberDashboard";
import MemberProfile from "./pages/member/MemberProfile";
import MemberEvents from "./pages/member/MemberEvents";
import MemberDonations from "./pages/member/MemberDonations";

/* MEMBERSHIP */
import Membership from "./pages/Membership";
import Donate from "./pages/Donate";
import MembershipPlans from "./pages/membership/MembershipPlans";
import MembershipForm from "./pages/membership/MembershipForm";
import Payment from "./pages/membership/Payment";

/* ADMIN PORTAL */
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminMembers from "./pages/admin/AdminMembers";
import AdminSettings from "./pages/admin/AdminSettings";

/* REGULAR PAGES */
import Home from "./pages/Home";
import Chapters from "./pages/Chapters";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

/* ASTROLOGY */
import AstrologyTest from "./pages/AstrologyTest";

/* MEDIA + NEWS */
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import TV from "./pages/TV";
import MediaGallery from "./pages/media/MediaGallery";

/* POLICIES */
import Privacy from "./pages/policies/Privacy";
import Terms from "./pages/policies/Terms";
import Refund from "./pages/policies/Refund";
import Delivery from "./pages/policies/Delivery";
import Products from "./pages/policies/Products";
import Pricing from "./pages/policies/Pricing";

/* SHARED DATA */
import { TEXT, EN_TILES } from "./pages/HomeData";

import "./index.css";

/* --------------------------------------------------------
   UNDER-CONSTRUCTION PAGE
-------------------------------------------------------- */
function UnderConstruction({ title }: { title: string }) {
  return (
    <>
      <BackHome />
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4">{title}</h1>
        <p className="text-gray-700">This page is under construction.</p>
      </div>
    </>
  );
}

/* --------------------------------------------------------
   MAIN APP
-------------------------------------------------------- */
export default function App() {
  const [lang, setLang] = useState<"EN" | "TE">("EN");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [padmaOpen, setPadmaOpen] = useState(false);

  const t = TEXT[lang];

  return (
    <div
      className={`${
        theme === "dark"
          ? "dark bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      } min-h-screen`}
    >
      {/* NAVBAR */}
      <header className="w-full bg-gradient-to-r from-[#B91C1C] via-[#9B1C6C] to-[#1E3A8A] px-8 py-4 shadow-lg text-white fixed top-0 left-0 flex items-center justify-between z-20">
        <div className="flex items-center space-x-3">
          <img
            src="/images/atf-logo.png"
            className="w-10 h-10 rounded-full border-2 border-white"
            alt="ATF Logo"
          />
          <span className="font-semibold text-lg">
            American Telugu Federation
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <Link to="/member" className="hover:text-yellow-300 text-sm">
            Member Portal
          </Link>

          <Link to="/admin-login" className="hover:text-yellow-300 text-sm">
            Admin Portal
          </Link>

          <Link to="/media" className="hover:text-yellow-300 text-sm">
            ATF Media
          </Link>

          <Link to="/astrology" className="hover:text-yellow-300 text-sm">
            Astrology
          </Link>

          <button
            onClick={() => setLang(lang === "EN" ? "TE" : "EN")}
            className="px-3 py-1 text-sm bg-yellow-400 text-black rounded-xl hover:bg-yellow-500"
          >
            {lang === "EN" ? "తెలుగు" : "English"}
          </button>

          <Link
            to="/membership"
            className="px-3 py-1 bg-[#B91C1C] text-white rounded-xl"
          >
            {t.becomeMember}
          </Link>

          <Link
            to="/donate"
            className="px-3 py-1 bg-yellow-500 text-black rounded-xl"
          >
            {t.donateNow}
          </Link>
        </div>
      </header>

      <div className="pt-20" />

      {/* ROUTES */}
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              lang={lang}
              theme={theme}
              setLang={setLang}
              setTheme={setTheme}
              setSearchOpen={setSearchOpen}
            />
          }
        />

        {/* MEMBER */}
        <Route path="/member" element={<MemberDashboard />} />
        <Route path="/member/profile" element={<MemberProfile />} />
        <Route path="/member/events" element={<MemberEvents />} />
        <Route path="/member/donations" element={<MemberDonations />} />

        {/* MEMBERSHIP */}
        <Route path="/membership" element={<Membership />} />
        <Route path="/membership/plans" element={<MembershipPlans />} />
        <Route path="/membership/join/:planId" element={<MembershipForm />} />
        <Route path="/membership/checkout/:planId" element={<Payment />} />
        <Route path="/donate" element={<Donate />} />

        {/* PADMA */}
        <Route path="/padma" element={<PadmaChat />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/members" element={<AdminMembers />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        {/* REGULAR */}
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

        {/* ASTROLOGY */}
        <Route path="/astrology" element={<AstrologyTest />} />

        {/* NEWS */}
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />

        {/* MEDIA / YOUTUBE */}
        <Route path="/media" element={<MediaGallery />} />
        <Route path="/tv" element={<TV />} />

        {/* POLICIES */}
        <Route path="/policies/privacy" element={<Privacy />} />
        <Route path="/policies/terms" element={<Terms />} />
        <Route path="/policies/refund" element={<Refund />} />
        <Route path="/policies/delivery" element={<Delivery />} />
        <Route path="/policies/services" element={<Products />} />
        <Route path="/policies/pricing" element={<Pricing />} />

        {/* AUTO TILE ROUTES */}
        {EN_TILES.map((tile, i) => (
          <Route
            key={i}
            path={tile.link}
            element={<UnderConstruction title={tile.title} />}
          />
        ))}
      </Routes>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 px-8 py-10 mt-10">
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          © 2025 American Telugu Federation | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}