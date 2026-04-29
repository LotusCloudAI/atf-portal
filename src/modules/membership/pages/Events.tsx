import React from "react";
import BackHome from "../../../components/BackHome";

export default function MemberEvents() {
  return (
    <>
      <BackHome />

      <div className="max-w-4xl mx-auto px-6 py-10">

        <h1 className="text-2xl font-bold text-[#B91C1C]">My Events</h1>

        <div className="mt-6 bg-white shadow p-4 rounded-xl">
          <p className="text-gray-700">List of registered events will appear here.</p>
        </div>

      </div>
    </>
  );
}
