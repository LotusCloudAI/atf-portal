import React, { useState } from "react";
import panchangamData from "../data/panchangam.json";

const months = [
  { name: "January", file: "jan.png" },
  { name: "February", file: "feb.png" },
  { name: "March", file: "mar.png" },
  { name: "April", file: "apr.png" },
  { name: "May", file: "may.png" },
  { name: "June", file: "jun.png" },
  { name: "July", file: "jul.png" },
  { name: "August", file: "aug.png" },
  { name: "September", file: "sep.png" },
  { name: "October", file: "oct.png" },
  { name: "November", file: "nov.png" },
  { name: "December", file: "dec.png" },
];

const languages = ["EN", "TE", "HI"];
const locations = ["USA", "India", "Dallas", "Hyderabad"];

export default function CalendarPage() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  const today = new Date();

  const [year, setYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(
    months[today.getMonth()]
  );
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [language, setLanguage] = useState("EN");
  const [location, setLocation] = useState("USA");

  // ✅ DEFAULT DAILY (better UX)
  const [view, setView] = useState<"monthly" | "daily">("daily");

  const dateKey = `${selectedMonth.name}-${selectedDate}`;
  const data = panchangamData?.[year]?.[dateKey] || null;

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-3">
          <img
            src="/calendar/ATFLogo.png"
            alt="ATF Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#B91C1C]">
          ATF Panchangam Calendar {year}
        </h1>

        <p className="text-gray-600">
          Panchangam • Festivals • Muhurtas
        </p>
      </div>

      {/* CONTROLS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">

        {/* LANGUAGE */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded"
        >
          {languages.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>

        {/* YEAR */}
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="p-2 border rounded"
        >
          {years.map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>

        {/* LOCATION */}
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        >
          {locations.map((loc) => (
            <option key={loc}>{loc}</option>
          ))}
        </select>

        {/* DATE SELECTOR */}
        {view === "daily" && (
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(Number(e.target.value))}
            className="p-2 border rounded"
          >
            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        )}

        {/* VIEW */}
        <select
          value={view}
          onChange={(e) => setView(e.target.value as any)}
          className="p-2 border rounded"
        >
          <option value="monthly">Monthly</option>
          <option value="daily">Daily</option>
        </select>

      </div>

      {/* MONTH SELECTOR (ALWAYS VISIBLE) */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {months.map((m) => (
          <button
            key={m.name}
            onClick={() => setSelectedMonth(m)}
            className={`px-4 py-2 rounded-lg border ${
              selectedMonth.name === m.name
                ? "bg-[#1E3A8A] text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="bg-white p-6 rounded-xl shadow">

        {/* ✅ ALWAYS SHOW IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={`/calendar/${selectedMonth.file}`}
            alt={selectedMonth.name}
            className="max-w-full rounded-xl shadow-lg"
          />
        </div>

        {/* ✅ DAILY DATA (SEPARATE — NO CONFLICT) */}
        {view === "daily" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Daily Panchangam ({location})
            </h2>

            {data ? (
              <>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">

                  <div>
                    <p><strong>Tithi:</strong> {data.tithi?.[language]}</p>
                    <p><strong>Nakshatra:</strong> {data.nakshatra?.[language]}</p>
                    <p><strong>Yoga:</strong> {data.yoga}</p>
                    <p><strong>Karana:</strong> {data.karana}</p>
                  </div>

                  <div>
                    <p><strong>Sunrise:</strong> {data.sunrise}</p>
                    <p><strong>Sunset:</strong> {data.sunset}</p>
                  </div>

                  <div>
                    <p><strong>Rahukalam:</strong> {data.rahukalam}</p>
                    <p><strong>Yamagandam:</strong> {data.yamagandam}</p>
                    <p><strong>Gulika Kalam:</strong> {data.gulika}</p>
                  </div>

                  <div>
                    <p><strong>Abhijit:</strong> {data.abhijit}</p>
                    <p><strong>Durmuhurtham:</strong> {data.durmuhurtham}</p>
                  </div>

                </div>

                {/* FESTIVALS */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-[#B91C1C]">
                    Festivals
                  </h3>
                  <ul className="list-disc ml-5 mt-2">
                    {data.festivals?.map((f: string, i: number) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                {/* VRAT */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-[#1E3A8A]">
                    Vrat & Upavas
                  </h3>
                  <ul className="list-disc ml-5 mt-2">
                    {data.vrat?.map((v: string, i: number) => (
                      <li key={i}>{v}</li>
                    ))}
                  </ul>
                </div>

                {/* MUHURTAS */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-green-700">
                    Muhurtas
                  </h3>
                  <ul className="list-disc ml-5 mt-2">
                    {data.muhurta?.map((m: string, i: number) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>

              </>
            ) : (
              <p className="text-red-500">
                No Panchangam data available for this date.
              </p>
            )}
          </div>
        )}

      </div>

    </div>
  );
}