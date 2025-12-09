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
      {/* --------------------------------------------------------
         NAVBAR
      -------------------------------------------------------- */}
      <header className="w-full bg-gradient-to-r from-[#B91C1C] via-[#9B1C6C] to-[#1E3A8A] px-8 py-4 shadow-lg text-white fixed top-0 left-0 flex items-center justify-between z-20">
        <div className="flex items-center space-x-3">
          <img
            src="/images/atf-logo.png"
            className="w-10 h-10 rounded-full border-2 border-white"
            alt="ATF Logo"
          />
          <span className="font-semibold text-lg">American Telugu Federation</span>
        </div>

        <div className="flex items-center space-x-3">
          <Link to="/member" className="hover:text-yellow-300 text-sm">
            Member Portal
          </Link>

          <Link to="/admin-login" className="hover:text-yellow-300 text-sm">
            Admin Portal
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

      {/* --------------------------------------------------------
         ROUTES
      -------------------------------------------------------- */}
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

        {/* MEMBER PORTAL */}
        <Route path="/member" element={<MemberDashboard />} />
        <Route path="/member/profile" element={<MemberProfile />} />
        <Route path="/member/events" element={<MemberEvents />} />
        <Route path="/member/donations" element={<MemberDonations />} />

        {/* MEMBERSHIP */}
        <Route path="/membership" element={<Membership />} />
        <Route path="/membership/plans" element={<MembershipPlans />} />
        <Route path="/membership/join/:planId" element={<MembershipForm />} />
        <Route path="/membership/checkout/:planId" element={<Payment />} />

        {/* DONATIONS */}
        <Route path="/donate" element={<Donate />} />

        {/* PADMA */}
        <Route path="/padma" element={<PadmaChat />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ADMIN PORTAL */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/members" element={<AdminMembers />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        {/* REGULAR PAGES */}
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

        {/* POLICIES */}
        <Route path="/policies/privacy" element={<Privacy />} />
        <Route path="/policies/terms" element={<Terms />} />
        <Route path="/policies/refund" element={<Refund />} />
        <Route path="/policies/delivery" element={<Delivery />} />
        <Route path="/policies/services" element={<Products />} />
        <Route path="/policies/pricing" element={<Pricing />} />

        {/* AUTO-GENERATED UNDER-CONSTRUCTION ROUTES */}
        {EN_TILES.map((tile, i) => (
          <Route
            key={i}
            path={tile.link}
            element={<UnderConstruction title={tile.title} />}
          />
        ))}
      </Routes>

      {/* --------------------------------------------------------
         FOOTER
      -------------------------------------------------------- */}
      <footer className="bg-gray-900 text-gray-300 px-8 py-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Legal & Compliance</h3>
            <ul className="space-y-2">
              <li><Link to="/policies/privacy">Privacy Policy</Link></li>
              <li><Link to="/policies/terms">Terms & Conditions</Link></li>
              <li><Link to="/policies/refund">Refund / Cancellation Policy</Link></li>
              <li><Link to="/policies/delivery">Delivery / Shipping Policy</Link></li>
              <li><Link to="/policies/services">Products & Services Overview</Link></li>
              <li><Link to="/policies/pricing">Pricing & Fees Disclosure</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
            <p>American Telugu Federation</p>
            <p>509 Ranch Trail #113</p>
            <p>Irving, TX 75063</p>
            <p>Phone: 972-268-5007</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Newsletter</h3>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-3 py-2 w-full rounded-l-md text-gray-800" />
              <button className="bg-yellow-400 px-4 rounded-r-md text-gray-900 font-semibold">Subscribe</button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © 2025 American Telugu Federation | All Rights Reserved
        </div>
      </footer>

      {/* --------------------------------------------------------
         PADMA MODAL
      -------------------------------------------------------- */}
      {padmaOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl max-w-lg w-full relative">
            <button className="absolute top-2 right-3 text-xl" onClick={() => setPadmaOpen(false)}>
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">PADMA Assistant</h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              PADMA is a fully autonomous AI assistant proudly built by Lotus Cloud.
              It performs end-to-end operations without human intervention:
            </p>

            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Intelligent search & knowledge retrieval</li>
              <li>Automated member support</li>
              <li>Event & membership processing</li>
              <li>Admin workflow automation</li>
              <li>AI-powered governance & reporting</li>
            </ul>
          </div>
        </div>
      )}

      {/* --------------------------------------------------------
         FLOATING BUTTONS
      -------------------------------------------------------- */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">

        {/* PADMA */}
        <button
          onClick={() => setPadmaOpen(true)}
          className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-xl"
        >
          💬
        </button>

        {/* THEME TOGGLE */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center ${
            theme === "dark"
              ? "bg-yellow-400 text-[#1E3A8A]"
              : "bg-[#1E3A8A] text-yellow-400"
          }`}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* SEARCH */}
        <button
          onClick={() => setSearchOpen(true)}
          className="w-12 h-12 rounded-full bg-[#B91C1C] text-white flex items-center justify-center shadow-xl"
        >
          🔍
        </button>

      </div>

      {/* --------------------------------------------------------
         SEARCH MODAL
      -------------------------------------------------------- */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-11/12 max-w-md relative">
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setSearchOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-center text-[#1E3A8A] mb-4">
              Search ATF Portal
            </h2>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type to search..."
              className="w-full px-4 py-2 border rounded-md text-gray-800"
            />

            <div className="mt-4 max-h-60 overflow-y-auto space-y-2">
              {t.tiles
                .filter((tile) =>
                  tile.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((tile, i) => (
                  <Link
                    key={i}
                    to={tile.link}
                    onClick={() => setSearchOpen(false)}
                    className="block p-2 rounded-md hover:bg-yellow-100"
                  >
                    {tile.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
