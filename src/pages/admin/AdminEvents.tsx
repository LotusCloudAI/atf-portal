import React from "react";
import BackHome from "../../components/BackHome";

export default function AdminEvents() {
  return (
    <>
      <BackHome />

      <div className="max-w-4xl mx-auto px-6 py-10">

        <h1 className="text-2xl font-bold text-[#B91C1C]">Event Management</h1>
        <p className="text-gray-700 mt-2">Create and manage ATF events.</p>

        <div className="mt-6 space-y-4">

          <button className="px-6 py-3 bg-[#1E3A8A] text-white rounded-xl shadow hover:bg-[#0b2458]">
            + Create New Event
          </button>

          <div className="p-4 bg-gray-100 rounded-xl">
            <p className="text-gray-700">Event listing UI will go here.</p>
          </div>

        </div>

      </div>
    </>
  );
}
