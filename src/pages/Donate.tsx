import React from "react";
import BackHome from "../components/BackHome";

export default function Donate() {
  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#B91C1C] mb-6">Donate to ATF</h1>

        <p className="text-gray-700 mb-4">
          Your contribution helps ATF support youth programs, women empowerment
          initiatives, cultural events, community development, and emergency
          assistance for Telugu families in the USA.
        </p>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-gray-800">
            ATF is committed to transparency. Every donation is used only for
            approved community initiatives.
          </p>
        </div>

        <button className="px-6 py-3 bg-[#B91C1C] text-white rounded-xl shadow hover:bg-[#891414]">
          Proceed to Donate
        </button>
      </div>
    </>
  );
}
